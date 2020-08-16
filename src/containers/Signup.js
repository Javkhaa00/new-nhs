import React, { useState, useEffect } from 'react';

const Signup = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('9/10/2020').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        if (countdownDate) {
            const currentTime = new Date().getTime();

            const distanceToDate = countdownDate - currentTime;

            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }

            setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <div className="sign-up" id="signup-section">
            <div className="sign-up--date">9-р сарын 10</div>
            <div className="sign-up--title">Бүртгэл дуусах хугацаа</div>
            <div className='sign-up--counter'>
                <div className="sign-up--counter--texts">
                    <div >{state.days || '0'}</div>
                    <div className="text">Өдөр</div>
                </div>
                <div className="sign-up--counter--texts">
                    <div >{state.hours || '00'}</div>
                    <div className="text">Цаг</div>
                </div>
                <div className="sign-up--counter--texts">
                    <div >{state.minutes || '00'}</div>
                    <div className="text">Мин</div>
                </div>
                <div className="sign-up--counter--texts">
                    <div >{state.seconds || '00'}</div>
                    <div className="text">Сек</div>
                </div>
            </div>
            <a
                className="sign-up--button"
                href="https://nhs.mn/"
                target="_blank"
            >
                Бүртгүүлэх
                    </a>
        </div>
    );
};

export default Signup;