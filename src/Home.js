import React, { Component } from 'react';
import './Home.css';
import TypeWriter from 'react-typewriter';
class Home extends Component {

    getFlightPattern() {
        return Math.floor(Math.random() * (700));
    }    

    render() {
    return (
        <div className="HomeContainer">
            <TypeWriter typing={1} maxDelay={300}>
                <h1>eyo</h1>
                <p className="HomeIntro">I'm chris a full stack web developer </p>
            </TypeWriter>
        </div> 
    );
  }
}

export default Home;