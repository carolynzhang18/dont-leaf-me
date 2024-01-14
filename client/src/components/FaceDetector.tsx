import React, { useRef, useCallback } from 'react';
import Webcam from "react-webcam";
import axios from "axios";


const FaceDetector = () => {
    const webcamRef = useRef(null);

    const capture = useCallback(async () => {
        if (webcamRef.current) {
            // @ts-ignore: Object is possibly 'null'.
            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc);
            const data = await axios.post(
                "http://localhost:5050/api/detectFace", 
                { imageSrc: imageSrc },
                {});
            console.log("DATA", data);
        }
    }, [webcamRef]);

    return (
        <>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        </>
    );
}

export default FaceDetector;
