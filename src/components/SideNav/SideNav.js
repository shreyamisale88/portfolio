import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://thumbs.dreamstime.com/b/victory-sign-businesswoman-successful-making-hand-front-his-desk-working-typing-laptop-35402424.jpg"/*"https://avatars2.githubusercontent.com/u/26179770?s=400&u=c192e93f9e95569393dc3ba8875e3214940ff01e&v=4"*/
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Shreya Misale</h2>
            <p className="subtitle">"A Student"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};