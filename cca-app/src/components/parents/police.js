import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class Police extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 15, offset: 2 }}>
            <h1 className='cca-head'>Steps to File a Police Report</h1>
          </Col>
        </Row>

        <Row sm={{ size: 15, offset: 2 }}>
          <Col className='h3-col'>
            <h3>• In person, at Central Police Headquarters, 3510 S. Michigan, 1st Floor, Room 1043, with payment of applicable fees as designated below. By mail, Addressed to: Chicago Police Department, Records Inquiry and Customer Serice Section, Unit 163, 3510 S. Michigan Avenue. Chicago, IL 60653
			</h3>
            <h3>
              • Please be sure to include the following information: The victim or reporting the name and address; The type of location of incident; The RD number (a report number given by the Police).
            </h3>
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Police;
