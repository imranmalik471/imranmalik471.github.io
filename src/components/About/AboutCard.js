import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Front End Developer </span>
            from <span className="purple"> Pakistan.</span>
            <br />I am a Computer Science Graduate from Government College University, Lahore. I have three years pf experience in Front end development.
            I enjoys the problem solving and coding. Always strive to learn new things and give my 100%. I can make website for your business to grow up your sales.
            <br />
            <br />
            I have expertise in the following domains:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Custom Web Development
            </li>
            <li className="about-activity">
              <ImPointRight /> WordPress Customization
            </li>
            <li className="about-activity">
              <ImPointRight /> PSD to HTML, Figma to HTML, XD to HTML
            </li>
            <li className="about-activity">
              <ImPointRight /> CMS/CRM Development
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          <footer className="blockquote-footer">Imran Malik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
