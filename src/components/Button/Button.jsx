import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import s from './Button.module.css'

import PropTypes from 'prop-types';

export class Button extends React.Component {
   static propTypes = {
      onClick: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
    };
  
    scroll = () => {
      this.props.onClick();
      scroll.scrollToBottom();
    };
  
    render() {
      return (
        <button onClick={this.scroll} className={s.Button} type="button">
          Load more
        </button>
      );
    }
}