import React, { Component } from 'react';
import './resume.css';
import arrow from './arrow.gif';

class resume extends Component {
  render() {
    return(
      <div id="box">
        <h3 id="a"> You can review my resume by downloading it using the following link</h3>
        <p></p>
        <img id="img" src={arrow} alt="arrow"/>
        <h5><a href="https://drive.google.com/file/d/1pGZ87X0aHtwEIamRUfXptRTx9W-8Fy7B/view" id="btn"> <i class="fa fa-download"></i> Download</a></h5>
        </div>
    )
    
  }
}

export default resume;
