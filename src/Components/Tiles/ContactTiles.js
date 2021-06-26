import React from "react";
import Card from "react-bootstrap/Card";
import "./tiles.css";

var contactTile = props => {
  return (
    <Card className="contact-card">
      <Card.Img
        className="contact-image svg"
        variant="top"
        src={props.info.source}
      />
      <Card.Body>
        <Card.Title>
          <a target="_blank" rel="noopener noreferrer" href={props.info.url}>
            {props.info.title}
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default contactTile;
