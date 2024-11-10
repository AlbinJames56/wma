import React, { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import FileBase from "react-file-base64";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import './AdminAddCommittee.css'
import { addCommitteeAPi } from "../../../Services/allApi";

const AdminAddCommitte = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [committeeData, setCommitteeData] = useState({
    name: "",
    position: "President",
    file: "",
  });
  const [loading, setLoading] = useState(false);
  const [addError, setAddError] = useState("");
  const [addCommittee, setAddCommittee] = useState(false); 
  const togglePopup = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setCommitteeData({ ...committeeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
       const response=await addCommitteeAPi(committeeData);
       if(response.status==201){
        setAddCommittee(true);
        togglePopup();
        setCommitteeData({name:"",position:"President",file:""})
       }else{
        setAddError("Failed to add committee member. Please try again.");
       }
    }catch(err){
      setAddError("An error occurred while adding the committee member.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="popup-container text-center">
        <Button
          className="add_event_icon d-flex justify-content-center align-items-center"
          onClick={togglePopup}
          style={{
            visibility: addCommittee ? "hidden" : "visible",
            background: "orange",
          }}
        >
          <AddIcon style={{ color: "white" }} />
        </Button>

        <Modal show={isOpen} onHide={togglePopup} centered>
          <Modal.Header>
            <Modal.Title>Add Committee</Modal.Title>
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
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={committeeData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPosition" className="mb-3">
                <Form.Select
                  name="position"
                  value={committeeData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="President">President</option>
                  <option value="Vice President">Vice President</option>
                  <option value="Secretary">Secretary</option>
                  <option value="Joint Secretary">Joint Secretary</option>
                  <option value="Treasurer">Treasurer</option>
                  <option value="Executive Member">Executive Member</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formFile" className="mb-3">
                <FileBase
                  type="file"
                   accept="image/*"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setCommitteeData({ ...committeeData, file: base64 })
                  }
                />
                {committeeData.file && (
                  <img
                    src={committeeData.file}
                    alt="preview"
                    className="mt-3"
                    style={{ height: "100px", width: "auto" }}
                  />
                )}
              </Form.Group>

              <Button type="submit" className="w-100">
                Submit
              </Button>

              {addError && <p className="text-danger mt-3">{addError}</p>}
            </Form>
          </Modal.Body>

          {loading && (
            <div className="text-center py-3">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default AdminAddCommitte;
