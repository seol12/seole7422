import React, { useCallback, useState } from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';
import {backUrl} from '../config/config';


const SlickSl = styled(Slick)`

  margin-bottom: 30px;

`;


const PostImages = ({ images }) => {
    const [showImageZoom, setShowImageZoom] =useState(false);
   
    const onZoom = useCallback(()=>{
        setShowImageZoom(true);

    },[]);

    const onClose = useCallback(()=>{
        setShowImageZoom(false);
    },[]);


  if (images.length === 1) {
    return (
      <>
        <img src={`${backUrl}/${images[0].src}`} />
      </>
    );
  }
  
  return (
    <>
    <div>

    <SlickSl dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} arrows={true} accessibility={true} adaptiveHeight={true}>
      {images.map((c,i)=>{
        return(
          <img key ={i} src={`${backUrl}/${images[i].src}`} />
        );
      })}

     
      </SlickSl>
    </div>
  
    </>
  );
};



export default PostImages;
