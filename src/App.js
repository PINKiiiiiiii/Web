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
import WebgazerCanvas from "./components/WebgazerCanvas";
import Fixation from "./components/Test/Fixation";
import { AuthProvider } from "./components/Auth";
import "./Styles/Style.css";
import Prosaccade from "./components/Test/Prosaccade";
import Antisaccade from "./components/Test/Antisaccade";
import Smoothpursuit from "./components/Test/Smoothpursuit";
import vpcTask from "./components/Test/vpcTask";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignupUser />} />
      <Route path="signedin/*" element={<Navbar />} />
      <Route path="admin/*" element={<NavbarDoc />} />
      <Route path="/calibrate" element={<WebgazerCanvas />} />
      <Route path="/fixation" element={<Fixation />} />
      <Route path="/prosaccade" element={<Prosaccade />} />
      <Route path="/antisaccade" element={<Antisaccade />} />
      <Route path="/smoothpursuit" element={<Smoothpursuit />} />
      <Route path="/vpctask" element={<vpcTask />} />
    </Routes>
  );
}

export default App;
