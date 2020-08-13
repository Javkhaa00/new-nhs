import React, { useState } from 'react';
import comments from "../json/comments.json";
import ItemsCarousel from 'react-items-carousel';

export const Comments = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = "5";

    const renderCards = (el) => {
        return (
            <div className="comments-wrapper">
                <div className="comments">
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
                </div>
            </div >
        );
    }

    return (
        <div style={{ padding: `1 ${chevronWidth}px` }}>
            <ItemsCarousel
                disableSwipe={false}
                infiniteLoop={true}
                activePosition
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={3}
                leftChevron={<div className="arrow left"></div>}
                rightChevron={<div className="arrow right"></div>}
                outsideChevron={true}
                chevronWidth={chevronWidth}
            >
                {comments.map(renderCards)}
            </ItemsCarousel>
        </div>
    );
};

export default Comments;