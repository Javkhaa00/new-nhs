import React from 'react'
import Header from '../containers/Header';
import FirstPage from '../containers/FirstPage';
import Currics from '../containers/Currics';
import Contact from '../containers/Contact';
import Events from '../containers/Events';
import Students from '../containers/Students';
import Comments from '../containers/Comments';
import Signup from '../containers/Signup';

export const Home = () => {
    return (
        <>
            <FirstPage />
            <Header />
            <Currics />
            <Students />
            <Comments />
            <Signup />
            <Events />
            <Contact />
        </>
    )
}

export default Home;