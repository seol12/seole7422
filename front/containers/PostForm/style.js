import {Form,Avatar} from 'antd';
import styled from 'styled-components';

export const Avatadiv = styled.div`

  width: 78px;
  height: 50px;
  padding: 10px;

`;

export const Avatacosu = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  background: #20232a;

`;

export const TextForm = styled.div`

  display: flex;
  width: 100%;
  height: 80px;

`;

export const TextInput = styled.textarea`

  margin-top: 10px;
  width: 100%;
  height: 70px;
  border: none;

`;

export const Xorm = styled.div`

  width: 100%;
  border: 3px solid #e8e8e8;
  height: 200px;
  border-radius: 10px;

`;

export const NickForm = styled.div`

  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  height: 52px;
  padding: 10px;

    & p{
    font-size: 20px;
    font-weight: bold;
    color:#20232a;
    }

`;

export const SxBtn = styled.div`

  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;

`;

export const BlackBtn = styled.button`

  width: 60px;
  height: 40px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size:14px;

    &:hover ${BlackBtn}{
        border: 2px solid white;
        opacity: 90%;
    }

`;

export const ImageBtn = styled.button`

  width: 40px;
  height: 40px;
  background: white;
  color: #20232a;
  border-radius: 50%; 
  border: 2px solid #20232a;
  margin-right: 10px;
    & p{
    font-size:28px;
    margin-top: -6px;
    color: #20232a;  
    }

`;

export const Removediv = styled.div`

  width: 100%;
  padding: 20px;
  padding-bottom: 0px;

`;

export const Removedav = styled.div`

  width: 100%;
  padding: 20px;
  padding-top: 10px;
  padding-left: 80px;
  padding-bottom: 10px;

`;

export const RemoveBtn = styled.button`

  width: 50px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size:14px;

`;