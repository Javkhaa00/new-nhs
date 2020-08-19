import React, { useState, useEffect } from 'react';
import Teachers from '../json/teachers.json';
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

    const renderTeacherCards = (el) => {

        if (!el) return null;

        const backgroundType = el.color;

        return (
            <div
                className="teachers--card">
                <div style={{
                    position: "absolute", left: 0, right: 0, bottom: 0, top: 0, zIndex: 1,
                    backgroundImage: `url(${el.imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    borderRadius: "24px",
                    backgroundSize: 'cover',
                }} />
                <div style={{
                    position: "absolute", left: 0, right: 0, bottom: 0, top: 0, zIndex: 2, background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 58.76%, rgba(0, 0, 0, 0.8) 100%)',
                    borderRadius: "24px"
                }} />
                <div style={{ position: "relative", zIndex: 3 }}>
                    <div className={`teachers--card--type ${backgroundType}`}>
                        {el.type}
                    </div>
                    <div className="teachers--card--first-name">{el.firstName}</div>
                    <div className="teachers--card--last-name">{el.lastName}</div>
                </div>
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
                {Teachers.map(renderTeacherCards)}
            </ItemsCarousel>
        </div>
    );
};