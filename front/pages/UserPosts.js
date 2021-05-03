import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostFrame from '../containers/PostFrame';

const UserPosts = () => {

  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);


  return (
    <div>
      {mainPosts.map(v => { 
        return (
          <PostFrame key={+v.id} post={v} />
        );
      })}
    </div>
  );
};


UserPosts.getInitialProps = async (context) => {

  const id = context.query.id
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: id,
  });
  return { id };
};


export default UserPosts;