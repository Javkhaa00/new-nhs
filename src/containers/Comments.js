import React from 'react';
import { CommentsCards } from "../components/CommentsCards";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller]);

export const Comments = () => {
    return (
        <div className="comments">
            <CommentsCards />
            {/* <Swiper
                loop={true}
                navigation
                pagination
                spaceBetween={20}
                slidesPerView={3}
            >
                <SwiperSlide>SDASD</SwiperSlide>
                <SwiperSlide>DSADSA</SwiperSlide>
                <SwiperSlide>DSADAS</SwiperSlide>
            </Swiper> */}
        </div>
    );
};

export default Comments;