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
          <Col className='stress-row'>
            <ButtonBox url='stress' title='Understanding Child Traumatic Stress' icon = 'gamepad'/>
          </Col>
          <Col className='police-row'>
            <ButtonBox url='police' title='Steps to File a Police Report' icon = 'gamepad'/>
          </Col>
          <Col className='faq-row'>
            <ButtonBox url='faq' title='FAQ' icon = 'gamepad'/>
          </Col>
          <Col className='forms-row'>
            <ButtonBox url='forms' title='Applications and Forms' icon = 'gamepad'/>
          </Col>
          <Col className='bullying-row'>
            <ButtonBox url='bullying' title='Cyber Bullying' icon = 'gamepad'/>
          </Col>
          <Col className='survey-row'>
            <ButtonBox url='survey' title='Survey' icon = 'gamepad'/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ParentsHome;
