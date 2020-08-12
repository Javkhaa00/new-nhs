import React from 'react'

export const CommentCard = (props) => {
    const { el } = props
    console.log(el);
    if(!el) return null; 

    return (
        <div className="comments--card">
            <div className="comments--row">
                <div className="comments--card--img">
                    <img alt=" " src={el.imgUrl} />
                </div>
                <div className="comments--card--column">
                    <div className="comments--card--column--name">{el.name}</div>
                    <div className="comments--card--column--position">{el.position}</div>
                </div>
            </div>
            <div className="comments--card--text">{el.text}</div>
        </div>
    );
};

export default CommentCard;