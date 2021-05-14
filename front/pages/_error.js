import React from 'react';
import styled from 'styled-components';
import NotFoundCat from '../static/404cat.jpg';


const ErrorCatWrapper = styled.div`
    
    margin-top: 40px;
    display: flex;
    width: 100%;
    height: 800px;


`;

const ErrorCat = styled.div`

    width: 100%;
    height: 800px;
    background: url(${NotFoundCat});
    background-size: 100% 100%;
    background-repeat: no-repeat;

`;


const MyError = ({ statusCode}) => {
  
  return (
    <div>
      <ErrorCatWrapper>
        <ErrorCat/>
      </ErrorCatWrapper>
    </div>
  );

};


MyError.getInitialProps = async (context) => {
  
  const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : null;
  return { statusCode};

};


export default MyError;