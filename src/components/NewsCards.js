import React, { useState, useEffect } from 'react';
import News from '../json/news.json';
import { NewsCard } from './NewsCard';
import useWindowSize from '../hooks/useWindowSize';

export const NewsCards = (props) => {

    const computeCardsNumber = () => {
        if (windowSize.width < 570) {
            return 3;
        }
        if (windowSize.width < 800) {
            return 4;
        }
        return 6;
    }

    const windowSize = useWindowSize();
    const [cards, setCards] = useState(computeCardsNumber());

    useEffect(() => {
        setCards(computeCardsNumber());
    }, [windowSize.width]);

    return (
        <>
            {
                News.map((el, i) => {
                    if (i < cards)
                        return <NewsCard el={el} />
                    return null;

                })
            }
        </>
    );
};
