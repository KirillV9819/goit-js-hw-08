import Player from "@vimeo/player";

import throttle from "lodash.throttle";   

const iframe = document.querySelector('iframe');
    
const player = new Player(iframe);

launchPlayer();

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

function launchPlayer() {
  const currTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

  if (currTime) {
    player.setCurrentTime(currTime);
  }
};


