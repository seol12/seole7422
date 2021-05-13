import Slick from 'react-slick';
import styled from 'styled-components';


export const Slider = styled(Slick)`

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