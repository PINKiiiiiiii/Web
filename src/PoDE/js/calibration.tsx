import $ from "jquery";
import swal from "sweetalert";

interface IDictStr<T> {
  [key: string]: T;
}

let PointCalibrate: number = 0;
let CalibrationPoints: IDictStr<number> = {};
const webgazer: any = require("./webgazer");

function ClearCanvas(): void {
  $(".Calibration").hide();
  const canvas: HTMLCanvasElement = document.getElementById(
    "plotting_canvas"
  )! as HTMLCanvasElement;
  canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
}
function ShowCalibrationPoint(): void {
  $(".Calibration").show();
  $("#Pt5").hide(); // initially hides the middle button
}
function PopUpInstruction(): void {
  ClearCanvas();
  swal({
    title: "Calibration",
    text: "คลิกจุดที่ปรากฏบริเวณหน้าจอทั้ง 9 จุด \n คลิกทั้งหมด 5 ครั้งจนกระทั่งจุดเปลี่ยนเป็นสีเขียวเพื่อเป็นการปรับความแม่นยำของดวงตา",
    buttons: {
      cancel: false,
      confirm: true,
    },
  }).then((isConfirm: boolean): void => {
    ShowCalibrationPoint();
  });
}
function helpModalShow(): void {
  $("#helpModal").modal("show");
}
function ClearCalibration(): void {
  // Clear data from WebGazer

  $(".Calibration").css("background-color", "yellow");
  $(".Calibration").css("opacity", 0.2);
  $(".Calibration").prop("disabled", false);

  CalibrationPoints = {};
  PointCalibrate = 0;
}
function sleep(time: number): Promise<void> {
  return new Promise((resolve: (value: void) => void): void => {
    setTimeout(resolve, time);
  });
}

function initializeCanvas(arr: Array<Array<string>>): void {
  $(function (): void {
    ClearCanvas();
    helpModalShow();

    $(".Calibration").on("click", function (): void {
      const id: string = $(this).attr("id")!;

      if (!CalibrationPoints[id]) {
        // initialises if not done
        CalibrationPoints[id] = 0;
      }
      ++CalibrationPoints[id]; // increments values

      if (CalibrationPoints[id] == 5) {
        //only turn to green after 5 clicks
        $(this).css("background-color", "Green");
        $(this).prop("disabled", true); //disables the button
        ++PointCalibrate;
      } else if (CalibrationPoints[id] < 5) {
        //Gradually increase the opacity of calibration points when click to give some indication to user.
        const opacity = 0.2 * CalibrationPoints[id] + 0.2;
        $(this).css("opacity", opacity);
      }

      //Show the middle calibration point after all other points have been clicked.
      if (PointCalibrate == 8) {
        $("#Pt5").show();
      }

      if (PointCalibrate >= 9) {
        // last point is calibrated
        // using jquery to grab every element in Calibration class and hide them except the middle point.
        $(".Calibration").hide();
        $("#Pt5").show();

        // clears the canvas
        const canvas: HTMLCanvasElement = document.getElementById(
          "plotting_canvas"
        )! as HTMLCanvasElement;
        canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);

        // notification for the measurement process
        swal({
          title: "Calculating measurement",
          text: "โปรดอย่าขยับเมาส์ & จ้องที่จุดสีดขียวตรงกลาง 5 วินาที เพื่อคำนวณหาความแม่นยำในการติดตามการเคลื่อนที่ของตา",
          closeOnEsc: false,
          closeOnClickOutside: false,
        }).then((isConfirm: boolean): void => {
          // makes the variables true for 5 seconds & plots the points
          $(function (): void {
            store_points_variable(); // start storing the prediction points

            sleep(5000).then((): void => {
              webgazer.pause();
              stop_storing_points_variable(); // stop storing the prediction points
              const past50 = webgazer.getStoredPoints(); // retrieve the stored points
              const precision_measurement = calculatePrecision(past50);
              const accuracyLabel = `<a>Accuracy | ${precision_measurement}%</a>`;
              document.getElementById("Accuracy")!.innerHTML = accuracyLabel; // Show the accuracy in the nav bar.
              swal({
                title: `Your accuracy measure is ${precision_measurement}%`,
                closeOnClickOutside: false,
                buttons: {
                  cancel: false,
                  confirm: true,
                },
              }).then((isConfirm: boolean): void => {
                if (isConfirm) {
                  window.location.href = "fixation.html";
                  const csv: string = arr
                    .map((fields: Array<string>): string => {
                      return fields.join(",");
                    })
                    .join("\n");
                  const dl: string = `data:text/csv;charset=utf-8,${csv}`;
                  window.open(encodeURI(dl));
                  //clear the calibration & hide the last middle button
                  ClearCanvas();
                } else {
                  //use restart function to restart the calibration
                  document.getElementById("Accuracy")!.innerHTML =
                    "<a>Not yet Calibrated</a>";
                  webgazer.clearData();
                  ClearCalibration();
                  ClearCanvas();
                  ShowCalibrationPoint();
                }
              });
            });
          });
        });
      }
    });
  });
}

export { PopUpInstruction, initializeCanvas, ClearCalibration };
