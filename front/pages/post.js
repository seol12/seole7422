import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { LOAD_POST_REQUEST} from '../reducers/post';
import PostFrame from '../containers/PostFrame';


const Post = ({id}) => {

  const { userSinglePost} = useSelector(state => state.post);
  const dispatch = useDispatch();


  return (
    <>
      {userSinglePost && (
        <PostFrame post={userSinglePost} />
      )}
    </>
  );

}


Post.getInitialProps = async(context) => {

  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.query.id,
  });

};


export default Post;