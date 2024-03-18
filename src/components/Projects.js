// import React, { useState } from "react";
// import "../styles/Projects.css";
// import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
// import FadeInSection from "./FadeInSection";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import Carousel from "react-bootstrap/Carousel";
// import ExternalLinks from "./ExternalLinks";

// class Projects extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       expanded: true,
//       activeKey: "1",
//       tag: null
//     };

//     this.handleSelect = this.handleSelect.bind(this);
//     this.handleTagClick = this.handleTagClick.bind(this);
//   }
//   handleSelect(eventKey) {
//     this.setState({
//       activeKey: eventKey
//     });
//   }
//   handleTagClick(tag) {
//     if (this.state.tag === tag) {
//       tag = null;
//     }
//     this.setState((state) => ({
//       ...state,
//       tag: tag
//     }));

//   };

//   render() {
//     const projects = {
//       'C++': [
//         {
//           title: "DNA Profiling",
//           desc:
//             "Build DNA strands using the provided ourvector implementation and then determine who the DNA matches to in a database.",
//           techStack: "C++",
//           link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project%201_DNA%20Profiling",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//         {
//           title: "Open Street Map",
//           desc:
//             "Loading the map, building the graph, and computing the shortest weighted path between two points. In this case I'm going to navigate between UIC buildings on the East campus, using the footpaths.",
//           techStack: "C++",
//           link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project7_OpenStreetMaps",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//         {
//           title: "Animated Barchart",
//           desc:
//             "Animated bar charts spread virally on social media in 2019. In this project, I will implement a simple version of this visualization.",
//           techStack: "C++",
//           link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project3_BarchartAnimation",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//         {
//           title: "Explore The Labyrinth",
//           desc:
//             "Using gdb to find the path which can collect the Spellbook, Potion and Wand to escape a labyrinth.",
//           techStack: "C++",
//           link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project4_ExploreTheLabyrinth",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         }
//       ],
//       Java: [
//         {
//           title: "Tic-Tac-Toe",
//           desc:
//             "Using JavaFX to write a very simple version, fully functional of Tic Tac Toe game.",
//           techStack: "Java",
//           link: "https://github.com/HoangBaoNghiBien/JavaProject/tree/main/TicTacToe",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//         {
//           title: "Simple Chatbox",
//           desc:
//             "A simple chat app for messaging with friends and groups of friends.",
//           techStack: "Java, JavaFX",
//           link: "https://github.com/HoangBaoNghiBien/JavaProject/tree/main/ChatBox-Java",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//         {
//           title: "Connect Four",
//           desc:
//             "Connect Four is the gameplay quite similar to tic-tac-toe. Can be played by 2 different players and updated via the server. The game is written by me and 2 partner.",
//           techStack: "Java, JavaFX, FXML",
//           link: "https://github.com/lvu5/cfourgame",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//       ],
//       React: [
//         {
//           title: "Dormitory Management System",
//           desc:
//             "Manage information in the dormitory such as rooms, administrators, staff and students.",
//           techStack: "React, MySQL",
//           link: "https://github.com/lvu5/project480",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//       ],
//       MySQL: [
//         {
//           title: "Dormitory Management System",
//           desc:
//             "Manage information in the dormitory such as rooms, administrators, staff and students.",
//           techStack: "React, MySQL",
//           link: "https://github.com/lvu5/project480",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//       ],
//       JavaScript: [
//         {
//           title: "Fruit Catch Game",
//           desc:
//             "A web game where fruit is dropped randomly. Use manifest.json and serviceworker.js. Can be downloaded to your device.",
//           techStack: "JavaScript",
//           link: "https://github.com/HoangBaoNghiBien/CS294_WebApp/tree/main/FruitCatchGame",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//         {
//           title: "Simple Notes App",
//           desc:
//             "Simple note taking web app with utilities like note statistics, news view, quotes provided by available APIs. Can be downloaded to your device.",
//           techStack: "JavaScript",
//           link: "https://github.com/HoangBaoNghiBien/CS294_WebApp/tree/main/NotesApp",
//           open: "",
//           image: "/assets/Chatbox1.png"
//         },
//       ],
//       Arduino: [
//         {
//           title: "Parking Game",
//           desc:
//             "Read value passed by potentiometer to adjust the speed of character. Land the character into 4 blocks in the bottom, written in C++, using Arduino Uno.",
//           techStack: "Arduino, C++",
//           link: "https://github.com/HoangBaoNghiBien/Arduino/blob/main/landCharacterGame.ino",
//           open: "https://www.tinkercad.com/things/heCzN9NyKWo-parking-game/editel?sharecode=Ec8FOcXcWlqaXlFkxjffYXu04By9KxXMUPfMb5HY9x0",
//           image: "/assets/Chatbox1.png"
//         },
//       ],
//     };


//     return (
//       <div id="projects">
//         <div className="section-header ">
//           <span className="section-title">Projects</span>
//         </div>

//         <div className="tag-container">
//           <ul className="tags">
//             {Object.keys(projects).map((key) => (
//               <button
//                 className={`tag ${this.state.tag === key ? 'active' : ''}`}
//                 key={key}
//                 onClick={() => this.handleTagClick(key)}
//               >
//                 {key}
//               </button>
//             ))}
//           </ul>
//         </div>

//         <div className="project-container">
//           <ul className="projects-grid">
//             {/* Display information based on the Tag selected */}
//             {Object.keys(projects).map((key) => {
//               if (this.state.tag && this.state.tag !== key) return null;
//               return projects[key].map((project) => {
//                 return (
//                   <FadeInSection delay={`${project + 1}00ms`}>
//                     <li className="projects-card">
//                       <div className="card-image">
//                         <img src={project.image}></img>
//                       </div>
//                       <div className="card-header">
//                         <ExternalLinks
//                           githubLink={project.link}
//                           openLink={project.open}
//                         ></ExternalLinks>
//                       </div>
//                       <div className="card-title">{project.title}</div>
//                       <div className="card-desc">{project.desc}</div>
//                       <div className="card-tech">{project.techStack}</div>
//                     </li>
//                   </FadeInSection>)
//               })
//             }
//             )}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default Projects;


import React, { useState } from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      tag: "All"
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  handleTagClick(tag) {
    if (this.state.tag === tag) {
      tag = "All";
    }
    this.setState((state) => ({
      ...state,
      tag: tag
    }));

  };

  render() {
    const projects = {
      All: [],
      React: [
        {
          title: "Traffic Crashes Analysis",
          desc:
            "Conducted comprehensive traffic crash data analysis using advanced visual techniques, including dynamic scatterplot animations to effectively communicate temporal patterns and occurrences, thereby proposing actionable insights for data-driven decision-making",
          techStack: "React, Database, Vega-lite",
          link: "https://github.com/thanhtaita/CrashVisualization",
          open: "https://crashes-visualization.netlify.app/",
          image: "/assets/Traffic-Crash.jpeg"
        },
      ],
      MySQL: [
        {
          title: "Dormitory Management System",
          desc:
            "Manage information in the dormitory such as rooms, administrators, staff and students.",
          techStack: "React, MySQL",
          link: "https://github.com/lvu5/project480",
          open: "",
          image: "/assets/Dorm.png"
        },
      ],
      Python: [
        {
          title: "Early Detection of Skin Cancer",
          desc:
            "Trained and validated a model using the HAM 10,000 dermatoscopy image dataset from Harvard Dataverse and achieved 91% accuracy by implementing custom CNN and MobileNetV2 strategies",
          techStack: "Python, Database, CNN, MobileNetV2",
          link: "https://github.com/HoangBaoNghiBien/skin-cancer?tab=readme-ov-file",
          open: "",
          image: "/assets/Dorm.png"
        },
      ],
      JavaScript: [
        {
          title: "Trip Vote",
          desc:
            "A web application to facilitate vacation planning for groups (4-12 people), addressing diverse preferences and logistical challenges",
          techStack: "JavaScript, HTML, CSS, Bootstrap",
          link: "https://github.com/HoangBaoNghiBien/TripVote-web",
          open: "https://trip-vote.netlify.app/",
          image: "/assets/TripVote.png"
        },
        {
          title: "Fruit Catch Game",
          desc:
            "A web game where fruit is dropped randomly. Use manifest.json and serviceworker.js. Can be downloaded to your device.",
          techStack: "JavaScript",
          link: "https://github.com/HoangBaoNghiBien/CS294_WebApp/tree/main/FruitCatchGame",
          open: "",
          image: "/assets/FruitCatch1.png"
        },
        {
          title: "Simple Notes App",
          desc:
            "Simple note taking web app with utilities like note statistics, news view, quotes provided by available APIs. Can be downloaded to your device.",
          techStack: "JavaScript",
          link: "https://github.com/HoangBaoNghiBien/CS294_WebApp/tree/main/NotesApp",
          open: "",
          image: "/assets/NotesApp1.png"
        },
      ],
      'C++': [
        {
          title: "DNA Profiling",
          desc:
            "Build DNA strands using the provided ourvector implementation and then determine who the DNA matches to in a database.",
          techStack: "C++",
          link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project%201_DNA%20Profiling",
          open: "",
          image: "/assets/DNAProfiling1.png"
        },
        {
          title: "Open Street Map",
          desc:
            "Loading the map, building the graph, and computing the shortest weighted path between two points. In this case I'm going to navigate between UIC buildings on the East campus, using the footpaths.",
          techStack: "C++",
          link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project7_OpenStreetMaps",
          open: "",
          image: "/assets/OpenMap.png"
        },
        {
          title: "Animated Barchart",
          desc:
            "Animated bar charts spread virally on social media in 2019. In this project, I will implement a simple version of this visualization.",
          techStack: "C++",
          link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project3_BarchartAnimation",
          open: "",
          image: "/assets/Barchart.png"
        },
        {
          title: "Explore The Labyrinth",
          desc:
            "Using gdb to find the path which can collect the Spellbook, Potion and Wand to escape a labyrinth.",
          techStack: "C++",
          link: "https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project4_ExploreTheLabyrinth",
          open: "",
          image: "/assets/Labyrinth.png"
        }
      ],
      Java: [
        {
          title: "Tic-Tac-Toe",
          desc:
            "Using JavaFX to write a very simple version, fully functional of Tic Tac Toe game.",
          techStack: "Java",
          link: "https://github.com/HoangBaoNghiBien/JavaProject/tree/main/TicTacToe",
          open: "",
          image: "/assets/Tictactoe1.png"
        },
        {
          title: "Simple Chatbox",
          desc:
            "A simple chat app for messaging with friends and groups of friends.",
          techStack: "Java, JavaFX",
          link: "https://github.com/HoangBaoNghiBien/JavaProject/tree/main/ChatBox-Java",
          open: "",
          image: "/assets/Chatbox1.png"
        },
        {
          title: "Connect Four",
          desc:
            "Connect Four is the gameplay quite similar to tic-tac-toe. Can be played by 2 different players and updated via the server. The game is written by me and 2 partner.",
          techStack: "Java, JavaFX, FXML",
          link: "https://github.com/lvu5/cfourgame",
          open: "",
          image: "/assets/ConnectFour1.png"
        },
      ],
      Arduino: [
        {
          title: "Parking Game",
          desc:
            "Read value passed by potentiometer to adjust the speed of character. Land the character into 4 blocks in the bottom, written in C++, using Arduino Uno.",
          techStack: "Arduino, C++",
          link: "https://github.com/HoangBaoNghiBien/Arduino/blob/main/landCharacterGame.ino",
          open: "https://www.tinkercad.com/things/heCzN9NyKWo-parking-game/editel?sharecode=Ec8FOcXcWlqaXlFkxjffYXu04By9KxXMUPfMb5HY9x0",
          image: "/assets/parkingGame.png"
        },
      ],
    };

    for (let key in projects) {
      if (key === "All") continue;
      projects.All = projects.All.concat(projects[key]);
    }

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">Projects</span>
        </div>

        <div className="tag-container">
          <ul className="tags">
            {Object.keys(projects).map((key) => (
              <button
                className={`tag ${this.state.tag === key ? 'active' : ''}`}
                key={key}
                onClick={() => this.handleTagClick(key)}
              >
                {key}
              </button>
            ))}
          </ul>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {/* Display information based on the Tag selected */}
            {Object.keys(projects).map((key) => {
              if (this.state.tag && this.state.tag !== key) return null;
              return projects[key].map((project) => {
                return (
                  <FadeInSection delay={`${project + 1}00ms`}>
                    <li className="projects-card">
                      <div className="card-image">
                        <img src={project.image}></img>
                      </div>
                      <div className="card-header">
                        <ExternalLinks
                          githubLink={project.link}
                          openLink={project.open}
                        ></ExternalLinks>
                      </div>
                      <div className="card-title">{project.title}</div>
                      <div className="card-desc">{project.desc}</div>
                      <div className="card-tech">{project.techStack}</div>
                    </li>
                  </FadeInSection>)
              })
            }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
