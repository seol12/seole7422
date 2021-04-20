import React, { useCallback} from 'react';
import { Row, Col} from 'antd';
import { Headers, HeaderNv, MainCat, LoginCat, SignupCat, MainpageHL, LoginoutHL, SignupHL} from './style';
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
      <Headers>
        <HeaderNv >
          <MainCat key="home"><Link href="/"><MainpageHL>Seol Cat</MainpageHL></Link></MainCat>        
          {me
          ?<LoginCat key="login"><LoginoutHL onClick={onLogout}>Log Out</LoginoutHL></LoginCat> 
          :<LoginCat key="login"><Link href="/Login"><LoginoutHL>Login</LoginoutHL></Link></LoginCat>
          }
          <SignupCat key="signup"><Link href="/signup"><SignupHL>SignUp</SignupHL></Link></SignupCat>  
        </HeaderNv>
      </Headers>
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