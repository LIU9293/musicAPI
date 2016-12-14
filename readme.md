### Music Api for 网易云、虾米、QQ音乐

Basic usage
```javascript
const 'MusicApi' = require('Music-Api');

MusicApi.search('song', 'netease', {
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
``` javascript
/*
 * @param type one of ['song', 'album', 'playlist']
 * @param vendor one of ['xiami', 'netease', 'qq']
 * @param query = {
 *          key: 搜索值,
 *          limit: 数据量,
 *          page: 第几页,
 *        }
 */
MusicApi.search(type, vendor, query);

/*
 * @param type 同上
 * @param vendor 同上
 * @param id 对应的曲目ID，专辑ID，歌单ID
 */
MusicApi.get(type, vendor, id);

```
