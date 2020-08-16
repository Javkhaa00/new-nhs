import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Controller]);

export const Students = () => {

    const [cards, setCards] = useState([{}, {}, {}, {}, {}]);
    const [activeIndex, setActive] = useState(0);
    
    const renderCard = (card, index) => {
        console.log(card);
        const diff = Math.abs(activeIndex - index);
        let scale = diff * 10;
        if (activeIndex === 0) {
            if (index === 4) {
                scale = 10;
            } else if (index === 3) {
                scale = 20;
            }
        } else if (activeIndex === 4) {
            if (index === 0) {
                scale = 10;
            } else if (index === 1) {
                scale = 20;
            }
        }
        scale = 100 - scale;
        let className = "";
        if(scale === 80){
            className = "firsta";
        }
        return (
            <SwiperSlide className={`${className}`}>
                <div
                    style={{
                        width: `${scale}%`,
                        height: `${scale}%`,
                        backgroundColor: "aqua",
                        borderRadius: "24px",
                    }}
                >
                </div>
            </SwiperSlide>
        );
    }

    const handleSlide = (swiper) => {
        return false;
        setTimeout(()=>{
            if (document.querySelector(".firsta")) {
                document.querySelector(".firsta").classList.remove("firsta");
            }
            if (document.querySelector(".lasta")) {
                document.querySelector(".lasta").classList.remove("lasta");
            }
            let eles = document.querySelectorAll(".swiper-slide");
            let previndex = 0;
            let nextindex = 0;
            let i = 0;
            let per;
            while (eles.length > i) {
                per = eles[i];
                if (per.classList.contains("swiper-slide-prev")) {
                    previndex = i;
                }
                if (per.classList.contains("swiper-slide-next")) {
                    nextindex = i;
                }
                i++;
            }
            if (!(previndex === 0 && nextindex === 0)) {
                console.log(eles[previndex - 1], eles[previndex + 1]);
                eles[previndex - 1].classList.add("firsta");
                eles[nextindex + 1].classList.add("lasta");
            }
        },1)
        setActive(swiper.realIndex);
    }
    const test = (swiper, event) => {
        console.log(swiper.realIndex, swiper.snapIndex, swiper.previousIndex);
        console.log(event);
    }

    return (
        <div className="students" id="students-section">
            <div className="students--where">Сурагчид</div>
            <div className="students--title">Сурагчдын амжилт</div>
            <div className="students--desc">
                Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
            </div>
            <Swiper
                loop={true}
                navigation
                // pagination
                spaceBetween={10}
                slidesPerView={4}
                centeredSlides
                onSlideChange={handleSlide}
                onSliderMove={test}
            >
                {cards.map(renderCard)}
            </Swiper>
        </div>
    );
}

export default Students