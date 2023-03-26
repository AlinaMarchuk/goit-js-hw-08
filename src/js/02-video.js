import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on('timeupdate', throttle(onPlayerTimeupdate, 1000));

function onPlayerTimeupdate(data) {
  console.log(data);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
