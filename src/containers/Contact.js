import React from "react";
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
    return (
        <div className="contacts" id="contacts-section">
            <div className="contacts--header">
                <div className="triangle1" />
                <div className="triangle2" />
                <div className="triangle3" />
            </div>
            <div className="contacts--main">
                <div className="contacts--main--container">
                    <div className="contacts--main--container--texts">
                        <p className="contacts--main--container--texts--title">Холбоо барих</p>
                        <div className="contacts--main--container--texts--grid">
                            <div className="contacts--main--container--texts--grid--email">
                                <div className="contacts--main--container--texts--grid--email--img"
                                />
                                <p className="texts">contact@nhs.edu</p>
                                <p className="texts">support@nhs.edu</p>
                            </div>
                            <div className="contacts--main--container--texts--grid--call">
                                <div className="contacts--main--container--texts--grid--call--img"></div>
                                <p className="texts">+976 88642339</p>
                                <p className="texts">+976 11004267</p>
                            </div>
                            <div className="contacts--main--container--texts--grid--time">
                                <div className="contacts--main--container--texts--grid--time--img"></div>
                                <p className="texts">Даваа – Баасан: 10:00 – 16:00</p>
                                <p className="texts">Бямба – Ням: Амарна</p>
                            </div>
                            <div className="contacts--main--container--texts--grid--location">
                                <div className="contacts--main--container--texts--grid--location--img"></div>
                                <p className="texts">
                                    Намъяанжүгийн гудамж 7а, 13-р хороолол, 18-р хороо, Баянзүрх дүүрэг, Улаанбаатар хот
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts--main--container--map"></div>
                </div>
                <div className="contacts--main--footer">
                    <p className="new-nhs">nhs.edu.mn © 2020</p>
                    <ul className="social-container">
                        <li><a
                            href="https://www.facebook.com/NestHigh/"
                            target="_blank"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a></li>
                        <li><a
                            href="https://www.instagram.com/nest_high_school/?hl=en"
                            target="_blank"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a></li>
                        <li><a
                            href="https://www.youtube.com/channel/UCcti8Ugy2CBj0bCVW1A5Mbg"
                            target="_blank"
                            className="social"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Contact;