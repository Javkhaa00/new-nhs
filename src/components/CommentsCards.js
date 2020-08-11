import React from 'react';
import Data from "../json/comments.json";
import { CommentCard } from "./CommentCard";

export const CommentsCards = (props) => {
    return (
        <>
            {
                Data.map(el => {
                    if (parseInt(props.selectedNewsId) === el._id)
                        return null;
                    return <CommentCard el={el} />
                })
            }
        </>
    );
};
