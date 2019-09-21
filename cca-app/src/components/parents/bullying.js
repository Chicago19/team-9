import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class Bullying extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Cyber Bullying</h1>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>Child Traumatic Stress</h2>
            <h3>
              Child traumatic stress is when children and adolescents are exposed to traumatic events or traumatic situations, and when this exposure overwhelms their ability to cope.
            </h3>
            <h3>
              When children are exposed to situations where they feared for their lives, believed they could have been injured, witnessed violence, or tragically lost a loved one, they may show signs of traumatic stress.
            </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>Signs of Traumatic Stress</h2>
            <h3>
              Difficulty sleeping and nightmares
            </h3>
            <h3>
              Refusing to go to school
            </h3>
            <h3>
              Lack of appetite
            </h3>
            <h3>
              Anger
            </h3>
            <h3>
              Getting into fights at school or fighting with siblings
            </h3>
            <h3>
              Nervousness
            </h3>
            <h3>
              Play that includes recreating the event
            </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>Child Traumatic Stress</h2>
            <h3>
              Child traumatic stress is when children and adolescents are exposed to traumatic events or traumatic situations, and when this exposure overwhelms their ability to cope.
            </h3>
            <h3>
              When children are exposed to situations where they feared for their lives, believed they could have been injured, witnessed violence, or tragically lost a loved one, they may show signs of traumatic stress.
            </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }}>
          <Col className='h2-col'>
            <h2>Treating</h2>
            <h3>
              Education about the impact of trauma
            </h3>
            <h3>
              Helping children and their parents establish or reestablish a sense of safety
            </h3>            
            <h3>
              Techniques of dealing with overwhelming emotional reactions            
            </h3>              
            <h3>
              An opportunity to talk about the traumatic experience in a safe, accepting environment
            </h3>              
            <h3>
              Involvement, when possible, of primary caregivers in the healing process
            </h3>  
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bullying;
