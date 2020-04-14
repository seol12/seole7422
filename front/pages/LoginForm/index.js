import React,{useState, useCallback,useEffect} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import {Form,Input,} from 'antd';
import {TestDiv, FlexForm, MainLoginwidth, SexyInput, LoginError, BlackBtn, Margindiv, Linediv, Guidediv } from './style';
import {useInput} from '../signup';
import { useDispatch,useSelector} from 'react-redux';
import {LOG_IN_REQUEST } from '../../reducers/user';

import Router from 'next/router';





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