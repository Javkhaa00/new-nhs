import React from 'react';
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

export const Home = () => {
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