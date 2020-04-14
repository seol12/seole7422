import React from 'react';
import styled from 'styled-components';
import {BgModal, ModalBody, StyHead, StyName, XBTdv, StyBody, Question, BuBu, Btdiv,  BlackBtn } from './style';


const Modal = ({post,onClose,onsub}) => {
    return(
        <>
       <BgModal>
           <ModalBody>
              <StyHead>
                <StyName><p>Seol Cat</p></StyName>
                <XBTdv><button onClick={onClose}>X</button></XBTdv>
              </StyHead>
                <StyBody>
                  <Question><p>정말 삭제할 거에요?</p></Question>
                 <BuBu>
                  <Btdiv>
                    <BlackBtn onClick={onsub}>삭제</BlackBtn>
                  </Btdiv>
            
                  <Btdiv>
                    <BlackBtn onClick={onClose}>닫기</BlackBtn>
                  </Btdiv>
                 </BuBu>
                </StyBody>           
            </ModalBody>
         </BgModal>
        </>
    );
}

export default Modal;