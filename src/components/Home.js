import { useNavigate } from "react-router-dom";
import team from "./Picture/team.jpg";
import check from "./Picture/check.png";
import easy from "./Picture/easy2.png";
import fast from "./Picture/fast2.png";
import quality from "./Picture/quality2.png";
import info from "./Picture/info.png";
import calibrate from "./Picture/calibrate.png";
import test from "./Picture/test.png";
import result from "./Picture/result.png";
import happiness from "./Picture/happiness.jpg";
import Pic1 from "./Picture/Pic1.png";

function Home(props) {
  const navigate = useNavigate();
  const handleClickTest = () => {
    navigate("/signedin/test");
  };
  const handleClickAlzheimer = () => {
    navigate("/signedin/alzheimer's");
  };

  return (
    <div className="container-fluid" style={{ padding: "0em" }}>
      <div className="row">
        <div className="col-7">
          <div
            className="container"
            style={{
              paddingTop: "150px",
              paddingBottom: "120px",
              paddingLeft: "100px",
              paddingRight: "50px",
            }}
          >
            <div
              className="container"
              // style={{
              //   paddingTop: "150px",
              //   paddingBottom: "120px",
              //   paddingLeft: "100px",
              //   paddingRight: "100px",
              // }}
            >
              <h4 className="text-light-blue">ยินดีต้อนรับ</h4>
              <h1
                className="text-b"
                style={{
                  fontSize: "45px",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                แพลตฟอร์มช่วยตรวจหาโรคอัลไซเมอร์ในระยะเริ่มต้นด้วยตา
                โดยปัญญาประดิษฐ์
              </h1>
              <h6 className="text-gray">
                PoDE (Platform of Assisting the Early Detection of Alzheimer's
                Disease with Eyes by AI)
              </h6>
              <br />
              <button
                type="button"
                className="btn btn-blue btn-lg"
                onClick={handleClickTest}
              >
                <h2>เริ่มทดสอบ</h2>
              </button>
              {/* <div className="container" style={{ marginTop: "10vh" }}>
                <div className="row">
                  <div className="col col-lg-3">
                    <h1>10</h1>
                    <p style={{ fontSize: "20px" }}>จำนวนผู้ใช้งาน</p>
                  </div>
                  <div className="col col-lg-4">
                    <h1>1</h1>
                    <p style={{ fontSize: "20px" }}>จำนวนปีที่ให้บริการ</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-5 wrapper" style={{ backgroundColor: "#d1f7e5" }}>
          <img src={Pic1} style={{ width: "100%" }} />
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#10167b",
          paddingLeft: "15vh",
          paddingRight: "15vh",
          paddingTop: "8vh",
          paddingBottom: "8vh",
        }}
      >
        <div className="row mx-0">
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <img src={easy} style={{ width: "100%" }} />
              </div>
              <div className="col-10 text-white">
                <h2>ใช้งานง่าย</h2>
                <p>ตรวจโรคอัลไซเมอร์ได้จากทุกที่ ทุกเวลา</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <img src={fast} style={{ width: "100%" }} />
              </div>
              <div className="col-10 text-white">
                <h2>รวดเร็ว</h2>
                <p>ใช้เวลาเพียง 5-7 นาที ก็รู้ผลตรวจได้ทันที</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <img src={quality} style={{ width: "100%" }} />
              </div>
              <div className="col-10 text-white">
                <h2>มีประสิทธิภาพ</h2>
                <p>ใช้ปัญญาประดิษฐ์วิเคราะห์โอกาสในการเป็นอัลไซเมอร์</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          padding: "20vh",
        }}
      >
        <div
          className="col-5 d-flex justify-content-center"
          style={{
            paddingRight: "50px",
            paddingTop: "35px",
            paddingBottom: "35px",
          }}
        >
          <img src={happiness} style={{ width: "100%" }} />
        </div>
        <div className="col-7">
          <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>
            บริการของเรา
          </h4>
          <h1 className="text-b">คัดกรองโรคอัลไซเมอร์ พร้อมให้คำแนะนำ</h1>
          <p className="text-b" style={{ fontSize: "18px", marginTop: "20px" }}>
            การตรวจโรคอัลไซเมอร์อย่างสม่ำเสมอ จะช่วยให้ผู้ป่วยรู้ตัวได้เร็ว
            และเข้าสู่กระบวนการรักษาได้รวดเร็วขึ้น ตลอดจนช่วยติดตาม
            และประเมินอาการในแต่ละระยะ อย่างมีประสิทธิภาพ
          </p>
          <br />
          <div className="row" onClick={handleClickTest}>
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>คัดกรองโรคอัลไซเมอร์</h3>
              <p style={{ fontSize: "18px" }}>จากการตรวจจับการทำงานของดวงตา</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>ให้คำแนะนำ</h3>
              <p style={{ fontSize: "18px" }}>
                คำแนะนำเบื้องต้นหลังการตรวจ และคำแนะนำจากแพทย์โดยตรง
              </p>
            </div>
          </div>
          <div className="row" onClick={handleClickAlzheimer}>
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>ให้ความรู้</h3>
              <p style={{ fontSize: "18px" }}>
                เกี่ยวกับโรคอัลไซเมอร์เบื้องต้น
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center">
        <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>
          ขั้นตอนการตรวจ
        </h4>
        <h1 className="text-b">คัดกรองอัลไซเมอร์ง่าย ๆ ใน 3 ขั้นตอน</h1>
      </div>
      <div
        className="container d-flex justify-content-center"
        style={{
          padding: "10px",
          marginBottom: "130px",
        }}
      >
        <div className="row">
          {/* <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div className="card-body text-center" style={{ padding: "40px" }}>
                <img src={info} style={{ width: "100px" }} />
                <h3 className="card-title">กรอกข้อมูลส่วนตัว</h3>
                <p className="card-text" style={{ fontSize: "20px" }}>
                  ได้แก่ เพศ อายุ โรคประจำตัว
                  เพื่อนำไปให้ปัญญาประดิษฐ์วิเคราะห์ผลร่วมกับการทดสอบดวงตา
                </p>
              </div>
            </div>
          </div> */}
          <div className="col-4">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "50px" }}
              >
                <img src={calibrate} style={{ width: "100px" }} />
                <h3 className="text-b">Eye-Calibration</h3>
                <p className="text-b" style={{ fontSize: "22px" }}>
                  เพื่อให้ทราบลักษณะของดวงตา ขนาดของหน้าจอ
                  และระยะห่างระหว่างผู้ทดสอบกับหน้าจอ
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "50px" }}
              >
                <img src={test} style={{ width: "100px" }} />
                <h3 className="text-b">ทดสอบ</h3>
                <p className="text-b" style={{ fontSize: "22px" }}>
                  แบบทดสอบการทำงานของดวงตาทั้งหมด 5 แบบทดสอบ โดยใช้เวลาเพียงแค่
                  5-7 นาที
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "50px" }}
              >
                <img src={result} style={{ width: "100px" }} />
                <h3 className="text-b">ผลการทดสอบ</h3>
                <p className="text-b" style={{ fontSize: "22px" }}>
                  เปอร์เซ็นต์ความสามารถของดวงตา
                  และส่งเปอร์เซ็นต์โอกาสในการเป็นอัลไซเมอร์ให้กับแพทย์
                </p>
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

export default Home;
