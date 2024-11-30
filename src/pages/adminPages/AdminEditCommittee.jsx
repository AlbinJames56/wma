import React, { useEffect, useState } from "react";
import Avatar from "../../assets/avatar.png";
import AdminAddCommitte from "../../components/adminComponents/AdminAddCommittee/AdminAddCommitte";
import DeleteIcon from "@mui/icons-material/Delete";  
import { deleteCommitteeMemberAPPI, getCommitteeApi } from "../../Services/allApi";

function AdminEditCommittee() {
  const [committee, setCommittee] = useState([]);
  useEffect(() => {
    const fetchCommitteeData = async () => {
      try {
        const response = await getCommitteeApi();
        if (response.status === 200) {
          setCommittee(response.data);
        } else {
          console.error("Failed to fetch committee members");
        }
      } catch (error) {
        console.error("Error fetching committee data:", error);
      }
    };

    fetchCommitteeData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await deleteCommitteeMemberAPPI(id);
      if (response.status === 200) {
        setCommittee(committee.filter((member) => member._id !== id));
      } else {
        console.error("Failed to delete committee member");
      }
    } catch (error) {
      console.error("Error deleting committee member:", error);
    }
  };

  const Committee = ({ item }) => {
    return (
      <div className="container d-flex justify-content-center p-3 ">
        <div className="row align-items-center  border rounded py-2 w-75">
          <div className="col-3 ">
            <img
            width={80}
            src={item.file ? item.file : Avatar}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-6">
            <div className="d-flex flex-column justify-content-center">
              <span className="h5 mb-1">{item.name}</span>
              <span className="text-muted">{item.position}</span>
            </div>
          </div>
          <div className="col-3 text-right">
            <DeleteIcon onClick={() => handleDelete(item._id)}  style={{ color: "red", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <h4 className="text-dark text-center" >Add/Edit Committee</h4>
      {committee.length !== 0 ? (
        <div className="cards" >
          {committee.map((item, key) => (
            <Committee item={item} key={key} />
          ))}
        </div>
      ) : null}
      <AdminAddCommitte />
    </>
  );
}

export default AdminEditCommittee;
