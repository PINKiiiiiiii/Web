import { NavLink } from "react-router-dom";
import logo from "./Picture/GreenBrain.png";
import { Routes, Route } from "react-router-dom";
import HomeDoc from "./HomeDoc";
import ResultDoc from "./ResultDoc";

function NavbarDoc(props) {
  return (
    <div>
      <nav className="navbar navbar-expand bg-navbar fixed-top">
        <div
          className="container-fluid"
          style={{ paddingLeft: "1vh", paddingRight: "10vh" }}
        >
          <img style={{ height: "50px" }} />
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="mx-lg-3">
                <NavLink className="nav-link" to="/admin/home">
                  <img src={logo} style={{ height: "3vh" }} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<HomeDoc />} />
        <Route path="patient" element={<ResultDoc />} />
      </Routes>
    </div>
  );
}

export default NavbarDoc;
