import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Route, Router, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/userPages/Home/Home";
import Header from "./components/userComponents/Header/Header";
import Gallery from "./pages/userPages/Gallery/Gallery";
import Events from "./pages/userPages/Events/Events";
import CommitteePage from "./pages/userPages/CommitteePage/CommitteePage";
import MemberReg from "./pages/userPages/Membership/MemberReg";
import DetailPage from "./components/userComponents/DetailsPage/DetailPage";
import Footer from "./components/userComponents/Footer/Footer";
import Contact from "./components/userComponents/Contact/Contact";
import About from "./components/userComponents/About/About";
import AdminNavbar from "./components/adminComponents/AdminNav/AdminNavbar";
import AdminHome from "./pages/adminPages/AdminHome";

export const AppContext = createContext();
function App() {
  const [adminPage,setAdminPage]=useState(0)
//  console.log(adminPage);
 

  return (
    <>
    {location.pathname === "/admin" ?
   
    <div className="admin">
       <Routes>
        <Route
          path="/admin"
          element={
            <>
              <AdminNavbar setAdminPage={setAdminPage}/>
               <AdminHome adminPage={adminPage} />
            </>
          }
        />
      </Routes>
    </div>:
     
      <div className="user">
        <Header />
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<DetailPage />} />
            <Route path="/membership" element={<MemberReg />} />
            <Route path="/register" element={<MemberReg />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/committee" element={<CommitteePage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div> 
        <Footer />
      </div> }
    </>
  );
}

export default App;
