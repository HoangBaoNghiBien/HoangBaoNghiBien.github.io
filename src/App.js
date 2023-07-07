// import logo from './logo.svg';
// import './App.css';
import React from "react";

import FullPageScroll from "./components/navbar/FullPageScroll";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Courses from "./components/Courses";
import Research from "./components/research/Research";
import Publications from "./components/publications/Publications";
import News from "./components/News";
import Team from "./components/Team";
import Contact from "./components/Contact";


import "./styles/Global.css";
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      {/* <NavBar /> */}
      {/* <Home />
      <Research />
      <Publications />
      <Courses />
      <News />
      <Team /> */}
      <FullPageScroll />
    </div>
  );
}

export default App;
