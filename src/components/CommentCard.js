import React from 'react'

export const CommentCard = (props) => {
    const { el } = props

    console.log(props);

    return (
        <div className="comments--card">
            <div className="comments--row">
                <div className="comments--card--img">
                    <img alt=" " src={el.imgUrl} />
                </div>
                <div className="comments--card--column">
                    <div className="comments--card--column--name">{el.name}</div>
                    <div className="comments--card--column--position">{el.position}</div>
                </div>
            </div>
            <div className="comments--card--text">{el.text}</div>
        </div>
    );
};

export default CommentCard;

// import React from 'react';

// export const TeacherCards = (props) => {

//     const { el } = props

//     return (
//         <div>
//             <div className="teachers-card">
//                 <div className="teachers-card--img">
//                     <img alt=" " src={el.imgUrl} />
//                 </div>
//                 <div className="teachers-card--name">{el.name}</div>
//                 <div className="teachers-card--name--last">{el.lastName}</div>
//                 <div className="teachers-card--text">{el.text}</div>
//                 <ul className="teachers-card--more">
//                     <li><a href="#">Дэлгэрэнгүй</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }