import React,{useEffect,useCallback} from 'react';
import { Row,Col,} from 'antd';
import Link from 'next/link'
import LoginForm from '../pages/LoginForm';
import {useDispatch,useSelector} from 'react-redux';
import {  LOG_OUT_REQUEST } from '../reducers/user';
import Router from 'next/router';
import styled from 'styled-components';



const Headers = styled.div`
    
  display: flex;
  width: 100%;
  height: 70px;
  background : #20232a;

`;

const HeaderNv = styled(Row)`

  display: flex;
  width: 100%;
  margin-left: 40px;
  margin-right: 40px;
  @media only screen and (max-width: 600px) {
    margin-left: 0 auto;
    margin-right: 40px ;
  
  }
  @media only screen and (max-width: 400px) {
    margin-left: 4px;
    margin-right: 0px ;
  
  }
  @media only screen and (max-width: 420px) {
    margin-left: 4px;
    margin-right: 0px ;
  
  }

`;

const MainCat = styled(Row)`

  width: 170px;
  height: 68px;
  line-height: 40px;
  padding: 10px;
  order:1;
  flex-grow: 11;
  flex-shrink: 2;
  @media only screen and (max-width: 400px) {
    width: 200px;
    margin-left: 0 auto;
    flex-grow: 9;

  }
  @media only screen and (max-width: 420px) {
    width: 200px;
    margin-left: 0 auto;
    flex-grow: 9;

  }

`;

const LoginCat = styled(Row)`

  width: 115px;
  height: 68px;
  line-height: 40px;
  padding: 10px;
  order:2;
  flex-grow: 1;
  text-align: center;

`;

const SignupCat =  styled(Row)`

  width: 120px;
  height: 68px;
  line-height: 40px;
  padding: 10px;
  order:3;
  flex-grow: 2;
  text-align: center;

`;

const StyleshA = styled.a`
 
  color: white;
  font-size: 35px;
  font-weight: bold;

`;

const StyleshB = styled.a`

  color: white;
  font-size: 20px;
  font-weight: bold;

`;



const AppLayout = ({children}) =>{
const dispatch = useDispatch();
const {me} =useSelector(state=>state.user);


  const onLogout = useCallback(()=>{

       dispatch({
           type:LOG_OUT_REQUEST,
       })
       
       },[]);


    return(
      <div>
        <Headers>
          <HeaderNv >
            <MainCat key="home"><Link href="/"><StyleshA>Seol Cat</StyleshA></Link></MainCat>        
            {me
            ?<LoginCat key="login"><StyleshB onClick={onLogout}>Log Out</StyleshB></LoginCat> 
            :<LoginCat key="login"><Link href="/LoginForm"><StyleshB>Login</StyleshB></Link></LoginCat>}
            <SignupCat key="signup"><Link href="/signup"><StyleshB>SignUp</StyleshB></Link></SignupCat>  
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



export default AppLayout;