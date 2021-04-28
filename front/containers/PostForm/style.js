import { Form, Avatar} from 'antd';
import styled from 'styled-components';


export const OnSubmitPostForm = styled(Form)`

  margin: 10px 0 20px;

`;

export const InputFormWrapper = styled.div`

  width: 100%;
  border: 3px solid #e8e8e8;
  height: 200px;
  border-radius: 10px;

`;

export const NickName = styled.div`

  width: 100%;
  border-bottom: 1px solid #e8e8e8;
  height: 52px;
  padding: 10px;

  & p {
  
    font-size: 20px;
    font-weight: bold;
    color: #20232a;
  
  }

`;

export const PostInputWrapper = styled.div`

  display: flex;
  width: 100%;
  height: 80px;

`;

export const AvatarWrapper = styled.div`

  width: 78px;
  height: 50px;
  padding: 10px;

`;

export const AvatarContent = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  background: #20232a;

`;

export const PostInput = styled.textarea`

  margin-top: 10px;
  width: 100%;
  height: 70px;
  border: none;

`;

export const ButtonBar = styled.div`

  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;

`;

export const ImageUploadButton = styled.button`

  width: 40px;
  height: 40px;
  background: white;
  color: #20232a;
  border-radius: 50%; 
  border: 2px solid #20232a;
  margin-right: 10px;
    
  & p {
  
    font-size: 28px;
    margin-top: -6px;
    color: #20232a;  
  }

`;

export const SubmitButton = styled.button`

  width: 60px;
  height: 40px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 14px;

  &:hover ${SubmitButton} {
    
    border: 2px solid white;
    opacity: 90%;

  }

`;

export const UploadedImages = styled.div`

  width: 100%;
  padding: 20px;
  padding-bottom: 0px;

`;

export const PreviewImagesWrapper = styled.div`

  display: inline-block;

`;

export const PreviewImage = styled.img`

  width: 200px;
  margin: 10px;

`;

export const RemoveImageButtonWrapper = styled.div`

  width: 100%;
  padding: 20px;
  padding-top: 10px;
  padding-left: 80px;
  padding-bottom: 10px;

`;

export const RemoveImageButton = styled.button`

  width: 50px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 14px;

`;