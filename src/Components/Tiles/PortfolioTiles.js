import React from "react";
import Row from "react-bootstrap/Row";
import "./tiles.css";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";

var portfolioTile = props => {
  return (
    <ListGroup.Item>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.info.img}
          alt=""
        />
        <Media.Body className="project">
          <h5>{props.info.project}</h5>
          <p>{props.info.description}</p>
        </Media.Body>
        <Media.Body className="links">
          <Row>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.info.repoLink}
            >
              Repo Link
            </a>
          </Row>
        </Media.Body>
      </Media>
    </ListGroup.Item>
  );
};

export default portfolioTile;
