import React from 'react'

export const NewsCard = (props) => {

    const { el } = props;

    if (!el) return null;

    let tagClass = " ";

    if (el.type === "Арга хэмжээ") {
        tagClass = "green";
    }

    return (
        <div
            onClick={() => {
                window.location = "/news/" + props.el._id;
            }}
            className="all-cards--card"
            style={{
                backgroundImage: `url(${el.imgUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className="all-cards--card">
                <div className="all-cards--card--wrapper">
                    <div className={`all-cards--card--type ${tagClass}`}>
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