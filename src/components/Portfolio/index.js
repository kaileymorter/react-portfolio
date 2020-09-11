import React from 'react';
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio(props) {

    return (
        <div>
            <div>
                <h1 className="text-center">Web Development Portfolio</h1>
            </div>

            <Wrapper>
                {projects.map((project) => (
                    <ProjectCard  key={project.id} name={project.name} github={project.github} deploy={project.deploy}/>
                ))}
            </Wrapper>
        </div>
    );
}

export default Portfolio;

