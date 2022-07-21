import React from "react";
// import PropTypes from 'prop-types';
import s from './Modal.module.css';
// import { createPortal } from 'react-dom';


// const modal = document.querySelector('#modal-root');

export class Modal extends React.Component { 
 
  // static propTypes = {
  //   onClose: PropTypes.func.isRequired,
  //   src: PropTypes.string.isRequired,
  //   alt: PropTypes.string.isRequired,
  // };

   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
   }
   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.onModal();
      }
    };
  
    handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
        this.props.onModal();
      }
    };

    render() {
      const {poster, images, closeModal} = this.props;
  
      return (
        <div className={s.Overlay} onClick={this.handleBackdropClick}>
          <div className={s.Modal}>
          <img
          onModal={closeModal}
          src={poster} alt={images.tags} />
          </div>
        </div>
      )
    }
}
//handleClick
