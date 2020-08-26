import React from "react";
import { NewsCards } from "../components/NewsCards";

export const Events = () => {
    return (
        <div className="events" id="events-section">
            <div className="events--where">Мэдээ</div>
            <div className="events--title">Нэстээр сонин сайхан</div>
            <div className="events--wrapper">
                <div className="events--wrapper--desc">
                    Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
                </div>
                <div className="events--wrapper--every">
                    <div className="events--wrapper--every--button">Бүх мэдээ </div>
                </div>
            </div>
            <div className="all-cards">
                <NewsCards />
            </div>
            <div className="events--wrapper--every1">
                <div className="events--wrapper--every1--button-phone"
                    onClick={() => {
                        window.location = "/allnews";
                    }}
                >Бүх мэдээ </div>
            </div>
        </div>
    )
}

export default Events;