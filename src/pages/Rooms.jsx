import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

function Rooms() {
  return (
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link className="btn-primary" to="/">
          Go to Home
        </Link>
      </Banner>
    </Hero>
  );
}

export default Rooms;
