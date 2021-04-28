import React, { useState } from "react";
import "./Banner Styles/Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          varient="outlined"
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button varient="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
