import { Card, Icon, Avatar} from 'antd';
import styled from 'styled-components';

export const PostWrapper = styled.div`
  
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 3px solid #e8e8e8;

`;

export const PostHead = styled.div`

  display: flex;
  width: 100%;
  height: 80px;

`;

export const AvataWrapper = styled.div`

  width: 78px;
  height: 50px;
  padding: 10px;
  margin-top: 10px;

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

export const NicknameWrapper = styled.div`
  
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 20px;
  padding: 20px;
  padding-left: 8px;
  
  & p {
    
    font-size: 16px;
    font-weight: bold;
  
  }

`;

export const Nickname = styled.div`

  width: 70px;
  height: 120px;
  
  & p {
  
  cursor: pointer;
  
  }  

`;

export const CreationDate = styled.div`
  
  margin-left: 6px;
  margin-top: 2px;
  font-size: 14px;

`;

export const RemovePostWrapper = styled.div`

  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 24px;
  justify-content: flex-end;
  height: 40px;

`;

export const RemoveCommentButton = styled.button`

  width: 50px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  
  &:hover ${RemoveCommentButton}{
      
      border: 1px solid white;
      opacity: 90%;

  }

`;

export const PostBody = styled.div`

  margin-top: 10px;
  align-items: center;
  width: 100%;

`;

export const PhotoImages = styled(Card)`
  
  border: none;
  margin: 0 auto;
  width: 70%;

`;

export const PostFooter = styled.div`

  display: flex;
  width: 100%;
  height: 60px;

`;

export const LikeButtonWrapper = styled.div`

  display: flex;
  width: 90%;

`;

export const LikeIcon = styled(Icon)`

  padding: 20px;
  font-size: 30px;

`;

export const CommentButtonWrapper = styled.div`

  display: flex;
  width: 200px;
  justify-content: flex-end;

`;

export const CommentIcon = styled(Icon)`

  padding: 20px;
  font-size: 30px;

`;

export const ContainingNoData = styled.p`

  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 0px;

`;
