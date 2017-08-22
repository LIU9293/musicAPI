const { getSuggestSongs, getSuggestPlaylists, searchPlaylist, getSong } = require('../src/xiami');

getSong(10841)
  .then(res => console.log(res))
  .catch(err => console.log(err));
