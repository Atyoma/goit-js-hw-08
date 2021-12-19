import Player from '@vimeo/player';

// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });`

// player.on('play', function () {
//   console.log('played the video!');
// });
const options = {
  id: 59777392,
  width: 640,
  loop: true,
};

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('e', function (data) {
  // data is an object containing properties specific to that event
});

player.on('play', onPlay);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});