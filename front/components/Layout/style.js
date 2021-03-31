import styled from 'styled-components';
import { Row} from 'antd';


export const Headers = styled.div`

    display: flex;
    width: 100%;
    height: 70px;
    background : #20232a;

`;


export const HeaderNv = styled(Row)`

    display: flex;
    width: 100%;
    margin-left: 40px;
    margin-right: 40px;

    @media only screen and (max-width: 600px) {
    
        margin-left: 0 auto;
        margin-right: 40px;
    
    }
  
    @media only screen and (max-width: 400px) {
  
        margin-left: 4px;
        margin-right: 0px;
    
    }
  
    @media only screen and (max-width: 420px) {
  
        margin-left: 4px;
        margin-right: 0px;
    
    }
`;

export const MainCat = styled(Row)`

    width: 170px;
    height: 68px;
    line-height: 40px;
    padding: 10px;
    order: 1;
    flex-grow: 11;
    flex-shrink: 2;

    @media only screen and (max-width: 400px) {
        
        width: 200px;
        margin-left: 0 auto;
        flex-grow: 9;
    
    }

    @media only screen and (max-width: 420px) {

        width: 200px;
        margin-left: 0 auto;
        flex-grow: 9;

    }

`;

export const LoginCat = styled(Row)`

    width: 115px;
    height: 68px;
    line-height: 40px;
    padding: 12px;
    order: 2;
    flex-grow: 1;
    text-align: center;

`;

export const SignupCat =  styled(Row)`

    width: 120px;
    height: 68px;
    line-height: 40px;
    padding: 12px;
    order: 3;
    flex-grow: 2;
    text-align: center;

`;

export const MainpageHL = styled.a`
 
    color: white;
    font-size: 35px;
    font-weight: bold;

    @media only screen and (max-width: 360px) {
        
        font-size: 30px;
  
    }

`;

export const LoginoutHL = styled.a`

    color: white;
    font-size: 20px;
    font-weight: bold;

`;

export const SignupHL = styled.a`

    color: white;
    font-size: 20px;
    font-weight: bold;

`;