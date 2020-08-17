import React from "react";
import CarouselStudents from "../components/CarouselStudents";

export const Teachers = () => {
    return (
        <div className="students" id="students-section">
            <div className="students--header">
                <div className="students--header--where">
                    Сурагчид
                </div>
                <div className="students--header--title">
                    Сурагчдын амжилт
                </div>
                <div className="students--header--desc">
                    Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
                </div>
            </div>
            <div className="students--wrapper">
                <CarouselStudents />
            </div>
        </div>
    )
}

export default Teachers;