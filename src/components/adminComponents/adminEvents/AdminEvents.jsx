import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Card, Modal, Button, Image } from "react-bootstrap";
const AdminEvents = ({
  events,
  setEvents,
  setViewEvent,
  setAddEvent,
  currentId,
  setCurrentId,
}) => {
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const openDeleteConfirmation = (id) => {
    setSelectedEventId(id);
    setDeleteConfirmation(true);
  };
  const closeDeleteConfirmation = (id) => {
    setSelectedEventId(null);
    setDeleteConfirmation(false);
  };
  console.log(events);
  
  const deleteEvent = () => {};
  return (
    <>
      <Card className="mb-3 shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <strong className="text-dark">{events?.title}</strong>
          <div>
            <RemoveRedEyeIcon
              className="text-secondary mx-1"
              onClick={() => {
                setViewEvent(true);
                setCurrentId(events?.id);
              }}
            />
            <EditIcon
              className="text-secondary mx-1"
              onClick={() => {
                setAddEvent(true);
                setCurrentId(events?.id);
              }}
            />
            <DeleteForeverIcon
              className="text-secondary mx-1"
              onClick={() => {
                openDeleteConfirmation(events?.id);
              }}
            />
          </div>
        </Card.Header>
        <Card.Body className="d-flex justify-content-center">
          <Image
            src={events?.image}
            alt="event poster"
            fluid
            rounded
            style={{ maxHeight: "200px", objectFit: "cover" }}
          />
        </Card.Body>
      </Card>
      {/* Confirmation Dialog Modal */}
      <Modal
        show={deleteConfirmation}
        onHide={closeDeleteConfirmation}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this event?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteEvent}>
            Yes, Delete
          </Button>
          <Button variant="secondary" onClick={closeDeleteConfirmation}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminEvents;
