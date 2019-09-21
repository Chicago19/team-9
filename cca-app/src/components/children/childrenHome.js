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
        <Row className='Button-row' sm={{ size: 8, offset: 2 }}>
          <Col className='gamesButton1-row'>
              <h1 style={{ textAlign: 'center' }}>Games for 3-8</h1>
          </Col>
          <Col className='gamesButton2-row'>
              <h1 style={{ textAlign: 'center' }}>Games for 9-17</h1>
          </Col>
          <Col className='coloringBookButton-row'>
              <h1 style={{ textAlign: 'center' }}>Coloring Book</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChildrenHome;
