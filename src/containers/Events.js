import React from "react";
import { NewsCards } from "../components/NewsCards";

export const Events = () => {
    return (
        <div className="events">
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
                {/* <NewsCards />  */}
            </div>
        </div>
    )
}

export default Events;