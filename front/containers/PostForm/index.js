import React, { useCallback,useState, useEffect, useRef } from 'react';
import {Form,Avatar} from 'antd';
import {Avatadiv, Avatacosu, TextForm, TextInput, Xorm, NickForm, SxBtn, BlackBtn, ImageBtn, Removediv, Removedav, RemoveBtn } from './style';
import { useSelector,useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../../reducers/post';
import styled from 'styled-components';




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
            <img src={v} style={{ width: '200px' ,margin:'10px' }} alt={v} />
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