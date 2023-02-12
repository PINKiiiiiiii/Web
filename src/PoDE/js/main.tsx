import {
  ClearCalibration,
  PopUpInstruction,
  initializeCanvas,
} from "./calibration";

const webgazer: any = require("./webgazer");

interface IWebgazerData {
  x: string;
  y: string;
  eyeFeatures: {
    left: {
      height: string;
      imagex: string;
      imagey: string;
    };
    right: {
      height: string;
      imagex: string;
      imagey: string;
    };
  };
}

const arr: Array<Array<string>> = [];
arr[0] = [
  "time",
  "x",
  "y",
  "left-height",
  "left-x",
  "left-y",
  "right-height",
  "right-x",
  "right-y",
];
function Restart(): void {
  document.getElementById("Accuracy")!.innerHTML = "<a>Not yet Calibrated</a>";
  webgazer.clearData();
  ClearCalibration();
  PopUpInstruction();
}

window.onload = async function (): Promise<void> {
  await webgazer
    .setRegression("ridge") /* currently must set regression and tracker */
    //.setTracker('clmtrackr')
    .setGazeListener(function (
      data: IWebgazerData,
      clock: string,
      passarg: any
    ) {
      if (data != null) {
        if (passarg == null) {
          const gazeData = data;
          localStorage.setItem("gazeData", JSON.stringify(gazeData));
          console.log(
            data.eyeFeatures.right.height
          ); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
          console.log(
            data.eyeFeatures.left.height
          ); /* elapsed time in milliseconds since webgazer.begin() was called */
        }
        arr.push([
          clock,
          data.x,
          data.y,
          data.eyeFeatures.left.height,
          data.eyeFeatures.left.imagex,
          data.eyeFeatures.left.imagey,
          data.eyeFeatures.right.height,
          data.eyeFeatures.right.imagex,
          data.eyeFeatures.right.imagey,
        ]);
      }
    })
    .saveDataAcrossSessions(true)
    .begin();
  webgazer
    .showVideoPreview(true) /* shows all video previews */
    .showPredictionPoints(
      true
    ) /* shows a square every 100 milliseconds where current prediction is */
    .applyKalmanFilter(
      true
    ); /* Kalman Filter defaults to on. Can be toggled by user. */

  //Set up the webgazer video feedback.
  const setup = function (): void {
    //Set up the main canvas. The main canvas is used to calibrate the webgazer.
    const canvas: HTMLCanvasElement = document.getElementById(
      "plotting_canvas"
    )! as HTMLCanvasElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
  };
  setup();
};

// Set to true if you want to save the data even if you reload the page.
// window.saveDataAcrossSessions = true;
initializeCanvas(arr);
export { Restart };
