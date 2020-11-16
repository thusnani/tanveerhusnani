import styled from 'styled-components'

export const CommentFormContainer = styled.div`
    justify-content: center;
    align-items: center;
    
`

export const CommentFormDiv = styled.div`
    border-bottom: 2px solid black;   
    margin: 24px;
    font-weight: bold;
`

export const NameLabel = styled.label`
    padding: 16px;
`

export const NameInput = styled.input`

    width: 300px;
    border-radius: 8px;
    font-size: 18px;
    border: 2px solid black;
`

export const CommentLabel = styled.label`
    padding: 16px;
`

export const CommentTextArea = styled.textarea`

border-radius: 8px;
    font-size: 18px;
    border: 2px solid black;
`


export const AddCommentBtn = styled.button`
    padding: 16px;
    font-size: 16px;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: '12px 30px';
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
`