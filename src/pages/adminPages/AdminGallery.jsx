import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminAddGallery from "../../components/adminComponents/AdminAddGallery"; 
import { getGalleryImagesApi, deleteGalleryImageApi } from "../../Services/AllApi"
import { addGalleryContextResponse } from "../../ContextAPI/ContextShare";

function AdminGallery() {
  const [gallery, setGallery] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState(null);
const  {addGalleryResponse,setAddGalleryResponse }=useContext(addGalleryContextResponse)
  useEffect(() => {
    fetchGalleryImages();
  }, [addGalleryResponse]);

  const fetchGalleryImages = async () => {
    try {
      const response = await getGalleryImagesApi();
      if (response.status === 200) {
        setGallery(response.data);
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  const openDeleteConfirmation = (imageId) => {
    setSelectedImageId(imageId);
    setShowConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setShowConfirmation(false);
    setSelectedImageId(null);
  };

  const deleteImage = async () => {
    try {
      if (selectedImageId) {
        const response = await deleteGalleryImageApi(selectedImageId);
        if (response.status === 200) {
          setGallery(gallery.filter((image) => image._id !== selectedImageId));
        }
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    } finally {
      closeDeleteConfirmation();
    }
  };

  const GalleryCards = ({ item }) => (
    <Col xs={6} md={3} className="mb-4">
      <Container style={{ height: "200px", width: "100%" }}>
        <Row className="d-flex align-items-center border p-2">
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              src={item.imageURL}
              alt="gallery_img"
              rounded
              fluid
              style={{ maxHeight: "150px" }}
            />
          </Col>
          <Col xs={12} className="d-flex justify-content-center mt-2">
            <Button variant="danger" onClick={() => openDeleteConfirmation(item._id)}>
              <DeleteIcon />
            </Button>
          </Col>
        </Row>
      </Container>
    </Col>
  );

  return (
    <Container className="my-4">
      <h4 className="text-dark text-center">Gallery</h4>
      <Row>
        {gallery.length > 0 ? (
          gallery.map((item, key) => <GalleryCards item={item} key={key} />)
        ) : (
          <p>No images found.</p>
        )}
      </Row>

      {/* Gallery Add Image Component */}
      <AdminAddGallery />

      {/* Confirmation Dialog Modal */}
      <Modal show={showConfirmation} onHide={closeDeleteConfirmation} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this image?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteImage}>
            Yes, Delete
          </Button>
          <Button variant="secondary" onClick={closeDeleteConfirmation}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AdminGallery;
