import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eb3hire from "../../Assets/Projects/eb3hire.png";
import sectie5 from "../../Assets/Projects/sectie5.png";
import ambar from "../../Assets/Projects/ambarimmigratio.png";
import meshwork from "../../Assets/Projects/meshwork-org.png";
import gorillapower from "../../Assets/Projects/gorillapower.png";
import matarat from "../../Assets/Projects/matarat-sa.png";
import gaterepair from "../../Assets/Projects/gaterepair.png";
import mastermindsolar from "../../Assets/Projects/mastermindsolar.png";
import squarescafe from "../../Assets/Projects/squarescafe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row className="mt-5" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card.Title>Eb3hire</Card.Title>
            <ProjectCard
              imgPath={eb3hire}
              isBlog={false}
              title="Eb3hire"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Sectie5</Card.Title>
            <ProjectCard
              imgPath={sectie5}
              isBlog={false}
              title="Sectie5"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Ambar Immigration</Card.Title>
            <ProjectCard
              imgPath={ambar}
              isBlog={false}
              title="Ambar Immigration"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Meshwork</Card.Title>
            <ProjectCard
              imgPath={meshwork}
              isBlog={false}
              title="Meshwork"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Gorillapower</Card.Title>
            <ProjectCard
              imgPath={gorillapower}
              isBlog={false}
              title="Gorillapower"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Matarat</Card.Title>
            <ProjectCard
              imgPath={matarat}
              isBlog={false}
              title="Matarat"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Gate Repair</Card.Title>
            <ProjectCard
              imgPath={gaterepair}
              isBlog={false}
              title="Gate Repair"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>Mastermind Solar</Card.Title>
            <ProjectCard
              imgPath={mastermindsolar}
              isBlog={false}
              title="mastermindsolar"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

          <Col md={4} className="project-card">
            <Card.Title>4squarescafe</Card.Title>
            <ProjectCard
              imgPath={squarescafe}
              isBlog={false}
              title="4squarescafe"
              weblink="https://github.com/imranmalik471"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
