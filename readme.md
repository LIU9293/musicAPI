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
 - [x] 搜索网易云、QQ音乐、虾米曲目
 - [x] 搜索网易云、QQ音乐、虾米歌单(精选集)
 - [x] 搜索网易云、QQ音乐、虾米专辑
 - [x] 获取网易云、QQ音乐、虾米曲目播放地址
 - [x] 获取网易云、QQ音乐、虾米歌单详情
 - [x] 获取网易云、QQ音乐、虾米专辑详情
 - [ ] 获取网易云、QQ音乐、虾米推荐
 - [ ] 获取网易云、QQ音乐、虾米歌手详情
 - [ ] 浏览器支持

### API
```javascript
vendor = ONE OF ['netease', 'xiami', 'qq', 'all'];
query = {
  key: KEY, /* must provide */
  limit: 10,
  page: 1,
  raw: Bool, true or false /* set true to get raw data from each vendor, default is false */
})
```
 - **musicAPI.searchSong(vendor, query)**
   查找歌曲
 - **musicAPI.searchAlbum(vendor, query)**
   查找专辑
 - **musicAPI.searchPlaylist(vendor, query)**
   查找歌单（虾米精选集、QQ歌单）

 ```javascript
 vendor = ONE OF ['netease', 'xiami', 'qq'];
 query = {
   id: id /* songID / albumID / playlistID search from above, must provide */
   raw: Bool, true or false /* set true to get raw data from each vendor, default is false */
 })
 ```
 - **musicAPI.getSong(vendor, query)**
   获得歌曲播放URL
 - **musicAPI.getAlbum(vendor, query)**
   获得专辑详情
 - **musicAPI.getPlaylist(vendor, query)**
   获得歌单详情
