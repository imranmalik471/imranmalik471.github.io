import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
        <div className="project-thumb">
          <a href={props.weblink} target="_blank">
            <Card.Img src={props.imgPath} alt={props.title}/>
          </a>
        </div>
    </Card>
  );
}
export default ProjectCards;
