import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="header--nav">
                    <div className="header--nav--logo">
                        <img className="header--nav--logo--img" alt="nest-logo" src="/assets/logo-white.png" />
                    </div>
                    <div className="header--nav--buttons">
                        <ul>
                            <li><i href="#">НҮҮР</i></li>
                            <li><i href="#">Бидний тухай</i></li>
                            <li><i href="#">Хөтөлбөр</i></li>
                            <li><i href="#">Багш нар</i></li>
                            <li><i href="#">Мэдээ</i></li>
                            <li><i href="#">Холбоо барих</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
