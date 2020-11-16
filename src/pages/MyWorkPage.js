import React, { useState, useEffect } from 'react';
import UpvotesSection from '../components/UpvotesSection/';
import AddCommentForm from '../components/AddCommentForm';

const MyWorkPage = ({ workName }) => {

    const name = workName;

    const [workInfo, setWorkInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/mywork/${name}`)
            const body = await result.json();
            setWorkInfo(body);
        }
        fetchData();
    }, [])

    return (
        <>
            <UpvotesSection workName={name} upvotes={workInfo.upvotes} setWorkInfo={setWorkInfo} />
            
            <h3>Comments:</h3>
            {workInfo.comments.map((comment, key) => (
                <div className="comment" key={key}>
                    <h4>{comment.username}</h4>
                    <p>{comment.text}</p>
                </div>
            ))}
            <AddCommentForm workName={name} setWorkInfo={setWorkInfo} />
        </>
    )
}

export default MyWorkPage
