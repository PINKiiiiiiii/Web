import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "./Picture/GreenBrain.png";
import firebaseConfig from "./firebase/firebaseConfig";
import { AuthContext } from "./Auth";
import { useContext } from "react";

function Login(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signedin/home");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  let { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Navigate to="/signedin" />;
  }
  
  return (
    <form
      className="vh-100"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#d1f7e5",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container py-3 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <img
                  src={logo}
                  style={{ width: "40%", marginBottom: "20px" }}
                />
                <h1
                  className="mb-3"
                  style={{ fontWeight: "bold", color: "#003269" }}
                >
                  ลงชื่อเข้าใช้
                </h1>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email" style={{ fontSize: "20px" }}>
                    Email
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                  />
                  <label htmlFor="password" style={{ fontSize: "20px" }}>
                    รหัสผ่าน
                  </label>
                </div>

                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <label
                    className="form-check-label"
                    style={{ fontSize: "1.3em", color: "#636363" }}
                  >
                    &ensp;จดจำรหัสผ่าน
                  </label>
                </div>
                <div className="row">
                  <button
                    className="btn btn-blue btn-lg btn-block"
                    type="submit"
                    style={{ width: "100%", fontSize: "32px" }}
                    onClick={handleClick}
                  >
                    <h2>เข้าสู่ระบบ</h2>
                  </button>
                </div>
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-center">
                    <span style={{ fontSize: "1.3em" }}>
                      ยังไม่เคยลงทะเบียน?&ensp;
                      <Link
                        to="signupuser"
                        style={{ fontWeight: "bold", color: "#003269" }}
                      >
                        ลงทะเบียน
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
