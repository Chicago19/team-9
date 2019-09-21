import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/buttonbox.css';

/**
 * Component that generates the pretty purple link boxes.
 *
 * @extends Component
 * @props url = the url to redirect to
 * @props title = the title displayed on the box
 */
class ButtonBox extends Component {

  constructor(props) {
    super(constructor);

    this.state = {
      url: this.props.url,
      title: this.props.title
    }
  }

  render() {
    return (
      <Container className='wrap purple-box'>
      beep boop
        {/* Here's how to make a link to another component*/}
        <Link to='/${this.state.url}'>{this.state.title}</Link>
      </Container>
    );
  }
}

export default ButtonBox;
