import React from 'react'
import Header from '../containers/Header';
import { EveryNewsCards } from '../components/EveryNewsCards';

export const NewsDetail = () => {
    return (
        <div className="news-detail">
            <Header />
            <EveryNewsCards />
        </div>  
    )
};

export default NewsDetail;