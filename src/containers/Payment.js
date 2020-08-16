import React from 'react';

export const Payment = () => {
    return (
        <div className="payment" id="payment-section">
            <div className="payment--class">Төлбөр</div>
            <div className="payment--title">Төлбөрийн мэдээлэл</div>
            <div className="payment--desc">
                Жигүүртэн шувууд лугаа адил эрх чөлөөтэй нисэж, тэнгэрийг эзэгнэх чухам тэр чин хүсэл эрмэлзэл биднийг гэнэхэн мөрөөдөгчдөөс дэлхийг.
            </div>
            <div className="payment--box">
                <div className="payment--box--middle">
                    <div className="payment--img" style={{ marginTop: "60px" }}>
                        <img alt=" " src="/assets/vector-middle.png" />
                    </div>
                    <div className="which-year">дунд анги</div>
                    <div className="amount">8.5</div>
                    <div className="amount-text">сая</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <a
                        className="payment--button-middle"
                        href="https://nhs.mn/"
                        target="_blank"
                    >
                        Бүртгүүлэх
                    </a>
                </div>
                <div className="payment--box--high">
                    <div style={{ paddingTop: "60px" }}>
                        <img alt=" " src="/assets/vector-high.png" />
                    </div>
                    <div className="which-year">ахлах анги</div>
                    <div className="amount">10</div>
                    <div className="amount-text">сая</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <div className="plain-text">Contrary to popular belief</div>
                    <a
                        className="payment--button-high"
                        href="https://nhs.mn/"
                        target="_blank"
                    >
                        Бүртгүүлэх
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Payment;