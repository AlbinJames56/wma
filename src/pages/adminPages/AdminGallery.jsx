import React, { useState } from "react";
import { Container, Row, Col, Image, Button, Modal } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete"; 
import AdminAddGallery from "../../components/adminComponents/AdminAddGallery";
 

function AdminGallery() {
  const gallery = [
    {
      original: "https://picsum.photos/id/1018/1000/600/", 
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/", 
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/", 
    },
    {
      original: "https://picsum.photos/id/1018/1000/600/", 
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/", 
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/", 
    },
  ];
  // const [gallery,setGallery]=useState([])

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // To track which image is being deleted

  const openDeleteConfirmation = (image) => {
    setSelectedImage(image);
    setShowConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setShowConfirmation(false);
    setSelectedImage(null);
  };

  const deleteImage = () => {
    // Perform delete logic here
    console.log("Deleting image:", selectedImage);
    closeDeleteConfirmation();
  };

  const GalleryCards = ({ item }) => {
    return (
      <Container className="col-xl-4" style={{ height: "200px", width: "250px" }}>
        <Row className="align-items-center border p-2 ">
          <Col xs={12} className="d-flex justify-content-center">
            <Image
              src={item.original || ""}
              alt="gallery_img"
              rounded
              fluid
              style={{ maxHeight: "150px" }}
            />
          </Col>
          <Col xs={12} className="d-flex justify-content-center mt-2">
            <Button variant="danger" onClick={() => openDeleteConfirmation(item.original)}>
              <DeleteIcon />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col>
            <div className="d-flex  justify-content-center">
              {gallery.map((item, key) => (
                <GalleryCards item={item} key={key} />
              ))}
            </div>
          </Col>
        </Row>

        {/* Gallery Add Image Component */}
        <AdminAddGallery/>

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
    </div>
  );
}

export default AdminGallery;
