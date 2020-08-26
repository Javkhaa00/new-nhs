import React from 'react';
import { Link } from "react-router-dom";

const FirstPage = () => {
    return (
        <div className="first-page" id="firstpage-section">
            <div className="layer">
                <div className="first-page--text-container">
                    <div className="first-page--text"> АНУ-аас Монгол Улсад суугаа онц бөгөөд бүрэн эр...</div>
                    <div className="first-page--text1">
                        Өнөөдөр болж буй үйл явдал боловсролын салбарт төдийгүй Монголын ирээдүйд хийж буй том хөрөнгө оруулалт. Энэ чиглэлээр гүнзгийрүүлж сурахаар зорьсон сурагчид, эцэг эхээр нь бахархаж байна.
                    </div>
                    <div><Link to="/news" className="first-page--more">Дэлгэрэнгүй</Link></div>
                </div>
            </div>
            <div className="first-page--layers">
                <div className="first-page--layers--white" />
                <div className="first-page--layers--gray" />
                <div className="first-page--layers--gray-layer" />
            </div>
        </div>
    )
}

export default FirstPage;