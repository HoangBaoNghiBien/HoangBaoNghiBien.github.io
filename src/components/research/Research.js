import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import './Research.css';
import { ResearchData } from './ResearchData';
import ResearchContent from "./ResearchContent";

const Research = () => {

    //function when click on image, it will show the content of the research
    const [selectedResearch, setSelectedResearch] = useState(null);

    // Function to handle image click
    const handleImageClick = (research) => {
        setSelectedResearch(research);
    };

    // Function to clear selected research
    const clearSelectedResearch = () => {
        setSelectedResearch(null);
    };

    return (
        <div id="research">
            <h1>Research</h1>
            {selectedResearch ? (
                <ResearchContent research={selectedResearch} clearResearch={clearSelectedResearch} />
            ) : (
            <div className="cards">
                <ul className="projects-grid">
                    {ResearchData.map((item) => {
                        return (
                            <li className="projects-card" key={item.aKey}>
                                <div className="card">
                                    <img
                                        id="image"
                                        src={item.url}
                                        alt={item.title}
                                        onClick={() => handleImageClick(item)}
                                    />
                                </div>
                                <h5 className="card-title">{item.title}</h5>
                            </li>
                        );
                    })}
                </ul>
            </div>
            )}
            {/* {selectedResearch && (
                <ResearchContent research={selectedResearch} />
            )} */}
        </div>
    );
}

export default Research;