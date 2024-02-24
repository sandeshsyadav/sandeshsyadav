import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            About Me
          </h1>
          <p>
            Programming and coding enthusiast with innovative approaches to
            problem solving. Highly adept in software development tools and
            methodologies. A leader who collaborates effectively with team
            members and embraces mentorship.
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
