import { Link, useNavigate } from "react-router-dom";

function SignupUser() {
  return (
    <section
      className="vh-200"
      style={{
        backgroundColor: "#d1f7e5",
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-4 p-md-4">
                <h1
                  className="mb-3 pb-2 pb-md-0 mb-md-3"
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#003269",
                  }}
                >
                  ลงทะเบียน
                </h1>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="ชื่อ"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Name"
                        />
                        <label for="floatingInput" style={{ fontSize: "20px" }}>
                          ชื่อ
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="นามสกุล"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Lastname"
                        />
                        <label for="floatingInput" style={{ fontSize: "20px" }}>
                          นามสกุล
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-floating">
                        <input
                          type="อายุ"
                          className="form-control"
                          id="floatingInput"
                          placeholder="50"
                        />
                        <label for="floatingInput" style={{ fontSize: "20px" }}>
                          อายุ
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-0">
                      <h5 className="mb-1 pb-1 text-black">เพศ: </h5>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          value="option1"
                          checked
                        />
                        <label
                          className="form-check-label text-black"
                          for="femaleGender"
                          style={{ fontSize: "18px" }}
                        >
                          หญิง
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          value="option2"
                        />
                        <label
                          className="form-check-label text-black"
                          for="maleGender"
                          style={{ fontSize: "18px" }}
                        >
                          ชาย
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control"
                          id="floatingInput"
                          placeholder="disease"
                        />
                        <label for="floatingInput" style={{ fontSize: "20px" }}>
                          วันเกิด
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="disease"
                          className="form-control"
                          id="floatingInput"
                          placeholder="disease"
                        />
                        <label for="floatingInput" style={{ fontSize: "20px" }}>
                          โรคประจำตัว
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput" style={{ fontSize: "20px" }}>
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label
                          for="floatingPassword"
                          style={{ fontSize: "20px" }}
                        >
                          รหัสผ่าน
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-3">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label
                          for="floatingPassword"
                          style={{ fontSize: "20px" }}
                        >
                          ยืนยันรหัสผ่าน
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginLeft: "2px", marginRight: "2px" }}
                  >
                    <button
                      className="btn btn-blue btn-lg btn-block"
                      type="submit"
                      style={{ width: "100%", fontSize: "32px" }}
                    >
                      <h2>ลงทะเบียน</h2>
                    </button>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-1 d-flex justify-content-center">
                      <span style={{ fontSize: "1.4em" }}>
                        เคยลงทะเบียนแล้ว?&ensp;
                        <Link
                          to="/"
                          style={{ fontWeight: "bold", color: "#003269" }}
                        >
                          เข้าสู่ระบบ
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupUser;
