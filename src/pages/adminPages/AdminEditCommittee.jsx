import React from "react";
import Avatar from "../../assets/avatar.png";
import AdminAddCommitte from "../../components/adminComponents/AdminAddCommittee/AdminAddCommitte";
import DeleteIcon from "@mui/icons-material/Delete";  

function AdminEditCommittee() {
  const committee = [
    {
      name: "John Doe",
      position: "President",
      imageUrl: "https://nursinginstitutegoa.org/wp-content/uploads/2016/01/tutor-8.jpg",
    },
    {
      name: "Alice Walker",
      position: "Secretary",
      imageUrl: "https://americanlibrariesmagazine.org/wp-content/uploads/2015/01/alicewalkerforweb2.jpg",
    },
    {
      name: "Mathew Devasy",
      position: "Treasurer",
      imageUrl: "https://i1.sndcdn.com/avatars-000005942097-1jok5y-t240x240.jpg",
    },
    {
      name: "Jameela",
      position: "Vice President",
      imageUrl: "",
    },
    {
      name: "Maneesh",
      position: "Joint Secretary",
      imageUrl: "",
    },
    {
      name: "Robert",
      position: "Executive Member",
      imageUrl: "",
    },
    {
      name: "Ansari",
      position: "Executive Member",
      imageUrl: "",
    },
    {
      name: "Muthabiq",
      position: "Executive Member",
      imageUrl: "",
    },
    {
      name: "ALisha",
      position: "Executive Member",
      imageUrl: "",
    },
  ];

  const Committee = ({ item }) => {
    return (
      <div className="container d-flex justify-content-center p-3 ">
        <div className="row align-items-center  border rounded py-2 w-75">
          <div className="col-3 ">
            <img
            width={80}
              src={item.imageUrl ? item.imageUrl : Avatar}
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
            <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <h4 className="text-dark text-center" >Add/Edit Committee</h4>
      {committee.length !== 0 ? (
        <div className="cards">
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
