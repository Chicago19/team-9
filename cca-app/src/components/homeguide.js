import React, { Component } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class HomeGuide extends Component {

  render() {
    return (
      <span id="house-btn">
        <Link to='/' style={{ color: 'white' }}><FontAwesomeIcon icon={faHome}/></Link>
      </span>
    );
  }
}

export default HomeGuide;
