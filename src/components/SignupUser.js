import { Link, useNavigate } from "react-router-dom";
import app, { auth } from "./firebase/firebaseConfig";
import firebaseConfig from "./firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import db from "./firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useRef, useState, useEffect } from "react";

const SignupUser = () => {
  const formValues = useRef({
    First: "",
    Middle: "",
    Last: "",
    Weight: "",
    Height: "",
    Gender: "",
    BloodGroup: "",
    Birthday: "",
    OtherDisease: "",
    Email: "",
    Password: "",
    FamilyHasAD: false,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/signedin/home");
      }
    });
  }, []);

  const [toggleRender, setToggleRender] = useState(false);

  const handleFormChange = (e) => {
    formValues.current[e.target.name] = e.target.value;
    // console.log(typeof e.target.value);
    setToggleRender((x) => !x);
  };
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      auth,
      formValues.current.Email,
      formValues.current.Password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    const docRef = await addDoc(collection(db, "Users"), {
      Name: {
        First: formValues.current.First,
        Middle: formValues.current.Middle,
        Last: formValues.current.Last,
      },
      Weight: Number(formValues.current.Weight),
      Height: Number(formValues.current.Height),
      Gender: formValues.current.Gender,
      BloodGroup: formValues.current.BloodGroup,
      Birthday: new Date(formValues.current.Birthday),
      OtherDisease: formValues.current.OtherDisease,
      Email: formValues.current.Email,
      Password: formValues.current.Password,
      FamilyHasAD: Boolean(formValues.current.FamilyHasAD),
    });
    const id = docRef.id;
  };

  const {
    First,
    Middle,
    Last,
    Weight,
    Height,
    Gender,
    BloodGroup,
    Birthday,
    OtherDisease,
    Email,
    Password,
    FamilyHasAD,
  } = formValues.current;

  // const testFunc = async () => {
  //   const citiesRef = collection(db, "Test");
  //   const test = await getDocs(citiesRef);
  //   console.log(test);
  //   test.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };
  // // testFunc();
  return (
    <form
      className="vh-200"
      // onSubmit={handleSubmit}
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

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        name="First"
                        id="First"
                        value={First}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        ชื่อ
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        name="Middle"
                        id="Middle"
                        value={Middle}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        ชื่อกลาง
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        id="Last"
                        name="Last"
                        value={Last}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        นามสกุล
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="number"
                        name="Weight"
                        id="Weight"
                        value={Weight}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        น้ำหนัก (กิโลกรัม)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="number"
                        name="Height"
                        id="Height"
                        value={Height}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        ส่วนสูง (เซนติเมตร)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        name="Gender"
                        id="Gender"
                        value={Gender}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        เพศ
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        name="BloodGroup"
                        id="BloodGroup"
                        value={BloodGroup}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        กรุ๊ปเลือด
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-floating">
                      <input
                        type="date"
                        name="Birthday"
                        className="form-control"
                        id="Birthday"
                        value={Birthday}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        วันเกิด (ค.ศ.)
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="text"
                        name="OtherDisease"
                        id="OtherDiseasee"
                        value={OtherDisease}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        โรคประจำตัว
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="email"
                        name="Email"
                        id="Email"
                        value={Email}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingInput"
                        style={{ fontSize: "20px" }}
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        type="password"
                        name="Password"
                        id="Password"
                        value={Password}
                        onChange={handleFormChange}
                      />
                      <label
                        htmlFor="floatingPassword"
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
                        className="form-control"
                        name="password"
                        id="password"
                        type="password"
                      />
                      <label
                        htmlFor="floatingPassword"
                        style={{ fontSize: "20px" }}
                      >
                        ยืนยันรหัสผ่าน
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    name="FamilyHasAD"
                    id="FamilyHasAD"
                    type="checkbox"
                    value={FamilyHasAD}
                    onChange={handleFormChange}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <label
                    className="form-check-label"
                    style={{ fontSize: "1.3em", color: "#636363" }}
                  >
                    &ensp;มีประวัติคนในครอบครัวเป็นโรคอัลไซเมอร์
                  </label>
                </div>
                <div
                  className="row"
                  style={{ marginLeft: "2px", marginRight: "2px" }}
                >
                  <button
                    className="btn btn-blue btn-lg btn-block"
                    type="submit"
                    onClick={onSubmit}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupUser;
