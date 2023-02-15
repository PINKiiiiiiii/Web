import cambodia from "./Picture/Cambodia.jpg";
import Pinky from "./Picture/Pinky.jpeg";
import Lenny from "./Picture/Lenny.jpeg";
import Tin from "./Picture/Tin.jpeg";
import one from "./Picture/1.png";
import two from "./Picture/2.jpg";
import three from "./Picture/3.png";
import four from "./Picture/four.jfif";
import mail from "./Picture/mail.png";
import call from "./Picture/Call.png";

function Aboutus() {
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <img src={cambodia} style={{ width: "100%", opacity: "0.2" }} />
      <h1
        className="centered-about"
        style={{
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        เกี่ยวกับเรา
      </h1>
      <div className="row text-center" style={{ marginTop: "100px" }}>
        <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>ทีมงานของเรา</h4>
        <h1 className="text-b">ทีมแพทย์ที่ปรึกษา</h1>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{
          padding: "10px",
          marginBottom: "115px",
        }}
      >
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={one}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">
                  ผศ.นพ.สุรัตน์
                  <br />
                  ตันประเวช
                </h3>
                <p className="card-text text-blue">
                  ผู้เชี่ยวชาญด้านระบบประสาท และสมอง <br />
                  หัวหน้าศูนย์เวชศาสตร์ผู้สูงอายุ
                  <br />
                  โรงพยาบาลมหาราชนครเชียงใหม่
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={two}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">
                  ผศ.พญ.สลิตา
                  <br />
                  อังกุระวรานนท์
                </h3>
                <p className="card-text text-blue">
                  อาจารย์ภาควิชารังสีวิทยา
                  <br />
                  คณะแพทยศาสตร์
                  <br />
                  มหาวิทยาลัยเชียงใหม่
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={three}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">
                  ผศ.นพ.อธิวัฒน์
                  <br />
                  สุนทรพันธ์
                </h3>
                <p className="card-text text-blue">
                  ผู้เชี่ยวชาญด้านสมอง และประสาทวิทยา
                  <br />
                  คณะแพทยศาสตร์
                  <br />
                  มหาวิทยาลัยเชียงใหม่
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={four}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">
                  ผศ.พญ.จุฬาลักษณ์
                  <br />
                  ตั้งมั่นคงวรกูล
                </h3>
                <p className="card-text text-blue">
                  ผู้เชี่ยวชาญด้านกระจกตาและผ่าตัดแก้ไขสายตา ต้อกระจก
                  <br />
                  โรงพยาบาลมหาราชนครเชียงใหม่
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center" style={{ marginTop: "80px" }}>
        <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>ทีมงานของเรา</h4>
        <h1>คณะผู้จัดทำ</h1>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{
          padding: "10px",
          marginBottom: "100px",
        }}
      >
        <div
          className="row"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <div className="col-4">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={Pinky}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">ธัญญาดา ทองใบ</h3>
                <p className="card-text text-blue" style={{ fontSize: "20px" }}>
                  ผู้พัฒนาเว็บไซต์
                  <br />
                  <br />
                  โรงเรียนปรินส์รอยแยลส์วิทยาลัย
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={Lenny}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">เลนนี โธมัส</h3>
                <p className="card-text text-blue" style={{ fontSize: "20px" }}>
                  ผู้พัฒนาแบบทดสอบดวงตา
                  <br />
                  <br />
                  โรงเรียนปรินส์รอยแยลส์วิทยาลัย
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={Tin}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">ติณณ์ โพธิกานนท์</h3>
                <p className="card-text text-blue" style={{ fontSize: "20px" }}>
                  ผู้พัฒนาปัญญาประดิษฐ์
                  <br />
                  <br />
                  โรงเรียนปรินส์รอยแยลส์วิทยาลัย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-green" style={{ padding: "10px" }}>
        <div className="row">
          <div className="col-6">
            <div
              className="container"
              style={{
                paddingTop: "100px",
                paddingBottom: "120px",
                paddingLeft: "100px",
                paddingRight: "50px",
              }}
            >
              <div className="container">
                <h4 className="text-light-blue">ช่องทาง</h4>
                <h1
                  className="text-b"
                  style={{
                    fontSize: "45px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  ติดต่อเรา
                </h1>
                <h5
                  className="text-gray"
                  style={{
                    marginBottom: "70px",
                  }}
                >
                  สนใจสอบถามข้อมูล สามารถส่งข้อความ หรือติดต่อได้ที่
                </h5>
                <div className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2">
                        <img src={call} style={{ width: "100%" }} />
                      </div>
                      <div className="col-10">
                        <h3 className="text-b">เบอร์โทร</h3>
                        <p>+66 92 961 8504</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-2">
                        <img src={mail} style={{ width: "100%" }} />
                      </div>
                      <div className="col-10">
                        <h3 className="text-b">อีเมล</h3>
                        <p>Lennythomas252@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div
              className="container"
              style={{
                padding: "80px",
              }}
            >
              <div
                className="container bg-white"
                style={{
                  padding: "50px",
                }}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-floating">
                      <input
                        type="ชื่อ"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Name"
                      />
                      <label style={{ fontSize: "20px" }}>ชื่อ</label>
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
                      <label style={{ fontSize: "20px" }}>นามสกุล</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating mb-3">
                    <textarea
                      type="message"
                      className="form-control"
                      id="message"
                      placeholder="message"
                      style={{ height: "200px" }}
                    />
                    <label style={{ fontSize: "20px" }}>ข้อความ</label>
                  </div>
                </div>

                <div className="row">
                  <button
                    className="btn btn-blue btn-lg btn-block"
                    type="submit"
                    style={{ width: "100%", fontSize: "32px" }}
                    // onClick={handleClick}
                  >
                    <h2>ส่งข้อความ</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-down text-white"
        style={{ padding: "15vh" }}
      >
        <div className="row">
          <div className="col-lg-4">
            <h2>เกี่ยวกับเรา</h2>
            <p>
              BrainMED (Brain Medical Equipment for Screening Dementia) คือ
              เครื่องมือช่วยคัดกรอง ประเมิน
              และติดตามภาวะเสื่อมถอยของสมองด้วยเทคโนโลยีปัญญาประดิษฐ์
            </p>
            <div className="my-5 social">
              <a href="#" className="pl-0 pr-3">
                <span className="icon-facebook"></span>
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-twitter"></span>
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-instagram"></span>
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-linkedin"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-4">
                <h2 className="footer-heading">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Amazing Atmosphere</a>
                  </li>
                  <li>
                    <a href="#">Caring Staff</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h2 className="footer-heading">Helpful Link</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Hospice Care</a>
                  </li>
                  <li>
                    <a href="#">Excellent Cuisine</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h2 className="footer-heading">Resources</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Health Care</a>
                  </li>
                  <li>
                    <a href="#">Elderly Care</a>
                  </li>
                  <li>
                    <a href="#">Care with Love</a>
                  </li>
                  <li>
                    <a href="#">Quality Care</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
