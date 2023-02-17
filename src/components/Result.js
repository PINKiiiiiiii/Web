import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BarChart from "./BarChart";

function Result() {
  return (
    <div className="container-fluid bg-blue" style={{ padding: "0em" }}>
      <div
        className="row"
        style={{
          marginTop: "100px",
          marginRight: "80px",
          marginLeft: "80px",
        }}
      >
        <div className="col-5">
          <div className="widget">
            <h4 className="text-deep-blue">ความเสี่ยงในการเป็นโรคอัลไซเมอร์</h4>
            <div
              className="row mb-4"
              style={{
                paddingLeft: "85px",
                paddingRight: "85px",
                paddingTop: "24px",
              }}
            >
              <CircularProgressbar value={30} text={"30%"} strokeWidth={10} />
            </div>
          </div>
        </div>
        <div className="col-7">
          <div className="widget">
            <h4 className="text-black" style={{ paddingBottom: "14px" }}>
              ผลการตรวจครั้งล่าสุด
            </h4>
            <div style={{ width: "100%" }}>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <div
        className="row text-center"
        style={{
          paddingTop: "100px",
        }}
      >
        <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>ผลการทดสอบ</h4>
        <h1>ความสามารถในการมองแต่ละด้าน</h1>
      </div>
      <div className="container-result">
        <div className="row mb-3">
          <div className="col-3">
            <h3>การจ้องจุด</h3>
          </div>
          <div className="col-9">
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
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <h3>การมองตามจุด</h3>
          </div>
          <div className="col-9">
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
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <h3>การมองเลี่ยงจุด</h3>
          </div>
          <div className="col-9">
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
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <h3>การมองตามจุดที่เคลื่อนที่</h3>
          </div>
          <div className="col-9">
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
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <h3>การแยกแยะภาพ</h3>
          </div>
          <div className="col-9">
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
        </div>
      </div>
      <div
        className="row text-center"
        style={{
          paddingTop: "40px",
        }}
      >
        <h4 style={{ color: "#4953f5", marginBottom: "10px" }}>
          ข้อควรปฏิบัติ
        </h4>
        <h1>คำแนะนำเบื้องต้น</h1>
      </div>
      <div className="container-result">
        <h2 className="mb-4">
          ควรกลับมาทำแบบทดสอบทุก ๆ เดือน เพื่อติดตาม
          และประเมินความเสี่ยงในการเป็นโรคอัลไซเมอร์อย่างสม่ำเสมอ
        </h2>
        <p>
          * นี่เป็นเพียงการประเมินขั้นต้นเท่านั้น
          หากต้องการตรวจอย่างละเอียดมากยิ่งขึ้น ควรปรึกษาแพทย์
          เพื่อทำการตรวจที่โรงพยาบาล
        </p>
      </div>
    </div>
  );
}

export default Result;
