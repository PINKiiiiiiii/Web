const arr = [];
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

// window.onbeforeunload = function (e) {
//   localStorage.clear();
// };

window.onload = async function () {
  localStorage.clear();
  if (localStorage.clear) {
    console.log("yeah");
  } else {
    console.log("ye");
  }
  //start the webgazer tracker

  // var gazeData;
  // webgazer.begin();
  // webgazer.setGazeListener(function (data, clock) {
  //   gazeData = data;
  // });
  // window.onbeforeunload = function () {
  //   localStorage.setItem("gazeData", JSON.stringify(gazeData));
  // };
  // var retrievedData = JSON.parse(localStorage.getItem("gazeData"));
  // console.log("Calibrate", retrievedData);

  await webgazer
    .setRegression("ridge") /* currently must set regression and tracker */
    //.setTracker('clmtrackr')
    .setGazeListener(function (data, clock, passarg) {
      if (data != null) {
        if (passarg == null) {
          // localStorage.setItem("gazeData", JSON.stringify(data));
          // localStorage.setItem("time", JSON.stringify(clock));
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
  var setup = function () {
    //Set up the main canvas. The main canvas is used to calibrate the webgazer.
    var canvas = document.getElementById("plotting_canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
  };
  setup();
};

// Set to true if you want to save the data even if you reload the page.
window.saveDataAcrossSessions = true;

// let csvContent =
//   "data:text/csv;charset=utf-8," + data.map((e) => e.join(",")).join("\n");
// var encodedUri = encodeURI(csvContent);

window.onbeforeunload = function () {
  webgazer.end();
};

//  * Restart the calibration process by clearing the local storage and reseting the calibration point
//  */
function Restart() {
  document.getElementById("Accuracy").innerHTML = "<a>Not yet Calibrated</a>";
  webgazer.clearData();
  ClearCalibration();
  PopUpInstruction();
}
