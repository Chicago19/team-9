import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import ButtonBox from '../buttonbox.js';
import '../../css/home.css';


class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('email: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Container fluid style={{ height: '100vh' }}>
        <Row id='survey-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='cca-head'>Fill out our survey!</h1>
          </Col>
        </Row>
        <Row className='button-row' sm={{ size: 8, offset: 2 }}>
          <Col className='survey-row'>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>   
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Survey;
