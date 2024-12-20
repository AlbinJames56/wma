import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Image,
  CloseButton,
  Modal,
} from "react-bootstrap";  
import { SERVER_URL } from "../../../Services/ServerUrl";
import { addEventAPI, updateEventAPI } from "../../../Services/allApi";
import { addEventContextResponse, editEventContextResponse } from "../../../ContextAPI/ContextShare";

function AdminEventForm({
  currentId,
  setCurrentId,
  setAddEvent,
  events,
  setEvents,
}) {
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
  const [isEditing, setIsEditing] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [ticketType, setTicketType] = useState({
    name: "",
    description: "",
    ticketCount: "",
    categories: [],
  });
  const [categoryInputs, setCategoryInputs] = useState([
    { name: "", price: "" },
  ]);
  // context to update realtime
  const {editEventResponse, setEditEventResponse}= useContext(editEventContextResponse);
  const {addEventResponse, setAddEventResponse}= useContext(addEventContextResponse);

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
    setTicketType({
      name: "",
      description: "",
      ticketCount: "",
      categories: [],
    });
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
    } else if (event.eventPoster) {
      setPreview(`${SERVER_URL}/uploads/${event.eventPoster}`);
    } else {
      setPreview("");
    }
  }, [event.file, event.eventPoster]);

  // Load existing event data when editing
  useEffect(() => {
    if (currentId) {
      const eventToEdit = events.find((event) => event._id === currentId);
      if (eventToEdit) {
        setEvent({
          ...eventToEdit,
          event_date: eventToEdit.event_date
            ? moment(eventToEdit.event_date).format("YYYY-MM-DD")
            : "", // Format date as YYYY-MM-DD for date input
        });
        setIsEditing(true);
      }
    } else {
      setIsEditing(false);
    }
  }, [currentId, events]);

  // function to choose whether it is add or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    isEditing ? handleUpdateEvent() : handleAddEvent();
  };
  // add event to database
  const handleAddEvent = async (e) => {
    if (validateForm()) {
      const reqBody = createFormData();
      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };
        try {
          const result = await addEventAPI(reqBody, reqHeader);
          if (result.status === 200) {
            toast.success("Event added successfully");
            setAddEventResponse(result)
            clearSubmit();
          } else {
            toast.error("Not Able to Add");
          }
        } catch (err) {
          console.log("Error Adding event:", err);
        }
      } else {
        toast.warn("Unauthorized");
      }
    }
  };
  const handleUpdateEvent = async () => {
    if (validateForm()) {
      const reqBody = createFormData();
      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };
        try {
          const result = await updateEventAPI(currentId, reqBody, reqHeader);
          if (result.status === 200) {
            toast.success("Event updated successfully");
            setEditEventResponse(result)
            clearSubmit();
          } else {
            toast.error("Not Able to Update");
          }
        } catch (err) {
          console.log("Error Updating event:", err);
        }
      } else {
        toast.warn("Unauthorized");
      }
    }
  };

  // file handling
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && ["image/jpeg", "image/jpg", "image/png"].includes(selectedFile.type)) {
      setEvent({ ...event, file: selectedFile });
    } else {
      alert("Please upload a file in JPG, JPEG, or PNG format.");
    }
  };
//  create form-data for uploading upload content
  const createFormData = () => {
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
    if (file) {
      reqBody.append("eventPoster", file);
    }
    reqBody.append("regOpen", regOpen);
    return reqBody;
  };
// validate form
  const validateForm = () => {
    const {
      title,
      description,
      event_time,
      event_date,
      event_location,
      state,
      country,
      terms,
      file,
      regOpen,
    } = event;
    console.log("evrn", event);
    if (
      !title ||
      !description ||
      !event_date ||
      !event_time ||
      !event_location ||
      !state ||
      !country ||
      !terms ||
      !regOpen
    ) {
      toast.warn("Please fill all fields");
      return false;
    }
    return true;
  };
 // clear the form data after submission
  const clearSubmit = () => {
    setEvent({
      title: "",
      description: "",
      event_time: "",
      event_date: "",
      event_location_url: "",
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
      <Form onSubmit={handleSubmit}>
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
              <Form.Control
                type="date"
                value={event.event_date || ""}
                onChange={(e) =>
                  setEvent({ ...event, event_date: e.target.value })
                }
                className="form-control ms-2"
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Event Time</Form.Label>
              <Form.Control
                type="time"
                value={event.event_time || ""}
                onChange={(e) =>
                  setEvent({ ...event, event_time: e.target.value })
                }
                className="form-control ms-2"
              />
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
          <Form.Label>Poster (preferred dimensions 1600*1200  for better experience) </Form.Label>
          <Form.Control
            type="file" 
            accept=".jpg, .jpeg, .png"
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
                      <Card.Text>
                        Total Number of tickets: {type.ticketCount}
                      </Card.Text>
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
            {isEditing ? "Update" : "Submit"}
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
            <Form.Label>Ticket Count</Form.Label>
            <Form.Control
              type="text"
              value={ticketType.ticketCount}
              onChange={(e) =>
                setTicketType({ ...ticketType, ticketCount: e.target.value })
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
