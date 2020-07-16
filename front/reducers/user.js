import produce from 'immer';

export const initialState = {
  isLoggingOut: false, 
  isLoggingIn: false, 
  logInErrorReason: '', 
  isSignedUp: false, 
  isSigningUp: false, 
  signUpErrorReason: '', 
  me: null, 
  userInfo: null, 
  hasMoreFollower: false,
  hasMoreFollowing: false,
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST: {
        draft.isLoggingIn = true;
        draft.logInErrorReason = '';
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.isLoggingIn = false;
        draft.logInErrorReason = '';
        draft.me = action.data;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.isLoggingIn = false;
        draft.logInErrorReason = action.reason;
        draft.me = null;
        break;
      }
      case LOG_OUT_REQUEST: {
        draft.isLoggingOut = true;
        break;
      }
      case LOG_OUT_SUCCESS: {
        draft.isLoggingOut = false;
        draft.me = null;
        break;
      }
      case SIGN_UP_REQUEST: {
        draft.isSignedUp = false;
        draft.isSigningUp = true;
        draft.signUpErrorReason = '';
        break;
      }
      case SIGN_UP_SUCCESS: {
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        break;
      }
      case SIGN_UP_FAILURE: {
        draft.isSigningUp = false;
        draft.signUpErrorReason = action.error;
        break;
      }
      case LOAD_USER_REQUEST: {
        break;
      }
      case LOAD_USER_SUCCESS: {
        if (action.me) {
          draft.me = action.data;
          break;
        }
        draft.useInfo = action.data;
        break;
      }
      case LOAD_USER_FAILURE: {
        break;
      }
      case ADD_POST_TO_ME: {
        draft.me.Posts.unshift({ id: action.data });
        break;
      }
      case REMOVE_POST_OF_ME: {
        const index = draft.me.Posts.findIndex(v => v.id === action.data);
        draft.me.Posts.splice(index, 1);
        break;
      }
      default: {
        break;
      }
    }
  });
};