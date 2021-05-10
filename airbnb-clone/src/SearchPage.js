import React from "react";
import "./SearchPage Styles/SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  return (
    <div className="searchpage">
      <div className="searchpage__info">
        <p>50 stays . 20 may to 30 August . 4 guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="$90 / night"
        total="$650 total"
      />
      <SearchResults
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="$60 / night"
        total="$450 total"
      />
      <SearchResults
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResults
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
    </div>
  );
};

export default SearchPage;
