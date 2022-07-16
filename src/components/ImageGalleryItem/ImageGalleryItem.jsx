import React from "react";
import { Modal } from '../Modal/Modal'
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
   state = {
      showModal: false,
    }
    
    toggleModal = () => {
      this.setState(({ showModal }) => ({
        showModal: !showModal,
      }));
    };
 
  render() {
   const { src, alt, largeImageUrl } = this.props;
   const { showModal } = this.state;
   const {toggleModal} = this;
   return (
<li className={s.ImageGalleryItem}>
  <img
  onClick={toggleModal}
  className={s.ImageGalleryItemIimage} 
  src={src}
  alt={alt} />
  {showModal && (<Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />)}
</li>
   );
  };
}