import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY_VIMEO = 'videoplayer-current-time';

// document.addEventListener('play', videoStart);

const onGetCurrentTime = function () {
  player.getCurrentTime().then(sec => {
    console.log(sec);

    localStorage.setItem(LOCALSTORAGE_KEY_VIMEO, JSON.stringify(sec));
  });
};

player.on('timeupdate', throttle(onGetCurrentTime, 1000));

const timeToStart = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_VIMEO)) || 0;
console.log(timeToStart);
player.setCurrentTime(timeToStart);

function videoStart(timeToStart) {
  console.log(timeToStart);
}
