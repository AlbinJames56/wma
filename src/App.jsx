import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/userComponents/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/userPages/Home";
import { createContext } from "react";
import Gallery from "./pages/userPages/Gallery";
import Events from "./pages/userPages/Events";
import CommitteePage from "./pages/userPages/CommitteePage";
import MemberReg from "./pages/userPages/MemberReg";
import MembershipForm from "./components/userComponents/MembershipForm";
import DetailPage from "./components/userComponents/DetailPage";
import Footer from "./components/userComponents/Footer";

export const AppContext = createContext();
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<DetailPage/>} />
        <Route path="/membership" element={<MembershipForm/>} />
        <Route path="/register" element={<MemberReg/>} />
        <Route path="/committee" element={<CommitteePage/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
