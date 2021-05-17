import styled from 'styled-components';


export const ModalBackGround = styled.div`

  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  padding-top: -10px;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

`;

export const ModalWrapper = styled.div`

  width: 40%;
  height: 200px;

  @media only screen and (max-width: 376px) {
    
    width: 300px;
    height: 200px;

  }

  @media only screen and (max-width: 500px) {
    
    width: 300px;
    height: 200px;

  }

`;

export const ModalHead = styled.div`
  
  background: #20232a; 
  display: flex;
  width: 100%;
  height: 60px;
  border: 1px solid #20232a;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
`;

export const DomainName = styled.div`
  
  width: 340px;

  & p {

    padding: 6px;
    padding-left: 10px;
    font-size: 28px;
    color: white;  
    font-weight: bold;

  }

`;

export const ExitButtonWrapper = styled.div`
    
  display: flex;
  width: 100%;
  justify-content: flex-end;

  & button {

    border: none;
    font-size: 20px;
    padding: 10px;
    padding-top: 8px;
    padding-right: 20px;
    font-weight: bold;
    color: white;
    background: none;

  }

`;

export const ModalBody = styled.div`

  width: 100%;
  height: 120px;
  background: white;
  border: 1px solid #e8e8e8;
  border-bottom: 3px solid #e8e8e8;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

`;

export const Question = styled.div`
  
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: 2px solid #e8e8e8;
    
  & p {
  
    font-size: 20px;
    padding-top: 20px;
    font-weight: bold;
  
  }

`;

export const ButtonBar = styled.div`
  
  display: flex;
  width: 100%;
  padding-top: 10px;
  justify-content: flex-end;

`;

export const RemoveButtonWrapper = styled.div`
  
  width: 60px;
  margin-right: 10px;
  justify-content: flex-end;

`;

export const ExitButtonWrapper = styled.div`
  
  width: 60px;
  margin-right: 10px;
  justify-content: flex-end;

`;

export const RemoveButton = styled.button`

  width: 60px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  
  &:hover ${RemoveButton} {
        
    border: 1px solid white;
    opacity: 90%;

  }

`;

export const ExitButton = styled.button`

  width: 60px;
  height: 30px;
  background-color: #20232a;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  
  &:hover ${ExitButton} {
        
    border: 1px solid white;
    opacity: 90%;

  }

`;
