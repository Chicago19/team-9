import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {

  render() {
    return (
      <Container>
        <Row className='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 style={{ textAlign: 'center' }}>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='button-row'>
          
        </Row>
      </Container>
    );
  }
}

export default Home;
