import {Form, Input } from 'antd';
import styled from 'styled-components';

export const FlexForm = styled(Form)`

  display: flex;
  align-items: center;
  flex-direction : column;
  width: 100%;
  padding: 100px;
  height: 100%;

`;

export const Mainsignupwidth = styled.div`
  
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

export const TestDiv = styled.div`

  width: 100%;
  heiht: 70px; 

`;

export const SexyInput = styled(Input)`
  
  justify-content : center;
  width: 400px;
  height: 44px;
  padding: 10px;
  box-shadow: 1px 2px 3px 1px gray;
  @media only screen and (max-width: 400px) {
      width: 360px;
     
  }

`;


export const BlackBtn = styled.button`

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

export const Margindiv = styled.div`

  margin-top: 30px;

`;

export const Linediv = styled.div`

  width: 400px;
  margin-top: 30px;
  border-bottom: 1px solid gray;
  box-shadow: 0px 1px 1px 0px gray;

`;

export const Guidediv = styled.div`
  
  margin-top: 25px;
    & p{
      color: gray;
      font-weight: bold;
      font-size: 14px;
    }
  @media only screen and (max-width: 400px) {
    width: 280px;
    margin-left: 30px;
   
  }
  @media only screen and (max-width: 420px) {
    width: 280px;
    margin-left: 30px;
    
  }

`;

export const SingupError = styled.div`

  color: red;
  margin-top: 25px;

`;