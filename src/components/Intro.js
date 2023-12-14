import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
// import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        {/* <FractalTree></FractalTree> */}
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {/* {"Hi, "} */}
            <span className="intro-name">{"Xin chào, mình là Nghi."}</span>
            {/* Then clear and write new text. */}
            <Typist.Backspace count={23} delay={200} />
            <span className="intro-name">{"Hi, I'm Nghi."}</span>

          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">A software engineer</div>
          <div className="intro-desc">
            My name is Hoang Bao Nghi Bien (prefer to be called Nghi) and I'm a software engineer based in Chicago. 
            Interest in designing and developing software, especially games and user interface design.
          </div>
          <a
            href="mailto:hbnbien@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Get in touch!"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
