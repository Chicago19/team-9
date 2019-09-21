import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
/**
 * Component that generates the pretty purple link boxes.
 *
 * @extends Component
 */
export default class Calendar extends React.Component {
    render() {
        return(
            <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 style={{ textAlign: 'center' }}>Check Out Our Events!</h1>
          </Col>
        </Row>
        <Table striped bordered hover>
            <thead>
                <tr> 
                    <th>Event</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                event.map(())
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
      </Container>
        );
    }
}
