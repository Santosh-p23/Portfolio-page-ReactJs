import React from "react";
import TileCard from "./Tiles/TechTiles";
import PortfolioTiles from "./Tiles/PortfolioTiles";
import ContactTiles from "./Tiles/ContactTiles";
import AboutDesc from "./Tiles/AboutDesc";
import ListGroup from "react-bootstrap/ListGroup";
import "./content.css";

var Content = props => {
  console.log(props.data);
  if (props.data.title === "Tech Stack") {
    const TechTiles = props.data.content.map(item => (
      <TileCard key={item.id} info={item} />
    ));
    return (
      <div className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        {TechTiles}
      </div>
    );
  } else if (props.data.title === "Portfolio") {
    const Portfolios = props.data.content.map(item => (
      <ListGroup>
        <PortfolioTiles key={item.id} info={item} />
      </ListGroup>
    ));
    return <div className="portfolios">{Portfolios}</div>;
  } else if (props.data.title === "Contact Me") {
    console.log(props.data);
    const Info = props.data.content.map(item => (
      <div>
        <ContactTiles key={item.id} info={item} />
      </div>
    ));
    return (
      <div className="contact allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        {Info}
      </div>
    );
  } else if (props.data.title === "About Me") {
    console.log(props.data.content);

    const AboutMe = props.data.content.map(para => (
      <div>
        <AboutDesc key={para.id} info={para} />
      </div>
    ));
    return <div>{AboutMe}</div>;
  }
  return (
    <div>
      <h2>Coming Soon !</h2>
    </div>
  );
};

export default Content;
