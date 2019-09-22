import React from 'react';

//children to create a banner infront of background
function Hero({children,hero}){
    return(
        <header className={hero}>{children}</header>
    )
}

Hero.defaultProps = {
    hero: 'defaultHero'
}

export default Hero;