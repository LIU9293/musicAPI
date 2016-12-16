# Centralized API for 网易云、虾米、QQ音乐

```
npm install music-api --save
```
### Basic usage
```javascript
const musicAPI = require('music-api');

musicAPI.searchSong('netease', {
  key: '陈粒',
  limit: 10,
  page: 1,
})
  .then(res => console.log(res))
  .catch(err => console.log(err))

```

### 功能列表
 - [x]搜索网易云、QQ音乐、虾米曲目
 - [x]搜索网易云、QQ音乐、虾米歌单(精选集)
 - [x]搜索网易云、QQ音乐、虾米专辑
 - [x]获取网易云、QQ音乐、虾米曲目播放地址
 - [x]获取网易云、QQ音乐、虾米歌单详情
 - [x]获取网易云、QQ音乐、虾米专辑详情
 - []获取网易云、QQ音乐、虾米推荐
 - []获取网易云、QQ音乐、虾米歌手详情
 - []浏览器支持

### API
 - **musicAPI.searchSong(vendor, query)**
 - **musicAPI.searchAlbum(vendor, query)**
 - **musicAPI.searchPlaylist(vendor, query)**
 ```javascript
 vendor = ONE OF ['netease', 'xiami', 'qq', 'all'];
 query = {
   key: KEY, /* must provide */
   limit: 10,
   page: 1,
   raw: Bool, true or false /* set true to get raw data from each vendor, default is false */
 })
 ```
 - **musicAPI.getSong(vendor, query)**
 - **musicAPI.getAlbum(vendor, query)**
 - **musicAPI.getPlaylist(vendor, query)**
 ```javascript
 vendor = ONE OF ['netease', 'xiami', 'qq'];
 query = {
   id: id /* songID / albumID / playlistID search from above, must provide */
   raw: Bool, true or false /* set true to get raw data from each vendor, default is false */
 })
 ```
