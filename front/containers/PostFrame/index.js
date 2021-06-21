import React, { useState, useCallback, memo, useRef, useEffect} from 'react';
import { Card} from 'antd';
import { PostWrapper, PostHead, AvataWrapper, AvataContent, NicknameWrapper, Nickname, 
CreationDate, RemovePostWrapper, RemoveCommentButton, PostBody, PostUrlWrapper, PostUrlLink, 
PostUrlButton, PhotoImages, PostFooter, LikeButtonWrapper, LikeIcon, CommentButtonWrapper, 
CommentIcon, ContainingNoData, BorderLine} from './style';
import { useSelector, useDispatch } from 'react-redux';
import { UNLIKE_POST_REQUEST, LIKE_POST_REQUEST, REMOVE_POST_REQUEST} from '../../reducers/post';
import Link from 'next/link';
import PostImages from '../../components/PostImages';
import PostContent from '../../components/PostContent';
import moment from 'moment';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import { usePrevstateChanged} from '../../customhooks';
import Modal from '../../components/Modal';
import ViewUserPosts from '../../components/ViewUserPosts';
moment.locale('ko');


const PostFrame = memo(({ post}) => {

  const [ commentFormNotOpened, CommentFormOpened] = usePrevstateChanged(false);
  const [ PostModalon, OnTogglePostModal] = usePrevstateChanged(false);
  const [ postToggleOn, setPostToggleOn] = useState(false);
  const id = useSelector(state => state.user.me && state.user.me.id);
  const dispatch = useDispatch();
  const liked = id && post.Likers && post.Likers.find((v) => {return v.id === id});
  const toggleRef = useRef();
 
  
  useEffect(() => {

    const handleClickOutside = (e) => {
      if (postToggleOn && (toggleRef.current && !toggleRef.current.contains(e.target))) {
        e.stopPropagation();
        setPostToggleOn(false);
      }
      e.stopPropagation();
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  }, [postToggleOn]);

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

  const copyClipBoard = useCallback((copyurl) => () => {

    const copytext = document.createElement('textarea');
    document.body.appendChild(copytext);
    copytext.value = copyurl;
    copytext.select();
    copytext.setSelectionRange(0, 9999);
    document.execCommand('copy');
    document.body.removeChild(copytext);
    alert('복사되었습니다!');

  },[]);

  const userPostModalonoff = useCallback(() => {
    
    setPostToggleOn(true);
  
  },[]);


  return (
    <PostWrapper>
      <PostHead>
        <AvataWrapper>
          <Link href={{ pathname: '/UserPosts', query: { id: post.User.nickname } }} as={`/UserPosts/${post.User.nickname}`}><a><AvataContent>{post.User.nickname[0]}</AvataContent></a></Link>
        </AvataWrapper>
        <NicknameWrapper>
          <Nickname><p onClick={userPostModalonoff}>{post.User.nickname}</p></Nickname>
          <CreationDate>{moment(post.createdAt).format('YYYY.MM.DD')}</CreationDate>
          {postToggleOn && <ViewUserPosts ref={toggleRef} post={post} />}
        </NicknameWrapper> 
        {id && post.UserId === id
        ?<RemovePostWrapper>
          <RemoveCommentButton onClick={OnTogglePostModal}>삭제</RemoveCommentButton>
          {PostModalon && (<Modal post={post} onSub={onRemovePost(post.id)} onClose={OnTogglePostModal}/>)}
        </RemovePostWrapper>
        :<div></div>
        }
      </PostHead>
      <BorderLine/>
      <PostBody>
        <PostUrlWrapper>
          <Link href={{ pathname: '/post', query: { id: post.id}}} as={`/post/${post.id}`}>
            <PostUrlLink>{`http://www.seolecat.com/post/${post.id}`}</PostUrlLink>
          </Link>
          <PostUrlButton onClick={copyClipBoard(`http://www.seolecat.com/post/${post.id}`)}>복사</PostUrlButton>
        </PostUrlWrapper>
        <PhotoImages cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}>
        <Card.Meta description={<PostContent postData={post.content} />} />
        </PhotoImages>
      </PostBody>
      <PostFooter>
        <LikeButtonWrapper>
          <LikeIcon type="heart" key="heart" theme={liked ?'twoTone' :'outlined'} twoToneColor="#eb2f96" onClick={onToggleLike} />
        </LikeButtonWrapper>
        <CommentButtonWrapper>
          <CommentIcon type="message" key="message" onClick={CommentFormOpened}/>
          <div></div>
        </CommentButtonWrapper>
      </PostFooter>
      {commentFormNotOpened && (
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