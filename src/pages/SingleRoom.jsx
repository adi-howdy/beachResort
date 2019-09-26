import React, { Component } from "react";
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Roomprovider from '../RoomProvider';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero';

class SingleRoom extends Component {
  constructor(props){
    super(props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg : defaultBcg
    }
  }

  static contextType = RoomContext;

  render() {
    const {getRoom} = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    console.log('not rom' + !room);
    if(!room){
      return (
      <div className="error">
      <h3>Error</h3>
      <p>Cannot find room..... </p>
      <Link to="/rooms" className="btn-primary">Go to Room</Link>
      </div>
      )
    }
    const {name, slug, type, price, size, images, capacity, extras, breakfast, pets, description } = room;
    console.log(images);
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={name}>
            <Link to='/rooms' className="btn-primary">Back to rooms</Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
         <div className="single-room-images">
           {images.map((item,index)=> 
              <img key={index} src={item}/>
            )}
         </div>
         <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} sqft</h6>
              <h6>
                max capacity: {
                  capacity > 1 ? `${capacity} people` : `${capacity} person` 
                }
              </h6>
              <h6>pets: {
                pets ? "Pets are allowed" : "No pet are allowed"
              }</h6>
              <h6>
                {
                  breakfast && "Breakfast Available"
                }
              </h6>
            </article>
         </div>
        </section>
        <section className="room-extras">
          <h6>
            Extra
            <ul className="extras">
              {extras.map((extra,index) => 
                <li key="index"> -{extra}</li>)}
            </ul>
          </h6>
        </section>
      </>
    )
  }
}

export default SingleRoom;
