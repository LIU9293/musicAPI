/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var NeteaseAPI = __webpack_require__(1);
	var XiamiAPI = __webpack_require__(7);
	var QQAPI = __webpack_require__(9);

	var search = function search(type, vendor, query) {
	  var key = query.key,
	      _query$limit = query.limit,
	      limit = _query$limit === undefined ? 10 : _query$limit,
	      _query$page = query.page,
	      page = _query$page === undefined ? 1 : _query$page;

	  if (!key) {
	    return Promise.reject('No Search Key !');
	  };
	  switch (type) {
	    case 'song':
	      switch (vendor) {
	        case 'xiami':
	          return XiamiAPI.searchSong(key, limit, page);
	          break;
	        case 'netease':
	          return NeteaseAPI.searchSong(key, limit, page);
	          break;
	        case 'qq':
	          return QQAPI.searchSong(key, limit, page);
	          break;
	        default:
	          return Promise.reject('No such vendor !');
	          break;
	      }
	      break;
	    case 'album':
	      switch (vendor) {
	        case 'xiami':
	          return XiamiAPI.searchAlbum(key, limit, page);
	          break;
	        case 'netease':
	          return NeteaseAPI.searchAlbum(key, limit, page);
	          break;
	        case 'qq':
	          return QQAPI.searchAlbum(key, limit, page);
	          break;
	        default:
	          return Promise.reject('No such vendor !');
	          break;
	      }
	      break;
	    case 'playlist':
	      switch (vendor) {
	        case 'xiami':
	          return XiamiAPI.searchPlaylist(key, limit, page);
	          break;
	        case 'netease':
	          return NeteaseAPI.searchPlaylist(key, limit, page);
	          break;
	        case 'qq':
	          return QQAPI.searchPlaylist(key, limit, page);
	          break;
	        default:
	          return Promise.reject('No such vendor !');
	          break;
	      }
	      break;
	    default:
	      return Promise.reject('No such search type !');
	      break;
	  }
	};

	var get = function get(type, vendor, id) {
	  switch (type) {
	    case 'song':
	      switch (vendor) {
	        case 'xiami':
	          return XiamiAPI.getSong(id);
	          break;
	        case 'netease':
	          return NeteaseAPI.getSong(id);
	          break;
	        case 'qq':
	          return QQAPI.getSong(id);
	          break;
	        default:
	          return Promise.reject('No such vendor !');
	          break;
	      }
	      break;
	    case 'album':
	      switch (vendor) {
	        case 'xiami':
	          return XiamiAPI.getAlbumDetail(id);
	          break;
	        case 'netease':
	          return NeteaseAPI.getAlbumDetail(id);
	          break;
	        case 'qq':
	          return QQAPI.getAlbumDetail(id);
	          break;
	        default:
	          return Promise.reject('No such vendor !');
	          break;
	      }
	      break;
	    case 'playlist':
	      switch (vendor) {
	        case 'xiami':
	          return XiamiAPI.getPlaylistDetail(id);
	          break;
	        case 'netease':
	          return NeteaseAPI.getPlaylistDetail(id);
	          break;
	        case 'qq':
	          return QQAPI.getPlaylistDetail(id);
	          break;
	        default:
	          return Promise.reject('No such vendor !');
	          break;
	      }
	      break;
	    default:
	      return Promise.reject('No such search type !');
	      break;
	  }
	};

	module.exports = {
	  search: search,
	  get: get
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Crypto = __webpack_require__(2);
	var fetch = __webpack_require__(5);
	var querystring = __webpack_require__(6);
	var NETEASE_API_URL = 'http://music.163.com/weapi';

	var NeteaseRequest = function NeteaseRequest(url, query) {
	  var opts = {
	    method: 'POST',
	    headers: {
	      'Origin': 'http://music.163.com',
	      'Referer': 'http://music.163.com',
	      'Content-Type': 'application/x-www-form-urlencoded'
	    }
	  };
	  opts.body = querystring.stringify(query);
	  return new Promise(function (resolve, reject) {
	    fetch(NETEASE_API_URL + url, opts).then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      return resolve(json);
	    }).catch(function (err) {
	      return reject(err);
	    });
	  });
	};

	/*
	 *  查询
	 *  type - 搜索单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002)
	 */

	var searchSong = function searchSong(key, limit, page) {
	  var obj = {
	    s: key,
	    type: 1,
	    limit: limit,
	    offset: (page - 1) * limit
	  };
	  var encData = Crypto.aesRsaEncrypt(JSON.stringify(obj));
	  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData);
	};

	var searchPlaylist = function searchPlaylist(key, limit, page) {
	  var obj = {
	    s: key,
	    type: 1000,
	    limit: limit,
	    offset: (page - 1) * limit
	  };
	  var encData = Crypto.aesRsaEncrypt(JSON.stringify(obj));
	  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData);
	};

	var searchAlbum = function searchAlbum(key, limit, page) {
	  var obj = {
	    s: key,
	    type: 10,
	    limit: limit,
	    offset: (page - 1) * limit
	  };
	  var encData = Crypto.aesRsaEncrypt(JSON.stringify(obj));
	  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData);
	};

	var getSong = function getSong(id) {
	  id = id.split('.').map(function (i) {
	    return parseInt(i);
	  });
	  var obj = {
	    'ids': id,
	    'br': 999000,
	    'csrf_token': ''
	  };
	  var encData = Crypto.aesRsaEncrypt(JSON.stringify(obj));
	  return NeteaseRequest('/song/enhance/player/url?csrf_token=', encData);
	};

	var getAlbumDetail = function getAlbumDetail(id) {
	  var obj = {
	    'csrf_token': ''
	  };
	  var encData = Crypto.aesRsaEncrypt(JSON.stringify(obj));
	  return NeteaseRequest('/v1/album/' + id + '?csrf_token=', encData);
	};

	var getPlaylistDetail = function getPlaylistDetail(id) {
	  var obj = {
	    id: id,
	    n: 1000,
	    'csrf_token': ''
	  };
	  var encData = Crypto.aesRsaEncrypt(JSON.stringify(obj));
	  return NeteaseRequest('/v3/playlist/detail?csrf_token=', encData);
	};

	module.exports = {
	  searchSong: searchSong,
	  searchPlaylist: searchPlaylist,
	  searchAlbum: searchAlbum,
	  getSong: getSong,
	  getAlbumDetail: getAlbumDetail,
	  getPlaylistDetail: getPlaylistDetail
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var crypto = __webpack_require__(3);
	var bigInt = __webpack_require__(4);

	function addPadding(encText, modulus) {
	    var ml = modulus.length;
	    for (i = 0; ml > 0 && modulus[i] == '0'; i++) {
	        ml--;
	    }var num = ml - encText.length,
	        prefix = '';
	    for (var i = 0; i < num; i++) {
	        prefix += '0';
	    }
	    return prefix + encText;
	}

	function aesEncrypt(text, secKey) {
	    var cipher = crypto.createCipheriv('AES-128-CBC', secKey, '0102030405060708');
	    return cipher.update(text, 'utf-8', 'base64') + cipher.final('base64');
	}

	function rsaEncrypt(text, exponent, modulus) {
	    var rText = '',
	        radix = 16;
	    for (var i = text.length - 1; i >= 0; i--) {
	        rText += text[i];
	    } //reverse text
	    var biText = bigInt(new Buffer(rText).toString('hex'), radix),
	        biEx = bigInt(exponent, radix),
	        biMod = bigInt(modulus, radix),
	        biRet = biText.modPow(biEx, biMod);
	    return addPadding(biRet.toString(radix), modulus);
	}

	function createSecretKey(size) {
	    var keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	    var key = "";
	    for (var i = 0; i < size; i++) {
	        var pos = Math.random() * keys.length;
	        pos = Math.floor(pos);
	        key = key + keys.charAt(pos);
	    }
	    return key;
	}

	var modulus = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7';
	var nonce = '0CoJUm6Qyw8W8jud';
	var pubKey = '010001';
	var Crypto = {
	    MD5: function MD5(text) {
	        return crypto.createHash('md5').update(text).digest('hex');
	    },
	    aesRsaEncrypt: function aesRsaEncrypt(text) {
	        var secKey = createSecretKey(16);
	        return {
	            params: aesEncrypt(aesEncrypt(text, nonce), secKey),
	            encSecKey: rsaEncrypt(secKey, pubKey, modulus)
	        };
	    }
	};

	module.exports = Crypto;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("big-integer");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("node-fetch");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("querystring");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var fetch = __webpack_require__(5);
	var querystring = __webpack_require__(6);
	var parseString = __webpack_require__(8).parseString;
	var baseURL = 'http://api.xiami.com/web?';
	var NEW_API_URL = 'http://acs.m.xiami.com/h5/';
	var Crypto = __webpack_require__(2);

	/*
	 * this api is using by http://h.xiami.com, xiami's mobile site.
	 * php version : https://github.com/metowolf/XiamiMusicAPI/blob/master/XiamiMusicAPI.php
	 */
	var xiamiFetch = function xiamiFetch(query) {
	  return new Promise(function (resolve, reject) {
	    fetch('' + baseURL + querystring.stringify(query), {
	      method: 'POST',
	      headers: {
	        cookie: 'user_from=2;XMPLAYER_addSongsToggler=0;XMPLAYER_isOpen=0;_xiamitoken=cb8bfadfe130abdbf5e2282c30f0b39a;',
	        referer: 'http://h.xiami.com/',
	        user_agent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.75 Safari/537.36'
	      },
	      body: querystring.stringify(query)
	    }).then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      return resolve(json);
	    }).catch(function (err) {
	      return reject(err);
	    });
	  });
	};

	var searchSong = function searchSong(key, limit, page) {
	  return xiamiFetch({
	    v: '2.0',
	    key: key,
	    limit: limit,
	    page: page,
	    r: 'search/songs',
	    app_key: 1
	  });
	};

	var getPlayListByHot = function getPlayListByHot() {
	  return xiamiFetch({
	    v: '2.0',
	    app_key: 1,
	    r: 'collect/recommand'
	  });
	};

	var getSongsByArtist = function getSongsByArtist(artistID, limit, page) {
	  return xiamiFetch({
	    'v': '2.0',
	    'app_key': 1,
	    'id': artistID,
	    'page': page,
	    'limit': limit,
	    'r': 'artist/hot-songs'
	  });
	};

	/*
	 * song detail: GET http://www.xiami.com/song/playlist/id/:id  id example: 20566
	 * convert location to url
	 * origin python code by : https://github.com/wolfhong/xiamiclient/blob/master/xiamiclient/client.py
	 */

	var parseLocation = function parseLocation(location) {
	  var head = parseInt(location.substr(0, 1));
	  var _str = location.substr(1);
	  var rows = head;
	  var cols = parseInt(_str.length / rows) + 1;
	  var output = '';
	  var full_row = void 0;
	  for (var i = 0; i < head; i++) {
	    if ((_str.length - i) / head === parseInt(_str.length / head)) {
	      full_row = i;
	    }
	  }
	  for (var c = 0; c < cols; c++) {
	    for (var r = 0; r < head; r++) {
	      if (c === cols - 1 && r >= full_row) {
	        continue;
	      };
	      var char = void 0;
	      if (r < full_row) {
	        char = _str[r * cols + c];
	      } else {
	        char = _str[cols * full_row + (r - full_row) * (cols - 1) + c];
	      }
	      output += char;
	    }
	  }
	  return decodeURIComponent(output).replace(/\^/g, '0');
	};

	var getSong = function getSong(id) {
	  return new Promise(function (resolve, reject) {
	    fetch('http://www.xiami.com/song/playlist/id/' + id).then(function (res) {
	      return res.text();
	    }).then(function (xml) {
	      parseString(xml, function (err, res) {
	        if (err) {
	          reject(err);
	        } else {
	          var ress = res.playlist.trackList[0].track[0];
	          for (var i in ress) {
	            ress[i] = ress[i][0];
	          }
	          ress.url = parseLocation(ress.location);
	          resolve(ress);
	        }
	      });
	    }).catch(function (err) {
	      return reject(err);
	    });
	  });
	};

	/*
	 *  New API, wildly used by xiami, 2016.12.14
	 *  @param api: 'mtop.alimusic.search.searchservice.searchsongs',
	 *  @param query: {
	 *    key: "林海",
	 *    pagingVO: {
	 *      page: 1
	 *    }
	 *  }
	 */

	var newRequest = function newRequest(api, query) {

	  // set up query data, will use to generate url and get sign
	  var queryData = {
	    header: {
	      appId: 200,
	      appVersion: 1000000,
	      callId: new Date().getTime(),
	      network: 1,
	      platformId: "mac",
	      remoteIp: "192.168.1.101",
	      resolution: "1178*778"
	    },
	    model: query
	  };
	  var queryStr = JSON.stringify({
	    requestStr: JSON.stringify(queryData)
	  });

	  return new Promise(function (resolve, reject) {
	    /*
	     *  get token from xiami
	     *  exmaple: http://acs.m.xiami.com/h5/mtop.alimusic.search.searchservice.searchsongs/1.0/
	     */
	    fetch('' + NEW_API_URL + api + '/1.0/').then(function (res) {

	      // myToken is the final token we need;
	      var token = Array.from(res.headers._headers['set-cookie']);
	      token = token.map(function (i) {
	        return i.split(';')[0].trim();
	      });
	      var myToken = token[0].replace('_m_h5_tk=', '').split('_')[0];

	      /*
	       * use token to get sign
	       */
	      var appKey = "12574478";
	      var t = new Date().getTime();
	      var sign = Crypto.MD5(myToken + '&' + t.toString() + '&' + appKey + '&' + queryStr);

	      /*
	       * generate request data
	       */
	      var params = {
	        appKey: 12574478,
	        t: t,
	        sign: sign,
	        v: 1.0,
	        type: 'originaljson',
	        dataType: 'json',
	        api: api,
	        data: queryStr
	      };
	      var opts = {
	        headers: {
	          Host: 'acs.m.xiami.com',
	          'Content-Type': 'application/x-www-form-urlencoded',
	          Cookie: token[0] + ';' + token[1]
	        }
	      };

	      /*
	       * make request
	       */
	      fetch('' + NEW_API_URL + api + '/1.0/?' + querystring.stringify(params), opts).then(function (res) {
	        return res.json();
	      }).then(function (json) {
	        return resolve(json);
	      }).catch(function (err) {
	        return reject(err);
	      });
	    }).catch(function (err) {
	      return reject(err);
	    });
	  });
	};

	var searchPlaylist = function searchPlaylist(key, limit, page) {
	  return newRequest('mtop.alimusic.search.searchservice.searchcollects', {
	    key: key,
	    pagingVO: {
	      page: page,
	      pageSize: limit
	    }
	  });
	};

	var searchAlbum = function searchAlbum(key, limit, page) {
	  return newRequest('mtop.alimusic.search.searchservice.searchalbums', {
	    key: key,
	    pagingVO: {
	      page: page,
	      pageSize: limit
	    }
	  });
	};

	var getAlbumDetail = function getAlbumDetail(id) {
	  return newRequest('mtop.alimusic.music.albumservice.getalbumdetail', {
	    albumId: id
	  });
	};

	var getPlaylistDetail = function getPlaylistDetail(id) {
	  return newRequest('mtop.alimusic.music.list.collectservice.getcollectdetail', {
	    isFullTags: false,
	    listId: id,
	    pagingVO: {
	      page: 1,
	      pageSize: 1000
	    }
	  });
	};

	module.exports = {
	  searchSong: searchSong,
	  searchPlaylist: searchPlaylist,
	  searchAlbum: searchAlbum,
	  getSong: getSong,
	  getAlbumDetail: getAlbumDetail,
	  getPlaylistDetail: getPlaylistDetail
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("xml2js");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * php api => https://github.com/metowolf/TencentMusicApi/blob/master/TencentMusicAPI.php
	 */
	var request = __webpack_require__(10);
	var querystring = __webpack_require__(6);
	var origin = 'http://y.qq.com/';

	var header = {
	  Origin: origin,
	  Referer: origin
	};

	var getSongNew = function getSongNew(mid, sizekey, sizeID) {
	  return new Promise(function (resolve, reject) {
	    var guid = Math.floor(Math.random() * 1000000000);
	    request('https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=' + guid.toString(), function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        body = body.replace('jsonCallback(', '').trim();
	        body = body.substr(0, body.length - 2);
	        var json = JSON.parse(body);
	        var key = json.key;
	        var perfix = '';
	        if (sizekey === 'size128') {
	          perfix = 'M500';
	        } else if (sizekey === 'size320') {
	          perfix = 'M800';
	        }
	        var uri = 'http://dl.stream.qqmusic.qq.com/' + perfix + mid + '.mp3?vkey=' + key + '&guid=' + guid + '&fromtag=30';
	        resolve(uri);
	      } else {
	        reject(err);
	      }
	    });
	  });
	};

	var getSong = function getSong(mid) {
	  var url = 'http://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?';
	  var query = {
	    'songmid': mid,
	    'format': 'json'
	  };
	  return new Promise(function (resolve, reject) {
	    request('' + url + querystring.stringify(query), function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        var data = JSON.parse(body).data[0].file;
	        if (data.size_320mp3) {
	          resolve(getSongNew(mid, 'size320', data.size_320mp3));
	        } else if (data.size_128mp3) {
	          resolve(getSongNew(mid, 'size128', data.size_128mp3));
	        }
	      } else {
	        reject(err);
	      }
	    });
	  });
	};

	var searchSong = function searchSong(key, limit, page) {
	  var url = 'http://c.y.qq.com/soso/fcgi-bin/search_cp?';
	  var query = {
	    'p': page,
	    'n': limit,
	    'w': key,
	    'aggr': 1,
	    'lossless': 1,
	    'cr': 1
	  };
	  return new Promise(function (resolve, reject) {
	    request('' + url + querystring.stringify(query), function (error, response, body) {
	      if (!error && response.statusCode == 200) {
	        var json = body.replace('callback(', '');
	        json = json.substr(0, json.length - 1);
	        json = JSON.parse(json);
	        resolve(json);
	      } else {
	        reject(error);
	      }
	    });
	  });
	};

	//网页版搜索建议
	var searchSuggestion = function searchSuggestion(key) {
	  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?format=json&key=' + key + '&platform=yqq';
	  return new Promise(function (resolve, reject) {
	    request(url, function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        resolve(JSON.parse(body));
	      } else {
	        reject(error);
	      }
	    });
	  });
	};

	var searchPlaylist = function searchPlaylist(key, limit, page) {
	  var url = 'https://c.y.qq.com/soso/fcgi-bin/client_music_search_songlist?';
	  var query = {
	    remoteplace: 'txt.yqq.center',
	    searchid: Math.floor(Math.random() * 96551345134513451).toString(),
	    page_no: page - 1,
	    num_per_page: limit,
	    query: key,
	    format: 'json',
	    inCharset: 'utf8',
	    outCharset: 'utf-8',
	    platform: 'yqq'
	  };
	  return new Promise(function (resolve, reject) {
	    request({
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      },
	      url: '' + url + querystring.stringify(query)
	    }, function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        resolve(JSON.parse(body).data);
	      } else {
	        reject(err);
	      }
	    });
	  });
	};

	var searchAlbum = function searchAlbum(key, limit, page) {
	  var url = 'https://c.y.qq.com/soso/fcgi-bin/search_cp?';
	  var query = {
	    remoteplace: 'txt.yqq.album',
	    searchid: Math.floor(Math.random() * 96551345134513451).toString(),
	    //如果这里选1只搜索有无损的
	    lossless: 0,
	    p: page,
	    n: limit,
	    w: key,
	    //应该是某种type的意思，不太懂
	    t: 8,
	    format: 'json',
	    inCharset: 'utf8',
	    outCharset: 'utf-8',
	    platform: 'yqq'
	  };
	  return new Promise(function (resolve, reject) {
	    request({
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      },
	      url: '' + url + querystring.stringify(query)
	    }, function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        resolve(JSON.parse(body).data.album);
	      } else {
	        reject(err);
	      }
	    });
	  });
	};

	var getAlbumDetail = function getAlbumDetail(mid) {
	  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?';
	  var query = {
	    albummid: mid,
	    format: 'json',
	    inCharset: 'utf8',
	    outCharset: 'utf-8',
	    platform: 'yqq'
	  };
	  return new Promise(function (resolve, reject) {
	    request({
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      },
	      url: '' + url + querystring.stringify(query)
	    }, function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        resolve(JSON.parse(body).data);
	      } else {
	        reject(err);
	      }
	    });
	  });
	};

	var getPlaylistDetail = function getPlaylistDetail(disstid) {
	  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?';
	  var query = {
	    type: 1,
	    json: 1,
	    utf8: 1,
	    onlysong: 1,
	    disstid: disstid,
	    format: 'json',
	    inCharset: 'utf8',
	    outCharset: 'utf-8',
	    platform: 'yqq'
	  };
	  return new Promise(function (resolve, reject) {
	    request({
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      },
	      url: '' + url + querystring.stringify(query)
	    }, function (err, res, body) {
	      if (!err && res.statusCode == 200) {
	        if (body.substr(0, 12) === 'jsonCallback') {
	          body = body.substr(13);
	          body = body.substr(0, body.length - 1);
	          resolve(JSON.parse(body));
	        } else {
	          resolve(JSON.parse(body));
	        }
	      } else {
	        reject(err);
	      }
	    });
	  });
	};

	module.exports = {
	  searchSong: searchSong,
	  searchPlaylist: searchPlaylist,
	  searchAlbum: searchAlbum,
	  getSong: getSong,
	  getPlaylistDetail: getPlaylistDetail,
	  getAlbumDetail: getAlbumDetail
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ }
/******/ ]);