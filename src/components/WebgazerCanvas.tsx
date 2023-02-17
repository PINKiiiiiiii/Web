import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Typography } from "@mui/material";
import webgazer from "./../Scripts/Webgazer/index";
import nj from "numjs";

import exampleVideoSrc from "./../Videos/Example.mp4";

const DEBUG: boolean = true;
const N_BTNS: number = 9;
const btnCnts: Array<number> = nj
  .arange<number>(1, N_BTNS + 1)
  .tolist<number>();

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
interface IBtnProps {
  id: string;
  color: string;
  opacity: number;
  disabled: boolean;
}
interface ICanvasData {
  height: number;
  patch: ImageData;
  width: number;
}
// baseBtnProps won't be changed throughout the calibration process. (For restarting)
const baseBtnProps: IBtnProps[] = btnCnts.map((i: number): IBtnProps => {
  return {
    id: `pt${i}`,
    color: "#ff0000",
    opacity: 0.2,
    disabled: false,
  };
});
// stBtnProps will be changed throughout the calibration process.
const stBtnProps: IBtnProps[] = btnCnts.map((i: number): IBtnProps => {
  return {
    id: `pt${i}`,
    color: "#ff0000",
    opacity: 0.2,
    disabled: false,
  };
});
const arrHead: string[] = [
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

// const sleep = (time: number): Promise<void> => {
//   return new Promise((resolve: (value: void) => void): void => {
//     setTimeout(resolve, time);
//   });
// };

const WebgazerCanvas: React.FC<{}> = () => {
  // const testCanvasRef = useRef<HTMLCanvasElement>(null);
  // const testCanvasData = useRef<ICanvasData | null>(null);
  // const [testCanvasToggle, setTestCanvasToggle] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const accuracyRef = useRef<HTMLLIElement>(null);

  const clickCnts = useRef<number[]>(Array<number>(N_BTNS).fill(0));
  const btnProps = useRef<IBtnProps[]>(stBtnProps);
  const btnObjs = useRef<JSX.Element[]>([]);
  const btnElems = useRef<HTMLButtonElement[]>(Array<any>(N_BTNS).fill(null));
  const webgazerReady = useRef<boolean>(false);
  const isStarted = useRef<boolean>(false);
  const arr = useRef<string[][]>([arrHead]);

  const [toggleRender, setToggleRender] = useState<boolean>(false);
  const [btnElemsCreated, setBtnElemsCreated] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [clickedBtn, setClickedBtn] = useState<number>(0);

  const updateBtnAt = useCallback((idx: number, toggle: boolean): void => {
    const curP: IBtnProps = btnProps.current[idx];
    const elem: HTMLButtonElement = btnElems.current[idx];
    elem.disabled = curP.disabled;
    elem.style.backgroundColor = curP.color;
    elem.style.opacity = String(curP.opacity);
    if (toggle) {
      setToggleRender((x: boolean): boolean => !x);
    }
  }, []);
  const handleCalibBtn = useCallback(
    (idx: number): void => {
      const cnts: number[] = clickCnts.current;
      const btnP: IBtnProps[] = btnProps.current;
      ++cnts[idx];
      if (cnts[idx] < 5) {
        btnP[idx].opacity += 0.2;
      } else if (cnts[idx] === 5) {
        btnP[idx].color = "#00ff00";
        btnP[idx].disabled = true;
        setClickedBtn((x: number): number => x + 1);
      }
      updateBtnAt(idx, true);
    },
    [updateBtnAt]
  );
  const hideCalibPoints = useCallback((toggle: boolean): void => {
    const btnE: HTMLButtonElement[] = btnElems.current;
    for (let i: number = 0; i < N_BTNS; ++i) {
      btnE[i]!.style.visibility = "hidden";
    }
    if (toggle) {
      setToggleRender((x: boolean): boolean => !x);
    }
  }, []);
  const showCalibPoints = useCallback((toggle: boolean): void => {
    const btnE: HTMLButtonElement[] = btnElems.current;
    for (let i: number = 0; i < N_BTNS; ++i) {
      btnE[i].style.visibility = "visible";
    }
    btnE[4].style.visibility = "hidden";
    if (toggle) {
      setToggleRender((x: boolean): boolean => !x);
    }
  }, []);
  const showCalibAt = useCallback((idx: number, toggle: boolean): void => {
    const btnE: HTMLButtonElement[] = btnElems.current;
    btnE[idx].style.visibility = "visible";
    if (toggle) {
      setToggleRender((x: boolean): boolean => !x);
    }
  }, []);
  const clearCanvas = useCallback(
    (toggle: boolean): void => {
      hideCalibPoints(false);
      const canvas: HTMLCanvasElement = canvasRef.current!;
      canvas.getContext("2d")!.clearRect(0, 0, canvas.width, canvas.height);
      if (toggle) {
        setToggleRender((x: boolean): boolean => !x);
      }
    },
    [hideCalibPoints]
  );
  const clearCalibData = useCallback(
    (toggle: boolean): void => {
      const cnts: number[] = clickCnts.current;
      const btnP: IBtnProps[] = btnProps.current;
      for (let i: number = 0; i < N_BTNS; ++i) {
        btnP[i] = { ...baseBtnProps[i] };
        cnts[i] = 0;
        updateBtnAt(i, false);
      }
      setClickedBtn(0);
      if (toggle) {
        setToggleRender((x: boolean): boolean => !x);
      }
    },
    [updateBtnAt]
  );
  const handleCloseModal = (): void => {
    showCalibPoints(false);
    isStarted.current = true;
    setShowHelpModal(false);
  };
  const handleRestartBtn = (): void => {
    clearCalibData(false);
    showCalibPoints(true);
  };
  const handleHelpBtn = (): void => {
    clearCalibData(false);
    setShowHelpModal(true);
  };
  const gazeListener = useCallback((data: any, clock: string): void => {
    // console.log(data);
    if (data) {
      // testCanvasData.current = data.eyeFeatures.left;
      // setTestCanvasToggle((x: boolean): boolean => !x);
      if (isStarted.current) {
        arr.current.push([
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
      } else if (!webgazerReady.current) {
        webgazerReady.current = true;
        setToggleRender((x: boolean): boolean => !x);
      }
    }
  }, []);
  // const popUpInstruction = useCallback(async (): Promise<void> => {
  //   clearCanvas(true);
  //   await swal({
  //     title: "Calibration",
  //     text: "คลิกจุดที่ปรากฏบริเวณหน้าจอทั้ง 9 จุด \n คลิกทั้งหมด 5 ครั้งจนกระทั่งจุดเปลี่ยนเป็นสีเขียวเพื่อเป็นการปรับความแม่นยำของดวงตา",
  //     buttons: {
  //       cancel: false,
  //       confirm: false,
  //     },
  //   });
  //   showCalibPoints(true);
  // }, [clearCanvas, showCalibPoints]);
  const setupWebgazer = useCallback(async (): Promise<void> => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    await webgazer.setRegression("ridge");
    webgazer.setGazeListener(gazeListener);
    webgazer.saveDataAcrossSessions(true);
    webgazer.showVideoPreview(true);
    webgazer.showPredictionPoints(true);
    webgazer.applyKalmanFilter(true);
  }, [gazeListener]);

  useEffect((): void => {
    console.log("STARTING");
    webgazerReady.current = false;
    isStarted.current = false;
    const stBtnObjs: JSX.Element[] = baseBtnProps.map(
      (item: IBtnProps, i: number): JSX.Element => {
        return (
          <button
            key={i}
            id={item.id}
            className="calibration"
            ref={(elem: HTMLButtonElement): HTMLButtonElement => {
              btnElems.current[i] = elem;
              setBtnElemsCreated(true);
              return elem;
            }}
            disabled={item.disabled}
            style={{ backgroundColor: item.color, opacity: item.opacity }}
            onClick={(): void => handleCalibBtn(i)}
          />
        );
      }
    );
    btnObjs.current = stBtnObjs;
    setToggleRender((x: boolean): boolean => !x);
  }, [handleCalibBtn]);

  useEffect((): void => {
    if (btnElemsCreated) {
      setupWebgazer();
      clearCanvas(false);
      setShowHelpModal(true);
      webgazer.begin((): void => {
        console.log("Failed to start Webgazer.");
      });
    }
  }, [btnElemsCreated, setupWebgazer, clearCanvas]);
  useEffect((): void => {
    if (clickedBtn === 8) {
      showCalibAt(4, true);
    } else if (clickedBtn === 9) {
      clearCanvas(false);
      showCalibAt(4, true);
      const csv: string = arr.current
        .map((fields: string[]): string => {
          return fields.join(",");
        })
        .join("\n");
      const dl: string = `data:text/csv;charset=utf-8,${csv}`;
      window.open(encodeURI(dl));
    }
  }, [clickedBtn, showCalibAt, clearCanvas]);
  // useEffect((): void => {
  //   if (testCanvasData.current) {
  //     console.log(testCanvasData.current);
  //     console.log("TEST RUNNING");
  //     const canvas: HTMLCanvasElement = testCanvasRef.current!;
  //     const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.putImageData(testCanvasData.current.patch, 100, 100);
  //     setToggleRender((x: boolean): boolean => !x);
  //   }
  // }, [testCanvasToggle]);

  console.log(toggleRender);
  // console.log(arr.current.length);

  return (
    <div className="container-fluid">
      <canvas
        ref={canvasRef}
        width="500"
        height="500"
        style={{ cursor: "crosshair" }}
      />
      <nav
        id="webgazer-navbar"
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#10167b" }}
      >
        <div className="container-fluid">
          <button className="btn btn-light" onClick={handleRestartBtn}>
            <Typography variant="subtitle1">
              เตรียมพร้อมการมองอีกครั้ง
            </Typography>
          </button>
          <ul className="nav navbar-nav">
            <li className="nav-item" ref={accuracyRef}>
              <Typography variant="subtitle1" color="#ffffff">
                Calibration
              </Typography>
            </li>
          </ul>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <button className="btn btn-light" onClick={handleHelpBtn}>
                <Typography variant="subtitle1">แนะนำการใช้งาน</Typography>
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="calibration-div">{btnObjs.current}</div>
      <Modal
        show={showHelpModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={DEBUG}
      >
        <Modal.Header closeButton={false}>
          <Modal.Title>
            <Typography variant="h6">แนะนำการใช้งาน</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video src={exampleVideoSrc} width="465" controls />
          <div className="row mt-2">
            <div className="col-12">
              <Typography>
                กรุณาเปิดกล้อง และเลื่อนหน้าของท่านให้ปรากฏอยู่ในกรอบสีเขียว
              </Typography>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-primary"
            data-dismiss="modal"
            onClick={handleCloseModal}
            disabled={!webgazerReady.current}
          >
            <Typography variant="subtitle1">
              เริ่มติดตามการเคลื่อนที่ของตา
            </Typography>
          </button>
        </Modal.Footer>
      </Modal>
      {/* <Modal show={true}>
        <canvas
          ref={testCanvasRef}
          width="500"
          height="500"
          style={{ visibility: "visible" }}
        />
      </Modal> */}
    </div>
  );
};

export default memo(WebgazerCanvas);