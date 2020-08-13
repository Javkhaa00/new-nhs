import React from "react";

export const Teachers = () => {
    return (
        <div className="teachers">
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
                <div className="teachers--cards"></div>
                <div className="teachers--cards"></div>
                <div className="teachers--cards"></div>
                <div className="teachers--cards"></div>
            </div>
        </div>
    )
}

export default Teachers;