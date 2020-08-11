import React from 'react'
import Header from '../containers/Header';
import FirstPage from '../containers/FirstPage';
import Currics from '../containers/Currics';
import Contact from '../containers/Contact';
import Events from '../containers/Events';
import Students from '../containers/Students';
import Comments from '../containers/Comments';

export const Home = () => {
    return (
        <>
            <FirstPage />
            <Header />
            <Currics />
            <Students />
            <Comments />
            <Events />
            <Contact />
        </>
    )
}

export default Home;