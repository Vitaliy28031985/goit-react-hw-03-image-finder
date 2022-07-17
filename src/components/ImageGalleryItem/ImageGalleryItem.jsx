import React from "react";
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal'
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
   state = {
      showModal: false,
    }
    static propTypes = {
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      largeImageUrl: PropTypes.string.isRequired,
    };

    
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