import React, { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";

const FaceDetector = () => {
  const webcamRef = useRef(null);
  const [numFaces, setNumFaces] = useState(0);

  const checkFace = useCallback(async () => {
    if (webcamRef.current) {
      // @ts-ignore: Object is possibly 'null'.
      const imageSrc = webcamRef.current.getScreenshot();
      const response = await axios.post(
        "http://localhost:5050/api/detectFace",
        { imageSrc: imageSrc },
        {}
      );
      if (response.data.numFaces === 0) {
        window.open("./danger.html");
      }
      setNumFaces(response.data.numFaces);
    }
  }, [webcamRef]);

  const MINUTE_MS = 5000;

  useEffect(() => {
    const interval = setInterval(async () => {
      await checkFace();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [checkFace]);

  // for (let i=0; i < 6; ++i) {
  //     setTimeout(async () => {await checkFace()}, 5000);
  // }

  return (
    <>
      {/* <p>Num faces: {numFaces}</p>
      <button onClick={checkFace}>Check faces</button>
      <br /> */}
      <Webcam
        audio={false}
        muted={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
        style={{ position: "absolute", display: "block", right: "100%" }}
      />
    </>
  );
};

export default FaceDetector;
