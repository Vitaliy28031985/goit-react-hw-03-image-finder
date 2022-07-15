import React from "react";

export class ImageGalleryItem extends React.Component {
   // setState = {
      
   //  }

  render() {
   const { src, alt, } = this.props;
   return (
<li className="gallery-item">
  <img 
  src={src}
  alt={alt} />
</li>
   );
  };
}