import React,{useState,useCallback,useEffect} from 'react';
import {ADD_COMMENT_REQUEST, } from '../reducers/post';
import {useDispatch,useSelector} from 'react-redux';
import styled from 'styled-components';


const Commentxorm = styled.form `

    width: 100%;
    height: 78px;
    border: 3px solid #e8e8e8;
    border-left: none;
    border-right: none;

`;

const Flexdiv = styled.div`

    display:flex;

`;

const Textinput = styled.textarea`

    width: 94%;
    border: none;
    padding: 10px;
    margin-left: 8px;

`;

const BlackBtn = styled.button`

    width: 64px;
    height: 40px;
    background-color: #20232a;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    font-size:14px;
    margin: 10px;
    margin-top: 16px;
    &:hover ${BlackBtn}{
      border: 2px solid white;
      opacity: 90%;
    }

`;


const CommentForm = ({post})=> {
    const [commentText,setCommentText] = useState('');
    const {me} = useSelector(state=>state.user);

    const dispatch = useDispatch();
    const {commentAdded,} = useSelector(state=>state.post);

    const onSubmitComment = useCallback((e) =>{
        e.preventDefault();
        if(!me) {
            return alert('로그인 후 사용 가능합니다')
        }
        if(!commentText || !commentText.trim()){
            return alert('내용을 기입해주세요.');
        }
       
        dispatch({
            type:ADD_COMMENT_REQUEST,
            data:{
                postId:post.id,
                content: commentText,
            }

        });
    },[me && me.id,commentText]);

    useEffect(() => {
        setCommentText('');
        }, [commentAdded ===true]);


    const onChangeCommentText = useCallback((e) => {
        setCommentText(e.target.value);
    },[]);



   
  
    
    
    return(

        <>
        <Commentxorm onSubmit={onSubmitComment}>
        <Flexdiv>
  
        <Textinput placeholder="댓글을 남겨보세요" value={commentText} onChange={onChangeCommentText}/>
      

        <BlackBtn htmlType="submit">야옹</BlackBtn>
        </Flexdiv>
        </Commentxorm>

        </>
    );

};


export default CommentForm;