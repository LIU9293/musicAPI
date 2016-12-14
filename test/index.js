const MusicApi = require('../src');

function searchTest () {

  // console.log('--------------   search netease song   --------------');
  //
  // MusicApi.search('song', 'netease', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search xiami song   --------------');
  //
  // MusicApi.search('song', 'xiami', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search qq song   --------------');
  //
  // MusicApi.search('song', 'qq', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search netease album   --------------');
  //
  // MusicApi.search('album', 'netease', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search xiami album   --------------');
  //
  // MusicApi.search('album', 'xiami', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search qq album   --------------');
  //
  // MusicApi.search('album', 'qq', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search netease playlist   --------------');
  //
  // MusicApi.search('playlist', 'netease', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search xiami playlist   --------------');
  //
  // MusicApi.search('playlist', 'xiami', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  //
  // console.log('--------------   search qq playlist   --------------');
  //
  // MusicApi.search('playlist', 'qq', {
  //   key: '陈粒',
  //   limit: 2,
  //   page: 1,
  // })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

}

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
