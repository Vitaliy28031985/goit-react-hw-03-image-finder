import React from "react";

import {Loader} from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export class Loader extends React.Component {
   render() {
      return (
        <Loader
          className="Loader"
          type="Oval"
          color="#303f9f"
          height={50}
          width={50}
        />
      );
    }  
}