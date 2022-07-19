import React from "react";
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal'
import s from './ImageGalleryItem.module.css';

export const  ImageGalleryItem = ({src, alt, largeImageUrl, onToggle, onTogglState }) => {
 
   return (
<li className={s.ImageGalleryItem}>
  <img
  onClick={onToggle}
  className={s.ImageGalleryItemIimage} 
  src={src}
  alt={alt} />
 {onTogglState && (<Modal onClose={onToggle} src={largeImageUrl} alt={alt} />)}
</li>
   );
  };
  ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    onTogglState: PropTypes.bool.isRequired
  }