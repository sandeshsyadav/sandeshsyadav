import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { PiSoccerBallFill } from "react-icons/pi";
import { FaParachuteBox } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {/* Made with <span role="img">❤️</span> by {greeting.title2} */}
          Fun Facts.
          <FaParachuteBox /> I love to skydive | <PiSoccerBallFill /> Passionate
          about Soccer | <MdOutlineVolunteerActivism />
          <span> Volunteer by teaching and mentoring kids </span>
        </p>
      </Fade>
    </div>
  );
}
