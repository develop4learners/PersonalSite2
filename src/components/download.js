import React, { Component } from 'react';
import Pdf from '../../content/Semerjian-Roberto-CSCL-2019.pdf';

class Download extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank" rel="noopener noreferrer">
          <img src={require('../../content/images/Semerjian-Roberto-CSCL-2019.jpg')} alt="Download Pdf"
          width = "750px"/>
        </a>
      </div>
    );
  }
}

export default Download;

//ERROR LOG 1/15:
/*
*/
