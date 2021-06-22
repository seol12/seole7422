import styled from 'styled-components';


export const ToggleWrapper = styled.div`

  position: relative;
  margin-left: 22px;
  width: 90px;
  height: 28px;
  border: 2px solid gray;
  background-color: #20232a;
  border-radius: 6px;
  z-index: 9999;

`;

export const UserPosts = styled.div`

  width: 100%;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 2px;
  
  & span {
    margin: 0 auto;      
  }
  
  & span > a {
    color: #fff;
    font-size: 12px;
    font-family: 맑은고딕, Malgun Gothic;
    opacity: 70%;
  }

  &:hover ${UserPosts} {
    & span {
      border-bottom: 2px solid white;
    }

    & span > a {
      opacity: 100%;
    }
  }

`;

