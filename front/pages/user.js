import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import PostCard from '../containers/PostCard';

const User = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {mainPosts.map(c => (
        <PostCard key={+c.id} post={c} />
      ))}
    </div>
  );
};



User.getInitialProps = async (context) => {
  const id = context.query.id
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: id,
  });
  return { id };
};

export default User;