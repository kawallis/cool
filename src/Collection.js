import React, { Component } from 'react';
import './Collection.css'
class Collection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            galleryView: false,
            index: 0,
        };
        this.showGallery = this.showGallery.bind(this);
        this.scrollNext = this.scrollNext.bind(this);
        this.scrollLast = this.scrollLast.bind(this);
    }

    showGallery() {
        let { galleryView } = this.state;
        galleryView = galleryView ? false : true;
        this.setState({ galleryView: galleryView })
    }

    scrollNext() {
        let { index } = this.state;
        if (index === 2) {
            this.setState({ index: 0 });
        } else {
            index += 1;
            this.setState({ index });
        }
    }

    scrollLast() {
        let { index } = this.state;
        if (index === 0) {
            this.setState({ index: 2 });
        } else {
            index -= 1;
            this.setState({ index: index });
        }
    }

    render() {
        let { pictures, name, mainPic } = this.props;
        let { galleryView, index } = this.state;
        let divvy = null;

        if (galleryView) {
            divvy = <div className="YoungDivvy" >
                <div className="icon-times-circle exitButton" onClick={this.showGallery}></div>
                <div className="icon-chevron-left arrows" onClick={this.scrollLast}></div>
                <div>
                    <img className="collectionPics" src={pictures[index].url_o} alt="" />
                </div>
                <div className="icon-chevron-right arrows" onClick={this.scrollNext}></div>
            </div>;
        } else {
            divvy = null;
        }
        return (
            <div className="Collection"
                style={{
                    background: `linear-gradient(0deg, rgba(113,95,159,0.8),rgba(113,247,159,0.8)), url(${mainPic})`,
                    
                }}
                onClick={()=> {
                    if (!galleryView) this.showGallery();
                }}
            >
                <h2>{name}</h2>
                {divvy}
            </div>
        );
    }
}

export default Collection;