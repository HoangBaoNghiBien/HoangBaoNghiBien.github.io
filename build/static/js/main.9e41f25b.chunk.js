(this.webpackJsonpHBNB_portfolio=this.webpackJsonpHBNB_portfolio||[]).push([[0],{156:function(e,t,a){e.exports=a(303)},161:function(e,t,a){},162:function(e,t,a){},288:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},293:function(e,t,a){},294:function(e,t,a){},295:function(e,t,a){},297:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(23),r=a.n(c),l=(a(161),a(10)),o=a(11),s=a(8),m=a(14),u=a(12),d=a(328),h=a(42),p=a.n(h),g=a(144),v=a.n(g),b=a(45),f=a.n(b),E=(a(162),a(101),a(66));function S(e){var t=i.a.useState(!1),a=Object(E.a)(t,2),n=a[0],c=a[1],r=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&c(e.isIntersecting)}))}));return e.observe(r.current),function(){return e.unobserve(r.current)}}),[]),i.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:r},e.children)}var y=window.innerWidth<600,k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[i.a.createElement("a",{href:"#intro"},"#home"),i.a.createElement("a",{href:"#education"},"#education"),i.a.createElement("a",{href:"#skills"},"#skills"),i.a.createElement("a",{href:"#experience"},"#experience"),i.a.createElement("a",{href:"#projects"},"#projects")];return i.a.createElement("div",{className:"sidebar-nav"},!y&&i.a.createElement(d.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},i.a.createElement(d.a.Body,null,i.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return i.a.createElement(S,{delay:"".concat(t+1,"00ms")},i.a.createElement("div",null,e))}))))),i.a.createElement("div",{className:"sidebar-logos",href:"/"},i.a.createElement("a",{href:"mailto:hbnbien@gmail.com"},i.a.createElement(p.a,{style:{fontSize:20}})),i.a.createElement("a",{href:"https://github.com/HoangBaoNghiBien"},i.a.createElement(f.a,{style:{fontSize:19}})),i.a.createElement("a",{href:"https://www.linkedin.com/in/hoangbaonghibien/"},i.a.createElement(v.a,{style:{fontSize:21}}))))}}]),a}(i.a.Component),j=(a(288),a(95)),C=a.n(j),N=(a(148),a(291),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",visible:!0},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"intro"},i.a.createElement(C.a,{avgTypingDelay:120},i.a.createElement("span",{className:"intro-title"},i.a.createElement("span",{className:"intro-name"},"Xin ch\xe0o, m\xecnh l\xe0 Nghi."),i.a.createElement(C.a.Backspace,{count:23,delay:200}),i.a.createElement("span",{className:"intro-name"},"Hi, I'm Nghi."))),i.a.createElement(S,null,i.a.createElement("div",{className:"intro-subtitle"},"A software engineer"),i.a.createElement("div",{className:"intro-desc"},"My name is Hoang Bao Nghi Bien (prefer to be called Nghi) and I'm a software engineer based in Chicago. Interest in designing and developing software, especially games and user interface design."),i.a.createElement("a",{href:"mailto:hbnbien@gmail.com",className:"intro-contact"},i.a.createElement(p.a,null),"  Get in touch!")))}}]),a}(i.a.Component)),w=a(149),O=a(326),B=a(330),A=a(327),x=a(325),P=a(329),I=window.innerWidth<600;function T(e){var t=e.children,a=e.value,n=e.index,c=Object(w.a)(e,["children","value","index"]);return I?i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),a===n&&i.a.createElement(P.a,{p:3},i.a.createElement(x.a,null,t))):i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},c),a===n&&i.a.createElement(P.a,{p:3},i.a.createElement(x.a,null,t)))}var D=Object(O.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),L=function(){var e=D(),t=i.a.useState(0),a=Object(E.a)(t,2),n=a[0],c=a[1],r={"UIC BEI Lab":{jobTitle:"Web developer, Automation Engineer @",duration:"JUN 2023 - PRESENT",desc:["Created a website for BEI Lab using React.js","Developed an automated pipeline for running lab\u2019s experiments on EnergyPlus using Python which reduced the manual work by 70%","Built an automated procedure to process experiments data to user which reduced the complexity for user significantly"]},"University of Illinois Chicago":{jobTitle:"Teaching Assistant @",duration:"JAN 2022 - PRESENT",desc:["Assist course instructors in preparing classes and course materials (e.g. answering inquiries, maintaining course websites, copying)","Support over 200 students in practice/discussion sessions or office hours"]},CBBEL:{jobTitle:"Intern Software Developer @",duration:"MAY 2022 - JUNE 2022",desc:["CBBEL: Christopher B. Burke Engineering","Participating in development of the ADA Design Ramp Tool project - a computational aid for engineers in designing sidewalks quickly and conveniently","Support, give ideas to redesign the interface","Using HTML, CSS and JavaScript"]}};return i.a.createElement("div",{className:e.root},i.a.createElement(B.a,{orientation:I?null:"vertical",variant:I?"fullWidth":"scrollable",value:n,onChange:function(e,t){c(t)},className:e.tabs},Object.keys(r).map((function(e,t){return i.a.createElement(A.a,Object.assign({label:I?"0".concat(t,"."):e},(a=t,I?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(r).map((function(e,t){return i.a.createElement(T,{value:n,index:t},i.a.createElement("span",{className:"joblist-job-title"},r[e].jobTitle+" "),i.a.createElement("span",{className:"joblist-job-company"},e),i.a.createElement("div",{className:"joblist-duration"},r[e].duration),i.a.createElement("ul",{className:"job-description"},r[e].desc.map((function(e,t){return i.a.createElement(S,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",{key:t},e))}))))})))},M=(a(292),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"experience"},i.a.createElement(S,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"Experience")),i.a.createElement(L,null)))}}]),a}(i.a.Component)),J=(a(293),a(146)),K=a.n(J),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=i.a.createElement("p",null,"I am currently a senior at",i.a.createElement("a",{href:"https://www.uic.edu/"}," The University of Illinois at Chicago"),", majoring in Computer Science. I am expected to graduate in December 2023."),t=["Program Design I (CS 111)","Program Design II (CS 141)","Mathematical Foundations of Computing (CS 151)","Programing Practicum (CS 211)","Data Structures (CS 251)","Web App Development (CS 294)","Machine Organization (CS 261)","Languages and Automata (CS 301)","Programming Language Concepts (CS 341)","Software Design (CS 342)","Systems Programming (CS 361)","Computer Design (CS 362)","Communication and Ethics (CS 377)","Computer Algorithms I (CS 401)","Database Systems (CS 480)","Artificial Intelligence I (CS 411)","Computer Vision I (CS 415)","Introduction to Data Science (CS 418)"];t.map((function(e){return i.a.createElement("li",null,e)}));return i.a.createElement("div",{id:"education"},i.a.createElement(S,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"Education")),i.a.createElement("div",{className:"education-content"},i.a.createElement("div",{className:"education-description"},[e],"Relevant Coursework:",i.a.createElement("ul",{className:"tech-stack"},t.map((function(e,t){return i.a.createElement(S,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))}))),i.a.createElement("br",null),i.a.createElement("a",{href:"https://drive.google.com/file/d/1fCzFtU1FMNzWdW-DMySOQ58GjPpSoEV8/view?usp=sharing",className:"intro-contact"},i.a.createElement(K.a,null),"  Resume")))))}}]),a}(i.a.Component),F=(a(294),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=i.a.createElement("p",null,"Here are some technologies I have been working with:"),t=["C/C++","HTML/CSS","JavaScript","Python","Java","MySQL","Arduino"],a=["React","Boostrap"],n=["GitHub","Microsoft Excel","Microsoft Word","PowerPoint","Outlook","Procreate"];t.map((function(e){return i.a.createElement("li",null,e)})),n.map((function(e){return i.a.createElement("li",null,e)})),a.map((function(e){return i.a.createElement("li",null,e)}));return i.a.createElement("div",{id:"skills"},i.a.createElement(S,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"Skills")),i.a.createElement("div",{className:"skills-content"},i.a.createElement("div",{className:"skills-description"},[e],"Programming language:",i.a.createElement("ul",{className:"language-stack"},t.map((function(e,t){return i.a.createElement(S,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))}))),"Framework | Library:",i.a.createElement("ul",{className:"framework_stack"},a.map((function(e,t){return i.a.createElement(S,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))}))),"Software:",i.a.createElement("ul",{className:"software_stack"},n.map((function(e,t){return i.a.createElement(S,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))})))))))}}]),a}(i.a.Component)),W=a(98),_=(a(295),a(296),a(92)),R=a.n(_),U=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("span",{className:"external-links"},i.a.createElement("a",{className:"github-icon",href:this.props.githubLink},i.a.createElement(f.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),this.props.openLink&&i.a.createElement("a",{className:"open-icon",href:this.props.openLink},i.a.createElement(R.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))}}]),a}(i.a.Component),z=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",tag:"All"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e.handleTagClick=e.handleTagClick.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"handleTagClick",value:function(e){this.state.tag===e&&(e="All"),this.setState((function(t){return Object(W.a)(Object(W.a)({},t),{},{tag:e})}))}},{key:"render",value:function(){var e=this,t={All:[],"C++":[{title:"DNA Profiling",desc:"Build DNA strands using the provided ourvector implementation and then determine who the DNA matches to in a database.",techStack:"C++",link:"https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project%201_DNA%20Profiling",open:"",image:"/assets/DNAProfiling1.png"},{title:"Open Street Map",desc:"Loading the map, building the graph, and computing the shortest weighted path between two points. In this case I'm going to navigate between UIC buildings on the East campus, using the footpaths.",techStack:"C++",link:"https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project7_OpenStreetMaps",open:"",image:"/assets/OpenMap.png"},{title:"Animated Barchart",desc:"Animated bar charts spread virally on social media in 2019. In this project, I will implement a simple version of this visualization.",techStack:"C++",link:"https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project3_BarchartAnimation",open:"",image:"/assets/Barchart.png"},{title:"Explore The Labyrinth",desc:"Using gdb to find the path which can collect the Spellbook, Potion and Wand to escape a labyrinth.",techStack:"C++",link:"https://github.com/HoangBaoNghiBien/CS251_Project/tree/main/Project4_ExploreTheLabyrinth",open:"",image:"/assets/Labyrinth.png"}],Java:[{title:"Tic-Tac-Toe",desc:"Using JavaFX to write a very simple version, fully functional of Tic Tac Toe game.",techStack:"Java",link:"https://github.com/HoangBaoNghiBien/JavaProject/tree/main/TicTacToe",open:"",image:"/assets/Tictactoe1.png"},{title:"Simple Chatbox",desc:"A simple chat app for messaging with friends and groups of friends.",techStack:"Java, JavaFX",link:"https://github.com/HoangBaoNghiBien/JavaProject/tree/main/ChatBox-Java",open:"",image:"/assets/Chatbox1.png"},{title:"Connect Four",desc:"Connect Four is the gameplay quite similar to tic-tac-toe. Can be played by 2 different players and updated via the server. The game is written by me and 2 partner.",techStack:"Java, JavaFX, FXML",link:"https://github.com/lvu5/cfourgame",open:"",image:"/assets/ConnectFour1.png"}],React:[{title:"Dormitory Management System",desc:"Manage information in the dormitory such as rooms, administrators, staff and students.",techStack:"React, MySQL",link:"https://github.com/lvu5/project480",open:"",image:"/assets/Dorm.png"}],MySQL:[{title:"Dormitory Management System",desc:"Manage information in the dormitory such as rooms, administrators, staff and students.",techStack:"React, MySQL",link:"https://github.com/lvu5/project480",open:"",image:"/assets/Dorm.png"}],JavaScript:[{title:"Fruit Catch Game",desc:"A web game where fruit is dropped randomly. Use manifest.json and serviceworker.js. Can be downloaded to your device.",techStack:"JavaScript",link:"https://github.com/HoangBaoNghiBien/CS294_WebApp/tree/main/FruitCatchGame",open:"",image:"/assets/FruitCatch1.png"},{title:"Simple Notes App",desc:"Simple note taking web app with utilities like note statistics, news view, quotes provided by available APIs. Can be downloaded to your device.",techStack:"JavaScript",link:"https://github.com/HoangBaoNghiBien/CS294_WebApp/tree/main/NotesApp",open:"",image:"/assets/NotesApp1.png"}],Arduino:[{title:"Parking Game",desc:"Read value passed by potentiometer to adjust the speed of character. Land the character into 4 blocks in the bottom, written in C++, using Arduino Uno.",techStack:"Arduino, C++",link:"https://github.com/HoangBaoNghiBien/Arduino/blob/main/landCharacterGame.ino",open:"https://www.tinkercad.com/things/heCzN9NyKWo-parking-game/editel?sharecode=Ec8FOcXcWlqaXlFkxjffYXu04By9KxXMUPfMb5HY9x0",image:"/assets/parkingGame.png"}]};for(var a in t)"All"!==a&&(t.All=t.All.concat(t[a]));return i.a.createElement("div",{id:"projects"},i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"Projects")),i.a.createElement("div",{className:"tag-container"},i.a.createElement("ul",{className:"tags"},Object.keys(t).map((function(t){return i.a.createElement("button",{className:"tag ".concat(e.state.tag===t?"active":""),key:t,onClick:function(){return e.handleTagClick(t)}},t)})))),i.a.createElement("div",{className:"project-container"},i.a.createElement("ul",{className:"projects-grid"},Object.keys(t).map((function(a){return e.state.tag&&e.state.tag!==a?null:t[a].map((function(e){return i.a.createElement(S,{delay:"".concat(e+1,"00ms")},i.a.createElement("li",{className:"projects-card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:e.image})),i.a.createElement("div",{className:"card-header"},i.a.createElement(U,{githubLink:e.link,openLink:e.open})),i.a.createElement("div",{className:"card-title"},e.title),i.a.createElement("div",{className:"card-desc"},e.desc),i.a.createElement("div",{className:"card-tech"},e.techStack)))}))})))))}}]),a}(i.a.Component),G=(a(297),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement(S,null,i.a.createElement("div",{id:"credits"},i.a.createElement("div",{className:"ending-credits"},i.a.createElement("h4",null,"Hoang Bao Nghi Bien"),i.a.createElement("div",null,"\xa9 2023"))))}}]),a}(i.a.Component));a(298),a(299),a(300);var X=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"content"},i.a.createElement(N,null),i.a.createElement(H,null),i.a.createElement(F,null),i.a.createElement(M,null),i.a.createElement(z,null),i.a.createElement(G,null)),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(301);var q=a(147);r.a.render(i.a.createElement(q.a,null,i.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.9e41f25b.chunk.js.map