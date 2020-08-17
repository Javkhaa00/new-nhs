import React from 'react';
import { Link, animateScroll as scroll} from "react-scroll";

const Header = () => {
    return (
        <div className="header">
            <div className="header--nav">
                <div className="header--nav--logo">
                    <img className="header--nav--logo--img" alt="nest-logo" src="/assets/logo-colored.png" />
                </div>
                <div className="header--nav--buttons">
                    <ul>
                        <li>
                            <Link                                
                                to="firstpage-section"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="header--texts" >
                                Нүүр
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="header--texts"
                                activeClass="active"
                                to="thousand-section"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Бидний тухай
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="header--texts"
                                activeClass="active"
                                to="currics-section"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Хөтөлбөр
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="header--texts"
                                activeClass="active"
                                to="teachers-section"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                            >
                                Багш нар
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="header--texts"
                                activeClass="active"
                                to="events-section"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Мэдээ
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="header--texts"
                                activeClass="active"
                                to="contacts-section"
                                id="buttons"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Холбоо барих
                            </Link>
                        </li>
                    </ul>
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
            </div>
        </div>
    )
};

export default Header;
