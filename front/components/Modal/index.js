import React from 'react';
import { ModalBackGround, ModalWrapper, ModalHead, DomainName, Exit, ModalBody, 
Question, ButtonBar, RemoveButtonWrapper, ExitButtonWrapper, RemoveButton, 
ExitButton} from './style';


const Modal = ({ post, onClose, onSub}) => {
    
  return (
    <>
      <ModalBackGround>
        <ModalWrapper>
          <ModalHead>
            <DomainName><p>Seol Cat</p></DomainName>
            <Exit><button onClick={onClose}>X</button></Exit>
          </ModalHead>
          <ModalBody>
            <Question><p>정말 삭제할 거에요?</p></Question>
            <ButtonBar>
              <RemoveButtonWrapper>
                <RemoveButton onClick={onSub}>삭제</RemoveButton>
              </RemoveButtonWrapper>
              <ExitButtonWrapper>
                <ExitButton onClick={onClose}>닫기</ExitButton>
              </ExitButtonWrapper>
            </ButtonBar>
          </ModalBody>           
        </ModalWrapper>
      </ModalBackGround>
    </>
  );
};


export default Modal;