import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <Hero hero="defaultHero"> 
        <Banner title="Luxirious room" subtitle="Starting at $999">
            <Link className='btn-primary' to="/rooms" >Go to Room</Link>
        </Banner>
        </Hero>
    )
}

export default Home;