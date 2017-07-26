var {searchSong} = require('../src/netease');

searchSong("taylor", 10, 1, false).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
