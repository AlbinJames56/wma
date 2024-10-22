 
import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import FileBase from "react-file-base64";

const AdminAddGallery=()=> {
    const [isOpen, setIsOpen] = useState(false);

    const [imageURL, setImageURL] = useState('');

    const [loading, setLoading] = useState(false);

    const [addError, setAddError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
    // Add logic to upload the image or handle the Base64 imageURL
    if (!imageURL) {
      setAddError('Please select an image to upload.');
    } else {
      setLoading(true);
      // Image upload logic goes here...
      console.log("Image Uploaded:", imageURL);
      setLoading(false);
      setIsOpen(false);  // Close the popup after the image is successfully uploaded
    }
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
        setImageURL('');
    };


  return (
    <div className="popup-container">
      {/* Add Event Icon */}
      <div
        className="add_event_icon"
        onClick={togglePopup}
        style={{
          visibility: isOpen ? "hidden" : "visible",
          background: "green",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <AddIcon style={{ color: "white" }} />
      </div>

      {/* Modal for adding gallery image */}
      <Modal show={isOpen} onHide={togglePopup} centered>
        <Modal.Header>
          <Modal.Title>Add Gallery Image</Modal.Title>
          <Button variant="danger" onClick={togglePopup} style={{ borderRadius: "50%" }}>
            <CloseIcon style={{ color: "white" }} />
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-3">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setImageURL(base64)
                  }
                />
                {imageURL && (
                  <img
                    src={imageURL}
                    alt="preview"
                    className="mt-3"
                    style={{ height: "100px", width: "auto" }}
                  />
                )}
              </Form.Group>

            {addError && <p style={{ color: "red" }}>{addError}</p>}

            <Button type="submit" disabled={loading}>
              {loading ? "Uploading..." : "Upload Image"}
            </Button>
          </Form>
        </Modal.Body>

        {loading && (
          <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Modal>
    </div>
  );
}

export default AdminAddGallery;
