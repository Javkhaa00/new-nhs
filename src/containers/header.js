import React, { useState } from 'react';
import { div, animateScroll as scroll } from "react-scroll";
import { useHistory } from "react-router-dom";



const Header = () => {
    const history = useHistory();
    const [classActive, setActive] = useState("hamburger");
    const [SideMenu, setSideMenu] = useState("header--nav--buttons");
    const [stick, setStick] = useState("bar1");
    const [stick1, setStick1] = useState("bar3");

    const goHome = (section) => {
        history.push(`/?section=${section}`);
    }

    return (
        <div className="header">
            <div className="header--nav">
                <div className="header--nav--logo">
                    <img
                        onClick={() => {
                            window.location = "/";
                        }}
                        className="header--nav--logo--img"
                        alt="nest-logo"
                        src="/assets/logo.png"
                    />
                </div>
                <div className="header--nav--logo1">
                    <img
                        onClick={() => {
                            window.location = "/";
                        }}
                        className="header--nav--logo--img"
                        alt="nest-logo"
                        src="/assets/logo-colored.png"
                    />
                </div>
                <div className={SideMenu}>
                    <div className="header--nav--menu-text">
                        <div>
                            <div
                                onClick={() => goHome("firstpage-section")}
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header--texts" >
                                Нүүр
                            </div>
                        </div>
                        <div>
                            <div
                                className="header--texts"
                                activeClass="active"
                                onClick={() => goHome("thousand-section")}
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Бидний тухай
                            </div>
                        </div>
                        <div>
                            <div
                                className="header--texts"
                                onClick={() => goHome("currics-section")}
                                activeClass="active"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Хөтөлбөр
                            </div>
                        </div>
                        <div>
                            <div
                                className="header--texts"
                                onClick={() => goHome("teachers-section")}
                                activeClass="active"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                Багш нар
                            </div>
                        </div>
                        <div>
                            <div
                                className="header--texts"
                                activeClass="active"
                                onClick={() => goHome("events-section")}
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Мэдээ
                            </div>
                        </div>
                        <div>
                            <div
                                className="header--texts"
                                onClick={() => goHome("contacts-section")}
                                activeClass="active"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Холбоо барих
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header--nav--sign-up">
                    <a
                        className="header--nav--sign-up--button"
                        href="https://nhs.mn/"
                        target="_blank"
                    >
                        Бүртгүүлэх
                    </a>
                </div>
                <div
                    className={classActive}
                    onClick={() => {
                        if (classActive === "hamburger") {
                            setActive("change");
                            setSideMenu("menu-right");
                            setStick("stick");
                            setStick1("stick1");
                        } else {
                            setActive("hamburger");
                            setSideMenu("header--nav--buttons");
                            setStick("bar1");
                            setStick1("bar3");
                        };
                    }}
                >
                    <div className={stick}></div>
                    <div className="invis"></div>
                    <div className={stick1}></div>
                </div>
            </div>
        </div >
    )
};

export default Header;