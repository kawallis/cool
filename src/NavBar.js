import React, { Component } from 'react';
import './NavBar.css';
import Home from './Home';
import Gallery from './Gallery';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import { Motion, spring } from 'react-motion';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuToggle: false,
      currentView: 'Home'
    };

    this.rotateAndShowMenu = this.rotateAndShowMenu.bind(this);
  }

  rotateAndShowMenu () {
    this.setState({menuToggle: !this.state.menuToggle});
  }

  render() {
    let rotation = this.state.menuToggle ? "90deg" : "0deg";
    
    return (
      <div >
        <div className="Nav">
          <div className="icon-bars" style={{transform: `rotate(${rotation})`}} onClick={this.rotateAndShowMenu}></div>
          <a href="https://github.com/kawallis?tab=repositories"><div className="icon-mark-github ico"></div></a>
        </div>
        <div className="BreadCrumbs">
          {this.state.currentView}
        </div>
        <Motion style={{x: spring(!this.state.menuToggle ? -100 : 0)}}>
          {
            ({x}) => {  
              return (
                <div onClick={this.rotateAndShowMenu} className="Menu" style={{
                  transform: `translate3d(${x}vw, 0, 0)`
                }}>
                  <li onClick={ (e) => {
                    this.rotateAndShowMenu();
                    this.setState({currentView: e.target.textContent})
                    this.props.changeView(Home);
                  }} className="linkypoo" to="/home">Home</li>
                  <li onClick={ (e) => {
                    this.rotateAndShowMenu();
                    this.setState({currentView: e.target.textContent})
                    this.props.changeView(About);
                  }} className="linkypoo" to="/home">About</li>
                  <li onClick={ (e) => {
                    this.rotateAndShowMenu();
                    this.setState({currentView: e.target.textContent})
                    this.props.changeView(Contact);
                  }} className="linkypoo" to="/contact">Contact</li>
                  <li onClick={ (e) => {
                    this.rotateAndShowMenu();
                    this.setState({currentView: e.target.textContent})
                    this.props.changeView(Gallery);
                  }} className="linkypoo" to="/gallery">Gallery</li>
                  <li onClick={ (e) => {
                    this.rotateAndShowMenu();
                    this.setState({currentView: e.target.textContent})
                    this.props.changeView(Projects);
                  }} className="linkypoo" to="/projects">Projects</li> 
                </div>
              )}
          } 
        </Motion>
        
      </div>
      
    );
  }
}

export default NavBar;
