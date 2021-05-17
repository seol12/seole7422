import styled from 'styled-components';
import { Avatar, Comment} from 'antd';


export const CommentWrapper = styled.li`

  width: 100%;
  display: flex;
  border-bottom: 2px solid #e8e8e8;
  list-style-type: none;
  border-collapse: collapse;
  
`;

export const CommentBody = styled(Comment)`
  
  width: 80%;
 
`;

export const NickName = styled.div`

  width: 58px;
  padding-bottom: none;

  & p {
    
    font-size: 16px;
    font-weight: bold;
    color: #000000;
    opacity: 65%;
  
  }

`;

export const AvataWrapper = styled.div`

  width: 80px;
  height: 60px;
  padding-left: 20px;
  padding-top: 4px;

`;

export const AvataContent = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background: #20232a;
  font-size: 20px;

`;

export const CreationDate = styled.div`

  color: #000000;
  opacity: 65%;

  & p {

    padding-left: 8px;
  
  }

`;

export const CommentContent = styled.p`

  width: 80%;
  color: #000000;
  opacity: 45%;
  font-size: 14px;
  padding-top: 10px;

`;

export const RemoveCommentWrapper = styled.div`
 
  width: 20%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 10px;
  padding-right: 16px;

`;

export const RemoveCommentButton = styled.button`

  width: 60px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  
  &:hover ${RemoveCommentButton} {
    
    border: 1px solid white;
    opacity: 90%;
    
  }

`;

