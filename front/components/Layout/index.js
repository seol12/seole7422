import React, { useCallback} from 'react';
import { Row, Col} from 'antd';
import { LayouHeader, TittleWrapper, Tittle, MenuBar, LoginLogoutWrapper, LoginLogout, 
EmptyBox, SignupWrapper, SignUp } from './style';
import Link from 'next/link'
import { useDispatch, useSelector} from 'react-redux';
import { LOG_OUT_REQUEST} from '../../reducers/user';


const Layout = ({ children}) => {

  const dispatch = useDispatch();
  const { me} = useSelector(state => state.user);
  
  const onLogout = useCallback(() => {

    dispatch({
      type: LOG_OUT_REQUEST,
    })
        
  },[]);


  return (
    <div>
      <LayouHeader>
        <TittleWrapper key="home"><Link href="/"><Tittle>Seol Cat</Tittle></Link></TittleWrapper>
        <MenuBar>
          {me
          ?<LoginLogoutWrapper key="logout"><LoginLogout onClick={onLogout}>Log Out</LoginLogout></LoginLogoutWrapper>
          :<LoginLogoutWrapper key="login"><Link href="/Login"><LoginLogout>Login</LoginLogout></Link></LoginLogoutWrapper>
          }
          <EmptyBox/>
          <SignupWrapper key="signup"><Link href="/Signup"><SignUp>SignUp</SignUp></Link></SignupWrapper>
        </MenuBar>
      </LayouHeader>
      <Row gutter={8}>
        <Col xs={24} md={6}>
        </Col>       
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
        </Col>
      </Row>   
    </div>
  );
}


export default Layout;