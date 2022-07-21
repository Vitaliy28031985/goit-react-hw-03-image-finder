// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images, handleStatus, handleModal}) => {
   return (
      <ul className={s.ImageGallery}>
         {images.map(({id, ...restProps}) => (
          <ImageGalleryItem
          key={id + nanoid()}
          id={id}
          image={restProps}
          handleStatus={handleStatus}
          handleModal={handleModal}
          />)) 
         }
    </ul>  
   );
}

// ImageGallery.propTypes = {
//    images: PropTypes.array.isRequired,
//  };
 
