import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ChildrenGames1 extends Component {

  render() {
    return (
      <Container>
        <Row className='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 style={{ textAlign: 'center' }}>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='title-row'>
          <Col className='ChickenandEggs-row'>
              <h1 style={{ textAlign: 'center' }} href='https://gamescene.com/iphonegames/ChickenAndEggs.html'>Chicken and Eggs</h1>
          </Col>
          <Col className='MatchThree-row'>
              <h1 style={{ textAlign: 'center' }} href='https://gamescene.com/iphonegames/MatchThree.html'>Match Three</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChildrenGames1;
