import React, { useState } from 'react';
import { CommentFormContainer, CommentFormDiv, NameLabel, NameInput, CommentLabel, CommentTextArea, AddCommentBtn } from './AddCommentFormElements';

const AddCommentForm = ({ workName, setWorkInfo }) => {
    
    const name = workName;

    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/mywork/${name}/add-comment`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setWorkInfo(body);
        setUsername('');
        setCommentText('');
    }

    return (
        <CommentFormContainer>
            <CommentFormDiv>Add a Comment</CommentFormDiv>
            <NameLabel>Name:
                <NameInput type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
            </NameLabel>
            <CommentLabel>
                Comment:
                <CommentTextArea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </CommentLabel>
            <AddCommentBtn onClick={() => addComment()}>Add Comment</AddCommentBtn>
        </CommentFormContainer>
    );
}

export default AddCommentForm;