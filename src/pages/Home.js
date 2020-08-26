import React, { useEffect } from 'react';
import { scroller } from "react-scroll";
import FirstPage from '../containers/FirstPage';
import Currics from '../containers/Currics';
import Contact from '../containers/Contact';
import Events from '../containers/Events';
import Students from '../containers/Students';
import Comments from '../containers/Comments';
import Signup from '../containers/Signup';
import Payment from '../containers/Payment';
import Thousand from '../containers/Thousand';
import Teachers from '../containers/Teachers';

export const Home = (props) => {
    const { search } = props.location;
    useEffect(() => {
        const section = search.split("=")[1];
        scroller.scrollTo(section || "firstpage-section", {
            duration: 500,
            smooth: true,
            offset: 50,
        });
    }, [search]);

    return (
        <>
            <FirstPage />
            <Thousand />
            <Currics />
            <Teachers />
            <Students />
            <Comments />
            <Signup />
            <Events />
            <Payment />
            <Contact />
        </>
    )
}

export default Home;