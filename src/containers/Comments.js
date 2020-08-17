import React, { useState, useEffect } from 'react';
import comments from "../json/comments.json";
import ItemsCarousel from 'react-items-carousel';
import useWindowSize from "../hooks/useWindowSize";

export const Comments = () => {

    const computeCardsNumber = () => {
        if (windowSize.width < 570) {
            return 1;
        }
        if (windowSize.width < 800) {
            return 2;
        }
        return 3;
    }

    const windowSize = useWindowSize();
    const [cards, setCards] = useState(computeCardsNumber());

    useEffect(() => {
        setCards(computeCardsNumber());
    }, [windowSize.width]);

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
        <div id="comments-section" style={{ padding: `1 ${chevronWidth}px` }}>
            <ItemsCarousel
                disableSwipe={false}
                infiniteLoop={true}
                activePosition
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={cards}
                leftChevron={<div className="arrow left"></div>}
                rightChevron={<div className="arrow right"></div>}
                chevronWidth={chevronWidth}
            >
                {comments.map(renderCards)}
            </ItemsCarousel>
        </div>
    );
};

export default Comments;