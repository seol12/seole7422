import {Card, Icon, Avatar, List, Comment, Tooltip} from 'antd';
import styled from 'styled-components';

export const Cardwapper = styled.div`
  
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 3px solid #e8e8e8;

`;


export const CardHead = styled.div`

  display: flex;
  width: 100%;
  height: 80px;

`;


export const Avatadiv = styled.div`

  width: 78px;
  height: 50px;
  padding: 10px;
  margin-top: 10px;

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


export const NickForm = styled.div`
  
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 20px;
  padding: 20px;
  padding-left: 8px;
  
  & p{
    font-size: 16px;
    font-weight: bold;
  
  }

`;


export const Nicked = styled.div`

  width: 70px;
  height: 120px;
  
  & p{
   cursor: pointer;
  
  }  

`;


export const CreatedTm = styled.div`
  
  margin-left: 6px;
  margin-top: 2px;
  font-size: 14px;

`;


export const BlackBtn = styled.button`

  width: 50px;
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


export const FlexBtn = styled.div`

  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 24px;
  justify-content: flex-end;
  height: 40px;

`;


export const SuperCard = styled(Card)`
  
  border:none;
  margin: 0 auto;
  width: 70%;

`;


export const FlexCard = styled.div`

  margin-top: 10px;
  align-items: center;
  width: 100%;

`;


export const BotoomCard = styled.div`

  display: flex;
  width: 100%;
  height: 60px;

`;


export const Heartdiv = styled.div`

  display: flex;
  width: 90%;

`;


export const Commentdiv = styled.div`

  display: flex;
  width: 200px;
  justify-content: flex-end;

`;


export const Cion = styled(Icon)`

  padding: 20px;
  font-size: 30px;

`;


export const CommLI = styled.li`

  width: 100%;
  display:flex;
  border-bottom: 2px solid #e8e8e8;
  list-style-type: none;
  border-collapse:collapse;

`;


export const RuLost = styled(List)`

  width: 100%;

  & ul{
    padding-left: 0px;
    margin-bottom: 0;
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


export const Momentdiv = styled.div`

  color: #000000;
  opacity: 65%;

  & p{
    padding-left: 8px;
  }

`;


export const Nodataempty = styled.p`

  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 0px;

`;


export const Avatapro = styled.div`

  width: 80px;
  height: 60px;
  padding-left: 20px;
  padding-top: 4px;

`;


export const ContentColor = styled.p`

  color: #000000;
  opacity: 45%;
  font-size: 14px;
  padding-top: 10px;

`;

export const RemoveCommentdiv = styled.div`

  width: 100%;
  display:flex;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 16px;

`;