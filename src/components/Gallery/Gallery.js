import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal';
import ModalContents from './Modal/ModalContents/ModalContents';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      showModal: false,
      selectedImage: "",
      selectedTitle: ""
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(passedImage, passedTitle) {
    this.setState({
      selectedImage: passedImage,
      selectedTitle: passedTitle,
      showModal: true
    });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  componentDidMount() {
    const searchTerm = this.props.inputValue ? this.props.inputValue : 'saturn';
    axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}`)
      .then(response => {
        this.setState({
          photos: response.data.collection.items.splice(0, 30)
        });
        // console.log(response.data.collection.items);
      })
      .catch(error => {
        console.log(`Error getting images`, error);
      });
  }

  render() {
    const updatedPhotos = this.state.photos.map(photo => {
      return (
        <div key={photo.data[0].nasa_id} className="blockContainer">
          <div className="photoContainer">
            <img
              id={photo.data[0].nasa_id}
              src={photo.links[0].href}
              onClick={() => this.openModal(photo.links[0].href, photo.data[0].title)}
              alt="NASA gallery item" />
          </div>
          <div className="detailsContainer">
            <p>{photo.data[0].title}</p>
          </div>
        </div>
      )
    }
    );
    return (
      <div className="photoGallery container">
        {updatedPhotos}
        <Modal show={this.state.showModal}>
          <ModalContents
            photo={this.state.selectedImage}
            header={this.state.selectedTitle}
            close={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default Gallery;
