import React, { useState, useCallback, memo,} from 'react';
import { Card} from 'antd';
import { PostWrapper, PostHead, AvataWrapper, AvataContent, NicknameWrapper, Nickname, 
CreationDate, RemovePostWrapper, RemoveCommentButton, PostBody, PhotoImages, PostFooter, 
LikeButtonWrapper, LikeIcon, CommentButtonWrapper, CommentIcon, ContainingNoData,} from './style';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_COMMENTS_REQUEST, UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, REMOVE_POST_REQUEST} from '../../reducers/post';
import Link from 'next/link';
import PostImages from '../../components/PostImages';
import PostContent from '../../components/PostContent';
import moment from 'moment';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import { usePrevstateChanged} from '../../customhooks';
import Modal from '../../components/Modal';
moment.locale('ko');


const PostFrame = memo(({ post}) => {

  const [ commentFormOpened, setCommentFormOpened] = useState(false);
  const [ PostModalon, OnTogglePostModal] = usePrevstateChanged(false);
  const id = useSelector(state => state.user.me && state.user.me.id);
  const dispatch = useDispatch();
  const liked = id && post.Likers && post.Likers.find((v) => {return v.id === id});
 
    
  const onToggleComment = useCallback(() => {
    
    setCommentFormOpened(prev => !prev);
    if(!commentFormOpened) {
      return dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      });
    }
        
  },[]);
        
  const onToggleLike = useCallback(() => {
  
    if(!id) {
      return alert('로그인 후 사용 가능합니다.');
    }
    if(liked) { 
      return dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    }else { 
      return dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
      });
    }
  },[id, post && post.id, liked]);

   
  const onRemovePost = useCallback((userId) => () => {
  
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: userId,     
    })
    return OnTogglePostModal();
  },[]);


  return (
    <PostWrapper>
      <PostHead>
        <AvataWrapper>
          <Link href={{ pathname: '/UserPosts', query: { id: post.User.nickname } }} as={`/UserPosts/${post.User.nickname}`}><a><AvataContent>{post.User.nickname[0]}</AvataContent></a></Link>
        </AvataWrapper>
        <NicknameWrapper>
          <Link href={{ pathname: '/post', query : { id: post.id}}} as={`/post/${post.id}`} ><Nickname><p>{post.User.nickname}</p></Nickname></Link>
          <CreationDate> {moment(post.createdAt).format('YYYY.MM.DD')}</CreationDate>
        </NicknameWrapper> 
        {id && post.UserId === id
        ?<RemovePostWrapper>
          <RemoveCommentButton onClick={OnTogglePostModal}>삭제</RemoveCommentButton>
          {PostModalon && (<Modal post={post} onSub={onRemovePost(post.id)} onClose={OnTogglePostModal}/>)}
        </RemovePostWrapper>
        :<div></div>
        }
      </PostHead>
      <PostBody>
        <PhotoImages cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}>
        <Card.Meta description={<PostContent postData={post.content} />} />
        </PhotoImages>
      </PostBody>
      <PostFooter>
        <LikeButtonWrapper>
          <LikeIcon type="heart" key="heart" theme={liked ?'twoTone' :'outlined'} twoToneColor="#eb2f96" onClick={onToggleLike} />
        </LikeButtonWrapper>
        <CommentButtonWrapper>
          <CommentIcon type="message" key="message" onClick={onToggleComment}/>
          <div></div>
        </CommentButtonWrapper>
      </PostFooter>
      {commentFormOpened && (
        <>
          <CommentForm post={post}/>
          {post.Comments && post.Comments.length > 0 || ( 
            <ContainingNoData>댓글이 존재 하지 않습니다</ContainingNoData>
          )}
          {post.Comments && post.Comments.map((v,i) => {
            return (
              <>
                <CommentList key={v.id} comments={v} post={post}/>
              </>
            );
          })}
        </>
      )}
    </PostWrapper>
  );
});

  
export default PostFrame;