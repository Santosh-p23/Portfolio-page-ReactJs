import React from "react";
import "./tiles.css";

var TileCard = props => {
  return (
    <div className="img-container">
      <img className="svg" src={props.info.url} alt={props.info.name} />
    </div>
  );
};

export default TileCard;
