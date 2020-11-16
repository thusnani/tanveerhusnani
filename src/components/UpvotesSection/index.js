import React from 'react';
import { UpvotesDiv, UpvoteBtn, UpvoteP } from './UpvotesElements';

const UpvotesSection = ({ workName, upvotes, setWorkInfo }) => {

    const upvoteWork = async () =>{
        const result = await fetch(`/api/mywork/${workName}/upvote`, {
            method: 'post',
        })
        const body = await result.json();
        setWorkInfo(body);
    }

    return (
        <UpvotesDiv>
            <UpvoteBtn onClick={() => upvoteWork()}>Add Upvote </UpvoteBtn>
            <UpvoteP>This post has been upvoted {upvotes} times!</UpvoteP>
        </UpvotesDiv>
    );
};

export default UpvotesSection;