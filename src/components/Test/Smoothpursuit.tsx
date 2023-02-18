import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Typography } from "@mui/material";
import webgazer from "../../Scripts/Webgazer/index";
import nj from "numjs";
import { useNavigate } from "react-router-dom";
import "../WebgazerCanvas";
import "./../../PoDE/css/video.css";
import smoothpursuit from "./../../PoDE/Video/smoothpursuit.mp4";
import ReactAudioPlayer from "react-audio-player";
import smoothpursuitAudio from "./../../PoDE/Audio/smoothpursuit.mp3";
// import fixationAudio from "";

const Smoothpursuit: React.FC<{}> = () => {
  useEffect(() => {
    webgazer.applyKalmanFilter(true);
    webgazer.showPredictionPoints(true);
    webgazer.begin((): void => {
      console.log("Start");
    });
  });
  let navigate = useNavigate();
  useEffect(() => {
    const video = document.getElementById("bg-video") as HTMLVideoElement;
    video.loop = false;
    video.addEventListener("ended", function () {
      webgazer.showPredictionPoints(false);
      webgazer.pause();
      const btn = document.createElement("button");
      btn.innerHTML = "หน้าถัดไป";
      btn.setAttribute("class", "btn btn-info next-test-btn");
      btn.style.fontSize = "40px";
      btn.style.borderRadius = "45px";
      btn.style.fontFamily = "Anuphan";
      btn.addEventListener("click", function () {
        navigate("/vpctask");
        // webgazer.pause();

        //   const csv = arr.map((fields) => fields.join(",")).join("\n");
        //   const dl = "data:text/csv;charset=utf-8," + csv;
        //   window.open(encodeURI(dl));
      });
      const parentDiv = document.getElementsByClassName("video-background")[0];
      parentDiv.appendChild(btn);
    });
  }, []);

  return (
    <div className="video-background">
      <video className="videoTag" id="bg-video" autoPlay muted loop>
        <source src={smoothpursuit} type="video/mp4" />
      </video>

      <ReactAudioPlayer src={smoothpursuitAudio} autoPlay muted={false} />
    </div>
  );
};
export default memo(Smoothpursuit);