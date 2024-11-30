import React, { useContext, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import FileBase from "react-file-base64";
import { addGalleryImageAPI } from "../../Services/allApi";
import { addGalleryContextResponse } from "../../ContextAPI/ContextShare";

const AdminAddGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [addError, setAddError] = useState(null);

  const  {addGalleryResponse,setAddGalleryResponse }=useContext(addGalleryContextResponse)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageURL) {
      setAddError("Please select an image to upload.");
      return;
    }

    setLoading(true);
    setAddError(null);

    try {
      const response = await addGalleryImageAPI({ imageURL });
      if (response.status === 201) {
        console.log("Image Uploaded:", response.data);
        setIsOpen(false); // Close the popup after the image is successfully uploaded
        setImageURL(""); // Reset the image field
        setAddGalleryResponse(response)
      } else {
        setAddError("Failed to upload image. Please try again.");
      }
    } catch (error) {
      setAddError("An error occurred while uploading the image.");
    } finally {
      setLoading(false);
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setImageURL("");
  };

  return (
    <div className="popup-container">
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

      <Modal show={isOpen} onHide={togglePopup} centered>
        <Modal.Header>
          <Modal.Title>Add Gallery Image</Modal.Title>
          <Button
            variant="danger"
            onClick={togglePopup}
            style={{ borderRadius: "50%" }}
          >
            <CloseIcon style={{ color: "white" }} />
          </Button>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFile" className="mb-3">
              <FileBase
                type="file"
                onDone={({ base64, type }) => {
                  if (["image/jpeg", "image/jpg", "image/png"].includes(type)) {
                    setImageURL(base64);
                  } else {
                    alert("Please upload a JPG, JPEG, or PNG file.");
                  }
                }}
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
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Modal>
    </div>
  );
};

export default AdminAddGallery;
