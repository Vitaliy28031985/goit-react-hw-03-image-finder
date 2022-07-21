// import React from "react";
// import PropTypes from 'prop-types';
// import { Modal } from '../Modal/Modal'
import s from './ImageGalleryItem.module.css';


export const  ImageGalleryItem = ({ image: webformatURL, largeImageURL, tags },
  id,
  handleStatus,
  handleModal
  ) => {
 
   return (
<li className={s.ImageGalleryItem}>
  <img
  className={s.ImageGalleryItemIimage}
  onClick={() => handleStatus(id) > webformatURL.toString()}
  text="Show poster"
  handleClick={() => handleModal(largeImageURL)}
  src={webformatURL}
  alt={tags}/> 
</li>
   );
  };
  // ImageGalleryItem.propTypes = {
  //   src: PropTypes.string.isRequired,
  //   alt: PropTypes.string.isRequired,
  //   largeImageUrl: PropTypes.string.isRequired,
  //   onToggle: PropTypes.func.isRequired,
  //   onTogglState: PropTypes.bool.isRequired
  // }

  //{onTogglState && (<Modal 
//  {onClose={onToggle} 
//  src={largeImageUrl} 
//  alt={alt} />)}