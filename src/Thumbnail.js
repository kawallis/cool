import React, { Component } from 'react';
import './Thumbnail.css'
class Thumbnail extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  }

  render() {

    return (
      <div className="ThumbnailContainer" >
        {this.props.name}
      </div>
    );
  }
}

export default Thumbnail;