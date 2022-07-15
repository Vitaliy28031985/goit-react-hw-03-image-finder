
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({images}) => {
   return (
      <ul className="">
         {images.map((image) => (
          <ImageGalleryItem
          key={image.id}
          src={image.webformatURL}
          alt={image.tags}
          />

         ))}
    </ul>  
   );
}