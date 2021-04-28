import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { OnSubmitPostForm, InputFormWrapper, NickName, PostInputWrapper, AvatarWrapper, AvatarContent, 
PostInput, ButtonBar, ImageUploadButton, SubmitButton, UploadedImages, PreviewImagesWrapper, 
PreviewImage, RemoveImageButtonWrapper, RemoveImageButton } from './style';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../../reducers/post';


const PostForm = () => {

  const { me} = useSelector(state => state.user);
  const [ text, setText] = useState('');
  const dispatch = useDispatch();
  const { imagePaths, postAdded} = useSelector(state => state.post);
  const imageInput = useRef();
    

  useEffect(() => {
    
    if(postAdded) {
      setText('');
    }

  },[postAdded]);

  const onSubmitForm = useCallback((e) => {
  
    e.preventDefault();
    if(!text || !text.trim()) {
      return alert('내용을 기입해주세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((v) => {
      formData.append('image', v);
    });
    formData.append('content', text);
    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });

  },[text, imagePaths]);

  const onChangeText = useCallback((e) => {
    
    setText(e.target.value);

  },[]);

  const onChnageImage = useCallback((e) => {

    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (v) => {
      imageFormData.append('image', v);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })

  },[]);
   
  const onClickImageUpload = useCallback(() => {
  
    imageInput.current.click();
  
  },[imageInput.current]);

  const onRemoveImage = useCallback((index) => () => {
  
    dispatch({
      type:REMOVE_IMAGE,
      index,
    });

  },[]);


  return (
    <OnSubmitPostForm encType="multipart/form-data"  onSubmit={onSubmitForm}>
      <InputFormWrapper>
        <NickName><p>{me.nickname}</p></NickName>
        <PostInputWrapper>
          <AvatarWrapper>
            <AvatarContent>{me.nickname[0]}</AvatarContent>
          </AvatarWrapper>
          <PostInput value={text} onChange={onChangeText} placeholder="최고의 플레이를 박제해보세요." />
        </PostInputWrapper>
        <ButtonBar>
          <input type="file" multiple hidden ref={imageInput} onChange={onChnageImage} />
          <ImageUploadButton onClick={onClickImageUpload} type="button"><p>+</p></ImageUploadButton>
          <SubmitButton htmlType="submit">야옹</SubmitButton> 
        </ButtonBar>
      </InputFormWrapper>
      <UploadedImages>
        {imagePaths.map((v, i) => { 
          return (
            <PreviewImagesWrapper key={v}>
              <PreviewImage src={v} alt={v}/>
              <RemoveImageButtonWrapper>
                <RemoveImageButton onClick={onRemoveImage(i)}>제거</RemoveImageButton>
              </RemoveImageButtonWrapper>
            </PreviewImagesWrapper>
        )})}
      </UploadedImages>
    </OnSubmitPostForm>
  );
};
     

export default PostForm;