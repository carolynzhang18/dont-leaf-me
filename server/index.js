const express = require("express");
const bodyParser = require('body-parser');

const vision = require('@google-cloud/vision');
const fs = require('fs');

const app = express();
const port = 5050;

app.listen(port, () => { console.log("Server running on port 5050"); });

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());

app.post("/api/detectFace", async (req, res) => {
    const imageSrc = await req.body.imageSrc.substring(23);
    const client = new vision.ImageAnnotatorClient();
    const request = {
      image: {
        content: Buffer.from(imageSrc, 'base64'),
      },
    };
    const [results] = await client.faceDetection(request);
    const detectionThreshold = 0.9;
    const faces = results.faceAnnotations.filter(x => x.detectionConfidence >= detectionThreshold);
    res.send({ numFaces: faces.length });
});

