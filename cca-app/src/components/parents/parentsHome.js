import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class ParentsHome extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='button-row' sm={{ size: 8, offset: 2 }}>
          <Col className='gamesButton1-row'>
            <ButtonBox url='childrenGames1' title='Games for 3-8' icon = 'gamepad'/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParentsHome;
