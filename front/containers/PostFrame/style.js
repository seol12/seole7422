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
  height: 72px;
  padding: 10px;
  border-bottom: 2px solid #e8e8e8;

`;

export const AvataContent = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background: #20232a;
  font-size: 20px;
  
  &:hover ${AvataContent} {
    border: 1px solid white;
    opacity: 90%;
  }

`;

export const NicknameWrapper = styled.div`
  
  margin-top: 4px;
  display: flex;
  width: 100%;
  height: 68px;
  padding: 20px;
  padding-left: 8px;
  border-bottom: 2px solid #e8e8e8;
  
  & a {
    font-size: 16px;
    font-weight: bold;
    color: black;
    opacity: 0.65;
  }

`;

export const Nickname = styled.div`

  display: inline-block;
  padding-right: 8px;

  &:hover ${Nickname} {
    text-decoration: underline;
  }
  
`;

export const CreationDate = styled.div`
  
  margin-left: 6px;
  margin-top: 2px;
  font-size: 14px;

`;

export const RemovePostWrapper = styled.div`

  display: flex;
  width: 60%;
  padding: 20px;
  padding-right: 8px;
  justify-content: flex-end;
  height: 72px;
  border-bottom: 2px solid #e8e8e8;

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

export const PostBody = styled.div`

  margin-top: 2px;
  align-items: center;
  width: 100%;

`;

export const PostUrlWrapper = styled.div`

  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 6px;
  margin-bottom: 14px;

`;

export const PostUrlLink = styled.a`

  color: #aaa;
  font-family: verdana;
  font-size: 12px;
  padding-top: 2px;
  padding-right: 4px;

  &:hover ${PostUrlLink} {
    text-decoration: underline;
    color: #aaa;
  }

`;

export const PostUrlButton = styled.button`

  width: 40px;
  height: 20px;
  border: none;
  background-color: #20232a;
  border-radius: 20px;
  font-weight: bold;
  color: white;
  font-size: 11px;

  &:hover ${PostUrlButton} {
    border: 1px solid white;
    opacity: 90%;
  }

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

  color: #000000;
  opacity: 0.45;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 0px;

`;
