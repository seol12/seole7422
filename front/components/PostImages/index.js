import React from 'react';
import { Slider} from './style';


const PostImages = ({ images}) => {
  
  if(images.length === 1) {
    return (
      <>
        <img src={images[0].src} />
      </>
    );
  }
  
  return (
    <>
      <div>
        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} arrows={true} accessibility={true} adaptiveHeight={true}>
          {images.map((v,i) => {
            return (
              <img key ={i} src={images[i].src}/>
            );
          })}
        </Slider>
      </div>
    </>
  );
};


export default PostImages;