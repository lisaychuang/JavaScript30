//webcam video
const video = document.querySelector('.player');
// canvas element
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
// screenshot photo strip
const strip = document.querySelector('.strip');
// audio when video starts
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio: false}) //promise
    .then(localMediaStream =>{
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();
    })
    .catch(error => console.error("You denied the webcam! Please accept", error));
}

function paintToCanvas(){
    // get video width & height
    const vidWidth = video.videoWidth;
    const vidHeight = video.videoHeight;
    console.log(vidWidth, vidHeight);
    
    // set canvas to same size of video stream
    canvas.width = vidWidth;
    canvas.height= vidHeight;

    // paint video every 16 sec, from top left of screen
    return setInterval(()=> {
        ctx.drawImage(video,0,0, vidWidth,vidHeight)

        // transform image pixels for filter effects
        let pixels = ctx.getImageData(0,0, vidWidth, vidHeight);

        // RED filter
        // pixels = redEffect(pixels);

        // rgbSplit filter
        // pixels = rgbSplit(pixels);

        // ghosting effect
        // ctx.globalAlpha = 0.1;

        // GREEN SCREEN filter
        pixels = greenScreen(pixels);

        // draw image again;
        ctx.putImageData(pixels, 0,0);

    }, 16);
};

function takePhoto(){
    // played sound when video begin playing
    snap.currentTime = 0;
    snap.play();

    // take data from canvas
    const data = canvas.toDataURL('image/jpeg');
    // create a link from canvas data
    const link = document.createElement('a');
    link.href = data;
    // set file name when user download it
    link.setAttribute('download', 'videoSnapShot');
    link.innerHTML = `<img src="${data}" alt="Video snapshot" />`;

    // insert screenshot pic to the strip container
    strip.insertBefore(link, strip.firstChild);
};

function redEffect(pixels){
    for(let i =0; i< pixels.data.length; i+=4){
        let red = pixels.data[i];
        let green = pixels.data[i+1];
        let blue = pixels.data[i+2];

        pixels.data[i] = red + 200;
        pixels.data[i+1] = green  - 50;
        pixels.data[i+2] = blue *0.5;
    };
    return pixels;
};

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  };

  // function to toggle RGB input 
  function greenScreen(pixels) {
    // min and maximum green
    const levels = {};
  
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });
  
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];
  
      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // turn alpha to transparent
        pixels.data[i + 3] = 0;
      }
    };
    return pixels;
  };

// start video stream from user's webcam
getVideo();

// once video is playing, invoke paintToCanvas()
video.addEventListener('canplay', paintToCanvas);