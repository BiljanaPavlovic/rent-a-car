/** @format */

import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div>
      <section class="showcase">
        <div class="video-container">
          <video
            src="/rent-a-car/img/video.mp4"
            className="mov"
            autoPlay
            muted
            loop
          ></video>
        </div>

        <div class="content">
          <img
            src="/rent-a-car/img/logo.png"
            alt="rent-a-car logo"
            className="logo-img"
          />
          <h1>RENT - A - CAR</h1>
          <h3>LIKE A BOSS</h3>
        </div>
      </section>
    </div>
  );
}
