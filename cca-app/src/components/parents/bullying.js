import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/home.css';


class Bullying extends Component {

  render() {
    return (
      <Container fluid style={{ height: '100vh', paddingLeft: '40px', paddingRight: '40px' }}>
        <Row id='title-row' style={{ marginBottom: '30px' }}>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Cyber Bullying</h1>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }} style={{ marginBottom: '30px' }}>
        <Col sm='1' style={{ paddingTop: '40px' }}>
            <span style={{ fontSize: '40px'}}><FontAwesomeIcon icon={faLeaf} /></span>
          </Col>
          <Col className='h2-col'>
            <h2>What is Cyberbullying?</h2>
            <h3>
              • Cyberbullying is the use of technology (such as computers, cell phones, and other electronic devices) to harass or humiliate someone
            </h3>
            <h3>
              • Cyberbullying usually happens among young people who know each other. It usually occurs through social media (like Instagram and Snapchat), email, text and voice messaging.                  </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }} style={{ marginBottom: '30px' }}>
        <Col sm='1' style={{ paddingTop: '40px' }}>
            <span style={{ fontSize: '40px'}}><FontAwesomeIcon icon={faLeaf} /></span>
          </Col>
          <Col className='h2-col'>
            <h2>How It Is Done</h2>
            <h3>
              • There are many ways that cyberbullying attacks occur, including posting or forwarding meaning comments, threats, rumors, or lies; exchange of photos with unkind comments; pretending to be someone else; revealing private information about someone without their permission; creating an online group to make fun or exclude someone.
            </h3>
            <h3>
              • In many ways cyberbullying can be even worse than bullying
            </h3>
            <h3>
              • Cyberbullying follows a person home. A cruel text message or post can come at any time. Anything that goes online is instantly exposed to a large audience, and stays online forever.
            </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }} style={{ marginBottom: '30px' }}>
        <Col sm='1' style={{ paddingTop: '40px' }}>
            <span style={{ fontSize: '40px'}}><FontAwesomeIcon icon={faLeaf} /></span>
          </Col>
          <Col className='h2-col'>
            <h2>Effects of Cyberbullying</h2>
            <h3>
              • Physical Damage: Target may develop headaches, stomachaches, and sleeplessness
            </h3>
            <h3>
              • Emotional Damage: Targets may experience anxiety problems or depression. Some targets may even be led to suicide
            </h3>
            <br></br>
          </Col>
        </Row>

        <Row sm={{ size: 8, offset: 2 }} style={{ marginBottom: '30px' }}>
        <Col sm='1' style={{ paddingTop: '40px' }}>
            <span style={{ fontSize: '40px'}}><FontAwesomeIcon icon={faLeaf} /></span>
          </Col>
          <Col className='h2-col'>
            <h2>Signs of Cyberbullying</h2>
            <h3>
              • Often wanting to stay home from school
            </h3>
            <h3>
              • Sadness
            </h3>            
            <h3>
              • Spending a lot more or a lot less time online
            </h3>              
            <h3>
              • Dip in grades
            </h3>              
            <h3>
              • Withdrawing from contact with classmates.
            </h3>  
            <br></br>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Bullying;
