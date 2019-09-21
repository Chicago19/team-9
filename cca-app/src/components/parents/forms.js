import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/home.css';


class Forms extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Referrals and Emergency Contacts</h1>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }} style={{ marginTop: '30px' }}>
          <Col sm='1' style={{ paddingTop: '40px' }}>
            <span style={{ fontSize: '40px'}}><FontAwesomeIcon icon={faLeaf} /></span>
          </Col>
          <Col>
            <h2>To report suspected abuse in Illinois, call 1-800-25-ABUSE (1-800-252-2873). If a child is in immediate danger, also call 911.
            <br /><br />Outside of Illinois, call 1-800-422-4453.</h2>
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Forms;
