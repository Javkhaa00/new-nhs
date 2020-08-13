import React from 'react'

export const NewsCard = (props) => {

    const { el } = props;

    if (!el) return null;

    console.log(el)

    return (
        <div className="all-cards--card"
            style={{
                backgroundImage: `url(${el.imgUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className="all-cards--card">
                <div className="all-cards--card--wrapper">
                    <div className="all-cards--card--type">
                        {el.type}
                    </div>
                    <div className="all-cards--card--title">
                        {el.title.split("", 20)}...
                    </div>
                    <div className="all-cards--card--date">{el.date}</div>
                </div>
            </div>
        </div>
    );
};