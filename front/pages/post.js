import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST, LOAD_POST_REQUEST, LOAD_COMMENTS_REQUEST } from '../reducers/post';
import Helmet from 'react-helmet';
import PostCard from '../containers/PostCard';


const Post = ({id}) => {
const {singlePost} =useSelector(state=>state.post);
const dispatch = useDispatch();



    return(
        <>
            <Helmet
                title={`${singlePost.User.nickname}님의글`}
                description={singlePost.content}
                meta={[{
                    name: 'description',
                    content: singlePost.content,
                },{
                    property:'og:title',
                    content: `${singlePost.User.nickname}님의 게시글`
                },{
                    property: 'og:description',
                    content: singlePost.content,
                },{
                    property: 'og:image',
                    content: singlePost.Images[0] ? singlePost.Images[0].src : 'http://seolcat.com/favicon.ico',
                },{
                    property: 'og:url',
                    content: `http://seolcat.com/post/${id}`,

                    
                }]}
            />
              <PostCard key={singlePost} post={singlePost}/>
        </>
    )
}


Post.getInitialProps = async (context)  => {

    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data:context.query.id,
    });

};


export default Post;