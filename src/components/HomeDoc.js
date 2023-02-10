import { useNavigate } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircularProgressbar } from "react-circular-progressbar";
import BarChart from "./BarChart";

const rows = [
  {
    name: "เลนนี",
    lastname: "โธมัส",
    age: "50",
    sex: "ชาย",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "ติณณ์",
    lastname: "โพธิกานนท์",
    age: "60",
    sex: "ชาย",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "ธัญญาดา",
    lastname: "ทองใบ",
    age: "55",
    sex: "หญิง",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
  {
    name: "h",
    lastname: "k",
    age: "50",
    sex: "male",
    alzheimer: "50%",
    date: "01/01/2566",
  },
];

function HomeDoc(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/patient");
  };
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
        <div className="col-3">
          <div className="widget mb-4">
            <h4 className="text-light-blue">ผู้ใช้งานทั้งหมด</h4>
            <div className="counter text-center">
              <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>10</h1>
            </div>
            <h6>(คน)</h6>
          </div>

          <div className="widget">
            <h4 className="text-light-blue">เสี่ยงเป็นอัลไซเมอร์ทั้งหมด</h4>
            <div className="counter text-center">
              <h1 style={{ fontWeight: "bold", fontSize: "50px" }}>10</h1>
            </div>
            <h6>(คน)</h6>
          </div>
        </div>
        <div className="col-4">
          <div className="widget">
            <h4 className="text-deep-blue">% อัลไซเมอร์ต่อผู้ใช้ทั้งหมด</h4>
            <div
              className="row mb-4"
              style={{
                paddingLeft: "89px",
                paddingRight: "89px",
                paddingTop: "15px",
              }}
            >
              <CircularProgressbar value={30} text={"30%"} strokeWidth={10} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="widget">
            <h4 className="text-black" style={{ paddingBottom: "14px" }}>
              จำนวนผู้ป่วยอัลไซเมอร์ที่พบในแต่ละเดือน
            </h4>
            <div style={{ width: "100%" }}>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container-dash-sec mb-5">
            <div className="row" style={{ marginBottom: "30px" }}>
              <h1>สถิติของผู้ใช้งานแต่ละคน</h1>
            </div>
            <div className="row">
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <h4>วันที่</h4>
                      </TableCell>
                      <TableCell>
                        <h4>ชื่อ</h4>
                      </TableCell>
                      <TableCell>
                        <h4>นามสกุล</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>อายุ</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>เพศ</h4>
                      </TableCell>
                      <TableCell align="center">
                        <h4>เปอร์เซ็นต์อัลไซเมอร์</h4>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell onClick={handleClick}>
                          <h6>{row.date}</h6>
                        </TableCell>
                        <TableCell onClick={handleClick}>
                          <h6>{row.name}</h6>
                        </TableCell>
                        <TableCell onClick={handleClick}>
                          <h6>{row.lastname}</h6>
                        </TableCell>
                        <TableCell align="center" onClick={handleClick}>
                          <h6>{row.age}</h6>
                        </TableCell>
                        <TableCell align="center" onClick={handleClick}>
                          <h6>{row.sex}</h6>
                        </TableCell>
                        <TableCell align="center" onClick={handleClick}>
                          <h6>{row.alzheimer}</h6>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDoc;
