import React, { useState, useCallback, useRef, useEffect} from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import Link from 'next/link';
import { Tooltip} from 'antd';
import { CommentWrapper, CommentHead, AvatarWrapper, AvatarContent, ContentWrapper, NicknameWrapper, 
Nickname, CreationDate, CommentBody, AvatarBorderLine, CommentBorderLine, CommentContent, 
RemoveCommentWrapper, RemoveCommentButton,} from './style';
import { REMOVE_COMMENT_REQUEST} from '../../reducers/post';
import moment from 'moment';
import { usePrevstateChanged} from '../../customhooks';
import Modal from '../../components/Modal';
import ViewUserPosts from '../../components/ViewUserPosts';
moment.locale('ko');


const CommentList = ({ comments, post}) => {
  
  const [ CommentModalon, OnToggleCommentModal] = usePrevstateChanged(false);
  const [ commentToggleon, setCommentToggleOn] = useState(false);
  const id = useSelector(state => state.user.me && state.user.me.id);
  const dispatch = useDispatch();
  const commenttoggleref = useRef();
  

  useEffect(() => {
      
    const handleClickOutside = (e) => {
      if (commentToggleon && (commenttoggleref.current && !commenttoggleref.current.contains(e.target))) {
        e.stopPropagation();
        setCommentToggleOn(false);
      }
      e.stopPropagation();
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  }, [commentToggleon]);

  const onRemoveComment = useCallback((itemId) => (e) => {
    
    e.stopPropagation();
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: {
        postId: post.id,
        itemId,
      }
    })
    OnToggleCommentModal();
          
  },[])

  const viewuserpostsToggleOn = useCallback(() => {

    setCommentToggleOn(true);  

  },[])


  return (
    <>
      <CommentWrapper>
        <CommentHead>
          <AvatarWrapper>
            <AvatarContent><p>{comments.User.nickname[0]}</p></AvatarContent>
          </AvatarWrapper>
          <ContentWrapper>
            <NicknameWrapper>
              <Nickname><p onClick={viewuserpostsToggleOn}>{comments.User.nickname}</p></Nickname>
              <Tooltip title={moment(comments.createdAt).format('YYYY.MM.DD HH:mm:ss')}>
                <CreationDate>{moment(comments.createdAt).fromNow()}</CreationDate>
              </Tooltip>
              {commentToggleon && <ViewUserPosts post={post} ref={commenttoggleref}/>}
            </NicknameWrapper>
          </ContentWrapper>
          {id && comments.User.id === id                
          ?<RemoveCommentWrapper>
            <RemoveCommentButton onClick={OnToggleCommentModal}>제거</RemoveCommentButton>
              {CommentModalon && (<Modal post={post} item={comments.id} onSub={onRemoveComment(comments.id)} onClose={OnToggleCommentModal}/>)} 
            </RemoveCommentWrapper>
          :null
          }
        </CommentHead>
        <CommentBody>
          <AvatarBorderLine/>
          <CommentBorderLine>
            <CommentContent>{comments.content}</CommentContent>
          </CommentBorderLine>
        </CommentBody>
      </CommentWrapper>          
    </>
  );
};


export default CommentList;