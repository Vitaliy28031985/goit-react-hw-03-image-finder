import React from "react";
import { Modal } from '../Modal/Modal'
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
   state = {
      showModal: false,
    }

    toggleModal = ({showModal}) => {
      this.setState({showModal: !showModal,})
    }

  render() {
   const { src, alt, largeImageUrl } = this.props;
   const { showModal } = this.state;
   return (
<li className={s.ImageGalleryItem}>
  <img
  onClick={this.toggleModal}
  className={s.ImageGalleryItemIimage} 
  src={src}
  alt={alt} />
  {showModal && (<Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />)}
</li>
   );
  };
}