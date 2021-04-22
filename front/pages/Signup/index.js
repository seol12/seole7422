import React, { useCallback, useState, useEffect } from 'react';
import { SubmitForm, SignupParagraph, IdinputWrapper, IdInput, NicknameInputWrapper, NicknameInput, 
PasswordInputWrapper, PasswordInput, PasswordCheckInputWrapper, PasswordCheckInput, SignupError,
SubmitButtonWrapper, SubmitButton, DuplicateNickname, Line, LoginGuide } from './style';
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
  const { me, signUpErrorReason, signupchecked } = useSelector(state => state.user);


  useEffect(() => {
  
    if (me) {
    
      Router.push('/');
    
    }
  }, [me && me.id]);

  useEffect(() => {
    
    if (signupchecked) {
    
      Router.push('/Login');

    }

  },[signupchecked])

  const onSubmit = useCallback((e) => {
    
    e.preventDefault();
    if (password !== passwordCheck) {
      
      return setPasswordError(true);

    }
    Router.push('/Login');
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

  if(me) {

    return null;
    
  }

  return (
    <>
      <SubmitForm onSubmit={onSubmit} >
      <div>
        <SignupParagraph><p>회원가입</p></SignupParagraph>
        <IdinputWrapper> 
          <IdInput name="user-id" placeholder="아이디" value={id} maxLength="12" required onChange={onChangeId} />
        </IdinputWrapper>
      </div>
      <div>
        <br/>
        <NicknameInputWrapper>
          <NicknameInput name="user-nick" placeholder="닉네임" value={nick} maxLength="5" required onChange={onChangeNick} />
        </NicknameInputWrapper>
      </div>
      <div> 
        <br/>
        <PasswordInputWrapper>
          <PasswordInput name="user-password" type="password" placeholder="비밀번호" value={password} maxLength="12" required onChange={onChangePassword} />
        </PasswordInputWrapper>
      </div>
      <div>
        <br />
        <PasswordCheckInputWrapper>
          <PasswordCheckInput name="user-password-check" placeholder="비밀번호 체크" type="password" value={passwordCheck} maxLength="12" required onChange={onChangePasswordCheck} />
          {passwordError && <SignupError>비밀번호가 일치하지 않습니다.</SignupError>}
        </PasswordCheckInputWrapper>
      </div>
      <SubmitButtonWrapper>
          <SubmitButton htmlType="submit">가입하기</SubmitButton>
      </SubmitButtonWrapper>
      {signUpErrorReason && <DuplicateNickname>{signUpErrorReason}</DuplicateNickname>}
      <Line/> 
      <LoginGuide>
        <p>이미 계정이 있으신가요? <Link href="/Login"><a>로그인</a></Link>을 해주세요.</p>
      </LoginGuide>
      </SubmitForm>
    </>
  );
};


export default Signup;