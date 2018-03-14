import React, { Component } from 'react';
import './Projects.css';
import Project from './Project';
import ProjectData from './data/projectData';
import ScrollEffect from 'react-scroll-effects';

class Projects extends Component {

    constructor(props) {    
		super(props);	

		this.state = {
			projects: ProjectData,
		};
	} 

    render() {
		let {projects} = this.state;
        return (
					<ScrollEffect animate="fadeInUp">
						<div className="Projects-Container">
					{projects.map( (project, i) => {
						return <Project key={i} project={project} />
					})}
						</div>
					</ScrollEffect>
        );
  }
}

export default Projects;