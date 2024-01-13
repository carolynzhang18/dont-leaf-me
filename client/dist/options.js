let button = document.getElementById('requestPermission');

button.onclick = ()=>{
    console.log('ya');
    navigator.getUserMedia = navigator.getUserMedia ||
                    navigator.webkitGetUserMedia ||
                    navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: false, video: { width: 100, height: 75 } },
        (stream) => {
            console.log('success');
        },
        (err) => {
            console.error(`The following error occurred: ${err.name}`);
        }
    );
    } else {
        console.log("getUserMedia not supported");
    }
};
