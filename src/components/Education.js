import React from "react";
import "../styles/Education.css";
import FadeInSection from "./FadeInSection";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import Description from "@material-ui/icons/Description";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a senior at
        <a href="https://www.uic.edu/"> The University of Illinois at Chicago</a>, majoring in Computer Science. I am expected to graduate in December 2023.

      </p>
    );
    // const two = (
    //   <p>
    //     Outside of work, I'm interested in following the developments of
    //     science. I also play a lot of video games. And make TikToks.
    //   </p>
    // );
    const desc_items = [one];

    const tech_stack = [
      "Program Design I (CS 111)",
      "Program Design II (CS 141)",
      "Mathematical Foundations of Computing (CS 151)",
      "Programing Practicum (CS 211)",
      "Data Structures (CS 251)",
      "Web App Development (CS 294)",
      "Machine Organization (CS 261)",
      "Languages and Automata (CS 301)",
      "Programming Language Concepts (CS 341)",
      "Software Design (CS 342)",
      "Systems Programming (CS 361)",
      "Computer Design (CS 362)",
      "Communication and Ethics (CS 377)",
      "Computer Algorithms I (CS 401)",
      "Database Systems (CS 480)",
      "Artificial Intelligence I (CS 411)",
      "Computer Vision I (CS 415)",
      "Introduction to Data Science (CS 418)",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="education">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">Education</span>
          </div>
          <div className="education-content">
            <div className="education-description">
              {[one]}
              {"Relevant Coursework:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {/* {[two]} */}
              <br></br>
              <a
                href="https://drive.google.com/file/d/1fCzFtU1FMNzWdW-DMySOQ58GjPpSoEV8/view?usp=sharing"
                className="intro-contact"
              >
                <Description></Description>
                {"  " + "Resume"}
              </a>
            </div>
            {/* <div className="about-image">
              <img src={"/assets/me2.jpg"} />
            </div> */}
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default Education;
