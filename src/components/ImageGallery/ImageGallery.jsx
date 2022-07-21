// import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images, handleModal}) => {
   return (
      <ul className={s.ImageGallery}>
         {images.map(({id, webformatURL, largeImageURL, tags}) => (
          <ImageGalleryItem
          key={id}
          
          webformatURL={webformatURL}
          largeImageUR={largeImageURL}
          tags={tags}
         //  handleStatus={handleStatus}
          handleModal={handleModal}
          />)) 
         }
    </ul>  
   );
}

// ImageGallery.propTypes = {
//    images: PropTypes.array.isRequired,
//  };
 
