import check from "./Picture/check.png";
import { useNavigate } from "react-router-dom";
// import next from "../PoDE/js/main";

function Test() {
  let navigate = useNavigate();
  const goTest = () => {
    navigate((window.location.href = "/src/PoDE/pode.html"));
  };

  return (
    <div className="container-fluid bg-blue vh-100" style={{ padding: "0em" }}>
      <div
        className="row text-center"
        style={{
          paddingTop: "120px",
        }}
      >
        <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>คำชี้แจง</h4>
        <h1>ข้อควรปฏิบัติในการทำแบบทดสอบ</h1>
      </div>
      <div className="container-result">
        <div className="row mb-2">
          <div className="col-1 d-flex justify-content-end">
            <img src={check} style={{ width: "40%" }} />
          </div>
          <div className="col-11">
            <h4>แบบทดสอบมีทั้งหมด 5 แบบทดสอบ ใช้เวลาทำประมาณ 5-7 นาที</h4>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1 d-flex justify-content-end">
            <img src={check} style={{ width: "40%" }} />
          </div>
          <div className="col-11">
            <h4>
              นั่งทำแบบทดสอบในท่าทางที่เหมาะสม
              และไม่ควรลุกออกไปขณะทำแบบทดสอบอยู่
            </h4>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-1 d-flex justify-content-end">
            <img src={check} style={{ width: "40%" }} />
          </div>
          <div className="col-11">
            <h4>
              ตั้งกล้องให้เห็นใบหน้าชัดเจนตลอดการทำแบบทดสอบ
              และไม่เคลื่อนย้ายกล้องระหว่างทำแบบทดสอบ
            </h4>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-1 d-flex justify-content-end">
            <img src={check} style={{ width: "40%" }} />
          </div>
          <div className="col-11">
            <h4>เปิดเสียงขณะทำแบบทดสอบ เพื่อรับฟังข้อควรปฏิบัติขณะทำ</h4>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-1 d-flex justify-content-end">
            <img src={check} style={{ width: "40%" }} />
          </div>
          <div className="col-11">
            <h4>ทำแบบทดสอบอย่างตั้งใจ เพื่อให้ได้ผลลัพธ์ที่แม่นยำมากที่สุด</h4>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          paddingBottom: "130px",
        }}
      >
        <button
          className="btn btn-blue btn-lg btn-block"
          type="submit"
          style={{ width: "100%", fontSize: "32px" }}
          onClick={goTest}
        >
          <h5>เริ่มทดสอบ</h5>
        </button>
      </div>
    </div>
  );
}

export default Test;
