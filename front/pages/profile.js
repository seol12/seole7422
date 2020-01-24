import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';


const Profile = () => {
  const {mainPosts,} =useSelector(state => state.post);
  const dispatch = useDispatch();
    

    return (
        <div>
        {mainPosts.map(c => (
          <PostCard key={+c.id} post={c} />
        ))}
          </div>
      );
    };


    Profile.getInitialProps = async (context) => {
      const state = context.store.getState();
      context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: state.user.me && state.user.me.id,
      });
      
  
    };
export default Profile;