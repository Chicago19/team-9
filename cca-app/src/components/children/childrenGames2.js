import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class ChildrenGames2 extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Games</h1>
          </Col>
        </Row>
        <Row className='button-row'>
          <Col className='gamesButton1-row'>
              <ButtonBox url='https://gamescene.com/iphonegames/SlidingPuzzle.html' title='Sliding Puzzle' icon = 'gamepad'/>
          </Col>
          <Col className='gamesButton2-row'>
              <ButtonBox url='https://gamescene.com/iphonegames/Minesweeper.html' title='Minesweeper' icon = 'gamepad'/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChildrenGames2;
