const express = require("express");
const bodyParser = require('body-parser');

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

app.get('/', (req, res) => {
    const urls = JSON.parse(localStorage.getItem('urls'));
    if (urls) {
        urls.foreach((url) => {
            if (req.url == url) {
                console.log('No!');
            }
        });
    }
})

app.post("/api/detectFace", (req, res) => {
    const imageSrc = req.body.imageSrc;
    console.log(imageSrc); 
    const data = {
        "requests": [
          {
            "image": {
              "content": imageSrc
            },
            "features": [
              {
                "maxResults": 10,
                "type": "FACE_DETECTION"
              }
            ]
          }
        ]
      };
    // dont-leaf-me-411123
});

