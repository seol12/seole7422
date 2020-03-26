import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';


const Post = ({id}) => {
const {mainPosts} = useSelector(state=>state.post);
const dispatch = useDispatch();


return(
    <div>
    {mainPosts.map(v=>{
        return (
        <PostCard key={v.id} post={v}/>
        )
    })}
    </div>

)
}

Post.getInitialProps = async (context)  => {

    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data:context.query.id,
    });

};


export default Post;