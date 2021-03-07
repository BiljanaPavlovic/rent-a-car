/** @format */

import React from "react";
import "./header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <div>
      <section className="showcase">
        <div className="video-container">
          <video
            src="/rent-a-car/img/video.mp4"
            className="mov"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div className="content">
          <Row>
            <Col>
              <img
                src="/rent-a-car/img/logo.png"
                alt="rent-a-car logo"
                className="logo-img"
              />
            </Col>
            <Col>
              {" "}
              <h1>RENT-A-CAR</h1>
              <h3>LIKE A BOSS</h3>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}
