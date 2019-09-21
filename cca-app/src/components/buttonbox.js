import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/buttonbox.css';
import { faCalendarAlt,faChild,faUserFriends, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Component that generates the pretty purple link boxes.
 *
 * @extends Component
 * @props url = the url to redirect to
 * @props title = the title displayed on the box
 * @props icon = 'calendar', 'child', 'parent'
 */
class ButtonBox extends Component {

  render() {
    let linkFront = this.props.url.substring(0, 4);
    return (
      <Container className='wrap purple-box'>
        <span className='button-text'>
        <span> {this.props.title}</span>
        <span className = 'icon-settings'>
          <div><FontAwesomeIcon size={70} icon={this.props.icon === 'calendar' ? faCalendarAlt : this.props.icon === 'child' ? faChild : faUserFriends} /></div></span></span>
          { linkFront === 'http' ? (
            <a href={this.props.url} />
          ) : (
            <Link to={'/' + this.props.url} />
          )}
      </Container>
    );
  }
}

export default ButtonBox;
