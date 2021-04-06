import React, { useState, useCallback, useEffect, memo,useRef } from 'react';
import {Card, } from 'antd';
import {Cardwapper, CardHead, Avatadiv, Avatacosu, NickForm, Nicked, 
CreatedTm, BlackBtn, FlexBtn, SuperCard, FlexCard, BotoomCard, Heartdiv, Commentdiv, Cion, Nodataempty,} from './style';
import { useSelector, useDispatch } from 'react-redux';
import {  LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, REMOVE_POST_REQUEST,REMOVE_COMMENT_REQUEST } from '../../reducers/post';
import Link from 'next/link';
import Router from 'next/router';
import PostImages from '../../components/PostImages';
import PostContent from '../../components/PostContent';
import styled from 'styled-components';
import moment from 'moment';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import Modal from '../../components/Modal';
moment.locale('ko');




const PostCard = memo(({post}) =>{

    const [commentFormOpened,setCommentFormOpened] = useState(false);
    const [nodal, setNodal] = useState(false);
    const id = useSelector(state=>state.user.me && state.user.me.id);
    const dispatch = useDispatch();
    const liked = id && post.Likers && post.Likers.find(v=>v.id === id);
 
    
    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if(!commentFormOpened){
            dispatch({
                type:LOAD_COMMENTS_REQUEST,
                data:post.id,

            })
        }
        
        },[]);
        
        const postMemo = useRef(post);
  
    const onToggleLike = useCallback(() => {
        if(!id){
            return alert('로그인 후 사용 가능합니다.');
        }
        if(liked){ 
            return dispatch({
                type: UNLIKE_POST_REQUEST,
                data:post.id,
            });
        }else{ 
            dispatch({
                type: LIKE_POST_REQUEST,
                data:post.id,

            });
        }
    },[id, post && post.id, liked]);

    
    const onRemovePost = useCallback(userId => ()=>{
      dispatch({
        type:REMOVE_POST_REQUEST,
        data: userId,
        
      })
      setNodal(false);
    },[])


    const detailpage = useCallback(postId =>()=>{
      Router.push(`/post/${postId}`);
    },[])

    const modalon = () => {
        
      setNodal(true);
    }

    const modaloff = () => {
    
      setNodal(false)
    }
    

return(
    <Cardwapper>
      <CardHead>
        <Avatadiv>
        <Link href={{ pathname: '/user', query: { id: post.User.nickname } }} as={`/user/${post.User.nickname}`}><a><Avatacosu>{post.User.nickname[0]}</Avatacosu></a></Link>
        </Avatadiv>
        <NickForm><Nicked><p onClick={detailpage(post.id)}>{post.User.nickname}</p></Nicked><CreatedTm> {moment(post.createdAt).format('YYYY.MM.DD.')}</CreatedTm>  </NickForm> 
    
        {id && post.UserId === id
   
        ?<FlexBtn><BlackBtn onClick={modalon}>삭제</BlackBtn>
        {nodal && (<Modal post={post} onSub={onRemovePost(post.id)} onClose={modaloff}/>)}</FlexBtn>
        :<div></div>
        }

    </CardHead>
      <FlexCard>
        <SuperCard cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}>
         <Card.Meta description={<PostContent postData={post.content} />} />
        </SuperCard>
      </FlexCard>
      <BotoomCard>
        <Heartdiv><Cion type="heart" key="heart" theme={liked ?'twoTone' :'outlined'} twoToneColor="#eb2f96" onClick={onToggleLike} />
        </Heartdiv>
        <Commentdiv><Cion type="message" key="message" onClick={onToggleComment} /><div></div></Commentdiv>
      </BotoomCard>
      
      {commentFormOpened && (
        <>
          <CommentForm post={post}/>
          {post.Comments && post.Comments.length > 0 || ( 
            <Nodataempty>댓글이 존재 하지 않습니다</Nodataempty>) }
          {post.Comments && post.Comments.map((v,i)=>{
              return(
                  <>
                    <CommentList key={v.id} comments={v} post={post}/>
                  </>
              );
         })}
          
        </>
      )}
    </Cardwapper>
  );
});

  
export default PostCard;