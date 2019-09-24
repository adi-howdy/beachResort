import React, { Component } from 'react';
import  { RoomContext } from './context';
import items from './data';

class RoomProvider extends Component {
    state = { 
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
     }

     
    render() { 
        return ( 
            <RoomContext.Provider value={{...this.state}}>
                
                {this.props.children} 
                </RoomContext.Provider>
         );
    }
}

export default RoomProvider;