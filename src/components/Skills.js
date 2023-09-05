import React from "react";
import "../styles/Skills.css";
import FadeInSection from "./FadeInSection";

class Skills extends React.Component {
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
                Here are some technologies I have been working with:
            </p>
        );
        const desc_items = [one];
        
        const language_stack = [
            "C/C++",
            "HTML/CSS",
            "JavaScript",
            "Python",
            "Java",
            "MySQL",
            "Arduino",
        ];
        const framework_stack = [
            "React",
            "Boostrap",
        ];
        const software_stack = [
            "GitHub",
            "Microsoft Excel",            
            "Microsoft Word",
            "PowerPoint",
            "Outlook",
            "Procreate",
        ];

        const language_items = language_stack.map(stack1 => <li>{stack1}</li>);
        const software_items = software_stack.map(stack2 => <li>{stack2}</li>);
        const framework_items = framework_stack.map(stack3 => <li>{stack3}</li>);

        return (
            <div id="skills">
                <FadeInSection>
                    <div className="section-header ">
                        <span className="section-title">Skills</span>
                    </div>
                    <div className="skills-content">
                        <div className="skills-description">
                            {[one]}
                            {"Programming language:"}
                            <ul className="language-stack">
                                {language_stack.map(function (language_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{language_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                            {"Framework | Library:"}
                            <ul className="framework_stack">
                                {framework_stack.map(function (framework_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{framework_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                            {"Software:"}
                            <ul className="software_stack">
                                {software_stack.map(function (software_item, i) {
                                    return (
                                        <FadeInSection delay={`${i + 1}00ms`}>
                                            <li>{software_item}</li>
                                        </FadeInSection>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        );
    }
}

export default Skills;
