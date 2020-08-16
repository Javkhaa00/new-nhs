import React, { useState } from 'react';

export const Students = () => {

    const renderCard = (card, index) => {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: "aqua",
                        borderRadius: "24px",
                    }}
                >
                </div>
            </div>
        );
    }

    return (
        <div className="students" id="students-section">
            <div className="students--where">Сурагчид</div>
            <div className="students--title">Сурагчдын амжилт</div>
            <div className="students--desc">
                Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
            </div>
        </div>
    );
}

export default Students