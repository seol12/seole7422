import React, { useCallback, useState, useEffect } from 'react';
import {Form, Input } from 'antd';
import {FlexForm, Mainsignupwidth, TestDiv, SexyInput, BlackBtn, Margindiv, Linediv, Guidediv, SingupError } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useValueChanged} from '../../customhooks';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../../reducers/user';
import Link from 'next/link';


const Signup = () => {
  
  const [ passwordCheck, setPasswordCheck] = useState('');
  const [ passwordError, setPasswordError] = useState(false);
  const [ id, onChangeId] = useValueChanged('');
  const [ nick, onChangeNick] = useValueChanged('');
  const [ password, onChangePassword] = useValueChanged('');
  const dispatch = useDispatch();
  const { me} = useSelector(state => state.user);


  useEffect(() => {
    if (me) {
      Router.push('/');
    }
  }, [me && me.id]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    Router.push('/LoginForm');
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
          
          <SexyInput name="user-id" placeholder="아이디" value={id} maxLength="12" required onChange={onChangeId} />
        
        </TestDiv>
        </div>
        
        
        <div>
        <br/>
        <TestDiv>
        <SexyInput name="user-nick" placeholder="닉네임" value={nick} maxLength="5" required onChange={onChangeNick} />
        </TestDiv>
        </div>


        <div> 
        <br/>
        <TestDiv>
          <SexyInput name="user-password" type="password" placeholder="비밀번호" value={password} maxLength="12" required onChange={onChangePassword} />
         </TestDiv>
        </div>



        <div>
          <br />
          <TestDiv>
          <SexyInput name="user-password-check" placeholder="비밀번호 체크" type="password" value={passwordCheck} maxLength="12" required onChange={onChangePasswordCheck} />
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