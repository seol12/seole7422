import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import zlcat from '../static/404cat.jpg';


const Igmain = styled.div`
    
    margin-top: 40px;
    display: flex;
    width: 100%;
    height: 800px;


`;

const Ercat = styled.div`

    width: 100%;
    height: 800px;
    background: url(${zlcat});
    background-size: 100% 100%;
    background-repeat: no-repeat;

`;

const MyError = ({ statusCode }) => {
  return (
    <div>
      <Igmain>
        <Ercat/>
      </Igmain>
    </div>
  );
};

MyError.propTypes = {
  statusCode: PropTypes.number,
};

MyError.defaultProps = {
  statusCode: 400,
};

MyError.getInitialProps = async (context) => {
  const statusCode = context.res ? context.res.statusCode : context.err ? context.err.statusCode : null;
  return { statusCode };
};

export default MyError;