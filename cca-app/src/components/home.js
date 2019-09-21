import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from './buttonbox.js';
import '../css/home.css';

class Home extends Component {

  render() {
    // log src="https://www.chicagocac.org/wp-content/uploads/2015/04/ccac-header-logo.png"
    return (
      <Container fluid className='home-container'>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Chicago Children's Advocacy Center</h1>
          </Col>
        </Row>
        <Row className='button-row'>
          <ButtonBox url='children' title='Children' icon = 'child'/>
          <ButtonBox url='parents' title='Parents' icon = 'parents'/>
          <ButtonBox url='calendar' title='Calendar' icon = 'calendar'/>
        </Row>
      </Container>
    );
  }
}

export default Home;
