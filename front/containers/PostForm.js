import React, { useCallback,useState, useEffect, useRef } from 'react';
import {Form,Avatar} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';
import styled from 'styled-components';


const Avatadiv = styled.div`

  width: 78px;
  height: 50px;
  padding: 10px;

`;

const Avatacosu = styled(Avatar)`

  width: 50px;
  height: 50px;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  background: #20232a;

`;

const TextForm = styled.div`

  display: flex;
  width: 100%;
  height: 80px;

`;

const TextInput = styled.textarea`

  margin-top: 10px;
  width: 100%;
  height: 70px;
  border: none;

`;

const Xorm = styled.div`

  width: 100%;
  border: 3px solid #e8e8e8;
  height: 200px;
  border-radius: 10px;

`;

const NickForm = styled.div`

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

const SxBtn = styled.div`

  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;

`;

const BlackBtn = styled.button`

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

const ImageBtn = styled.button`

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

const Removediv = styled.div`

  width: 100%;
  padding: 20px;
  padding-bottom: 0px;

`;

const Removedav = styled.div`

  width: 100%;
  padding: 20px;
  padding-top: 10px;
  padding-left: 80px;
  padding-bottom: 10px;

`;

const RemoveBtn = styled.button`

  width: 50px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size:14px;

`;


const PostForm = () =>{

    const {me} = useSelector(state=>state.user);
    const [text,setText] = useState('');
    const dispatch = useDispatch();
    const {imagePaths,postAdded} = useSelector(state=>state.post);
    const imageInput = useRef();
    
    useEffect(() => {
      if (postAdded) {
        setText('');
      }
    }, [postAdded]);

    
const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (!text || !text.trim()) {
      return alert('내용을 기입해주세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((i) => {
      formData.append('image', i);
    });
    formData.append('content', text);
    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
      }, []);


      const onChnageImage = useCallback((e) => {

        const imageFormData = new FormData();
        [].forEach.call(e.target.files, (f) => {
          imageFormData.append('image', f);
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        })
      },[]);
   
      const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
      }, [imageInput.current]);

      const onRemoveImage = useCallback( index => ()=>{
        dispatch({
          type:REMOVE_IMAGE,
          index,
        });
      },[]);

  return (

    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data"  onSubmit={onSubmitForm}>
      <Xorm>
      <NickForm><p>{me.nickname}</p></NickForm>
      <TextForm>
      <Avatadiv><Avatacosu>{me.nickname[0]}</Avatacosu></Avatadiv>
      <TextInput value={text} onChange={onChangeText} placeholder="최고의 플레이를 박제해보세요." ></TextInput>
      </TextForm>
      
      <SxBtn>
      
        <input type="file" multiple hidden ref={imageInput} onChange={onChnageImage} />
        <ImageBtn onClick={onClickImageUpload} type="button"><p>+</p></ImageBtn>
        <BlackBtn htmlType="submit">야옹</BlackBtn>
       
      </SxBtn>

      </Xorm>


      <Removediv>
      {imagePaths.map((v, i) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:3065/${v}`} style={{ width: '200px' ,margin:'10px' }} alt={v} />
            <Removedav>
              <RemoveBtn onClick={onRemoveImage(i)}>제거</RemoveBtn>
            </Removedav>
          </div>
        ))}
    
      </Removediv>
    </Form>
  );
};
     
     export default PostForm;