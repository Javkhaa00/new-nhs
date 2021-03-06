import React from "react";
import CarouselTeacher from "../components/CarouselTeacher";

export const Teachers = () => {
    return (
        <div className="teachers" id="teachers-section">
            <div className="teachers--header">
                <div className="teachers--header--where">
                    Багш нар
                </div>
                <div className="teachers--header--title">
                    Бидний бахархал
                </div>
                <div className="teachers--header--desc">
                    Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
                </div>
            </div>
            <div className="teachers--wrapper">
                <CarouselTeacher />
                {/* <div style={{ backgroundColor: 'aqua' }}>
                    <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} active={1} />
                </div> */}
            </div>
        </div>
    )
}

export default Teachers;