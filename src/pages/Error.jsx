import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

function Error(){
    return(
        <Hero hero="defaultHero">
        <Banner title="This page is not available"> 
        <Link className = "btn-primary" to="/">Go to Home</Link>
        </Banner>
        </Hero>
    )
}

export default Error;