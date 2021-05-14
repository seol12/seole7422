import React, { useCallback, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST} from '../reducers/post';
import PostFrame from '../containers/PostFrame';


const Hashtag = ({ tag}) => {

  const dispatch = useDispatch();
  const { mainPosts, hasMorePost} = useSelector(state => state.post);


  const onScroll = useCallback(() => {

    if(window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if(hasMorePost) {
        dispatch({
          type: LOAD_HASHTAG_POSTS_REQUEST,
          lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
          data: tag,
        });
      }
    }

  },[ hasMorePost, mainPosts.length]);

  useEffect(() => {

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  },[mainPosts.length]);


  return (
    <div>
      {mainPosts.map((v) => {
        return (
          <PostFrame key={v.id} post={v} />
        );
      })}
    </div>
  );
  
};


export default Hashtag;