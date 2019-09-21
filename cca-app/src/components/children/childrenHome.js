import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class ChildrenHome extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Kid's Activities</h1>
          </Col>
        </Row>
        <Row className='button-row' sm={{ size: 8, offset: 2 }}>
          <Col className='gamesButton1-row'>
            <ButtonBox url='childrenGames1' title='Games for 3-8' icon='gamepad'/>
          </Col>
          <Col className='gamesButton2-row'>
            <ButtonBox url='childrenGames2' title='Games for 9-17' icon='gamepad'/>
          </Col>
          <Col className='coloringBookButton-row'>
            <ButtonBox url='coloringBook' title='Coloring Book' icon = 'gamepad'/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChildrenHome;
