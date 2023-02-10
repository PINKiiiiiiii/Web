import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import LineChart from "./LineChart";

function ResultDoc() {
  return (
    <div
      className="container-fluid bg-blue"
      style={{
        paddingTop: "90px",
        paddingRight: "30px",
        paddingLeft: "30px",
        paddingBottom: "20px",
      }}
    >
      <div className="row mb-4">
        <div className="col-4">
          <div className="widget">
            <h2 className="text-deep-blue">เลนนี โธมัส</h2>
            <div
              className="row mb-4"
              style={{ paddingLeft: "70px", paddingRight: "70px" }}
            >
              <CircularProgressbar value={50} text={"50%"} strokeWidth={10} />
            </div>
            <div className="row text-center">
              <h5>% Alzheimer's Disease</h5>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="widget">
            <h2 className="mb-5 text-light-blue">
              ความสามารถในการมองแต่ละด้าน
            </h2>
            <div className="row mb-4">
              <div className="col-4">
                <h4>การจ้องจุด</h4>
              </div>
              <div className="col-8">
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
            <div className="row mb-4">
              <div className="col-4">
                <h4>การมองตามจุด</h4>
              </div>
              <div className="col-8">
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
            <div className="row mb-4">
              <div className="col-4">
                <h4>การมองเลี่ยงจุด</h4>
              </div>
              <div className="col-8">
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
            <div className="row mb-4">
              <div className="col-4">
                <h4>การมองตามจุดที่เคลื่อนที่</h4>
              </div>
              <div className="col-8">
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
            <div className="row mb-4">
              <div className="col-4">
                <h4>การแยกแยะภาพ</h4>
              </div>
              <div className="col-8">
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
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="widget" style={{ padding: "50px" }}>
            <h2 className="mb-4 text-black">สถิติการทำแบบทดสอบแต่ละครั้ง</h2>
            <div style={{ width: "100%" }}>
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDoc;
