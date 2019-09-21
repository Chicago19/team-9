import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import Codepen from "react-codepen-embed";

class ColoringBook extends Component {

  render() {
    return (
      <Container>
        <Row className='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
<<<<<<< HEAD
            <h1 style={{ textAlign: 'center' }}>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='title-row'>
          <Col className='gamesButton1-row'>
              <h1 style={{ textAlign: 'center' }}>Coloring Book</h1>
              
=======
            <h1 style={{ textAlign: 'center' }}>Coloring Book</h1>
>>>>>>> origin/master
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ColoringBook;
