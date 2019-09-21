import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class Forms extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Applications and Forms</h1>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>[we will upload this] Crime Victim Compensation Application</h2>
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Forms;
