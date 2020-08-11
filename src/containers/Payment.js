import React from 'react';

export const Payment = () => {
    return (
        <div className="payment">
            <div className="payment--class">Төлбөр</div>
            <div className="payment--title">Төлбөрийн мэдээлэл</div>
            <div className="payment--desc">
                Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
            </div>
            <div className="payment--box">
                <div className="payment--box--middle">
                    <div style={{paddingTop: "10%"}}>
                        <img alt=" " src="/assets/vector-middle.png" />
                    </div>
                    <div className="which-year">дунд анги</div>
                    <div className="amount">8.5</div>
                    <div className="amount-text">сая</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="payment--button-middle">Бүртгүүлэх</div>
                </div>
                <div className="payment--box--high">
                    <div style={{ paddingTop: "10%" }}>
                        <img alt=" " src="/assets/vector-high.png" />
                    </div>
                    <div className="which-year">ахлах анги</div>
                    <div className="amount">10</div>
                    <div className="amount-text">сая</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="payment--button-high">Бүртгүүлэх</div>
                </div>
            </div>
        </div>
    );
};

export default Payment;