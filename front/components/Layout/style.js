import styled from 'styled-components';


export const LayouHeader = styled.div`

  display: flex;
  width: 100%;
  height: 64px;
  background: #20232a;

`;

export const TittleWrapper = styled.div`

  width: 50%;
  padding-top: 4px;
 
  @media only screen and (max-width: 520px) {
    padding-top: 10px;
  }

`;

export const MenuBar = styled.div`

  display: flex;
  justify-content: flex-end;
  width: 50%;
  
`;

export const LoginLogoutWrapper = styled.div`

  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-top: 14px;
  padding-right: 10px;

  @media only screen and (max-width: 520px) {
    padding-top: 22px;        
  }

`;

export const EmptyBox = styled.div`

  width: 12%;
   
`;

export const SignupWrapper =  styled.div`

  width: 48%;
  display: flex;
  padding-top: 14px;

  @media only screen and (max-width: 520px) {
    padding-top: 22px;
  }

`;

export const Tittle = styled.a`
 
  color: white;
  padding-top: 2%;
  padding-left: 4%;
  font-size: 2rem;
  font-weight: bold;
    
  @media only screen and (max-width: 520px) {
    font-size: 1.75rem;
  }

`;

export const LoginLogout = styled.a`

  color: white;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 520px) {
    font-size: 1rem;
  }

`;

export const SignUp = styled.a`

  color: white;
  font-size: 20px;
  font-weight: bold;

  @media only screen and (max-width: 520px) {
    font-size: 1rem;
  }

`;
