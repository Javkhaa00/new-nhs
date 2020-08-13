import React, { useState } from 'react';
import Teachers from '../json/teachers.json';
import ItemsCarousel from 'react-items-carousel';

export default () => {

    const renderTeacherCards = (el) => {

        if (!el) return null;

        const backgroundType = el.color;

        return (
            <div
                className="teachers--card"
                style={{
                    backgroundImage: `url(${el.imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className={`teachers--card--type ${backgroundType}`}>
                    {el.type}
                </div>
                <div className="teachers--card--first-name">{el.firstName}</div>
                <div className="teachers--card--last-name">{el.lastName}</div>
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
                numberOfCards={3}
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