import React from "react";
import s from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends React.Component {
   state = {
      
    }

  render() {
   const { src, alt, } = this.props;
   return (
<li className={s.ImageGalleryItem}>
  <img
  className={s.ImageGalleryItemIimage} 
  src={src}
  alt={alt} />
</li>
   );
  };
}