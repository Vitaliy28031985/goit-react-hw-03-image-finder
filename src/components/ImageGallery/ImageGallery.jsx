import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images, onToggle, onTogglState}) => {
 
   return (
      <ul className={s.ImageGallery}>
         {images.map((image) => (
          <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
          onToggle={onToggle}
          onTogglState={onTogglState}
          />)) 
         }
    </ul>  
   );
}

ImageGallery.propTypes = {
   images: PropTypes.array.isRequired,
 };
 
