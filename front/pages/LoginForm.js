import React,{useState, useCallback,useEffect} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Form,Input,} from 'antd';
import {useInput} from './signup';
import { useDispatch,useSelector} from 'react-redux';
import {LOG_IN_REQUEST } from '../reducers/user';

import Router from 'next/router';


const TestDiv = styled.div`

    width: 100%;
    heiht: 70px; 

`;

const FlexForm = styled(Form)`

    display: flex;
    align-items: center;
    flex-direction : column;
    width: 100%;
    padding: 100px;
    height: 100%;

`;

const MainLoginwidth = styled.div`

    width: 100%;
    height: 70px;
    text-align: center;
    & p{
        font-size: 32px;
        font-weight: bold;
        line-height: 60px;
        color: black;
    }

`;

const SexyInput = styled(Input)`

    justify-content : center;
    width: 400px;
    height: 44px;
    padding: 10px;
    box-shadow: 1px 2px 3px 1px gray;
    @media only screen and (max-width: 400px) {
      width: 360px;
     
    }

`;

const LoginError = styled.div`
    
    color: red;
    
`;

const BlackBtn = styled.button`

    width: 100px;
    height: 40px;
    background-color: #20232a;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    &:hover ${BlackBtn}{
        border: 2px solid white;
        opacity: 90%;
    }

`;

const Margindiv = styled.div`

    margin-top: 20px;

`;

const Linediv = styled.div`

    width: 400px;
    margin-top: 30px;
    border-bottom: 1px solid gray;
    box-shadow: 0px 1px 1px 0px gray;

`;

const Guidediv = styled.div`

    margin-top: 25px;
    & p{
        color: gray;
        font-weight: bold;
        font-size: 14px;
    }
    @media only screen and (max-width: 400px) {
      width: 240px;
      margin-left: 30px;
     
    }
    @media only screen and (max-width: 420px) {
      width: 240px;
      margin-left: 30px;
     
    }

`;


const LoginForm = ()=> {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const {me} = useSelector(state=>state.user);
    const {logInErrorReason} = useSelector(state=> state.user);


    useEffect(()=>{
        if (me) {
         
            Router.push('/');
          }
          
    },[me && me.id])



    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data:{
                userId:id,
                password,
            },
        });
    },[id,password]);


    return(
    <FlexForm onSubmit={onSubmitForm}>
    <div>
        <MainLoginwidth><p>로그인</p></MainLoginwidth>
        <TestDiv>
        <SexyInput name="user-id" placeholder="아이디"  value={id} onChange={onChangeId} required />
        </TestDiv>
    </div>

    <div>
        <br/>
        <TestDiv>
        <SexyInput name="user-password" placeholder="비밀번호" value={password} onChange={onChangePassword} type="password" required/>
        </TestDiv>
    </div>
        <LoginError style={{marginTop: '15px'}}>{logInErrorReason}</LoginError>
    <Margindiv>
        <BlackBtn htmlType="submit">로그인</BlackBtn>
     
    </Margindiv>
    <Linediv>
    </Linediv>
    <Guidediv>
        <p>처음 오셨나요? <Link href="/signup"><a>회원가입</a></Link>을 해주세요.</p>
    </Guidediv>
 
    
</FlexForm>

);
};
export default LoginForm;