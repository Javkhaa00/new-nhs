import React from 'react';
import News from "../json/news.json";
import { NewsCard } from "./NewsCard";

export const NewsCards = (props) => {

    const deviceWidth = window.innerWidth;

    return (
        <>
            {
                News.map(el => {
                    if (parseInt(props.selectedNewsId) === el._id)
                        return null;
                    return <NewsCard el={el} />
                })
            }
        </>
    );
};
