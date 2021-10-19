import produce from 'immer';


export const initialState = {
  mainPosts: [], 
  imagePaths: [],
  userSinglePost: null,  
  addPostErrorReason: '', 
  isAddingPost: false,
  muchPost: true,
  pendingPost: false,  
  postAdded: false, 
  isAddingComment: false,
  addCommentErrorReason: '',
  commentAdded: false,
};


export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
export const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';


export default (state = initialState, action) => {

  return produce(state, (draft) => {
    switch(action.type) {
      case UPLOAD_IMAGES_REQUEST: {
        break;
      }
      case UPLOAD_IMAGES_SUCCESS: {
        action.data.forEach((v) => {
          draft.imagePaths.push(v);
        });
        break;
      }
      case UPLOAD_IMAGES_FAILURE: {
        break;
      }
      case REMOVE_IMAGE: {
        const index = draft.imagePaths.findIndex((v, i) => { 
          return i === action.index
        });
        draft.imagePaths.splice(index, 1);
        break;
      }
      case ADD_POST_REQUEST: {
        draft.isAddingPost = true;
        draft.addingPostErrorReason = '';
        draft.postAdded = false;
        break;
      }
      case ADD_POST_SUCCESS: {
        draft.isAddingPost = false;
        draft.mainPosts.unshift(action.data);
        draft.postAdded = true;
        draft.imagePaths = [];
        break;
      }
      case ADD_POST_FAILURE: {
        draft.isAddingPost = false;
        draft.addPostErrorReason = action.error;
        break;
      }
      case ADD_COMMENT_REQUEST: {
        draft.isAddingComment = true;
        draft.addCommentErrorReason = '';
        draft.commentAdded = false;
        break;
      }
      case ADD_COMMENT_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex((v) => {
          return v.id === action.data.postId
        });
        draft.mainPosts[postIndex].Comments.push(action.data.comment);
        draft.isAddingComment = false;
        draft.commentAdded = true;
        break;
      }
      case ADD_COMMENT_FAILURE: {
        draft.isAddingComment = false;
        draft.addingPostErrorReason = action.error;
        break;
      }
      case LOAD_COMMENTS_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex((v) => {
          return v.id === action.data.postId
        });
        draft.mainPosts[postIndex].Comments = action.data.comments;
        break;
      }
      case LOAD_MAIN_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST: {
        draft.userSinglePost = null;
        draft.pendingPost = true;
        draft.mainPosts = !action.lastId ? [] : draft.mainPosts;
        draft.muchPost = action.lastId ? draft.muchPost : true;
        break;
      }
      case LOAD_MAIN_POSTS_SUCCESS: {
        draft.pendingPost = false;
        action.data.forEach((v) => {
          return draft.mainPosts.push(v);
        });
        draft.muchPost = action.data.length === 10;
        break;
      }
      case LOAD_USER_POSTS_SUCCESS: {
        action.data.forEach((v) => {
          return draft.mainPosts.push(v);
        });
        draft.hasMorePost = action.data.length === 10;
        draft.mainPosts.sort((p,c) => {
          return c.id - p.id 
        });
        break;
      }
      case LOAD_MAIN_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE: {
        break;
      }
      case LIKE_POST_REQUEST: {
        break;
      }
      case LIKE_POST_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex((v) => {
          return v.id === action.data.postId
        });
        draft.mainPosts[postIndex].Likers.unshift({ id: action.data.userId});
        break;
      }
      case LIKE_POST_FAILURE: {
        break;
      }
      case UNLIKE_POST_REQUEST: {
        break;
      }
      case UNLIKE_POST_SUCCESS: {
        const postIndex = draft.mainPosts.findIndex((v) => {
          return v.id === action.data.postId
        });
        const likeIndex = draft.mainPosts[postIndex].Likers.findIndex((v) => {
          return v.id === action.data.userId
        });
        draft.mainPosts[postIndex].Likers.splice(likeIndex, 1);
        break;
      }
      case UNLIKE_POST_FAILURE: {
        break;
      }
      
      case REMOVE_POST_REQUEST: {
        break;
      }
      case REMOVE_POST_SUCCESS: {
        const index = draft.mainPosts.findIndex((v) => {
          return v.id === action.data
        });
        draft.mainPosts.splice(index, 1);
        break;
      }
      case REMOVE_POST_FAILURE: {
        break;
      }
      case LOAD_POST_REQUEST : {
        draft.userSinglePost = null;
        break;
      }
      case LOAD_POST_SUCCESS: {
        draft.userSinglePost = action.data;
        break;
      }
      case LOAD_POST_FAILURE: {
        break;
      }
      case REMOVE_COMMENT_REQUEST: {
        break;
      }
      case REMOVE_COMMENT_SUCCESS: {
        const postindex = draft.mainPosts.findIndex((v) => {
          return v.id === action.data.postId
        });
        const coIndex = draft.mainPosts[postindex].Comments.findIndex((v) => {
          return v.id === action.data.itemxid
        });
        draft.mainPosts[postindex].Comments.splice(coIndex, 1);
        break;
      }
      case REMOVE_COMMENT_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });

};