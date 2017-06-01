const { getSuggestAlbums } = require('../src/qq');

getSuggestAlbums(10)
  .then(res => console.log(res))
  .catch(err => console.log(err));
