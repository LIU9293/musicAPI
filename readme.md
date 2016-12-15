### Music Api for 网易云、虾米、QQ音乐

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
 - 搜索网易云、QQ音乐、虾米曲目
 - 搜索网易云、QQ音乐、虾米歌单(精选集)
 - 搜索网易云、QQ音乐、虾米专辑
 - 获取网易云、QQ音乐、虾米曲目播放地址
 - 获取网易云、QQ音乐、虾米歌单详情
 - 获取网易云、QQ音乐、虾米专辑详情

### API
vendor是['xiami', 'qq', 'netease']中的一个.
```
query = {
  key: YOUR_SEARCH_KEY,
  limit: 10,
  page: 1,
}
```
 - .searchSong(vendor, query)
 - .searchAlbum(vendor, query)
 - .searchPlaylist(vendor, query)
 - .getSong(vendor, id)
 - .getAlbum(vendor, id)
 - .getPlaylist(vendor, id)
