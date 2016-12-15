const MusicApi = require('../src');

function getTest () {

  MusicApi.get('song', 'netease', '134123')
    .then(res => console.log(res))
    .catch(err => console.log(err))

  MusicApi.get('song', 'xiami', '20567')
    .then(res => console.log(res))
    .catch(err => console.log(err))

  MusicApi.get('song', 'qq', '000M0v9d3bkwVa')
    .then(res => console.log(res))
    .catch(err => console.log(err))

}

getTest()
