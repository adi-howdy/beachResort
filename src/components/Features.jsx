import React, { Component } from 'react';
import { RoomContext } from '../context';

class Features extends Component {
    state = {  }
    static contextType = RoomContext;
    render() { 
        const {name,greeting} = this.context;
       
        return ( 
            <div>
                features {name}
            </div>
         );
    }
}
 
export default Features;