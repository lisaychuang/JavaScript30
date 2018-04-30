/*** GET DOM ELEMENTS ***/

    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');

    const progress = player.querySelector('.player__controls .progress');
    const progressBar = player.querySelector('.player__controls .progress__filled');

    const toggleButton = player.querySelector('.player__controls .toggle');
    const ranges = player.querySelectorAll('.player__controls .player__slider');
    const skipButtons = player.querySelectorAll('[data-skip]');

    const fullScreen = player.querySelector('.player__controls .fullscreen');

    // set default progress bar to 0% when video first load
    progressBar.style.flexBasis = '0%';


/*** BUILD VIDEO PLAYER FUNCTIONS ***/

    // Start or pause video when PLAY button is clicked
    function togglePlay(){
        video.paused ? video.play() : video.pause();
    };

    // Update play button symbol
    function updateButton() {
        const icon = this.paused ? '►' : '❚ ❚';
        toggleButton.textContent = icon;
    };

    // Video skip forward
    function skip(){
        let skipTime = this.dataset.skip;
        video.currentTime += parseFloat(skipTime);
    };

    // Update video volume or playback rate
    function handleRangeUpdate(){
        video[this.name] = this.value;
    }

    // function handleProgress() in Wes' video
    // Update progress bar as video plays
    function showProgress(){
        const percentPlayed = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percentPlayed}%`;
    }

    // function scrub() in Wes' video
    // By clicking on progress bar, start video at clicked position
    function setVideoStart(e){
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }   

    // Check if user is clicking down on mouse 
    let mousedown = false; // set a mousedown flag to check if mouse is clicked

    function trackMouseClick() {
        mousedown = !mousedown;
    }

    // STRETCH GOAL: Toggle fullscreen when user click on button
    let fullscreen = false;

    function toggleFullScreen(e){
        if (fullscreen || e.keyCode === 27) {       //if ESCAPE key pressed
            player.style = 'max-width: 750px;';
            document.querySelector('body').style = 'background: #7A419B;';
            fullscreen = false;
        } else {
            player.style = 'max-width: none; width: 100%; height:100%; border: 0; padding: 0; overflow: hidden;';
            document.querySelector('body').style = 'background: #000;';
            fullscreen = true;
        }
    }

/*** HOOK UP EVENT LISTENERS ***/

    // Play or pause video on mouse click
    video.addEventListener('click', togglePlay);
    toggleButton.addEventListener('click', togglePlay);

    // Update toggleButton on video play or pause
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);

    // Add event listener to SKIP buttons
    skipButtons.forEach(btn => btn.addEventListener('click', skip))

    // Add event listener to RANGE buttons
    ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
    ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

    // Add event listener to update video progress bar
    video.addEventListener('timeupdate', showProgress);

    // Add event listener to update video startTime based on user's click on progress bar
    progress.addEventListener('click', setVideoStart);

    // Add event listener to check if user is click the mouse
    progress.addEventListener('mousedown', trackMouseClick);
    progress.addEventListener('mouseup', trackMouseClick);

    // Add event listener, if user mouse clicks and DRAG progress bar, update video start time
    progress.addEventListener('mousemove', (e) => mousedown && setVideoStart(e));

    /*** STRETCH GOAL: MAKE FULL SCREEN BUTTON WORK ***/
    fullScreen.addEventListener('click', toggleFullScreen);
    window.addEventListener('keyup', toggleFullScreen);
