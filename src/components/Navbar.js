import { NavLink } from "react-router-dom";
import logo from "./Picture/GreenBrain.png";
import { Routes, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Home from "./Home";
import Test from "./Test";
import Records from "./Records";
import Alzheimer from "./Alzheimer";
import Result from "./Result";
import HomeDoc from "./HomeDoc";
import ResultDoc from "./ResultDoc";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand bg-navbar fixed-top">
        <div
          className="container-fluid"
          style={{ paddingLeft: "10vh", paddingRight: "10vh" }}
        >
          <img style={{ height: "50px" }} />
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/home">
                  <img src={logo} style={{ height: "3vh" }} />
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/home">
                  <h5>หน้าหลัก</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/test">
                  <h5>แบบทดสอบ</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/records">
                  <h5>สถิติ</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/alzheimer's">
                  <h5>ความรู้</h5>
                </NavLink>
              </li>
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/signedin/aboutus">
                  <h5>เกี่ยวกับเรา</h5>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="records" element={<Records />} />
        <Route path="alzheimer's" element={<Alzheimer />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="result" element={<Result />} />
        <Route path="dashboard" element={<HomeDoc />} />
        <Route path="patient" element={<ResultDoc />} />
      </Routes>
    </div>
  );
}

export default Navbar;
