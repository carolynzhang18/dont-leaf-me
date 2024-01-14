import React, { useRef, useState, useCallback } from 'react';
import Webcam from "react-webcam";
import axios from "axios";


const FaceDetector = () => {
    const webcamRef = useRef(null);
    const [numFaces, setNumFaces] = useState(0);

    const capture = useCallback(async () => {
        if (webcamRef.current) {
            // @ts-ignore: Object is possibly 'null'.
            const imageSrc = webcamRef.current.getScreenshot();
            const response = await axios.post(
                "http://localhost:5050/api/detectFace", 
                { imageSrc: imageSrc },
                {});
            setNumFaces(response.data.numFaces);
        }
    }, [webcamRef]);

    return (
        <>
            <p>Num faces: {numFaces}</p>
            <button onClick={capture}>Check faces</button><br/>
            <Webcam
                audio={false}
                muted={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={600}
                style={{position: "absolute", display:"block", right:"100%"}}
            />
        </>
    );
}

export default FaceDetector;
