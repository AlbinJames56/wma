import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import {Container,Row,Col,Form,Button,Card,Image,CloseButton,Modal,} from "react-bootstrap";
import { addEventAPI } from "../../../Services/allApi";

function AdminEventForm({currentId,setCurrentId,setAddEvent,events,setEvents,}) {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    event_time: "",
    event_date: "",
    event_location_url: "",
    event_location: "",
    state: "",
    country: "",
    tickets: [], // Array of ticket types with categories
    terms: "",
    file: "",
    regOpen: "Yes",
  });

  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketType, setTicketType] = useState({
    name: "",
    description: "",
    categories: [],
  });
  const [categoryInputs, setCategoryInputs] = useState([
    { name: "", price: "" },
  ]);

  // Function to add a new category input
  const addCategoryInput = () => {
    setCategoryInputs([...categoryInputs, { name: "", price: "" }]);
  };

  // Handle category input changes
  const handleCategoryChange = (index, field, value) => {
    const newCategories = [...categoryInputs];
    newCategories[index][field] = value;
    setCategoryInputs(newCategories);
    // Sync the changes to the ticketType.categories as well
    setTicketType((prevType) => ({
      ...prevType,
      categories: newCategories,
    }));
  };

  // Save categories and ticket type to the event
  const handleSaveTicketType = () => {
    // Update ticket type categories
    setTicketType({ ...ticketType, categories: categoryInputs });

    // Add the completed ticket type to the event tickets array
    setEvent((prevEvent) => ({
      ...prevEvent,
      tickets: [
        ...prevEvent.tickets,
        { ...ticketType, categories: categoryInputs },
      ],
    }));

    // Clear inputs and close modal
    setTicketType({ name: "", description: "", categories: [] });
    setCategoryInputs([{ name: "", price: "" }]);
    setShowTicketModal(false);
  };
  //remove ticket
  const deleteTicket = (ticketIndex) => {
    const updatedTickets = event.tickets.filter(
      (_, index) => index !== ticketIndex
    );
    setEvent({ ...event, tickets: updatedTickets });
  };
  // remove category
  const removeCategory = (categoryIndex) => {
    const newCategories = categoryInputs.filter(
      (_, index) => index !== categoryIndex
    );
    setCategoryInputs(newCategories);

    // Sync the updated categories to ticketType.categories
    setTicketType((prevType) => ({
      ...prevType,
      categories: newCategories,
    }));
  };

  // generate image url
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (event.file) {
      setPreview(URL.createObjectURL(event.file));
    } else {
      setPreview("");
    }
  }, [event.file]);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    console.log(event);
    const {
      title,
      description,
      event_time,
      event_date,
      event_location_url,
      event_location,
      state,
      country,
      tickets,
      terms,
      file,
      regOpen,
    } = event;

    if (
      !title ||
      !description ||
      !event_time ||
      !event_date ||
      !event_location ||
      !state ||
      !country ||
      !terms ||
      !file ||
      !regOpen
    ) {
      toast.warn("Please Fill all fields");
    } else {
      // api call(req body)
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("description", description);
      reqBody.append("event_time", event_time);
      reqBody.append("event_date", event_date);
      reqBody.append("event_location_url", event_location_url);
      reqBody.append("event_location", event_location);
      reqBody.append("tickets", JSON.stringify(tickets));
      reqBody.append("state", state);
      reqBody.append("country", country);
      reqBody.append("terms", terms);
      reqBody.append("eventPoster", file);
      reqBody.append("regOpen", regOpen);
      const reqHeader = {
        // "authorization": `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };
      try {
        const result = await addEventAPI(reqBody, reqHeader);
        if (result.status == 200) {
          toast.success("Event added successfully");
        } else {
          toast.error("Not Able to Add");
          console.log(result.message);
        }
      } catch (err) {
        console.log("Error Adding in event :", err);
      }
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setEvent({ ...event, file: selectedFile });
  };

  const clearSubmit = () => {
    setEvent({
      title: "",
      description: "",
      event_time: "",
      event_date: "",
      event_location: "",
      state: "",
      country: "",
      tickets: [],
      terms: "",
      file: "",
      regOpen: "Yes",
    });
    setCurrentId(null);
    setAddEvent(false);
  };

  return (
    <Container
      className="p-4 rounded shadow-sm bg-white"
      style={{ maxWidth: "800px" }}
    >
      <Row className="align-items-center mb-3 ">
        <Col>
          <h2 className="text-dark">
            {currentId ? "Edit" : "Create"} an Event
          </h2>
        </Col>
        <Col xs="auto">
          <CloseButton
            onClick={() => {
              setCurrentId(null);
              setAddEvent(false);
            }}
            style={{
              cursor: "pointer",
              color: "white",
              backgroundColor: "red",
            }}
          />
        </Col>
      </Row>
      <Form onSubmit={handleAddEvent}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={event.title}
            onChange={(e) => setEvent({ ...event, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Event Date</Form.Label>
              <DatePicker
              
                selected={event.event_date ? new Date(event.event_date) : null}
                onChange={(date) => setEvent({ ...event, event_date: date })}
                dateFormat="MM/dd/yyyy"
                className="form-control ms-2"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3 d-flex">
              <Form.Label>Event Time</Form.Label>
              <div className="ms-2 form-control  w-75">
              <TimePicker 
                onChange={(value) =>
                  setEvent({
                    ...event,
                    event_time: value && value.format("hh:mm A"),
                  })
                }
                showSecond={false}
                use12Hours
              /></div>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Event Location Link</Form.Label>
          <Form.Control
            type="text"
            value={event?.event_location_url}
            placeholder="eg: https://maps.app.goo.gl/mKeTEm6Tdsw7pxf36 "
            onChange={(e) =>
              setEvent({ ...event, event_location_url: e.target.value })
            }
            
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Event Location</Form.Label>
          <Form.Control
            type="text"
            value={event?.event_location}
            onChange={(e) =>
              setEvent({ ...event, event_location: e.target.value })
            }
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={event?.state}
                onChange={(e) => setEvent({ ...event, state: e.target.value })}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                value={event?.country}
                onChange={(e) =>
                  setEvent({ ...event, country: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Terms and Conditions</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={event.terms}
            onChange={(e) => setEvent({ ...event, terms: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Poster</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {preview && (
            <Image
              src={preview}
              alt="Poster"
              fluid
              className="mt-2"
              style={{ maxHeight: "150px" }}
            />
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Registration Needed?</Form.Label>
          <Form.Select
            value={event.regOpen}
            onChange={(e) => setEvent({ ...event, regOpen: e.target.value })}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Form.Select>
        </Form.Group>
        {event.regOpen === "Yes" && (
          <>
            <Button variant="primary" onClick={() => setShowTicketModal(true)}>
              Add Ticket
            </Button>

            <h5 className="mt-4">Saved Ticket Types</h5>
            {event.tickets.map((type, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>{type.name}</Card.Title>
                      <Card.Text>{type.description}</Card.Text>
                      <h6>Categories:</h6>
                      <ul>
                        {type.categories.map((cat, idx) => (
                          <li key={idx}>
                            {cat.name} - ${cat.price}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <Button
                        variant="danger"
                        onClick={() => deleteTicket(index)} // Add this handler
                      >
                        <CloseButton />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </>
        )}

        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2" onClick={clearSubmit}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      {/* Ticket Modal */}
      <Modal show={showTicketModal} onHide={() => setShowTicketModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Ticket Type Name</Form.Label>
            <Form.Control
              type="text"
              value={ticketType.name}
              onChange={(e) =>
                setTicketType({ ...ticketType, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ticket Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={ticketType.description}
              onChange={(e) =>
                setTicketType({ ...ticketType, description: e.target.value })
              }
            />
          </Form.Group>

          <h6>Add Categories</h6>
          {categoryInputs.map((category, index) => (
            <div key={index} className="d-flex align-items-center mb-2">
              <Form.Control
                type="text"
                placeholder="Category name"
                value={category.name}
                onChange={(e) =>
                  handleCategoryChange(index, "name", e.target.value)
                }
                className="me-2"
              />
              <Form.Control
                type="number"
                placeholder="Price"
                value={category.price}
                onChange={(e) =>
                  handleCategoryChange(index, "price", e.target.value)
                }
                className="me-2"
              />
              <Button
                variant="danger"
                size="sm"
                className="ms-2"
                onClick={() => removeCategory(index)} // Add this handler
              >
                <CloseButton />
              </Button>
            </div>
          ))}
          <Button variant="success" size="sm" onClick={addCategoryInput}>
            + Add Ticket Category
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTicketModal(false)}>
            Cancel
          </Button>
          <Button variant="primary " onClick={handleSaveTicketType}>
            Save Ticket Type
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
  
} 
export default AdminEventForm;
