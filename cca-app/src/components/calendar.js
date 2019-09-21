import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import '../css/calendar.css';
// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
//import events from './../event.json';
/**
 * Component that generates the pretty purple link boxes.
 *
 * @extends Component
 */

const events = [
    {
        "name": "Code For Good 2019",
        "description": "Hackathon",
        "startTime": "3:30pm",
        "endTime": "2:00pm",
        "location": "Chase Tower, Chicago",
        "date": "09/20/21-09/21/19"
      },
      {
        "name": "Center's Birthday Party",
        "description": "I turn 21!",
        "startTime": "6:00pm",
        "endTime": "11:00pm",
        "location": "Center",
        "date": "10/25/19"
      },
      {
          "name": "Homework Session",
          "description": "Pulling an all-nighter to finish my CS project.",
          "startTime": "9:00pm",
          "endTime": "8:00am",
          "location": "Library",
          "date": "10/30/19-10/31/19"
      },
      {
        "name": "Homework Session",
        "description": "Pulling an all-nighter to finish my CS project.",
        "startTime": "9:00pm",
        "endTime": "8:00am",
        "location": "Library",
        "date": "11/10/19-11/11/19"
    },
    // {
    //     "name": "Homework Session",
    //     "description": "Pulling an all-nighter to finish my CS project.",
    //     "startTime": "9:00pm",
    //     "endTime": "8:00am",
    //     "location": "Library",
    //     "date": "11/15/19-11/16/19"
    // },
    // {
    //     "name": "Homework Session",
    //     "description": "Pulling an all-nighter to finish my CS project.",
    //     "startTime": "9:00pm",
    //     "endTime": "8:00am",
    //     "location": "Library",
    //     "date": "11/23/19-11/24/19"
    // },
    // {
    //     "name": "Homework Session",
    //     "description": "Pulling an all-nighter to finish study for my math midterm.",
    //     "startTime": "9:00pm",
    //     "endTime": "8:00am",
    //     "location": "Library",
    //     "date": "12/2/19-12/3/19"
    // },
    //   {
    //     "name": "Gingerbread House Making",
    //     "description": "Come join us to make gingerbread houses and meet new people!",
    //     "startTime": "6:00pm",
    //     "endTime": "10:00pm",
    //     "location": "My House",
    //     "date": "12/20/19"
    //   },
  ];

function Calendar() {
    // const { loading, data } = useQuery(FETCH_EVENTS_QUERY);
    return (
    <Container fluid className='home-container'>
        <Row id='title-row'>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className='calendar-head'>Check Out Our Events!</h1>
          </Col>
        </Row>
        <Row id='table-row'>
        <Table striped bordered hover className='table' style={{backgroundColor: '#D9CDE4', marginTop: 30}}>
            <thead>
                <tr> 
                    <th>Event</th>
                    <th>Description</th>
                    <th>Location</th>
                    <th>Date</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {events.map((event => <tr>
                    <td>{event.name}</td>
                    <td>{event.description}</td>
                    <td>{event.location}</td>
                    <td>{event.date}</td>
                    <td>{event.startTime} - {event.endTime}</td>
                </tr>))}
            </tbody>
            </Table>
            </Row>
      </Container>
    );
}

// const FETCH_EVENTS_QUERY = gql`
// {
//     getEvents { 
//         name
//         description 
//         startTime 
//         endTime 
//         location 
//         date
//     }
// }
// `

export default Calendar;
