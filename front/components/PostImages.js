import React, { useCallback, useState } from 'react';
import Slick from 'react-slick';
import styled from 'styled-components';


const SlickSl = styled(Slick)`

  margin-bottom: 30px;

  .slick-arrow {
    
    width: 40px;
    height: 60px;
 
  }

  .slick-prev {
    
    left: -50px;
    z-index: 1;
  
  }

  .slick-prev:before,
  .slick-next:before {
    
    color: black;
    font-size: 36px;
  
  }

  .slick-next {
    
    right: -50px;
    z-index: 1;
    
  }

`;


const PostImages = ({ images }) => {
  
  if (images.length === 1) {
    return (
      <>
        <img src={images[0].src} />
      </>
    );
  }
  
  return (
    <>
    <div>
      <SlickSl dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} arrows={true} accessibility={true} adaptiveHeight={true}>
      {images.map((c,i)=>{
        return(
          <img key ={i} src={images[i].src}/>
        );
      })}
      </SlickSl>
    </div>
  
  </>
  );
};



export default PostImages;
