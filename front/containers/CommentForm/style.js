import styled from 'styled-components';

export const SubmitForm = styled.form `

    width: 100%;
    height: 78px;
    border: 3px solid #e8e8e8;
    border-left: none;
    border-right: none;

`;

export const InputWrapper = styled.div`

    display:flex;

`;

export const CommentInput = styled.textarea`

    width: 94%;
    border: none;
    padding: 10px;
    margin-left: 8px;

`;

export const SubmitButton = styled.button`

    width: 64px;
    height: 40px;
    background-color: #20232a;
    color: white;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    font-size: 14px;
    margin: 10px;
    margin-top: 16px;

    &:hover ${SubmitButton} {
      
      border: 2px solid white;
      opacity: 90%;
    }

`;