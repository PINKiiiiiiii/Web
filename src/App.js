import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Records from "./components/Records";
import Alzheimer from "./components/Alzheimer";
import Login from "./components/Login";
import SignupUser from "./components/SignupUser";
import NavbarDoc from "./components/NavbarDoc";

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signupuser" element={<SignupUser />} />
        <Route path="signedin/*" element={<Navbar />} />
        <Route path="admin/*" element={<NavbarDoc />} />
      </Routes>
    </div>
  );
}

export default App;
