import React from 'react';
import Comments from "../json/comments.json";
import { CommentCard } from "./CommentCard";

export const CommentsCards = (props) => {
    return (
        <>
            {
                Comments.map(el => {
                    if (parseInt(props.selectedNewsId) === el._id)
                        return null;
                    return <CommentCard el={el} />
                })
            }
        </>
    );
};
