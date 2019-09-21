import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ChildrenHome extends Component {

  render() {
    return (
      <Container>
        <Row className='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 style={{ textAlign: 'center' }}>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='title-row'>
          <Col sm={{ size: 4, offset: 4 }}>
            <Row className='gamesButton-row'>
              <h1 style={{ textAlign: 'center' }}>Games for 3-5</h1>
            </Row>
            <Row className='gamesButton-row'>
              <h1 style={{ textAlign: 'center' }}>Games for 6-12</h1>
            </Row>
            <Row className='gamesButton-row'>
              <h1 style={{ textAlign: 'center' }}>Games for 13-19</h1>
            </Row>
            <Row className='gamesButton-row'>
              <h1 style={{ textAlign: 'center' }}>Coloring Book</h1>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChildrenHome;
