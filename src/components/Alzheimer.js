import ad from "./Picture/alzheimer2.jpg";
import event from "./Picture/event.png";
import speak from "./Picture/speak.png";
import friend from "./Picture/friend.png";
import sentence from "./Picture/sentence.png";
import thing from "./Picture/thing.png";
import problem from "./Picture/problem.png";
import confuse from "./Picture/confuse.png";
import angry from "./Picture/angry.png";
import check from "./Picture/check.png";
import venn from "./Picture/venn.png";
import adtest from "./Picture/adtest.jpg";
import medicine from "./Picture/medicine.jpg";
import activity from "./Picture/activity.jpg";

function Alzheimer() {
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <img src={ad} style={{ width: "100%", opacity: "0.3" }} />
      <h1
        className="centered-ad text-b"
        style={{
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        ความรู้
      </h1>

      <div className="row text-center" style={{ marginTop: "100px" }}>
        <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>
          อาการเบื้องต้นของโรคอัลไซเมอร์
        </h4>
        <h1 className="text-b">8 สัญญาณเตือนโรคอัลไซเมอร์</h1>
      </div>
      <div
        className="container"
        style={{
          padding: "20px",
        }}
      >
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={event} style={{ width: "120px" }} />
                <h3 className="text-b">ลืมเหตุการณ์</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  ที่พึ่งผ่านไป
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={speak} style={{ width: "120px" }} />
                <h3 className="text-b">ความเข้าใจ</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  เข้าใจบทสนทนาได้น้อยลง
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={friend} style={{ width: "120px" }} />
                <h3 className="text-b">ลืมชื่อเพื่อน</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  หรือของใช้ในชีวิตประจำวัน
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={sentence} style={{ width: "120px" }} />
                <h3 className="text-b">ลืมประโยค</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  ขณะพูดกลางคัน
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={thing} style={{ width: "120px" }} />
                <h3 className="text-b">ลืมของ</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  ไว้ที่ไม่ควรจะลืม เช่น ลืมกระเป๋าสตางค์ไว้ในตู้เย็น
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={problem} style={{ width: "120px" }} />
                <h3 className="text-b">มีปัญหา</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  เมื่อต้องคิดวางแผน และประมาลผล
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={confuse} style={{ width: "120px" }} />
                <h3 className="text-b">รู้สึกสับสน</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  หลงทาง ไม่คุ้นเคยกับสิ่งแวดล้อมเดิม ๆ
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "40px" }}
              >
                <img src={angry} style={{ width: "120px" }} />
                <h3 className="text-b">อารมณ์แปรปรวน</h3>
                <p className="text-b" style={{ fontSize: "20px" }}>
                  กังวล หงุดหงิด โกรธ และอารมณ์เสียง่าย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          paddingTop: "15vh",
          paddingLeft: "20vh",
          paddingRight: "20vh",
          paddingBottom: "5vh",
        }}
      >
        <div className="col-7">
          <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>
            การวินิจฉัยโรคอัลไซเมอร์
          </h4>
          <h1 className="text-b">ต้องทำอย่างไรเมื่อสงสัยว่าเป็นอัลไซเมอร์</h1>
          <p className="text-b" style={{ fontSize: "18px", marginTop: "20px" }}>
            การตรวจวินิจฉัยเพื่อหาสาเหตุของโรคถือเป็นหัวใจสำคัญในการรักษา
            และตรวจหาสาเหตุ เพื่อให้ทำการรักษาได้ตรงเป้า แม่นยำเฉพาะโรค
            และประสบผลสำเร็จ
          </p>
          <br />
          <div className="row">
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>การซักประวัติ</h3>
              <p style={{ fontSize: "18px" }}>
                จากตัวผู้ป่วยเอง คนรอบข้าง หรือผู้ใกล้ชิด
                เพื่อสังเกตพฤติกรรมและอารมณ์
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>การตรวจร่างกาย</h3>
              <p style={{ fontSize: "18px" }}>
                เพื่อหาอาการร่วมทางระบบประสาท เช่น อาการอ่อนแรง
                การเคลื่อนไหวผิดปกติ
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>การตรวจความจำ</h3>
              <p style={{ fontSize: "18px" }}>
                Mini Mental Status Examination, Montreal Cognitive Assessment
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>การตรวจภาพวินิจฉัยสมอง</h3>
              <p style={{ fontSize: "18px" }}>
                ด้วยเอกซเรย์คอมพิวเตอร์หรือคลื่นแม่เหล็กไฟฟ้า
                เพื่อประเมินภาวะของสมอง
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <img src={check} style={{ width: "100%" }} />
            </div>
            <div className="col-11 text-b">
              <h3>การตรวจเลือด</h3>
              <p style={{ fontSize: "18px" }}>
                เพื่อหาปัจจัยเสี่ยง เช่น น้ำตาล น้ำตาลสะสม ระดับไขมันในเลือด
                การทำงานของไทรอยด์
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-5 d-flex justify-content-center"
          style={{
            paddingLeft: "40px",
            paddingTop: "120px",
            paddingBottom: "200px",
          }}
        >
          <img src={adtest} style={{ width: "100%" }} />
        </div>
      </div>
      <div className="container-fluid bg-green" style={{ padding: "10px" }}>
        <div
          className="row"
          style={{
            padding: "18vh",
          }}
        >
          <div
            className="col-5 d-flex justify-content-center"
            style={{
              paddingRight: "50px",
            }}
          >
            <img src={venn} style={{ width: "90%" }} />
          </div>
          <div className="col-7">
            <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>
              สาเหตุของโรคอัลไซเมอร์
            </h4>
            <h1 className="text-b">ปัจจัยเสี่ยงในการเกิดโรคอัลไซเมอร์</h1>
            <br />
            <div className="row">
              <div className="col-1">
                <img src={check} style={{ width: "100%" }} />
              </div>
              <div className="col-11 text-b">
                <h3>อายุ</h3>
                <p style={{ fontSize: "18px" }}>
                  เมื่ออายุมากกว่า 65 ปีแล้ว ทุก ๆ 5 ปี
                  จะมีความเสี่ยงโรคอัลไซเมอร์เพิ่มขึ้นเป็นสองเท่า
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={check} style={{ width: "100%" }} />
              </div>
              <div className="col-11 text-b">
                <h3>ปัจจัยทางพันธุกรรม</h3>
                <p style={{ fontSize: "18px" }}>
                  โดยเฉพาะผู้ที่มีประวัติโรคความจำเสื่อมในครอบครัว
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <img src={check} style={{ width: "100%" }} />
              </div>
              <div className="col-11 text-b">
                <h3>เพศ</h3>
                <p style={{ fontSize: "18px" }}>
                  พบว่าเพศหญิงมีความเสี่ยงในการเกิดโรคอัลไซเมอร์มากกว่าเพศชายเล็กน้อย
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row d-flex justify-content-center text-center"
        style={{
          marginTop: "130px",
          paddingLeft: "200px",
          paddingRight: "200px",
        }}
      >
        <h4 style={{ color: "#4953f5", marginBottom: "20px" }}>
          การรักษาโรคอัลไซเมอร์
        </h4>
        <h1 className="text-b">ต้องทำอย่างไรเมื่อเป็นอัลไซเมอร์</h1>
        <p className="text-b" style={{ fontSize: "18px", marginTop: "5px" }}>
          ปัจจุบันยังไม่สามารถรักษาให้หายขาดได้ มีเพียงการช่วยให้อาการทุเลาลง
          หรือประคับประคองไม่ให้อาการแย่ลงไปเท่านั้น
        </p>
      </div>
      <div
        className="container"
        style={{
          padding: "10px",
          marginBottom: "100px",
        }}
      >
        <div
          className="row"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <div className="col-6">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={medicine}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">การรักษาโดยใช้ยา</h3>
                <p className="text-b text-blue" style={{ fontSize: "20px" }}>
                  ยาที่เข้าไปยับยั้งเอนไซม์ที่มาทำลายสารสื่อประสาท เพื่อให้
                  ผู้ป่วยจึงจะสามารถใช้ชีวิตได้ใกล้เคียงปกติ
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card" style={{ width: "100%", margin: "20px" }}>
              <div
                className="card-body text-center"
                style={{ padding: "20px" }}
              >
                <img
                  src={activity}
                  style={{ width: "100%", marginBottom: "20px" }}
                />
                <h3 className="text-b">การรักษาโดยไม่ใช้ยา</h3>
                <p className="text-b text-blue" style={{ fontSize: "20px" }}>
                  ให้ผู้ป่วยออกกำลังกายอย่างสม่ำเสมอ
                  ได้ออกไปนอกบ้านเพื่อพบปะผู้คน ได้นอนหลับอย่างมีคุณภาพ
                  และดื่มน้ำให้พอเพียง
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

export default Alzheimer;
