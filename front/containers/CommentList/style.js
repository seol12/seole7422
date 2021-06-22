import styled from 'styled-components';


export const CommentWrapper = styled.li`

  width: 100%;
  border-bottom: 2px solid #e8e8e8;
  list-style-type: none;
  border-collapse: collapse;
  
`;

export const CommentHead = styled.div`

  display: flex;
  width: 100%;
  height: 30px;
  
`;

export const AvatarWrapper = styled.div`

  width: 34px;
  height: 30px;
  padding: 6px;
  padding-left: 8px;
  margin-right: 20px;

`;

export const AvatarContent = styled.div`

  width: 36px;
  height: 36px;
  position: relative;
  bottom: -8px;
  text-align: center;
  border-radius: 20px;
  font-weight: bold;
  background: #20232a;
  font-size: 14px;
  color: white;
  
  & P {
    padding: 8px; 
  }

`;

export const ContentWrapper = styled.div`

  display: flex;
  flex-wrap: wrap;
  width: 260px;
  
`;

export const NicknameWrapper = styled.div`
 
  margin-top: 4px;
  padding-left: 2px;
  cursor: pointer;

  @media only screen and (max-width: 844px) {
    width: 278px;
    padding-right: 4px;
  }

  & a {
    font-size: 14px;
    font-weight: bold;
    color: black;
    opacity: 0.65;
  }

`;

export const Nickname = styled.div`

  margin-top: 2px;
  display: inline-block;
  padding-right: 8px;
  font-size: 14px;
  font-weight: bold;
  color: black;
  opacity: 0.65;

  & p {
    margin-bottom: 2px;
  }

  &:hover ${Nickname} {
    text-decoration: underline;
  }

`;

export const CreationDate = styled.div`
  
  display: inline;
  margin-top: 3px;
  color: #000000;
  opacity: 65%;
  font-size: 12px;
  cursor: pointer;
 
`;

export const CommentBody = styled.div`

  display: flex;
  width: 100%;
  
`;

export const AvatarBorderLine = styled.div`

  width: 34px;
  margin-right: 24px;

`;

export const CommentBorderLine = styled.div`
  
  width: 70%;
  margin-top: 4px;
  word-wrap: break-word;

`;

export const CommentContent = styled.p`
  
  word-wrap: break-word;
  color: #000000;
  opacity: 45%;
  font-size: 12px;
  margin-bottom: 10px;

`;

export const RemoveCommentWrapper = styled.div`

  width: 80%;
  display: flex;
  justify-content: flex-end;
  padding: 6px;
  margin-right: 4px;
  
`;

export const RemoveCommentButton = styled.button`

  width: 40px;
  height: 20px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 11px;
  
  &:hover ${RemoveCommentButton} {
    border: 1px solid white;
    opacity: 90%;
  }

`;
