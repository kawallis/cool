import React, { Component } from 'react';
import './Project.css';
import Thumbnail from './Thumbnail';
import Reveal from 'react-reveal'; // this package 
import 'animate.css/animate.css'; // CSS animation effects library 

class Project extends Component {

    constructor(props) {    
		super(props);	
		this.state = {
			
		};
	} 

    render() {
        let {project} = this.props;
        return (
            <Reveal effect="animated fadeInUp">
                <div className="ProjectContainer">
                    <div className="ProjectImage"
                        style={{
                            background: `linear-gradient(0deg, rgba(113,95,159,0.8),rgba(113,247,159,0.8)), url(${project.image})`,
                            backgroundSize: 'cover',
                        }}
                    >
                    </div>
                    <div className="ProjectInfoContainer">
                        <a href={project.url}><h2 className="ProjectHeader">{project.title}</h2></a>
                        <p className="ProjectParagraph"
                        >{project.description}</p>
                        <div className="techContainer">
                            {project.techDeck.map((tech, i) => {
                                return <Thumbnail key={i} name={tech} />
                            })}
                        </div>
                    </div>
                </div>
            </Reveal>
        );
  }
}

export default Project;