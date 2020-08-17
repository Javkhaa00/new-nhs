import React, { useState, useEffect } from 'react';
import students from '../json/students.json';
import ItemsCarousel from 'react-items-carousel';
import useWindowSize from "../hooks/useWindowSize";

export default () => {

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

    const renderStudentsCards = (el) => {

        if (!el) return null;

        return (
            <div
                className="students--card"
                style={{
                    backgroundImage: `url(${el.imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
            </div >
        )
    }

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    return (
        <div style={{ padding: `0 ${40}px` }}>
            <ItemsCarousel
                infiniteLoop={true}
                activePosition
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={cards}
                gutter={20}
                leftChevron={<div className="arrow left"></div>}
                rightChevron={<div className="arrow right"></div>}
                outsideChevron={true}
                chevronWidth={40}
            >
                {students.map(renderStudentsCards)}
            </ItemsCarousel>
        </div>
    );
};