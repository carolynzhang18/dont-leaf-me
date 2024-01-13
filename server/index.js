const express = require("express");

const app = express();
const port = 5050;

app.listen(port, () => { console.log("Server running on port 5050"); });

app.post("/detectFace", (req, res) => {
    
});

