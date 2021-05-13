import React,{ useState, useCallback, useEffect} from 'react';
import { ADD_COMMENT_REQUEST} from '../../reducers/post';
import { useDispatch, useSelector} from 'react-redux';
import { SubmitForm, InputWrapper, CommentInput, SubmitButton} from './style';


const CommentForm = ({ post}) => {
    
  const [ commentText, setCommentText] = useState('');
  const { me} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { commentAdded} = useSelector(state => state.post);


  const onSubmitComment = useCallback((e) => {
        
    e.preventDefault();
    if(!me) {
      return alert('로그인 후 사용 가능합니다')
    }
    if(!commentText || !commentText.trim()) {
      return alert('내용을 기입해주세요.');
    }
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id,
        content: commentText,
      }
    });    
  },[ me && me.id, commentText]);

  useEffect(() => {

    setCommentText('');

  },[ commentAdded === true]);

  const onChangeCommentText = useCallback((e) => {
        
    setCommentText(e.target.value);

  },[]);


  return (
    <>
      <SubmitForm onSubmit={onSubmitComment}>
        <InputWrapper>
          <CommentInput placeholder="댓글을 남겨보세요" value={commentText} onChange={onChangeCommentText}/>
          <SubmitButton htmlType="submit">야옹</SubmitButton>
        </InputWrapper>
      </SubmitForm>
    </>
  );

};


export default CommentForm;