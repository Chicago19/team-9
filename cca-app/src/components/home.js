import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from './buttonbox.js';

class Home extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 style={{ textAlign: 'center' }}>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='button-row'>
          <ButtonBox url='home' title='Home'/>
        </Row>
      </Container>
    );
  }
}

export default Home;
