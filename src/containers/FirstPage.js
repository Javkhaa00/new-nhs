import React from 'react'
// import Header from '../containers/Header'

const FirstPage = () => {
    return (
        <div className="first-page">
            <div className="layer">
                <ul className="first-page--text-container">
                    <li className="first-page--text">Nest High School</li>
                    <li className="first-page--text1">Ирээдүйн технологийг бүтээнэ</li>
                    <li className="first-page--text2">
                        Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг хэрэн нисэх агуу технологи эзэмшигчид болгон хувиргажээ.
                        </li>
                    <li><div className="first-page--signup">Бүртгүүлэх</div></li>
                </ul>
                <div className="pseudo-white" />
                <div className="pseudo-gray" />
                <div className="pseudo-gray-layer" />
            </div>
        </div>
    )
}

export default FirstPage;