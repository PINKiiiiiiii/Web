import happiness from "./Picture/happiness.jpg";
import check from "./Picture/check.png";
import checkleft from "./Picture/checkleft.png";
import jan from "./Picture/jan.png";
import feb from "./Picture/feb.png";
import march from "./Picture/march.png";
import april from "./Picture/april.png";
import may from "./Picture/may.png";
import june from "./Picture/june.png";
import july from "./Picture/july.png";
import au from "./Picture/au.png";
import sep from "./Picture/sep.png";
import oc from "./Picture/oc.png";
import nov from "./Picture/nov.png";
import dec from "./Picture/dec.png";

function Records() {
  return (
    <div className="container-fluid" style={{ padding: "0em" }}>
      <div
        className="row text-center mb-3"
        style={{
          paddingTop: "130px",
        }}
      >
        <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>เปอร์เซ็นต์</h4>
        <h1>การตรวจคัดกรองในปีนี้</h1>
      </div>
      <div
        className="row"
        style={{
          paddingLeft: "150px",
          paddingRight: "150px",
          paddingBottom: "60px",
        }}
      >
        <div className="container">
          <div
            className="progress"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "30px", borderRadius: "3em" }}
          >
            <div className="progress-bar w-50">
              <h5>50%</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container" style={{ padding: "55px" }}>
                <div className="container bg-blue" style={{ padding: "40px" }}>
                  <div className="card-body text-center">
                    <div className="row mb-4">
                      <h1>พ.ศ.2565</h1>
                    </div>
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src={jan} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={feb} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={march} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={april} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={may} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={june} style={{ width: "70%" }} />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src={july} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={au} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={sep} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={oc} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={nov} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={dec} style={{ width: "70%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container" style={{ padding: "55px" }}>
                <div className="container bg-blue" style={{ padding: "40px" }}>
                  <div className="card-body text-center">
                    <div className="row mb-4">
                      <h1>พ.ศ.2566</h1>
                    </div>
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src={jan} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={feb} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={march} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={april} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={may} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={june} style={{ width: "70%" }} />
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-2">
                        <img src={july} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={au} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={sep} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={oc} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={nov} style={{ width: "70%" }} />
                      </div>
                      <div className="col-2">
                        <img src={dec} style={{ width: "70%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <img src={checkleft} style={{ width: "70px" }} />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <img src={check} style={{ width: "70px" }} />
          </button>
        </div>
      </div>
      <div
        className="container-fluid bg-down text-white"
        style={{ padding: "15vh", marginTop: "80px" }}
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

export default Records;
