import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ButtonBox from '../buttonbox.js';
import '../../css/home.css';
import Codepen from "react-codepen-embed";

class ColoringBook extends Component {


  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
       	<Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Coloring Book</h1>
          </Col>
        </Row>
      	<Codepen
		  hash="yLBGYKZ"
		  user="zmwang622"
		  loader={() => <div>Loading...</div>}
		/>
      </Container>
      
    );
  }
}

export default ColoringBook;
