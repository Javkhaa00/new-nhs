import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';
import comments from "../json/comments.json";

SwiperCore.use([Navigation, Pagination, Controller]);

export const Comments = () => {

    const renderCards = (el) => {
        return (
            <SwiperSlide>
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
            </SwiperSlide>
        );
    }

    return (
        <div className="comments-wrapper">
            <div className="comments">
                <Swiper
                    loop={true}
                    navigation
                    slidesPerView={3}
                >
                    {comments.map(renderCards)};
            </Swiper>
        </div>
        </div >
    );
};

export default Comments;