import React, { Component } from "react";
import { RoomContext } from "./context";
import items from "./data";

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  componentDidMount() {
    let rooms = this.formatData(items); //items from data
    let featuredRooms = rooms.filter(room => {
      return room.featured === true;
    });
    this.setState({
      rooms: rooms, //can be written only rooms in ES6
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  formatData(array_items) {
    let tempItems = array_items.map(items => {
      let id = items.sys.id;
      let images = items.fields.images.map(image => image.fields.file.url);
      let room = { ...items.fields, images: images, id }; //destructing all the elements in fields and overriding images and id images:images can be written as images for ES6
      return room; // return all fields and images and id
    });
    return tempItems;
  }

  // adding get room in context
  getRoom = (slug) => {
    const tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room
  }

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export default RoomProvider;
