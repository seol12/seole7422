import styled from 'styled-components';
import {Avatar, Comment} from 'antd';

export const Cox = styled(Comment)`
  
  width: 80%;
 
`
export const Momentdiv = styled.div`

  color: #000000;
  opacity: 65%;
  & p{
    padding-left: 8px;
  }

`;


export const Nickdiv = styled.div`
  width: 58px;

  padding-bottom: none;

  & p{
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    opacity: 65%;
  }

`;


export const Avatapro = styled.div`

  width: 80px;
  height: 60px;
  padding-left: 20px;
  padding-top: 4px;

`;


export const ContentColor = styled.p`

  width: 80%;
  color: #000000;
  opacity: 45%;
  font-size: 14px;
  padding-top: 10px;

`;


export const CommLI = styled.li`

  width: 100%;
  display:flex;
  border-bottom: 2px solid #e8e8e8;
  list-style-type: none;
  border-collapse:collapse;
  

`;

export const Avatacosu = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background: #20232a;
  font-size: 20px;

`;

export const BlackBtn = styled.button`

  width: 60px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size:14px;
  
    &:hover ${BlackBtn}{
      border: 1px solid white;
      opacity: 90%;
    }

`;


export const RemoveCommentdiv = styled.div`
 
  width: 20%;
  display:flex;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 16px;

`;