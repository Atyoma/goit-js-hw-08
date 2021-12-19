import Player from '@vimeo/player';

const options = {
  id: 59777392,
  width: 640,
  loop: true,
};

const play = {
  duration: 61.857,
  percent: 0,
  seconds: 0,
};

const playing = {
  duration: 61.857,
  percent: 0,
  seconds: 0,
};

const timeUpdate = {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
};
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function ({ duration, percent, seconds }) {
  //   // data is an object containing properties specific to that event
};

player.on('play', onPlay);

const LOCALSTORAGE_KEY_VIMEO = 'videoplayer-current-time';

player.on('timeupdate', function (timeUpdate) {
  // data is an object containing properties specific to that event
  localStorage.setItem(LOCALSTORAGE_KEY_VIMEO, 'timeupdate');
  console.log('timeupdate');
});

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
