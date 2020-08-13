import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default () => {
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
                <div style={{ height: 200, background: '#EEE' }}>First card</div>
                <div style={{ height: 200, background: '#EEE' }}>Second card</div>
                <div style={{ height: 200, background: '#EEE' }}>Third card</div>
                <div style={{ height: 200, background: '#EEE' }}>Fourth card</div>
                <div style={{ height: 200, background: '#EEE' }}>Fifth card</div>
                <div style={{ height: 200, background: '#EEE' }}>Sixth card</div>
                <div style={{ height: 200, background: '#EEE' }}>Seventh card</div>
            </ItemsCarousel>
        </div>
    );
};