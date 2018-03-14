import React, { Component } from 'react';
import Home from './Home';
import NavBar from './NavBar';

class App extends Component {

    constructor() {
        super();

        this.state = {
            pictures: [],
            CurrentView: Home,
        }

        this.changeView = this.changeView.bind(this);
    }

    changeView(View = Home, data) {
        this.setState({ CurrentView: View, data });
    }

    setPictures(pictures) {
        this.setState({ pictures });
    }

    componentDidMount() {
        fetch('/api/pictures')
        .then(res => res.json())
        .then(object => {
            this.setPictures(object.photos.photo);
        });
    }

    render() {
        let { CurrentView} = this.state;
        return (
            <div className="AppContainer">
                <NavBar changeView={this.changeView}/>
                <CurrentView 
                    pictures={this.state.pictures}
                    changeView={this.changeView}
                />
            </div>
        );
    }
}

export default App;