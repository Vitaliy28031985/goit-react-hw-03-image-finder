import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import s from './Button.module.css'

import PropTypes from 'prop-types';

export class Button extends React.Component {
   static propTypes = {
      onClick: PropTypes.func.isRequired,
    };
  
    scroll = () => {
      this.props.handleClick();
      scroll.scrollToBottom();
    };
  
    render() {
      return (
        <button handleClick={this.scroll} className={s.Button} type="button">
          Load more
        </button>
      );
    }
}
//