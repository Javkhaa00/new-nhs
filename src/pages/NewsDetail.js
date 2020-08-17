import React from 'react';
import news from '../json/news.json';
import { NewsCards } from '../components/NewsCards';

export const NewsDetail = (props) => {
    console.log(props.match.params);
    const { newsId } = props.match.params
    return (
        <div className="news-detail">
            <div className="news-detail--wrapper">
                <div className="news-detail--wrapper--where">Мэдээ</div>
                <div className="news-detail--wrapper--title">{news[newsId].title}</div>
                <div className="news-detail--wrapper--wallpaper">
                    <img src={news[newsId].imgBig} alt=" " />
                </div>
                <div className="news-detail--wrapper--text">{news[newsId].newsText}</div>
            </div>
            <div className="all-cards">
                <NewsCards />
            </div>
        </div>
    )
};

export default NewsDetail;