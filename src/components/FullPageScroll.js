import React from "react";
import NavBar from "./NavBar";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

const FullPageScroll = () => {
    const SectionStyle = {
        height: '100vh',
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <Fullpage>
            <FullPageSections>

                <FullpageSection style={SectionStyle}>
                    <NavBar />
                    <h1>Section 1</h1>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <h1>Section 2</h1>
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <h1>Section 3</h1>
                </FullpageSection>

            </FullPageSections>
        </Fullpage>
    );
};

export default FullPageScroll;