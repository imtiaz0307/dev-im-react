import React from 'react'
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Latest from '../components/Latest';
import Mailing from '../components/Mailing';

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Latest />
            <Mailing />
            <Footer />
        </>
    )
}

export default Home