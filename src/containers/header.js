import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="header--nav">
                <div className="header--nav--logo">
                    <img className="header--nav--logo--img" alt="nest-logo" src="/assets/logo-colored.png" />
                </div>
                <div className="header--nav--buttons">
                    <ul>
                        <li><span className="header--texts" href="#">Нүүр</span></li>
                        <li><span className="header--texts" href="#">Бидний тухай</span></li>
                        <li><span className="header--texts" href="#">Хөтөлбөр</span></li>
                        <li><span className="header--texts" href="#">Багш нар</span></li>
                        <li><span className="header--texts" href="#">Мэдээ</span></li>
                        <li><span className="header--texts" href="#">Холбоо барих</span></li>
                    </ul>
                </div>
                <div className="header--nav--sign-up">
                    <div className="header--nav--sign-up--button" href="#">
                        Бүртгүүлэх
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
