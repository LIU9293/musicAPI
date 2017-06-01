const { getSuggestSongs, getSuggestPlaylists, getSuggestAlbums } = require('../src/xiami');

getSuggestPlaylists(10)
  .then(res => console.log(res))
  .catch(err => console.log(err));
