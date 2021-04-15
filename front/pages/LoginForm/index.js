import React,{ useCallback, useEffect} from 'react';
import Link from 'next/link';
import { SubmitForm, LoginParagraph, IdinputWrapper, IdInput, PasswordWrapper, PasswordInput, 
LoginError, LoginButtonWrapper, LoginButton, Line, SignupGuide} from './style';
import { useValueChanged} from '../../customhooks';
import { useDispatch, useSelector} from 'react-redux';
import { LOG_IN_REQUEST} from '../../reducers/user';
import Router from 'next/router';


const LoginForm = () => {

    const [ id, onChangeId] = useValueChanged('');
    const [ password, onChangePassword] = useValueChanged('');
    const { me} = useSelector(state => state.user);
    const { logInErrorReason} = useSelector(state => state.user);
    const dispatch = useDispatch();


    useEffect(() => {
        
        if (me) {
         
            Router.push('/');

        }
      
    },[me && me.id])

    const onSubmitForm = useCallback((e) => {
        
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                userId: id,
                password,
            },
        });
    },[id,password]);


    return (
        <SubmitForm onSubmit={onSubmitForm}>
        <div>
            <LoginParagraph><p>로그인</p></LoginParagraph>
            <IdinputWrapper>
                <IdInput name="user-id" placeholder="아이디"  value={id} onChange={onChangeId} required />
            </IdinputWrapper>
        </div>
        <div>
            <br/>
            <PasswordWrapper>
                <PasswordInput name="user-password" placeholder="비밀번호" value={password} onChange={onChangePassword} type="password" required/>
            </PasswordWrapper>
        </div>
        <LoginError>{logInErrorReason}</LoginError>
        <LoginButtonWrapper>
            <LoginButton htmlType="submit">로그인</LoginButton>
        </LoginButtonWrapper>
        <Line/>
        <SignupGuide>
            <p>처음 오셨나요? <Link href="/signup"><a>회원가입</a></Link>을 해주세요.</p>
        </SignupGuide> 
        </SubmitForm>
    );
};


export default LoginForm;