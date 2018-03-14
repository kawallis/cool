import React, { Component } from 'react';
import './About.css';
import Contact from './Contact.js';
import Thumbnail from './Thumbnail.js';


class About extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {
      let techDeck = ['JavaScript', 'Node.js', 'Jquery', 'Express Js', 'CSS', 'React.js', 'React', 'Native', 'HTML5', 'MongoDB', 'SQL'];
    return (
      <div className="AboutContainer">
        
        <div className="LeftContainer">
            <h2 className="AboutHeader">— I'm <span className="BigName">Chris Wallace</span>,<br /> a freelance fullstack web developer.</h2>
            <p className="AboutParagraph">I've always loved creative work and the technical challenges that accompany development. My skills are wide ranging: from front end, back end development to ux and design . I enjoy each part of building sites and applications wether its for a job or personal projects. I am open too all new opportunities so feel free to shoot me a message?</p>
            <div className="DeckContainer">
                {techDeck.map((tech, i) => {
                    return <Thumbnail key={i} name={tech} />
                })}
            </div>
        </div>

        <Contact id="ContactContainer"/>
      </div>
    );
  }
}

export default About;
