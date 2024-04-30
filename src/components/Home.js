import React from 'react'
import Header from './Header';
import Poster from './Poster';
import About from './About';
import Team from './Team';
import OurWork from './OurWork';
import Price from './Price';
import Contact from './Contact';
function Home() {
    return (
        <div>
            <Header />
            <Poster />
            <About />
            <Team />
            <OurWork />
            <Price />
            <Contact />
        </div>
    )
}

export default Home
