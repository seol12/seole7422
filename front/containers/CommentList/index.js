import React, { useState, useCallback} from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import Link from 'next/link';
import { Tooltip} from 'antd';
import { CommentWrapper, CommentBody, NickName, AvataWrapper, AvataContent, CreationDate, 
CommentContent, RemoveCommentWrapper, RemoveCommentButton,
} from './style';
import { REMOVE_COMMENT_REQUEST} from '../../reducers/post';
import moment from 'moment';
import Modal from '../../components/Modal';
moment.locale('ko');


const CommentList = ({ comments, post}) => {
  
  const [codal, setCodal] = useState(false);
  const id = useSelector(state => state.user.me && state.user.me.id);
  const dispatch = useDispatch();
  
  
  const ontogglemodal = () => {
        
    setCodal(prev => !prev);
     
  }

  const onRemoveComment = useCallback((itemId) => (e) => {
    
    e.stopPropagation();
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: {
        postId: post.id,
        itemId,
      }
    })
    setCodal(false);
          
  },[])


  return (
    <>
      <CommentWrapper>
        <CommentBody             
          author={<NickName><p>{comments.User.nickname}</p></NickName>}
          avatar={<Link href={{pathname: '/user', query: {id: comments.User.id}}}
          as={`/user/${comments.User.id}`} ><AvataWrapper><a><AvataContent>{comments.User.nickname[0]}</AvataContent></a></AvataWrapper></Link> }
          datetime={
            <>
              <Tooltip title={moment(comments.createdAt).format('YYYY.MM.DD HH:mm:ss')}>
                <CreationDate>{moment(comments.createdAt).fromNow()}</CreationDate>
              </Tooltip>
            </>
          }
          content={<CommentContent>{comments.content}</CommentContent>}
        />
        {id && comments.User.id === id                
          ?<RemoveCommentWrapper>
            <RemoveCommentButton onClick={ontogglemodal}>제거</RemoveCommentButton>
              {codal && (<Modal post={post} item={comments.id} onSub={onRemoveComment(comments.id)} onClose={ontogglemodal}/>)} 
            </RemoveCommentWrapper>
          :null
        }
      </CommentWrapper>          
    </>
  );
};


export default CommentList;