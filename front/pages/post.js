import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST, LOAD_POST_REQUEST, LOAD_COMMENTS_REQUEST } from '../reducers/post';
import Helmet from 'react-helmet';



const Post = ({post}) => {
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
            <div>{singlePost.content}</div>
            <div>{singlePost.User.nickname}</div>
            <div>{singlePost.Images[0] && <img src={singlePost.Images[0].src}/>}</div>
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