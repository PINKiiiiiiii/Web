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
import { AuthProvider } from "./components/Auth";

function App(props) {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupUser />} />
          <Route path="signedin/*" element={<Navbar />} />
          <Route path="admin/*" element={<NavbarDoc />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
