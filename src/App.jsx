import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";

import { Route, Router, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, Bounce } from "react-toastify";

import Home from "./pages/userPages/Home/Home";
import Header from "./components/userComponents/Header/Header";
import Gallery from "./pages/userPages/Gallery/Gallery";
import CommitteePage from "./pages/userPages/CommitteePage/CommitteePage";
import MemberReg from "./pages/userPages/Membership/MemberReg";
import DetailPage from "./components/userComponents/DetailsPage/DetailPage";
import Footer from "./components/userComponents/Footer/Footer";
import Contact from "./components/userComponents/Contact/Contact";
import About from "./components/userComponents/About/About";
import AdminNavbar from "./components/adminComponents/AdminNav/AdminNavbar";
import AdminHome from "./pages/adminPages/AdminHome";
import EventPage from "./pages/userPages/EventPage/EventPage";
import AdminLogin from "./pages/adminPages/AdminLogin";
import { fetchEventsAPI } from "./Services/allApi";
import EventRegister from "./pages/userPages/EventRegister/EventRegister";

export const AppContext = createContext();
function App() {
  const [adminPage, setAdminPage] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [events, setEvents] = useState([]);
  // console.log("events", events);
  //  prevent auto logout when reloading
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const expiry = sessionStorage.getItem("tokenExpiry");
    const now = new Date().getTime();

    const fetchData = async () => {
      const response = await fetchEventsAPI();
      setEvents(response?.data);
    };
    fetchData();
    if (token && expiry && now < expiry) {
      setIsLoggedIn(true);
    } else {
      // Clear token if it’s expired or missing
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("tokenExpiry");
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      <AppContext.Provider value={events}>
        {location.pathname === "/admin" ? (
          <div className="admin">
            <Routes>
              <Route
                path="/admin"
                element={
                  <>
                    <AdminNavbar setAdminPage={setAdminPage} />
                    {!isLoggedIn ? (
                      <AdminLogin setIsLoggedIn={setIsLoggedIn} />
                    ) : (
                      <AdminHome adminPage={adminPage} />
                    )}
                  </>
                }
              />
            </Routes>
          </div>
        ) : (
          <div className="user">
            <Header />
            <div className="contents">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<DetailPage />} />
                <Route path="/membership" element={<MemberReg />} />
                <Route path="/register/:id" element={<EventRegister />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/committee" element={<CommitteePage />} />
                <Route path="/eventPage" element={<EventPage />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </div>
            <Footer />
          </div>
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
          transition={Bounce}
        />
      </AppContext.Provider>
    </>
  );
}

export default App;
