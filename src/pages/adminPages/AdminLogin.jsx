import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import { adminLogin } from "../../Services/allApi";
import { Flip, toast } from "react-toastify"; 
function AdminLogin({ setIsLoggedIn }) {
 
  const [login, setLogin] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { username, password } = login;
    if ((!username, !password)) {
      toast.warn("Please enter username and password");
    } else {
      try {
        setLoading(true);
        const result = await adminLogin(login);
        console.log("res",result);
        
        if (result.status == 200) {
          toast.success("Admin Logged in Successfully")
          const token = result.data.token;
          const expiry = new Date().getTime() + 24 * 60 * 60 * 1000; // auto logout admin in 1 day
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("tokenExpiry", expiry);
          setLoading(false)
          setIsLoggedIn(true) 
        } else {
          toast.warning("Invalid");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className=" mt-5  pt-5">
      <MDBContainer className="my-5 gradient-form mt-5 pt-5 w-50">
        <div className="border  bg-light rounded p-5">
          <h5 className="text-dark text-center mb-4 bg">Admin Login</h5>
          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="form1"
            type="text"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="form2"
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <div className="text-center pt-1  ">
            <MDBBtn
              className="mb-4 w-100 gradient-custom-2"
              onClick={(e) => handleSignIn(e)}
            >
              Sign in
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}
export default AdminLogin;
