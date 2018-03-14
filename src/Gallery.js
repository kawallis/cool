import React, { Component } from 'react';
import './Gallery.css';
import Collection from './Collection'; 
class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      galleries: ["Portland", "Los Angeles", "Seattle", "Sarasota", "Pixel Art", "Random"],
      portlandPics: [],
      laPics: [],
      seattlePics: [],
      sarasotaPics: [],
      pixelPics: [],
      randoPics: [],
    };
  }

  componentWillMount() {
    let {pictures} = this.props;
    let portlandPics = []; let laPics = []; let seattlePics = []; 
    let pixelPics =[]; let randoPics = []; let sarasotaPics = []; 

    pictures.forEach(pic => {
      switch(pic.tags) {
        case 'portland':
          portlandPics.push(pic)
          break;
        case 'la':
          laPics.push(pic)
          break;
        case 'seattle':
          seattlePics.push(pic)
          break;
        case 'sarasota':
          sarasotaPics.push(pic)
          break;
        case 'pixel':
          pixelPics.push(pic)
          break;
        case 'rando':
          randoPics.push(pic)
          break;
        default: 
          randoPics.push(pic)
          break;
      }

      this.setState({
        portlandPics, laPics, seattlePics, 
        sarasotaPics, pixelPics, randoPics
      });

    });
  }

  render() {
    let {galleries, portlandPics, laPics, seattlePics,
    sarasotaPics, pixelPics, randoPics } = this.state;
    let pictureCategories = [portlandPics, laPics, 
    seattlePics, sarasotaPics, pixelPics, randoPics];
    let cardMainPic = [portlandPics[2].url_z, laPics[2].url_z,seattlePics[4].url_z, 
    sarasotaPics[2].url_z, pixelPics[5].url_z, randoPics[1].url_z]
    return (
      <div>
        <div className="Gallery">
           {galleries.map((label, i) => {
             return <Collection key={i} 
              pictures={pictureCategories[i]}
              name={label}
              mainPic={cardMainPic[i]}
            />
           })}
        </div>
      </div>
    );
  }
}

export default Gallery;
