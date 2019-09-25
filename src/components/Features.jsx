import React, { Component } from 'react';
import { RoomContext } from '../context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';


class Features extends Component {
    state = {  }
    static contextType = RoomContext;
    render() { 
       let {loading, featuredRooms : rooms} =  this.context;
       let room = rooms.map(room => {
           return <Room key={room.id} room={room} />
       })
       
        return ( 
            <section className="featured-rooms"> 
                <Title title="Feature Rooms" />
                <div className="featured-rooms-center">
                  {loading?<Loading/>:room}  
                </div>
            </section>
         );
    }
}
 
export default Features;