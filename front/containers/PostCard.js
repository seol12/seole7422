import React, { useState, useCallback, useEffect, memo,useRef } from 'react';
import {Card, Icon, Avatar, List, Comment, Tooltip} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {  LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, REMOVE_POST_REQUEST,REMOVE_COMMENT_REQUEST } from '../reducers/post';
import Link from 'next/link';
import Router from 'next/router';
import PostImages from '../components/PostImages';
import PostCardContent from '../components/PostCardContent';
import styled from 'styled-components';
import moment from 'moment';
import CommentForm from './CommentForm';
moment.locale('ko');


const Cardwapper = styled.div`
  
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 3px solid #e8e8e8;

`;


const CardHead = styled.div`

  display: flex;
  width: 100%;
  height: 80px;

`;


const Avatadiv = styled.div`

  width: 78px;
  height: 50px;
  padding: 10px;
  margin-top: 10px;

`;


const Avatacosu = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background: #20232a;
  font-size: 20px;

`;


const NickForm = styled.div`
  
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 20px;
  padding: 20px;
  padding-left: 8px;
  
  & p{
    font-size: 16px;
    font-weight: bold;
  
  }

`;


const Nicked = styled.div`

  width: 70px;
  height: 120px;
  & p{
   cursor: pointer;
  
  }  

`;


const CreatedTm = styled.div`
  
  margin-left: 6px;
  margin-top: 2px;
  font-size: 14px;

`;


const BlackBtn = styled.button`

  width: 50px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size:14px;
  
    &:hover ${BlackBtn}{
      border: 1px solid white;
      opacity: 90%;
    }

`;


const FlexBtn = styled.div`

  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 24px;
  justify-content: flex-end;
  height: 40px;

`;


const SuperCard = styled(Card)`
  
  border:none;
  margin: 0 auto;
  width: 70%;

`;


const FlexCard = styled.div`

  margin-top: 10px;
  align-items: center;
  width: 100%;

`;


const BotoomCard = styled.div`

  display: flex;
  width: 100%;
  height: 60px;

`;


const Heartdiv = styled.div`

  display: flex;
  width: 90%;

`;


const Commentdiv = styled.div`

  display: flex;
  width: 200px;
  justify-content: flex-end;

`;


const Cion = styled(Icon)`

  padding: 20px;
  font-size: 30px;

`;


const CommLI = styled.li`

  width: 100%;
  border-bottom: 2px solid #e8e8e8;
  list-style-type: none;
  border-collapse:collapse;

`;


const RuLost = styled(List)`

  width: 100%;

  & ul{
    padding-left: 0px;
    margin-bottom: 0;
  }

`;


const Nickdiv = styled.div`
  
  width: 58px;
  padding-bottom: none;
  
  & p{
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    opacity: 65%;
  }

`;


const Momentdiv = styled.div`

  color: #000000;
  opacity: 65%;
  & p{
    padding-left: 8px;
  }

`;


const Nodataempty = styled.p`

  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 0px;

`;


const Avatapro = styled.div`

  width: 80px;
  height: 60px;
  padding-left: 20px;
  padding-top: 4px;

`;


const ContentColor = styled.p`

  color: #000000;
  opacity: 45%;
  font-size: 14px;
  padding-top: 10px;

`;

const RemoveCommentdiv = styled.div`

  width: 100%;
  display:flex;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 16px;

`;




const PostCard = memo(({post}) =>{

    const [commentFormOpened,setCommentFormOpened] = useState(false);
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
    },[])

    const onRemoveComment = useCallback( (postId,itemId) => ()=>{
      dispatch({
        type:REMOVE_COMMENT_REQUEST,
         data:{
           postId,
           itemId,
         }
        })
     },[])

    const detailpage = useCallback(postId =>()=>{
      Router.push(`/post/${postId}`);
    },[])

   

return(
    <Cardwapper>
      <CardHead>
        <Avatadiv>
          <Link href={{ pathname: '/user', query: { id: post.User.id } }} as={`/user/${post.User.id}`}><a><Avatacosu>{post.User.nickname[0]}</Avatacosu></a></Link>
        </Avatadiv>
        <NickForm><Nicked><p onClick={detailpage(post.id)}>{post.User.nickname}</p></Nicked><CreatedTm> {moment(post.createdAt).format('YYYY.MM.DD.')}</CreatedTm>  </NickForm> 
    
        {id && post.UserId === id
   
        ?<FlexBtn><BlackBtn onClick={onRemovePost(post.id)}>삭제</BlackBtn></FlexBtn>
        :<div></div>
        }

    </CardHead>
      <FlexCard>
        <SuperCard cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}>
         <Card.Meta description={<PostCardContent postData={post.content} />} />
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
            <RuLost
              dataSource={post.Comments || []}
              locale={{ emptyText: <Nodataempty>댓글이 존재 하지 않습니다</Nodataempty> }} 
              renderItem={ item=>(
                <CommLI>
                  <Comment
                    author={<Nickdiv><p>{item.User.nickname}</p></Nickdiv>}
                    avatar={<Link href={{pathname: '/user', query: {id: item.User.id}}}
                    as={`/user/${item.User.id}`} ><Avatapro><a><Avatacosu>{item.User.nickname[0]}</Avatacosu></a></Avatapro></Link> }
                    datetime={
                      <>
                        <Tooltip title={moment(item.createdAt).format('YYYY.MM.DD HH:mm:ss')}>
                          <Momentdiv>{moment(item.createdAt).fromNow()}</Momentdiv></Tooltip>
                      </>}
                    content={<ContentColor>{item.content}</ContentColor>}
                  />
                        
                        {id && item.User.id === id
                        
                        ?<RemoveCommentdiv><BlackBtn onClick={onRemoveComment(post.id,item.id)}>제거</BlackBtn></RemoveCommentdiv>
                        :null
                      }
                </CommLI>
                      )}
            />
          
          </>
      )}
    </Cardwapper>
  );


});

  
export default PostCard;