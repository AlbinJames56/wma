 
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Image, CloseButton } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close'; 
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FileBase from 'react-file-base64';

function AdminEventForm({ currentId, setCurrentId, setAddEvent, events, setEvents}) { 
  // token

  // handle delete ticket

  // postdata

  // set Edit event
  const editEvent=currentId?events.find((event)=>event._id===currentId):null

  const [event, setEvent] = useState(
    {
      title: '',
      description: '',
      event_time: '',
      event_date: '',
      event_location: '',
      state: '',
      country: '',
      tickets: [],
      terms: '',
      file: '',
      regOpen: 'Yes'
    });

    // handling the submit
    const handleSubmit=(e)=>{
      console.log(event);
      
    }

    // clearing the submit
    const clearSubmit = () => {
      setEvent({
        title: '',
        description: '',
        event_time: '',
        event_date: '',
        event_location: '',
        state: '',
        country: '',
        eventImage: '',
        regOpen: 'Yes',
      });
      setCurrentId(null);
      setAddEvent(false)
    }

  return (
    <Container className='p-4 rounded shadow-sm bg-white' style={{ maxWidth: '800px' }}>
    <Row className='align-items-center mb-3'>
      <Col>
        <h2>{currentId ? 'Edit' : 'Create'} an Event</h2>
      </Col>
      <Col xs="auto">
        <CloseButton 
          onClick={() => { 
            setCurrentId(null);
            setAddEvent(false);
          }}
          style={{ cursor: 'pointer', color: 'white', backgroundColor: 'red' }}
        />
      </Col>
    </Row>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={event?.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
      </Form.Group>
      
      <Form.Group className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={event?.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Group>
      
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Event Date</Form.Label>
            <Form.Control
              type="text"
              value={event?.event_date}
              onChange={(e) => setEvent({ ...event, event_date: e.target.value })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Event Time</Form.Label>
            <Form.Control
              type="text"
              value={event?.event_time}
              onChange={(e) => setEvent({ ...event, event_time: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className='mb-3'>
        <Form.Label>Event Location</Form.Label>
        <Form.Control
          type="text"
          value={event?.event_location}
          onChange={(e) => setEvent({ ...event, event_location: e.target.value })}
        />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              value={event?.state}
              onChange={(e) => setEvent({ ...event, state: e.target.value })}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              value={event?.country}
              onChange={(e) => setEvent({ ...event, country: e.target.value })}
            />
          </Form.Group>
        </Col>
      </Row>

      <div className='d-flex justify-content-between align-items-center mb-3'>
        <span>Add Tickets</span>
        {/* <AddEventPopup setEvent={setEvent} event={event} ticketCount={ticketCount} setTicketCount={setTicketCount} /> */}
      </div>
{/* 
      {ticketCount === 0 ? (
        <p>No tickets added</p>
      ) : (
        event.tickets.map((ticket, index) => (
          <Card className='p-3 mb-2 shadow-sm' key={index}>
            <div className='d-flex justify-content-between'>
              <div>
                <p><strong>Name:</strong> {ticket.name}</p>
              </div>
              <DeleteForeverIcon
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => handleDeleteTicket(index)}
              />
            </div>
            <p><strong>Description:</strong> {ticket.description}</p>
            <p><strong>Pricing:</strong></p>
            {ticket.pricing.map((pricing, i) => (
              <div key={i} className='d-flex justify-content-between'>
                <span>{pricing.name}:</span>
                <span>{pricing.price}</span>
              </div>
            ))}
          </Card>
        ))
      )} */}

      <Form.Group className='mb-3'>
        <Form.Label>Terms and Conditions</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={event?.terms}
          onChange={(e) => setEvent({ ...event, terms: e.target.value })}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Poster</Form.Label>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setEvent({ ...event, file: base64 })}
        />
        {event?.image && (
          <Image src={event?.file} alt="Poster" fluid className="mt-2" style={{ maxHeight: "150px" }} />
        )}
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Registration Needed?</Form.Label>
        <Form.Select
          value={event?.regOpen}
          onChange={(e) => setEvent({ ...event, regOpen: e.target.value })}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </Form.Select>
      </Form.Group>

      <div className='d-flex justify-content-end'>
        <Button variant="secondary" className='me-2' onClick={clearSubmit}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </div>
    </Form>
  </Container>
  )
} 
export default AdminEventForm