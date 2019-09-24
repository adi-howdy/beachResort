import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

class Services extends Component  { 
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free CockTails",
                info: 'A non-alcoholic mixed drink (also known as virgin cocktail boneless cocktail, or mocktail) is a cocktail-style beverage made without alcoholic ingredients'   
            },
            {
                icon: <FaHiking/>,
                title: "Free Hiking",
                info: 'A non-alcoholic mixed drink (also known as virgin cocktail boneless cocktail, or mocktail) is a cocktail-style beverage made without alcoholic ingredients'   
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free ShuttleVan",
                info: 'A non-alcoholic mixed drink (also known as virgin cocktail boneless cocktail, or mocktail) is a cocktail-style beverage made without alcoholic ingredients'   
            },
            {
                icon: <FaBeer/>,
                title: "Free Beer",
                info: 'A non-alcoholic mixed drink (also known as virgin cocktail boneless cocktail, or mocktail) is a cocktail-style beverage made without alcoholic ingredients'   
            }
        ]
    } 
    render(){
        return (  
            <div>
                <Title title="Services"/>
                <div className="services-center">
                { this.state.services.map((items,index)=> {
                   return  <article key={index} className="service">
                   <span>{items.icon}</span>
                   <h6>{items.title}</h6>
                   <p>{items.info}</p>
                   </article>
                   }
                )}
                </div>
                
            </div>
        );
    }
}
 
export default Services;