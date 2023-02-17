import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Typography } from "@mui/material";
import webgazer from "./../Scripts/Webgazer/index";
import nj from "numjs";

import fixation from "../PoDE/Video/Fixation.mp4";
// import fixationAudio from "";
import "../PoDE/css/video.css";

const Fixation: React.FC<{}> = () => {
  // const MyComponent = () => {
  //   useEffect(() => {
  //     const video = document.getElementById("bg-video") as HTMLVideoElement;
  //     video.loop = false;
  //     video.addEventListener("ended", function () {
  //       const btn = document.createElement("button");
  //       btn.innerHTML = "หน้าถัดไป";
  //       btn.setAttribute("class", "btn btn-info next-test-btn");
  //       btn.style.fontSize = "40px";
  //       btn.style.borderRadius = "45px";
  //       btn.style.fontFamily = "Anuphan";
  //       btn.addEventListener("click", function () {
  //         window.location.href = "proSaccade.html";
  //         webgazer.pause();

  //         const csv = arr.map((fields) => fields.join(",")).join("\n");
  //         const dl = "data:text/csv;charset=utf-8," + csv;
  //         window.open(encodeURI(dl));
  //       });
  //       const parentDiv = document.getElementsByClassName("video-background")[0];
  //       parentDiv.appendChild(btn);
  //     });
  //   }, []);

  return (
    <div className="video-background">
      <video className="videoTag" id="bg-video" autoPlay muted loop>
        <source src={fixation} type="video/mp4" />
      </video>

      {/* <audio className="audioTag" id="audio" autoPlay muted loop>
        <source src={path} type="audio/mpeg" />
      </audio> */}
    </div>
  );
};
export default memo(Fixation);