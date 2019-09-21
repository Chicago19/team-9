import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class ChildrenGames1 extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='button-row'>
          <Col className='ChickenandEggs-row'>
              <ButtonBox url='https://gamescene.com/iphonegames/ChickenAndEggs.html' title='Chicken and Eggs' icon = 'gamepad'/>
          </Col>
          <Col className='MatchThree-row'>
              <ButtonBox url='https://gamescene.com/iphonegames/MatchThree.html' title='Match Three' icon = 'gamepad'/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChildrenGames1;
