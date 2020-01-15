import React, { Component } from 'react';
import Pdf from '../../content/Semerjian-Roberto-CSCL-2019.pdf';

class Download extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank" rel="noopener noreferrer"><img src="../../content/images/gallery/intersection-observer.jpg" alt="Download Pdf"/></a>
      </div>
    );
  }
}

export default Download;

//ERROR LOG 1/15:
/*
*/
