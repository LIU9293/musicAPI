const API = require('../src');

API.getSuggestAlbums('all', {})
  .then(res => console.log(res))
  .catch(e => console.log(e));
