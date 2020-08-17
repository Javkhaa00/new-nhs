import React from 'react'
import { NewsCards } from '../components/NewsCards';

export const NewsDetail = (props) => {
    console.log(props.match.params);
    return (
        <div className="news-detail">
            <NewsCards />
        </div>  
    )
};

export default NewsDetail;