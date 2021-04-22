import React,{useEffect, useCallback, useRef} from 'react';
import PostForm from '../containers/PostForm';
import {useDispatch,useSelector} from 'react-redux';
import PostFrame from '../containers/PostFrame';
import { LOAD_MAIN_POSTS_REQUEST} from '../reducers/post';
import { SIGN_UP_CHECKED} from '../reducers/user';


const Home = () =>{
    const dispatch = useDispatch();
    const {mainPosts, pendingPost, muchPost} = useSelector(state=> state.post);
    const { me, signUpChecked} = useSelector(state => state.user);
   
    
    
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
          if (muchPost && !pendingPost) {
            const lastId = mainPosts[mainPosts.length - 1].id;
            dispatch({
              type: LOAD_MAIN_POSTS_REQUEST,
              lastId,
            });
          }
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, [muchPost, mainPosts, pendingPost]);
    
    useEffect(() => {
      
      dispatch({
        type: SIGN_UP_CHECKED
      });

    },[signUpChecked])
      
      
    return(
        <>
       <div>
        {me && <PostForm/>}
       {mainPosts.map((c)=>{
           return (
               <PostFrame key={c.id} post={c}/>
           );
       } )}
       </div>
   
        </>
    );
}


Home.getInitialProps = async (context) => {

 context.store.dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    
    });

  };

export default Home;