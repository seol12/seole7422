import styled from 'styled-components';


export const VideoWrapper = styled.div`
  
  position: relative; 
  height: 0; 
  overflow: hidden; 
  padding-bottom: 56.25%; 
  padding-top: 30px;

`;

export const Video = styled.iframe`

  position: absolute; 
  width: 100%; 
  height: 100%;
  top: 0; 
  left: 0; 
  border: none;

`;