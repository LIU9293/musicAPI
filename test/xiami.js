const { getSuggestSongs, getSuggestPlaylists, searchPlaylist, searchAlbum } = require('../src/xiami');

getSuggestSongs(10)
  .then(res => console.log(res))
  .catch(err => console.log(err));
