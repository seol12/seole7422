import React, { useCallback, useState, useEffect } from 'react';
import {Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';
import styled from 'styled-components';
import Link from 'next/link';


const FlexForm = styled(Form)`

  display: flex;
  align-items: center;
  flex-direction : column;
  width: 100%;
  padding: 100px;
  height: 100%;

`;

const Mainsignupwidth = styled.div`
  
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

const TestDiv = styled.div`

  width: 100%;
  heiht: 70px; 

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

  margin-top: 30px;

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
    width: 280px;
     
  }
  @media only screen and (max-width: 420px) {
    width: 280px;
    
  }

`;

const SingupError = styled.div`

  color: red;
  margin-top: 25px;

`;

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);


  useEffect(() => {
    if (me) {
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    Router.push('/LoginForm');
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
   
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        userId: id,
        password,
        nickname: nick,
      },
    });   
    
  }, [id, nick, password, passwordCheck,]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);



  if(me){
    return null;
    
  }
  return (
    <>
      <FlexForm onSubmit={onSubmit} >
        
        
        <div>
        <Mainsignupwidth><p>회원가입</p></Mainsignupwidth>
        <TestDiv>
          
          <SexyInput name="user-id" placeholder="아이디" value={id} required onChange={onChangeId} />
        
        </TestDiv>
        </div>
        
        
        <div>
        <br/>
        <TestDiv>
        <SexyInput name="user-nick" placeholder="닉네임" value={nick} required onChange={onChangeNick} />
        </TestDiv>
        </div>


        <div> 
        <br/>
        <TestDiv>
          <SexyInput name="user-password" type="password" placeholder="비밀번호" value={password} required onChange={onChangePassword} />
         </TestDiv>
        </div>



        <div>
          <br />
          <TestDiv>
          <SexyInput name="user-password-check" placeholder="비밀번호 체크" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {passwordError && <SingupError>비밀번호가 일치하지 않습니다.</SingupError>}
          </TestDiv>
        </div>

        <Margindiv>
          <BlackBtn  htmlType="submit">가입하기</BlackBtn>
        </Margindiv>
        <Linediv> 
        </Linediv>
        <Guidediv>
        <p>이미 계정이 있으신가요? <Link href="/LoginForm"><a>로그인</a></Link>을 해주세요.</p>
        </Guidediv>


      </FlexForm>
    </>
  );
};

export default Signup;