import React from "react";
import s from './Modal.module.css';
import { createPortal } from 'react-dom';


const modal = document.querySelector('#modal-root');

export class Modal extends React.Component { 
 

   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
   }
   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  
    handleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    };
  
    handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
        this.props.onClose();
      }
    };

    render() {
      const { src, alt } = this.props;
  
      return createPortal(
        <div className={s.Overlay} onClick={this.handleBackdropClick}>
          <div className={s.Modal}>
            <img src={src} alt={alt} />
          </div>
        </div>,
        modal,
      );
    }
}