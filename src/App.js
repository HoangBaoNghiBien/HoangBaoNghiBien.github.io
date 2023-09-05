import React from "react";
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Credits from "./components/Credits";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <Education></Education>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <Credits></Credits>
      </div>
      <SidebarNav />
    </div>
  );
}

export default App;
