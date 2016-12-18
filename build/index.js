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
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var NeteaseAPI = __webpack_require__(2);
	var XiamiAPI = __webpack_require__(147);
	var QQAPI = __webpack_require__(303);

	var searchSong = function searchSong(vendor, query) {
	  if (!query.key) {
	    return Promise.reject({
	      success: false,
	      message: 'No search key provided !'
	    });
	  }
	  var limit = query.limit || 10,
	      page = query.page || 1,
	      key = query.key,
	      raw = query.raw || null;
	  switch (vendor) {
	    case 'xiami':
	      return XiamiAPI.searchSong(key, limit, page, raw);
	    case 'qq':
	      return QQAPI.searchSong(key, limit, page, raw);
	    case 'netease':
	      return NeteaseAPI.searchSong(key, limit, page, raw);
	    case 'all':
	      return new Promise(function (resolve, reject) {
	        Promise.all([XiamiAPI.searchSong(key, limit, page, raw), QQAPI.searchSong(key, limit, page, raw), NeteaseAPI.searchSong(key, limit, page, raw)]).then(function (res) {
	          resolve({
	            xiami: res[0],
	            qq: res[1],
	            netease: res[2]
	          });
	        }).catch(function (err) {
	          return reject(err);
	        });
	      });
	    default:
	      return Promise.reject({
	        success: false,
	        message: 'when search songs, the vendor provided is invalid !'
	      });
	  }
	};

	var searchAlbum = function searchAlbum(vendor, query) {
	  if (!query.key) {
	    return Promise.reject({
	      success: false,
	      message: 'No search key provided !'
	    });
	  }
	  var limit = query.limit || 10,
	      page = query.page || 1,
	      key = query.key,
	      raw = query.raw || null;
	  switch (vendor) {
	    case 'xiami':
	      return XiamiAPI.searchAlbum(key, limit, page, raw);
	    case 'qq':
	      return QQAPI.searchAlbum(key, limit, page, raw);
	    case 'netease':
	      return NeteaseAPI.searchAlbum(key, limit, page, raw);
	    case 'all':
	      return new Promise(function (resolve, reject) {
	        Promise.all([XiamiAPI.searchAlbum(key, limit, page, raw), QQAPI.searchAlbum(key, limit, page, raw), NeteaseAPI.searchAlbum(key, limit, page, raw)]).then(function (res) {
	          resolve({
	            xiami: res[0],
	            qq: res[1],
	            netease: res[2]
	          });
	        }).catch(function (err) {
	          return reject(err);
	        });
	      });
	    default:
	      return Promise.reject({
	        success: false,
	        message: 'when search album, the vendor provided is invalid !'
	      });
	  }
	};

	var searchPlaylist = function searchPlaylist(vendor, query) {
	  if (!query.key) {
	    return Promise.reject({
	      success: false,
	      message: 'No search key provided !'
	    });
	  }
	  var limit = query.limit || 10,
	      page = query.page || 1,
	      key = query.key,
	      raw = query.raw || null;
	  switch (vendor) {
	    case 'xiami':
	      return XiamiAPI.searchPlaylist(key, limit, page, raw);
	    case 'qq':
	      return QQAPI.searchPlaylist(key, limit, page, raw);
	    case 'netease':
	      return NeteaseAPI.searchPlaylist(key, limit, page, raw);
	    case 'all':
	      return new Promise(function (resolve, reject) {
	        Promise.all([XiamiAPI.searchPlaylist(key, limit, page, raw), QQAPI.searchPlaylist(key, limit, page, raw), NeteaseAPI.searchPlaylist(key, limit, page, raw)]).then(function (res) {
	          resolve({
	            xiami: res[0],
	            qq: res[1],
	            netease: res[2]
	          });
	        }).catch(function (err) {
	          return reject(err);
	        });
	      });
	    default:
	      return Promise.reject({
	        success: false,
	        message: 'when search playlist, the vendor provided is invalid !'
	      });
	  }
	};

	var getSong = function getSong(vendor, query) {
	  if (!query.id) {
	    return Promise.reject({
	      success: false,
	      message: 'No song id provided !'
	    });
	  }
	  var raw = query.raw,
	      id = query.id;
	  switch (vendor) {
	    case 'xiami':
	      return XiamiAPI.getSong(id, raw);
	    case 'qq':
	      return QQAPI.getSong(id, raw);
	    case 'netease':
	      return NeteaseAPI.getSong(id, raw);
	    default:
	      return Promise.reject('the vendor is invalid !');
	  }
	};

	var getAlbum = function getAlbum(vendor, query) {
	  if (!query.id) {
	    return Promise.reject({
	      success: false,
	      message: 'No album id provided !'
	    });
	  }
	  var raw = query.raw,
	      id = query.id;
	  switch (vendor) {
	    case 'xiami':
	      return XiamiAPI.getAlbum(id, raw);
	    case 'qq':
	      return QQAPI.getAlbum(id, raw);
	    case 'netease':
	      return NeteaseAPI.getAlbum(id, raw);
	    default:
	      return Promise.reject('the vendor is invalid !');
	  }
	};

	var getPlaylist = function getPlaylist(vendor, query) {
	  if (!query.id) {
	    return Promise.reject({
	      success: false,
	      message: 'No playlist id provided !'
	    });
	  }
	  var raw = query.raw,
	      id = query.id;
	  switch (vendor) {
	    case 'xiami':
	      return XiamiAPI.getPlaylist(id, raw);
	    case 'qq':
	      return QQAPI.getPlaylist(id, raw);
	    case 'netease':
	      return NeteaseAPI.getPlaylist(id, raw);
	    default:
	      return Promise.reject('the vendor is invalid !');
	  }
	};

	var musicAPI = {
	  searchSong: searchSong,
	  searchAlbum: searchAlbum,
	  searchPlaylist: searchPlaylist,
	  getSong: getSong,
	  getAlbum: getAlbum,
	  getPlaylist: getPlaylist
	};

	document.api = musicAPI;

	module.exports = musicAPI;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Enc = __webpack_require__(3);
	var querystring = __webpack_require__(142);
	var NETEASE_API_URL = 'http://music.163.com/weapi';
	__webpack_require__(145);

	var NeteaseRequest = function NeteaseRequest(url, query) {
	  var opts = {
	    mode: 'no-cors',
	    method: 'POST',
	    headers: {
	      'Origin': 'http://music.163.com',
	      'Referer': 'http://music.163.com',
	      'Content-Type': 'application/x-www-form-urlencoded'
	    },
	    credentials: 'include'
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

	var searchSong = function searchSong(key, limit, page, raw) {
	  var obj = {
	    s: key,
	    type: 1,
	    limit: limit,
	    offset: (page - 1) * limit
	  };
	  var encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
	  if (!raw) {
	    return new Promise(function (resolve, reject) {
	      NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData).then(function (res) {
	        var songList = void 0;
	        if (res.result.songCount === 0) {
	          songList = [];
	        } else {
	          songList = res.result.songs.map(function (item) {
	            return {
	              album: {
	                id: item.al.id,
	                name: item.al.name,
	                cover: item.al.picUrl
	              },
	              // [{id: , name: }]
	              artists: item.ar,
	              name: item.name,
	              id: item.id
	            };
	          });
	        }
	        var obj = {
	          success: true,
	          total: res.result.songCount,
	          songList: songList
	        };
	        resolve(obj);
	      }).catch(function (err) {
	        return reject({
	          success: false,
	          message: err
	        });
	      });
	    });
	  }
	  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData);
	};

	var searchPlaylist = function searchPlaylist(key, limit, page, raw) {
	  var obj = {
	    s: key,
	    type: 1000,
	    limit: limit,
	    offset: (page - 1) * limit
	  };
	  var encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
	  if (!raw) {
	    return new Promise(function (resolve, reject) {
	      NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData).then(function (res) {
	        var playlists = res.result.playlists.map(function (item) {
	          return {
	            id: item.id,
	            cover: item.coverImgUrl,
	            name: item.name,
	            author: {
	              name: item.creator.nickname,
	              id: item.creator.userId,
	              // @important: no avatar here
	              avatar: null
	            }
	          };
	        });
	        var obj = {
	          success: true,
	          total: res.result.playlistCount,
	          playlists: playlists
	        };
	        resolve(obj);
	      }).catch(function (err) {
	        return reject({
	          success: false,
	          message: err
	        });
	      });
	    });
	  }
	  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData);
	};

	var searchAlbum = function searchAlbum(key, limit, page, raw) {
	  var obj = {
	    s: key,
	    type: 10,
	    limit: limit,
	    offset: (page - 1) * limit
	  };
	  var encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
	  if (!raw) {
	    return new Promise(function (resolve, reject) {
	      NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData).then(function (res) {
	        var albumList = res.result.albums.map(function (item) {
	          return {
	            id: item.id,
	            cover: item.picUrl,
	            name: item.name,
	            artist: {
	              name: item.artist.name,
	              id: item.artist.id
	            }
	          };
	        });
	        var obj = {
	          success: true,
	          total: res.result.albumCount,
	          albumList: albumList
	        };
	        resolve(obj);
	      }).catch(function (err) {
	        return reject({
	          success: false,
	          message: err
	        });
	      });
	    });
	  }
	  return NeteaseRequest('/cloudsearch/get/web?csrf_token=', encData);
	};

	var getSong = function getSong(id, raw) {
	  id = id.split('.').map(function (i) {
	    return parseInt(i);
	  });
	  var obj = {
	    'ids': id,
	    'br': 999000,
	    'csrf_token': ''
	  };
	  var encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
	  if (raw) {
	    return NeteaseRequest('/song/enhance/player/url?csrf_token=', encData);
	  }
	  return new Promise(function (resolve, reject) {
	    NeteaseRequest('/song/enhance/player/url?csrf_token=', encData).then(function (res) {
	      if (!res.data[0].url) {
	        reject({
	          success: false,
	          message: 'no match id found ! '
	        });
	      }
	      resolve({
	        success: true,
	        url: res.data[0].url
	      });
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	var getAlbum = function getAlbum(id, raw) {
	  var obj = {
	    'csrf_token': ''
	  };
	  var encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
	  if (raw) {
	    return NeteaseRequest('/v1/album/' + id + '?csrf_token=', encData);
	  }
	  return new Promise(function (resolve, reject) {
	    NeteaseRequest('/v1/album/' + id + '?csrf_token=', encData).then(function (res) {
	      var ab = res.songs;
	      var songList = ab.map(function (item) {
	        return {
	          id: item.id,
	          name: item.name,
	          artist: item.ar
	        };
	      });
	      var obj = {
	        success: true,
	        name: res.album.name,
	        id: res.album.id,
	        cover: res.album.picUrl,
	        artist: {
	          name: res.album.artist.name,
	          id: res.album.artist.id
	        },
	        songList: songList
	      };
	      resolve(obj);
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	var getPlaylist = function getPlaylist(id, raw) {
	  var obj = {
	    id: id,
	    n: 1000,
	    'csrf_token': ''
	  };
	  var encData = Enc.aesRsaEncrypt(JSON.stringify(obj));
	  if (raw) {
	    return NeteaseRequest('/v3/playlist/detail?csrf_token=', encData);
	  }
	  return new Promise(function (resolve, reject) {
	    NeteaseRequest('/v3/playlist/detail?csrf_token=', encData).then(function (res) {
	      try {
	        var songList = res.playlist.tracks.map(function (item) {
	          return {
	            id: item.id,
	            name: item.name,
	            artist: item.ar,
	            album: {
	              id: item.al.id,
	              cover: item.al.picUrl,
	              name: item.al.name
	            }
	          };
	        });
	        var _obj = {
	          success: true,
	          name: res.playlist.name,
	          id: id,
	          cover: null,
	          author: {
	            id: res.playlist.creator.userId,
	            name: res.playlist.creator.nickname,
	            avatar: res.playlist.creator.avatarUrl
	          },
	          songList: songList
	        };
	        resolve(_obj);
	      } catch (e) {
	        console.log(e);
	        reject({
	          success: false,
	          message: 'your netease playlist id is not correct or data mapping is not correct, try query with raw=true'
	        });
	      }
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	module.exports = {
	  searchSong: searchSong,
	  searchPlaylist: searchPlaylist,
	  searchAlbum: searchAlbum,
	  getSong: getSong,
	  getAlbum: getAlbum,
	  getPlaylist: getPlaylist
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var crypto = __webpack_require__(8);
	var bigInt = __webpack_require__(141);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict';

	var base64 = __webpack_require__(5);
	var ieee754 = __webpack_require__(6);
	var isArray = __webpack_require__(7);

	exports.Buffer = Buffer;
	exports.SlowBuffer = SlowBuffer;
	exports.INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength();

	function typedArraySupport() {
	  try {
	    var arr = new Uint8Array(1);
	    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
	        return 42;
	      } };
	    return arr.foo() === 42 && // typed array instances can be augmented
	    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
	  } catch (e) {
	    return false;
	  }
	}

	function kMaxLength() {
	  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
	}

	function createBuffer(that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length');
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that;
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer(arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length);
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error('If encoding is specified then the first argument must be a string');
	    }
	    return allocUnsafe(this, arg);
	  }
	  return from(this, arg, encodingOrOffset, length);
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr;
	};

	function from(that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length);
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset);
	  }

	  return fromObject(that, value);
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length);
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    });
	  }
	}

	function assertSize(size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number');
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative');
	  }
	}

	function alloc(that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size);
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
	  }
	  return createBuffer(that, size);
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding);
	};

	function allocUnsafe(that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that;
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size);
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size);
	};

	function fromString(that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding');
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that;
	}

	function fromArrayLike(that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that;
	}

	function fromArrayBuffer(that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds');
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds');
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that;
	}

	function fromObject(that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that;
	    }

	    obj.copy(that, 0, 0, len);
	    return that;
	  }

	  if (obj) {
	    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0);
	      }
	      return fromArrayLike(that, obj);
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
	}

	function checked(length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
	  }
	  return length | 0;
	}

	function SlowBuffer(length) {
	  if (+length != length) {
	    // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length);
	}

	Buffer.isBuffer = function isBuffer(b) {
	  return !!(b != null && b._isBuffer);
	};

	Buffer.compare = function compare(a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers');
	  }

	  if (a === b) return 0;

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	Buffer.isEncoding = function isEncoding(encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true;
	    default:
	      return false;
	  }
	};

	Buffer.concat = function concat(list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers');
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0);
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers');
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer;
	};

	function byteLength(string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length;
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength;
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0;

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len;
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length;
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2;
	      case 'hex':
	        return len >>> 1;
	      case 'base64':
	        return base64ToBytes(string).length;
	      default:
	        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString(encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return '';
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return '';
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return '';
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end);

	      case 'ascii':
	        return asciiSlice(this, start, end);

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end);

	      case 'base64':
	        return base64Slice(this, start, end);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap(b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16() {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits');
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this;
	};

	Buffer.prototype.swap32 = function swap32() {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits');
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this;
	};

	Buffer.prototype.swap64 = function swap64() {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits');
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this;
	};

	Buffer.prototype.toString = function toString() {
	  var length = this.length | 0;
	  if (length === 0) return '';
	  if (arguments.length === 0) return utf8Slice(this, 0, length);
	  return slowToString.apply(this, arguments);
	};

	Buffer.prototype.equals = function equals(b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
	  if (this === b) return true;
	  return Buffer.compare(this, b) === 0;
	};

	Buffer.prototype.inspect = function inspect() {
	  var str = '';
	  var max = exports.INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>';
	};

	Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer');
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index');
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0;
	  }
	  if (thisStart >= thisEnd) {
	    return -1;
	  }
	  if (start >= end) {
	    return 1;
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0;

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break;
	    }
	  }

	  if (x < y) return -1;
	  if (y < x) return 1;
	  return 0;
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1;

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset; // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : buffer.length - 1;
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1;else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;else return -1;
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1;
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
	      }
	    }
	    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
	  }

	  throw new TypeError('val must be string, number or Buffer');
	}

	function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1;
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read(buf, i) {
	    if (indexSize === 1) {
	      return buf[i];
	    } else {
	      return buf.readUInt16BE(i * indexSize);
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break;
	        }
	      }
	      if (found) return i;
	    }
	  }

	  return -1;
	}

	Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1;
	};

	Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
	};

	function hexWrite(buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i;
	    buf[offset + i] = parsed;
	  }
	  return i;
	}

	function utf8Write(buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
	}

	function asciiWrite(buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length);
	}

	function latin1Write(buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length);
	}

	function base64Write(buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length);
	}

	function ucs2Write(buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
	}

	Buffer.prototype.write = function write(string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	    // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	    // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds');
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length);

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length);

	      case 'ascii':
	        return asciiWrite(this, string, offset, length);

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length);

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length);

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length);

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON() {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  };
	};

	function base64Slice(buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf);
	  } else {
	    return base64.fromByteArray(buf.slice(start, end));
	  }
	}

	function utf8Slice(buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break;
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break;
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res);
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray(codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
	  }
	  return res;
	}

	function asciiSlice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret;
	}

	function latin1Slice(buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret;
	}

	function hexSlice(buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out;
	}

	function utf16leSlice(buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res;
	}

	Buffer.prototype.slice = function slice(start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf;
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset(offset, ext, length) {
	  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
	}

	Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val;
	};

	Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset];
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | this[offset + 1] << 8;
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] << 8 | this[offset + 1];
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
	};

	Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val;
	};

	Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return this[offset];
	  return (0xff - this[offset] + 1) * -1;
	};

	Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | this[offset + 1] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | this[offset] << 8;
	  return val & 0x8000 ? val | 0xFFFF0000 : val;
	};

	Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
	};

	Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
	};

	Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, true, 23, 4);
	};

	Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return ieee754.read(this, offset, false, 23, 4);
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, true, 52, 8);
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return ieee754.read(this, offset, false, 52, 8);
	};

	function checkInt(buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = value / mul & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	function objectWriteUInt16(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	function objectWriteUInt32(buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = value >>> 24;
	    this[offset + 2] = value >>> 16;
	    this[offset + 1] = value >>> 8;
	    this[offset] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength;
	};

	Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = value & 0xff;
	  return offset + 1;
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 8;
	    this[offset + 1] = value & 0xff;
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2;
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value & 0xff;
	    this[offset + 1] = value >>> 8;
	    this[offset + 2] = value >>> 16;
	    this[offset + 3] = value >>> 24;
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4;
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = value >>> 24;
	    this[offset + 1] = value >>> 16;
	    this[offset + 2] = value >>> 8;
	    this[offset + 3] = value & 0xff;
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4;
	};

	function checkIEEE754(buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range');
	  if (offset < 0) throw new RangeError('Index out of range');
	}

	function writeFloat(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4;
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert);
	};

	function writeDouble(buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8;
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert);
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert);
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy(target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0;
	  if (target.length === 0 || this.length === 0) return 0;

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds');
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
	  if (end < 0) throw new RangeError('sourceEnd out of bounds');

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
	  }

	  return len;
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill(val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string');
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding);
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index');
	  }

	  if (end <= start) {
	    return this;
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this;
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean(str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return '';
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str;
	}

	function stringtrim(str) {
	  if (str.trim) return str.trim();
	  return str.replace(/^\s+|\s+$/g, '');
	}

	function toHex(n) {
	  if (n < 16) return '0' + n.toString(16);
	  return n.toString(16);
	}

	function utf8ToBytes(string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue;
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue;
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue;
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break;
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break;
	      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break;
	      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break;
	      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
	    } else {
	      throw new Error('Invalid code point');
	    }
	  }

	  return bytes;
	}

	function asciiToBytes(str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray;
	}

	function utf16leToBytes(str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break;

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray;
	}

	function base64ToBytes(str) {
	  return base64.toByteArray(base64clean(str));
	}

	function blitBuffer(src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if (i + offset >= dst.length || i >= src.length) break;
	    dst[i + offset] = src[i];
	  }
	  return i;
	}

	function isnan(val) {
	  return val !== val; // eslint-disable-line no-self-compare
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.byteLength = byteLength;
	exports.toByteArray = toByteArray;
	exports.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function placeHoldersCount(b64) {
	  var len = b64.length;
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4');
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
	}

	function byteLength(b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64);
	}

	function toByteArray(b64) {
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;
	  placeHolders = placeHoldersCount(b64);

	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = tmp >> 16 & 0xFF;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
	    arr[L++] = tmp >> 8 & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr;
	}

	function tripletToBase64(num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
	}

	function encodeChunk(uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('');
	}

	function fromByteArray(uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[tmp << 4 & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    output += lookup[tmp >> 10];
	    output += lookup[tmp >> 4 & 0x3F];
	    output += lookup[tmp << 2 & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('');
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? nBytes - 1 : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	};

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
	  var i = isLE ? 0 : nBytes - 1;
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = e << mLen | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.randomBytes = exports.rng = exports.pseudoRandomBytes = exports.prng = __webpack_require__(9);
	exports.createHash = exports.Hash = __webpack_require__(11);
	exports.createHmac = exports.Hmac = __webpack_require__(46);

	var hashes = ['sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5', 'rmd160'].concat(Object.keys(__webpack_require__(47)));
	exports.getHashes = function () {
	  return hashes;
	};

	var p = __webpack_require__(48);
	exports.pbkdf2 = p.pbkdf2;
	exports.pbkdf2Sync = p.pbkdf2Sync;

	var aes = __webpack_require__(50);['Cipher', 'createCipher', 'Cipheriv', 'createCipheriv', 'Decipher', 'createDecipher', 'Decipheriv', 'createDecipheriv', 'getCiphers', 'listCiphers'].forEach(function (key) {
	  exports[key] = aes[key];
	});

	var dh = __webpack_require__(77);['DiffieHellmanGroup', 'createDiffieHellmanGroup', 'getDiffieHellman', 'createDiffieHellman', 'DiffieHellman'].forEach(function (key) {
	  exports[key] = dh[key];
	});

	var sign = __webpack_require__(86);['createSign', 'Sign', 'createVerify', 'Verify'].forEach(function (key) {
	  exports[key] = sign[key];
	});

	exports.createECDH = __webpack_require__(134);

	var publicEncrypt = __webpack_require__(135);['publicEncrypt', 'privateEncrypt', 'publicDecrypt', 'privateDecrypt'].forEach(function (key) {
	  exports[key] = publicEncrypt[key];
	})

	// the least I can do is make error messages for the rest of the node.js/crypto api.
	;['createCredentials'].forEach(function (name) {
	  exports[name] = function () {
	    throw new Error(['sorry, ' + name + ' is not implemented yet', 'we accept pull requests', 'https://github.com/crypto-browserify/crypto-browserify'].join('\n'));
	  };
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer, process) {'use strict';

	function oldBrowser() {
	  throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
	}

	var crypto = global.crypto || global.msCrypto;

	if (crypto && crypto.getRandomValues) {
	  module.exports = randomBytes;
	} else {
	  module.exports = oldBrowser;
	}

	function randomBytes(size, cb) {
	  // phantomjs needs to throw
	  if (size > 65536) throw new Error('requested too many random bytes');
	  // in case browserify  isn't using the Uint8Array version
	  var rawBytes = new global.Uint8Array(size);

	  // This will not work in older browsers.
	  // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	  if (size > 0) {
	    // getRandomValues fails on IE if size == 0
	    crypto.getRandomValues(rawBytes);
	  }
	  // phantomjs doesn't like a buffer being passed here
	  var bytes = new Buffer(rawBytes.buffer);

	  if (typeof cb === 'function') {
	    return process.nextTick(function () {
	      cb(null, bytes);
	    });
	  }

	  return bytes;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4).Buffer, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var inherits = __webpack_require__(12);
	var md5 = __webpack_require__(13);
	var rmd160 = __webpack_require__(15);
	var sha = __webpack_require__(16);

	var Base = __webpack_require__(24);

	function HashNoConstructor(hash) {
	  Base.call(this, 'digest');

	  this._hash = hash;
	  this.buffers = [];
	}

	inherits(HashNoConstructor, Base);

	HashNoConstructor.prototype._update = function (data) {
	  this.buffers.push(data);
	};

	HashNoConstructor.prototype._final = function () {
	  var buf = Buffer.concat(this.buffers);
	  var r = this._hash(buf);
	  this.buffers = null;

	  return r;
	};

	function Hash(hash) {
	  Base.call(this, 'digest');

	  this._hash = hash;
	}

	inherits(Hash, Base);

	Hash.prototype._update = function (data) {
	  this._hash.update(data);
	};

	Hash.prototype._final = function () {
	  return this._hash.digest();
	};

	module.exports = function createHash(alg) {
	  alg = alg.toLowerCase();
	  if ('md5' === alg) return new HashNoConstructor(md5);
	  if ('rmd160' === alg || 'ripemd160' === alg) return new HashNoConstructor(rmd160);

	  return new Hash(sha(alg));
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function TempCtor() {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(14);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len) {
	  /* append padding */
	  x[len >> 5] |= 0x80 << len % 32;
	  x[(len + 64 >>> 9 << 4) + 14] = len;

	  var a = 1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d = 271733878;

	  for (var i = 0; i < x.length; i += 16) {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
	    d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
	    b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
	    d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
	    c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
	    d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
	    d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

	    a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
	    d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
	    c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
	    b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
	    d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
	    c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
	    d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
	    c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
	    a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
	    d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
	    c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
	    b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
	    d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
	    b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
	    d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
	    c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
	    d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
	    a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
	    d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
	    b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
	    d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
	    c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
	    d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
	    d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
	    a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
	    d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
	    b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);
	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t) {
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}
	function md5_ff(a, b, c, d, x, s, t) {
	  return md5_cmn(b & c | ~b & d, a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t) {
	  return md5_cmn(b & d | c & ~d, a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t) {
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t) {
	  return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return msw << 16 | lsw & 0xFFFF;
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
	  return num << cnt | num >>> 32 - cnt;
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var intSize = 4;
	var zeroBuffer = new Buffer(intSize);zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if (buf.length % intSize !== 0) {
	    var len = buf.length + (intSize - buf.length % intSize);
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}
	exports.hash = hash;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	// constants table
	var zl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];

	var zr = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];

	var sl = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];

	var sr = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

	var hl = [0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr = [0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

	function bytesToWords(bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << 24 - b % 32;
	  }
	  return words;
	}

	function wordsToBytes(words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
	  }
	  return bytes;
	}

	function processBlock(H, M, offset) {
	  // swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];

	    // Swap
	    M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 0x00ff00ff | (M_offset_i << 24 | M_offset_i >>> 8) & 0xff00ff00;
	  }

	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;

	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];

	  // computation
	  var t;
	  for (i = 0; i < 80; i += 1) {
	    t = al + M[offset + zl[i]] | 0;
	    if (i < 16) {
	      t += f1(bl, cl, dl) + hl[0];
	    } else if (i < 32) {
	      t += f2(bl, cl, dl) + hl[1];
	    } else if (i < 48) {
	      t += f3(bl, cl, dl) + hl[2];
	    } else if (i < 64) {
	      t += f4(bl, cl, dl) + hl[3];
	    } else {
	      // if (i<80) {
	      t += f5(bl, cl, dl) + hl[4];
	    }
	    t = t | 0;
	    t = rotl(t, sl[i]);
	    t = t + el | 0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;

	    t = ar + M[offset + zr[i]] | 0;
	    if (i < 16) {
	      t += f5(br, cr, dr) + hr[0];
	    } else if (i < 32) {
	      t += f4(br, cr, dr) + hr[1];
	    } else if (i < 48) {
	      t += f3(br, cr, dr) + hr[2];
	    } else if (i < 64) {
	      t += f2(br, cr, dr) + hr[3];
	    } else {
	      // if (i<80) {
	      t += f1(br, cr, dr) + hr[4];
	    }

	    t = t | 0;
	    t = rotl(t, sr[i]);
	    t = t + er | 0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }

	  // intermediate hash value
	  t = H[1] + cl + dr | 0;
	  H[1] = H[2] + dl + er | 0;
	  H[2] = H[3] + el + ar | 0;
	  H[3] = H[4] + al + br | 0;
	  H[4] = H[0] + bl + cr | 0;
	  H[0] = t;
	}

	function f1(x, y, z) {
	  return x ^ y ^ z;
	}

	function f2(x, y, z) {
	  return x & y | ~x & z;
	}

	function f3(x, y, z) {
	  return (x | ~y) ^ z;
	}

	function f4(x, y, z) {
	  return x & z | y & ~z;
	}

	function f5(x, y, z) {
	  return x ^ (y | ~z);
	}

	function rotl(x, n) {
	  return x << n | x >>> 32 - n;
	}

	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

	  if (typeof message === 'string') {
	    message = new Buffer(message, 'utf8');
	  }

	  var m = bytesToWords(message);

	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;

	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << 24 - nBitsLeft % 32;
	  m[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 0x00ff00ff | (nBitsTotal << 24 | nBitsTotal >>> 8) & 0xff00ff00;

	  for (var i = 0; i < m.length; i += 16) {
	    processBlock(H, m, i);
	  }

	  // swap endian
	  for (i = 0; i < 5; i++) {
	    // shortcut
	    var H_i = H[i];

	    // Swap
	    H[i] = (H_i << 8 | H_i >>> 24) & 0x00ff00ff | (H_i << 24 | H_i >>> 8) & 0xff00ff00;
	  }

	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}

	module.exports = ripemd160;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _exports = module.exports = function SHA(algorithm) {
	  algorithm = algorithm.toLowerCase();

	  var Algorithm = _exports[algorithm];
	  if (!Algorithm) throw new Error(algorithm + ' is not supported (we accept pull requests)');

	  return new Algorithm();
	};

	_exports.sha = __webpack_require__(17);
	_exports.sha1 = __webpack_require__(19);
	_exports.sha224 = __webpack_require__(20);
	_exports.sha256 = __webpack_require__(21);
	_exports.sha384 = __webpack_require__(22);
	_exports.sha512 = __webpack_require__(23);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-0, as defined
	 * in FIPS PUB 180-1
	 * This source code is derived from sha1.js of the same repository.
	 * The difference between SHA-0 and SHA-1 is just a bitwise rotate left
	 * operation was added.
	 */

	var inherits = __webpack_require__(12);
	var Hash = __webpack_require__(18);

	var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

	var W = new Array(80);

	function Sha() {
	  this.init();
	  this._w = W;

	  Hash.call(this, 64, 56);
	}

	inherits(Sha, Hash);

	Sha.prototype.init = function () {
	  this._a = 0x67452301;
	  this._b = 0xefcdab89;
	  this._c = 0x98badcfe;
	  this._d = 0x10325476;
	  this._e = 0xc3d2e1f0;

	  return this;
	};

	function rotl5(num) {
	  return num << 5 | num >>> 27;
	}

	function rotl30(num) {
	  return num << 30 | num >>> 2;
	}

	function ft(s, b, c, d) {
	  if (s === 0) return b & c | ~b & d;
	  if (s === 2) return b & c | b & d | c & d;
	  return b ^ c ^ d;
	}

	Sha.prototype._update = function (M) {
	  var W = this._w;

	  var a = this._a | 0;
	  var b = this._b | 0;
	  var c = this._c | 0;
	  var d = this._d | 0;
	  var e = this._e | 0;

	  for (var i = 0; i < 16; ++i) {
	    W[i] = M.readInt32BE(i * 4);
	  }for (; i < 80; ++i) {
	    W[i] = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	  }for (var j = 0; j < 80; ++j) {
	    var s = ~~(j / 20);
	    var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

	    e = d;
	    d = c;
	    c = rotl30(b);
	    b = a;
	    a = t;
	  }

	  this._a = a + this._a | 0;
	  this._b = b + this._b | 0;
	  this._c = c + this._c | 0;
	  this._d = d + this._d | 0;
	  this._e = e + this._e | 0;
	};

	Sha.prototype._hash = function () {
	  var H = new Buffer(20);

	  H.writeInt32BE(this._a | 0, 0);
	  H.writeInt32BE(this._b | 0, 4);
	  H.writeInt32BE(this._c | 0, 8);
	  H.writeInt32BE(this._d | 0, 12);
	  H.writeInt32BE(this._e | 0, 16);

	  return H;
	};

	module.exports = Sha;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// prototype class for hash functions
	function Hash(blockSize, finalSize) {
	  this._block = new Buffer(blockSize);
	  this._finalSize = finalSize;
	  this._blockSize = blockSize;
	  this._len = 0;
	  this._s = 0;
	}

	Hash.prototype.update = function (data, enc) {
	  if (typeof data === 'string') {
	    enc = enc || 'utf8';
	    data = new Buffer(data, enc);
	  }

	  var l = this._len += data.length;
	  var s = this._s || 0;
	  var f = 0;
	  var buffer = this._block;

	  while (s < l) {
	    var t = Math.min(data.length, f + this._blockSize - s % this._blockSize);
	    var ch = t - f;

	    for (var i = 0; i < ch; i++) {
	      buffer[s % this._blockSize + i] = data[i + f];
	    }

	    s += ch;
	    f += ch;

	    if (s % this._blockSize === 0) {
	      this._update(buffer);
	    }
	  }
	  this._s = s;

	  return this;
	};

	Hash.prototype.digest = function (enc) {
	  // Suppose the length of the message M, in bits, is l
	  var l = this._len * 8;

	  // Append the bit 1 to the end of the message
	  this._block[this._len % this._blockSize] = 0x80;

	  // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	  this._block.fill(0, this._len % this._blockSize + 1);

	  if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	    this._update(this._block);
	    this._block.fill(0);
	  }

	  // to this append the block which is equal to the number l written in binary
	  // TODO: handle case where l is > Math.pow(2, 29)
	  this._block.writeInt32BE(l, this._blockSize - 4);

	  var hash = this._update(this._block) || this._hash();

	  return enc ? hash.toString(enc) : hash;
	};

	Hash.prototype._update = function () {
	  throw new Error('_update must be implemented by subclass');
	};

	module.exports = Hash;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = __webpack_require__(12);
	var Hash = __webpack_require__(18);

	var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc | 0, 0xca62c1d6 | 0];

	var W = new Array(80);

	function Sha1() {
	  this.init();
	  this._w = W;

	  Hash.call(this, 64, 56);
	}

	inherits(Sha1, Hash);

	Sha1.prototype.init = function () {
	  this._a = 0x67452301;
	  this._b = 0xefcdab89;
	  this._c = 0x98badcfe;
	  this._d = 0x10325476;
	  this._e = 0xc3d2e1f0;

	  return this;
	};

	function rotl1(num) {
	  return num << 1 | num >>> 31;
	}

	function rotl5(num) {
	  return num << 5 | num >>> 27;
	}

	function rotl30(num) {
	  return num << 30 | num >>> 2;
	}

	function ft(s, b, c, d) {
	  if (s === 0) return b & c | ~b & d;
	  if (s === 2) return b & c | b & d | c & d;
	  return b ^ c ^ d;
	}

	Sha1.prototype._update = function (M) {
	  var W = this._w;

	  var a = this._a | 0;
	  var b = this._b | 0;
	  var c = this._c | 0;
	  var d = this._d | 0;
	  var e = this._e | 0;

	  for (var i = 0; i < 16; ++i) {
	    W[i] = M.readInt32BE(i * 4);
	  }for (; i < 80; ++i) {
	    W[i] = rotl1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16]);
	  }for (var j = 0; j < 80; ++j) {
	    var s = ~~(j / 20);
	    var t = rotl5(a) + ft(s, b, c, d) + e + W[j] + K[s] | 0;

	    e = d;
	    d = c;
	    c = rotl30(b);
	    b = a;
	    a = t;
	  }

	  this._a = a + this._a | 0;
	  this._b = b + this._b | 0;
	  this._c = c + this._c | 0;
	  this._d = d + this._d | 0;
	  this._e = e + this._e | 0;
	};

	Sha1.prototype._hash = function () {
	  var H = new Buffer(20);

	  H.writeInt32BE(this._a | 0, 0);
	  H.writeInt32BE(this._b | 0, 4);
	  H.writeInt32BE(this._c | 0, 8);
	  H.writeInt32BE(this._d | 0, 12);
	  H.writeInt32BE(this._e | 0, 16);

	  return H;
	};

	module.exports = Sha1;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(12);
	var Sha256 = __webpack_require__(21);
	var Hash = __webpack_require__(18);

	var W = new Array(64);

	function Sha224() {
	  this.init();

	  this._w = W; // new Array(64)

	  Hash.call(this, 64, 56);
	}

	inherits(Sha224, Sha256);

	Sha224.prototype.init = function () {
	  this._a = 0xc1059ed8;
	  this._b = 0x367cd507;
	  this._c = 0x3070dd17;
	  this._d = 0xf70e5939;
	  this._e = 0xffc00b31;
	  this._f = 0x68581511;
	  this._g = 0x64f98fa7;
	  this._h = 0xbefa4fa4;

	  return this;
	};

	Sha224.prototype._hash = function () {
	  var H = new Buffer(28);

	  H.writeInt32BE(this._a, 0);
	  H.writeInt32BE(this._b, 4);
	  H.writeInt32BE(this._c, 8);
	  H.writeInt32BE(this._d, 12);
	  H.writeInt32BE(this._e, 16);
	  H.writeInt32BE(this._f, 20);
	  H.writeInt32BE(this._g, 24);

	  return H;
	};

	module.exports = Sha224;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(12);
	var Hash = __webpack_require__(18);

	var K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];

	var W = new Array(64);

	function Sha256() {
	  this.init();

	  this._w = W; // new Array(64)

	  Hash.call(this, 64, 56);
	}

	inherits(Sha256, Hash);

	Sha256.prototype.init = function () {
	  this._a = 0x6a09e667;
	  this._b = 0xbb67ae85;
	  this._c = 0x3c6ef372;
	  this._d = 0xa54ff53a;
	  this._e = 0x510e527f;
	  this._f = 0x9b05688c;
	  this._g = 0x1f83d9ab;
	  this._h = 0x5be0cd19;

	  return this;
	};

	function ch(x, y, z) {
	  return z ^ x & (y ^ z);
	}

	function maj(x, y, z) {
	  return x & y | z & (x | y);
	}

	function sigma0(x) {
	  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
	}

	function sigma1(x) {
	  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
	}

	function gamma0(x) {
	  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
	}

	function gamma1(x) {
	  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
	}

	Sha256.prototype._update = function (M) {
	  var W = this._w;

	  var a = this._a | 0;
	  var b = this._b | 0;
	  var c = this._c | 0;
	  var d = this._d | 0;
	  var e = this._e | 0;
	  var f = this._f | 0;
	  var g = this._g | 0;
	  var h = this._h | 0;

	  for (var i = 0; i < 16; ++i) {
	    W[i] = M.readInt32BE(i * 4);
	  }for (; i < 64; ++i) {
	    W[i] = gamma1(W[i - 2]) + W[i - 7] + gamma0(W[i - 15]) + W[i - 16] | 0;
	  }for (var j = 0; j < 64; ++j) {
	    var T1 = h + sigma1(e) + ch(e, f, g) + K[j] + W[j] | 0;
	    var T2 = sigma0(a) + maj(a, b, c) | 0;

	    h = g;
	    g = f;
	    f = e;
	    e = d + T1 | 0;
	    d = c;
	    c = b;
	    b = a;
	    a = T1 + T2 | 0;
	  }

	  this._a = a + this._a | 0;
	  this._b = b + this._b | 0;
	  this._c = c + this._c | 0;
	  this._d = d + this._d | 0;
	  this._e = e + this._e | 0;
	  this._f = f + this._f | 0;
	  this._g = g + this._g | 0;
	  this._h = h + this._h | 0;
	};

	Sha256.prototype._hash = function () {
	  var H = new Buffer(32);

	  H.writeInt32BE(this._a, 0);
	  H.writeInt32BE(this._b, 4);
	  H.writeInt32BE(this._c, 8);
	  H.writeInt32BE(this._d, 12);
	  H.writeInt32BE(this._e, 16);
	  H.writeInt32BE(this._f, 20);
	  H.writeInt32BE(this._g, 24);
	  H.writeInt32BE(this._h, 28);

	  return H;
	};

	module.exports = Sha256;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var inherits = __webpack_require__(12);
	var SHA512 = __webpack_require__(23);
	var Hash = __webpack_require__(18);

	var W = new Array(160);

	function Sha384() {
	  this.init();
	  this._w = W;

	  Hash.call(this, 128, 112);
	}

	inherits(Sha384, SHA512);

	Sha384.prototype.init = function () {
	  this._ah = 0xcbbb9d5d;
	  this._bh = 0x629a292a;
	  this._ch = 0x9159015a;
	  this._dh = 0x152fecd8;
	  this._eh = 0x67332667;
	  this._fh = 0x8eb44a87;
	  this._gh = 0xdb0c2e0d;
	  this._hh = 0x47b5481d;

	  this._al = 0xc1059ed8;
	  this._bl = 0x367cd507;
	  this._cl = 0x3070dd17;
	  this._dl = 0xf70e5939;
	  this._el = 0xffc00b31;
	  this._fl = 0x68581511;
	  this._gl = 0x64f98fa7;
	  this._hl = 0xbefa4fa4;

	  return this;
	};

	Sha384.prototype._hash = function () {
	  var H = new Buffer(48);

	  function writeInt64BE(h, l, offset) {
	    H.writeInt32BE(h, offset);
	    H.writeInt32BE(l, offset + 4);
	  }

	  writeInt64BE(this._ah, this._al, 0);
	  writeInt64BE(this._bh, this._bl, 8);
	  writeInt64BE(this._ch, this._cl, 16);
	  writeInt64BE(this._dh, this._dl, 24);
	  writeInt64BE(this._eh, this._el, 32);
	  writeInt64BE(this._fh, this._fl, 40);

	  return H;
	};

	module.exports = Sha384;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var inherits = __webpack_require__(12);
	var Hash = __webpack_require__(18);

	var K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

	var W = new Array(160);

	function Sha512() {
	  this.init();
	  this._w = W;

	  Hash.call(this, 128, 112);
	}

	inherits(Sha512, Hash);

	Sha512.prototype.init = function () {
	  this._ah = 0x6a09e667;
	  this._bh = 0xbb67ae85;
	  this._ch = 0x3c6ef372;
	  this._dh = 0xa54ff53a;
	  this._eh = 0x510e527f;
	  this._fh = 0x9b05688c;
	  this._gh = 0x1f83d9ab;
	  this._hh = 0x5be0cd19;

	  this._al = 0xf3bcc908;
	  this._bl = 0x84caa73b;
	  this._cl = 0xfe94f82b;
	  this._dl = 0x5f1d36f1;
	  this._el = 0xade682d1;
	  this._fl = 0x2b3e6c1f;
	  this._gl = 0xfb41bd6b;
	  this._hl = 0x137e2179;

	  return this;
	};

	function Ch(x, y, z) {
	  return z ^ x & (y ^ z);
	}

	function maj(x, y, z) {
	  return x & y | z & (x | y);
	}

	function sigma0(x, xl) {
	  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
	}

	function sigma1(x, xl) {
	  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
	}

	function Gamma0(x, xl) {
	  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
	}

	function Gamma0l(x, xl) {
	  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
	}

	function Gamma1(x, xl) {
	  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
	}

	function Gamma1l(x, xl) {
	  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
	}

	function getCarry(a, b) {
	  return a >>> 0 < b >>> 0 ? 1 : 0;
	}

	Sha512.prototype._update = function (M) {
	  var W = this._w;

	  var ah = this._ah | 0;
	  var bh = this._bh | 0;
	  var ch = this._ch | 0;
	  var dh = this._dh | 0;
	  var eh = this._eh | 0;
	  var fh = this._fh | 0;
	  var gh = this._gh | 0;
	  var hh = this._hh | 0;

	  var al = this._al | 0;
	  var bl = this._bl | 0;
	  var cl = this._cl | 0;
	  var dl = this._dl | 0;
	  var el = this._el | 0;
	  var fl = this._fl | 0;
	  var gl = this._gl | 0;
	  var hl = this._hl | 0;

	  for (var i = 0; i < 32; i += 2) {
	    W[i] = M.readInt32BE(i * 4);
	    W[i + 1] = M.readInt32BE(i * 4 + 4);
	  }
	  for (; i < 160; i += 2) {
	    var xh = W[i - 15 * 2];
	    var xl = W[i - 15 * 2 + 1];
	    var gamma0 = Gamma0(xh, xl);
	    var gamma0l = Gamma0l(xl, xh);

	    xh = W[i - 2 * 2];
	    xl = W[i - 2 * 2 + 1];
	    var gamma1 = Gamma1(xh, xl);
	    var gamma1l = Gamma1l(xl, xh);

	    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	    var Wi7h = W[i - 7 * 2];
	    var Wi7l = W[i - 7 * 2 + 1];

	    var Wi16h = W[i - 16 * 2];
	    var Wi16l = W[i - 16 * 2 + 1];

	    var Wil = gamma0l + Wi7l | 0;
	    var Wih = gamma0 + Wi7h + getCarry(Wil, gamma0l) | 0;
	    Wil = Wil + gamma1l | 0;
	    Wih = Wih + gamma1 + getCarry(Wil, gamma1l) | 0;
	    Wil = Wil + Wi16l | 0;
	    Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;

	    W[i] = Wih;
	    W[i + 1] = Wil;
	  }

	  for (var j = 0; j < 160; j += 2) {
	    Wih = W[j];
	    Wil = W[j + 1];

	    var majh = maj(ah, bh, ch);
	    var majl = maj(al, bl, cl);

	    var sigma0h = sigma0(ah, al);
	    var sigma0l = sigma0(al, ah);
	    var sigma1h = sigma1(eh, el);
	    var sigma1l = sigma1(el, eh);

	    // t1 = h + sigma1 + ch + K[j] + W[j]
	    var Kih = K[j];
	    var Kil = K[j + 1];

	    var chh = Ch(eh, fh, gh);
	    var chl = Ch(el, fl, gl);

	    var t1l = hl + sigma1l | 0;
	    var t1h = hh + sigma1h + getCarry(t1l, hl) | 0;
	    t1l = t1l + chl | 0;
	    t1h = t1h + chh + getCarry(t1l, chl) | 0;
	    t1l = t1l + Kil | 0;
	    t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
	    t1l = t1l + Wil | 0;
	    t1h = t1h + Wih + getCarry(t1l, Wil) | 0;

	    // t2 = sigma0 + maj
	    var t2l = sigma0l + majl | 0;
	    var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;

	    hh = gh;
	    hl = gl;
	    gh = fh;
	    gl = fl;
	    fh = eh;
	    fl = el;
	    el = dl + t1l | 0;
	    eh = dh + t1h + getCarry(el, dl) | 0;
	    dh = ch;
	    dl = cl;
	    ch = bh;
	    cl = bl;
	    bh = ah;
	    bl = al;
	    al = t1l + t2l | 0;
	    ah = t1h + t2h + getCarry(al, t1l) | 0;
	  }

	  this._al = this._al + al | 0;
	  this._bl = this._bl + bl | 0;
	  this._cl = this._cl + cl | 0;
	  this._dl = this._dl + dl | 0;
	  this._el = this._el + el | 0;
	  this._fl = this._fl + fl | 0;
	  this._gl = this._gl + gl | 0;
	  this._hl = this._hl + hl | 0;

	  this._ah = this._ah + ah + getCarry(this._al, al) | 0;
	  this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
	  this._ch = this._ch + ch + getCarry(this._cl, cl) | 0;
	  this._dh = this._dh + dh + getCarry(this._dl, dl) | 0;
	  this._eh = this._eh + eh + getCarry(this._el, el) | 0;
	  this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
	  this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
	  this._hh = this._hh + hh + getCarry(this._hl, hl) | 0;
	};

	Sha512.prototype._hash = function () {
	  var H = new Buffer(64);

	  function writeInt64BE(h, l, offset) {
	    H.writeInt32BE(h, offset);
	    H.writeInt32BE(l, offset + 4);
	  }

	  writeInt64BE(this._ah, this._al, 0);
	  writeInt64BE(this._bh, this._bl, 8);
	  writeInt64BE(this._ch, this._cl, 16);
	  writeInt64BE(this._dh, this._dl, 24);
	  writeInt64BE(this._eh, this._el, 32);
	  writeInt64BE(this._fh, this._fl, 40);
	  writeInt64BE(this._gh, this._gl, 48);
	  writeInt64BE(this._hh, this._hl, 56);

	  return H;
	};

	module.exports = Sha512;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var Transform = __webpack_require__(25).Transform;
	var inherits = __webpack_require__(12);
	var StringDecoder = __webpack_require__(39).StringDecoder;
	module.exports = CipherBase;
	inherits(CipherBase, Transform);
	function CipherBase(hashMode) {
	  Transform.call(this);
	  this.hashMode = typeof hashMode === 'string';
	  if (this.hashMode) {
	    this[hashMode] = this._finalOrDigest;
	  } else {
	    this.final = this._finalOrDigest;
	  }
	  this._decoder = null;
	  this._encoding = null;
	}
	CipherBase.prototype.update = function (data, inputEnc, outputEnc) {
	  if (typeof data === 'string') {
	    data = new Buffer(data, inputEnc);
	  }
	  var outData = this._update(data);
	  if (this.hashMode) {
	    return this;
	  }
	  if (outputEnc) {
	    outData = this._toString(outData, outputEnc);
	  }
	  return outData;
	};

	CipherBase.prototype.setAutoPadding = function () {};

	CipherBase.prototype.getAuthTag = function () {
	  throw new Error('trying to get auth tag in unsupported state');
	};

	CipherBase.prototype.setAuthTag = function () {
	  throw new Error('trying to set auth tag in unsupported state');
	};

	CipherBase.prototype.setAAD = function () {
	  throw new Error('trying to set aad in unsupported state');
	};

	CipherBase.prototype._transform = function (data, _, next) {
	  var err;
	  try {
	    if (this.hashMode) {
	      this._update(data);
	    } else {
	      this.push(this._update(data));
	    }
	  } catch (e) {
	    err = e;
	  } finally {
	    next(err);
	  }
	};
	CipherBase.prototype._flush = function (done) {
	  var err;
	  try {
	    this.push(this._final());
	  } catch (e) {
	    err = e;
	  } finally {
	    done(err);
	  }
	};
	CipherBase.prototype._finalOrDigest = function (outputEnc) {
	  var outData = this._final() || new Buffer('');
	  if (outputEnc) {
	    outData = this._toString(outData, outputEnc, true);
	  }
	  return outData;
	};

	CipherBase.prototype._toString = function (value, enc, fin) {
	  if (!this._decoder) {
	    this._decoder = new StringDecoder(enc);
	    this._encoding = enc;
	  }
	  if (this._encoding !== enc) {
	    throw new Error('can\'t switch encodings');
	  }
	  var out = this._decoder.write(value);
	  if (fin) {
	    out += this._decoder.end();
	  }
	  return out;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(26).EventEmitter;
	var inherits = __webpack_require__(12);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(27);
	Stream.Writable = __webpack_require__(42);
	Stream.Duplex = __webpack_require__(43);
	Stream.Transform = __webpack_require__(44);
	Stream.PassThrough = __webpack_require__(45);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;

	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function (dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }

	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var Stream = function () {
	  try {
	    return __webpack_require__(25); // hack to fix a circular dependency issue when used with browserify
	  } catch (_) {}
	}();
	exports = module.exports = __webpack_require__(28);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(35);
	exports.Duplex = __webpack_require__(34);
	exports.Transform = __webpack_require__(40);
	exports.PassThrough = __webpack_require__(41);

	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	module.exports = Readable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(29);
	/*</replacement>*/

	/*<replacement>*/
	var isArray = __webpack_require__(7);
	/*</replacement>*/

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	/*<replacement>*/
	var EE = __webpack_require__(26).EventEmitter;

	var EElistenerCount = function EElistenerCount(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(25);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(26).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(4).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(30);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(31);
	util.inherits = __webpack_require__(12);
	/*</replacement>*/

	/*<replacement>*/
	var debugUtil = __webpack_require__(32);
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function debug() {};
	}
	/*</replacement>*/

	var BufferList = __webpack_require__(33);
	var StringDecoder;

	util.inherits(Readable, Stream);

	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}

	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(34);

	  options = options || {};

	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(39).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(34);

	  if (!(this instanceof Readable)) return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  if (options && typeof options.read === 'function') this._read = options.read;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;

	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }

	      if (!addToFront) state.reading = false;

	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

	          if (state.needReadable) emitReadable(stream);
	        }
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}

	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(39).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}

	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;

	  if (n !== 0) state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }

	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;

	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }

	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;

	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }

	  if (ret !== null) this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}

	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}

	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};

	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    cleanedUp = true;

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }

	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }

	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);

	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}

	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;

	    if (!dest) dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this);
	    }return this;
	  }

	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;

	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}

	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }

	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}

	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);

	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};

	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;

	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }

	  return ret;
	}

	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}

	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = bufferShim.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}

	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (!process.version || process.version.indexOf('v0.') === 0 || process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}

	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	    case 0:
	    case 1:
	      return process.nextTick(fn);
	    case 2:
	      return process.nextTick(function afterTickOne() {
	        fn.call(null, arg1);
	      });
	    case 3:
	      return process.nextTick(function afterTickTwo() {
	        fn.call(null, arg1, arg2);
	      });
	    case 4:
	      return process.nextTick(function afterTickThree() {
	        fn.call(null, arg1, arg2, arg3);
	      });
	    default:
	      args = new Array(len - 1);
	      i = 0;
	      while (i < args.length) {
	        args[i++] = arguments[i];
	      }
	      return process.nextTick(function afterTick() {
	        fn.apply(null, args);
	      });
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var buffer = __webpack_require__(4);
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	};
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	};
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	};
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return objectToString(e) === '[object Error]' || e instanceof Error;
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
	  typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 32 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Buffer = __webpack_require__(4).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(30);
	/*</replacement>*/

	module.exports = BufferList;

	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}

	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};

	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};

	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};

	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};

	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};

	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return bufferShim.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = bufferShim.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	'use strict';

	/*<replacement>*/

	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/

	module.exports = Duplex;

	/*<replacement>*/
	var processNextTick = __webpack_require__(29);
	/*</replacement>*/

	/*<replacement>*/
	var util = __webpack_require__(31);
	util.inherits = __webpack_require__(12);
	/*</replacement>*/

	var Readable = __webpack_require__(28);
	var Writable = __webpack_require__(35);

	util.inherits(Duplex, Readable);

	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}

	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false) this.readable = false;

	  if (options && options.writable === false) this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}

	function onEndNT(self) {
	  self.end();
	}

	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.

	'use strict';

	module.exports = Writable;

	/*<replacement>*/
	var processNextTick = __webpack_require__(29);
	/*</replacement>*/

	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/

	/*<replacement>*/
	var Duplex;
	/*</replacement>*/

	Writable.WritableState = WritableState;

	/*<replacement>*/
	var util = __webpack_require__(31);
	util.inherits = __webpack_require__(12);
	/*</replacement>*/

	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(38)
	};
	/*</replacement>*/

	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(25);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(26).EventEmitter;
	  }
	})();
	/*</replacement>*/

	var Buffer = __webpack_require__(4).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(30);
	/*</replacement>*/

	util.inherits(Writable, Stream);

	function nop() {}

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}

	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(34);

	  options = options || {};

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;

	  // count buffered requests
	  this.bufferedRequestCount = 0;

	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}

	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};

	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();

	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function value(object) {
	      if (realHasInstance.call(this, object)) return true;

	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function realHasInstance(object) {
	    return object instanceof this;
	  };
	}

	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(34);

	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.

	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
	    return new Writable(options);
	  }

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;

	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};

	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

	  if (typeof cb !== 'function') cb = nop;

	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function () {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function () {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};

	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);

	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;

	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);

	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}

	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;

	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;

	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }

	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }

	    if (entry === null) state.lastBufferedRequest = null;
	  }

	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;

	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }

	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};

	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}

	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;

	  this.next = null;
	  this.entry = null;

	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(36).setImmediate))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(37);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";

	(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function registerImmediate(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function registerImmediate(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function registerImmediate(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(10)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Module exports.
	 */

	module.exports = deprecate;

	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */

	function deprecate(fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}

	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */

	function config(name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(4).Buffer;

	var isBufferEncoding = Buffer.isEncoding || function (encoding) {
	  switch (encoding && encoding.toLowerCase()) {
	    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
	      return true;
	    default:
	      return false;
	  }
	};

	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function (encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};

	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function (buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = buffer.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function (buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = buffer.length >= 3 ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function (buffer) {
	  var res = '';
	  if (buffer && buffer.length) res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	'use strict';

	module.exports = Transform;

	var Duplex = __webpack_require__(34);

	/*<replacement>*/
	var util = __webpack_require__(31);
	util.inherits = __webpack_require__(12);
	/*</replacement>*/

	util.inherits(Transform, Duplex);

	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (data !== null && data !== undefined) stream.push(data);

	  cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}

	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(this);

	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;

	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }

	  // When the writable side finishes, then flush out anything remaining.
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er, data) {
	      done(stream, er, data);
	    });else done(stream);
	  });
	}

	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};

	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;

	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};

	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);

	  if (data !== null && data !== undefined) stream.push(data);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

	  if (ts.transforming) throw new Error('Calling transform done when still transforming');

	  return stream.push(null);
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	'use strict';

	module.exports = PassThrough;

	var Transform = __webpack_require__(40);

	/*<replacement>*/
	var util = __webpack_require__(31);
	util.inherits = __webpack_require__(12);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(35);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(34);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(40);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(41);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var createHash = __webpack_require__(11);
	var inherits = __webpack_require__(12);

	var Transform = __webpack_require__(25).Transform;

	var ZEROS = new Buffer(128);
	ZEROS.fill(0);

	function Hmac(alg, key) {
	  Transform.call(this);
	  alg = alg.toLowerCase();
	  if (typeof key === 'string') {
	    key = new Buffer(key);
	  }

	  var blocksize = alg === 'sha512' || alg === 'sha384' ? 128 : 64;

	  this._alg = alg;
	  this._key = key;

	  if (key.length > blocksize) {
	    key = createHash(alg).update(key).digest();
	  } else if (key.length < blocksize) {
	    key = Buffer.concat([key, ZEROS], blocksize);
	  }

	  var ipad = this._ipad = new Buffer(blocksize);
	  var opad = this._opad = new Buffer(blocksize);

	  for (var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36;
	    opad[i] = key[i] ^ 0x5C;
	  }

	  this._hash = createHash(alg).update(ipad);
	}

	inherits(Hmac, Transform);

	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc);

	  return this;
	};

	Hmac.prototype._transform = function (data, _, next) {
	  this._hash.update(data);

	  next();
	};

	Hmac.prototype._flush = function (next) {
	  this.push(this.digest());

	  next();
	};

	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest();

	  return createHash(this._alg).update(this._opad).update(h).digest(enc);
	};

	module.exports = function createHmac(alg, key) {
	  return new Hmac(alg, key);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	exports['RSA-SHA224'] = exports.sha224WithRSAEncryption = {
	  sign: 'rsa',
	  hash: 'sha224',
	  id: new Buffer('302d300d06096086480165030402040500041c', 'hex')
	};
	exports['RSA-SHA256'] = exports.sha256WithRSAEncryption = {
	  sign: 'rsa',
	  hash: 'sha256',
	  id: new Buffer('3031300d060960864801650304020105000420', 'hex')
	};
	exports['RSA-SHA384'] = exports.sha384WithRSAEncryption = {
	  sign: 'rsa',
	  hash: 'sha384',
	  id: new Buffer('3041300d060960864801650304020205000430', 'hex')
	};
	exports['RSA-SHA512'] = exports.sha512WithRSAEncryption = {
	  sign: 'rsa',
	  hash: 'sha512',
	  id: new Buffer('3051300d060960864801650304020305000440', 'hex')
	};
	exports['RSA-SHA1'] = {
	  sign: 'rsa',
	  hash: 'sha1',
	  id: new Buffer('3021300906052b0e03021a05000414', 'hex')
	};
	exports['ecdsa-with-SHA1'] = {
	  sign: 'ecdsa',
	  hash: 'sha1',
	  id: new Buffer('', 'hex')
	};

	exports.DSA = exports['DSA-SHA1'] = exports['DSA-SHA'] = {
	  sign: 'dsa',
	  hash: 'sha1',
	  id: new Buffer('', 'hex')
	};
	exports['DSA-SHA224'] = exports['DSA-WITH-SHA224'] = {
	  sign: 'dsa',
	  hash: 'sha224',
	  id: new Buffer('', 'hex')
	};
	exports['DSA-SHA256'] = exports['DSA-WITH-SHA256'] = {
	  sign: 'dsa',
	  hash: 'sha256',
	  id: new Buffer('', 'hex')
	};
	exports['DSA-SHA384'] = exports['DSA-WITH-SHA384'] = {
	  sign: 'dsa',
	  hash: 'sha384',
	  id: new Buffer('', 'hex')
	};
	exports['DSA-SHA512'] = exports['DSA-WITH-SHA512'] = {
	  sign: 'dsa',
	  hash: 'sha512',
	  id: new Buffer('', 'hex')
	};
	exports['DSA-RIPEMD160'] = {
	  sign: 'dsa',
	  hash: 'rmd160',
	  id: new Buffer('', 'hex')
	};
	exports['RSA-RIPEMD160'] = exports.ripemd160WithRSA = {
	  sign: 'rsa',
	  hash: 'rmd160',
	  id: new Buffer('3021300906052b2403020105000414', 'hex')
	};
	exports['RSA-MD5'] = exports.md5WithRSAEncryption = {
	  sign: 'rsa',
	  hash: 'md5',
	  id: new Buffer('3020300c06082a864886f70d020505000410', 'hex')
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, Buffer) {'use strict';

	var createHmac = __webpack_require__(46);
	var checkParameters = __webpack_require__(49);

	exports.pbkdf2 = function (password, salt, iterations, keylen, digest, callback) {
	  if (typeof digest === 'function') {
	    callback = digest;
	    digest = undefined;
	  }

	  checkParameters(iterations, keylen);
	  if (typeof callback !== 'function') throw new Error('No callback provided to pbkdf2');

	  setTimeout(function () {
	    callback(null, exports.pbkdf2Sync(password, salt, iterations, keylen, digest));
	  });
	};

	var defaultEncoding;
	if (process.browser) {
	  defaultEncoding = 'utf-8';
	} else {
	  var pVersionMajor = parseInt(process.version.split('.')[0].slice(1), 10);

	  defaultEncoding = pVersionMajor >= 6 ? 'utf-8' : 'binary';
	}

	exports.pbkdf2Sync = function (password, salt, iterations, keylen, digest) {
	  if (!Buffer.isBuffer(password)) password = new Buffer(password, defaultEncoding);
	  if (!Buffer.isBuffer(salt)) salt = new Buffer(salt, defaultEncoding);

	  checkParameters(iterations, keylen);

	  digest = digest || 'sha1';

	  var hLen;
	  var l = 1;
	  var DK = new Buffer(keylen);
	  var block1 = new Buffer(salt.length + 4);
	  salt.copy(block1, 0, 0, salt.length);

	  var r;
	  var T;

	  for (var i = 1; i <= l; i++) {
	    block1.writeUInt32BE(i, salt.length);
	    var U = createHmac(digest, password).update(block1).digest();

	    if (!hLen) {
	      hLen = U.length;
	      T = new Buffer(hLen);
	      l = Math.ceil(keylen / hLen);
	      r = keylen - (l - 1) * hLen;
	    }

	    U.copy(T, 0, 0, hLen);

	    for (var j = 1; j < iterations; j++) {
	      U = createHmac(digest, password).update(U).digest();
	      for (var k = 0; k < hLen; k++) {
	        T[k] ^= U[k];
	      }
	    }

	    var destPos = (i - 1) * hLen;
	    var len = i === l ? r : hLen;
	    T.copy(DK, destPos, 0, len);
	  }

	  return DK;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(4).Buffer))

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	var MAX_ALLOC = Math.pow(2, 30) - 1; // default in iojs
	module.exports = function (iterations, keylen) {
	  if (typeof iterations !== 'number') {
	    throw new TypeError('Iterations not a number');
	  }

	  if (iterations < 0) {
	    throw new TypeError('Bad iterations');
	  }

	  if (typeof keylen !== 'number') {
	    throw new TypeError('Key length not a number');
	  }

	  if (keylen < 0 || keylen > MAX_ALLOC || keylen !== keylen) {
	    /* eslint no-self-compare: 0 */
	    throw new TypeError('Bad key length');
	  }
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ebtk = __webpack_require__(51);
	var aes = __webpack_require__(52);
	var DES = __webpack_require__(68);
	var desModes = __webpack_require__(76);
	var aesModes = __webpack_require__(55);
	function createCipher(suite, password) {
	  var keyLen, ivLen;
	  suite = suite.toLowerCase();
	  if (aesModes[suite]) {
	    keyLen = aesModes[suite].key;
	    ivLen = aesModes[suite].iv;
	  } else if (desModes[suite]) {
	    keyLen = desModes[suite].key * 8;
	    ivLen = desModes[suite].iv;
	  } else {
	    throw new TypeError('invalid suite type');
	  }
	  var keys = ebtk(password, false, keyLen, ivLen);
	  return createCipheriv(suite, keys.key, keys.iv);
	}
	function createDecipher(suite, password) {
	  var keyLen, ivLen;
	  suite = suite.toLowerCase();
	  if (aesModes[suite]) {
	    keyLen = aesModes[suite].key;
	    ivLen = aesModes[suite].iv;
	  } else if (desModes[suite]) {
	    keyLen = desModes[suite].key * 8;
	    ivLen = desModes[suite].iv;
	  } else {
	    throw new TypeError('invalid suite type');
	  }
	  var keys = ebtk(password, false, keyLen, ivLen);
	  return createDecipheriv(suite, keys.key, keys.iv);
	}

	function createCipheriv(suite, key, iv) {
	  suite = suite.toLowerCase();
	  if (aesModes[suite]) {
	    return aes.createCipheriv(suite, key, iv);
	  } else if (desModes[suite]) {
	    return new DES({
	      key: key,
	      iv: iv,
	      mode: suite
	    });
	  } else {
	    throw new TypeError('invalid suite type');
	  }
	}
	function createDecipheriv(suite, key, iv) {
	  suite = suite.toLowerCase();
	  if (aesModes[suite]) {
	    return aes.createDecipheriv(suite, key, iv);
	  } else if (desModes[suite]) {
	    return new DES({
	      key: key,
	      iv: iv,
	      mode: suite,
	      decrypt: true
	    });
	  } else {
	    throw new TypeError('invalid suite type');
	  }
	}
	exports.createCipher = exports.Cipher = createCipher;
	exports.createCipheriv = exports.Cipheriv = createCipheriv;
	exports.createDecipher = exports.Decipher = createDecipher;
	exports.createDecipheriv = exports.Decipheriv = createDecipheriv;
	function getCiphers() {
	  return Object.keys(desModes).concat(aes.getCiphers());
	}
	exports.listCiphers = exports.getCiphers = getCiphers;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var md5 = __webpack_require__(13);
	module.exports = EVP_BytesToKey;
	function EVP_BytesToKey(password, salt, keyLen, ivLen) {
	  if (!Buffer.isBuffer(password)) {
	    password = new Buffer(password, 'binary');
	  }
	  if (salt && !Buffer.isBuffer(salt)) {
	    salt = new Buffer(salt, 'binary');
	  }
	  keyLen = keyLen / 8;
	  ivLen = ivLen || 0;
	  var ki = 0;
	  var ii = 0;
	  var key = new Buffer(keyLen);
	  var iv = new Buffer(ivLen);
	  var addmd = 0;
	  var md_buf;
	  var i;
	  var bufs = [];
	  while (true) {
	    if (addmd++ > 0) {
	      bufs.push(md_buf);
	    }
	    bufs.push(password);
	    if (salt) {
	      bufs.push(salt);
	    }
	    md_buf = md5(Buffer.concat(bufs));
	    bufs = [];
	    i = 0;
	    if (keyLen > 0) {
	      while (true) {
	        if (keyLen === 0) {
	          break;
	        }
	        if (i === md_buf.length) {
	          break;
	        }
	        key[ki++] = md_buf[i];
	        keyLen--;
	        i++;
	      }
	    }
	    if (ivLen > 0 && i !== md_buf.length) {
	      while (true) {
	        if (ivLen === 0) {
	          break;
	        }
	        if (i === md_buf.length) {
	          break;
	        }
	        iv[ii++] = md_buf[i];
	        ivLen--;
	        i++;
	      }
	    }
	    if (keyLen === 0 && ivLen === 0) {
	      break;
	    }
	  }
	  for (i = 0; i < md_buf.length; i++) {
	    md_buf[i] = 0;
	  }
	  return {
	    key: key,
	    iv: iv
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ciphers = __webpack_require__(53);
	exports.createCipher = exports.Cipher = ciphers.createCipher;
	exports.createCipheriv = exports.Cipheriv = ciphers.createCipheriv;
	var deciphers = __webpack_require__(67);
	exports.createDecipher = exports.Decipher = deciphers.createDecipher;
	exports.createDecipheriv = exports.Decipheriv = deciphers.createDecipheriv;
	var modes = __webpack_require__(55);
	function getCiphers() {
	  return Object.keys(modes);
	}
	exports.listCiphers = exports.getCiphers = getCiphers;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var aes = __webpack_require__(54);
	var Transform = __webpack_require__(24);
	var inherits = __webpack_require__(12);
	var modes = __webpack_require__(55);
	var ebtk = __webpack_require__(51);
	var StreamCipher = __webpack_require__(56);
	var AuthCipher = __webpack_require__(57);
	inherits(Cipher, Transform);
	function Cipher(mode, key, iv) {
	  if (!(this instanceof Cipher)) {
	    return new Cipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	  this._autopadding = true;
	}
	Cipher.prototype._update = function (data) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  var out = [];
	  while (chunk = this._cache.get()) {
	    thing = this._mode.encrypt(this, chunk);
	    out.push(thing);
	  }
	  return Buffer.concat(out);
	};
	Cipher.prototype._final = function () {
	  var chunk = this._cache.flush();
	  if (this._autopadding) {
	    chunk = this._mode.encrypt(this, chunk);
	    this._cipher.scrub();
	    return chunk;
	  } else if (chunk.toString('hex') !== '10101010101010101010101010101010') {
	    this._cipher.scrub();
	    throw new Error('data not multiple of block length');
	  }
	};
	Cipher.prototype.setAutoPadding = function (setTo) {
	  this._autopadding = !!setTo;
	  return this;
	};

	function Splitter() {
	  if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};

	Splitter.prototype.get = function () {
	  if (this.cache.length > 15) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  var len = 16 - this.cache.length;
	  var padBuff = new Buffer(len);

	  var i = -1;
	  while (++i < len) {
	    padBuff.writeUInt8(len, i);
	  }
	  var out = Buffer.concat([this.cache, padBuff]);
	  return out;
	};
	var modelist = {
	  ECB: __webpack_require__(60),
	  CBC: __webpack_require__(61),
	  CFB: __webpack_require__(62),
	  CFB8: __webpack_require__(63),
	  CFB1: __webpack_require__(64),
	  OFB: __webpack_require__(65),
	  CTR: __webpack_require__(66),
	  GCM: __webpack_require__(66)
	};

	function createCipheriv(suite, password, iv) {
	  var config = modes[suite.toLowerCase()];
	  if (!config) {
	    throw new TypeError('invalid suite type');
	  }
	  if (typeof iv === 'string') {
	    iv = new Buffer(iv);
	  }
	  if (typeof password === 'string') {
	    password = new Buffer(password);
	  }
	  if (password.length !== config.key / 8) {
	    throw new TypeError('invalid key length ' + password.length);
	  }
	  if (iv.length !== config.iv) {
	    throw new TypeError('invalid iv length ' + iv.length);
	  }
	  if (config.type === 'stream') {
	    return new StreamCipher(modelist[config.mode], password, iv);
	  } else if (config.type === 'auth') {
	    return new AuthCipher(modelist[config.mode], password, iv);
	  }
	  return new Cipher(modelist[config.mode], password, iv);
	}
	function createCipher(suite, password) {
	  var config = modes[suite.toLowerCase()];
	  if (!config) {
	    throw new TypeError('invalid suite type');
	  }
	  var keys = ebtk(password, false, config.key, config.iv);
	  return createCipheriv(suite, keys.key, keys.iv);
	}

	exports.createCipheriv = createCipheriv;
	exports.createCipher = createCipher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";

	// based on the aes implimentation in triple sec
	// https://github.com/keybase/triplesec

	// which is in turn based on the one from crypto-js
	// https://code.google.com/p/crypto-js/

	var uint_max = Math.pow(2, 32);
	function fixup_uint32(x) {
	  var ret, x_pos;
	  ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
	  return ret;
	}
	function scrub_vec(v) {
	  for (var i = 0; i < v.length; v++) {
	    v[i] = 0;
	  }
	  return false;
	}

	function Global() {
	  this.SBOX = [];
	  this.INV_SBOX = [];
	  this.SUB_MIX = [[], [], [], []];
	  this.INV_SUB_MIX = [[], [], [], []];
	  this.init();
	  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
	}

	Global.prototype.init = function () {
	  var d, i, sx, t, x, x2, x4, x8, xi, _i;
	  d = function () {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 256; i = ++_i) {
	      if (i < 128) {
	        _results.push(i << 1);
	      } else {
	        _results.push(i << 1 ^ 0x11b);
	      }
	    }
	    return _results;
	  }();
	  x = 0;
	  xi = 0;
	  for (i = _i = 0; _i < 256; i = ++_i) {
	    sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
	    sx = sx >>> 8 ^ sx & 0xff ^ 0x63;
	    this.SBOX[x] = sx;
	    this.INV_SBOX[sx] = x;
	    x2 = d[x];
	    x4 = d[x2];
	    x8 = d[x4];
	    t = d[sx] * 0x101 ^ sx * 0x1010100;
	    this.SUB_MIX[0][x] = t << 24 | t >>> 8;
	    this.SUB_MIX[1][x] = t << 16 | t >>> 16;
	    this.SUB_MIX[2][x] = t << 8 | t >>> 24;
	    this.SUB_MIX[3][x] = t;
	    t = x8 * 0x1010101 ^ x4 * 0x10001 ^ x2 * 0x101 ^ x * 0x1010100;
	    this.INV_SUB_MIX[0][sx] = t << 24 | t >>> 8;
	    this.INV_SUB_MIX[1][sx] = t << 16 | t >>> 16;
	    this.INV_SUB_MIX[2][sx] = t << 8 | t >>> 24;
	    this.INV_SUB_MIX[3][sx] = t;
	    if (x === 0) {
	      x = xi = 1;
	    } else {
	      x = x2 ^ d[d[d[x8 ^ x2]]];
	      xi ^= d[d[xi]];
	    }
	  }
	  return true;
	};

	var G = new Global();

	AES.blockSize = 4 * 4;

	AES.prototype.blockSize = AES.blockSize;

	AES.keySize = 256 / 8;

	AES.prototype.keySize = AES.keySize;

	function bufferToArray(buf) {
	  var len = buf.length / 4;
	  var out = new Array(len);
	  var i = -1;
	  while (++i < len) {
	    out[i] = buf.readUInt32BE(i * 4);
	  }
	  return out;
	}
	function AES(key) {
	  this._key = bufferToArray(key);
	  this._doReset();
	}

	AES.prototype._doReset = function () {
	  var invKsRow, keySize, keyWords, ksRow, ksRows, t;
	  keyWords = this._key;
	  keySize = keyWords.length;
	  this._nRounds = keySize + 6;
	  ksRows = (this._nRounds + 1) * 4;
	  this._keySchedule = [];
	  for (ksRow = 0; ksRow < ksRows; ksRow++) {
	    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], ksRow % keySize === 0 ? (t = t << 8 | t >>> 24, t = G.SBOX[t >>> 24] << 24 | G.SBOX[t >>> 16 & 0xff] << 16 | G.SBOX[t >>> 8 & 0xff] << 8 | G.SBOX[t & 0xff], t ^= G.RCON[ksRow / keySize | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = G.SBOX[t >>> 24] << 24 | G.SBOX[t >>> 16 & 0xff] << 16 | G.SBOX[t >>> 8 & 0xff] << 8 | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
	  }
	  this._invKeySchedule = [];
	  for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	    ksRow = ksRows - invKsRow;
	    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
	    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[t >>> 16 & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[t >>> 8 & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
	  }
	  return true;
	};

	AES.prototype.encryptBlock = function (M) {
	  M = bufferToArray(new Buffer(M));
	  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[1], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[3], 12);
	  return buf;
	};

	AES.prototype.decryptBlock = function (M) {
	  M = bufferToArray(new Buffer(M));
	  var temp = [M[3], M[1]];
	  M[1] = temp[0];
	  M[3] = temp[1];
	  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[3], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[1], 12);
	  return buf;
	};

	AES.prototype.scrub = function () {
	  scrub_vec(this._keySchedule);
	  scrub_vec(this._invKeySchedule);
	  scrub_vec(this._key);
	};

	AES.prototype._doCryptBlock = function (M, keySchedule, SUB_MIX, SBOX) {
	  var ksRow, s0, s1, s2, s3, t0, t1, t2, t3;

	  s0 = M[0] ^ keySchedule[0];
	  s1 = M[1] ^ keySchedule[1];
	  s2 = M[2] ^ keySchedule[2];
	  s3 = M[3] ^ keySchedule[3];
	  ksRow = 4;
	  for (var round = 1; round < this._nRounds; round++) {
	    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][s1 >>> 16 & 0xff] ^ SUB_MIX[2][s2 >>> 8 & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
	    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][s2 >>> 16 & 0xff] ^ SUB_MIX[2][s3 >>> 8 & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
	    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][s3 >>> 16 & 0xff] ^ SUB_MIX[2][s0 >>> 8 & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
	    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][s0 >>> 16 & 0xff] ^ SUB_MIX[2][s1 >>> 8 & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
	    s0 = t0;
	    s1 = t1;
	    s2 = t2;
	    s3 = t3;
	  }
	  t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 0xff] << 16 | SBOX[s2 >>> 8 & 0xff] << 8 | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	  t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 0xff] << 16 | SBOX[s3 >>> 8 & 0xff] << 8 | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	  t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 0xff] << 16 | SBOX[s0 >>> 8 & 0xff] << 8 | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	  t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 0xff] << 16 | SBOX[s1 >>> 8 & 0xff] << 8 | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
	  return [fixup_uint32(t0), fixup_uint32(t1), fixup_uint32(t2), fixup_uint32(t3)];
	};

	exports.AES = AES;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	exports['aes-128-ecb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-192-ecb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-256-ecb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-128-cbc'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-192-cbc'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-256-cbc'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes128'] = exports['aes-128-cbc'];
	exports['aes192'] = exports['aes-192-cbc'];
	exports['aes256'] = exports['aes-256-cbc'];
	exports['aes-128-cfb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-192-cfb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-256-cfb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-128-cfb8'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB8',
	  type: 'stream'
	};
	exports['aes-192-cfb8'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB8',
	  type: 'stream'
	};
	exports['aes-256-cfb8'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB8',
	  type: 'stream'
	};
	exports['aes-128-cfb1'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB1',
	  type: 'stream'
	};
	exports['aes-192-cfb1'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB1',
	  type: 'stream'
	};
	exports['aes-256-cfb1'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB1',
	  type: 'stream'
	};
	exports['aes-128-ofb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-192-ofb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-256-ofb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-128-ctr'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-192-ctr'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-256-ctr'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-128-gcm'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 12,
	  mode: 'GCM',
	  type: 'auth'
	};
	exports['aes-192-gcm'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 12,
	  mode: 'GCM',
	  type: 'auth'
	};
	exports['aes-256-gcm'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 12,
	  mode: 'GCM',
	  type: 'auth'
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var aes = __webpack_require__(54);
	var Transform = __webpack_require__(24);
	var inherits = __webpack_require__(12);

	inherits(StreamCipher, Transform);
	module.exports = StreamCipher;
	function StreamCipher(mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  this._cache = new Buffer('');
	  this._secCache = new Buffer('');
	  this._decrypt = decrypt;
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	StreamCipher.prototype._update = function (chunk) {
	  return this._mode.encrypt(this, chunk, this._decrypt);
	};
	StreamCipher.prototype._final = function () {
	  this._cipher.scrub();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var aes = __webpack_require__(54);
	var Transform = __webpack_require__(24);
	var inherits = __webpack_require__(12);
	var GHASH = __webpack_require__(58);
	var xor = __webpack_require__(59);
	inherits(StreamCipher, Transform);
	module.exports = StreamCipher;

	function StreamCipher(mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._finID = Buffer.concat([iv, new Buffer([0, 0, 0, 1])]);
	  iv = Buffer.concat([iv, new Buffer([0, 0, 0, 2])]);
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  this._cache = new Buffer('');
	  this._secCache = new Buffer('');
	  this._decrypt = decrypt;
	  this._alen = 0;
	  this._len = 0;
	  iv.copy(this._prev);
	  this._mode = mode;
	  var h = new Buffer(4);
	  h.fill(0);
	  this._ghash = new GHASH(this._cipher.encryptBlock(h));
	  this._authTag = null;
	  this._called = false;
	}
	StreamCipher.prototype._update = function (chunk) {
	  if (!this._called && this._alen) {
	    var rump = 16 - this._alen % 16;
	    if (rump < 16) {
	      rump = new Buffer(rump);
	      rump.fill(0);
	      this._ghash.update(rump);
	    }
	  }
	  this._called = true;
	  var out = this._mode.encrypt(this, chunk);
	  if (this._decrypt) {
	    this._ghash.update(chunk);
	  } else {
	    this._ghash.update(out);
	  }
	  this._len += chunk.length;
	  return out;
	};
	StreamCipher.prototype._final = function () {
	  if (this._decrypt && !this._authTag) {
	    throw new Error('Unsupported state or unable to authenticate data');
	  }
	  var tag = xor(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
	  if (this._decrypt) {
	    if (xorTest(tag, this._authTag)) {
	      throw new Error('Unsupported state or unable to authenticate data');
	    }
	  } else {
	    this._authTag = tag;
	  }
	  this._cipher.scrub();
	};
	StreamCipher.prototype.getAuthTag = function getAuthTag() {
	  if (!this._decrypt && Buffer.isBuffer(this._authTag)) {
	    return this._authTag;
	  } else {
	    throw new Error('Attempting to get auth tag in unsupported state');
	  }
	};
	StreamCipher.prototype.setAuthTag = function setAuthTag(tag) {
	  if (this._decrypt) {
	    this._authTag = tag;
	  } else {
	    throw new Error('Attempting to set auth tag in unsupported state');
	  }
	};
	StreamCipher.prototype.setAAD = function setAAD(buf) {
	  if (!this._called) {
	    this._ghash.update(buf);
	    this._alen += buf.length;
	  } else {
	    throw new Error('Attempting to set AAD in unsupported state');
	  }
	};
	function xorTest(a, b) {
	  var out = 0;
	  if (a.length !== b.length) {
	    out++;
	  }
	  var len = Math.min(a.length, b.length);
	  var i = -1;
	  while (++i < len) {
	    out += a[i] ^ b[i];
	  }
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var zeros = new Buffer(16);
	zeros.fill(0);
	module.exports = GHASH;
	function GHASH(key) {
	  this.h = key;
	  this.state = new Buffer(16);
	  this.state.fill(0);
	  this.cache = new Buffer('');
	}
	// from http://bitwiseshiftleft.github.io/sjcl/doc/symbols/src/core_gcm.js.html
	// by Juho Vähä-Herttua
	GHASH.prototype.ghash = function (block) {
	  var i = -1;
	  while (++i < block.length) {
	    this.state[i] ^= block[i];
	  }
	  this._multiply();
	};

	GHASH.prototype._multiply = function () {
	  var Vi = toArray(this.h);
	  var Zi = [0, 0, 0, 0];
	  var j, xi, lsb_Vi;
	  var i = -1;
	  while (++i < 128) {
	    xi = (this.state[~~(i / 8)] & 1 << 7 - i % 8) !== 0;
	    if (xi) {
	      // Z_i+1 = Z_i ^ V_i
	      Zi = xor(Zi, Vi);
	    }

	    // Store the value of LSB(V_i)
	    lsb_Vi = (Vi[3] & 1) !== 0;

	    // V_i+1 = V_i >> 1
	    for (j = 3; j > 0; j--) {
	      Vi[j] = Vi[j] >>> 1 | (Vi[j - 1] & 1) << 31;
	    }
	    Vi[0] = Vi[0] >>> 1;

	    // If LSB(V_i) is 1, V_i+1 = (V_i >> 1) ^ R
	    if (lsb_Vi) {
	      Vi[0] = Vi[0] ^ 0xe1 << 24;
	    }
	  }
	  this.state = fromArray(Zi);
	};
	GHASH.prototype.update = function (buf) {
	  this.cache = Buffer.concat([this.cache, buf]);
	  var chunk;
	  while (this.cache.length >= 16) {
	    chunk = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    this.ghash(chunk);
	  }
	};
	GHASH.prototype.final = function (abl, bl) {
	  if (this.cache.length) {
	    this.ghash(Buffer.concat([this.cache, zeros], 16));
	  }
	  this.ghash(fromArray([0, abl, 0, bl]));
	  return this.state;
	};

	function toArray(buf) {
	  return [buf.readUInt32BE(0), buf.readUInt32BE(4), buf.readUInt32BE(8), buf.readUInt32BE(12)];
	}
	function fromArray(out) {
	  out = out.map(fixup_uint32);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[1], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[3], 12);
	  return buf;
	}
	var uint_max = Math.pow(2, 32);
	function fixup_uint32(x) {
	  var ret, x_pos;
	  ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
	  return ret;
	}
	function xor(a, b) {
	  return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]];
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";

	module.exports = function xor(a, b) {
	  var length = Math.min(a.length, b.length);
	  var buffer = new Buffer(length);

	  for (var i = 0; i < length; ++i) {
	    buffer[i] = a[i] ^ b[i];
	  }

	  return buffer;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";

	exports.encrypt = function (self, block) {
	  return self._cipher.encryptBlock(block);
	};
	exports.decrypt = function (self, block) {
	  return self._cipher.decryptBlock(block);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xor = __webpack_require__(59);

	exports.encrypt = function (self, block) {
	  var data = xor(block, self._prev);

	  self._prev = self._cipher.encryptBlock(data);
	  return self._prev;
	};

	exports.decrypt = function (self, block) {
	  var pad = self._prev;

	  self._prev = block;
	  var out = self._cipher.decryptBlock(block);

	  return xor(out, pad);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var xor = __webpack_require__(59);

	exports.encrypt = function (self, data, decrypt) {
	  var out = new Buffer('');
	  var len;

	  while (data.length) {
	    if (self._cache.length === 0) {
	      self._cache = self._cipher.encryptBlock(self._prev);
	      self._prev = new Buffer('');
	    }

	    if (self._cache.length <= data.length) {
	      len = self._cache.length;
	      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)]);
	      data = data.slice(len);
	    } else {
	      out = Buffer.concat([out, encryptStart(self, data, decrypt)]);
	      break;
	    }
	  }

	  return out;
	};
	function encryptStart(self, data, decrypt) {
	  var len = data.length;
	  var out = xor(data, self._cache);
	  self._cache = self._cache.slice(len);
	  self._prev = Buffer.concat([self._prev, decrypt ? data : out]);
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";

	function encryptByte(self, byteParam, decrypt) {
	  var pad = self._cipher.encryptBlock(self._prev);
	  var out = pad[0] ^ byteParam;
	  self._prev = Buffer.concat([self._prev.slice(1), new Buffer([decrypt ? byteParam : out])]);
	  return out;
	}
	exports.encrypt = function (self, chunk, decrypt) {
	  var len = chunk.length;
	  var out = new Buffer(len);
	  var i = -1;
	  while (++i < len) {
	    out[i] = encryptByte(self, chunk[i], decrypt);
	  }
	  return out;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";

	function encryptByte(self, byteParam, decrypt) {
	  var pad;
	  var i = -1;
	  var len = 8;
	  var out = 0;
	  var bit, value;
	  while (++i < len) {
	    pad = self._cipher.encryptBlock(self._prev);
	    bit = byteParam & 1 << 7 - i ? 0x80 : 0;
	    value = pad[0] ^ bit;
	    out += (value & 0x80) >> i % 8;
	    self._prev = shiftIn(self._prev, decrypt ? bit : value);
	  }
	  return out;
	}
	exports.encrypt = function (self, chunk, decrypt) {
	  var len = chunk.length;
	  var out = new Buffer(len);
	  var i = -1;
	  while (++i < len) {
	    out[i] = encryptByte(self, chunk[i], decrypt);
	  }
	  return out;
	};
	function shiftIn(buffer, value) {
	  var len = buffer.length;
	  var i = -1;
	  var out = new Buffer(buffer.length);
	  buffer = Buffer.concat([buffer, new Buffer([value])]);
	  while (++i < len) {
	    out[i] = buffer[i] << 1 | buffer[i + 1] >> 7;
	  }
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var xor = __webpack_require__(59);

	function getBlock(self) {
	  self._prev = self._cipher.encryptBlock(self._prev);
	  return self._prev;
	}

	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }

	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var xor = __webpack_require__(59);

	function incr32(iv) {
	  var len = iv.length;
	  var item;
	  while (len--) {
	    item = iv.readUInt8(len);
	    if (item === 255) {
	      iv.writeUInt8(0, len);
	    } else {
	      item++;
	      iv.writeUInt8(item, len);
	      break;
	    }
	  }
	}

	function getBlock(self) {
	  var out = self._cipher.encryptBlock(self._prev);
	  incr32(self._prev);
	  return out;
	}

	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var aes = __webpack_require__(54);
	var Transform = __webpack_require__(24);
	var inherits = __webpack_require__(12);
	var modes = __webpack_require__(55);
	var StreamCipher = __webpack_require__(56);
	var AuthCipher = __webpack_require__(57);
	var ebtk = __webpack_require__(51);

	inherits(Decipher, Transform);
	function Decipher(mode, key, iv) {
	  if (!(this instanceof Decipher)) {
	    return new Decipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._last = void 0;
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	  this._autopadding = true;
	}
	Decipher.prototype._update = function (data) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  var out = [];
	  while (chunk = this._cache.get(this._autopadding)) {
	    thing = this._mode.decrypt(this, chunk);
	    out.push(thing);
	  }
	  return Buffer.concat(out);
	};
	Decipher.prototype._final = function () {
	  var chunk = this._cache.flush();
	  if (this._autopadding) {
	    return unpad(this._mode.decrypt(this, chunk));
	  } else if (chunk) {
	    throw new Error('data not multiple of block length');
	  }
	};
	Decipher.prototype.setAutoPadding = function (setTo) {
	  this._autopadding = !!setTo;
	  return this;
	};
	function Splitter() {
	  if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};

	Splitter.prototype.get = function (autoPadding) {
	  var out;
	  if (autoPadding) {
	    if (this.cache.length > 16) {
	      out = this.cache.slice(0, 16);
	      this.cache = this.cache.slice(16);
	      return out;
	    }
	  } else {
	    if (this.cache.length >= 16) {
	      out = this.cache.slice(0, 16);
	      this.cache = this.cache.slice(16);
	      return out;
	    }
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  if (this.cache.length) {
	    return this.cache;
	  }
	};
	function unpad(last) {
	  var padded = last[15];
	  var i = -1;
	  while (++i < padded) {
	    if (last[i + (16 - padded)] !== padded) {
	      throw new Error('unable to decrypt data');
	    }
	  }
	  if (padded === 16) {
	    return;
	  }
	  return last.slice(0, 16 - padded);
	}

	var modelist = {
	  ECB: __webpack_require__(60),
	  CBC: __webpack_require__(61),
	  CFB: __webpack_require__(62),
	  CFB8: __webpack_require__(63),
	  CFB1: __webpack_require__(64),
	  OFB: __webpack_require__(65),
	  CTR: __webpack_require__(66),
	  GCM: __webpack_require__(66)
	};

	function createDecipheriv(suite, password, iv) {
	  var config = modes[suite.toLowerCase()];
	  if (!config) {
	    throw new TypeError('invalid suite type');
	  }
	  if (typeof iv === 'string') {
	    iv = new Buffer(iv);
	  }
	  if (typeof password === 'string') {
	    password = new Buffer(password);
	  }
	  if (password.length !== config.key / 8) {
	    throw new TypeError('invalid key length ' + password.length);
	  }
	  if (iv.length !== config.iv) {
	    throw new TypeError('invalid iv length ' + iv.length);
	  }
	  if (config.type === 'stream') {
	    return new StreamCipher(modelist[config.mode], password, iv, true);
	  } else if (config.type === 'auth') {
	    return new AuthCipher(modelist[config.mode], password, iv, true);
	  }
	  return new Decipher(modelist[config.mode], password, iv);
	}

	function createDecipher(suite, password) {
	  var config = modes[suite.toLowerCase()];
	  if (!config) {
	    throw new TypeError('invalid suite type');
	  }
	  var keys = ebtk(password, false, config.key, config.iv);
	  return createDecipheriv(suite, keys.key, keys.iv);
	}
	exports.createDecipher = createDecipher;
	exports.createDecipheriv = createDecipheriv;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var CipherBase = __webpack_require__(24);
	var des = __webpack_require__(69);
	var inherits = __webpack_require__(12);

	var modes = {
	  'des-ede3-cbc': des.CBC.instantiate(des.EDE),
	  'des-ede3': des.EDE,
	  'des-ede-cbc': des.CBC.instantiate(des.EDE),
	  'des-ede': des.EDE,
	  'des-cbc': des.CBC.instantiate(des.DES),
	  'des-ecb': des.DES
	};
	modes.des = modes['des-cbc'];
	modes.des3 = modes['des-ede3-cbc'];
	module.exports = DES;
	inherits(DES, CipherBase);
	function DES(opts) {
	  CipherBase.call(this);
	  var modeName = opts.mode.toLowerCase();
	  var mode = modes[modeName];
	  var type;
	  if (opts.decrypt) {
	    type = 'decrypt';
	  } else {
	    type = 'encrypt';
	  }
	  var key = opts.key;
	  if (modeName === 'des-ede' || modeName === 'des-ede-cbc') {
	    key = Buffer.concat([key, key.slice(0, 8)]);
	  }
	  var iv = opts.iv;
	  this._des = mode.create({
	    key: key,
	    iv: iv,
	    type: type
	  });
	}
	DES.prototype._update = function (data) {
	  return new Buffer(this._des.update(data));
	};
	DES.prototype._final = function () {
	  return new Buffer(this._des.final());
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.utils = __webpack_require__(70);
	exports.Cipher = __webpack_require__(71);
	exports.DES = __webpack_require__(73);
	exports.CBC = __webpack_require__(74);
	exports.EDE = __webpack_require__(75);

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	exports.readUInt32BE = function readUInt32BE(bytes, off) {
	  var res = bytes[0 + off] << 24 | bytes[1 + off] << 16 | bytes[2 + off] << 8 | bytes[3 + off];
	  return res >>> 0;
	};

	exports.writeUInt32BE = function writeUInt32BE(bytes, value, off) {
	  bytes[0 + off] = value >>> 24;
	  bytes[1 + off] = value >>> 16 & 0xff;
	  bytes[2 + off] = value >>> 8 & 0xff;
	  bytes[3 + off] = value & 0xff;
	};

	exports.ip = function ip(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  for (var i = 6; i >= 0; i -= 2) {
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= inR >>> j + i & 1;
	    }
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= inL >>> j + i & 1;
	    }
	  }

	  for (var i = 6; i >= 0; i -= 2) {
	    for (var j = 1; j <= 25; j += 8) {
	      outR <<= 1;
	      outR |= inR >>> j + i & 1;
	    }
	    for (var j = 1; j <= 25; j += 8) {
	      outR <<= 1;
	      outR |= inL >>> j + i & 1;
	    }
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.rip = function rip(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  for (var i = 0; i < 4; i++) {
	    for (var j = 24; j >= 0; j -= 8) {
	      outL <<= 1;
	      outL |= inR >>> j + i & 1;
	      outL <<= 1;
	      outL |= inL >>> j + i & 1;
	    }
	  }
	  for (var i = 4; i < 8; i++) {
	    for (var j = 24; j >= 0; j -= 8) {
	      outR <<= 1;
	      outR |= inR >>> j + i & 1;
	      outR <<= 1;
	      outR |= inL >>> j + i & 1;
	    }
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.pc1 = function pc1(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  // 7, 15, 23, 31, 39, 47, 55, 63
	  // 6, 14, 22, 30, 39, 47, 55, 63
	  // 5, 13, 21, 29, 39, 47, 55, 63
	  // 4, 12, 20, 28
	  for (var i = 7; i >= 5; i--) {
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= inR >> j + i & 1;
	    }
	    for (var j = 0; j <= 24; j += 8) {
	      outL <<= 1;
	      outL |= inL >> j + i & 1;
	    }
	  }
	  for (var j = 0; j <= 24; j += 8) {
	    outL <<= 1;
	    outL |= inR >> j + i & 1;
	  }

	  // 1, 9, 17, 25, 33, 41, 49, 57
	  // 2, 10, 18, 26, 34, 42, 50, 58
	  // 3, 11, 19, 27, 35, 43, 51, 59
	  // 36, 44, 52, 60
	  for (var i = 1; i <= 3; i++) {
	    for (var j = 0; j <= 24; j += 8) {
	      outR <<= 1;
	      outR |= inR >> j + i & 1;
	    }
	    for (var j = 0; j <= 24; j += 8) {
	      outR <<= 1;
	      outR |= inL >> j + i & 1;
	    }
	  }
	  for (var j = 0; j <= 24; j += 8) {
	    outR <<= 1;
	    outR |= inL >> j + i & 1;
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.r28shl = function r28shl(num, shift) {
	  return num << shift & 0xfffffff | num >>> 28 - shift;
	};

	var pc2table = [
	// inL => outL
	14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26,

	// inR => outR
	15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];

	exports.pc2 = function pc2(inL, inR, out, off) {
	  var outL = 0;
	  var outR = 0;

	  var len = pc2table.length >>> 1;
	  for (var i = 0; i < len; i++) {
	    outL <<= 1;
	    outL |= inL >>> pc2table[i] & 0x1;
	  }
	  for (var i = len; i < pc2table.length; i++) {
	    outR <<= 1;
	    outR |= inR >>> pc2table[i] & 0x1;
	  }

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	exports.expand = function expand(r, out, off) {
	  var outL = 0;
	  var outR = 0;

	  outL = (r & 1) << 5 | r >>> 27;
	  for (var i = 23; i >= 15; i -= 4) {
	    outL <<= 6;
	    outL |= r >>> i & 0x3f;
	  }
	  for (var i = 11; i >= 3; i -= 4) {
	    outR |= r >>> i & 0x3f;
	    outR <<= 6;
	  }
	  outR |= (r & 0x1f) << 1 | r >>> 31;

	  out[off + 0] = outL >>> 0;
	  out[off + 1] = outR >>> 0;
	};

	var sTable = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];

	exports.substitute = function substitute(inL, inR) {
	  var out = 0;
	  for (var i = 0; i < 4; i++) {
	    var b = inL >>> 18 - i * 6 & 0x3f;
	    var sb = sTable[i * 0x40 + b];

	    out <<= 4;
	    out |= sb;
	  }
	  for (var i = 0; i < 4; i++) {
	    var b = inR >>> 18 - i * 6 & 0x3f;
	    var sb = sTable[4 * 0x40 + i * 0x40 + b];

	    out <<= 4;
	    out |= sb;
	  }
	  return out >>> 0;
	};

	var permuteTable = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];

	exports.permute = function permute(num) {
	  var out = 0;
	  for (var i = 0; i < permuteTable.length; i++) {
	    out <<= 1;
	    out |= num >>> permuteTable[i] & 0x1;
	  }
	  return out >>> 0;
	};

	exports.padSplit = function padSplit(num, size, group) {
	  var str = num.toString(2);
	  while (str.length < size) {
	    str = '0' + str;
	  }var out = [];
	  for (var i = 0; i < size; i += group) {
	    out.push(str.slice(i, i + group));
	  }return out.join(' ');
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(72);

	function Cipher(options) {
	  this.options = options;

	  this.type = this.options.type;
	  this.blockSize = 8;
	  this._init();

	  this.buffer = new Array(this.blockSize);
	  this.bufferOff = 0;
	}
	module.exports = Cipher;

	Cipher.prototype._init = function _init() {
	  // Might be overrided
	};

	Cipher.prototype.update = function update(data) {
	  if (data.length === 0) return [];

	  if (this.type === 'decrypt') return this._updateDecrypt(data);else return this._updateEncrypt(data);
	};

	Cipher.prototype._buffer = function _buffer(data, off) {
	  // Append data to buffer
	  var min = Math.min(this.buffer.length - this.bufferOff, data.length - off);
	  for (var i = 0; i < min; i++) {
	    this.buffer[this.bufferOff + i] = data[off + i];
	  }this.bufferOff += min;

	  // Shift next
	  return min;
	};

	Cipher.prototype._flushBuffer = function _flushBuffer(out, off) {
	  this._update(this.buffer, 0, out, off);
	  this.bufferOff = 0;
	  return this.blockSize;
	};

	Cipher.prototype._updateEncrypt = function _updateEncrypt(data) {
	  var inputOff = 0;
	  var outputOff = 0;

	  var count = (this.bufferOff + data.length) / this.blockSize | 0;
	  var out = new Array(count * this.blockSize);

	  if (this.bufferOff !== 0) {
	    inputOff += this._buffer(data, inputOff);

	    if (this.bufferOff === this.buffer.length) outputOff += this._flushBuffer(out, outputOff);
	  }

	  // Write blocks
	  var max = data.length - (data.length - inputOff) % this.blockSize;
	  for (; inputOff < max; inputOff += this.blockSize) {
	    this._update(data, inputOff, out, outputOff);
	    outputOff += this.blockSize;
	  }

	  // Queue rest
	  for (; inputOff < data.length; inputOff++, this.bufferOff++) {
	    this.buffer[this.bufferOff] = data[inputOff];
	  }return out;
	};

	Cipher.prototype._updateDecrypt = function _updateDecrypt(data) {
	  var inputOff = 0;
	  var outputOff = 0;

	  var count = Math.ceil((this.bufferOff + data.length) / this.blockSize) - 1;
	  var out = new Array(count * this.blockSize);

	  // TODO(indutny): optimize it, this is far from optimal
	  for (; count > 0; count--) {
	    inputOff += this._buffer(data, inputOff);
	    outputOff += this._flushBuffer(out, outputOff);
	  }

	  // Buffer rest of the input
	  inputOff += this._buffer(data, inputOff);

	  return out;
	};

	Cipher.prototype.final = function final(buffer) {
	  var first;
	  if (buffer) first = this.update(buffer);

	  var last;
	  if (this.type === 'encrypt') last = this._finalEncrypt();else last = this._finalDecrypt();

	  if (first) return first.concat(last);else return last;
	};

	Cipher.prototype._pad = function _pad(buffer, off) {
	  if (off === 0) return false;

	  while (off < buffer.length) {
	    buffer[off++] = 0;
	  }return true;
	};

	Cipher.prototype._finalEncrypt = function _finalEncrypt() {
	  if (!this._pad(this.buffer, this.bufferOff)) return [];

	  var out = new Array(this.blockSize);
	  this._update(this.buffer, 0, out, 0);
	  return out;
	};

	Cipher.prototype._unpad = function _unpad(buffer) {
	  return buffer;
	};

	Cipher.prototype._finalDecrypt = function _finalDecrypt() {
	  assert.equal(this.bufferOff, this.blockSize, 'Not enough data to decrypt');
	  var out = new Array(this.blockSize);
	  this._flushBuffer(out, 0);

	  return this._unpad(out);
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';

	module.exports = assert;

	function assert(val, msg) {
	  if (!val) throw new Error(msg || 'Assertion failed');
	}

	assert.equal = function assertEqual(l, r, msg) {
	  if (l != r) throw new Error(msg || 'Assertion failed: ' + l + ' != ' + r);
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(72);
	var inherits = __webpack_require__(12);

	var des = __webpack_require__(69);
	var utils = des.utils;
	var Cipher = des.Cipher;

	function DESState() {
	  this.tmp = new Array(2);
	  this.keys = null;
	}

	function DES(options) {
	  Cipher.call(this, options);

	  var state = new DESState();
	  this._desState = state;

	  this.deriveKeys(state, options.key);
	}
	inherits(DES, Cipher);
	module.exports = DES;

	DES.create = function create(options) {
	  return new DES(options);
	};

	var shiftTable = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

	DES.prototype.deriveKeys = function deriveKeys(state, key) {
	  state.keys = new Array(16 * 2);

	  assert.equal(key.length, this.blockSize, 'Invalid key length');

	  var kL = utils.readUInt32BE(key, 0);
	  var kR = utils.readUInt32BE(key, 4);

	  utils.pc1(kL, kR, state.tmp, 0);
	  kL = state.tmp[0];
	  kR = state.tmp[1];
	  for (var i = 0; i < state.keys.length; i += 2) {
	    var shift = shiftTable[i >>> 1];
	    kL = utils.r28shl(kL, shift);
	    kR = utils.r28shl(kR, shift);
	    utils.pc2(kL, kR, state.keys, i);
	  }
	};

	DES.prototype._update = function _update(inp, inOff, out, outOff) {
	  var state = this._desState;

	  var l = utils.readUInt32BE(inp, inOff);
	  var r = utils.readUInt32BE(inp, inOff + 4);

	  // Initial Permutation
	  utils.ip(l, r, state.tmp, 0);
	  l = state.tmp[0];
	  r = state.tmp[1];

	  if (this.type === 'encrypt') this._encrypt(state, l, r, state.tmp, 0);else this._decrypt(state, l, r, state.tmp, 0);

	  l = state.tmp[0];
	  r = state.tmp[1];

	  utils.writeUInt32BE(out, l, outOff);
	  utils.writeUInt32BE(out, r, outOff + 4);
	};

	DES.prototype._pad = function _pad(buffer, off) {
	  var value = buffer.length - off;
	  for (var i = off; i < buffer.length; i++) {
	    buffer[i] = value;
	  }return true;
	};

	DES.prototype._unpad = function _unpad(buffer) {
	  var pad = buffer[buffer.length - 1];
	  for (var i = buffer.length - pad; i < buffer.length; i++) {
	    assert.equal(buffer[i], pad);
	  }return buffer.slice(0, buffer.length - pad);
	};

	DES.prototype._encrypt = function _encrypt(state, lStart, rStart, out, off) {
	  var l = lStart;
	  var r = rStart;

	  // Apply f() x16 times
	  for (var i = 0; i < state.keys.length; i += 2) {
	    var keyL = state.keys[i];
	    var keyR = state.keys[i + 1];

	    // f(r, k)
	    utils.expand(r, state.tmp, 0);

	    keyL ^= state.tmp[0];
	    keyR ^= state.tmp[1];
	    var s = utils.substitute(keyL, keyR);
	    var f = utils.permute(s);

	    var t = r;
	    r = (l ^ f) >>> 0;
	    l = t;
	  }

	  // Reverse Initial Permutation
	  utils.rip(r, l, out, off);
	};

	DES.prototype._decrypt = function _decrypt(state, lStart, rStart, out, off) {
	  var l = rStart;
	  var r = lStart;

	  // Apply f() x16 times
	  for (var i = state.keys.length - 2; i >= 0; i -= 2) {
	    var keyL = state.keys[i];
	    var keyR = state.keys[i + 1];

	    // f(r, k)
	    utils.expand(l, state.tmp, 0);

	    keyL ^= state.tmp[0];
	    keyR ^= state.tmp[1];
	    var s = utils.substitute(keyL, keyR);
	    var f = utils.permute(s);

	    var t = l;
	    l = (r ^ f) >>> 0;
	    r = t;
	  }

	  // Reverse Initial Permutation
	  utils.rip(l, r, out, off);
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(72);
	var inherits = __webpack_require__(12);

	var proto = {};

	function CBCState(iv) {
	  assert.equal(iv.length, 8, 'Invalid IV length');

	  this.iv = new Array(8);
	  for (var i = 0; i < this.iv.length; i++) {
	    this.iv[i] = iv[i];
	  }
	}

	function instantiate(Base) {
	  function CBC(options) {
	    Base.call(this, options);
	    this._cbcInit();
	  }
	  inherits(CBC, Base);

	  var keys = Object.keys(proto);
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    CBC.prototype[key] = proto[key];
	  }

	  CBC.create = function create(options) {
	    return new CBC(options);
	  };

	  return CBC;
	}

	exports.instantiate = instantiate;

	proto._cbcInit = function _cbcInit() {
	  var state = new CBCState(this.options.iv);
	  this._cbcState = state;
	};

	proto._update = function _update(inp, inOff, out, outOff) {
	  var state = this._cbcState;
	  var superProto = this.constructor.super_.prototype;

	  var iv = state.iv;
	  if (this.type === 'encrypt') {
	    for (var i = 0; i < this.blockSize; i++) {
	      iv[i] ^= inp[inOff + i];
	    }superProto._update.call(this, iv, 0, out, outOff);

	    for (var i = 0; i < this.blockSize; i++) {
	      iv[i] = out[outOff + i];
	    }
	  } else {
	    superProto._update.call(this, inp, inOff, out, outOff);

	    for (var i = 0; i < this.blockSize; i++) {
	      out[outOff + i] ^= iv[i];
	    }for (var i = 0; i < this.blockSize; i++) {
	      iv[i] = inp[inOff + i];
	    }
	  }
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assert = __webpack_require__(72);
	var inherits = __webpack_require__(12);

	var des = __webpack_require__(69);
	var Cipher = des.Cipher;
	var DES = des.DES;

	function EDEState(type, key) {
	  assert.equal(key.length, 24, 'Invalid key length');

	  var k1 = key.slice(0, 8);
	  var k2 = key.slice(8, 16);
	  var k3 = key.slice(16, 24);

	  if (type === 'encrypt') {
	    this.ciphers = [DES.create({ type: 'encrypt', key: k1 }), DES.create({ type: 'decrypt', key: k2 }), DES.create({ type: 'encrypt', key: k3 })];
	  } else {
	    this.ciphers = [DES.create({ type: 'decrypt', key: k3 }), DES.create({ type: 'encrypt', key: k2 }), DES.create({ type: 'decrypt', key: k1 })];
	  }
	}

	function EDE(options) {
	  Cipher.call(this, options);

	  var state = new EDEState(this.type, this.options.key);
	  this._edeState = state;
	}
	inherits(EDE, Cipher);

	module.exports = EDE;

	EDE.create = function create(options) {
	  return new EDE(options);
	};

	EDE.prototype._update = function _update(inp, inOff, out, outOff) {
	  var state = this._edeState;

	  state.ciphers[0]._update(inp, inOff, out, outOff);
	  state.ciphers[1]._update(out, outOff, out, outOff);
	  state.ciphers[2]._update(out, outOff, out, outOff);
	};

	EDE.prototype._pad = DES.prototype._pad;
	EDE.prototype._unpad = DES.prototype._unpad;

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	exports['des-ecb'] = {
	  key: 8,
	  iv: 0
	};
	exports['des-cbc'] = exports.des = {
	  key: 8,
	  iv: 8
	};
	exports['des-ede3-cbc'] = exports.des3 = {
	  key: 24,
	  iv: 8
	};
	exports['des-ede3'] = {
	  key: 24,
	  iv: 0
	};
	exports['des-ede-cbc'] = {
	  key: 16,
	  iv: 8
	};
	exports['des-ede'] = {
	  key: 16,
	  iv: 0
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var generatePrime = __webpack_require__(78);
	var primes = __webpack_require__(84);

	var DH = __webpack_require__(85);

	function getDiffieHellman(mod) {
	  var prime = new Buffer(primes[mod].prime, 'hex');
	  var gen = new Buffer(primes[mod].gen, 'hex');

	  return new DH(prime, gen);
	}

	var ENCODINGS = {
	  'binary': true, 'hex': true, 'base64': true
	};

	function createDiffieHellman(prime, enc, generator, genc) {
	  if (Buffer.isBuffer(enc) || ENCODINGS[enc] === undefined) {
	    return createDiffieHellman(prime, 'binary', enc, generator);
	  }

	  enc = enc || 'binary';
	  genc = genc || 'binary';
	  generator = generator || new Buffer([2]);

	  if (!Buffer.isBuffer(generator)) {
	    generator = new Buffer(generator, genc);
	  }

	  if (typeof prime === 'number') {
	    return new DH(generatePrime(prime, generator), generator, true);
	  }

	  if (!Buffer.isBuffer(prime)) {
	    prime = new Buffer(prime, enc);
	  }

	  return new DH(prime, generator, true);
	}

	exports.DiffieHellmanGroup = exports.createDiffieHellmanGroup = exports.getDiffieHellman = getDiffieHellman;
	exports.createDiffieHellman = exports.DiffieHellman = createDiffieHellman;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomBytes = __webpack_require__(9);
	module.exports = findPrime;
	findPrime.simpleSieve = simpleSieve;
	findPrime.fermatTest = fermatTest;
	var BN = __webpack_require__(79);
	var TWENTYFOUR = new BN(24);
	var MillerRabin = __webpack_require__(81);
	var millerRabin = new MillerRabin();
	var ONE = new BN(1);
	var TWO = new BN(2);
	var FIVE = new BN(5);
	var SIXTEEN = new BN(16);
	var EIGHT = new BN(8);
	var TEN = new BN(10);
	var THREE = new BN(3);
	var SEVEN = new BN(7);
	var ELEVEN = new BN(11);
	var FOUR = new BN(4);
	var TWELVE = new BN(12);
	var primes = null;

	function _getPrimes() {
	  if (primes !== null) return primes;

	  var limit = 0x100000;
	  var res = [];
	  res[0] = 2;
	  for (var i = 1, k = 3; k < limit; k += 2) {
	    var sqrt = Math.ceil(Math.sqrt(k));
	    for (var j = 0; j < i && res[j] <= sqrt; j++) {
	      if (k % res[j] === 0) break;
	    }if (i !== j && res[j] <= sqrt) continue;

	    res[i++] = k;
	  }
	  primes = res;
	  return res;
	}

	function simpleSieve(p) {
	  var primes = _getPrimes();

	  for (var i = 0; i < primes.length; i++) {
	    if (p.modn(primes[i]) === 0) {
	      if (p.cmpn(primes[i]) === 0) {
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }return true;
	}

	function fermatTest(p) {
	  var red = BN.mont(p);
	  return TWO.toRed(red).redPow(p.subn(1)).fromRed().cmpn(1) === 0;
	}

	function findPrime(bits, gen) {
	  if (bits < 16) {
	    // this is what openssl does
	    if (gen === 2 || gen === 5) {
	      return new BN([0x8c, 0x7b]);
	    } else {
	      return new BN([0x8c, 0x27]);
	    }
	  }
	  gen = new BN(gen);

	  var num, n2;

	  while (true) {
	    num = new BN(randomBytes(Math.ceil(bits / 8)));
	    while (num.bitLength() > bits) {
	      num.ishrn(1);
	    }
	    if (num.isEven()) {
	      num.iadd(ONE);
	    }
	    if (!num.testn(1)) {
	      num.iadd(TWO);
	    }
	    if (!gen.cmp(TWO)) {
	      while (num.mod(TWENTYFOUR).cmp(ELEVEN)) {
	        num.iadd(FOUR);
	      }
	    } else if (!gen.cmp(FIVE)) {
	      while (num.mod(TEN).cmp(THREE)) {
	        num.iadd(FOUR);
	      }
	    }
	    n2 = num.shrn(1);
	    if (simpleSieve(n2) && simpleSieve(num) && fermatTest(n2) && fermatTest(num) && millerRabin.test(n2) && millerRabin.test(num)) {
	      return num;
	    }
	  }
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (module, exports) {
	  'use strict';

	  // Utils

	  function assert(val, msg) {
	    if (!val) throw new Error(msg || 'Assertion failed');
	  }

	  // Could use `inherits` module, but don't want to move from single file
	  // architecture yet.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function TempCtor() {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  }

	  // BN

	  function BN(number, base, endian) {
	    if (BN.isBN(number)) {
	      return number;
	    }

	    this.negative = 0;
	    this.words = null;
	    this.length = 0;

	    // Reduction context
	    this.red = null;

	    if (number !== null) {
	      if (base === 'le' || base === 'be') {
	        endian = base;
	        base = 10;
	      }

	      this._init(number || 0, base || 10, endian || 'be');
	    }
	  }
	  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
	    module.exports = BN;
	  } else {
	    exports.BN = BN;
	  }

	  BN.BN = BN;
	  BN.wordSize = 26;

	  var Buffer;
	  try {
	    Buffer = __webpack_require__(4).Buffer;
	  } catch (e) {}

	  BN.isBN = function isBN(num) {
	    if (num instanceof BN) {
	      return true;
	    }

	    return num !== null && (typeof num === 'undefined' ? 'undefined' : _typeof(num)) === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
	  };

	  BN.max = function max(left, right) {
	    if (left.cmp(right) > 0) return left;
	    return right;
	  };

	  BN.min = function min(left, right) {
	    if (left.cmp(right) < 0) return left;
	    return right;
	  };

	  BN.prototype._init = function init(number, base, endian) {
	    if (typeof number === 'number') {
	      return this._initNumber(number, base, endian);
	    }

	    if ((typeof number === 'undefined' ? 'undefined' : _typeof(number)) === 'object') {
	      return this._initArray(number, base, endian);
	    }

	    if (base === 'hex') {
	      base = 16;
	    }
	    assert(base === (base | 0) && base >= 2 && base <= 36);

	    number = number.toString().replace(/\s+/g, '');
	    var start = 0;
	    if (number[0] === '-') {
	      start++;
	    }

	    if (base === 16) {
	      this._parseHex(number, start);
	    } else {
	      this._parseBase(number, base, start);
	    }

	    if (number[0] === '-') {
	      this.negative = 1;
	    }

	    this.strip();

	    if (endian !== 'le') return;

	    this._initArray(this.toArray(), base, endian);
	  };

	  BN.prototype._initNumber = function _initNumber(number, base, endian) {
	    if (number < 0) {
	      this.negative = 1;
	      number = -number;
	    }
	    if (number < 0x4000000) {
	      this.words = [number & 0x3ffffff];
	      this.length = 1;
	    } else if (number < 0x10000000000000) {
	      this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff];
	      this.length = 2;
	    } else {
	      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
	      this.words = [number & 0x3ffffff, number / 0x4000000 & 0x3ffffff, 1];
	      this.length = 3;
	    }

	    if (endian !== 'le') return;

	    // Reverse the bytes
	    this._initArray(this.toArray(), base, endian);
	  };

	  BN.prototype._initArray = function _initArray(number, base, endian) {
	    // Perhaps a Uint8Array
	    assert(typeof number.length === 'number');
	    if (number.length <= 0) {
	      this.words = [0];
	      this.length = 1;
	      return this;
	    }

	    this.length = Math.ceil(number.length / 3);
	    this.words = new Array(this.length);
	    for (var i = 0; i < this.length; i++) {
	      this.words[i] = 0;
	    }

	    var j, w;
	    var off = 0;
	    if (endian === 'be') {
	      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
	        w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
	        this.words[j] |= w << off & 0x3ffffff;
	        this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
	        off += 24;
	        if (off >= 26) {
	          off -= 26;
	          j++;
	        }
	      }
	    } else if (endian === 'le') {
	      for (i = 0, j = 0; i < number.length; i += 3) {
	        w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
	        this.words[j] |= w << off & 0x3ffffff;
	        this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
	        off += 24;
	        if (off >= 26) {
	          off -= 26;
	          j++;
	        }
	      }
	    }
	    return this.strip();
	  };

	  function parseHex(str, start, end) {
	    var r = 0;
	    var len = Math.min(str.length, end);
	    for (var i = start; i < len; i++) {
	      var c = str.charCodeAt(i) - 48;

	      r <<= 4;

	      // 'a' - 'f'
	      if (c >= 49 && c <= 54) {
	        r |= c - 49 + 0xa;

	        // 'A' - 'F'
	      } else if (c >= 17 && c <= 22) {
	        r |= c - 17 + 0xa;

	        // '0' - '9'
	      } else {
	        r |= c & 0xf;
	      }
	    }
	    return r;
	  }

	  BN.prototype._parseHex = function _parseHex(number, start) {
	    // Create possibly bigger array to ensure that it fits the number
	    this.length = Math.ceil((number.length - start) / 6);
	    this.words = new Array(this.length);
	    for (var i = 0; i < this.length; i++) {
	      this.words[i] = 0;
	    }

	    var j, w;
	    // Scan 24-bit chunks and add them to the number
	    var off = 0;
	    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
	      w = parseHex(number, i, i + 6);
	      this.words[j] |= w << off & 0x3ffffff;
	      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
	      this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
	      off += 24;
	      if (off >= 26) {
	        off -= 26;
	        j++;
	      }
	    }
	    if (i + 6 !== start) {
	      w = parseHex(number, start, i + 6);
	      this.words[j] |= w << off & 0x3ffffff;
	      this.words[j + 1] |= w >>> 26 - off & 0x3fffff;
	    }
	    this.strip();
	  };

	  function parseBase(str, start, end, mul) {
	    var r = 0;
	    var len = Math.min(str.length, end);
	    for (var i = start; i < len; i++) {
	      var c = str.charCodeAt(i) - 48;

	      r *= mul;

	      // 'a'
	      if (c >= 49) {
	        r += c - 49 + 0xa;

	        // 'A'
	      } else if (c >= 17) {
	        r += c - 17 + 0xa;

	        // '0' - '9'
	      } else {
	        r += c;
	      }
	    }
	    return r;
	  }

	  BN.prototype._parseBase = function _parseBase(number, base, start) {
	    // Initialize as zero
	    this.words = [0];
	    this.length = 1;

	    // Find length of limb in base
	    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
	      limbLen++;
	    }
	    limbLen--;
	    limbPow = limbPow / base | 0;

	    var total = number.length - start;
	    var mod = total % limbLen;
	    var end = Math.min(total, total - mod) + start;

	    var word = 0;
	    for (var i = start; i < end; i += limbLen) {
	      word = parseBase(number, i, i + limbLen, base);

	      this.imuln(limbPow);
	      if (this.words[0] + word < 0x4000000) {
	        this.words[0] += word;
	      } else {
	        this._iaddn(word);
	      }
	    }

	    if (mod !== 0) {
	      var pow = 1;
	      word = parseBase(number, i, number.length, base);

	      for (i = 0; i < mod; i++) {
	        pow *= base;
	      }

	      this.imuln(pow);
	      if (this.words[0] + word < 0x4000000) {
	        this.words[0] += word;
	      } else {
	        this._iaddn(word);
	      }
	    }
	  };

	  BN.prototype.copy = function copy(dest) {
	    dest.words = new Array(this.length);
	    for (var i = 0; i < this.length; i++) {
	      dest.words[i] = this.words[i];
	    }
	    dest.length = this.length;
	    dest.negative = this.negative;
	    dest.red = this.red;
	  };

	  BN.prototype.clone = function clone() {
	    var r = new BN(null);
	    this.copy(r);
	    return r;
	  };

	  BN.prototype._expand = function _expand(size) {
	    while (this.length < size) {
	      this.words[this.length++] = 0;
	    }
	    return this;
	  };

	  // Remove leading `0` from `this`
	  BN.prototype.strip = function strip() {
	    while (this.length > 1 && this.words[this.length - 1] === 0) {
	      this.length--;
	    }
	    return this._normSign();
	  };

	  BN.prototype._normSign = function _normSign() {
	    // -0 = 0
	    if (this.length === 1 && this.words[0] === 0) {
	      this.negative = 0;
	    }
	    return this;
	  };

	  BN.prototype.inspect = function inspect() {
	    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
	  };

	  /*
	   var zeros = [];
	  var groupSizes = [];
	  var groupBases = [];
	   var s = '';
	  var i = -1;
	  while (++i < BN.wordSize) {
	    zeros[i] = s;
	    s += '0';
	  }
	  groupSizes[0] = 0;
	  groupSizes[1] = 0;
	  groupBases[0] = 0;
	  groupBases[1] = 0;
	  var base = 2 - 1;
	  while (++base < 36 + 1) {
	    var groupSize = 0;
	    var groupBase = 1;
	    while (groupBase < (1 << BN.wordSize) / base) {
	      groupBase *= base;
	      groupSize += 1;
	    }
	    groupSizes[base] = groupSize;
	    groupBases[base] = groupBase;
	  }
	   */

	  var zeros = ['', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000'];

	  var groupSizes = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

	  var groupBases = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

	  BN.prototype.toString = function toString(base, padding) {
	    base = base || 10;
	    padding = padding | 0 || 1;

	    var out;
	    if (base === 16 || base === 'hex') {
	      out = '';
	      var off = 0;
	      var carry = 0;
	      for (var i = 0; i < this.length; i++) {
	        var w = this.words[i];
	        var word = ((w << off | carry) & 0xffffff).toString(16);
	        carry = w >>> 24 - off & 0xffffff;
	        if (carry !== 0 || i !== this.length - 1) {
	          out = zeros[6 - word.length] + word + out;
	        } else {
	          out = word + out;
	        }
	        off += 2;
	        if (off >= 26) {
	          off -= 26;
	          i--;
	        }
	      }
	      if (carry !== 0) {
	        out = carry.toString(16) + out;
	      }
	      while (out.length % padding !== 0) {
	        out = '0' + out;
	      }
	      if (this.negative !== 0) {
	        out = '-' + out;
	      }
	      return out;
	    }

	    if (base === (base | 0) && base >= 2 && base <= 36) {
	      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
	      var groupSize = groupSizes[base];
	      // var groupBase = Math.pow(base, groupSize);
	      var groupBase = groupBases[base];
	      out = '';
	      var c = this.clone();
	      c.negative = 0;
	      while (!c.isZero()) {
	        var r = c.modn(groupBase).toString(base);
	        c = c.idivn(groupBase);

	        if (!c.isZero()) {
	          out = zeros[groupSize - r.length] + r + out;
	        } else {
	          out = r + out;
	        }
	      }
	      if (this.isZero()) {
	        out = '0' + out;
	      }
	      while (out.length % padding !== 0) {
	        out = '0' + out;
	      }
	      if (this.negative !== 0) {
	        out = '-' + out;
	      }
	      return out;
	    }

	    assert(false, 'Base should be between 2 and 36');
	  };

	  BN.prototype.toNumber = function toNumber() {
	    var ret = this.words[0];
	    if (this.length === 2) {
	      ret += this.words[1] * 0x4000000;
	    } else if (this.length === 3 && this.words[2] === 0x01) {
	      // NOTE: at this stage it is known that the top bit is set
	      ret += 0x10000000000000 + this.words[1] * 0x4000000;
	    } else if (this.length > 2) {
	      assert(false, 'Number can only safely store up to 53 bits');
	    }
	    return this.negative !== 0 ? -ret : ret;
	  };

	  BN.prototype.toJSON = function toJSON() {
	    return this.toString(16);
	  };

	  BN.prototype.toBuffer = function toBuffer(endian, length) {
	    assert(typeof Buffer !== 'undefined');
	    return this.toArrayLike(Buffer, endian, length);
	  };

	  BN.prototype.toArray = function toArray(endian, length) {
	    return this.toArrayLike(Array, endian, length);
	  };

	  BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
	    var byteLength = this.byteLength();
	    var reqLength = length || Math.max(1, byteLength);
	    assert(byteLength <= reqLength, 'byte array longer than desired length');
	    assert(reqLength > 0, 'Requested array length <= 0');

	    this.strip();
	    var littleEndian = endian === 'le';
	    var res = new ArrayType(reqLength);

	    var b, i;
	    var q = this.clone();
	    if (!littleEndian) {
	      // Assume big-endian
	      for (i = 0; i < reqLength - byteLength; i++) {
	        res[i] = 0;
	      }

	      for (i = 0; !q.isZero(); i++) {
	        b = q.andln(0xff);
	        q.iushrn(8);

	        res[reqLength - i - 1] = b;
	      }
	    } else {
	      for (i = 0; !q.isZero(); i++) {
	        b = q.andln(0xff);
	        q.iushrn(8);

	        res[i] = b;
	      }

	      for (; i < reqLength; i++) {
	        res[i] = 0;
	      }
	    }

	    return res;
	  };

	  if (Math.clz32) {
	    BN.prototype._countBits = function _countBits(w) {
	      return 32 - Math.clz32(w);
	    };
	  } else {
	    BN.prototype._countBits = function _countBits(w) {
	      var t = w;
	      var r = 0;
	      if (t >= 0x1000) {
	        r += 13;
	        t >>>= 13;
	      }
	      if (t >= 0x40) {
	        r += 7;
	        t >>>= 7;
	      }
	      if (t >= 0x8) {
	        r += 4;
	        t >>>= 4;
	      }
	      if (t >= 0x02) {
	        r += 2;
	        t >>>= 2;
	      }
	      return r + t;
	    };
	  }

	  BN.prototype._zeroBits = function _zeroBits(w) {
	    // Short-cut
	    if (w === 0) return 26;

	    var t = w;
	    var r = 0;
	    if ((t & 0x1fff) === 0) {
	      r += 13;
	      t >>>= 13;
	    }
	    if ((t & 0x7f) === 0) {
	      r += 7;
	      t >>>= 7;
	    }
	    if ((t & 0xf) === 0) {
	      r += 4;
	      t >>>= 4;
	    }
	    if ((t & 0x3) === 0) {
	      r += 2;
	      t >>>= 2;
	    }
	    if ((t & 0x1) === 0) {
	      r++;
	    }
	    return r;
	  };

	  // Return number of used bits in a BN
	  BN.prototype.bitLength = function bitLength() {
	    var w = this.words[this.length - 1];
	    var hi = this._countBits(w);
	    return (this.length - 1) * 26 + hi;
	  };

	  function toBitArray(num) {
	    var w = new Array(num.bitLength());

	    for (var bit = 0; bit < w.length; bit++) {
	      var off = bit / 26 | 0;
	      var wbit = bit % 26;

	      w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
	    }

	    return w;
	  }

	  // Number of trailing zero bits
	  BN.prototype.zeroBits = function zeroBits() {
	    if (this.isZero()) return 0;

	    var r = 0;
	    for (var i = 0; i < this.length; i++) {
	      var b = this._zeroBits(this.words[i]);
	      r += b;
	      if (b !== 26) break;
	    }
	    return r;
	  };

	  BN.prototype.byteLength = function byteLength() {
	    return Math.ceil(this.bitLength() / 8);
	  };

	  BN.prototype.toTwos = function toTwos(width) {
	    if (this.negative !== 0) {
	      return this.abs().inotn(width).iaddn(1);
	    }
	    return this.clone();
	  };

	  BN.prototype.fromTwos = function fromTwos(width) {
	    if (this.testn(width - 1)) {
	      return this.notn(width).iaddn(1).ineg();
	    }
	    return this.clone();
	  };

	  BN.prototype.isNeg = function isNeg() {
	    return this.negative !== 0;
	  };

	  // Return negative clone of `this`
	  BN.prototype.neg = function neg() {
	    return this.clone().ineg();
	  };

	  BN.prototype.ineg = function ineg() {
	    if (!this.isZero()) {
	      this.negative ^= 1;
	    }

	    return this;
	  };

	  // Or `num` with `this` in-place
	  BN.prototype.iuor = function iuor(num) {
	    while (this.length < num.length) {
	      this.words[this.length++] = 0;
	    }

	    for (var i = 0; i < num.length; i++) {
	      this.words[i] = this.words[i] | num.words[i];
	    }

	    return this.strip();
	  };

	  BN.prototype.ior = function ior(num) {
	    assert((this.negative | num.negative) === 0);
	    return this.iuor(num);
	  };

	  // Or `num` with `this`
	  BN.prototype.or = function or(num) {
	    if (this.length > num.length) return this.clone().ior(num);
	    return num.clone().ior(this);
	  };

	  BN.prototype.uor = function uor(num) {
	    if (this.length > num.length) return this.clone().iuor(num);
	    return num.clone().iuor(this);
	  };

	  // And `num` with `this` in-place
	  BN.prototype.iuand = function iuand(num) {
	    // b = min-length(num, this)
	    var b;
	    if (this.length > num.length) {
	      b = num;
	    } else {
	      b = this;
	    }

	    for (var i = 0; i < b.length; i++) {
	      this.words[i] = this.words[i] & num.words[i];
	    }

	    this.length = b.length;

	    return this.strip();
	  };

	  BN.prototype.iand = function iand(num) {
	    assert((this.negative | num.negative) === 0);
	    return this.iuand(num);
	  };

	  // And `num` with `this`
	  BN.prototype.and = function and(num) {
	    if (this.length > num.length) return this.clone().iand(num);
	    return num.clone().iand(this);
	  };

	  BN.prototype.uand = function uand(num) {
	    if (this.length > num.length) return this.clone().iuand(num);
	    return num.clone().iuand(this);
	  };

	  // Xor `num` with `this` in-place
	  BN.prototype.iuxor = function iuxor(num) {
	    // a.length > b.length
	    var a;
	    var b;
	    if (this.length > num.length) {
	      a = this;
	      b = num;
	    } else {
	      a = num;
	      b = this;
	    }

	    for (var i = 0; i < b.length; i++) {
	      this.words[i] = a.words[i] ^ b.words[i];
	    }

	    if (this !== a) {
	      for (; i < a.length; i++) {
	        this.words[i] = a.words[i];
	      }
	    }

	    this.length = a.length;

	    return this.strip();
	  };

	  BN.prototype.ixor = function ixor(num) {
	    assert((this.negative | num.negative) === 0);
	    return this.iuxor(num);
	  };

	  // Xor `num` with `this`
	  BN.prototype.xor = function xor(num) {
	    if (this.length > num.length) return this.clone().ixor(num);
	    return num.clone().ixor(this);
	  };

	  BN.prototype.uxor = function uxor(num) {
	    if (this.length > num.length) return this.clone().iuxor(num);
	    return num.clone().iuxor(this);
	  };

	  // Not ``this`` with ``width`` bitwidth
	  BN.prototype.inotn = function inotn(width) {
	    assert(typeof width === 'number' && width >= 0);

	    var bytesNeeded = Math.ceil(width / 26) | 0;
	    var bitsLeft = width % 26;

	    // Extend the buffer with leading zeroes
	    this._expand(bytesNeeded);

	    if (bitsLeft > 0) {
	      bytesNeeded--;
	    }

	    // Handle complete words
	    for (var i = 0; i < bytesNeeded; i++) {
	      this.words[i] = ~this.words[i] & 0x3ffffff;
	    }

	    // Handle the residue
	    if (bitsLeft > 0) {
	      this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
	    }

	    // And remove leading zeroes
	    return this.strip();
	  };

	  BN.prototype.notn = function notn(width) {
	    return this.clone().inotn(width);
	  };

	  // Set `bit` of `this`
	  BN.prototype.setn = function setn(bit, val) {
	    assert(typeof bit === 'number' && bit >= 0);

	    var off = bit / 26 | 0;
	    var wbit = bit % 26;

	    this._expand(off + 1);

	    if (val) {
	      this.words[off] = this.words[off] | 1 << wbit;
	    } else {
	      this.words[off] = this.words[off] & ~(1 << wbit);
	    }

	    return this.strip();
	  };

	  // Add `num` to `this` in-place
	  BN.prototype.iadd = function iadd(num) {
	    var r;

	    // negative + positive
	    if (this.negative !== 0 && num.negative === 0) {
	      this.negative = 0;
	      r = this.isub(num);
	      this.negative ^= 1;
	      return this._normSign();

	      // positive + negative
	    } else if (this.negative === 0 && num.negative !== 0) {
	      num.negative = 0;
	      r = this.isub(num);
	      num.negative = 1;
	      return r._normSign();
	    }

	    // a.length > b.length
	    var a, b;
	    if (this.length > num.length) {
	      a = this;
	      b = num;
	    } else {
	      a = num;
	      b = this;
	    }

	    var carry = 0;
	    for (var i = 0; i < b.length; i++) {
	      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
	      this.words[i] = r & 0x3ffffff;
	      carry = r >>> 26;
	    }
	    for (; carry !== 0 && i < a.length; i++) {
	      r = (a.words[i] | 0) + carry;
	      this.words[i] = r & 0x3ffffff;
	      carry = r >>> 26;
	    }

	    this.length = a.length;
	    if (carry !== 0) {
	      this.words[this.length] = carry;
	      this.length++;
	      // Copy the rest of the words
	    } else if (a !== this) {
	      for (; i < a.length; i++) {
	        this.words[i] = a.words[i];
	      }
	    }

	    return this;
	  };

	  // Add `num` to `this`
	  BN.prototype.add = function add(num) {
	    var res;
	    if (num.negative !== 0 && this.negative === 0) {
	      num.negative = 0;
	      res = this.sub(num);
	      num.negative ^= 1;
	      return res;
	    } else if (num.negative === 0 && this.negative !== 0) {
	      this.negative = 0;
	      res = num.sub(this);
	      this.negative = 1;
	      return res;
	    }

	    if (this.length > num.length) return this.clone().iadd(num);

	    return num.clone().iadd(this);
	  };

	  // Subtract `num` from `this` in-place
	  BN.prototype.isub = function isub(num) {
	    // this - (-num) = this + num
	    if (num.negative !== 0) {
	      num.negative = 0;
	      var r = this.iadd(num);
	      num.negative = 1;
	      return r._normSign();

	      // -this - num = -(this + num)
	    } else if (this.negative !== 0) {
	      this.negative = 0;
	      this.iadd(num);
	      this.negative = 1;
	      return this._normSign();
	    }

	    // At this point both numbers are positive
	    var cmp = this.cmp(num);

	    // Optimization - zeroify
	    if (cmp === 0) {
	      this.negative = 0;
	      this.length = 1;
	      this.words[0] = 0;
	      return this;
	    }

	    // a > b
	    var a, b;
	    if (cmp > 0) {
	      a = this;
	      b = num;
	    } else {
	      a = num;
	      b = this;
	    }

	    var carry = 0;
	    for (var i = 0; i < b.length; i++) {
	      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
	      carry = r >> 26;
	      this.words[i] = r & 0x3ffffff;
	    }
	    for (; carry !== 0 && i < a.length; i++) {
	      r = (a.words[i] | 0) + carry;
	      carry = r >> 26;
	      this.words[i] = r & 0x3ffffff;
	    }

	    // Copy rest of the words
	    if (carry === 0 && i < a.length && a !== this) {
	      for (; i < a.length; i++) {
	        this.words[i] = a.words[i];
	      }
	    }

	    this.length = Math.max(this.length, i);

	    if (a !== this) {
	      this.negative = 1;
	    }

	    return this.strip();
	  };

	  // Subtract `num` from `this`
	  BN.prototype.sub = function sub(num) {
	    return this.clone().isub(num);
	  };

	  function smallMulTo(self, num, out) {
	    out.negative = num.negative ^ self.negative;
	    var len = self.length + num.length | 0;
	    out.length = len;
	    len = len - 1 | 0;

	    // Peel one iteration (compiler can't do it, because of code complexity)
	    var a = self.words[0] | 0;
	    var b = num.words[0] | 0;
	    var r = a * b;

	    var lo = r & 0x3ffffff;
	    var carry = r / 0x4000000 | 0;
	    out.words[0] = lo;

	    for (var k = 1; k < len; k++) {
	      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
	      // note that ncarry could be >= 0x3ffffff
	      var ncarry = carry >>> 26;
	      var rword = carry & 0x3ffffff;
	      var maxJ = Math.min(k, num.length - 1);
	      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
	        var i = k - j | 0;
	        a = self.words[i] | 0;
	        b = num.words[j] | 0;
	        r = a * b + rword;
	        ncarry += r / 0x4000000 | 0;
	        rword = r & 0x3ffffff;
	      }
	      out.words[k] = rword | 0;
	      carry = ncarry | 0;
	    }
	    if (carry !== 0) {
	      out.words[k] = carry | 0;
	    } else {
	      out.length--;
	    }

	    return out.strip();
	  }

	  // TODO(indutny): it may be reasonable to omit it for users who don't need
	  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
	  // multiplication (like elliptic secp256k1).
	  var comb10MulTo = function comb10MulTo(self, num, out) {
	    var a = self.words;
	    var b = num.words;
	    var o = out.words;
	    var c = 0;
	    var lo;
	    var mid;
	    var hi;
	    var a0 = a[0] | 0;
	    var al0 = a0 & 0x1fff;
	    var ah0 = a0 >>> 13;
	    var a1 = a[1] | 0;
	    var al1 = a1 & 0x1fff;
	    var ah1 = a1 >>> 13;
	    var a2 = a[2] | 0;
	    var al2 = a2 & 0x1fff;
	    var ah2 = a2 >>> 13;
	    var a3 = a[3] | 0;
	    var al3 = a3 & 0x1fff;
	    var ah3 = a3 >>> 13;
	    var a4 = a[4] | 0;
	    var al4 = a4 & 0x1fff;
	    var ah4 = a4 >>> 13;
	    var a5 = a[5] | 0;
	    var al5 = a5 & 0x1fff;
	    var ah5 = a5 >>> 13;
	    var a6 = a[6] | 0;
	    var al6 = a6 & 0x1fff;
	    var ah6 = a6 >>> 13;
	    var a7 = a[7] | 0;
	    var al7 = a7 & 0x1fff;
	    var ah7 = a7 >>> 13;
	    var a8 = a[8] | 0;
	    var al8 = a8 & 0x1fff;
	    var ah8 = a8 >>> 13;
	    var a9 = a[9] | 0;
	    var al9 = a9 & 0x1fff;
	    var ah9 = a9 >>> 13;
	    var b0 = b[0] | 0;
	    var bl0 = b0 & 0x1fff;
	    var bh0 = b0 >>> 13;
	    var b1 = b[1] | 0;
	    var bl1 = b1 & 0x1fff;
	    var bh1 = b1 >>> 13;
	    var b2 = b[2] | 0;
	    var bl2 = b2 & 0x1fff;
	    var bh2 = b2 >>> 13;
	    var b3 = b[3] | 0;
	    var bl3 = b3 & 0x1fff;
	    var bh3 = b3 >>> 13;
	    var b4 = b[4] | 0;
	    var bl4 = b4 & 0x1fff;
	    var bh4 = b4 >>> 13;
	    var b5 = b[5] | 0;
	    var bl5 = b5 & 0x1fff;
	    var bh5 = b5 >>> 13;
	    var b6 = b[6] | 0;
	    var bl6 = b6 & 0x1fff;
	    var bh6 = b6 >>> 13;
	    var b7 = b[7] | 0;
	    var bl7 = b7 & 0x1fff;
	    var bh7 = b7 >>> 13;
	    var b8 = b[8] | 0;
	    var bl8 = b8 & 0x1fff;
	    var bh8 = b8 >>> 13;
	    var b9 = b[9] | 0;
	    var bl9 = b9 & 0x1fff;
	    var bh9 = b9 >>> 13;

	    out.negative = self.negative ^ num.negative;
	    out.length = 19;
	    /* k = 0 */
	    lo = Math.imul(al0, bl0);
	    mid = Math.imul(al0, bh0);
	    mid = mid + Math.imul(ah0, bl0) | 0;
	    hi = Math.imul(ah0, bh0);
	    var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
	    w0 &= 0x3ffffff;
	    /* k = 1 */
	    lo = Math.imul(al1, bl0);
	    mid = Math.imul(al1, bh0);
	    mid = mid + Math.imul(ah1, bl0) | 0;
	    hi = Math.imul(ah1, bh0);
	    lo = lo + Math.imul(al0, bl1) | 0;
	    mid = mid + Math.imul(al0, bh1) | 0;
	    mid = mid + Math.imul(ah0, bl1) | 0;
	    hi = hi + Math.imul(ah0, bh1) | 0;
	    var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
	    w1 &= 0x3ffffff;
	    /* k = 2 */
	    lo = Math.imul(al2, bl0);
	    mid = Math.imul(al2, bh0);
	    mid = mid + Math.imul(ah2, bl0) | 0;
	    hi = Math.imul(ah2, bh0);
	    lo = lo + Math.imul(al1, bl1) | 0;
	    mid = mid + Math.imul(al1, bh1) | 0;
	    mid = mid + Math.imul(ah1, bl1) | 0;
	    hi = hi + Math.imul(ah1, bh1) | 0;
	    lo = lo + Math.imul(al0, bl2) | 0;
	    mid = mid + Math.imul(al0, bh2) | 0;
	    mid = mid + Math.imul(ah0, bl2) | 0;
	    hi = hi + Math.imul(ah0, bh2) | 0;
	    var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
	    w2 &= 0x3ffffff;
	    /* k = 3 */
	    lo = Math.imul(al3, bl0);
	    mid = Math.imul(al3, bh0);
	    mid = mid + Math.imul(ah3, bl0) | 0;
	    hi = Math.imul(ah3, bh0);
	    lo = lo + Math.imul(al2, bl1) | 0;
	    mid = mid + Math.imul(al2, bh1) | 0;
	    mid = mid + Math.imul(ah2, bl1) | 0;
	    hi = hi + Math.imul(ah2, bh1) | 0;
	    lo = lo + Math.imul(al1, bl2) | 0;
	    mid = mid + Math.imul(al1, bh2) | 0;
	    mid = mid + Math.imul(ah1, bl2) | 0;
	    hi = hi + Math.imul(ah1, bh2) | 0;
	    lo = lo + Math.imul(al0, bl3) | 0;
	    mid = mid + Math.imul(al0, bh3) | 0;
	    mid = mid + Math.imul(ah0, bl3) | 0;
	    hi = hi + Math.imul(ah0, bh3) | 0;
	    var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
	    w3 &= 0x3ffffff;
	    /* k = 4 */
	    lo = Math.imul(al4, bl0);
	    mid = Math.imul(al4, bh0);
	    mid = mid + Math.imul(ah4, bl0) | 0;
	    hi = Math.imul(ah4, bh0);
	    lo = lo + Math.imul(al3, bl1) | 0;
	    mid = mid + Math.imul(al3, bh1) | 0;
	    mid = mid + Math.imul(ah3, bl1) | 0;
	    hi = hi + Math.imul(ah3, bh1) | 0;
	    lo = lo + Math.imul(al2, bl2) | 0;
	    mid = mid + Math.imul(al2, bh2) | 0;
	    mid = mid + Math.imul(ah2, bl2) | 0;
	    hi = hi + Math.imul(ah2, bh2) | 0;
	    lo = lo + Math.imul(al1, bl3) | 0;
	    mid = mid + Math.imul(al1, bh3) | 0;
	    mid = mid + Math.imul(ah1, bl3) | 0;
	    hi = hi + Math.imul(ah1, bh3) | 0;
	    lo = lo + Math.imul(al0, bl4) | 0;
	    mid = mid + Math.imul(al0, bh4) | 0;
	    mid = mid + Math.imul(ah0, bl4) | 0;
	    hi = hi + Math.imul(ah0, bh4) | 0;
	    var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
	    w4 &= 0x3ffffff;
	    /* k = 5 */
	    lo = Math.imul(al5, bl0);
	    mid = Math.imul(al5, bh0);
	    mid = mid + Math.imul(ah5, bl0) | 0;
	    hi = Math.imul(ah5, bh0);
	    lo = lo + Math.imul(al4, bl1) | 0;
	    mid = mid + Math.imul(al4, bh1) | 0;
	    mid = mid + Math.imul(ah4, bl1) | 0;
	    hi = hi + Math.imul(ah4, bh1) | 0;
	    lo = lo + Math.imul(al3, bl2) | 0;
	    mid = mid + Math.imul(al3, bh2) | 0;
	    mid = mid + Math.imul(ah3, bl2) | 0;
	    hi = hi + Math.imul(ah3, bh2) | 0;
	    lo = lo + Math.imul(al2, bl3) | 0;
	    mid = mid + Math.imul(al2, bh3) | 0;
	    mid = mid + Math.imul(ah2, bl3) | 0;
	    hi = hi + Math.imul(ah2, bh3) | 0;
	    lo = lo + Math.imul(al1, bl4) | 0;
	    mid = mid + Math.imul(al1, bh4) | 0;
	    mid = mid + Math.imul(ah1, bl4) | 0;
	    hi = hi + Math.imul(ah1, bh4) | 0;
	    lo = lo + Math.imul(al0, bl5) | 0;
	    mid = mid + Math.imul(al0, bh5) | 0;
	    mid = mid + Math.imul(ah0, bl5) | 0;
	    hi = hi + Math.imul(ah0, bh5) | 0;
	    var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
	    w5 &= 0x3ffffff;
	    /* k = 6 */
	    lo = Math.imul(al6, bl0);
	    mid = Math.imul(al6, bh0);
	    mid = mid + Math.imul(ah6, bl0) | 0;
	    hi = Math.imul(ah6, bh0);
	    lo = lo + Math.imul(al5, bl1) | 0;
	    mid = mid + Math.imul(al5, bh1) | 0;
	    mid = mid + Math.imul(ah5, bl1) | 0;
	    hi = hi + Math.imul(ah5, bh1) | 0;
	    lo = lo + Math.imul(al4, bl2) | 0;
	    mid = mid + Math.imul(al4, bh2) | 0;
	    mid = mid + Math.imul(ah4, bl2) | 0;
	    hi = hi + Math.imul(ah4, bh2) | 0;
	    lo = lo + Math.imul(al3, bl3) | 0;
	    mid = mid + Math.imul(al3, bh3) | 0;
	    mid = mid + Math.imul(ah3, bl3) | 0;
	    hi = hi + Math.imul(ah3, bh3) | 0;
	    lo = lo + Math.imul(al2, bl4) | 0;
	    mid = mid + Math.imul(al2, bh4) | 0;
	    mid = mid + Math.imul(ah2, bl4) | 0;
	    hi = hi + Math.imul(ah2, bh4) | 0;
	    lo = lo + Math.imul(al1, bl5) | 0;
	    mid = mid + Math.imul(al1, bh5) | 0;
	    mid = mid + Math.imul(ah1, bl5) | 0;
	    hi = hi + Math.imul(ah1, bh5) | 0;
	    lo = lo + Math.imul(al0, bl6) | 0;
	    mid = mid + Math.imul(al0, bh6) | 0;
	    mid = mid + Math.imul(ah0, bl6) | 0;
	    hi = hi + Math.imul(ah0, bh6) | 0;
	    var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
	    w6 &= 0x3ffffff;
	    /* k = 7 */
	    lo = Math.imul(al7, bl0);
	    mid = Math.imul(al7, bh0);
	    mid = mid + Math.imul(ah7, bl0) | 0;
	    hi = Math.imul(ah7, bh0);
	    lo = lo + Math.imul(al6, bl1) | 0;
	    mid = mid + Math.imul(al6, bh1) | 0;
	    mid = mid + Math.imul(ah6, bl1) | 0;
	    hi = hi + Math.imul(ah6, bh1) | 0;
	    lo = lo + Math.imul(al5, bl2) | 0;
	    mid = mid + Math.imul(al5, bh2) | 0;
	    mid = mid + Math.imul(ah5, bl2) | 0;
	    hi = hi + Math.imul(ah5, bh2) | 0;
	    lo = lo + Math.imul(al4, bl3) | 0;
	    mid = mid + Math.imul(al4, bh3) | 0;
	    mid = mid + Math.imul(ah4, bl3) | 0;
	    hi = hi + Math.imul(ah4, bh3) | 0;
	    lo = lo + Math.imul(al3, bl4) | 0;
	    mid = mid + Math.imul(al3, bh4) | 0;
	    mid = mid + Math.imul(ah3, bl4) | 0;
	    hi = hi + Math.imul(ah3, bh4) | 0;
	    lo = lo + Math.imul(al2, bl5) | 0;
	    mid = mid + Math.imul(al2, bh5) | 0;
	    mid = mid + Math.imul(ah2, bl5) | 0;
	    hi = hi + Math.imul(ah2, bh5) | 0;
	    lo = lo + Math.imul(al1, bl6) | 0;
	    mid = mid + Math.imul(al1, bh6) | 0;
	    mid = mid + Math.imul(ah1, bl6) | 0;
	    hi = hi + Math.imul(ah1, bh6) | 0;
	    lo = lo + Math.imul(al0, bl7) | 0;
	    mid = mid + Math.imul(al0, bh7) | 0;
	    mid = mid + Math.imul(ah0, bl7) | 0;
	    hi = hi + Math.imul(ah0, bh7) | 0;
	    var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
	    w7 &= 0x3ffffff;
	    /* k = 8 */
	    lo = Math.imul(al8, bl0);
	    mid = Math.imul(al8, bh0);
	    mid = mid + Math.imul(ah8, bl0) | 0;
	    hi = Math.imul(ah8, bh0);
	    lo = lo + Math.imul(al7, bl1) | 0;
	    mid = mid + Math.imul(al7, bh1) | 0;
	    mid = mid + Math.imul(ah7, bl1) | 0;
	    hi = hi + Math.imul(ah7, bh1) | 0;
	    lo = lo + Math.imul(al6, bl2) | 0;
	    mid = mid + Math.imul(al6, bh2) | 0;
	    mid = mid + Math.imul(ah6, bl2) | 0;
	    hi = hi + Math.imul(ah6, bh2) | 0;
	    lo = lo + Math.imul(al5, bl3) | 0;
	    mid = mid + Math.imul(al5, bh3) | 0;
	    mid = mid + Math.imul(ah5, bl3) | 0;
	    hi = hi + Math.imul(ah5, bh3) | 0;
	    lo = lo + Math.imul(al4, bl4) | 0;
	    mid = mid + Math.imul(al4, bh4) | 0;
	    mid = mid + Math.imul(ah4, bl4) | 0;
	    hi = hi + Math.imul(ah4, bh4) | 0;
	    lo = lo + Math.imul(al3, bl5) | 0;
	    mid = mid + Math.imul(al3, bh5) | 0;
	    mid = mid + Math.imul(ah3, bl5) | 0;
	    hi = hi + Math.imul(ah3, bh5) | 0;
	    lo = lo + Math.imul(al2, bl6) | 0;
	    mid = mid + Math.imul(al2, bh6) | 0;
	    mid = mid + Math.imul(ah2, bl6) | 0;
	    hi = hi + Math.imul(ah2, bh6) | 0;
	    lo = lo + Math.imul(al1, bl7) | 0;
	    mid = mid + Math.imul(al1, bh7) | 0;
	    mid = mid + Math.imul(ah1, bl7) | 0;
	    hi = hi + Math.imul(ah1, bh7) | 0;
	    lo = lo + Math.imul(al0, bl8) | 0;
	    mid = mid + Math.imul(al0, bh8) | 0;
	    mid = mid + Math.imul(ah0, bl8) | 0;
	    hi = hi + Math.imul(ah0, bh8) | 0;
	    var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
	    w8 &= 0x3ffffff;
	    /* k = 9 */
	    lo = Math.imul(al9, bl0);
	    mid = Math.imul(al9, bh0);
	    mid = mid + Math.imul(ah9, bl0) | 0;
	    hi = Math.imul(ah9, bh0);
	    lo = lo + Math.imul(al8, bl1) | 0;
	    mid = mid + Math.imul(al8, bh1) | 0;
	    mid = mid + Math.imul(ah8, bl1) | 0;
	    hi = hi + Math.imul(ah8, bh1) | 0;
	    lo = lo + Math.imul(al7, bl2) | 0;
	    mid = mid + Math.imul(al7, bh2) | 0;
	    mid = mid + Math.imul(ah7, bl2) | 0;
	    hi = hi + Math.imul(ah7, bh2) | 0;
	    lo = lo + Math.imul(al6, bl3) | 0;
	    mid = mid + Math.imul(al6, bh3) | 0;
	    mid = mid + Math.imul(ah6, bl3) | 0;
	    hi = hi + Math.imul(ah6, bh3) | 0;
	    lo = lo + Math.imul(al5, bl4) | 0;
	    mid = mid + Math.imul(al5, bh4) | 0;
	    mid = mid + Math.imul(ah5, bl4) | 0;
	    hi = hi + Math.imul(ah5, bh4) | 0;
	    lo = lo + Math.imul(al4, bl5) | 0;
	    mid = mid + Math.imul(al4, bh5) | 0;
	    mid = mid + Math.imul(ah4, bl5) | 0;
	    hi = hi + Math.imul(ah4, bh5) | 0;
	    lo = lo + Math.imul(al3, bl6) | 0;
	    mid = mid + Math.imul(al3, bh6) | 0;
	    mid = mid + Math.imul(ah3, bl6) | 0;
	    hi = hi + Math.imul(ah3, bh6) | 0;
	    lo = lo + Math.imul(al2, bl7) | 0;
	    mid = mid + Math.imul(al2, bh7) | 0;
	    mid = mid + Math.imul(ah2, bl7) | 0;
	    hi = hi + Math.imul(ah2, bh7) | 0;
	    lo = lo + Math.imul(al1, bl8) | 0;
	    mid = mid + Math.imul(al1, bh8) | 0;
	    mid = mid + Math.imul(ah1, bl8) | 0;
	    hi = hi + Math.imul(ah1, bh8) | 0;
	    lo = lo + Math.imul(al0, bl9) | 0;
	    mid = mid + Math.imul(al0, bh9) | 0;
	    mid = mid + Math.imul(ah0, bl9) | 0;
	    hi = hi + Math.imul(ah0, bh9) | 0;
	    var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
	    w9 &= 0x3ffffff;
	    /* k = 10 */
	    lo = Math.imul(al9, bl1);
	    mid = Math.imul(al9, bh1);
	    mid = mid + Math.imul(ah9, bl1) | 0;
	    hi = Math.imul(ah9, bh1);
	    lo = lo + Math.imul(al8, bl2) | 0;
	    mid = mid + Math.imul(al8, bh2) | 0;
	    mid = mid + Math.imul(ah8, bl2) | 0;
	    hi = hi + Math.imul(ah8, bh2) | 0;
	    lo = lo + Math.imul(al7, bl3) | 0;
	    mid = mid + Math.imul(al7, bh3) | 0;
	    mid = mid + Math.imul(ah7, bl3) | 0;
	    hi = hi + Math.imul(ah7, bh3) | 0;
	    lo = lo + Math.imul(al6, bl4) | 0;
	    mid = mid + Math.imul(al6, bh4) | 0;
	    mid = mid + Math.imul(ah6, bl4) | 0;
	    hi = hi + Math.imul(ah6, bh4) | 0;
	    lo = lo + Math.imul(al5, bl5) | 0;
	    mid = mid + Math.imul(al5, bh5) | 0;
	    mid = mid + Math.imul(ah5, bl5) | 0;
	    hi = hi + Math.imul(ah5, bh5) | 0;
	    lo = lo + Math.imul(al4, bl6) | 0;
	    mid = mid + Math.imul(al4, bh6) | 0;
	    mid = mid + Math.imul(ah4, bl6) | 0;
	    hi = hi + Math.imul(ah4, bh6) | 0;
	    lo = lo + Math.imul(al3, bl7) | 0;
	    mid = mid + Math.imul(al3, bh7) | 0;
	    mid = mid + Math.imul(ah3, bl7) | 0;
	    hi = hi + Math.imul(ah3, bh7) | 0;
	    lo = lo + Math.imul(al2, bl8) | 0;
	    mid = mid + Math.imul(al2, bh8) | 0;
	    mid = mid + Math.imul(ah2, bl8) | 0;
	    hi = hi + Math.imul(ah2, bh8) | 0;
	    lo = lo + Math.imul(al1, bl9) | 0;
	    mid = mid + Math.imul(al1, bh9) | 0;
	    mid = mid + Math.imul(ah1, bl9) | 0;
	    hi = hi + Math.imul(ah1, bh9) | 0;
	    var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
	    w10 &= 0x3ffffff;
	    /* k = 11 */
	    lo = Math.imul(al9, bl2);
	    mid = Math.imul(al9, bh2);
	    mid = mid + Math.imul(ah9, bl2) | 0;
	    hi = Math.imul(ah9, bh2);
	    lo = lo + Math.imul(al8, bl3) | 0;
	    mid = mid + Math.imul(al8, bh3) | 0;
	    mid = mid + Math.imul(ah8, bl3) | 0;
	    hi = hi + Math.imul(ah8, bh3) | 0;
	    lo = lo + Math.imul(al7, bl4) | 0;
	    mid = mid + Math.imul(al7, bh4) | 0;
	    mid = mid + Math.imul(ah7, bl4) | 0;
	    hi = hi + Math.imul(ah7, bh4) | 0;
	    lo = lo + Math.imul(al6, bl5) | 0;
	    mid = mid + Math.imul(al6, bh5) | 0;
	    mid = mid + Math.imul(ah6, bl5) | 0;
	    hi = hi + Math.imul(ah6, bh5) | 0;
	    lo = lo + Math.imul(al5, bl6) | 0;
	    mid = mid + Math.imul(al5, bh6) | 0;
	    mid = mid + Math.imul(ah5, bl6) | 0;
	    hi = hi + Math.imul(ah5, bh6) | 0;
	    lo = lo + Math.imul(al4, bl7) | 0;
	    mid = mid + Math.imul(al4, bh7) | 0;
	    mid = mid + Math.imul(ah4, bl7) | 0;
	    hi = hi + Math.imul(ah4, bh7) | 0;
	    lo = lo + Math.imul(al3, bl8) | 0;
	    mid = mid + Math.imul(al3, bh8) | 0;
	    mid = mid + Math.imul(ah3, bl8) | 0;
	    hi = hi + Math.imul(ah3, bh8) | 0;
	    lo = lo + Math.imul(al2, bl9) | 0;
	    mid = mid + Math.imul(al2, bh9) | 0;
	    mid = mid + Math.imul(ah2, bl9) | 0;
	    hi = hi + Math.imul(ah2, bh9) | 0;
	    var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
	    w11 &= 0x3ffffff;
	    /* k = 12 */
	    lo = Math.imul(al9, bl3);
	    mid = Math.imul(al9, bh3);
	    mid = mid + Math.imul(ah9, bl3) | 0;
	    hi = Math.imul(ah9, bh3);
	    lo = lo + Math.imul(al8, bl4) | 0;
	    mid = mid + Math.imul(al8, bh4) | 0;
	    mid = mid + Math.imul(ah8, bl4) | 0;
	    hi = hi + Math.imul(ah8, bh4) | 0;
	    lo = lo + Math.imul(al7, bl5) | 0;
	    mid = mid + Math.imul(al7, bh5) | 0;
	    mid = mid + Math.imul(ah7, bl5) | 0;
	    hi = hi + Math.imul(ah7, bh5) | 0;
	    lo = lo + Math.imul(al6, bl6) | 0;
	    mid = mid + Math.imul(al6, bh6) | 0;
	    mid = mid + Math.imul(ah6, bl6) | 0;
	    hi = hi + Math.imul(ah6, bh6) | 0;
	    lo = lo + Math.imul(al5, bl7) | 0;
	    mid = mid + Math.imul(al5, bh7) | 0;
	    mid = mid + Math.imul(ah5, bl7) | 0;
	    hi = hi + Math.imul(ah5, bh7) | 0;
	    lo = lo + Math.imul(al4, bl8) | 0;
	    mid = mid + Math.imul(al4, bh8) | 0;
	    mid = mid + Math.imul(ah4, bl8) | 0;
	    hi = hi + Math.imul(ah4, bh8) | 0;
	    lo = lo + Math.imul(al3, bl9) | 0;
	    mid = mid + Math.imul(al3, bh9) | 0;
	    mid = mid + Math.imul(ah3, bl9) | 0;
	    hi = hi + Math.imul(ah3, bh9) | 0;
	    var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
	    w12 &= 0x3ffffff;
	    /* k = 13 */
	    lo = Math.imul(al9, bl4);
	    mid = Math.imul(al9, bh4);
	    mid = mid + Math.imul(ah9, bl4) | 0;
	    hi = Math.imul(ah9, bh4);
	    lo = lo + Math.imul(al8, bl5) | 0;
	    mid = mid + Math.imul(al8, bh5) | 0;
	    mid = mid + Math.imul(ah8, bl5) | 0;
	    hi = hi + Math.imul(ah8, bh5) | 0;
	    lo = lo + Math.imul(al7, bl6) | 0;
	    mid = mid + Math.imul(al7, bh6) | 0;
	    mid = mid + Math.imul(ah7, bl6) | 0;
	    hi = hi + Math.imul(ah7, bh6) | 0;
	    lo = lo + Math.imul(al6, bl7) | 0;
	    mid = mid + Math.imul(al6, bh7) | 0;
	    mid = mid + Math.imul(ah6, bl7) | 0;
	    hi = hi + Math.imul(ah6, bh7) | 0;
	    lo = lo + Math.imul(al5, bl8) | 0;
	    mid = mid + Math.imul(al5, bh8) | 0;
	    mid = mid + Math.imul(ah5, bl8) | 0;
	    hi = hi + Math.imul(ah5, bh8) | 0;
	    lo = lo + Math.imul(al4, bl9) | 0;
	    mid = mid + Math.imul(al4, bh9) | 0;
	    mid = mid + Math.imul(ah4, bl9) | 0;
	    hi = hi + Math.imul(ah4, bh9) | 0;
	    var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
	    w13 &= 0x3ffffff;
	    /* k = 14 */
	    lo = Math.imul(al9, bl5);
	    mid = Math.imul(al9, bh5);
	    mid = mid + Math.imul(ah9, bl5) | 0;
	    hi = Math.imul(ah9, bh5);
	    lo = lo + Math.imul(al8, bl6) | 0;
	    mid = mid + Math.imul(al8, bh6) | 0;
	    mid = mid + Math.imul(ah8, bl6) | 0;
	    hi = hi + Math.imul(ah8, bh6) | 0;
	    lo = lo + Math.imul(al7, bl7) | 0;
	    mid = mid + Math.imul(al7, bh7) | 0;
	    mid = mid + Math.imul(ah7, bl7) | 0;
	    hi = hi + Math.imul(ah7, bh7) | 0;
	    lo = lo + Math.imul(al6, bl8) | 0;
	    mid = mid + Math.imul(al6, bh8) | 0;
	    mid = mid + Math.imul(ah6, bl8) | 0;
	    hi = hi + Math.imul(ah6, bh8) | 0;
	    lo = lo + Math.imul(al5, bl9) | 0;
	    mid = mid + Math.imul(al5, bh9) | 0;
	    mid = mid + Math.imul(ah5, bl9) | 0;
	    hi = hi + Math.imul(ah5, bh9) | 0;
	    var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
	    w14 &= 0x3ffffff;
	    /* k = 15 */
	    lo = Math.imul(al9, bl6);
	    mid = Math.imul(al9, bh6);
	    mid = mid + Math.imul(ah9, bl6) | 0;
	    hi = Math.imul(ah9, bh6);
	    lo = lo + Math.imul(al8, bl7) | 0;
	    mid = mid + Math.imul(al8, bh7) | 0;
	    mid = mid + Math.imul(ah8, bl7) | 0;
	    hi = hi + Math.imul(ah8, bh7) | 0;
	    lo = lo + Math.imul(al7, bl8) | 0;
	    mid = mid + Math.imul(al7, bh8) | 0;
	    mid = mid + Math.imul(ah7, bl8) | 0;
	    hi = hi + Math.imul(ah7, bh8) | 0;
	    lo = lo + Math.imul(al6, bl9) | 0;
	    mid = mid + Math.imul(al6, bh9) | 0;
	    mid = mid + Math.imul(ah6, bl9) | 0;
	    hi = hi + Math.imul(ah6, bh9) | 0;
	    var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
	    w15 &= 0x3ffffff;
	    /* k = 16 */
	    lo = Math.imul(al9, bl7);
	    mid = Math.imul(al9, bh7);
	    mid = mid + Math.imul(ah9, bl7) | 0;
	    hi = Math.imul(ah9, bh7);
	    lo = lo + Math.imul(al8, bl8) | 0;
	    mid = mid + Math.imul(al8, bh8) | 0;
	    mid = mid + Math.imul(ah8, bl8) | 0;
	    hi = hi + Math.imul(ah8, bh8) | 0;
	    lo = lo + Math.imul(al7, bl9) | 0;
	    mid = mid + Math.imul(al7, bh9) | 0;
	    mid = mid + Math.imul(ah7, bl9) | 0;
	    hi = hi + Math.imul(ah7, bh9) | 0;
	    var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
	    w16 &= 0x3ffffff;
	    /* k = 17 */
	    lo = Math.imul(al9, bl8);
	    mid = Math.imul(al9, bh8);
	    mid = mid + Math.imul(ah9, bl8) | 0;
	    hi = Math.imul(ah9, bh8);
	    lo = lo + Math.imul(al8, bl9) | 0;
	    mid = mid + Math.imul(al8, bh9) | 0;
	    mid = mid + Math.imul(ah8, bl9) | 0;
	    hi = hi + Math.imul(ah8, bh9) | 0;
	    var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
	    w17 &= 0x3ffffff;
	    /* k = 18 */
	    lo = Math.imul(al9, bl9);
	    mid = Math.imul(al9, bh9);
	    mid = mid + Math.imul(ah9, bl9) | 0;
	    hi = Math.imul(ah9, bh9);
	    var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
	    c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
	    w18 &= 0x3ffffff;
	    o[0] = w0;
	    o[1] = w1;
	    o[2] = w2;
	    o[3] = w3;
	    o[4] = w4;
	    o[5] = w5;
	    o[6] = w6;
	    o[7] = w7;
	    o[8] = w8;
	    o[9] = w9;
	    o[10] = w10;
	    o[11] = w11;
	    o[12] = w12;
	    o[13] = w13;
	    o[14] = w14;
	    o[15] = w15;
	    o[16] = w16;
	    o[17] = w17;
	    o[18] = w18;
	    if (c !== 0) {
	      o[19] = c;
	      out.length++;
	    }
	    return out;
	  };

	  // Polyfill comb
	  if (!Math.imul) {
	    comb10MulTo = smallMulTo;
	  }

	  function bigMulTo(self, num, out) {
	    out.negative = num.negative ^ self.negative;
	    out.length = self.length + num.length;

	    var carry = 0;
	    var hncarry = 0;
	    for (var k = 0; k < out.length - 1; k++) {
	      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
	      // note that ncarry could be >= 0x3ffffff
	      var ncarry = hncarry;
	      hncarry = 0;
	      var rword = carry & 0x3ffffff;
	      var maxJ = Math.min(k, num.length - 1);
	      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
	        var i = k - j;
	        var a = self.words[i] | 0;
	        var b = num.words[j] | 0;
	        var r = a * b;

	        var lo = r & 0x3ffffff;
	        ncarry = ncarry + (r / 0x4000000 | 0) | 0;
	        lo = lo + rword | 0;
	        rword = lo & 0x3ffffff;
	        ncarry = ncarry + (lo >>> 26) | 0;

	        hncarry += ncarry >>> 26;
	        ncarry &= 0x3ffffff;
	      }
	      out.words[k] = rword;
	      carry = ncarry;
	      ncarry = hncarry;
	    }
	    if (carry !== 0) {
	      out.words[k] = carry;
	    } else {
	      out.length--;
	    }

	    return out.strip();
	  }

	  function jumboMulTo(self, num, out) {
	    var fftm = new FFTM();
	    return fftm.mulp(self, num, out);
	  }

	  BN.prototype.mulTo = function mulTo(num, out) {
	    var res;
	    var len = this.length + num.length;
	    if (this.length === 10 && num.length === 10) {
	      res = comb10MulTo(this, num, out);
	    } else if (len < 63) {
	      res = smallMulTo(this, num, out);
	    } else if (len < 1024) {
	      res = bigMulTo(this, num, out);
	    } else {
	      res = jumboMulTo(this, num, out);
	    }

	    return res;
	  };

	  // Cooley-Tukey algorithm for FFT
	  // slightly revisited to rely on looping instead of recursion

	  function FFTM(x, y) {
	    this.x = x;
	    this.y = y;
	  }

	  FFTM.prototype.makeRBT = function makeRBT(N) {
	    var t = new Array(N);
	    var l = BN.prototype._countBits(N) - 1;
	    for (var i = 0; i < N; i++) {
	      t[i] = this.revBin(i, l, N);
	    }

	    return t;
	  };

	  // Returns binary-reversed representation of `x`
	  FFTM.prototype.revBin = function revBin(x, l, N) {
	    if (x === 0 || x === N - 1) return x;

	    var rb = 0;
	    for (var i = 0; i < l; i++) {
	      rb |= (x & 1) << l - i - 1;
	      x >>= 1;
	    }

	    return rb;
	  };

	  // Performs "tweedling" phase, therefore 'emulating'
	  // behaviour of the recursive algorithm
	  FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
	    for (var i = 0; i < N; i++) {
	      rtws[i] = rws[rbt[i]];
	      itws[i] = iws[rbt[i]];
	    }
	  };

	  FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
	    this.permute(rbt, rws, iws, rtws, itws, N);

	    for (var s = 1; s < N; s <<= 1) {
	      var l = s << 1;

	      var rtwdf = Math.cos(2 * Math.PI / l);
	      var itwdf = Math.sin(2 * Math.PI / l);

	      for (var p = 0; p < N; p += l) {
	        var rtwdf_ = rtwdf;
	        var itwdf_ = itwdf;

	        for (var j = 0; j < s; j++) {
	          var re = rtws[p + j];
	          var ie = itws[p + j];

	          var ro = rtws[p + j + s];
	          var io = itws[p + j + s];

	          var rx = rtwdf_ * ro - itwdf_ * io;

	          io = rtwdf_ * io + itwdf_ * ro;
	          ro = rx;

	          rtws[p + j] = re + ro;
	          itws[p + j] = ie + io;

	          rtws[p + j + s] = re - ro;
	          itws[p + j + s] = ie - io;

	          /* jshint maxdepth : false */
	          if (j !== l) {
	            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

	            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
	            rtwdf_ = rx;
	          }
	        }
	      }
	    }
	  };

	  FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
	    var N = Math.max(m, n) | 1;
	    var odd = N & 1;
	    var i = 0;
	    for (N = N / 2 | 0; N; N = N >>> 1) {
	      i++;
	    }

	    return 1 << i + 1 + odd;
	  };

	  FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
	    if (N <= 1) return;

	    for (var i = 0; i < N / 2; i++) {
	      var t = rws[i];

	      rws[i] = rws[N - i - 1];
	      rws[N - i - 1] = t;

	      t = iws[i];

	      iws[i] = -iws[N - i - 1];
	      iws[N - i - 1] = -t;
	    }
	  };

	  FFTM.prototype.normalize13b = function normalize13b(ws, N) {
	    var carry = 0;
	    for (var i = 0; i < N / 2; i++) {
	      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;

	      ws[i] = w & 0x3ffffff;

	      if (w < 0x4000000) {
	        carry = 0;
	      } else {
	        carry = w / 0x4000000 | 0;
	      }
	    }

	    return ws;
	  };

	  FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
	    var carry = 0;
	    for (var i = 0; i < len; i++) {
	      carry = carry + (ws[i] | 0);

	      rws[2 * i] = carry & 0x1fff;carry = carry >>> 13;
	      rws[2 * i + 1] = carry & 0x1fff;carry = carry >>> 13;
	    }

	    // Pad with zeroes
	    for (i = 2 * len; i < N; ++i) {
	      rws[i] = 0;
	    }

	    assert(carry === 0);
	    assert((carry & ~0x1fff) === 0);
	  };

	  FFTM.prototype.stub = function stub(N) {
	    var ph = new Array(N);
	    for (var i = 0; i < N; i++) {
	      ph[i] = 0;
	    }

	    return ph;
	  };

	  FFTM.prototype.mulp = function mulp(x, y, out) {
	    var N = 2 * this.guessLen13b(x.length, y.length);

	    var rbt = this.makeRBT(N);

	    var _ = this.stub(N);

	    var rws = new Array(N);
	    var rwst = new Array(N);
	    var iwst = new Array(N);

	    var nrws = new Array(N);
	    var nrwst = new Array(N);
	    var niwst = new Array(N);

	    var rmws = out.words;
	    rmws.length = N;

	    this.convert13b(x.words, x.length, rws, N);
	    this.convert13b(y.words, y.length, nrws, N);

	    this.transform(rws, _, rwst, iwst, N, rbt);
	    this.transform(nrws, _, nrwst, niwst, N, rbt);

	    for (var i = 0; i < N; i++) {
	      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
	      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
	      rwst[i] = rx;
	    }

	    this.conjugate(rwst, iwst, N);
	    this.transform(rwst, iwst, rmws, _, N, rbt);
	    this.conjugate(rmws, _, N);
	    this.normalize13b(rmws, N);

	    out.negative = x.negative ^ y.negative;
	    out.length = x.length + y.length;
	    return out.strip();
	  };

	  // Multiply `this` by `num`
	  BN.prototype.mul = function mul(num) {
	    var out = new BN(null);
	    out.words = new Array(this.length + num.length);
	    return this.mulTo(num, out);
	  };

	  // Multiply employing FFT
	  BN.prototype.mulf = function mulf(num) {
	    var out = new BN(null);
	    out.words = new Array(this.length + num.length);
	    return jumboMulTo(this, num, out);
	  };

	  // In-place Multiplication
	  BN.prototype.imul = function imul(num) {
	    return this.clone().mulTo(num, this);
	  };

	  BN.prototype.imuln = function imuln(num) {
	    assert(typeof num === 'number');
	    assert(num < 0x4000000);

	    // Carry
	    var carry = 0;
	    for (var i = 0; i < this.length; i++) {
	      var w = (this.words[i] | 0) * num;
	      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
	      carry >>= 26;
	      carry += w / 0x4000000 | 0;
	      // NOTE: lo is 27bit maximum
	      carry += lo >>> 26;
	      this.words[i] = lo & 0x3ffffff;
	    }

	    if (carry !== 0) {
	      this.words[i] = carry;
	      this.length++;
	    }

	    return this;
	  };

	  BN.prototype.muln = function muln(num) {
	    return this.clone().imuln(num);
	  };

	  // `this` * `this`
	  BN.prototype.sqr = function sqr() {
	    return this.mul(this);
	  };

	  // `this` * `this` in-place
	  BN.prototype.isqr = function isqr() {
	    return this.imul(this.clone());
	  };

	  // Math.pow(`this`, `num`)
	  BN.prototype.pow = function pow(num) {
	    var w = toBitArray(num);
	    if (w.length === 0) return new BN(1);

	    // Skip leading zeroes
	    var res = this;
	    for (var i = 0; i < w.length; i++, res = res.sqr()) {
	      if (w[i] !== 0) break;
	    }

	    if (++i < w.length) {
	      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
	        if (w[i] === 0) continue;

	        res = res.mul(q);
	      }
	    }

	    return res;
	  };

	  // Shift-left in-place
	  BN.prototype.iushln = function iushln(bits) {
	    assert(typeof bits === 'number' && bits >= 0);
	    var r = bits % 26;
	    var s = (bits - r) / 26;
	    var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
	    var i;

	    if (r !== 0) {
	      var carry = 0;

	      for (i = 0; i < this.length; i++) {
	        var newCarry = this.words[i] & carryMask;
	        var c = (this.words[i] | 0) - newCarry << r;
	        this.words[i] = c | carry;
	        carry = newCarry >>> 26 - r;
	      }

	      if (carry) {
	        this.words[i] = carry;
	        this.length++;
	      }
	    }

	    if (s !== 0) {
	      for (i = this.length - 1; i >= 0; i--) {
	        this.words[i + s] = this.words[i];
	      }

	      for (i = 0; i < s; i++) {
	        this.words[i] = 0;
	      }

	      this.length += s;
	    }

	    return this.strip();
	  };

	  BN.prototype.ishln = function ishln(bits) {
	    // TODO(indutny): implement me
	    assert(this.negative === 0);
	    return this.iushln(bits);
	  };

	  // Shift-right in-place
	  // NOTE: `hint` is a lowest bit before trailing zeroes
	  // NOTE: if `extended` is present - it will be filled with destroyed bits
	  BN.prototype.iushrn = function iushrn(bits, hint, extended) {
	    assert(typeof bits === 'number' && bits >= 0);
	    var h;
	    if (hint) {
	      h = (hint - hint % 26) / 26;
	    } else {
	      h = 0;
	    }

	    var r = bits % 26;
	    var s = Math.min((bits - r) / 26, this.length);
	    var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
	    var maskedWords = extended;

	    h -= s;
	    h = Math.max(0, h);

	    // Extended mode, copy masked part
	    if (maskedWords) {
	      for (var i = 0; i < s; i++) {
	        maskedWords.words[i] = this.words[i];
	      }
	      maskedWords.length = s;
	    }

	    if (s === 0) {
	      // No-op, we should not move anything at all
	    } else if (this.length > s) {
	      this.length -= s;
	      for (i = 0; i < this.length; i++) {
	        this.words[i] = this.words[i + s];
	      }
	    } else {
	      this.words[0] = 0;
	      this.length = 1;
	    }

	    var carry = 0;
	    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
	      var word = this.words[i] | 0;
	      this.words[i] = carry << 26 - r | word >>> r;
	      carry = word & mask;
	    }

	    // Push carried bits as a mask
	    if (maskedWords && carry !== 0) {
	      maskedWords.words[maskedWords.length++] = carry;
	    }

	    if (this.length === 0) {
	      this.words[0] = 0;
	      this.length = 1;
	    }

	    return this.strip();
	  };

	  BN.prototype.ishrn = function ishrn(bits, hint, extended) {
	    // TODO(indutny): implement me
	    assert(this.negative === 0);
	    return this.iushrn(bits, hint, extended);
	  };

	  // Shift-left
	  BN.prototype.shln = function shln(bits) {
	    return this.clone().ishln(bits);
	  };

	  BN.prototype.ushln = function ushln(bits) {
	    return this.clone().iushln(bits);
	  };

	  // Shift-right
	  BN.prototype.shrn = function shrn(bits) {
	    return this.clone().ishrn(bits);
	  };

	  BN.prototype.ushrn = function ushrn(bits) {
	    return this.clone().iushrn(bits);
	  };

	  // Test if n bit is set
	  BN.prototype.testn = function testn(bit) {
	    assert(typeof bit === 'number' && bit >= 0);
	    var r = bit % 26;
	    var s = (bit - r) / 26;
	    var q = 1 << r;

	    // Fast case: bit is much higher than all existing words
	    if (this.length <= s) return false;

	    // Check bit and return
	    var w = this.words[s];

	    return !!(w & q);
	  };

	  // Return only lowers bits of number (in-place)
	  BN.prototype.imaskn = function imaskn(bits) {
	    assert(typeof bits === 'number' && bits >= 0);
	    var r = bits % 26;
	    var s = (bits - r) / 26;

	    assert(this.negative === 0, 'imaskn works only with positive numbers');

	    if (this.length <= s) {
	      return this;
	    }

	    if (r !== 0) {
	      s++;
	    }
	    this.length = Math.min(s, this.length);

	    if (r !== 0) {
	      var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
	      this.words[this.length - 1] &= mask;
	    }

	    return this.strip();
	  };

	  // Return only lowers bits of number
	  BN.prototype.maskn = function maskn(bits) {
	    return this.clone().imaskn(bits);
	  };

	  // Add plain number `num` to `this`
	  BN.prototype.iaddn = function iaddn(num) {
	    assert(typeof num === 'number');
	    assert(num < 0x4000000);
	    if (num < 0) return this.isubn(-num);

	    // Possible sign change
	    if (this.negative !== 0) {
	      if (this.length === 1 && (this.words[0] | 0) < num) {
	        this.words[0] = num - (this.words[0] | 0);
	        this.negative = 0;
	        return this;
	      }

	      this.negative = 0;
	      this.isubn(num);
	      this.negative = 1;
	      return this;
	    }

	    // Add without checks
	    return this._iaddn(num);
	  };

	  BN.prototype._iaddn = function _iaddn(num) {
	    this.words[0] += num;

	    // Carry
	    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
	      this.words[i] -= 0x4000000;
	      if (i === this.length - 1) {
	        this.words[i + 1] = 1;
	      } else {
	        this.words[i + 1]++;
	      }
	    }
	    this.length = Math.max(this.length, i + 1);

	    return this;
	  };

	  // Subtract plain number `num` from `this`
	  BN.prototype.isubn = function isubn(num) {
	    assert(typeof num === 'number');
	    assert(num < 0x4000000);
	    if (num < 0) return this.iaddn(-num);

	    if (this.negative !== 0) {
	      this.negative = 0;
	      this.iaddn(num);
	      this.negative = 1;
	      return this;
	    }

	    this.words[0] -= num;

	    if (this.length === 1 && this.words[0] < 0) {
	      this.words[0] = -this.words[0];
	      this.negative = 1;
	    } else {
	      // Carry
	      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
	        this.words[i] += 0x4000000;
	        this.words[i + 1] -= 1;
	      }
	    }

	    return this.strip();
	  };

	  BN.prototype.addn = function addn(num) {
	    return this.clone().iaddn(num);
	  };

	  BN.prototype.subn = function subn(num) {
	    return this.clone().isubn(num);
	  };

	  BN.prototype.iabs = function iabs() {
	    this.negative = 0;

	    return this;
	  };

	  BN.prototype.abs = function abs() {
	    return this.clone().iabs();
	  };

	  BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
	    var len = num.length + shift;
	    var i;

	    this._expand(len);

	    var w;
	    var carry = 0;
	    for (i = 0; i < num.length; i++) {
	      w = (this.words[i + shift] | 0) + carry;
	      var right = (num.words[i] | 0) * mul;
	      w -= right & 0x3ffffff;
	      carry = (w >> 26) - (right / 0x4000000 | 0);
	      this.words[i + shift] = w & 0x3ffffff;
	    }
	    for (; i < this.length - shift; i++) {
	      w = (this.words[i + shift] | 0) + carry;
	      carry = w >> 26;
	      this.words[i + shift] = w & 0x3ffffff;
	    }

	    if (carry === 0) return this.strip();

	    // Subtraction overflow
	    assert(carry === -1);
	    carry = 0;
	    for (i = 0; i < this.length; i++) {
	      w = -(this.words[i] | 0) + carry;
	      carry = w >> 26;
	      this.words[i] = w & 0x3ffffff;
	    }
	    this.negative = 1;

	    return this.strip();
	  };

	  BN.prototype._wordDiv = function _wordDiv(num, mode) {
	    var shift = this.length - num.length;

	    var a = this.clone();
	    var b = num;

	    // Normalize
	    var bhi = b.words[b.length - 1] | 0;
	    var bhiBits = this._countBits(bhi);
	    shift = 26 - bhiBits;
	    if (shift !== 0) {
	      b = b.ushln(shift);
	      a.iushln(shift);
	      bhi = b.words[b.length - 1] | 0;
	    }

	    // Initialize quotient
	    var m = a.length - b.length;
	    var q;

	    if (mode !== 'mod') {
	      q = new BN(null);
	      q.length = m + 1;
	      q.words = new Array(q.length);
	      for (var i = 0; i < q.length; i++) {
	        q.words[i] = 0;
	      }
	    }

	    var diff = a.clone()._ishlnsubmul(b, 1, m);
	    if (diff.negative === 0) {
	      a = diff;
	      if (q) {
	        q.words[m] = 1;
	      }
	    }

	    for (var j = m - 1; j >= 0; j--) {
	      var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0);

	      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
	      // (0x7ffffff)
	      qj = Math.min(qj / bhi | 0, 0x3ffffff);

	      a._ishlnsubmul(b, qj, j);
	      while (a.negative !== 0) {
	        qj--;
	        a.negative = 0;
	        a._ishlnsubmul(b, 1, j);
	        if (!a.isZero()) {
	          a.negative ^= 1;
	        }
	      }
	      if (q) {
	        q.words[j] = qj;
	      }
	    }
	    if (q) {
	      q.strip();
	    }
	    a.strip();

	    // Denormalize
	    if (mode !== 'div' && shift !== 0) {
	      a.iushrn(shift);
	    }

	    return {
	      div: q || null,
	      mod: a
	    };
	  };

	  // NOTE: 1) `mode` can be set to `mod` to request mod only,
	  //       to `div` to request div only, or be absent to
	  //       request both div & mod
	  //       2) `positive` is true if unsigned mod is requested
	  BN.prototype.divmod = function divmod(num, mode, positive) {
	    assert(!num.isZero());

	    if (this.isZero()) {
	      return {
	        div: new BN(0),
	        mod: new BN(0)
	      };
	    }

	    var div, mod, res;
	    if (this.negative !== 0 && num.negative === 0) {
	      res = this.neg().divmod(num, mode);

	      if (mode !== 'mod') {
	        div = res.div.neg();
	      }

	      if (mode !== 'div') {
	        mod = res.mod.neg();
	        if (positive && mod.negative !== 0) {
	          mod.iadd(num);
	        }
	      }

	      return {
	        div: div,
	        mod: mod
	      };
	    }

	    if (this.negative === 0 && num.negative !== 0) {
	      res = this.divmod(num.neg(), mode);

	      if (mode !== 'mod') {
	        div = res.div.neg();
	      }

	      return {
	        div: div,
	        mod: res.mod
	      };
	    }

	    if ((this.negative & num.negative) !== 0) {
	      res = this.neg().divmod(num.neg(), mode);

	      if (mode !== 'div') {
	        mod = res.mod.neg();
	        if (positive && mod.negative !== 0) {
	          mod.isub(num);
	        }
	      }

	      return {
	        div: res.div,
	        mod: mod
	      };
	    }

	    // Both numbers are positive at this point

	    // Strip both numbers to approximate shift value
	    if (num.length > this.length || this.cmp(num) < 0) {
	      return {
	        div: new BN(0),
	        mod: this
	      };
	    }

	    // Very short reduction
	    if (num.length === 1) {
	      if (mode === 'div') {
	        return {
	          div: this.divn(num.words[0]),
	          mod: null
	        };
	      }

	      if (mode === 'mod') {
	        return {
	          div: null,
	          mod: new BN(this.modn(num.words[0]))
	        };
	      }

	      return {
	        div: this.divn(num.words[0]),
	        mod: new BN(this.modn(num.words[0]))
	      };
	    }

	    return this._wordDiv(num, mode);
	  };

	  // Find `this` / `num`
	  BN.prototype.div = function div(num) {
	    return this.divmod(num, 'div', false).div;
	  };

	  // Find `this` % `num`
	  BN.prototype.mod = function mod(num) {
	    return this.divmod(num, 'mod', false).mod;
	  };

	  BN.prototype.umod = function umod(num) {
	    return this.divmod(num, 'mod', true).mod;
	  };

	  // Find Round(`this` / `num`)
	  BN.prototype.divRound = function divRound(num) {
	    var dm = this.divmod(num);

	    // Fast case - exact division
	    if (dm.mod.isZero()) return dm.div;

	    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

	    var half = num.ushrn(1);
	    var r2 = num.andln(1);
	    var cmp = mod.cmp(half);

	    // Round down
	    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

	    // Round up
	    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
	  };

	  BN.prototype.modn = function modn(num) {
	    assert(num <= 0x3ffffff);
	    var p = (1 << 26) % num;

	    var acc = 0;
	    for (var i = this.length - 1; i >= 0; i--) {
	      acc = (p * acc + (this.words[i] | 0)) % num;
	    }

	    return acc;
	  };

	  // In-place division by number
	  BN.prototype.idivn = function idivn(num) {
	    assert(num <= 0x3ffffff);

	    var carry = 0;
	    for (var i = this.length - 1; i >= 0; i--) {
	      var w = (this.words[i] | 0) + carry * 0x4000000;
	      this.words[i] = w / num | 0;
	      carry = w % num;
	    }

	    return this.strip();
	  };

	  BN.prototype.divn = function divn(num) {
	    return this.clone().idivn(num);
	  };

	  BN.prototype.egcd = function egcd(p) {
	    assert(p.negative === 0);
	    assert(!p.isZero());

	    var x = this;
	    var y = p.clone();

	    if (x.negative !== 0) {
	      x = x.umod(p);
	    } else {
	      x = x.clone();
	    }

	    // A * x + B * y = x
	    var A = new BN(1);
	    var B = new BN(0);

	    // C * x + D * y = y
	    var C = new BN(0);
	    var D = new BN(1);

	    var g = 0;

	    while (x.isEven() && y.isEven()) {
	      x.iushrn(1);
	      y.iushrn(1);
	      ++g;
	    }

	    var yp = y.clone();
	    var xp = x.clone();

	    while (!x.isZero()) {
	      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {}
	      if (i > 0) {
	        x.iushrn(i);
	        while (i-- > 0) {
	          if (A.isOdd() || B.isOdd()) {
	            A.iadd(yp);
	            B.isub(xp);
	          }

	          A.iushrn(1);
	          B.iushrn(1);
	        }
	      }

	      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {}
	      if (j > 0) {
	        y.iushrn(j);
	        while (j-- > 0) {
	          if (C.isOdd() || D.isOdd()) {
	            C.iadd(yp);
	            D.isub(xp);
	          }

	          C.iushrn(1);
	          D.iushrn(1);
	        }
	      }

	      if (x.cmp(y) >= 0) {
	        x.isub(y);
	        A.isub(C);
	        B.isub(D);
	      } else {
	        y.isub(x);
	        C.isub(A);
	        D.isub(B);
	      }
	    }

	    return {
	      a: C,
	      b: D,
	      gcd: y.iushln(g)
	    };
	  };

	  // This is reduced incarnation of the binary EEA
	  // above, designated to invert members of the
	  // _prime_ fields F(p) at a maximal speed
	  BN.prototype._invmp = function _invmp(p) {
	    assert(p.negative === 0);
	    assert(!p.isZero());

	    var a = this;
	    var b = p.clone();

	    if (a.negative !== 0) {
	      a = a.umod(p);
	    } else {
	      a = a.clone();
	    }

	    var x1 = new BN(1);
	    var x2 = new BN(0);

	    var delta = b.clone();

	    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
	      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1) {}
	      if (i > 0) {
	        a.iushrn(i);
	        while (i-- > 0) {
	          if (x1.isOdd()) {
	            x1.iadd(delta);
	          }

	          x1.iushrn(1);
	        }
	      }

	      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1) {}
	      if (j > 0) {
	        b.iushrn(j);
	        while (j-- > 0) {
	          if (x2.isOdd()) {
	            x2.iadd(delta);
	          }

	          x2.iushrn(1);
	        }
	      }

	      if (a.cmp(b) >= 0) {
	        a.isub(b);
	        x1.isub(x2);
	      } else {
	        b.isub(a);
	        x2.isub(x1);
	      }
	    }

	    var res;
	    if (a.cmpn(1) === 0) {
	      res = x1;
	    } else {
	      res = x2;
	    }

	    if (res.cmpn(0) < 0) {
	      res.iadd(p);
	    }

	    return res;
	  };

	  BN.prototype.gcd = function gcd(num) {
	    if (this.isZero()) return num.abs();
	    if (num.isZero()) return this.abs();

	    var a = this.clone();
	    var b = num.clone();
	    a.negative = 0;
	    b.negative = 0;

	    // Remove common factor of two
	    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
	      a.iushrn(1);
	      b.iushrn(1);
	    }

	    do {
	      while (a.isEven()) {
	        a.iushrn(1);
	      }
	      while (b.isEven()) {
	        b.iushrn(1);
	      }

	      var r = a.cmp(b);
	      if (r < 0) {
	        // Swap `a` and `b` to make `a` always bigger than `b`
	        var t = a;
	        a = b;
	        b = t;
	      } else if (r === 0 || b.cmpn(1) === 0) {
	        break;
	      }

	      a.isub(b);
	    } while (true);

	    return b.iushln(shift);
	  };

	  // Invert number in the field F(num)
	  BN.prototype.invm = function invm(num) {
	    return this.egcd(num).a.umod(num);
	  };

	  BN.prototype.isEven = function isEven() {
	    return (this.words[0] & 1) === 0;
	  };

	  BN.prototype.isOdd = function isOdd() {
	    return (this.words[0] & 1) === 1;
	  };

	  // And first word and num
	  BN.prototype.andln = function andln(num) {
	    return this.words[0] & num;
	  };

	  // Increment at the bit position in-line
	  BN.prototype.bincn = function bincn(bit) {
	    assert(typeof bit === 'number');
	    var r = bit % 26;
	    var s = (bit - r) / 26;
	    var q = 1 << r;

	    // Fast case: bit is much higher than all existing words
	    if (this.length <= s) {
	      this._expand(s + 1);
	      this.words[s] |= q;
	      return this;
	    }

	    // Add bit and propagate, if needed
	    var carry = q;
	    for (var i = s; carry !== 0 && i < this.length; i++) {
	      var w = this.words[i] | 0;
	      w += carry;
	      carry = w >>> 26;
	      w &= 0x3ffffff;
	      this.words[i] = w;
	    }
	    if (carry !== 0) {
	      this.words[i] = carry;
	      this.length++;
	    }
	    return this;
	  };

	  BN.prototype.isZero = function isZero() {
	    return this.length === 1 && this.words[0] === 0;
	  };

	  BN.prototype.cmpn = function cmpn(num) {
	    var negative = num < 0;

	    if (this.negative !== 0 && !negative) return -1;
	    if (this.negative === 0 && negative) return 1;

	    this.strip();

	    var res;
	    if (this.length > 1) {
	      res = 1;
	    } else {
	      if (negative) {
	        num = -num;
	      }

	      assert(num <= 0x3ffffff, 'Number is too big');

	      var w = this.words[0] | 0;
	      res = w === num ? 0 : w < num ? -1 : 1;
	    }
	    if (this.negative !== 0) return -res | 0;
	    return res;
	  };

	  // Compare two numbers and return:
	  // 1 - if `this` > `num`
	  // 0 - if `this` == `num`
	  // -1 - if `this` < `num`
	  BN.prototype.cmp = function cmp(num) {
	    if (this.negative !== 0 && num.negative === 0) return -1;
	    if (this.negative === 0 && num.negative !== 0) return 1;

	    var res = this.ucmp(num);
	    if (this.negative !== 0) return -res | 0;
	    return res;
	  };

	  // Unsigned comparison
	  BN.prototype.ucmp = function ucmp(num) {
	    // At this point both numbers have the same sign
	    if (this.length > num.length) return 1;
	    if (this.length < num.length) return -1;

	    var res = 0;
	    for (var i = this.length - 1; i >= 0; i--) {
	      var a = this.words[i] | 0;
	      var b = num.words[i] | 0;

	      if (a === b) continue;
	      if (a < b) {
	        res = -1;
	      } else if (a > b) {
	        res = 1;
	      }
	      break;
	    }
	    return res;
	  };

	  BN.prototype.gtn = function gtn(num) {
	    return this.cmpn(num) === 1;
	  };

	  BN.prototype.gt = function gt(num) {
	    return this.cmp(num) === 1;
	  };

	  BN.prototype.gten = function gten(num) {
	    return this.cmpn(num) >= 0;
	  };

	  BN.prototype.gte = function gte(num) {
	    return this.cmp(num) >= 0;
	  };

	  BN.prototype.ltn = function ltn(num) {
	    return this.cmpn(num) === -1;
	  };

	  BN.prototype.lt = function lt(num) {
	    return this.cmp(num) === -1;
	  };

	  BN.prototype.lten = function lten(num) {
	    return this.cmpn(num) <= 0;
	  };

	  BN.prototype.lte = function lte(num) {
	    return this.cmp(num) <= 0;
	  };

	  BN.prototype.eqn = function eqn(num) {
	    return this.cmpn(num) === 0;
	  };

	  BN.prototype.eq = function eq(num) {
	    return this.cmp(num) === 0;
	  };

	  //
	  // A reduce context, could be using montgomery or something better, depending
	  // on the `m` itself.
	  //
	  BN.red = function red(num) {
	    return new Red(num);
	  };

	  BN.prototype.toRed = function toRed(ctx) {
	    assert(!this.red, 'Already a number in reduction context');
	    assert(this.negative === 0, 'red works only with positives');
	    return ctx.convertTo(this)._forceRed(ctx);
	  };

	  BN.prototype.fromRed = function fromRed() {
	    assert(this.red, 'fromRed works only with numbers in reduction context');
	    return this.red.convertFrom(this);
	  };

	  BN.prototype._forceRed = function _forceRed(ctx) {
	    this.red = ctx;
	    return this;
	  };

	  BN.prototype.forceRed = function forceRed(ctx) {
	    assert(!this.red, 'Already a number in reduction context');
	    return this._forceRed(ctx);
	  };

	  BN.prototype.redAdd = function redAdd(num) {
	    assert(this.red, 'redAdd works only with red numbers');
	    return this.red.add(this, num);
	  };

	  BN.prototype.redIAdd = function redIAdd(num) {
	    assert(this.red, 'redIAdd works only with red numbers');
	    return this.red.iadd(this, num);
	  };

	  BN.prototype.redSub = function redSub(num) {
	    assert(this.red, 'redSub works only with red numbers');
	    return this.red.sub(this, num);
	  };

	  BN.prototype.redISub = function redISub(num) {
	    assert(this.red, 'redISub works only with red numbers');
	    return this.red.isub(this, num);
	  };

	  BN.prototype.redShl = function redShl(num) {
	    assert(this.red, 'redShl works only with red numbers');
	    return this.red.shl(this, num);
	  };

	  BN.prototype.redMul = function redMul(num) {
	    assert(this.red, 'redMul works only with red numbers');
	    this.red._verify2(this, num);
	    return this.red.mul(this, num);
	  };

	  BN.prototype.redIMul = function redIMul(num) {
	    assert(this.red, 'redMul works only with red numbers');
	    this.red._verify2(this, num);
	    return this.red.imul(this, num);
	  };

	  BN.prototype.redSqr = function redSqr() {
	    assert(this.red, 'redSqr works only with red numbers');
	    this.red._verify1(this);
	    return this.red.sqr(this);
	  };

	  BN.prototype.redISqr = function redISqr() {
	    assert(this.red, 'redISqr works only with red numbers');
	    this.red._verify1(this);
	    return this.red.isqr(this);
	  };

	  // Square root over p
	  BN.prototype.redSqrt = function redSqrt() {
	    assert(this.red, 'redSqrt works only with red numbers');
	    this.red._verify1(this);
	    return this.red.sqrt(this);
	  };

	  BN.prototype.redInvm = function redInvm() {
	    assert(this.red, 'redInvm works only with red numbers');
	    this.red._verify1(this);
	    return this.red.invm(this);
	  };

	  // Return negative clone of `this` % `red modulo`
	  BN.prototype.redNeg = function redNeg() {
	    assert(this.red, 'redNeg works only with red numbers');
	    this.red._verify1(this);
	    return this.red.neg(this);
	  };

	  BN.prototype.redPow = function redPow(num) {
	    assert(this.red && !num.red, 'redPow(normalNum)');
	    this.red._verify1(this);
	    return this.red.pow(this, num);
	  };

	  // Prime numbers with efficient reduction
	  var primes = {
	    k256: null,
	    p224: null,
	    p192: null,
	    p25519: null
	  };

	  // Pseudo-Mersenne prime
	  function MPrime(name, p) {
	    // P = 2 ^ N - K
	    this.name = name;
	    this.p = new BN(p, 16);
	    this.n = this.p.bitLength();
	    this.k = new BN(1).iushln(this.n).isub(this.p);

	    this.tmp = this._tmp();
	  }

	  MPrime.prototype._tmp = function _tmp() {
	    var tmp = new BN(null);
	    tmp.words = new Array(Math.ceil(this.n / 13));
	    return tmp;
	  };

	  MPrime.prototype.ireduce = function ireduce(num) {
	    // Assumes that `num` is less than `P^2`
	    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
	    var r = num;
	    var rlen;

	    do {
	      this.split(r, this.tmp);
	      r = this.imulK(r);
	      r = r.iadd(this.tmp);
	      rlen = r.bitLength();
	    } while (rlen > this.n);

	    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
	    if (cmp === 0) {
	      r.words[0] = 0;
	      r.length = 1;
	    } else if (cmp > 0) {
	      r.isub(this.p);
	    } else {
	      r.strip();
	    }

	    return r;
	  };

	  MPrime.prototype.split = function split(input, out) {
	    input.iushrn(this.n, 0, out);
	  };

	  MPrime.prototype.imulK = function imulK(num) {
	    return num.imul(this.k);
	  };

	  function K256() {
	    MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
	  }
	  inherits(K256, MPrime);

	  K256.prototype.split = function split(input, output) {
	    // 256 = 9 * 26 + 22
	    var mask = 0x3fffff;

	    var outLen = Math.min(input.length, 9);
	    for (var i = 0; i < outLen; i++) {
	      output.words[i] = input.words[i];
	    }
	    output.length = outLen;

	    if (input.length <= 9) {
	      input.words[0] = 0;
	      input.length = 1;
	      return;
	    }

	    // Shift by 9 limbs
	    var prev = input.words[9];
	    output.words[output.length++] = prev & mask;

	    for (i = 10; i < input.length; i++) {
	      var next = input.words[i] | 0;
	      input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
	      prev = next;
	    }
	    prev >>>= 22;
	    input.words[i - 10] = prev;
	    if (prev === 0 && input.length > 10) {
	      input.length -= 10;
	    } else {
	      input.length -= 9;
	    }
	  };

	  K256.prototype.imulK = function imulK(num) {
	    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
	    num.words[num.length] = 0;
	    num.words[num.length + 1] = 0;
	    num.length += 2;

	    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
	    var lo = 0;
	    for (var i = 0; i < num.length; i++) {
	      var w = num.words[i] | 0;
	      lo += w * 0x3d1;
	      num.words[i] = lo & 0x3ffffff;
	      lo = w * 0x40 + (lo / 0x4000000 | 0);
	    }

	    // Fast length reduction
	    if (num.words[num.length - 1] === 0) {
	      num.length--;
	      if (num.words[num.length - 1] === 0) {
	        num.length--;
	      }
	    }
	    return num;
	  };

	  function P224() {
	    MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
	  }
	  inherits(P224, MPrime);

	  function P192() {
	    MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
	  }
	  inherits(P192, MPrime);

	  function P25519() {
	    // 2 ^ 255 - 19
	    MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
	  }
	  inherits(P25519, MPrime);

	  P25519.prototype.imulK = function imulK(num) {
	    // K = 0x13
	    var carry = 0;
	    for (var i = 0; i < num.length; i++) {
	      var hi = (num.words[i] | 0) * 0x13 + carry;
	      var lo = hi & 0x3ffffff;
	      hi >>>= 26;

	      num.words[i] = lo;
	      carry = hi;
	    }
	    if (carry !== 0) {
	      num.words[num.length++] = carry;
	    }
	    return num;
	  };

	  // Exported mostly for testing purposes, use plain name instead
	  BN._prime = function prime(name) {
	    // Cached version of prime
	    if (primes[name]) return primes[name];

	    var prime;
	    if (name === 'k256') {
	      prime = new K256();
	    } else if (name === 'p224') {
	      prime = new P224();
	    } else if (name === 'p192') {
	      prime = new P192();
	    } else if (name === 'p25519') {
	      prime = new P25519();
	    } else {
	      throw new Error('Unknown prime ' + name);
	    }
	    primes[name] = prime;

	    return prime;
	  };

	  //
	  // Base reduction engine
	  //
	  function Red(m) {
	    if (typeof m === 'string') {
	      var prime = BN._prime(m);
	      this.m = prime.p;
	      this.prime = prime;
	    } else {
	      assert(m.gtn(1), 'modulus must be greater than 1');
	      this.m = m;
	      this.prime = null;
	    }
	  }

	  Red.prototype._verify1 = function _verify1(a) {
	    assert(a.negative === 0, 'red works only with positives');
	    assert(a.red, 'red works only with red numbers');
	  };

	  Red.prototype._verify2 = function _verify2(a, b) {
	    assert((a.negative | b.negative) === 0, 'red works only with positives');
	    assert(a.red && a.red === b.red, 'red works only with red numbers');
	  };

	  Red.prototype.imod = function imod(a) {
	    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
	    return a.umod(this.m)._forceRed(this);
	  };

	  Red.prototype.neg = function neg(a) {
	    if (a.isZero()) {
	      return a.clone();
	    }

	    return this.m.sub(a)._forceRed(this);
	  };

	  Red.prototype.add = function add(a, b) {
	    this._verify2(a, b);

	    var res = a.add(b);
	    if (res.cmp(this.m) >= 0) {
	      res.isub(this.m);
	    }
	    return res._forceRed(this);
	  };

	  Red.prototype.iadd = function iadd(a, b) {
	    this._verify2(a, b);

	    var res = a.iadd(b);
	    if (res.cmp(this.m) >= 0) {
	      res.isub(this.m);
	    }
	    return res;
	  };

	  Red.prototype.sub = function sub(a, b) {
	    this._verify2(a, b);

	    var res = a.sub(b);
	    if (res.cmpn(0) < 0) {
	      res.iadd(this.m);
	    }
	    return res._forceRed(this);
	  };

	  Red.prototype.isub = function isub(a, b) {
	    this._verify2(a, b);

	    var res = a.isub(b);
	    if (res.cmpn(0) < 0) {
	      res.iadd(this.m);
	    }
	    return res;
	  };

	  Red.prototype.shl = function shl(a, num) {
	    this._verify1(a);
	    return this.imod(a.ushln(num));
	  };

	  Red.prototype.imul = function imul(a, b) {
	    this._verify2(a, b);
	    return this.imod(a.imul(b));
	  };

	  Red.prototype.mul = function mul(a, b) {
	    this._verify2(a, b);
	    return this.imod(a.mul(b));
	  };

	  Red.prototype.isqr = function isqr(a) {
	    return this.imul(a, a.clone());
	  };

	  Red.prototype.sqr = function sqr(a) {
	    return this.mul(a, a);
	  };

	  Red.prototype.sqrt = function sqrt(a) {
	    if (a.isZero()) return a.clone();

	    var mod3 = this.m.andln(3);
	    assert(mod3 % 2 === 1);

	    // Fast case
	    if (mod3 === 3) {
	      var pow = this.m.add(new BN(1)).iushrn(2);
	      return this.pow(a, pow);
	    }

	    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
	    //
	    // Find Q and S, that Q * 2 ^ S = (P - 1)
	    var q = this.m.subn(1);
	    var s = 0;
	    while (!q.isZero() && q.andln(1) === 0) {
	      s++;
	      q.iushrn(1);
	    }
	    assert(!q.isZero());

	    var one = new BN(1).toRed(this);
	    var nOne = one.redNeg();

	    // Find quadratic non-residue
	    // NOTE: Max is such because of generalized Riemann hypothesis.
	    var lpow = this.m.subn(1).iushrn(1);
	    var z = this.m.bitLength();
	    z = new BN(2 * z * z).toRed(this);

	    while (this.pow(z, lpow).cmp(nOne) !== 0) {
	      z.redIAdd(nOne);
	    }

	    var c = this.pow(z, q);
	    var r = this.pow(a, q.addn(1).iushrn(1));
	    var t = this.pow(a, q);
	    var m = s;
	    while (t.cmp(one) !== 0) {
	      var tmp = t;
	      for (var i = 0; tmp.cmp(one) !== 0; i++) {
	        tmp = tmp.redSqr();
	      }
	      assert(i < m);
	      var b = this.pow(c, new BN(1).iushln(m - i - 1));

	      r = r.redMul(b);
	      c = b.redSqr();
	      t = t.redMul(c);
	      m = i;
	    }

	    return r;
	  };

	  Red.prototype.invm = function invm(a) {
	    var inv = a._invmp(this.m);
	    if (inv.negative !== 0) {
	      inv.negative = 0;
	      return this.imod(inv).redNeg();
	    } else {
	      return this.imod(inv);
	    }
	  };

	  Red.prototype.pow = function pow(a, num) {
	    if (num.isZero()) return new BN(1);
	    if (num.cmpn(1) === 0) return a.clone();

	    var windowSize = 4;
	    var wnd = new Array(1 << windowSize);
	    wnd[0] = new BN(1).toRed(this);
	    wnd[1] = a;
	    for (var i = 2; i < wnd.length; i++) {
	      wnd[i] = this.mul(wnd[i - 1], a);
	    }

	    var res = wnd[0];
	    var current = 0;
	    var currentLen = 0;
	    var start = num.bitLength() % 26;
	    if (start === 0) {
	      start = 26;
	    }

	    for (i = num.length - 1; i >= 0; i--) {
	      var word = num.words[i];
	      for (var j = start - 1; j >= 0; j--) {
	        var bit = word >> j & 1;
	        if (res !== wnd[0]) {
	          res = this.sqr(res);
	        }

	        if (bit === 0 && current === 0) {
	          currentLen = 0;
	          continue;
	        }

	        current <<= 1;
	        current |= bit;
	        currentLen++;
	        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

	        res = this.mul(res, wnd[current]);
	        currentLen = 0;
	        current = 0;
	      }
	      start = 26;
	    }

	    return res;
	  };

	  Red.prototype.convertTo = function convertTo(num) {
	    var r = num.umod(this.m);

	    return r === num ? r.clone() : r;
	  };

	  Red.prototype.convertFrom = function convertFrom(num) {
	    var res = num.clone();
	    res.red = null;
	    return res;
	  };

	  //
	  // Montgomery method engine
	  //

	  BN.mont = function mont(num) {
	    return new Mont(num);
	  };

	  function Mont(m) {
	    Red.call(this, m);

	    this.shift = this.m.bitLength();
	    if (this.shift % 26 !== 0) {
	      this.shift += 26 - this.shift % 26;
	    }

	    this.r = new BN(1).iushln(this.shift);
	    this.r2 = this.imod(this.r.sqr());
	    this.rinv = this.r._invmp(this.m);

	    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
	    this.minv = this.minv.umod(this.r);
	    this.minv = this.r.sub(this.minv);
	  }
	  inherits(Mont, Red);

	  Mont.prototype.convertTo = function convertTo(num) {
	    return this.imod(num.ushln(this.shift));
	  };

	  Mont.prototype.convertFrom = function convertFrom(num) {
	    var r = this.imod(num.mul(this.rinv));
	    r.red = null;
	    return r;
	  };

	  Mont.prototype.imul = function imul(a, b) {
	    if (a.isZero() || b.isZero()) {
	      a.words[0] = 0;
	      a.length = 1;
	      return a;
	    }

	    var t = a.imul(b);
	    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
	    var u = t.isub(c).iushrn(this.shift);
	    var res = u;

	    if (u.cmp(this.m) >= 0) {
	      res = u.isub(this.m);
	    } else if (u.cmpn(0) < 0) {
	      res = u.iadd(this.m);
	    }

	    return res._forceRed(this);
	  };

	  Mont.prototype.mul = function mul(a, b) {
	    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

	    var t = a.mul(b);
	    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
	    var u = t.isub(c).iushrn(this.shift);
	    var res = u;
	    if (u.cmp(this.m) >= 0) {
	      res = u.isub(this.m);
	    } else if (u.cmpn(0) < 0) {
	      res = u.iadd(this.m);
	    }

	    return res._forceRed(this);
	  };

	  Mont.prototype.invm = function invm(a) {
	    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
	    var res = this.imod(a._invmp(this.m).mul(this.r2));
	    return res._forceRed(this);
	  };
	})(typeof module === 'undefined' || module, undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)(module)))

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bn = __webpack_require__(79);
	var brorand = __webpack_require__(82);

	function MillerRabin(rand) {
	  this.rand = rand || new brorand.Rand();
	}
	module.exports = MillerRabin;

	MillerRabin.create = function create(rand) {
	  return new MillerRabin(rand);
	};

	MillerRabin.prototype._rand = function _rand(n) {
	  var len = n.bitLength();
	  var buf = this.rand.generate(Math.ceil(len / 8));

	  // Set low bits
	  buf[0] |= 3;

	  // Mask high bits
	  var mask = len & 0x7;
	  if (mask !== 0) buf[buf.length - 1] >>= 7 - mask;

	  return new bn(buf);
	};

	MillerRabin.prototype.test = function test(n, k, cb) {
	  var len = n.bitLength();
	  var red = bn.mont(n);
	  var rone = new bn(1).toRed(red);

	  if (!k) k = Math.max(1, len / 48 | 0);

	  // Find d and s, (n - 1) = (2 ^ s) * d;
	  var n1 = n.subn(1);
	  var n2 = n1.subn(1);
	  for (var s = 0; !n1.testn(s); s++) {}
	  var d = n.shrn(s);

	  var rn1 = n1.toRed(red);

	  var prime = true;
	  for (; k > 0; k--) {
	    var a = this._rand(n2);
	    if (cb) cb(a);

	    var x = a.toRed(red).redPow(d);
	    if (x.cmp(rone) === 0 || x.cmp(rn1) === 0) continue;

	    for (var i = 1; i < s; i++) {
	      x = x.redSqr();

	      if (x.cmp(rone) === 0) return false;
	      if (x.cmp(rn1) === 0) break;
	    }

	    if (i === s) return false;
	  }

	  return prime;
	};

	MillerRabin.prototype.getDivisor = function getDivisor(n, k) {
	  var len = n.bitLength();
	  var red = bn.mont(n);
	  var rone = new bn(1).toRed(red);

	  if (!k) k = Math.max(1, len / 48 | 0);

	  // Find d and s, (n - 1) = (2 ^ s) * d;
	  var n1 = n.subn(1);
	  var n2 = n1.subn(1);
	  for (var s = 0; !n1.testn(s); s++) {}
	  var d = n.shrn(s);

	  var rn1 = n1.toRed(red);

	  for (; k > 0; k--) {
	    var a = this._rand(n2);

	    var g = n.gcd(a);
	    if (g.cmpn(1) !== 0) return g;

	    var x = a.toRed(red).redPow(d);
	    if (x.cmp(rone) === 0 || x.cmp(rn1) === 0) continue;

	    for (var i = 1; i < s; i++) {
	      x = x.redSqr();

	      if (x.cmp(rone) === 0) return x.fromRed().subn(1).gcd(n);
	      if (x.cmp(rn1) === 0) break;
	    }

	    if (i === s) {
	      x = x.redSqr();
	      return x.fromRed().subn(1).gcd(n);
	    }
	  }

	  return false;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var r;

	module.exports = function rand(len) {
	  if (!r) r = new Rand(null);

	  return r.generate(len);
	};

	function Rand(rand) {
	  this.rand = rand;
	}
	module.exports.Rand = Rand;

	Rand.prototype.generate = function generate(len) {
	  return this._rand(len);
	};

	if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
	  if (window.crypto && window.crypto.getRandomValues) {
	    // Modern browsers
	    Rand.prototype._rand = function _rand(n) {
	      var arr = new Uint8Array(n);
	      window.crypto.getRandomValues(arr);
	      return arr;
	    };
	  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
	    // IE
	    Rand.prototype._rand = function _rand(n) {
	      var arr = new Uint8Array(n);
	      window.msCrypto.getRandomValues(arr);
	      return arr;
	    };
	  } else {
	    // Old junk
	    Rand.prototype._rand = function () {
	      throw new Error('Not implemented yet');
	    };
	  }
	} else {
	  // Node.js or Web worker
	  try {
	    var crypto = __webpack_require__(83);

	    Rand.prototype._rand = function _rand(n) {
	      return crypto.randomBytes(n);
	    };
	  } catch (e) {
	    // Emulate crypto API using randy
	    Rand.prototype._rand = function _rand(n) {
	      var res = new Uint8Array(n);
	      for (var i = 0; i < res.length; i++) {
	        res[i] = this.rand.getByte();
	      }return res;
	    };
	  }
	}

/***/ },
/* 83 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = {
		"modp1": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
		},
		"modp2": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
		},
		"modp5": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
		},
		"modp14": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
		},
		"modp15": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
		},
		"modp16": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
		},
		"modp17": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
		},
		"modp18": {
			"gen": "02",
			"prime": "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
		}
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var BN = __webpack_require__(79);
	var MillerRabin = __webpack_require__(81);
	var millerRabin = new MillerRabin();
	var TWENTYFOUR = new BN(24);
	var ELEVEN = new BN(11);
	var TEN = new BN(10);
	var THREE = new BN(3);
	var SEVEN = new BN(7);
	var primes = __webpack_require__(78);
	var randomBytes = __webpack_require__(9);
	module.exports = DH;

	function setPublicKey(pub, enc) {
	  enc = enc || 'utf8';
	  if (!Buffer.isBuffer(pub)) {
	    pub = new Buffer(pub, enc);
	  }
	  this._pub = new BN(pub);
	  return this;
	}

	function setPrivateKey(priv, enc) {
	  enc = enc || 'utf8';
	  if (!Buffer.isBuffer(priv)) {
	    priv = new Buffer(priv, enc);
	  }
	  this._priv = new BN(priv);
	  return this;
	}

	var primeCache = {};
	function checkPrime(prime, generator) {
	  var gen = generator.toString('hex');
	  var hex = [gen, prime.toString(16)].join('_');
	  if (hex in primeCache) {
	    return primeCache[hex];
	  }
	  var error = 0;

	  if (prime.isEven() || !primes.simpleSieve || !primes.fermatTest(prime) || !millerRabin.test(prime)) {
	    //not a prime so +1
	    error += 1;

	    if (gen === '02' || gen === '05') {
	      // we'd be able to check the generator
	      // it would fail so +8
	      error += 8;
	    } else {
	      //we wouldn't be able to test the generator
	      // so +4
	      error += 4;
	    }
	    primeCache[hex] = error;
	    return error;
	  }
	  if (!millerRabin.test(prime.shrn(1))) {
	    //not a safe prime
	    error += 2;
	  }
	  var rem;
	  switch (gen) {
	    case '02':
	      if (prime.mod(TWENTYFOUR).cmp(ELEVEN)) {
	        // unsuidable generator
	        error += 8;
	      }
	      break;
	    case '05':
	      rem = prime.mod(TEN);
	      if (rem.cmp(THREE) && rem.cmp(SEVEN)) {
	        // prime mod 10 needs to equal 3 or 7
	        error += 8;
	      }
	      break;
	    default:
	      error += 4;
	  }
	  primeCache[hex] = error;
	  return error;
	}

	function DH(prime, generator, malleable) {
	  this.setGenerator(generator);
	  this.__prime = new BN(prime);
	  this._prime = BN.mont(this.__prime);
	  this._primeLen = prime.length;
	  this._pub = undefined;
	  this._priv = undefined;
	  this._primeCode = undefined;
	  if (malleable) {
	    this.setPublicKey = setPublicKey;
	    this.setPrivateKey = setPrivateKey;
	  } else {
	    this._primeCode = 8;
	  }
	}
	Object.defineProperty(DH.prototype, 'verifyError', {
	  enumerable: true,
	  get: function get() {
	    if (typeof this._primeCode !== 'number') {
	      this._primeCode = checkPrime(this.__prime, this.__gen);
	    }
	    return this._primeCode;
	  }
	});
	DH.prototype.generateKeys = function () {
	  if (!this._priv) {
	    this._priv = new BN(randomBytes(this._primeLen));
	  }
	  this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
	  return this.getPublicKey();
	};

	DH.prototype.computeSecret = function (other) {
	  other = new BN(other);
	  other = other.toRed(this._prime);
	  var secret = other.redPow(this._priv).fromRed();
	  var out = new Buffer(secret.toArray());
	  var prime = this.getPrime();
	  if (out.length < prime.length) {
	    var front = new Buffer(prime.length - out.length);
	    front.fill(0);
	    out = Buffer.concat([front, out]);
	  }
	  return out;
	};

	DH.prototype.getPublicKey = function getPublicKey(enc) {
	  return formatReturnValue(this._pub, enc);
	};

	DH.prototype.getPrivateKey = function getPrivateKey(enc) {
	  return formatReturnValue(this._priv, enc);
	};

	DH.prototype.getPrime = function (enc) {
	  return formatReturnValue(this.__prime, enc);
	};

	DH.prototype.getGenerator = function (enc) {
	  return formatReturnValue(this._gen, enc);
	};

	DH.prototype.setGenerator = function (gen, enc) {
	  enc = enc || 'utf8';
	  if (!Buffer.isBuffer(gen)) {
	    gen = new Buffer(gen, enc);
	  }
	  this.__gen = gen;
	  this._gen = new BN(gen);
	  return this;
	};

	function formatReturnValue(bn, enc) {
	  var buf = new Buffer(bn.toArray());
	  if (!enc) {
	    return buf;
	  } else {
	    return buf.toString(enc);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var _algos = __webpack_require__(47);
	var createHash = __webpack_require__(11);
	var inherits = __webpack_require__(12);
	var sign = __webpack_require__(87);
	var stream = __webpack_require__(25);
	var verify = __webpack_require__(133);

	var algos = {};
	Object.keys(_algos).forEach(function (key) {
	  algos[key] = algos[key.toLowerCase()] = _algos[key];
	});

	function Sign(algorithm) {
	  stream.Writable.call(this);

	  var data = algos[algorithm];
	  if (!data) {
	    throw new Error('Unknown message digest');
	  }

	  this._hashType = data.hash;
	  this._hash = createHash(data.hash);
	  this._tag = data.id;
	  this._signType = data.sign;
	}
	inherits(Sign, stream.Writable);

	Sign.prototype._write = function _write(data, _, done) {
	  this._hash.update(data);
	  done();
	};

	Sign.prototype.update = function update(data, enc) {
	  if (typeof data === 'string') {
	    data = new Buffer(data, enc);
	  }

	  this._hash.update(data);
	  return this;
	};

	Sign.prototype.sign = function signMethod(key, enc) {
	  this.end();
	  var hash = this._hash.digest();
	  var sig = sign(Buffer.concat([this._tag, hash]), key, this._hashType, this._signType);

	  return enc ? sig.toString(enc) : sig;
	};

	function Verify(algorithm) {
	  stream.Writable.call(this);

	  var data = algos[algorithm];
	  if (!data) {
	    throw new Error('Unknown message digest');
	  }

	  this._hash = createHash(data.hash);
	  this._tag = data.id;
	  this._signType = data.sign;
	}
	inherits(Verify, stream.Writable);

	Verify.prototype._write = function _write(data, _, done) {
	  this._hash.update(data);

	  done();
	};

	Verify.prototype.update = function update(data, enc) {
	  if (typeof data === 'string') {
	    data = new Buffer(data, enc);
	  }

	  this._hash.update(data);
	  return this;
	};

	Verify.prototype.verify = function verifyMethod(key, sig, enc) {
	  if (typeof sig === 'string') {
	    sig = new Buffer(sig, enc);
	  }

	  this.end();
	  var hash = this._hash.digest();

	  return verify(sig, Buffer.concat([this._tag, hash]), key, this._signType);
	};

	function createSign(algorithm) {
	  return new Sign(algorithm);
	}

	function createVerify(algorithm) {
	  return new Verify(algorithm);
	}

	module.exports = {
	  Sign: createSign,
	  Verify: createVerify,
	  createSign: createSign,
	  createVerify: createVerify
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
	var createHmac = __webpack_require__(46);
	var crt = __webpack_require__(88);
	var curves = __webpack_require__(89);
	var elliptic = __webpack_require__(90);
	var parseKeys = __webpack_require__(113);

	var BN = __webpack_require__(79);
	var EC = elliptic.ec;

	function sign(hash, key, hashType, signType) {
	  var priv = parseKeys(key);
	  if (priv.curve) {
	    if (signType !== 'ecdsa') throw new Error('wrong private key type');

	    return ecSign(hash, priv);
	  } else if (priv.type === 'dsa') {
	    if (signType !== 'dsa') {
	      throw new Error('wrong private key type');
	    }
	    return dsaSign(hash, priv, hashType);
	  } else {
	    if (signType !== 'rsa') throw new Error('wrong private key type');
	  }

	  var len = priv.modulus.byteLength();
	  var pad = [0, 1];
	  while (hash.length + pad.length + 1 < len) {
	    pad.push(0xff);
	  }
	  pad.push(0x00);
	  var i = -1;
	  while (++i < hash.length) {
	    pad.push(hash[i]);
	  }

	  var out = crt(pad, priv);
	  return out;
	}

	function ecSign(hash, priv) {
	  var curveId = curves[priv.curve.join('.')];
	  if (!curveId) throw new Error('unknown curve ' + priv.curve.join('.'));

	  var curve = new EC(curveId);
	  var key = curve.genKeyPair();

	  key._importPrivate(priv.privateKey);
	  var out = key.sign(hash);

	  return new Buffer(out.toDER());
	}

	function dsaSign(hash, priv, algo) {
	  var x = priv.params.priv_key;
	  var p = priv.params.p;
	  var q = priv.params.q;
	  var g = priv.params.g;
	  var r = new BN(0);
	  var k;
	  var H = bits2int(hash, q).mod(q);
	  var s = false;
	  var kv = getKey(x, q, hash, algo);
	  while (s === false) {
	    k = makeKey(q, kv, algo);
	    r = makeR(g, k, p, q);
	    s = k.invm(q).imul(H.add(x.mul(r))).mod(q);
	    if (!s.cmpn(0)) {
	      s = false;
	      r = new BN(0);
	    }
	  }
	  return toDER(r, s);
	}

	function toDER(r, s) {
	  r = r.toArray();
	  s = s.toArray();

	  // Pad values
	  if (r[0] & 0x80) {
	    r = [0].concat(r);
	  }
	  // Pad values
	  if (s[0] & 0x80) {
	    s = [0].concat(s);
	  }

	  var total = r.length + s.length + 4;
	  var res = [0x30, total, 0x02, r.length];
	  res = res.concat(r, [0x02, s.length], s);
	  return new Buffer(res);
	}

	function getKey(x, q, hash, algo) {
	  x = new Buffer(x.toArray());
	  if (x.length < q.byteLength()) {
	    var zeros = new Buffer(q.byteLength() - x.length);
	    zeros.fill(0);
	    x = Buffer.concat([zeros, x]);
	  }
	  var hlen = hash.length;
	  var hbits = bits2octets(hash, q);
	  var v = new Buffer(hlen);
	  v.fill(1);
	  var k = new Buffer(hlen);
	  k.fill(0);
	  k = createHmac(algo, k).update(v).update(new Buffer([0])).update(x).update(hbits).digest();
	  v = createHmac(algo, k).update(v).digest();
	  k = createHmac(algo, k).update(v).update(new Buffer([1])).update(x).update(hbits).digest();
	  v = createHmac(algo, k).update(v).digest();
	  return {
	    k: k,
	    v: v
	  };
	}

	function bits2int(obits, q) {
	  var bits = new BN(obits);
	  var shift = (obits.length << 3) - q.bitLength();
	  if (shift > 0) {
	    bits.ishrn(shift);
	  }
	  return bits;
	}

	function bits2octets(bits, q) {
	  bits = bits2int(bits, q);
	  bits = bits.mod(q);
	  var out = new Buffer(bits.toArray());
	  if (out.length < q.byteLength()) {
	    var zeros = new Buffer(q.byteLength() - out.length);
	    zeros.fill(0);
	    out = Buffer.concat([zeros, out]);
	  }
	  return out;
	}

	function makeKey(q, kv, algo) {
	  var t, k;

	  do {
	    t = new Buffer('');

	    while (t.length * 8 < q.bitLength()) {
	      kv.v = createHmac(algo, kv.k).update(kv.v).digest();
	      t = Buffer.concat([t, kv.v]);
	    }

	    k = bits2int(t, q);
	    kv.k = createHmac(algo, kv.k).update(kv.v).update(new Buffer([0])).digest();
	    kv.v = createHmac(algo, kv.k).update(kv.v).digest();
	  } while (k.cmp(q) !== -1);

	  return k;
	}

	function makeR(g, k, p, q) {
	  return g.toRed(BN.mont(p)).redPow(k).fromRed().mod(q);
	}

	module.exports = sign;
	module.exports.getKey = getKey;
	module.exports.makeKey = makeKey;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var bn = __webpack_require__(79);
	var randomBytes = __webpack_require__(9);
	module.exports = crt;
	function blind(priv) {
	  var r = getr(priv);
	  var blinder = r.toRed(bn.mont(priv.modulus)).redPow(new bn(priv.publicExponent)).fromRed();
	  return {
	    blinder: blinder,
	    unblinder: r.invm(priv.modulus)
	  };
	}
	function crt(msg, priv) {
	  var blinds = blind(priv);
	  var len = priv.modulus.byteLength();
	  var mod = bn.mont(priv.modulus);
	  var blinded = new bn(msg).mul(blinds.blinder).umod(priv.modulus);
	  var c1 = blinded.toRed(bn.mont(priv.prime1));
	  var c2 = blinded.toRed(bn.mont(priv.prime2));
	  var qinv = priv.coefficient;
	  var p = priv.prime1;
	  var q = priv.prime2;
	  var m1 = c1.redPow(priv.exponent1);
	  var m2 = c2.redPow(priv.exponent2);
	  m1 = m1.fromRed();
	  m2 = m2.fromRed();
	  var h = m1.isub(m2).imul(qinv).umod(p);
	  h.imul(q);
	  m2.iadd(h);
	  return new Buffer(m2.imul(blinds.unblinder).umod(priv.modulus).toArray(false, len));
	}
	crt.getr = getr;
	function getr(priv) {
	  var len = priv.modulus.byteLength();
	  var r = new bn(randomBytes(len));
	  while (r.cmp(priv.modulus) >= 0 || !r.umod(priv.prime1) || !r.umod(priv.prime2)) {
	    r = new bn(randomBytes(len));
	  }
	  return r;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 89 */
/***/ function(module, exports) {

	'use strict';

	exports['1.3.132.0.10'] = 'secp256k1';

	exports['1.3.132.0.33'] = 'p224';

	exports['1.2.840.10045.3.1.1'] = 'p192';

	exports['1.2.840.10045.3.1.7'] = 'p256';

	exports['1.3.132.0.34'] = 'p384';

	exports['1.3.132.0.35'] = 'p521';

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var elliptic = exports;

	elliptic.version = __webpack_require__(91).version;
	elliptic.utils = __webpack_require__(92);
	elliptic.rand = __webpack_require__(82);
	elliptic.hmacDRBG = __webpack_require__(93);
	elliptic.curve = __webpack_require__(100);
	elliptic.curves = __webpack_require__(105);

	// Protocols
	elliptic.ec = __webpack_require__(107);
	elliptic.eddsa = __webpack_require__(110);

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
		"_args": [
			[
				{
					"raw": "elliptic@^6.0.0",
					"scope": null,
					"escapedName": "elliptic",
					"name": "elliptic",
					"rawSpec": "^6.0.0",
					"spec": ">=6.0.0 <7.0.0",
					"type": "range"
				},
				"/Users/lock/Desktop/musicapi/node_modules/browserify-sign"
			]
		],
		"_from": "elliptic@>=6.0.0 <7.0.0",
		"_id": "elliptic@6.3.2",
		"_inCache": true,
		"_location": "/elliptic",
		"_nodeVersion": "6.3.0",
		"_npmOperationalInternal": {
			"host": "packages-16-east.internal.npmjs.com",
			"tmp": "tmp/elliptic-6.3.2.tgz_1473938837205_0.3108903462998569"
		},
		"_npmUser": {
			"name": "indutny",
			"email": "fedor@indutny.com"
		},
		"_npmVersion": "3.10.3",
		"_phantomChildren": {},
		"_requested": {
			"raw": "elliptic@^6.0.0",
			"scope": null,
			"escapedName": "elliptic",
			"name": "elliptic",
			"rawSpec": "^6.0.0",
			"spec": ">=6.0.0 <7.0.0",
			"type": "range"
		},
		"_requiredBy": [
			"/browserify-sign",
			"/create-ecdh"
		],
		"_resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.3.2.tgz",
		"_shasum": "e4c81e0829cf0a65ab70e998b8232723b5c1bc48",
		"_shrinkwrap": null,
		"_spec": "elliptic@^6.0.0",
		"_where": "/Users/lock/Desktop/musicapi/node_modules/browserify-sign",
		"author": {
			"name": "Fedor Indutny",
			"email": "fedor@indutny.com"
		},
		"bugs": {
			"url": "https://github.com/indutny/elliptic/issues"
		},
		"dependencies": {
			"bn.js": "^4.4.0",
			"brorand": "^1.0.1",
			"hash.js": "^1.0.0",
			"inherits": "^2.0.1"
		},
		"description": "EC cryptography",
		"devDependencies": {
			"brfs": "^1.4.3",
			"coveralls": "^2.11.3",
			"grunt": "^0.4.5",
			"grunt-browserify": "^5.0.0",
			"grunt-contrib-connect": "^1.0.0",
			"grunt-contrib-copy": "^1.0.0",
			"grunt-contrib-uglify": "^1.0.1",
			"grunt-mocha-istanbul": "^3.0.1",
			"grunt-saucelabs": "^8.6.2",
			"istanbul": "^0.4.2",
			"jscs": "^2.9.0",
			"jshint": "^2.6.0",
			"mocha": "^2.1.0"
		},
		"directories": {},
		"dist": {
			"shasum": "e4c81e0829cf0a65ab70e998b8232723b5c1bc48",
			"tarball": "https://registry.npmjs.org/elliptic/-/elliptic-6.3.2.tgz"
		},
		"files": [
			"lib"
		],
		"gitHead": "cbace4683a4a548dc0306ef36756151a20299cd5",
		"homepage": "https://github.com/indutny/elliptic",
		"keywords": [
			"EC",
			"Elliptic",
			"curve",
			"Cryptography"
		],
		"license": "MIT",
		"main": "lib/elliptic.js",
		"maintainers": [
			{
				"name": "indutny",
				"email": "fedor@indutny.com"
			}
		],
		"name": "elliptic",
		"optionalDependencies": {},
		"readme": "ERROR: No README data found!",
		"repository": {
			"type": "git",
			"url": "git+ssh://git@github.com/indutny/elliptic.git"
		},
		"scripts": {
			"jscs": "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
			"jshint": "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
			"lint": "npm run jscs && npm run jshint",
			"test": "npm run lint && npm run unit",
			"unit": "istanbul test _mocha --reporter=spec test/index.js",
			"version": "grunt dist && git add dist/"
		},
		"version": "6.3.2"
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = exports;
	var BN = __webpack_require__(79);

	utils.assert = function assert(val, msg) {
	  if (!val) throw new Error(msg || 'Assertion failed');
	};

	function toArray(msg, enc) {
	  if (Array.isArray(msg)) return msg.slice();
	  if (!msg) return [];
	  var res = [];
	  if (typeof msg !== 'string') {
	    for (var i = 0; i < msg.length; i++) {
	      res[i] = msg[i] | 0;
	    }return res;
	  }
	  if (!enc) {
	    for (var i = 0; i < msg.length; i++) {
	      var c = msg.charCodeAt(i);
	      var hi = c >> 8;
	      var lo = c & 0xff;
	      if (hi) res.push(hi, lo);else res.push(lo);
	    }
	  } else if (enc === 'hex') {
	    msg = msg.replace(/[^a-z0-9]+/ig, '');
	    if (msg.length % 2 !== 0) msg = '0' + msg;
	    for (var i = 0; i < msg.length; i += 2) {
	      res.push(parseInt(msg[i] + msg[i + 1], 16));
	    }
	  }
	  return res;
	}
	utils.toArray = toArray;

	function zero2(word) {
	  if (word.length === 1) return '0' + word;else return word;
	}
	utils.zero2 = zero2;

	function toHex(msg) {
	  var res = '';
	  for (var i = 0; i < msg.length; i++) {
	    res += zero2(msg[i].toString(16));
	  }return res;
	}
	utils.toHex = toHex;

	utils.encode = function encode(arr, enc) {
	  if (enc === 'hex') return toHex(arr);else return arr;
	};

	// Represent num in a w-NAF form
	function getNAF(num, w) {
	  var naf = [];
	  var ws = 1 << w + 1;
	  var k = num.clone();
	  while (k.cmpn(1) >= 0) {
	    var z;
	    if (k.isOdd()) {
	      var mod = k.andln(ws - 1);
	      if (mod > (ws >> 1) - 1) z = (ws >> 1) - mod;else z = mod;
	      k.isubn(z);
	    } else {
	      z = 0;
	    }
	    naf.push(z);

	    // Optimization, shift by word if possible
	    var shift = k.cmpn(0) !== 0 && k.andln(ws - 1) === 0 ? w + 1 : 1;
	    for (var i = 1; i < shift; i++) {
	      naf.push(0);
	    }k.iushrn(shift);
	  }

	  return naf;
	}
	utils.getNAF = getNAF;

	// Represent k1, k2 in a Joint Sparse Form
	function getJSF(k1, k2) {
	  var jsf = [[], []];

	  k1 = k1.clone();
	  k2 = k2.clone();
	  var d1 = 0;
	  var d2 = 0;
	  while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {

	    // First phase
	    var m14 = k1.andln(3) + d1 & 3;
	    var m24 = k2.andln(3) + d2 & 3;
	    if (m14 === 3) m14 = -1;
	    if (m24 === 3) m24 = -1;
	    var u1;
	    if ((m14 & 1) === 0) {
	      u1 = 0;
	    } else {
	      var m8 = k1.andln(7) + d1 & 7;
	      if ((m8 === 3 || m8 === 5) && m24 === 2) u1 = -m14;else u1 = m14;
	    }
	    jsf[0].push(u1);

	    var u2;
	    if ((m24 & 1) === 0) {
	      u2 = 0;
	    } else {
	      var m8 = k2.andln(7) + d2 & 7;
	      if ((m8 === 3 || m8 === 5) && m14 === 2) u2 = -m24;else u2 = m24;
	    }
	    jsf[1].push(u2);

	    // Second phase
	    if (2 * d1 === u1 + 1) d1 = 1 - d1;
	    if (2 * d2 === u2 + 1) d2 = 1 - d2;
	    k1.iushrn(1);
	    k2.iushrn(1);
	  }

	  return jsf;
	}
	utils.getJSF = getJSF;

	function cachedProperty(obj, name, computer) {
	  var key = '_' + name;
	  obj.prototype[name] = function cachedProperty() {
	    return this[key] !== undefined ? this[key] : this[key] = computer.call(this);
	  };
	}
	utils.cachedProperty = cachedProperty;

	function parseBytes(bytes) {
	  return typeof bytes === 'string' ? utils.toArray(bytes, 'hex') : bytes;
	}
	utils.parseBytes = parseBytes;

	function intFromLE(bytes) {
	  return new BN(bytes, 'hex', 'le');
	}
	utils.intFromLE = intFromLE;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hash = __webpack_require__(94);
	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var assert = utils.assert;

	function HmacDRBG(options) {
	  if (!(this instanceof HmacDRBG)) return new HmacDRBG(options);
	  this.hash = options.hash;
	  this.predResist = !!options.predResist;

	  this.outLen = this.hash.outSize;
	  this.minEntropy = options.minEntropy || this.hash.hmacStrength;

	  this.reseed = null;
	  this.reseedInterval = null;
	  this.K = null;
	  this.V = null;

	  var entropy = utils.toArray(options.entropy, options.entropyEnc);
	  var nonce = utils.toArray(options.nonce, options.nonceEnc);
	  var pers = utils.toArray(options.pers, options.persEnc);
	  assert(entropy.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');
	  this._init(entropy, nonce, pers);
	}
	module.exports = HmacDRBG;

	HmacDRBG.prototype._init = function init(entropy, nonce, pers) {
	  var seed = entropy.concat(nonce).concat(pers);

	  this.K = new Array(this.outLen / 8);
	  this.V = new Array(this.outLen / 8);
	  for (var i = 0; i < this.V.length; i++) {
	    this.K[i] = 0x00;
	    this.V[i] = 0x01;
	  }

	  this._update(seed);
	  this.reseed = 1;
	  this.reseedInterval = 0x1000000000000; // 2^48
	};

	HmacDRBG.prototype._hmac = function hmac() {
	  return new hash.hmac(this.hash, this.K);
	};

	HmacDRBG.prototype._update = function update(seed) {
	  var kmac = this._hmac().update(this.V).update([0x00]);
	  if (seed) kmac = kmac.update(seed);
	  this.K = kmac.digest();
	  this.V = this._hmac().update(this.V).digest();
	  if (!seed) return;

	  this.K = this._hmac().update(this.V).update([0x01]).update(seed).digest();
	  this.V = this._hmac().update(this.V).digest();
	};

	HmacDRBG.prototype.reseed = function reseed(entropy, entropyEnc, add, addEnc) {
	  // Optional entropy enc
	  if (typeof entropyEnc !== 'string') {
	    addEnc = add;
	    add = entropyEnc;
	    entropyEnc = null;
	  }

	  entropy = utils.toBuffer(entropy, entropyEnc);
	  add = utils.toBuffer(add, addEnc);

	  assert(entropy.length >= this.minEntropy / 8, 'Not enough entropy. Minimum is: ' + this.minEntropy + ' bits');

	  this._update(entropy.concat(add || []));
	  this.reseed = 1;
	};

	HmacDRBG.prototype.generate = function generate(len, enc, add, addEnc) {
	  if (this.reseed > this.reseedInterval) throw new Error('Reseed is required');

	  // Optional encoding
	  if (typeof enc !== 'string') {
	    addEnc = add;
	    add = enc;
	    enc = null;
	  }

	  // Optional additional data
	  if (add) {
	    add = utils.toArray(add, addEnc);
	    this._update(add);
	  }

	  var temp = [];
	  while (temp.length < len) {
	    this.V = this._hmac().update(this.V).digest();
	    temp = temp.concat(this.V);
	  }

	  var res = temp.slice(0, len);
	  this._update(add);
	  this.reseed++;
	  return utils.encode(res, enc);
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hash = exports;

	hash.utils = __webpack_require__(95);
	hash.common = __webpack_require__(96);
	hash.sha = __webpack_require__(97);
	hash.ripemd = __webpack_require__(98);
	hash.hmac = __webpack_require__(99);

	// Proxy hash functions to the main object
	hash.sha1 = hash.sha.sha1;
	hash.sha256 = hash.sha.sha256;
	hash.sha224 = hash.sha.sha224;
	hash.sha384 = hash.sha.sha384;
	hash.sha512 = hash.sha.sha512;
	hash.ripemd160 = hash.ripemd.ripemd160;

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = exports;
	var inherits = __webpack_require__(12);

	function toArray(msg, enc) {
	  if (Array.isArray(msg)) return msg.slice();
	  if (!msg) return [];
	  var res = [];
	  if (typeof msg === 'string') {
	    if (!enc) {
	      for (var i = 0; i < msg.length; i++) {
	        var c = msg.charCodeAt(i);
	        var hi = c >> 8;
	        var lo = c & 0xff;
	        if (hi) res.push(hi, lo);else res.push(lo);
	      }
	    } else if (enc === 'hex') {
	      msg = msg.replace(/[^a-z0-9]+/ig, '');
	      if (msg.length % 2 !== 0) msg = '0' + msg;
	      for (var i = 0; i < msg.length; i += 2) {
	        res.push(parseInt(msg[i] + msg[i + 1], 16));
	      }
	    }
	  } else {
	    for (var i = 0; i < msg.length; i++) {
	      res[i] = msg[i] | 0;
	    }
	  }
	  return res;
	}
	utils.toArray = toArray;

	function toHex(msg) {
	  var res = '';
	  for (var i = 0; i < msg.length; i++) {
	    res += zero2(msg[i].toString(16));
	  }return res;
	}
	utils.toHex = toHex;

	function htonl(w) {
	  var res = w >>> 24 | w >>> 8 & 0xff00 | w << 8 & 0xff0000 | (w & 0xff) << 24;
	  return res >>> 0;
	}
	utils.htonl = htonl;

	function toHex32(msg, endian) {
	  var res = '';
	  for (var i = 0; i < msg.length; i++) {
	    var w = msg[i];
	    if (endian === 'little') w = htonl(w);
	    res += zero8(w.toString(16));
	  }
	  return res;
	}
	utils.toHex32 = toHex32;

	function zero2(word) {
	  if (word.length === 1) return '0' + word;else return word;
	}
	utils.zero2 = zero2;

	function zero8(word) {
	  if (word.length === 7) return '0' + word;else if (word.length === 6) return '00' + word;else if (word.length === 5) return '000' + word;else if (word.length === 4) return '0000' + word;else if (word.length === 3) return '00000' + word;else if (word.length === 2) return '000000' + word;else if (word.length === 1) return '0000000' + word;else return word;
	}
	utils.zero8 = zero8;

	function join32(msg, start, end, endian) {
	  var len = end - start;
	  assert(len % 4 === 0);
	  var res = new Array(len / 4);
	  for (var i = 0, k = start; i < res.length; i++, k += 4) {
	    var w;
	    if (endian === 'big') w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];else w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
	    res[i] = w >>> 0;
	  }
	  return res;
	}
	utils.join32 = join32;

	function split32(msg, endian) {
	  var res = new Array(msg.length * 4);
	  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
	    var m = msg[i];
	    if (endian === 'big') {
	      res[k] = m >>> 24;
	      res[k + 1] = m >>> 16 & 0xff;
	      res[k + 2] = m >>> 8 & 0xff;
	      res[k + 3] = m & 0xff;
	    } else {
	      res[k + 3] = m >>> 24;
	      res[k + 2] = m >>> 16 & 0xff;
	      res[k + 1] = m >>> 8 & 0xff;
	      res[k] = m & 0xff;
	    }
	  }
	  return res;
	}
	utils.split32 = split32;

	function rotr32(w, b) {
	  return w >>> b | w << 32 - b;
	}
	utils.rotr32 = rotr32;

	function rotl32(w, b) {
	  return w << b | w >>> 32 - b;
	}
	utils.rotl32 = rotl32;

	function sum32(a, b) {
	  return a + b >>> 0;
	}
	utils.sum32 = sum32;

	function sum32_3(a, b, c) {
	  return a + b + c >>> 0;
	}
	utils.sum32_3 = sum32_3;

	function sum32_4(a, b, c, d) {
	  return a + b + c + d >>> 0;
	}
	utils.sum32_4 = sum32_4;

	function sum32_5(a, b, c, d, e) {
	  return a + b + c + d + e >>> 0;
	}
	utils.sum32_5 = sum32_5;

	function assert(cond, msg) {
	  if (!cond) throw new Error(msg || 'Assertion failed');
	}
	utils.assert = assert;

	utils.inherits = inherits;

	function sum64(buf, pos, ah, al) {
	  var bh = buf[pos];
	  var bl = buf[pos + 1];

	  var lo = al + bl >>> 0;
	  var hi = (lo < al ? 1 : 0) + ah + bh;
	  buf[pos] = hi >>> 0;
	  buf[pos + 1] = lo;
	}
	exports.sum64 = sum64;

	function sum64_hi(ah, al, bh, bl) {
	  var lo = al + bl >>> 0;
	  var hi = (lo < al ? 1 : 0) + ah + bh;
	  return hi >>> 0;
	};
	exports.sum64_hi = sum64_hi;

	function sum64_lo(ah, al, bh, bl) {
	  var lo = al + bl;
	  return lo >>> 0;
	};
	exports.sum64_lo = sum64_lo;

	function sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {
	  var carry = 0;
	  var lo = al;
	  lo = lo + bl >>> 0;
	  carry += lo < al ? 1 : 0;
	  lo = lo + cl >>> 0;
	  carry += lo < cl ? 1 : 0;
	  lo = lo + dl >>> 0;
	  carry += lo < dl ? 1 : 0;

	  var hi = ah + bh + ch + dh + carry;
	  return hi >>> 0;
	};
	exports.sum64_4_hi = sum64_4_hi;

	function sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {
	  var lo = al + bl + cl + dl;
	  return lo >>> 0;
	};
	exports.sum64_4_lo = sum64_4_lo;

	function sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
	  var carry = 0;
	  var lo = al;
	  lo = lo + bl >>> 0;
	  carry += lo < al ? 1 : 0;
	  lo = lo + cl >>> 0;
	  carry += lo < cl ? 1 : 0;
	  lo = lo + dl >>> 0;
	  carry += lo < dl ? 1 : 0;
	  lo = lo + el >>> 0;
	  carry += lo < el ? 1 : 0;

	  var hi = ah + bh + ch + dh + eh + carry;
	  return hi >>> 0;
	};
	exports.sum64_5_hi = sum64_5_hi;

	function sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
	  var lo = al + bl + cl + dl + el;

	  return lo >>> 0;
	};
	exports.sum64_5_lo = sum64_5_lo;

	function rotr64_hi(ah, al, num) {
	  var r = al << 32 - num | ah >>> num;
	  return r >>> 0;
	};
	exports.rotr64_hi = rotr64_hi;

	function rotr64_lo(ah, al, num) {
	  var r = ah << 32 - num | al >>> num;
	  return r >>> 0;
	};
	exports.rotr64_lo = rotr64_lo;

	function shr64_hi(ah, al, num) {
	  return ah >>> num;
	};
	exports.shr64_hi = shr64_hi;

	function shr64_lo(ah, al, num) {
	  var r = ah << 32 - num | al >>> num;
	  return r >>> 0;
	};
	exports.shr64_lo = shr64_lo;

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hash = __webpack_require__(94);
	var utils = hash.utils;
	var assert = utils.assert;

	function BlockHash() {
	  this.pending = null;
	  this.pendingTotal = 0;
	  this.blockSize = this.constructor.blockSize;
	  this.outSize = this.constructor.outSize;
	  this.hmacStrength = this.constructor.hmacStrength;
	  this.padLength = this.constructor.padLength / 8;
	  this.endian = 'big';

	  this._delta8 = this.blockSize / 8;
	  this._delta32 = this.blockSize / 32;
	}
	exports.BlockHash = BlockHash;

	BlockHash.prototype.update = function update(msg, enc) {
	  // Convert message to array, pad it, and join into 32bit blocks
	  msg = utils.toArray(msg, enc);
	  if (!this.pending) this.pending = msg;else this.pending = this.pending.concat(msg);
	  this.pendingTotal += msg.length;

	  // Enough data, try updating
	  if (this.pending.length >= this._delta8) {
	    msg = this.pending;

	    // Process pending data in blocks
	    var r = msg.length % this._delta8;
	    this.pending = msg.slice(msg.length - r, msg.length);
	    if (this.pending.length === 0) this.pending = null;

	    msg = utils.join32(msg, 0, msg.length - r, this.endian);
	    for (var i = 0; i < msg.length; i += this._delta32) {
	      this._update(msg, i, i + this._delta32);
	    }
	  }

	  return this;
	};

	BlockHash.prototype.digest = function digest(enc) {
	  this.update(this._pad());
	  assert(this.pending === null);

	  return this._digest(enc);
	};

	BlockHash.prototype._pad = function pad() {
	  var len = this.pendingTotal;
	  var bytes = this._delta8;
	  var k = bytes - (len + this.padLength) % bytes;
	  var res = new Array(k + this.padLength);
	  res[0] = 0x80;
	  for (var i = 1; i < k; i++) {
	    res[i] = 0;
	  } // Append length
	  len <<= 3;
	  if (this.endian === 'big') {
	    for (var t = 8; t < this.padLength; t++) {
	      res[i++] = 0;
	    }res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = len >>> 24 & 0xff;
	    res[i++] = len >>> 16 & 0xff;
	    res[i++] = len >>> 8 & 0xff;
	    res[i++] = len & 0xff;
	  } else {
	    res[i++] = len & 0xff;
	    res[i++] = len >>> 8 & 0xff;
	    res[i++] = len >>> 16 & 0xff;
	    res[i++] = len >>> 24 & 0xff;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;
	    res[i++] = 0;

	    for (var t = 8; t < this.padLength; t++) {
	      res[i++] = 0;
	    }
	  }

	  return res;
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hash = __webpack_require__(94);
	var utils = hash.utils;
	var assert = utils.assert;

	var rotr32 = utils.rotr32;
	var rotl32 = utils.rotl32;
	var sum32 = utils.sum32;
	var sum32_4 = utils.sum32_4;
	var sum32_5 = utils.sum32_5;
	var rotr64_hi = utils.rotr64_hi;
	var rotr64_lo = utils.rotr64_lo;
	var shr64_hi = utils.shr64_hi;
	var shr64_lo = utils.shr64_lo;
	var sum64 = utils.sum64;
	var sum64_hi = utils.sum64_hi;
	var sum64_lo = utils.sum64_lo;
	var sum64_4_hi = utils.sum64_4_hi;
	var sum64_4_lo = utils.sum64_4_lo;
	var sum64_5_hi = utils.sum64_5_hi;
	var sum64_5_lo = utils.sum64_5_lo;
	var BlockHash = hash.common.BlockHash;

	var sha256_K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

	var sha512_K = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

	var sha1_K = [0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xCA62C1D6];

	function SHA256() {
	  if (!(this instanceof SHA256)) return new SHA256();

	  BlockHash.call(this);
	  this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
	  this.k = sha256_K;
	  this.W = new Array(64);
	}
	utils.inherits(SHA256, BlockHash);
	exports.sha256 = SHA256;

	SHA256.blockSize = 512;
	SHA256.outSize = 256;
	SHA256.hmacStrength = 192;
	SHA256.padLength = 64;

	SHA256.prototype._update = function _update(msg, start) {
	  var W = this.W;

	  for (var i = 0; i < 16; i++) {
	    W[i] = msg[start + i];
	  }for (; i < W.length; i++) {
	    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);
	  }var a = this.h[0];
	  var b = this.h[1];
	  var c = this.h[2];
	  var d = this.h[3];
	  var e = this.h[4];
	  var f = this.h[5];
	  var g = this.h[6];
	  var h = this.h[7];

	  assert(this.k.length === W.length);
	  for (var i = 0; i < W.length; i++) {
	    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
	    var T2 = sum32(s0_256(a), maj32(a, b, c));
	    h = g;
	    g = f;
	    f = e;
	    e = sum32(d, T1);
	    d = c;
	    c = b;
	    b = a;
	    a = sum32(T1, T2);
	  }

	  this.h[0] = sum32(this.h[0], a);
	  this.h[1] = sum32(this.h[1], b);
	  this.h[2] = sum32(this.h[2], c);
	  this.h[3] = sum32(this.h[3], d);
	  this.h[4] = sum32(this.h[4], e);
	  this.h[5] = sum32(this.h[5], f);
	  this.h[6] = sum32(this.h[6], g);
	  this.h[7] = sum32(this.h[7], h);
	};

	SHA256.prototype._digest = function digest(enc) {
	  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
	};

	function SHA224() {
	  if (!(this instanceof SHA224)) return new SHA224();

	  SHA256.call(this);
	  this.h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
	}
	utils.inherits(SHA224, SHA256);
	exports.sha224 = SHA224;

	SHA224.blockSize = 512;
	SHA224.outSize = 224;
	SHA224.hmacStrength = 192;
	SHA224.padLength = 64;

	SHA224.prototype._digest = function digest(enc) {
	  // Just truncate output
	  if (enc === 'hex') return utils.toHex32(this.h.slice(0, 7), 'big');else return utils.split32(this.h.slice(0, 7), 'big');
	};

	function SHA512() {
	  if (!(this instanceof SHA512)) return new SHA512();

	  BlockHash.call(this);
	  this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179];
	  this.k = sha512_K;
	  this.W = new Array(160);
	}
	utils.inherits(SHA512, BlockHash);
	exports.sha512 = SHA512;

	SHA512.blockSize = 1024;
	SHA512.outSize = 512;
	SHA512.hmacStrength = 192;
	SHA512.padLength = 128;

	SHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {
	  var W = this.W;

	  // 32 x 32bit words
	  for (var i = 0; i < 32; i++) {
	    W[i] = msg[start + i];
	  }for (; i < W.length; i += 2) {
	    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]); // i - 2
	    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
	    var c1_hi = W[i - 14]; // i - 7
	    var c1_lo = W[i - 13];
	    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]); // i - 15
	    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
	    var c3_hi = W[i - 32]; // i - 16
	    var c3_lo = W[i - 31];

	    W[i] = sum64_4_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
	    W[i + 1] = sum64_4_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo);
	  }
	};

	SHA512.prototype._update = function _update(msg, start) {
	  this._prepareBlock(msg, start);

	  var W = this.W;

	  var ah = this.h[0];
	  var al = this.h[1];
	  var bh = this.h[2];
	  var bl = this.h[3];
	  var ch = this.h[4];
	  var cl = this.h[5];
	  var dh = this.h[6];
	  var dl = this.h[7];
	  var eh = this.h[8];
	  var el = this.h[9];
	  var fh = this.h[10];
	  var fl = this.h[11];
	  var gh = this.h[12];
	  var gl = this.h[13];
	  var hh = this.h[14];
	  var hl = this.h[15];

	  assert(this.k.length === W.length);
	  for (var i = 0; i < W.length; i += 2) {
	    var c0_hi = hh;
	    var c0_lo = hl;
	    var c1_hi = s1_512_hi(eh, el);
	    var c1_lo = s1_512_lo(eh, el);
	    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);
	    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
	    var c3_hi = this.k[i];
	    var c3_lo = this.k[i + 1];
	    var c4_hi = W[i];
	    var c4_lo = W[i + 1];

	    var T1_hi = sum64_5_hi(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);
	    var T1_lo = sum64_5_lo(c0_hi, c0_lo, c1_hi, c1_lo, c2_hi, c2_lo, c3_hi, c3_lo, c4_hi, c4_lo);

	    var c0_hi = s0_512_hi(ah, al);
	    var c0_lo = s0_512_lo(ah, al);
	    var c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);
	    var c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

	    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
	    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

	    hh = gh;
	    hl = gl;

	    gh = fh;
	    gl = fl;

	    fh = eh;
	    fl = el;

	    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
	    el = sum64_lo(dl, dl, T1_hi, T1_lo);

	    dh = ch;
	    dl = cl;

	    ch = bh;
	    cl = bl;

	    bh = ah;
	    bl = al;

	    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
	    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
	  }

	  sum64(this.h, 0, ah, al);
	  sum64(this.h, 2, bh, bl);
	  sum64(this.h, 4, ch, cl);
	  sum64(this.h, 6, dh, dl);
	  sum64(this.h, 8, eh, el);
	  sum64(this.h, 10, fh, fl);
	  sum64(this.h, 12, gh, gl);
	  sum64(this.h, 14, hh, hl);
	};

	SHA512.prototype._digest = function digest(enc) {
	  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
	};

	function SHA384() {
	  if (!(this instanceof SHA384)) return new SHA384();

	  SHA512.call(this);
	  this.h = [0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a, 0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31, 0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d, 0xbefa4fa4];
	}
	utils.inherits(SHA384, SHA512);
	exports.sha384 = SHA384;

	SHA384.blockSize = 1024;
	SHA384.outSize = 384;
	SHA384.hmacStrength = 192;
	SHA384.padLength = 128;

	SHA384.prototype._digest = function digest(enc) {
	  if (enc === 'hex') return utils.toHex32(this.h.slice(0, 12), 'big');else return utils.split32(this.h.slice(0, 12), 'big');
	};

	function SHA1() {
	  if (!(this instanceof SHA1)) return new SHA1();

	  BlockHash.call(this);
	  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
	  this.W = new Array(80);
	}

	utils.inherits(SHA1, BlockHash);
	exports.sha1 = SHA1;

	SHA1.blockSize = 512;
	SHA1.outSize = 160;
	SHA1.hmacStrength = 80;
	SHA1.padLength = 64;

	SHA1.prototype._update = function _update(msg, start) {
	  var W = this.W;

	  for (var i = 0; i < 16; i++) {
	    W[i] = msg[start + i];
	  }for (; i < W.length; i++) {
	    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
	  }var a = this.h[0];
	  var b = this.h[1];
	  var c = this.h[2];
	  var d = this.h[3];
	  var e = this.h[4];

	  for (var i = 0; i < W.length; i++) {
	    var s = ~~(i / 20);
	    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
	    e = d;
	    d = c;
	    c = rotl32(b, 30);
	    b = a;
	    a = t;
	  }

	  this.h[0] = sum32(this.h[0], a);
	  this.h[1] = sum32(this.h[1], b);
	  this.h[2] = sum32(this.h[2], c);
	  this.h[3] = sum32(this.h[3], d);
	  this.h[4] = sum32(this.h[4], e);
	};

	SHA1.prototype._digest = function digest(enc) {
	  if (enc === 'hex') return utils.toHex32(this.h, 'big');else return utils.split32(this.h, 'big');
	};

	function ch32(x, y, z) {
	  return x & y ^ ~x & z;
	}

	function maj32(x, y, z) {
	  return x & y ^ x & z ^ y & z;
	}

	function p32(x, y, z) {
	  return x ^ y ^ z;
	}

	function s0_256(x) {
	  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
	}

	function s1_256(x) {
	  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
	}

	function g0_256(x) {
	  return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
	}

	function g1_256(x) {
	  return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
	}

	function ft_1(s, x, y, z) {
	  if (s === 0) return ch32(x, y, z);
	  if (s === 1 || s === 3) return p32(x, y, z);
	  if (s === 2) return maj32(x, y, z);
	}

	function ch64_hi(xh, xl, yh, yl, zh, zl) {
	  var r = xh & yh ^ ~xh & zh;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function ch64_lo(xh, xl, yh, yl, zh, zl) {
	  var r = xl & yl ^ ~xl & zl;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function maj64_hi(xh, xl, yh, yl, zh, zl) {
	  var r = xh & yh ^ xh & zh ^ yh & zh;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function maj64_lo(xh, xl, yh, yl, zh, zl) {
	  var r = xl & yl ^ xl & zl ^ yl & zl;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function s0_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 28);
	  var c1_hi = rotr64_hi(xl, xh, 2); // 34
	  var c2_hi = rotr64_hi(xl, xh, 7); // 39

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function s0_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 28);
	  var c1_lo = rotr64_lo(xl, xh, 2); // 34
	  var c2_lo = rotr64_lo(xl, xh, 7); // 39

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function s1_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 14);
	  var c1_hi = rotr64_hi(xh, xl, 18);
	  var c2_hi = rotr64_hi(xl, xh, 9); // 41

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function s1_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 14);
	  var c1_lo = rotr64_lo(xh, xl, 18);
	  var c2_lo = rotr64_lo(xl, xh, 9); // 41

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function g0_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 1);
	  var c1_hi = rotr64_hi(xh, xl, 8);
	  var c2_hi = shr64_hi(xh, xl, 7);

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function g0_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 1);
	  var c1_lo = rotr64_lo(xh, xl, 8);
	  var c2_lo = shr64_lo(xh, xl, 7);

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function g1_512_hi(xh, xl) {
	  var c0_hi = rotr64_hi(xh, xl, 19);
	  var c1_hi = rotr64_hi(xl, xh, 29); // 61
	  var c2_hi = shr64_hi(xh, xl, 6);

	  var r = c0_hi ^ c1_hi ^ c2_hi;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

	function g1_512_lo(xh, xl) {
	  var c0_lo = rotr64_lo(xh, xl, 19);
	  var c1_lo = rotr64_lo(xl, xh, 29); // 61
	  var c2_lo = shr64_lo(xh, xl, 6);

	  var r = c0_lo ^ c1_lo ^ c2_lo;
	  if (r < 0) r += 0x100000000;
	  return r;
	}

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hash = __webpack_require__(94);
	var utils = hash.utils;

	var rotl32 = utils.rotl32;
	var sum32 = utils.sum32;
	var sum32_3 = utils.sum32_3;
	var sum32_4 = utils.sum32_4;
	var BlockHash = hash.common.BlockHash;

	function RIPEMD160() {
	  if (!(this instanceof RIPEMD160)) return new RIPEMD160();

	  BlockHash.call(this);

	  this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];
	  this.endian = 'little';
	}
	utils.inherits(RIPEMD160, BlockHash);
	exports.ripemd160 = RIPEMD160;

	RIPEMD160.blockSize = 512;
	RIPEMD160.outSize = 160;
	RIPEMD160.hmacStrength = 192;
	RIPEMD160.padLength = 64;

	RIPEMD160.prototype._update = function update(msg, start) {
	  var A = this.h[0];
	  var B = this.h[1];
	  var C = this.h[2];
	  var D = this.h[3];
	  var E = this.h[4];
	  var Ah = A;
	  var Bh = B;
	  var Ch = C;
	  var Dh = D;
	  var Eh = E;
	  for (var j = 0; j < 80; j++) {
	    var T = sum32(rotl32(sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)), s[j]), E);
	    A = E;
	    E = D;
	    D = rotl32(C, 10);
	    C = B;
	    B = T;
	    T = sum32(rotl32(sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)), sh[j]), Eh);
	    Ah = Eh;
	    Eh = Dh;
	    Dh = rotl32(Ch, 10);
	    Ch = Bh;
	    Bh = T;
	  }
	  T = sum32_3(this.h[1], C, Dh);
	  this.h[1] = sum32_3(this.h[2], D, Eh);
	  this.h[2] = sum32_3(this.h[3], E, Ah);
	  this.h[3] = sum32_3(this.h[4], A, Bh);
	  this.h[4] = sum32_3(this.h[0], B, Ch);
	  this.h[0] = T;
	};

	RIPEMD160.prototype._digest = function digest(enc) {
	  if (enc === 'hex') return utils.toHex32(this.h, 'little');else return utils.split32(this.h, 'little');
	};

	function f(j, x, y, z) {
	  if (j <= 15) return x ^ y ^ z;else if (j <= 31) return x & y | ~x & z;else if (j <= 47) return (x | ~y) ^ z;else if (j <= 63) return x & z | y & ~z;else return x ^ (y | ~z);
	}

	function K(j) {
	  if (j <= 15) return 0x00000000;else if (j <= 31) return 0x5a827999;else if (j <= 47) return 0x6ed9eba1;else if (j <= 63) return 0x8f1bbcdc;else return 0xa953fd4e;
	}

	function Kh(j) {
	  if (j <= 15) return 0x50a28be6;else if (j <= 31) return 0x5c4dd124;else if (j <= 47) return 0x6d703ef3;else if (j <= 63) return 0x7a6d76e9;else return 0x00000000;
	}

	var r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13];

	var rh = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11];

	var s = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6];

	var sh = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hmac = exports;

	var hash = __webpack_require__(94);
	var utils = hash.utils;
	var assert = utils.assert;

	function Hmac(hash, key, enc) {
	  if (!(this instanceof Hmac)) return new Hmac(hash, key, enc);
	  this.Hash = hash;
	  this.blockSize = hash.blockSize / 8;
	  this.outSize = hash.outSize / 8;
	  this.inner = null;
	  this.outer = null;

	  this._init(utils.toArray(key, enc));
	}
	module.exports = Hmac;

	Hmac.prototype._init = function init(key) {
	  // Shorten key, if needed
	  if (key.length > this.blockSize) key = new this.Hash().update(key).digest();
	  assert(key.length <= this.blockSize);

	  // Add padding to key
	  for (var i = key.length; i < this.blockSize; i++) {
	    key.push(0);
	  }for (var i = 0; i < key.length; i++) {
	    key[i] ^= 0x36;
	  }this.inner = new this.Hash().update(key);

	  // 0x36 ^ 0x5c = 0x6a
	  for (var i = 0; i < key.length; i++) {
	    key[i] ^= 0x6a;
	  }this.outer = new this.Hash().update(key);
	};

	Hmac.prototype.update = function update(msg, enc) {
	  this.inner.update(msg, enc);
	  return this;
	};

	Hmac.prototype.digest = function digest(enc) {
	  this.outer.update(this.inner.digest());
	  return this.outer.digest(enc);
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curve = exports;

	curve.base = __webpack_require__(101);
	curve.short = __webpack_require__(102);
	curve.mont = __webpack_require__(103);
	curve.edwards = __webpack_require__(104);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BN = __webpack_require__(79);
	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var getNAF = utils.getNAF;
	var getJSF = utils.getJSF;
	var assert = utils.assert;

	function BaseCurve(type, conf) {
	  this.type = type;
	  this.p = new BN(conf.p, 16);

	  // Use Montgomery, when there is no fast reduction for the prime
	  this.red = conf.prime ? BN.red(conf.prime) : BN.mont(this.p);

	  // Useful for many curves
	  this.zero = new BN(0).toRed(this.red);
	  this.one = new BN(1).toRed(this.red);
	  this.two = new BN(2).toRed(this.red);

	  // Curve configuration, optional
	  this.n = conf.n && new BN(conf.n, 16);
	  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);

	  // Temporary arrays
	  this._wnafT1 = new Array(4);
	  this._wnafT2 = new Array(4);
	  this._wnafT3 = new Array(4);
	  this._wnafT4 = new Array(4);

	  // Generalized Greg Maxwell's trick
	  var adjustCount = this.n && this.p.div(this.n);
	  if (!adjustCount || adjustCount.cmpn(100) > 0) {
	    this.redN = null;
	  } else {
	    this._maxwellTrick = true;
	    this.redN = this.n.toRed(this.red);
	  }
	}
	module.exports = BaseCurve;

	BaseCurve.prototype.point = function point() {
	  throw new Error('Not implemented');
	};

	BaseCurve.prototype.validate = function validate() {
	  throw new Error('Not implemented');
	};

	BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
	  assert(p.precomputed);
	  var doubles = p._getDoubles();

	  var naf = getNAF(k, 1);
	  var I = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
	  I /= 3;

	  // Translate into more windowed form
	  var repr = [];
	  for (var j = 0; j < naf.length; j += doubles.step) {
	    var nafW = 0;
	    for (var k = j + doubles.step - 1; k >= j; k--) {
	      nafW = (nafW << 1) + naf[k];
	    }repr.push(nafW);
	  }

	  var a = this.jpoint(null, null, null);
	  var b = this.jpoint(null, null, null);
	  for (var i = I; i > 0; i--) {
	    for (var j = 0; j < repr.length; j++) {
	      var nafW = repr[j];
	      if (nafW === i) b = b.mixedAdd(doubles.points[j]);else if (nafW === -i) b = b.mixedAdd(doubles.points[j].neg());
	    }
	    a = a.add(b);
	  }
	  return a.toP();
	};

	BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
	  var w = 4;

	  // Precompute window
	  var nafPoints = p._getNAFPoints(w);
	  w = nafPoints.wnd;
	  var wnd = nafPoints.points;

	  // Get NAF form
	  var naf = getNAF(k, w);

	  // Add `this`*(N+1) for every w-NAF index
	  var acc = this.jpoint(null, null, null);
	  for (var i = naf.length - 1; i >= 0; i--) {
	    // Count zeroes
	    for (var k = 0; i >= 0 && naf[i] === 0; i--) {
	      k++;
	    }if (i >= 0) k++;
	    acc = acc.dblp(k);

	    if (i < 0) break;
	    var z = naf[i];
	    assert(z !== 0);
	    if (p.type === 'affine') {
	      // J +- P
	      if (z > 0) acc = acc.mixedAdd(wnd[z - 1 >> 1]);else acc = acc.mixedAdd(wnd[-z - 1 >> 1].neg());
	    } else {
	      // J +- J
	      if (z > 0) acc = acc.add(wnd[z - 1 >> 1]);else acc = acc.add(wnd[-z - 1 >> 1].neg());
	    }
	  }
	  return p.type === 'affine' ? acc.toP() : acc;
	};

	BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
	  var wndWidth = this._wnafT1;
	  var wnd = this._wnafT2;
	  var naf = this._wnafT3;

	  // Fill all arrays
	  var max = 0;
	  for (var i = 0; i < len; i++) {
	    var p = points[i];
	    var nafPoints = p._getNAFPoints(defW);
	    wndWidth[i] = nafPoints.wnd;
	    wnd[i] = nafPoints.points;
	  }

	  // Comb small window NAFs
	  for (var i = len - 1; i >= 1; i -= 2) {
	    var a = i - 1;
	    var b = i;
	    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
	      naf[a] = getNAF(coeffs[a], wndWidth[a]);
	      naf[b] = getNAF(coeffs[b], wndWidth[b]);
	      max = Math.max(naf[a].length, max);
	      max = Math.max(naf[b].length, max);
	      continue;
	    }

	    var comb = [points[a], /* 1 */
	    null, /* 3 */
	    null, /* 5 */
	    points[b] /* 7 */
	    ];

	    // Try to avoid Projective points, if possible
	    if (points[a].y.cmp(points[b].y) === 0) {
	      comb[1] = points[a].add(points[b]);
	      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
	    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
	      comb[1] = points[a].toJ().mixedAdd(points[b]);
	      comb[2] = points[a].add(points[b].neg());
	    } else {
	      comb[1] = points[a].toJ().mixedAdd(points[b]);
	      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
	    }

	    var index = [-3, /* -1 -1 */
	    -1, /* -1 0 */
	    -5, /* -1 1 */
	    -7, /* 0 -1 */
	    0, /* 0 0 */
	    7, /* 0 1 */
	    5, /* 1 -1 */
	    1, /* 1 0 */
	    3 /* 1 1 */
	    ];

	    var jsf = getJSF(coeffs[a], coeffs[b]);
	    max = Math.max(jsf[0].length, max);
	    naf[a] = new Array(max);
	    naf[b] = new Array(max);
	    for (var j = 0; j < max; j++) {
	      var ja = jsf[0][j] | 0;
	      var jb = jsf[1][j] | 0;

	      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
	      naf[b][j] = 0;
	      wnd[a] = comb;
	    }
	  }

	  var acc = this.jpoint(null, null, null);
	  var tmp = this._wnafT4;
	  for (var i = max; i >= 0; i--) {
	    var k = 0;

	    while (i >= 0) {
	      var zero = true;
	      for (var j = 0; j < len; j++) {
	        tmp[j] = naf[j][i] | 0;
	        if (tmp[j] !== 0) zero = false;
	      }
	      if (!zero) break;
	      k++;
	      i--;
	    }
	    if (i >= 0) k++;
	    acc = acc.dblp(k);
	    if (i < 0) break;

	    for (var j = 0; j < len; j++) {
	      var z = tmp[j];
	      var p;
	      if (z === 0) continue;else if (z > 0) p = wnd[j][z - 1 >> 1];else if (z < 0) p = wnd[j][-z - 1 >> 1].neg();

	      if (p.type === 'affine') acc = acc.mixedAdd(p);else acc = acc.add(p);
	    }
	  }
	  // Zeroify references
	  for (var i = 0; i < len; i++) {
	    wnd[i] = null;
	  }if (jacobianResult) return acc;else return acc.toP();
	};

	function BasePoint(curve, type) {
	  this.curve = curve;
	  this.type = type;
	  this.precomputed = null;
	}
	BaseCurve.BasePoint = BasePoint;

	BasePoint.prototype.eq = function eq() /*other*/{
	  throw new Error('Not implemented');
	};

	BasePoint.prototype.validate = function validate() {
	  return this.curve.validate(this);
	};

	BaseCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
	  bytes = utils.toArray(bytes, enc);

	  var len = this.p.byteLength();

	  // uncompressed, hybrid-odd, hybrid-even
	  if ((bytes[0] === 0x04 || bytes[0] === 0x06 || bytes[0] === 0x07) && bytes.length - 1 === 2 * len) {
	    if (bytes[0] === 0x06) assert(bytes[bytes.length - 1] % 2 === 0);else if (bytes[0] === 0x07) assert(bytes[bytes.length - 1] % 2 === 1);

	    var res = this.point(bytes.slice(1, 1 + len), bytes.slice(1 + len, 1 + 2 * len));

	    return res;
	  } else if ((bytes[0] === 0x02 || bytes[0] === 0x03) && bytes.length - 1 === len) {
	    return this.pointFromX(bytes.slice(1, 1 + len), bytes[0] === 0x03);
	  }
	  throw new Error('Unknown point format');
	};

	BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
	  return this.encode(enc, true);
	};

	BasePoint.prototype._encode = function _encode(compact) {
	  var len = this.curve.p.byteLength();
	  var x = this.getX().toArray('be', len);

	  if (compact) return [this.getY().isEven() ? 0x02 : 0x03].concat(x);

	  return [0x04].concat(x, this.getY().toArray('be', len));
	};

	BasePoint.prototype.encode = function encode(enc, compact) {
	  return utils.encode(this._encode(compact), enc);
	};

	BasePoint.prototype.precompute = function precompute(power) {
	  if (this.precomputed) return this;

	  var precomputed = {
	    doubles: null,
	    naf: null,
	    beta: null
	  };
	  precomputed.naf = this._getNAFPoints(8);
	  precomputed.doubles = this._getDoubles(4, power);
	  precomputed.beta = this._getBeta();
	  this.precomputed = precomputed;

	  return this;
	};

	BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
	  if (!this.precomputed) return false;

	  var doubles = this.precomputed.doubles;
	  if (!doubles) return false;

	  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
	};

	BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
	  if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;

	  var doubles = [this];
	  var acc = this;
	  for (var i = 0; i < power; i += step) {
	    for (var j = 0; j < step; j++) {
	      acc = acc.dbl();
	    }doubles.push(acc);
	  }
	  return {
	    step: step,
	    points: doubles
	  };
	};

	BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
	  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;

	  var res = [this];
	  var max = (1 << wnd) - 1;
	  var dbl = max === 1 ? null : this.dbl();
	  for (var i = 1; i < max; i++) {
	    res[i] = res[i - 1].add(dbl);
	  }return {
	    wnd: wnd,
	    points: res
	  };
	};

	BasePoint.prototype._getBeta = function _getBeta() {
	  return null;
	};

	BasePoint.prototype.dblp = function dblp(k) {
	  var r = this;
	  for (var i = 0; i < k; i++) {
	    r = r.dbl();
	  }return r;
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curve = __webpack_require__(100);
	var elliptic = __webpack_require__(90);
	var BN = __webpack_require__(79);
	var inherits = __webpack_require__(12);
	var Base = curve.base;

	var assert = elliptic.utils.assert;

	function ShortCurve(conf) {
	  Base.call(this, 'short', conf);

	  this.a = new BN(conf.a, 16).toRed(this.red);
	  this.b = new BN(conf.b, 16).toRed(this.red);
	  this.tinv = this.two.redInvm();

	  this.zeroA = this.a.fromRed().cmpn(0) === 0;
	  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;

	  // If the curve is endomorphic, precalculate beta and lambda
	  this.endo = this._getEndomorphism(conf);
	  this._endoWnafT1 = new Array(4);
	  this._endoWnafT2 = new Array(4);
	}
	inherits(ShortCurve, Base);
	module.exports = ShortCurve;

	ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
	  // No efficient endomorphism
	  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1) return;

	  // Compute beta and lambda, that lambda * P = (beta * Px; Py)
	  var beta;
	  var lambda;
	  if (conf.beta) {
	    beta = new BN(conf.beta, 16).toRed(this.red);
	  } else {
	    var betas = this._getEndoRoots(this.p);
	    // Choose the smallest beta
	    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
	    beta = beta.toRed(this.red);
	  }
	  if (conf.lambda) {
	    lambda = new BN(conf.lambda, 16);
	  } else {
	    // Choose the lambda that is matching selected beta
	    var lambdas = this._getEndoRoots(this.n);
	    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
	      lambda = lambdas[0];
	    } else {
	      lambda = lambdas[1];
	      assert(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
	    }
	  }

	  // Get basis vectors, used for balanced length-two representation
	  var basis;
	  if (conf.basis) {
	    basis = conf.basis.map(function (vec) {
	      return {
	        a: new BN(vec.a, 16),
	        b: new BN(vec.b, 16)
	      };
	    });
	  } else {
	    basis = this._getEndoBasis(lambda);
	  }

	  return {
	    beta: beta,
	    lambda: lambda,
	    basis: basis
	  };
	};

	ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
	  // Find roots of for x^2 + x + 1 in F
	  // Root = (-1 +- Sqrt(-3)) / 2
	  //
	  var red = num === this.p ? this.red : BN.mont(num);
	  var tinv = new BN(2).toRed(red).redInvm();
	  var ntinv = tinv.redNeg();

	  var s = new BN(3).toRed(red).redNeg().redSqrt().redMul(tinv);

	  var l1 = ntinv.redAdd(s).fromRed();
	  var l2 = ntinv.redSub(s).fromRed();
	  return [l1, l2];
	};

	ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
	  // aprxSqrt >= sqrt(this.n)
	  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));

	  // 3.74
	  // Run EGCD, until r(L + 1) < aprxSqrt
	  var u = lambda;
	  var v = this.n.clone();
	  var x1 = new BN(1);
	  var y1 = new BN(0);
	  var x2 = new BN(0);
	  var y2 = new BN(1);

	  // NOTE: all vectors are roots of: a + b * lambda = 0 (mod n)
	  var a0;
	  var b0;
	  // First vector
	  var a1;
	  var b1;
	  // Second vector
	  var a2;
	  var b2;

	  var prevR;
	  var i = 0;
	  var r;
	  var x;
	  while (u.cmpn(0) !== 0) {
	    var q = v.div(u);
	    r = v.sub(q.mul(u));
	    x = x2.sub(q.mul(x1));
	    var y = y2.sub(q.mul(y1));

	    if (!a1 && r.cmp(aprxSqrt) < 0) {
	      a0 = prevR.neg();
	      b0 = x1;
	      a1 = r.neg();
	      b1 = x;
	    } else if (a1 && ++i === 2) {
	      break;
	    }
	    prevR = r;

	    v = u;
	    u = r;
	    x2 = x1;
	    x1 = x;
	    y2 = y1;
	    y1 = y;
	  }
	  a2 = r.neg();
	  b2 = x;

	  var len1 = a1.sqr().add(b1.sqr());
	  var len2 = a2.sqr().add(b2.sqr());
	  if (len2.cmp(len1) >= 0) {
	    a2 = a0;
	    b2 = b0;
	  }

	  // Normalize signs
	  if (a1.negative) {
	    a1 = a1.neg();
	    b1 = b1.neg();
	  }
	  if (a2.negative) {
	    a2 = a2.neg();
	    b2 = b2.neg();
	  }

	  return [{ a: a1, b: b1 }, { a: a2, b: b2 }];
	};

	ShortCurve.prototype._endoSplit = function _endoSplit(k) {
	  var basis = this.endo.basis;
	  var v1 = basis[0];
	  var v2 = basis[1];

	  var c1 = v2.b.mul(k).divRound(this.n);
	  var c2 = v1.b.neg().mul(k).divRound(this.n);

	  var p1 = c1.mul(v1.a);
	  var p2 = c2.mul(v2.a);
	  var q1 = c1.mul(v1.b);
	  var q2 = c2.mul(v2.b);

	  // Calculate answer
	  var k1 = k.sub(p1).sub(p2);
	  var k2 = q1.add(q2).neg();
	  return { k1: k1, k2: k2 };
	};

	ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
	  x = new BN(x, 16);
	  if (!x.red) x = x.toRed(this.red);

	  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
	  var y = y2.redSqrt();
	  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error('invalid point');

	  // XXX Is there any way to tell if the number is odd without converting it
	  // to non-red form?
	  var isOdd = y.fromRed().isOdd();
	  if (odd && !isOdd || !odd && isOdd) y = y.redNeg();

	  return this.point(x, y);
	};

	ShortCurve.prototype.validate = function validate(point) {
	  if (point.inf) return true;

	  var x = point.x;
	  var y = point.y;

	  var ax = this.a.redMul(x);
	  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
	  return y.redSqr().redISub(rhs).cmpn(0) === 0;
	};

	ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
	  var npoints = this._endoWnafT1;
	  var ncoeffs = this._endoWnafT2;
	  for (var i = 0; i < points.length; i++) {
	    var split = this._endoSplit(coeffs[i]);
	    var p = points[i];
	    var beta = p._getBeta();

	    if (split.k1.negative) {
	      split.k1.ineg();
	      p = p.neg(true);
	    }
	    if (split.k2.negative) {
	      split.k2.ineg();
	      beta = beta.neg(true);
	    }

	    npoints[i * 2] = p;
	    npoints[i * 2 + 1] = beta;
	    ncoeffs[i * 2] = split.k1;
	    ncoeffs[i * 2 + 1] = split.k2;
	  }
	  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);

	  // Clean-up references to points and coefficients
	  for (var j = 0; j < i * 2; j++) {
	    npoints[j] = null;
	    ncoeffs[j] = null;
	  }
	  return res;
	};

	function Point(curve, x, y, isRed) {
	  Base.BasePoint.call(this, curve, 'affine');
	  if (x === null && y === null) {
	    this.x = null;
	    this.y = null;
	    this.inf = true;
	  } else {
	    this.x = new BN(x, 16);
	    this.y = new BN(y, 16);
	    // Force redgomery representation when loading from JSON
	    if (isRed) {
	      this.x.forceRed(this.curve.red);
	      this.y.forceRed(this.curve.red);
	    }
	    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
	    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
	    this.inf = false;
	  }
	}
	inherits(Point, Base.BasePoint);

	ShortCurve.prototype.point = function point(x, y, isRed) {
	  return new Point(this, x, y, isRed);
	};

	ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
	  return Point.fromJSON(this, obj, red);
	};

	Point.prototype._getBeta = function _getBeta() {
	  if (!this.curve.endo) return;

	  var pre = this.precomputed;
	  if (pre && pre.beta) return pre.beta;

	  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
	  if (pre) {
	    var curve = this.curve;
	    var endoMul = function endoMul(p) {
	      return curve.point(p.x.redMul(curve.endo.beta), p.y);
	    };
	    pre.beta = beta;
	    beta.precomputed = {
	      beta: null,
	      naf: pre.naf && {
	        wnd: pre.naf.wnd,
	        points: pre.naf.points.map(endoMul)
	      },
	      doubles: pre.doubles && {
	        step: pre.doubles.step,
	        points: pre.doubles.points.map(endoMul)
	      }
	    };
	  }
	  return beta;
	};

	Point.prototype.toJSON = function toJSON() {
	  if (!this.precomputed) return [this.x, this.y];

	  return [this.x, this.y, this.precomputed && {
	    doubles: this.precomputed.doubles && {
	      step: this.precomputed.doubles.step,
	      points: this.precomputed.doubles.points.slice(1)
	    },
	    naf: this.precomputed.naf && {
	      wnd: this.precomputed.naf.wnd,
	      points: this.precomputed.naf.points.slice(1)
	    }
	  }];
	};

	Point.fromJSON = function fromJSON(curve, obj, red) {
	  if (typeof obj === 'string') obj = JSON.parse(obj);
	  var res = curve.point(obj[0], obj[1], red);
	  if (!obj[2]) return res;

	  function obj2point(obj) {
	    return curve.point(obj[0], obj[1], red);
	  }

	  var pre = obj[2];
	  res.precomputed = {
	    beta: null,
	    doubles: pre.doubles && {
	      step: pre.doubles.step,
	      points: [res].concat(pre.doubles.points.map(obj2point))
	    },
	    naf: pre.naf && {
	      wnd: pre.naf.wnd,
	      points: [res].concat(pre.naf.points.map(obj2point))
	    }
	  };
	  return res;
	};

	Point.prototype.inspect = function inspect() {
	  if (this.isInfinity()) return '<EC Point Infinity>';
	  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
	};

	Point.prototype.isInfinity = function isInfinity() {
	  return this.inf;
	};

	Point.prototype.add = function add(p) {
	  // O + P = P
	  if (this.inf) return p;

	  // P + O = P
	  if (p.inf) return this;

	  // P + P = 2P
	  if (this.eq(p)) return this.dbl();

	  // P + (-P) = O
	  if (this.neg().eq(p)) return this.curve.point(null, null);

	  // P + Q = O
	  if (this.x.cmp(p.x) === 0) return this.curve.point(null, null);

	  var c = this.y.redSub(p.y);
	  if (c.cmpn(0) !== 0) c = c.redMul(this.x.redSub(p.x).redInvm());
	  var nx = c.redSqr().redISub(this.x).redISub(p.x);
	  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
	  return this.curve.point(nx, ny);
	};

	Point.prototype.dbl = function dbl() {
	  if (this.inf) return this;

	  // 2P = O
	  var ys1 = this.y.redAdd(this.y);
	  if (ys1.cmpn(0) === 0) return this.curve.point(null, null);

	  var a = this.curve.a;

	  var x2 = this.x.redSqr();
	  var dyinv = ys1.redInvm();
	  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);

	  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
	  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
	  return this.curve.point(nx, ny);
	};

	Point.prototype.getX = function getX() {
	  return this.x.fromRed();
	};

	Point.prototype.getY = function getY() {
	  return this.y.fromRed();
	};

	Point.prototype.mul = function mul(k) {
	  k = new BN(k, 16);

	  if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);else if (this.curve.endo) return this.curve._endoWnafMulAdd([this], [k]);else return this.curve._wnafMul(this, k);
	};

	Point.prototype.mulAdd = function mulAdd(k1, p2, k2) {
	  var points = [this, p2];
	  var coeffs = [k1, k2];
	  if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs);else return this.curve._wnafMulAdd(1, points, coeffs, 2);
	};

	Point.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
	  var points = [this, p2];
	  var coeffs = [k1, k2];
	  if (this.curve.endo) return this.curve._endoWnafMulAdd(points, coeffs, true);else return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
	};

	Point.prototype.eq = function eq(p) {
	  return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
	};

	Point.prototype.neg = function neg(_precompute) {
	  if (this.inf) return this;

	  var res = this.curve.point(this.x, this.y.redNeg());
	  if (_precompute && this.precomputed) {
	    var pre = this.precomputed;
	    var negate = function negate(p) {
	      return p.neg();
	    };
	    res.precomputed = {
	      naf: pre.naf && {
	        wnd: pre.naf.wnd,
	        points: pre.naf.points.map(negate)
	      },
	      doubles: pre.doubles && {
	        step: pre.doubles.step,
	        points: pre.doubles.points.map(negate)
	      }
	    };
	  }
	  return res;
	};

	Point.prototype.toJ = function toJ() {
	  if (this.inf) return this.curve.jpoint(null, null, null);

	  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
	  return res;
	};

	function JPoint(curve, x, y, z) {
	  Base.BasePoint.call(this, curve, 'jacobian');
	  if (x === null && y === null && z === null) {
	    this.x = this.curve.one;
	    this.y = this.curve.one;
	    this.z = new BN(0);
	  } else {
	    this.x = new BN(x, 16);
	    this.y = new BN(y, 16);
	    this.z = new BN(z, 16);
	  }
	  if (!this.x.red) this.x = this.x.toRed(this.curve.red);
	  if (!this.y.red) this.y = this.y.toRed(this.curve.red);
	  if (!this.z.red) this.z = this.z.toRed(this.curve.red);

	  this.zOne = this.z === this.curve.one;
	}
	inherits(JPoint, Base.BasePoint);

	ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
	  return new JPoint(this, x, y, z);
	};

	JPoint.prototype.toP = function toP() {
	  if (this.isInfinity()) return this.curve.point(null, null);

	  var zinv = this.z.redInvm();
	  var zinv2 = zinv.redSqr();
	  var ax = this.x.redMul(zinv2);
	  var ay = this.y.redMul(zinv2).redMul(zinv);

	  return this.curve.point(ax, ay);
	};

	JPoint.prototype.neg = function neg() {
	  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
	};

	JPoint.prototype.add = function add(p) {
	  // O + P = P
	  if (this.isInfinity()) return p;

	  // P + O = P
	  if (p.isInfinity()) return this;

	  // 12M + 4S + 7A
	  var pz2 = p.z.redSqr();
	  var z2 = this.z.redSqr();
	  var u1 = this.x.redMul(pz2);
	  var u2 = p.x.redMul(z2);
	  var s1 = this.y.redMul(pz2.redMul(p.z));
	  var s2 = p.y.redMul(z2.redMul(this.z));

	  var h = u1.redSub(u2);
	  var r = s1.redSub(s2);
	  if (h.cmpn(0) === 0) {
	    if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);else return this.dbl();
	  }

	  var h2 = h.redSqr();
	  var h3 = h2.redMul(h);
	  var v = u1.redMul(h2);

	  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
	  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
	  var nz = this.z.redMul(p.z).redMul(h);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.mixedAdd = function mixedAdd(p) {
	  // O + P = P
	  if (this.isInfinity()) return p.toJ();

	  // P + O = P
	  if (p.isInfinity()) return this;

	  // 8M + 3S + 7A
	  var z2 = this.z.redSqr();
	  var u1 = this.x;
	  var u2 = p.x.redMul(z2);
	  var s1 = this.y;
	  var s2 = p.y.redMul(z2).redMul(this.z);

	  var h = u1.redSub(u2);
	  var r = s1.redSub(s2);
	  if (h.cmpn(0) === 0) {
	    if (r.cmpn(0) !== 0) return this.curve.jpoint(null, null, null);else return this.dbl();
	  }

	  var h2 = h.redSqr();
	  var h3 = h2.redMul(h);
	  var v = u1.redMul(h2);

	  var nx = r.redSqr().redIAdd(h3).redISub(v).redISub(v);
	  var ny = r.redMul(v.redISub(nx)).redISub(s1.redMul(h3));
	  var nz = this.z.redMul(h);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.dblp = function dblp(pow) {
	  if (pow === 0) return this;
	  if (this.isInfinity()) return this;
	  if (!pow) return this.dbl();

	  if (this.curve.zeroA || this.curve.threeA) {
	    var r = this;
	    for (var i = 0; i < pow; i++) {
	      r = r.dbl();
	    }return r;
	  }

	  // 1M + 2S + 1A + N * (4S + 5M + 8A)
	  // N = 1 => 6M + 6S + 9A
	  var a = this.curve.a;
	  var tinv = this.curve.tinv;

	  var jx = this.x;
	  var jy = this.y;
	  var jz = this.z;
	  var jz4 = jz.redSqr().redSqr();

	  // Reuse results
	  var jyd = jy.redAdd(jy);
	  for (var i = 0; i < pow; i++) {
	    var jx2 = jx.redSqr();
	    var jyd2 = jyd.redSqr();
	    var jyd4 = jyd2.redSqr();
	    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

	    var t1 = jx.redMul(jyd2);
	    var nx = c.redSqr().redISub(t1.redAdd(t1));
	    var t2 = t1.redISub(nx);
	    var dny = c.redMul(t2);
	    dny = dny.redIAdd(dny).redISub(jyd4);
	    var nz = jyd.redMul(jz);
	    if (i + 1 < pow) jz4 = jz4.redMul(jyd4);

	    jx = nx;
	    jz = nz;
	    jyd = dny;
	  }

	  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
	};

	JPoint.prototype.dbl = function dbl() {
	  if (this.isInfinity()) return this;

	  if (this.curve.zeroA) return this._zeroDbl();else if (this.curve.threeA) return this._threeDbl();else return this._dbl();
	};

	JPoint.prototype._zeroDbl = function _zeroDbl() {
	  var nx;
	  var ny;
	  var nz;
	  // Z = 1
	  if (this.zOne) {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
	    //     #doubling-mdbl-2007-bl
	    // 1M + 5S + 14A

	    // XX = X1^2
	    var xx = this.x.redSqr();
	    // YY = Y1^2
	    var yy = this.y.redSqr();
	    // YYYY = YY^2
	    var yyyy = yy.redSqr();
	    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
	    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
	    s = s.redIAdd(s);
	    // M = 3 * XX + a; a = 0
	    var m = xx.redAdd(xx).redIAdd(xx);
	    // T = M ^ 2 - 2*S
	    var t = m.redSqr().redISub(s).redISub(s);

	    // 8 * YYYY
	    var yyyy8 = yyyy.redIAdd(yyyy);
	    yyyy8 = yyyy8.redIAdd(yyyy8);
	    yyyy8 = yyyy8.redIAdd(yyyy8);

	    // X3 = T
	    nx = t;
	    // Y3 = M * (S - T) - 8 * YYYY
	    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
	    // Z3 = 2*Y1
	    nz = this.y.redAdd(this.y);
	  } else {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html
	    //     #doubling-dbl-2009-l
	    // 2M + 5S + 13A

	    // A = X1^2
	    var a = this.x.redSqr();
	    // B = Y1^2
	    var b = this.y.redSqr();
	    // C = B^2
	    var c = b.redSqr();
	    // D = 2 * ((X1 + B)^2 - A - C)
	    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
	    d = d.redIAdd(d);
	    // E = 3 * A
	    var e = a.redAdd(a).redIAdd(a);
	    // F = E^2
	    var f = e.redSqr();

	    // 8 * C
	    var c8 = c.redIAdd(c);
	    c8 = c8.redIAdd(c8);
	    c8 = c8.redIAdd(c8);

	    // X3 = F - 2 * D
	    nx = f.redISub(d).redISub(d);
	    // Y3 = E * (D - X3) - 8 * C
	    ny = e.redMul(d.redISub(nx)).redISub(c8);
	    // Z3 = 2 * Y1 * Z1
	    nz = this.y.redMul(this.z);
	    nz = nz.redIAdd(nz);
	  }

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype._threeDbl = function _threeDbl() {
	  var nx;
	  var ny;
	  var nz;
	  // Z = 1
	  if (this.zOne) {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html
	    //     #doubling-mdbl-2007-bl
	    // 1M + 5S + 15A

	    // XX = X1^2
	    var xx = this.x.redSqr();
	    // YY = Y1^2
	    var yy = this.y.redSqr();
	    // YYYY = YY^2
	    var yyyy = yy.redSqr();
	    // S = 2 * ((X1 + YY)^2 - XX - YYYY)
	    var s = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
	    s = s.redIAdd(s);
	    // M = 3 * XX + a
	    var m = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
	    // T = M^2 - 2 * S
	    var t = m.redSqr().redISub(s).redISub(s);
	    // X3 = T
	    nx = t;
	    // Y3 = M * (S - T) - 8 * YYYY
	    var yyyy8 = yyyy.redIAdd(yyyy);
	    yyyy8 = yyyy8.redIAdd(yyyy8);
	    yyyy8 = yyyy8.redIAdd(yyyy8);
	    ny = m.redMul(s.redISub(t)).redISub(yyyy8);
	    // Z3 = 2 * Y1
	    nz = this.y.redAdd(this.y);
	  } else {
	    // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-3.html#doubling-dbl-2001-b
	    // 3M + 5S

	    // delta = Z1^2
	    var delta = this.z.redSqr();
	    // gamma = Y1^2
	    var gamma = this.y.redSqr();
	    // beta = X1 * gamma
	    var beta = this.x.redMul(gamma);
	    // alpha = 3 * (X1 - delta) * (X1 + delta)
	    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
	    alpha = alpha.redAdd(alpha).redIAdd(alpha);
	    // X3 = alpha^2 - 8 * beta
	    var beta4 = beta.redIAdd(beta);
	    beta4 = beta4.redIAdd(beta4);
	    var beta8 = beta4.redAdd(beta4);
	    nx = alpha.redSqr().redISub(beta8);
	    // Z3 = (Y1 + Z1)^2 - gamma - delta
	    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
	    // Y3 = alpha * (4 * beta - X3) - 8 * gamma^2
	    var ggamma8 = gamma.redSqr();
	    ggamma8 = ggamma8.redIAdd(ggamma8);
	    ggamma8 = ggamma8.redIAdd(ggamma8);
	    ggamma8 = ggamma8.redIAdd(ggamma8);
	    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
	  }

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype._dbl = function _dbl() {
	  var a = this.curve.a;

	  // 4M + 6S + 10A
	  var jx = this.x;
	  var jy = this.y;
	  var jz = this.z;
	  var jz4 = jz.redSqr().redSqr();

	  var jx2 = jx.redSqr();
	  var jy2 = jy.redSqr();

	  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));

	  var jxd4 = jx.redAdd(jx);
	  jxd4 = jxd4.redIAdd(jxd4);
	  var t1 = jxd4.redMul(jy2);
	  var nx = c.redSqr().redISub(t1.redAdd(t1));
	  var t2 = t1.redISub(nx);

	  var jyd8 = jy2.redSqr();
	  jyd8 = jyd8.redIAdd(jyd8);
	  jyd8 = jyd8.redIAdd(jyd8);
	  jyd8 = jyd8.redIAdd(jyd8);
	  var ny = c.redMul(t2).redISub(jyd8);
	  var nz = jy.redAdd(jy).redMul(jz);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.trpl = function trpl() {
	  if (!this.curve.zeroA) return this.dbl().add(this);

	  // hyperelliptic.org/EFD/g1p/auto-shortw-jacobian-0.html#tripling-tpl-2007-bl
	  // 5M + 10S + ...

	  // XX = X1^2
	  var xx = this.x.redSqr();
	  // YY = Y1^2
	  var yy = this.y.redSqr();
	  // ZZ = Z1^2
	  var zz = this.z.redSqr();
	  // YYYY = YY^2
	  var yyyy = yy.redSqr();
	  // M = 3 * XX + a * ZZ2; a = 0
	  var m = xx.redAdd(xx).redIAdd(xx);
	  // MM = M^2
	  var mm = m.redSqr();
	  // E = 6 * ((X1 + YY)^2 - XX - YYYY) - MM
	  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
	  e = e.redIAdd(e);
	  e = e.redAdd(e).redIAdd(e);
	  e = e.redISub(mm);
	  // EE = E^2
	  var ee = e.redSqr();
	  // T = 16*YYYY
	  var t = yyyy.redIAdd(yyyy);
	  t = t.redIAdd(t);
	  t = t.redIAdd(t);
	  t = t.redIAdd(t);
	  // U = (M + E)^2 - MM - EE - T
	  var u = m.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
	  // X3 = 4 * (X1 * EE - 4 * YY * U)
	  var yyu4 = yy.redMul(u);
	  yyu4 = yyu4.redIAdd(yyu4);
	  yyu4 = yyu4.redIAdd(yyu4);
	  var nx = this.x.redMul(ee).redISub(yyu4);
	  nx = nx.redIAdd(nx);
	  nx = nx.redIAdd(nx);
	  // Y3 = 8 * Y1 * (U * (T - U) - E * EE)
	  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
	  ny = ny.redIAdd(ny);
	  ny = ny.redIAdd(ny);
	  ny = ny.redIAdd(ny);
	  // Z3 = (Z1 + E)^2 - ZZ - EE
	  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);

	  return this.curve.jpoint(nx, ny, nz);
	};

	JPoint.prototype.mul = function mul(k, kbase) {
	  k = new BN(k, kbase);

	  return this.curve._wnafMul(this, k);
	};

	JPoint.prototype.eq = function eq(p) {
	  if (p.type === 'affine') return this.eq(p.toJ());

	  if (this === p) return true;

	  // x1 * z2^2 == x2 * z1^2
	  var z2 = this.z.redSqr();
	  var pz2 = p.z.redSqr();
	  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0) return false;

	  // y1 * z2^3 == y2 * z1^3
	  var z3 = z2.redMul(this.z);
	  var pz3 = pz2.redMul(p.z);
	  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
	};

	JPoint.prototype.eqXToP = function eqXToP(x) {
	  var zs = this.z.redSqr();
	  var rx = x.toRed(this.curve.red).redMul(zs);
	  if (this.x.cmp(rx) === 0) return true;

	  var xc = x.clone();
	  var t = this.curve.redN.redMul(zs);
	  for (;;) {
	    xc.iadd(this.curve.n);
	    if (xc.cmp(this.curve.p) >= 0) return false;

	    rx.redIAdd(t);
	    if (this.x.cmp(rx) === 0) return true;
	  }
	  return false;
	};

	JPoint.prototype.inspect = function inspect() {
	  if (this.isInfinity()) return '<EC JPoint Infinity>';
	  return '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
	};

	JPoint.prototype.isInfinity = function isInfinity() {
	  // XXX This code assumes that zero is always zero in red
	  return this.z.cmpn(0) === 0;
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curve = __webpack_require__(100);
	var BN = __webpack_require__(79);
	var inherits = __webpack_require__(12);
	var Base = curve.base;

	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;

	function MontCurve(conf) {
	  Base.call(this, 'mont', conf);

	  this.a = new BN(conf.a, 16).toRed(this.red);
	  this.b = new BN(conf.b, 16).toRed(this.red);
	  this.i4 = new BN(4).toRed(this.red).redInvm();
	  this.two = new BN(2).toRed(this.red);
	  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
	}
	inherits(MontCurve, Base);
	module.exports = MontCurve;

	MontCurve.prototype.validate = function validate(point) {
	  var x = point.normalize().x;
	  var x2 = x.redSqr();
	  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
	  var y = rhs.redSqrt();

	  return y.redSqr().cmp(rhs) === 0;
	};

	function Point(curve, x, z) {
	  Base.BasePoint.call(this, curve, 'projective');
	  if (x === null && z === null) {
	    this.x = this.curve.one;
	    this.z = this.curve.zero;
	  } else {
	    this.x = new BN(x, 16);
	    this.z = new BN(z, 16);
	    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
	    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
	  }
	}
	inherits(Point, Base.BasePoint);

	MontCurve.prototype.decodePoint = function decodePoint(bytes, enc) {
	  return this.point(utils.toArray(bytes, enc), 1);
	};

	MontCurve.prototype.point = function point(x, z) {
	  return new Point(this, x, z);
	};

	MontCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
	  return Point.fromJSON(this, obj);
	};

	Point.prototype.precompute = function precompute() {
	  // No-op
	};

	Point.prototype._encode = function _encode() {
	  return this.getX().toArray('be', this.curve.p.byteLength());
	};

	Point.fromJSON = function fromJSON(curve, obj) {
	  return new Point(curve, obj[0], obj[1] || curve.one);
	};

	Point.prototype.inspect = function inspect() {
	  if (this.isInfinity()) return '<EC Point Infinity>';
	  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
	};

	Point.prototype.isInfinity = function isInfinity() {
	  // XXX This code assumes that zero is always zero in red
	  return this.z.cmpn(0) === 0;
	};

	Point.prototype.dbl = function dbl() {
	  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#doubling-dbl-1987-m-3
	  // 2M + 2S + 4A

	  // A = X1 + Z1
	  var a = this.x.redAdd(this.z);
	  // AA = A^2
	  var aa = a.redSqr();
	  // B = X1 - Z1
	  var b = this.x.redSub(this.z);
	  // BB = B^2
	  var bb = b.redSqr();
	  // C = AA - BB
	  var c = aa.redSub(bb);
	  // X3 = AA * BB
	  var nx = aa.redMul(bb);
	  // Z3 = C * (BB + A24 * C)
	  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
	  return this.curve.point(nx, nz);
	};

	Point.prototype.add = function add() {
	  throw new Error('Not supported on Montgomery curve');
	};

	Point.prototype.diffAdd = function diffAdd(p, diff) {
	  // http://hyperelliptic.org/EFD/g1p/auto-montgom-xz.html#diffadd-dadd-1987-m-3
	  // 4M + 2S + 6A

	  // A = X2 + Z2
	  var a = this.x.redAdd(this.z);
	  // B = X2 - Z2
	  var b = this.x.redSub(this.z);
	  // C = X3 + Z3
	  var c = p.x.redAdd(p.z);
	  // D = X3 - Z3
	  var d = p.x.redSub(p.z);
	  // DA = D * A
	  var da = d.redMul(a);
	  // CB = C * B
	  var cb = c.redMul(b);
	  // X5 = Z1 * (DA + CB)^2
	  var nx = diff.z.redMul(da.redAdd(cb).redSqr());
	  // Z5 = X1 * (DA - CB)^2
	  var nz = diff.x.redMul(da.redISub(cb).redSqr());
	  return this.curve.point(nx, nz);
	};

	Point.prototype.mul = function mul(k) {
	  var t = k.clone();
	  var a = this; // (N / 2) * Q + Q
	  var b = this.curve.point(null, null); // (N / 2) * Q
	  var c = this; // Q

	  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1)) {
	    bits.push(t.andln(1));
	  }for (var i = bits.length - 1; i >= 0; i--) {
	    if (bits[i] === 0) {
	      // N * Q + Q = ((N / 2) * Q + Q)) + (N / 2) * Q
	      a = a.diffAdd(b, c);
	      // N * Q = 2 * ((N / 2) * Q + Q))
	      b = b.dbl();
	    } else {
	      // N * Q = ((N / 2) * Q + Q) + ((N / 2) * Q)
	      b = a.diffAdd(b, c);
	      // N * Q + Q = 2 * ((N / 2) * Q + Q)
	      a = a.dbl();
	    }
	  }
	  return b;
	};

	Point.prototype.mulAdd = function mulAdd() {
	  throw new Error('Not supported on Montgomery curve');
	};

	Point.prototype.jumlAdd = function jumlAdd() {
	  throw new Error('Not supported on Montgomery curve');
	};

	Point.prototype.eq = function eq(other) {
	  return this.getX().cmp(other.getX()) === 0;
	};

	Point.prototype.normalize = function normalize() {
	  this.x = this.x.redMul(this.z.redInvm());
	  this.z = this.curve.one;
	  return this;
	};

	Point.prototype.getX = function getX() {
	  // Normalize coordinates
	  this.normalize();

	  return this.x.fromRed();
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curve = __webpack_require__(100);
	var elliptic = __webpack_require__(90);
	var BN = __webpack_require__(79);
	var inherits = __webpack_require__(12);
	var Base = curve.base;

	var assert = elliptic.utils.assert;

	function EdwardsCurve(conf) {
	  // NOTE: Important as we are creating point in Base.call()
	  this.twisted = (conf.a | 0) !== 1;
	  this.mOneA = this.twisted && (conf.a | 0) === -1;
	  this.extended = this.mOneA;

	  Base.call(this, 'edwards', conf);

	  this.a = new BN(conf.a, 16).umod(this.red.m);
	  this.a = this.a.toRed(this.red);
	  this.c = new BN(conf.c, 16).toRed(this.red);
	  this.c2 = this.c.redSqr();
	  this.d = new BN(conf.d, 16).toRed(this.red);
	  this.dd = this.d.redAdd(this.d);

	  assert(!this.twisted || this.c.fromRed().cmpn(1) === 0);
	  this.oneC = (conf.c | 0) === 1;
	}
	inherits(EdwardsCurve, Base);
	module.exports = EdwardsCurve;

	EdwardsCurve.prototype._mulA = function _mulA(num) {
	  if (this.mOneA) return num.redNeg();else return this.a.redMul(num);
	};

	EdwardsCurve.prototype._mulC = function _mulC(num) {
	  if (this.oneC) return num;else return this.c.redMul(num);
	};

	// Just for compatibility with Short curve
	EdwardsCurve.prototype.jpoint = function jpoint(x, y, z, t) {
	  return this.point(x, y, z, t);
	};

	EdwardsCurve.prototype.pointFromX = function pointFromX(x, odd) {
	  x = new BN(x, 16);
	  if (!x.red) x = x.toRed(this.red);

	  var x2 = x.redSqr();
	  var rhs = this.c2.redSub(this.a.redMul(x2));
	  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));

	  var y2 = rhs.redMul(lhs.redInvm());
	  var y = y2.redSqrt();
	  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0) throw new Error('invalid point');

	  var isOdd = y.fromRed().isOdd();
	  if (odd && !isOdd || !odd && isOdd) y = y.redNeg();

	  return this.point(x, y);
	};

	EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
	  y = new BN(y, 16);
	  if (!y.red) y = y.toRed(this.red);

	  // x^2 = (y^2 - 1) / (d y^2 + 1)
	  var y2 = y.redSqr();
	  var lhs = y2.redSub(this.one);
	  var rhs = y2.redMul(this.d).redAdd(this.one);
	  var x2 = lhs.redMul(rhs.redInvm());

	  if (x2.cmp(this.zero) === 0) {
	    if (odd) throw new Error('invalid point');else return this.point(this.zero, y);
	  }

	  var x = x2.redSqrt();
	  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0) throw new Error('invalid point');

	  if (x.isOdd() !== odd) x = x.redNeg();

	  return this.point(x, y);
	};

	EdwardsCurve.prototype.validate = function validate(point) {
	  if (point.isInfinity()) return true;

	  // Curve: A * X^2 + Y^2 = C^2 * (1 + D * X^2 * Y^2)
	  point.normalize();

	  var x2 = point.x.redSqr();
	  var y2 = point.y.redSqr();
	  var lhs = x2.redMul(this.a).redAdd(y2);
	  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));

	  return lhs.cmp(rhs) === 0;
	};

	function Point(curve, x, y, z, t) {
	  Base.BasePoint.call(this, curve, 'projective');
	  if (x === null && y === null && z === null) {
	    this.x = this.curve.zero;
	    this.y = this.curve.one;
	    this.z = this.curve.one;
	    this.t = this.curve.zero;
	    this.zOne = true;
	  } else {
	    this.x = new BN(x, 16);
	    this.y = new BN(y, 16);
	    this.z = z ? new BN(z, 16) : this.curve.one;
	    this.t = t && new BN(t, 16);
	    if (!this.x.red) this.x = this.x.toRed(this.curve.red);
	    if (!this.y.red) this.y = this.y.toRed(this.curve.red);
	    if (!this.z.red) this.z = this.z.toRed(this.curve.red);
	    if (this.t && !this.t.red) this.t = this.t.toRed(this.curve.red);
	    this.zOne = this.z === this.curve.one;

	    // Use extended coordinates
	    if (this.curve.extended && !this.t) {
	      this.t = this.x.redMul(this.y);
	      if (!this.zOne) this.t = this.t.redMul(this.z.redInvm());
	    }
	  }
	}
	inherits(Point, Base.BasePoint);

	EdwardsCurve.prototype.pointFromJSON = function pointFromJSON(obj) {
	  return Point.fromJSON(this, obj);
	};

	EdwardsCurve.prototype.point = function point(x, y, z, t) {
	  return new Point(this, x, y, z, t);
	};

	Point.fromJSON = function fromJSON(curve, obj) {
	  return new Point(curve, obj[0], obj[1], obj[2]);
	};

	Point.prototype.inspect = function inspect() {
	  if (this.isInfinity()) return '<EC Point Infinity>';
	  return '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
	};

	Point.prototype.isInfinity = function isInfinity() {
	  // XXX This code assumes that zero is always zero in red
	  return this.x.cmpn(0) === 0 && this.y.cmp(this.z) === 0;
	};

	Point.prototype._extDbl = function _extDbl() {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
	  //     #doubling-dbl-2008-hwcd
	  // 4M + 4S

	  // A = X1^2
	  var a = this.x.redSqr();
	  // B = Y1^2
	  var b = this.y.redSqr();
	  // C = 2 * Z1^2
	  var c = this.z.redSqr();
	  c = c.redIAdd(c);
	  // D = a * A
	  var d = this.curve._mulA(a);
	  // E = (X1 + Y1)^2 - A - B
	  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
	  // G = D + B
	  var g = d.redAdd(b);
	  // F = G - C
	  var f = g.redSub(c);
	  // H = D - B
	  var h = d.redSub(b);
	  // X3 = E * F
	  var nx = e.redMul(f);
	  // Y3 = G * H
	  var ny = g.redMul(h);
	  // T3 = E * H
	  var nt = e.redMul(h);
	  // Z3 = F * G
	  var nz = f.redMul(g);
	  return this.curve.point(nx, ny, nz, nt);
	};

	Point.prototype._projDbl = function _projDbl() {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
	  //     #doubling-dbl-2008-bbjlp
	  //     #doubling-dbl-2007-bl
	  // and others
	  // Generally 3M + 4S or 2M + 4S

	  // B = (X1 + Y1)^2
	  var b = this.x.redAdd(this.y).redSqr();
	  // C = X1^2
	  var c = this.x.redSqr();
	  // D = Y1^2
	  var d = this.y.redSqr();

	  var nx;
	  var ny;
	  var nz;
	  if (this.curve.twisted) {
	    // E = a * C
	    var e = this.curve._mulA(c);
	    // F = E + D
	    var f = e.redAdd(d);
	    if (this.zOne) {
	      // X3 = (B - C - D) * (F - 2)
	      nx = b.redSub(c).redSub(d).redMul(f.redSub(this.curve.two));
	      // Y3 = F * (E - D)
	      ny = f.redMul(e.redSub(d));
	      // Z3 = F^2 - 2 * F
	      nz = f.redSqr().redSub(f).redSub(f);
	    } else {
	      // H = Z1^2
	      var h = this.z.redSqr();
	      // J = F - 2 * H
	      var j = f.redSub(h).redISub(h);
	      // X3 = (B-C-D)*J
	      nx = b.redSub(c).redISub(d).redMul(j);
	      // Y3 = F * (E - D)
	      ny = f.redMul(e.redSub(d));
	      // Z3 = F * J
	      nz = f.redMul(j);
	    }
	  } else {
	    // E = C + D
	    var e = c.redAdd(d);
	    // H = (c * Z1)^2
	    var h = this.curve._mulC(this.c.redMul(this.z)).redSqr();
	    // J = E - 2 * H
	    var j = e.redSub(h).redSub(h);
	    // X3 = c * (B - E) * J
	    nx = this.curve._mulC(b.redISub(e)).redMul(j);
	    // Y3 = c * E * (C - D)
	    ny = this.curve._mulC(e).redMul(c.redISub(d));
	    // Z3 = E * J
	    nz = e.redMul(j);
	  }
	  return this.curve.point(nx, ny, nz);
	};

	Point.prototype.dbl = function dbl() {
	  if (this.isInfinity()) return this;

	  // Double in extended coordinates
	  if (this.curve.extended) return this._extDbl();else return this._projDbl();
	};

	Point.prototype._extAdd = function _extAdd(p) {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-extended-1.html
	  //     #addition-add-2008-hwcd-3
	  // 8M

	  // A = (Y1 - X1) * (Y2 - X2)
	  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
	  // B = (Y1 + X1) * (Y2 + X2)
	  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
	  // C = T1 * k * T2
	  var c = this.t.redMul(this.curve.dd).redMul(p.t);
	  // D = Z1 * 2 * Z2
	  var d = this.z.redMul(p.z.redAdd(p.z));
	  // E = B - A
	  var e = b.redSub(a);
	  // F = D - C
	  var f = d.redSub(c);
	  // G = D + C
	  var g = d.redAdd(c);
	  // H = B + A
	  var h = b.redAdd(a);
	  // X3 = E * F
	  var nx = e.redMul(f);
	  // Y3 = G * H
	  var ny = g.redMul(h);
	  // T3 = E * H
	  var nt = e.redMul(h);
	  // Z3 = F * G
	  var nz = f.redMul(g);
	  return this.curve.point(nx, ny, nz, nt);
	};

	Point.prototype._projAdd = function _projAdd(p) {
	  // hyperelliptic.org/EFD/g1p/auto-twisted-projective.html
	  //     #addition-add-2008-bbjlp
	  //     #addition-add-2007-bl
	  // 10M + 1S

	  // A = Z1 * Z2
	  var a = this.z.redMul(p.z);
	  // B = A^2
	  var b = a.redSqr();
	  // C = X1 * X2
	  var c = this.x.redMul(p.x);
	  // D = Y1 * Y2
	  var d = this.y.redMul(p.y);
	  // E = d * C * D
	  var e = this.curve.d.redMul(c).redMul(d);
	  // F = B - E
	  var f = b.redSub(e);
	  // G = B + E
	  var g = b.redAdd(e);
	  // X3 = A * F * ((X1 + Y1) * (X2 + Y2) - C - D)
	  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
	  var nx = a.redMul(f).redMul(tmp);
	  var ny;
	  var nz;
	  if (this.curve.twisted) {
	    // Y3 = A * G * (D - a * C)
	    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
	    // Z3 = F * G
	    nz = f.redMul(g);
	  } else {
	    // Y3 = A * G * (D - C)
	    ny = a.redMul(g).redMul(d.redSub(c));
	    // Z3 = c * F * G
	    nz = this.curve._mulC(f).redMul(g);
	  }
	  return this.curve.point(nx, ny, nz);
	};

	Point.prototype.add = function add(p) {
	  if (this.isInfinity()) return p;
	  if (p.isInfinity()) return this;

	  if (this.curve.extended) return this._extAdd(p);else return this._projAdd(p);
	};

	Point.prototype.mul = function mul(k) {
	  if (this._hasDoubles(k)) return this.curve._fixedNafMul(this, k);else return this.curve._wnafMul(this, k);
	};

	Point.prototype.mulAdd = function mulAdd(k1, p, k2) {
	  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
	};

	Point.prototype.jmulAdd = function jmulAdd(k1, p, k2) {
	  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
	};

	Point.prototype.normalize = function normalize() {
	  if (this.zOne) return this;

	  // Normalize coordinates
	  var zi = this.z.redInvm();
	  this.x = this.x.redMul(zi);
	  this.y = this.y.redMul(zi);
	  if (this.t) this.t = this.t.redMul(zi);
	  this.z = this.curve.one;
	  this.zOne = true;
	  return this;
	};

	Point.prototype.neg = function neg() {
	  return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
	};

	Point.prototype.getX = function getX() {
	  this.normalize();
	  return this.x.fromRed();
	};

	Point.prototype.getY = function getY() {
	  this.normalize();
	  return this.y.fromRed();
	};

	Point.prototype.eq = function eq(other) {
	  return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
	};

	Point.prototype.eqXToP = function eqXToP(x) {
	  var rx = x.toRed(this.curve.red).redMul(this.z);
	  if (this.x.cmp(rx) === 0) return true;

	  var xc = x.clone();
	  var t = this.curve.redN.redMul(this.z);
	  for (;;) {
	    xc.iadd(this.curve.n);
	    if (xc.cmp(this.curve.p) >= 0) return false;

	    rx.redIAdd(t);
	    if (this.x.cmp(rx) === 0) return true;
	  }
	  return false;
	};

	// Compatibility with BaseCurve
	Point.prototype.toP = Point.prototype.normalize;
	Point.prototype.mixedAdd = Point.prototype.add;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var curves = exports;

	var hash = __webpack_require__(94);
	var elliptic = __webpack_require__(90);

	var assert = elliptic.utils.assert;

	function PresetCurve(options) {
	  if (options.type === 'short') this.curve = new elliptic.curve.short(options);else if (options.type === 'edwards') this.curve = new elliptic.curve.edwards(options);else this.curve = new elliptic.curve.mont(options);
	  this.g = this.curve.g;
	  this.n = this.curve.n;
	  this.hash = options.hash;

	  assert(this.g.validate(), 'Invalid curve');
	  assert(this.g.mul(this.n).isInfinity(), 'Invalid curve, G*N != O');
	}
	curves.PresetCurve = PresetCurve;

	function defineCurve(name, options) {
	  Object.defineProperty(curves, name, {
	    configurable: true,
	    enumerable: true,
	    get: function get() {
	      var curve = new PresetCurve(options);
	      Object.defineProperty(curves, name, {
	        configurable: true,
	        enumerable: true,
	        value: curve
	      });
	      return curve;
	    }
	  });
	}

	defineCurve('p192', {
	  type: 'short',
	  prime: 'p192',
	  p: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff',
	  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc',
	  b: '64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1',
	  n: 'ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831',
	  hash: hash.sha256,
	  gRed: false,
	  g: ['188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012', '07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811']
	});

	defineCurve('p224', {
	  type: 'short',
	  prime: 'p224',
	  p: 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001',
	  a: 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe',
	  b: 'b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4',
	  n: 'ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d',
	  hash: hash.sha256,
	  gRed: false,
	  g: ['b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21', 'bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34']
	});

	defineCurve('p256', {
	  type: 'short',
	  prime: null,
	  p: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff',
	  a: 'ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc',
	  b: '5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b',
	  n: 'ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551',
	  hash: hash.sha256,
	  gRed: false,
	  g: ['6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296', '4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5']
	});

	defineCurve('p384', {
	  type: 'short',
	  prime: null,
	  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 ffffffff',
	  a: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'fffffffe ffffffff 00000000 00000000 fffffffc',
	  b: 'b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f ' + '5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef',
	  n: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 ' + 'f4372ddf 581a0db2 48b0a77a ecec196a ccc52973',
	  hash: hash.sha384,
	  gRed: false,
	  g: ['aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 ' + '5502f25d bf55296c 3a545e38 72760ab7', '3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 ' + '0a60b1ce 1d7e819d 7a431d7c 90ea0e5f']
	});

	defineCurve('p521', {
	  type: 'short',
	  prime: null,
	  p: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff',
	  a: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff ffffffff ffffffff fffffffc',
	  b: '00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b ' + '99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd ' + '3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00',
	  n: '000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ' + 'ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 ' + 'f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409',
	  hash: hash.sha512,
	  gRed: false,
	  g: ['000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 ' + '053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 ' + 'a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66', '00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 ' + '579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 ' + '3fad0761 353c7086 a272c240 88be9476 9fd16650']
	});

	defineCurve('curve25519', {
	  type: 'mont',
	  prime: 'p25519',
	  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
	  a: '76d06',
	  b: '0',
	  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
	  hash: hash.sha256,
	  gRed: false,
	  g: ['9']
	});

	defineCurve('ed25519', {
	  type: 'edwards',
	  prime: 'p25519',
	  p: '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed',
	  a: '-1',
	  c: '1',
	  // -121665 * (121666^(-1)) (mod P)
	  d: '52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3',
	  n: '1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed',
	  hash: hash.sha256,
	  gRed: false,
	  g: ['216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a',

	  // 4/5
	  '6666666666666666666666666666666666666666666666666666666666666658']
	});

	var pre;
	try {
	  pre = __webpack_require__(106);
	} catch (e) {
	  pre = undefined;
	}

	defineCurve('secp256k1', {
	  type: 'short',
	  prime: 'k256',
	  p: 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f',
	  a: '0',
	  b: '7',
	  n: 'ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141',
	  h: '1',
	  hash: hash.sha256,

	  // Precomputed endomorphism
	  beta: '7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee',
	  lambda: '5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72',
	  basis: [{
	    a: '3086d221a7d46bcde86c90e49284eb15',
	    b: '-e4437ed6010e88286f547fa90abfe4c3'
	  }, {
	    a: '114ca50f7a8e2f3f657c1108d9d44cfd8',
	    b: '3086d221a7d46bcde86c90e49284eb15'
	  }],

	  gRed: false,
	  g: ['79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798', '483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8', pre]
	});

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  doubles: {
	    step: 4,
	    points: [['e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a', 'f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821'], ['8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508', '11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf'], ['175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739', 'd3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695'], ['363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640', '4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9'], ['8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c', '4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36'], ['723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda', '96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f'], ['eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa', '5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999'], ['100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0', 'cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09'], ['e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d', '9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d'], ['feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d', 'e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088'], ['da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1', '9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d'], ['53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0', '5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8'], ['8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047', '10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a'], ['385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862', '283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453'], ['6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7', '7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160'], ['3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd', '56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0'], ['85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83', '7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6'], ['948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a', '53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589'], ['6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8', 'bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17'], ['e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d', '4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda'], ['e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725', '7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd'], ['213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754', '4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2'], ['4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c', '17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6'], ['fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6', '6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f'], ['76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39', 'c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01'], ['c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891', '893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3'], ['d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b', 'febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f'], ['b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03', '2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7'], ['e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d', 'eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78'], ['a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070', '7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1'], ['90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4', 'e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150'], ['8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da', '662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82'], ['e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11', '1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc'], ['8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e', 'efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b'], ['e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41', '2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51'], ['b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef', '67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45'], ['d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8', 'db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120'], ['324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d', '648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84'], ['4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96', '35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d'], ['9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd', 'ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d'], ['6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5', '9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8'], ['a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266', '40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8'], ['7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71', '34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac'], ['928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac', 'c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f'], ['85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751', '1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962'], ['ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e', '493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907'], ['827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241', 'c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec'], ['eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3', 'be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d'], ['e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f', '4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414'], ['1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19', 'aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd'], ['146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be', 'b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0'], ['fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9', '6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811'], ['da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2', '8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1'], ['a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13', '7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c'], ['174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c', 'ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73'], ['959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba', '2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd'], ['d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151', 'e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405'], ['64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073', 'd99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589'], ['8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458', '38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e'], ['13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b', '69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27'], ['bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366', 'd3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1'], ['8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa', '40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482'], ['8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0', '620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945'], ['dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787', '7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573'], ['f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e', 'ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82']]
	  },
	  naf: {
	    wnd: 7,
	    points: [['f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9', '388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672'], ['2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4', 'd8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6'], ['5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc', '6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da'], ['acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe', 'cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37'], ['774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb', 'd984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b'], ['f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8', 'ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81'], ['d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e', '581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58'], ['defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34', '4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77'], ['2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c', '85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a'], ['352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5', '321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c'], ['2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f', '2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67'], ['9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714', '73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402'], ['daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729', 'a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55'], ['c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db', '2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482'], ['6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4', 'e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82'], ['1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5', 'b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396'], ['605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479', '2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49'], ['62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d', '80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf'], ['80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f', '1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a'], ['7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb', 'd0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7'], ['d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9', 'eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933'], ['49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963', '758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a'], ['77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74', '958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6'], ['f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530', 'e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37'], ['463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b', '5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e'], ['f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247', 'cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6'], ['caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1', 'cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476'], ['2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120', '4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40'], ['7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435', '91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61'], ['754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18', '673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683'], ['e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8', '59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5'], ['186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb', '3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b'], ['df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f', '55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417'], ['5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143', 'efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868'], ['290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba', 'e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a'], ['af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45', 'f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6'], ['766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a', '744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996'], ['59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e', 'c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e'], ['f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8', 'e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d'], ['7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c', '30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2'], ['948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519', 'e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e'], ['7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab', '100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437'], ['3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca', 'ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311'], ['d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf', '8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4'], ['1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610', '68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575'], ['733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4', 'f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d'], ['15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c', 'd56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d'], ['a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940', 'edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629'], ['e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980', 'a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06'], ['311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3', '66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374'], ['34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf', '9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee'], ['f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63', '4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1'], ['d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448', 'fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b'], ['32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf', '5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661'], ['7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5', '8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6'], ['ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6', '8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e'], ['16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5', '5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d'], ['eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99', 'f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc'], ['78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51', 'f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4'], ['494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5', '42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c'], ['a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5', '204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b'], ['c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997', '4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913'], ['841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881', '73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154'], ['5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5', '39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865'], ['36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66', 'd2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc'], ['336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726', 'ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224'], ['8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede', '6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e'], ['1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94', '60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6'], ['85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31', '3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511'], ['29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51', 'b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b'], ['a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252', 'ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2'], ['4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5', 'cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c'], ['d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b', '6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3'], ['ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4', '322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d'], ['af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f', '6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700'], ['e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889', '2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4'], ['591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246', 'b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196'], ['11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984', '998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4'], ['3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a', 'b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257'], ['cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030', 'bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13'], ['c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197', '6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096'], ['c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593', 'c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38'], ['a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef', '21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f'], ['347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38', '60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448'], ['da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a', '49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a'], ['c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111', '5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4'], ['4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502', '7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437'], ['3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea', 'be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7'], ['cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26', '8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d'], ['b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986', '39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a'], ['d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e', '62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54'], ['48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4', '25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77'], ['dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda', 'ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517'], ['6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859', 'cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10'], ['e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f', 'f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125'], ['eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c', '6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e'], ['13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942', 'fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1'], ['ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a', '1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2'], ['b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80', '5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423'], ['ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d', '438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8'], ['8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1', 'cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758'], ['52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63', 'c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375'], ['e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352', '6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d'], ['7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193', 'ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec'], ['5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00', '9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0'], ['32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58', 'ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c'], ['e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7', 'd3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4'], ['8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8', 'c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f'], ['4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e', '67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649'], ['3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d', 'cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826'], ['674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b', '299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5'], ['d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f', 'f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87'], ['30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6', '462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b'], ['be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297', '62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc'], ['93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a', '7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c'], ['b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c', 'ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f'], ['d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52', '4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a'], ['d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb', 'bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46'], ['463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065', 'bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f'], ['7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917', '603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03'], ['74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9', 'cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08'], ['30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3', '553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8'], ['9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57', '712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373'], ['176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66', 'ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3'], ['75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8', '9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8'], ['809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721', '9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1'], ['1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180', '4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9']]
	  }
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var BN = __webpack_require__(79);
	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var assert = utils.assert;

	var KeyPair = __webpack_require__(108);
	var Signature = __webpack_require__(109);

	function EC(options) {
	  if (!(this instanceof EC)) return new EC(options);

	  // Shortcut `elliptic.ec(curve-name)`
	  if (typeof options === 'string') {
	    assert(elliptic.curves.hasOwnProperty(options), 'Unknown curve ' + options);

	    options = elliptic.curves[options];
	  }

	  // Shortcut for `elliptic.ec(elliptic.curves.curveName)`
	  if (options instanceof elliptic.curves.PresetCurve) options = { curve: options };

	  this.curve = options.curve.curve;
	  this.n = this.curve.n;
	  this.nh = this.n.ushrn(1);
	  this.g = this.curve.g;

	  // Point on curve
	  this.g = options.curve.g;
	  this.g.precompute(options.curve.n.bitLength() + 1);

	  // Hash for function for DRBG
	  this.hash = options.hash || options.curve.hash;
	}
	module.exports = EC;

	EC.prototype.keyPair = function keyPair(options) {
	  return new KeyPair(this, options);
	};

	EC.prototype.keyFromPrivate = function keyFromPrivate(priv, enc) {
	  return KeyPair.fromPrivate(this, priv, enc);
	};

	EC.prototype.keyFromPublic = function keyFromPublic(pub, enc) {
	  return KeyPair.fromPublic(this, pub, enc);
	};

	EC.prototype.genKeyPair = function genKeyPair(options) {
	  if (!options) options = {};

	  // Instantiate Hmac_DRBG
	  var drbg = new elliptic.hmacDRBG({
	    hash: this.hash,
	    pers: options.pers,
	    entropy: options.entropy || elliptic.rand(this.hash.hmacStrength),
	    nonce: this.n.toArray()
	  });

	  var bytes = this.n.byteLength();
	  var ns2 = this.n.sub(new BN(2));
	  do {
	    var priv = new BN(drbg.generate(bytes));
	    if (priv.cmp(ns2) > 0) continue;

	    priv.iaddn(1);
	    return this.keyFromPrivate(priv);
	  } while (true);
	};

	EC.prototype._truncateToN = function truncateToN(msg, truncOnly) {
	  var delta = msg.byteLength() * 8 - this.n.bitLength();
	  if (delta > 0) msg = msg.ushrn(delta);
	  if (!truncOnly && msg.cmp(this.n) >= 0) return msg.sub(this.n);else return msg;
	};

	EC.prototype.sign = function sign(msg, key, enc, options) {
	  if ((typeof enc === 'undefined' ? 'undefined' : _typeof(enc)) === 'object') {
	    options = enc;
	    enc = null;
	  }
	  if (!options) options = {};

	  key = this.keyFromPrivate(key, enc);
	  msg = this._truncateToN(new BN(msg, 16));

	  // Zero-extend key to provide enough entropy
	  var bytes = this.n.byteLength();
	  var bkey = key.getPrivate().toArray('be', bytes);

	  // Zero-extend nonce to have the same byte size as N
	  var nonce = msg.toArray('be', bytes);

	  // Instantiate Hmac_DRBG
	  var drbg = new elliptic.hmacDRBG({
	    hash: this.hash,
	    entropy: bkey,
	    nonce: nonce,
	    pers: options.pers,
	    persEnc: options.persEnc
	  });

	  // Number of bytes to generate
	  var ns1 = this.n.sub(new BN(1));

	  for (var iter = 0; true; iter++) {
	    var k = options.k ? options.k(iter) : new BN(drbg.generate(this.n.byteLength()));
	    k = this._truncateToN(k, true);
	    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0) continue;

	    var kp = this.g.mul(k);
	    if (kp.isInfinity()) continue;

	    var kpX = kp.getX();
	    var r = kpX.umod(this.n);
	    if (r.cmpn(0) === 0) continue;

	    var s = k.invm(this.n).mul(r.mul(key.getPrivate()).iadd(msg));
	    s = s.umod(this.n);
	    if (s.cmpn(0) === 0) continue;

	    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r) !== 0 ? 2 : 0);

	    // Use complement of `s`, if it is > `n / 2`
	    if (options.canonical && s.cmp(this.nh) > 0) {
	      s = this.n.sub(s);
	      recoveryParam ^= 1;
	    }

	    return new Signature({ r: r, s: s, recoveryParam: recoveryParam });
	  }
	};

	EC.prototype.verify = function verify(msg, signature, key, enc) {
	  msg = this._truncateToN(new BN(msg, 16));
	  key = this.keyFromPublic(key, enc);
	  signature = new Signature(signature, 'hex');

	  // Perform primitive values validation
	  var r = signature.r;
	  var s = signature.s;
	  if (r.cmpn(1) < 0 || r.cmp(this.n) >= 0) return false;
	  if (s.cmpn(1) < 0 || s.cmp(this.n) >= 0) return false;

	  // Validate signature
	  var sinv = s.invm(this.n);
	  var u1 = sinv.mul(msg).umod(this.n);
	  var u2 = sinv.mul(r).umod(this.n);

	  if (!this.curve._maxwellTrick) {
	    var p = this.g.mulAdd(u1, key.getPublic(), u2);
	    if (p.isInfinity()) return false;

	    return p.getX().umod(this.n).cmp(r) === 0;
	  }

	  // NOTE: Greg Maxwell's trick, inspired by:
	  // https://git.io/vad3K

	  var p = this.g.jmulAdd(u1, key.getPublic(), u2);
	  if (p.isInfinity()) return false;

	  // Compare `p.x` of Jacobian point with `r`,
	  // this will do `p.x == r * p.z^2` instead of multiplying `p.x` by the
	  // inverse of `p.z^2`
	  return p.eqXToP(r);
	};

	EC.prototype.recoverPubKey = function (msg, signature, j, enc) {
	  assert((3 & j) === j, 'The recovery param is more than two bits');
	  signature = new Signature(signature, enc);

	  var n = this.n;
	  var e = new BN(msg);
	  var r = signature.r;
	  var s = signature.s;

	  // A set LSB signifies that the y-coordinate is odd
	  var isYOdd = j & 1;
	  var isSecondKey = j >> 1;
	  if (r.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey) throw new Error('Unable to find sencond key candinate');

	  // 1.1. Let x = r + jn.
	  if (isSecondKey) r = this.curve.pointFromX(r.add(this.curve.n), isYOdd);else r = this.curve.pointFromX(r, isYOdd);

	  var rInv = signature.r.invm(n);
	  var s1 = n.sub(e).mul(rInv).umod(n);
	  var s2 = s.mul(rInv).umod(n);

	  // 1.6.1 Compute Q = r^-1 (sR -  eG)
	  //               Q = r^-1 (sR + -eG)
	  return this.g.mulAdd(s1, r, s2);
	};

	EC.prototype.getKeyRecoveryParam = function (e, signature, Q, enc) {
	  signature = new Signature(signature, enc);
	  if (signature.recoveryParam !== null) return signature.recoveryParam;

	  for (var i = 0; i < 4; i++) {
	    var Qprime;
	    try {
	      Qprime = this.recoverPubKey(e, signature, i);
	    } catch (e) {
	      continue;
	    }

	    if (Qprime.eq(Q)) return i;
	  }
	  throw new Error('Unable to find valid recovery factor');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BN = __webpack_require__(79);

	function KeyPair(ec, options) {
	  this.ec = ec;
	  this.priv = null;
	  this.pub = null;

	  // KeyPair(ec, { priv: ..., pub: ... })
	  if (options.priv) this._importPrivate(options.priv, options.privEnc);
	  if (options.pub) this._importPublic(options.pub, options.pubEnc);
	}
	module.exports = KeyPair;

	KeyPair.fromPublic = function fromPublic(ec, pub, enc) {
	  if (pub instanceof KeyPair) return pub;

	  return new KeyPair(ec, {
	    pub: pub,
	    pubEnc: enc
	  });
	};

	KeyPair.fromPrivate = function fromPrivate(ec, priv, enc) {
	  if (priv instanceof KeyPair) return priv;

	  return new KeyPair(ec, {
	    priv: priv,
	    privEnc: enc
	  });
	};

	KeyPair.prototype.validate = function validate() {
	  var pub = this.getPublic();

	  if (pub.isInfinity()) return { result: false, reason: 'Invalid public key' };
	  if (!pub.validate()) return { result: false, reason: 'Public key is not a point' };
	  if (!pub.mul(this.ec.curve.n).isInfinity()) return { result: false, reason: 'Public key * N != O' };

	  return { result: true, reason: null };
	};

	KeyPair.prototype.getPublic = function getPublic(compact, enc) {
	  // compact is optional argument
	  if (typeof compact === 'string') {
	    enc = compact;
	    compact = null;
	  }

	  if (!this.pub) this.pub = this.ec.g.mul(this.priv);

	  if (!enc) return this.pub;

	  return this.pub.encode(enc, compact);
	};

	KeyPair.prototype.getPrivate = function getPrivate(enc) {
	  if (enc === 'hex') return this.priv.toString(16, 2);else return this.priv;
	};

	KeyPair.prototype._importPrivate = function _importPrivate(key, enc) {
	  this.priv = new BN(key, enc || 16);

	  // Ensure that the priv won't be bigger than n, otherwise we may fail
	  // in fixed multiplication method
	  this.priv = this.priv.umod(this.ec.curve.n);
	};

	KeyPair.prototype._importPublic = function _importPublic(key, enc) {
	  if (key.x || key.y) {
	    this.pub = this.ec.curve.point(key.x, key.y);
	    return;
	  }
	  this.pub = this.ec.curve.decodePoint(key, enc);
	};

	// ECDH
	KeyPair.prototype.derive = function derive(pub) {
	  return pub.mul(this.priv).getX();
	};

	// ECDSA
	KeyPair.prototype.sign = function sign(msg, enc, options) {
	  return this.ec.sign(msg, this, enc, options);
	};

	KeyPair.prototype.verify = function verify(msg, signature) {
	  return this.ec.verify(msg, signature, this);
	};

	KeyPair.prototype.inspect = function inspect() {
	  return '<Key priv: ' + (this.priv && this.priv.toString(16, 2)) + ' pub: ' + (this.pub && this.pub.inspect()) + ' >';
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BN = __webpack_require__(79);

	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var assert = utils.assert;

	function Signature(options, enc) {
	  if (options instanceof Signature) return options;

	  if (this._importDER(options, enc)) return;

	  assert(options.r && options.s, 'Signature without r or s');
	  this.r = new BN(options.r, 16);
	  this.s = new BN(options.s, 16);
	  if (options.recoveryParam === undefined) this.recoveryParam = null;else this.recoveryParam = options.recoveryParam;
	}
	module.exports = Signature;

	function Position() {
	  this.place = 0;
	}

	function getLength(buf, p) {
	  var initial = buf[p.place++];
	  if (!(initial & 0x80)) {
	    return initial;
	  }
	  var octetLen = initial & 0xf;
	  var val = 0;
	  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
	    val <<= 8;
	    val |= buf[off];
	  }
	  p.place = off;
	  return val;
	}

	function rmPadding(buf) {
	  var i = 0;
	  var len = buf.length - 1;
	  while (!buf[i] && !(buf[i + 1] & 0x80) && i < len) {
	    i++;
	  }
	  if (i === 0) {
	    return buf;
	  }
	  return buf.slice(i);
	}

	Signature.prototype._importDER = function _importDER(data, enc) {
	  data = utils.toArray(data, enc);
	  var p = new Position();
	  if (data[p.place++] !== 0x30) {
	    return false;
	  }
	  var len = getLength(data, p);
	  if (len + p.place !== data.length) {
	    return false;
	  }
	  if (data[p.place++] !== 0x02) {
	    return false;
	  }
	  var rlen = getLength(data, p);
	  var r = data.slice(p.place, rlen + p.place);
	  p.place += rlen;
	  if (data[p.place++] !== 0x02) {
	    return false;
	  }
	  var slen = getLength(data, p);
	  if (data.length !== slen + p.place) {
	    return false;
	  }
	  var s = data.slice(p.place, slen + p.place);
	  if (r[0] === 0 && r[1] & 0x80) {
	    r = r.slice(1);
	  }
	  if (s[0] === 0 && s[1] & 0x80) {
	    s = s.slice(1);
	  }

	  this.r = new BN(r);
	  this.s = new BN(s);
	  this.recoveryParam = null;

	  return true;
	};

	function constructLength(arr, len) {
	  if (len < 0x80) {
	    arr.push(len);
	    return;
	  }
	  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
	  arr.push(octets | 0x80);
	  while (--octets) {
	    arr.push(len >>> (octets << 3) & 0xff);
	  }
	  arr.push(len);
	}

	Signature.prototype.toDER = function toDER(enc) {
	  var r = this.r.toArray();
	  var s = this.s.toArray();

	  // Pad values
	  if (r[0] & 0x80) r = [0].concat(r);
	  // Pad values
	  if (s[0] & 0x80) s = [0].concat(s);

	  r = rmPadding(r);
	  s = rmPadding(s);

	  while (!s[0] && !(s[1] & 0x80)) {
	    s = s.slice(1);
	  }
	  var arr = [0x02];
	  constructLength(arr, r.length);
	  arr = arr.concat(r);
	  arr.push(0x02);
	  constructLength(arr, s.length);
	  var backHalf = arr.concat(s);
	  var res = [0x30];
	  constructLength(res, backHalf.length);
	  res = res.concat(backHalf);
	  return utils.encode(res, enc);
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hash = __webpack_require__(94);
	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var assert = utils.assert;
	var parseBytes = utils.parseBytes;
	var KeyPair = __webpack_require__(111);
	var Signature = __webpack_require__(112);

	function EDDSA(curve) {
	  assert(curve === 'ed25519', 'only tested with ed25519 so far');

	  if (!(this instanceof EDDSA)) return new EDDSA(curve);

	  var curve = elliptic.curves[curve].curve;
	  this.curve = curve;
	  this.g = curve.g;
	  this.g.precompute(curve.n.bitLength() + 1);

	  this.pointClass = curve.point().constructor;
	  this.encodingLength = Math.ceil(curve.n.bitLength() / 8);
	  this.hash = hash.sha512;
	}

	module.exports = EDDSA;

	/**
	* @param {Array|String} message - message bytes
	* @param {Array|String|KeyPair} secret - secret bytes or a keypair
	* @returns {Signature} - signature
	*/
	EDDSA.prototype.sign = function sign(message, secret) {
	  message = parseBytes(message);
	  var key = this.keyFromSecret(secret);
	  var r = this.hashInt(key.messagePrefix(), message);
	  var R = this.g.mul(r);
	  var Rencoded = this.encodePoint(R);
	  var s_ = this.hashInt(Rencoded, key.pubBytes(), message).mul(key.priv());
	  var S = r.add(s_).umod(this.curve.n);
	  return this.makeSignature({ R: R, S: S, Rencoded: Rencoded });
	};

	/**
	* @param {Array} message - message bytes
	* @param {Array|String|Signature} sig - sig bytes
	* @param {Array|String|Point|KeyPair} pub - public key
	* @returns {Boolean} - true if public key matches sig of message
	*/
	EDDSA.prototype.verify = function verify(message, sig, pub) {
	  message = parseBytes(message);
	  sig = this.makeSignature(sig);
	  var key = this.keyFromPublic(pub);
	  var h = this.hashInt(sig.Rencoded(), key.pubBytes(), message);
	  var SG = this.g.mul(sig.S());
	  var RplusAh = sig.R().add(key.pub().mul(h));
	  return RplusAh.eq(SG);
	};

	EDDSA.prototype.hashInt = function hashInt() {
	  var hash = this.hash();
	  for (var i = 0; i < arguments.length; i++) {
	    hash.update(arguments[i]);
	  }return utils.intFromLE(hash.digest()).umod(this.curve.n);
	};

	EDDSA.prototype.keyFromPublic = function keyFromPublic(pub) {
	  return KeyPair.fromPublic(this, pub);
	};

	EDDSA.prototype.keyFromSecret = function keyFromSecret(secret) {
	  return KeyPair.fromSecret(this, secret);
	};

	EDDSA.prototype.makeSignature = function makeSignature(sig) {
	  if (sig instanceof Signature) return sig;
	  return new Signature(this, sig);
	};

	/**
	* * https://tools.ietf.org/html/draft-josefsson-eddsa-ed25519-03#section-5.2
	*
	* EDDSA defines methods for encoding and decoding points and integers. These are
	* helper convenience methods, that pass along to utility functions implied
	* parameters.
	*
	*/
	EDDSA.prototype.encodePoint = function encodePoint(point) {
	  var enc = point.getY().toArray('le', this.encodingLength);
	  enc[this.encodingLength - 1] |= point.getX().isOdd() ? 0x80 : 0;
	  return enc;
	};

	EDDSA.prototype.decodePoint = function decodePoint(bytes) {
	  bytes = utils.parseBytes(bytes);

	  var lastIx = bytes.length - 1;
	  var normed = bytes.slice(0, lastIx).concat(bytes[lastIx] & ~0x80);
	  var xIsOdd = (bytes[lastIx] & 0x80) !== 0;

	  var y = utils.intFromLE(normed);
	  return this.curve.pointFromY(y, xIsOdd);
	};

	EDDSA.prototype.encodeInt = function encodeInt(num) {
	  return num.toArray('le', this.encodingLength);
	};

	EDDSA.prototype.decodeInt = function decodeInt(bytes) {
	  return utils.intFromLE(bytes);
	};

	EDDSA.prototype.isPoint = function isPoint(val) {
	  return val instanceof this.pointClass;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var assert = utils.assert;
	var parseBytes = utils.parseBytes;
	var cachedProperty = utils.cachedProperty;

	/**
	* @param {EDDSA} eddsa - instance
	* @param {Object} params - public/private key parameters
	*
	* @param {Array<Byte>} [params.secret] - secret seed bytes
	* @param {Point} [params.pub] - public key point (aka `A` in eddsa terms)
	* @param {Array<Byte>} [params.pub] - public key point encoded as bytes
	*
	*/
	function KeyPair(eddsa, params) {
	  this.eddsa = eddsa;
	  this._secret = parseBytes(params.secret);
	  if (eddsa.isPoint(params.pub)) this._pub = params.pub;else this._pubBytes = parseBytes(params.pub);
	}

	KeyPair.fromPublic = function fromPublic(eddsa, pub) {
	  if (pub instanceof KeyPair) return pub;
	  return new KeyPair(eddsa, { pub: pub });
	};

	KeyPair.fromSecret = function fromSecret(eddsa, secret) {
	  if (secret instanceof KeyPair) return secret;
	  return new KeyPair(eddsa, { secret: secret });
	};

	KeyPair.prototype.secret = function secret() {
	  return this._secret;
	};

	cachedProperty(KeyPair, 'pubBytes', function pubBytes() {
	  return this.eddsa.encodePoint(this.pub());
	});

	cachedProperty(KeyPair, 'pub', function pub() {
	  if (this._pubBytes) return this.eddsa.decodePoint(this._pubBytes);
	  return this.eddsa.g.mul(this.priv());
	});

	cachedProperty(KeyPair, 'privBytes', function privBytes() {
	  var eddsa = this.eddsa;
	  var hash = this.hash();
	  var lastIx = eddsa.encodingLength - 1;

	  var a = hash.slice(0, eddsa.encodingLength);
	  a[0] &= 248;
	  a[lastIx] &= 127;
	  a[lastIx] |= 64;

	  return a;
	});

	cachedProperty(KeyPair, 'priv', function priv() {
	  return this.eddsa.decodeInt(this.privBytes());
	});

	cachedProperty(KeyPair, 'hash', function hash() {
	  return this.eddsa.hash().update(this.secret()).digest();
	});

	cachedProperty(KeyPair, 'messagePrefix', function messagePrefix() {
	  return this.hash().slice(this.eddsa.encodingLength);
	});

	KeyPair.prototype.sign = function sign(message) {
	  assert(this._secret, 'KeyPair can only verify');
	  return this.eddsa.sign(message, this);
	};

	KeyPair.prototype.verify = function verify(message, sig) {
	  return this.eddsa.verify(message, sig, this);
	};

	KeyPair.prototype.getSecret = function getSecret(enc) {
	  assert(this._secret, 'KeyPair is public only');
	  return utils.encode(this.secret(), enc);
	};

	KeyPair.prototype.getPublic = function getPublic(enc) {
	  return utils.encode(this.pubBytes(), enc);
	};

	module.exports = KeyPair;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var BN = __webpack_require__(79);
	var elliptic = __webpack_require__(90);
	var utils = elliptic.utils;
	var assert = utils.assert;
	var cachedProperty = utils.cachedProperty;
	var parseBytes = utils.parseBytes;

	/**
	* @param {EDDSA} eddsa - eddsa instance
	* @param {Array<Bytes>|Object} sig -
	* @param {Array<Bytes>|Point} [sig.R] - R point as Point or bytes
	* @param {Array<Bytes>|bn} [sig.S] - S scalar as bn or bytes
	* @param {Array<Bytes>} [sig.Rencoded] - R point encoded
	* @param {Array<Bytes>} [sig.Sencoded] - S scalar encoded
	*/
	function Signature(eddsa, sig) {
	  this.eddsa = eddsa;

	  if ((typeof sig === 'undefined' ? 'undefined' : _typeof(sig)) !== 'object') sig = parseBytes(sig);

	  if (Array.isArray(sig)) {
	    sig = {
	      R: sig.slice(0, eddsa.encodingLength),
	      S: sig.slice(eddsa.encodingLength)
	    };
	  }

	  assert(sig.R && sig.S, 'Signature without R or S');

	  if (eddsa.isPoint(sig.R)) this._R = sig.R;
	  if (sig.S instanceof BN) this._S = sig.S;

	  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
	  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
	}

	cachedProperty(Signature, 'S', function S() {
	  return this.eddsa.decodeInt(this.Sencoded());
	});

	cachedProperty(Signature, 'R', function R() {
	  return this.eddsa.decodePoint(this.Rencoded());
	});

	cachedProperty(Signature, 'Rencoded', function Rencoded() {
	  return this.eddsa.encodePoint(this.R());
	});

	cachedProperty(Signature, 'Sencoded', function Sencoded() {
	  return this.eddsa.encodeInt(this.S());
	});

	Signature.prototype.toBytes = function toBytes() {
	  return this.Rencoded().concat(this.Sencoded());
	};

	Signature.prototype.toHex = function toHex() {
	  return utils.encode(this.toBytes(), 'hex').toUpperCase();
	};

	module.exports = Signature;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var asn1 = __webpack_require__(114);
	var aesid = __webpack_require__(131);
	var fixProc = __webpack_require__(132);
	var ciphers = __webpack_require__(52);
	var compat = __webpack_require__(48);
	module.exports = parseKeys;

	function parseKeys(buffer) {
	  var password;
	  if ((typeof buffer === 'undefined' ? 'undefined' : _typeof(buffer)) === 'object' && !Buffer.isBuffer(buffer)) {
	    password = buffer.passphrase;
	    buffer = buffer.key;
	  }
	  if (typeof buffer === 'string') {
	    buffer = new Buffer(buffer);
	  }

	  var stripped = fixProc(buffer, password);

	  var type = stripped.tag;
	  var data = stripped.data;
	  var subtype, ndata;
	  switch (type) {
	    case 'PUBLIC KEY':
	      ndata = asn1.PublicKey.decode(data, 'der');
	      subtype = ndata.algorithm.algorithm.join('.');
	      switch (subtype) {
	        case '1.2.840.113549.1.1.1':
	          return asn1.RSAPublicKey.decode(ndata.subjectPublicKey.data, 'der');
	        case '1.2.840.10045.2.1':
	          ndata.subjectPrivateKey = ndata.subjectPublicKey;
	          return {
	            type: 'ec',
	            data: ndata
	          };
	        case '1.2.840.10040.4.1':
	          ndata.algorithm.params.pub_key = asn1.DSAparam.decode(ndata.subjectPublicKey.data, 'der');
	          return {
	            type: 'dsa',
	            data: ndata.algorithm.params
	          };
	        default:
	          throw new Error('unknown key id ' + subtype);
	      }
	      throw new Error('unknown key type ' + type);
	    case 'ENCRYPTED PRIVATE KEY':
	      data = asn1.EncryptedPrivateKey.decode(data, 'der');
	      data = decrypt(data, password);
	    // falls through
	    case 'PRIVATE KEY':
	      ndata = asn1.PrivateKey.decode(data, 'der');
	      subtype = ndata.algorithm.algorithm.join('.');
	      switch (subtype) {
	        case '1.2.840.113549.1.1.1':
	          return asn1.RSAPrivateKey.decode(ndata.subjectPrivateKey, 'der');
	        case '1.2.840.10045.2.1':
	          return {
	            curve: ndata.algorithm.curve,
	            privateKey: asn1.ECPrivateKey.decode(ndata.subjectPrivateKey, 'der').privateKey
	          };
	        case '1.2.840.10040.4.1':
	          ndata.algorithm.params.priv_key = asn1.DSAparam.decode(ndata.subjectPrivateKey, 'der');
	          return {
	            type: 'dsa',
	            params: ndata.algorithm.params
	          };
	        default:
	          throw new Error('unknown key id ' + subtype);
	      }
	      throw new Error('unknown key type ' + type);
	    case 'RSA PUBLIC KEY':
	      return asn1.RSAPublicKey.decode(data, 'der');
	    case 'RSA PRIVATE KEY':
	      return asn1.RSAPrivateKey.decode(data, 'der');
	    case 'DSA PRIVATE KEY':
	      return {
	        type: 'dsa',
	        params: asn1.DSAPrivateKey.decode(data, 'der')
	      };
	    case 'EC PRIVATE KEY':
	      data = asn1.ECPrivateKey.decode(data, 'der');
	      return {
	        curve: data.parameters.value,
	        privateKey: data.privateKey
	      };
	    default:
	      throw new Error('unknown key type ' + type);
	  }
	}
	parseKeys.signature = asn1.signature;
	function decrypt(data, password) {
	  var salt = data.algorithm.decrypt.kde.kdeparams.salt;
	  var iters = parseInt(data.algorithm.decrypt.kde.kdeparams.iters.toString(), 10);
	  var algo = aesid[data.algorithm.decrypt.cipher.algo.join('.')];
	  var iv = data.algorithm.decrypt.cipher.iv;
	  var cipherText = data.subjectPrivateKey;
	  var keylen = parseInt(algo.split('-')[1], 10) / 8;
	  var key = compat.pbkdf2Sync(password, salt, iters, keylen);
	  var cipher = ciphers.createDecipheriv(algo, key, iv);
	  var out = [];
	  out.push(cipher.update(cipherText));
	  out.push(cipher.final());
	  return Buffer.concat(out);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// from https://github.com/indutny/self-signed/blob/gh-pages/lib/asn1.js
	// Fedor, you are amazing.

	var asn1 = __webpack_require__(115);

	var RSAPrivateKey = asn1.define('RSAPrivateKey', function () {
	  this.seq().obj(this.key('version').int(), this.key('modulus').int(), this.key('publicExponent').int(), this.key('privateExponent').int(), this.key('prime1').int(), this.key('prime2').int(), this.key('exponent1').int(), this.key('exponent2').int(), this.key('coefficient').int());
	});
	exports.RSAPrivateKey = RSAPrivateKey;

	var RSAPublicKey = asn1.define('RSAPublicKey', function () {
	  this.seq().obj(this.key('modulus').int(), this.key('publicExponent').int());
	});
	exports.RSAPublicKey = RSAPublicKey;

	var PublicKey = asn1.define('SubjectPublicKeyInfo', function () {
	  this.seq().obj(this.key('algorithm').use(AlgorithmIdentifier), this.key('subjectPublicKey').bitstr());
	});
	exports.PublicKey = PublicKey;

	var AlgorithmIdentifier = asn1.define('AlgorithmIdentifier', function () {
	  this.seq().obj(this.key('algorithm').objid(), this.key('none').null_().optional(), this.key('curve').objid().optional(), this.key('params').seq().obj(this.key('p').int(), this.key('q').int(), this.key('g').int()).optional());
	});

	var PrivateKeyInfo = asn1.define('PrivateKeyInfo', function () {
	  this.seq().obj(this.key('version').int(), this.key('algorithm').use(AlgorithmIdentifier), this.key('subjectPrivateKey').octstr());
	});
	exports.PrivateKey = PrivateKeyInfo;
	var EncryptedPrivateKeyInfo = asn1.define('EncryptedPrivateKeyInfo', function () {
	  this.seq().obj(this.key('algorithm').seq().obj(this.key('id').objid(), this.key('decrypt').seq().obj(this.key('kde').seq().obj(this.key('id').objid(), this.key('kdeparams').seq().obj(this.key('salt').octstr(), this.key('iters').int())), this.key('cipher').seq().obj(this.key('algo').objid(), this.key('iv').octstr()))), this.key('subjectPrivateKey').octstr());
	});

	exports.EncryptedPrivateKey = EncryptedPrivateKeyInfo;

	var DSAPrivateKey = asn1.define('DSAPrivateKey', function () {
	  this.seq().obj(this.key('version').int(), this.key('p').int(), this.key('q').int(), this.key('g').int(), this.key('pub_key').int(), this.key('priv_key').int());
	});
	exports.DSAPrivateKey = DSAPrivateKey;

	exports.DSAparam = asn1.define('DSAparam', function () {
	  this.int();
	});
	var ECPrivateKey = asn1.define('ECPrivateKey', function () {
	  this.seq().obj(this.key('version').int(), this.key('privateKey').octstr(), this.key('parameters').optional().explicit(0).use(ECParameters), this.key('publicKey').optional().explicit(1).bitstr());
	});
	exports.ECPrivateKey = ECPrivateKey;
	var ECParameters = asn1.define('ECParameters', function () {
	  this.choice({
	    namedCurve: this.objid()
	  });
	});

	exports.signature = asn1.define('signature', function () {
	  this.seq().obj(this.key('r').int(), this.key('s').int());
	});

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asn1 = exports;

	asn1.bignum = __webpack_require__(79);

	asn1.define = __webpack_require__(116).define;
	asn1.base = __webpack_require__(119);
	asn1.constants = __webpack_require__(123);
	asn1.decoders = __webpack_require__(125);
	asn1.encoders = __webpack_require__(128);

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var asn1 = __webpack_require__(115);
	var inherits = __webpack_require__(12);

	var api = exports;

	api.define = function define(name, body) {
	  return new Entity(name, body);
	};

	function Entity(name, body) {
	  this.name = name;
	  this.body = body;

	  this.decoders = {};
	  this.encoders = {};
	};

	Entity.prototype._createNamed = function createNamed(base) {
	  var named;
	  try {
	    named = __webpack_require__(117).runInThisContext('(function ' + this.name + '(entity) {\n' + '  this._initNamed(entity);\n' + '})');
	  } catch (e) {
	    named = function named(entity) {
	      this._initNamed(entity);
	    };
	  }
	  inherits(named, base);
	  named.prototype._initNamed = function initnamed(entity) {
	    base.call(this, entity);
	  };

	  return new named(this);
	};

	Entity.prototype._getDecoder = function _getDecoder(enc) {
	  enc = enc || 'der';
	  // Lazily create decoder
	  if (!this.decoders.hasOwnProperty(enc)) this.decoders[enc] = this._createNamed(asn1.decoders[enc]);
	  return this.decoders[enc];
	};

	Entity.prototype.decode = function decode(data, enc, options) {
	  return this._getDecoder(enc).decode(data, options);
	};

	Entity.prototype._getEncoder = function _getEncoder(enc) {
	  enc = enc || 'der';
	  // Lazily create encoder
	  if (!this.encoders.hasOwnProperty(enc)) this.encoders[enc] = this._createNamed(asn1.encoders[enc]);
	  return this.encoders[enc];
	};

	Entity.prototype.encode = function encode(data, enc, /* internal */reporter) {
	  return this._getEncoder(enc).encode(data, reporter);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var indexOf = __webpack_require__(118);

	var Object_keys = function Object_keys(obj) {
	    if (Object.keys) return Object.keys(obj);else {
	        var res = [];
	        for (var key in obj) {
	            res.push(key);
	        }return res;
	    }
	};

	var forEach = function forEach(xs, fn) {
	    if (xs.forEach) return xs.forEach(fn);else for (var i = 0; i < xs.length; i++) {
	        fn(xs[i], i, xs);
	    }
	};

	var defineProp = function () {
	    try {
	        Object.defineProperty({}, '_', {});
	        return function (obj, name, value) {
	            Object.defineProperty(obj, name, {
	                writable: true,
	                enumerable: false,
	                configurable: true,
	                value: value
	            });
	        };
	    } catch (e) {
	        return function (obj, name, value) {
	            obj[name] = value;
	        };
	    }
	}();

	var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function', 'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError', 'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError', 'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape', 'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

	function Context() {}
	Context.prototype = {};

	var Script = exports.Script = function NodeScript(code) {
	    if (!(this instanceof Script)) return new Script(code);
	    this.code = code;
	};

	Script.prototype.runInContext = function (context) {
	    if (!(context instanceof Context)) {
	        throw new TypeError("needs a 'context' argument.");
	    }

	    var iframe = document.createElement('iframe');
	    if (!iframe.style) iframe.style = {};
	    iframe.style.display = 'none';

	    document.body.appendChild(iframe);

	    var win = iframe.contentWindow;
	    var wEval = win.eval,
	        wExecScript = win.execScript;

	    if (!wEval && wExecScript) {
	        // win.eval() magically appears when this is called in IE:
	        wExecScript.call(win, 'null');
	        wEval = win.eval;
	    }

	    forEach(Object_keys(context), function (key) {
	        win[key] = context[key];
	    });
	    forEach(globals, function (key) {
	        if (context[key]) {
	            win[key] = context[key];
	        }
	    });

	    var winKeys = Object_keys(win);

	    var res = wEval.call(win, this.code);

	    forEach(Object_keys(win), function (key) {
	        // Avoid copying circular objects like `top` and `window` by only
	        // updating existing context properties or new properties in the `win`
	        // that was only introduced after the eval.
	        if (key in context || indexOf(winKeys, key) === -1) {
	            context[key] = win[key];
	        }
	    });

	    forEach(globals, function (key) {
	        if (!(key in context)) {
	            defineProp(context, key, win[key]);
	        }
	    });

	    document.body.removeChild(iframe);

	    return res;
	};

	Script.prototype.runInThisContext = function () {
	    return eval(this.code); // maybe...
	};

	Script.prototype.runInNewContext = function (context) {
	    var ctx = Script.createContext(context);
	    var res = this.runInContext(ctx);

	    forEach(Object_keys(ctx), function (key) {
	        context[key] = ctx[key];
	    });

	    return res;
	};

	forEach(Object_keys(Script.prototype), function (name) {
	    exports[name] = Script[name] = function (code) {
	        var s = Script(code);
	        return s[name].apply(s, [].slice.call(arguments, 1));
	    };
	});

	exports.createScript = function (code) {
	    return exports.Script(code);
	};

	exports.createContext = Script.createContext = function (context) {
	    var copy = new Context();
	    if ((typeof context === 'undefined' ? 'undefined' : _typeof(context)) === 'object') {
	        forEach(Object_keys(context), function (key) {
	            copy[key] = context[key];
	        });
	    }
	    return copy;
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";

	var indexOf = [].indexOf;

	module.exports = function (arr, obj) {
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var base = exports;

	base.Reporter = __webpack_require__(120).Reporter;
	base.DecoderBuffer = __webpack_require__(121).DecoderBuffer;
	base.EncoderBuffer = __webpack_require__(121).EncoderBuffer;
	base.Node = __webpack_require__(122);

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(12);

	function Reporter(options) {
	  this._reporterState = {
	    obj: null,
	    path: [],
	    options: options || {},
	    errors: []
	  };
	}
	exports.Reporter = Reporter;

	Reporter.prototype.isError = function isError(obj) {
	  return obj instanceof ReporterError;
	};

	Reporter.prototype.save = function save() {
	  var state = this._reporterState;

	  return { obj: state.obj, pathLen: state.path.length };
	};

	Reporter.prototype.restore = function restore(data) {
	  var state = this._reporterState;

	  state.obj = data.obj;
	  state.path = state.path.slice(0, data.pathLen);
	};

	Reporter.prototype.enterKey = function enterKey(key) {
	  return this._reporterState.path.push(key);
	};

	Reporter.prototype.exitKey = function exitKey(index) {
	  var state = this._reporterState;

	  state.path = state.path.slice(0, index - 1);
	};

	Reporter.prototype.leaveKey = function leaveKey(index, key, value) {
	  var state = this._reporterState;

	  this.exitKey(index);
	  if (state.obj !== null) state.obj[key] = value;
	};

	Reporter.prototype.path = function path() {
	  return this._reporterState.path.join('/');
	};

	Reporter.prototype.enterObject = function enterObject() {
	  var state = this._reporterState;

	  var prev = state.obj;
	  state.obj = {};
	  return prev;
	};

	Reporter.prototype.leaveObject = function leaveObject(prev) {
	  var state = this._reporterState;

	  var now = state.obj;
	  state.obj = prev;
	  return now;
	};

	Reporter.prototype.error = function error(msg) {
	  var err;
	  var state = this._reporterState;

	  var inherited = msg instanceof ReporterError;
	  if (inherited) {
	    err = msg;
	  } else {
	    err = new ReporterError(state.path.map(function (elem) {
	      return '[' + JSON.stringify(elem) + ']';
	    }).join(''), msg.message || msg, msg.stack);
	  }

	  if (!state.options.partial) throw err;

	  if (!inherited) state.errors.push(err);

	  return err;
	};

	Reporter.prototype.wrapResult = function wrapResult(result) {
	  var state = this._reporterState;
	  if (!state.options.partial) return result;

	  return {
	    result: this.isError(result) ? null : result,
	    errors: state.errors
	  };
	};

	function ReporterError(path, msg) {
	  this.path = path;
	  this.rethrow(msg);
	};
	inherits(ReporterError, Error);

	ReporterError.prototype.rethrow = function rethrow(msg) {
	  this.message = msg + ' at: ' + (this.path || '(shallow)');
	  if (Error.captureStackTrace) Error.captureStackTrace(this, ReporterError);

	  if (!this.stack) {
	    try {
	      // IE only adds stack when thrown
	      throw new Error(this.message);
	    } catch (e) {
	      this.stack = e.stack;
	    }
	  }
	  return this;
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var inherits = __webpack_require__(12);
	var Reporter = __webpack_require__(119).Reporter;
	var Buffer = __webpack_require__(4).Buffer;

	function DecoderBuffer(base, options) {
	  Reporter.call(this, options);
	  if (!Buffer.isBuffer(base)) {
	    this.error('Input not Buffer');
	    return;
	  }

	  this.base = base;
	  this.offset = 0;
	  this.length = base.length;
	}
	inherits(DecoderBuffer, Reporter);
	exports.DecoderBuffer = DecoderBuffer;

	DecoderBuffer.prototype.save = function save() {
	  return { offset: this.offset, reporter: Reporter.prototype.save.call(this) };
	};

	DecoderBuffer.prototype.restore = function restore(save) {
	  // Return skipped data
	  var res = new DecoderBuffer(this.base);
	  res.offset = save.offset;
	  res.length = this.offset;

	  this.offset = save.offset;
	  Reporter.prototype.restore.call(this, save.reporter);

	  return res;
	};

	DecoderBuffer.prototype.isEmpty = function isEmpty() {
	  return this.offset === this.length;
	};

	DecoderBuffer.prototype.readUInt8 = function readUInt8(fail) {
	  if (this.offset + 1 <= this.length) return this.base.readUInt8(this.offset++, true);else return this.error(fail || 'DecoderBuffer overrun');
	};

	DecoderBuffer.prototype.skip = function skip(bytes, fail) {
	  if (!(this.offset + bytes <= this.length)) return this.error(fail || 'DecoderBuffer overrun');

	  var res = new DecoderBuffer(this.base);

	  // Share reporter state
	  res._reporterState = this._reporterState;

	  res.offset = this.offset;
	  res.length = this.offset + bytes;
	  this.offset += bytes;
	  return res;
	};

	DecoderBuffer.prototype.raw = function raw(save) {
	  return this.base.slice(save ? save.offset : this.offset, this.length);
	};

	function EncoderBuffer(value, reporter) {
	  if (Array.isArray(value)) {
	    this.length = 0;
	    this.value = value.map(function (item) {
	      if (!(item instanceof EncoderBuffer)) item = new EncoderBuffer(item, reporter);
	      this.length += item.length;
	      return item;
	    }, this);
	  } else if (typeof value === 'number') {
	    if (!(0 <= value && value <= 0xff)) return reporter.error('non-byte EncoderBuffer value');
	    this.value = value;
	    this.length = 1;
	  } else if (typeof value === 'string') {
	    this.value = value;
	    this.length = Buffer.byteLength(value);
	  } else if (Buffer.isBuffer(value)) {
	    this.value = value;
	    this.length = value.length;
	  } else {
	    return reporter.error('Unsupported type: ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
	  }
	}
	exports.EncoderBuffer = EncoderBuffer;

	EncoderBuffer.prototype.join = function join(out, offset) {
	  if (!out) out = new Buffer(this.length);
	  if (!offset) offset = 0;

	  if (this.length === 0) return out;

	  if (Array.isArray(this.value)) {
	    this.value.forEach(function (item) {
	      item.join(out, offset);
	      offset += item.length;
	    });
	  } else {
	    if (typeof this.value === 'number') out[offset] = this.value;else if (typeof this.value === 'string') out.write(this.value, offset);else if (Buffer.isBuffer(this.value)) this.value.copy(out, offset);
	    offset += this.length;
	  }

	  return out;
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var Reporter = __webpack_require__(119).Reporter;
	var EncoderBuffer = __webpack_require__(119).EncoderBuffer;
	var DecoderBuffer = __webpack_require__(119).DecoderBuffer;
	var assert = __webpack_require__(72);

	// Supported tags
	var tags = ['seq', 'seqof', 'set', 'setof', 'objid', 'bool', 'gentime', 'utctime', 'null_', 'enum', 'int', 'objDesc', 'bitstr', 'bmpstr', 'charstr', 'genstr', 'graphstr', 'ia5str', 'iso646str', 'numstr', 'octstr', 'printstr', 't61str', 'unistr', 'utf8str', 'videostr'];

	// Public methods list
	var methods = ['key', 'obj', 'use', 'optional', 'explicit', 'implicit', 'def', 'choice', 'any', 'contains'].concat(tags);

	// Overrided methods list
	var overrided = ['_peekTag', '_decodeTag', '_use', '_decodeStr', '_decodeObjid', '_decodeTime', '_decodeNull', '_decodeInt', '_decodeBool', '_decodeList', '_encodeComposite', '_encodeStr', '_encodeObjid', '_encodeTime', '_encodeNull', '_encodeInt', '_encodeBool'];

	function Node(enc, parent) {
	  var state = {};
	  this._baseState = state;

	  state.enc = enc;

	  state.parent = parent || null;
	  state.children = null;

	  // State
	  state.tag = null;
	  state.args = null;
	  state.reverseArgs = null;
	  state.choice = null;
	  state.optional = false;
	  state.any = false;
	  state.obj = false;
	  state.use = null;
	  state.useDecoder = null;
	  state.key = null;
	  state['default'] = null;
	  state.explicit = null;
	  state.implicit = null;
	  state.contains = null;

	  // Should create new instance on each method
	  if (!state.parent) {
	    state.children = [];
	    this._wrap();
	  }
	}
	module.exports = Node;

	var stateProps = ['enc', 'parent', 'children', 'tag', 'args', 'reverseArgs', 'choice', 'optional', 'any', 'obj', 'use', 'alteredUse', 'key', 'default', 'explicit', 'implicit', 'contains'];

	Node.prototype.clone = function clone() {
	  var state = this._baseState;
	  var cstate = {};
	  stateProps.forEach(function (prop) {
	    cstate[prop] = state[prop];
	  });
	  var res = new this.constructor(cstate.parent);
	  res._baseState = cstate;
	  return res;
	};

	Node.prototype._wrap = function wrap() {
	  var state = this._baseState;
	  methods.forEach(function (method) {
	    this[method] = function _wrappedMethod() {
	      var clone = new this.constructor(this);
	      state.children.push(clone);
	      return clone[method].apply(clone, arguments);
	    };
	  }, this);
	};

	Node.prototype._init = function init(body) {
	  var state = this._baseState;

	  assert(state.parent === null);
	  body.call(this);

	  // Filter children
	  state.children = state.children.filter(function (child) {
	    return child._baseState.parent === this;
	  }, this);
	  assert.equal(state.children.length, 1, 'Root node can have only one child');
	};

	Node.prototype._useArgs = function useArgs(args) {
	  var state = this._baseState;

	  // Filter children and args
	  var children = args.filter(function (arg) {
	    return arg instanceof this.constructor;
	  }, this);
	  args = args.filter(function (arg) {
	    return !(arg instanceof this.constructor);
	  }, this);

	  if (children.length !== 0) {
	    assert(state.children === null);
	    state.children = children;

	    // Replace parent to maintain backward link
	    children.forEach(function (child) {
	      child._baseState.parent = this;
	    }, this);
	  }
	  if (args.length !== 0) {
	    assert(state.args === null);
	    state.args = args;
	    state.reverseArgs = args.map(function (arg) {
	      if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== 'object' || arg.constructor !== Object) return arg;

	      var res = {};
	      Object.keys(arg).forEach(function (key) {
	        if (key == (key | 0)) key |= 0;
	        var value = arg[key];
	        res[value] = key;
	      });
	      return res;
	    });
	  }
	};

	//
	// Overrided methods
	//

	overrided.forEach(function (method) {
	  Node.prototype[method] = function _overrided() {
	    var state = this._baseState;
	    throw new Error(method + ' not implemented for encoding: ' + state.enc);
	  };
	});

	//
	// Public methods
	//

	tags.forEach(function (tag) {
	  Node.prototype[tag] = function _tagMethod() {
	    var state = this._baseState;
	    var args = Array.prototype.slice.call(arguments);

	    assert(state.tag === null);
	    state.tag = tag;

	    this._useArgs(args);

	    return this;
	  };
	});

	Node.prototype.use = function use(item) {
	  assert(item);
	  var state = this._baseState;

	  assert(state.use === null);
	  state.use = item;

	  return this;
	};

	Node.prototype.optional = function optional() {
	  var state = this._baseState;

	  state.optional = true;

	  return this;
	};

	Node.prototype.def = function def(val) {
	  var state = this._baseState;

	  assert(state['default'] === null);
	  state['default'] = val;
	  state.optional = true;

	  return this;
	};

	Node.prototype.explicit = function explicit(num) {
	  var state = this._baseState;

	  assert(state.explicit === null && state.implicit === null);
	  state.explicit = num;

	  return this;
	};

	Node.prototype.implicit = function implicit(num) {
	  var state = this._baseState;

	  assert(state.explicit === null && state.implicit === null);
	  state.implicit = num;

	  return this;
	};

	Node.prototype.obj = function obj() {
	  var state = this._baseState;
	  var args = Array.prototype.slice.call(arguments);

	  state.obj = true;

	  if (args.length !== 0) this._useArgs(args);

	  return this;
	};

	Node.prototype.key = function key(newKey) {
	  var state = this._baseState;

	  assert(state.key === null);
	  state.key = newKey;

	  return this;
	};

	Node.prototype.any = function any() {
	  var state = this._baseState;

	  state.any = true;

	  return this;
	};

	Node.prototype.choice = function choice(obj) {
	  var state = this._baseState;

	  assert(state.choice === null);
	  state.choice = obj;
	  this._useArgs(Object.keys(obj).map(function (key) {
	    return obj[key];
	  }));

	  return this;
	};

	Node.prototype.contains = function contains(item) {
	  var state = this._baseState;

	  assert(state.use === null);
	  state.contains = item;

	  return this;
	};

	//
	// Decoding
	//

	Node.prototype._decode = function decode(input, options) {
	  var state = this._baseState;

	  // Decode root node
	  if (state.parent === null) return input.wrapResult(state.children[0]._decode(input, options));

	  var result = state['default'];
	  var present = true;

	  var prevKey = null;
	  if (state.key !== null) prevKey = input.enterKey(state.key);

	  // Check if tag is there
	  if (state.optional) {
	    var tag = null;
	    if (state.explicit !== null) tag = state.explicit;else if (state.implicit !== null) tag = state.implicit;else if (state.tag !== null) tag = state.tag;

	    if (tag === null && !state.any) {
	      // Trial and Error
	      var save = input.save();
	      try {
	        if (state.choice === null) this._decodeGeneric(state.tag, input, options);else this._decodeChoice(input, options);
	        present = true;
	      } catch (e) {
	        present = false;
	      }
	      input.restore(save);
	    } else {
	      present = this._peekTag(input, tag, state.any);

	      if (input.isError(present)) return present;
	    }
	  }

	  // Push object on stack
	  var prevObj;
	  if (state.obj && present) prevObj = input.enterObject();

	  if (present) {
	    // Unwrap explicit values
	    if (state.explicit !== null) {
	      var explicit = this._decodeTag(input, state.explicit);
	      if (input.isError(explicit)) return explicit;
	      input = explicit;
	    }

	    var start = input.offset;

	    // Unwrap implicit and normal values
	    if (state.use === null && state.choice === null) {
	      if (state.any) var save = input.save();
	      var body = this._decodeTag(input, state.implicit !== null ? state.implicit : state.tag, state.any);
	      if (input.isError(body)) return body;

	      if (state.any) result = input.raw(save);else input = body;
	    }

	    if (options && options.track && state.tag !== null) options.track(input.path(), start, input.length, 'tagged');

	    if (options && options.track && state.tag !== null) options.track(input.path(), input.offset, input.length, 'content');

	    // Select proper method for tag
	    if (state.any) result = result;else if (state.choice === null) result = this._decodeGeneric(state.tag, input, options);else result = this._decodeChoice(input, options);

	    if (input.isError(result)) return result;

	    // Decode children
	    if (!state.any && state.choice === null && state.children !== null) {
	      state.children.forEach(function decodeChildren(child) {
	        // NOTE: We are ignoring errors here, to let parser continue with other
	        // parts of encoded data
	        child._decode(input, options);
	      });
	    }

	    // Decode contained/encoded by schema, only in bit or octet strings
	    if (state.contains && (state.tag === 'octstr' || state.tag === 'bitstr')) {
	      var data = new DecoderBuffer(result);
	      result = this._getUse(state.contains, input._reporterState.obj)._decode(data, options);
	    }
	  }

	  // Pop object
	  if (state.obj && present) result = input.leaveObject(prevObj);

	  // Set key
	  if (state.key !== null && (result !== null || present === true)) input.leaveKey(prevKey, state.key, result);else if (prevKey !== null) input.exitKey(prevKey);

	  return result;
	};

	Node.prototype._decodeGeneric = function decodeGeneric(tag, input, options) {
	  var state = this._baseState;

	  if (tag === 'seq' || tag === 'set') return null;
	  if (tag === 'seqof' || tag === 'setof') return this._decodeList(input, tag, state.args[0], options);else if (/str$/.test(tag)) return this._decodeStr(input, tag, options);else if (tag === 'objid' && state.args) return this._decodeObjid(input, state.args[0], state.args[1], options);else if (tag === 'objid') return this._decodeObjid(input, null, null, options);else if (tag === 'gentime' || tag === 'utctime') return this._decodeTime(input, tag, options);else if (tag === 'null_') return this._decodeNull(input, options);else if (tag === 'bool') return this._decodeBool(input, options);else if (tag === 'objDesc') return this._decodeStr(input, tag, options);else if (tag === 'int' || tag === 'enum') return this._decodeInt(input, state.args && state.args[0], options);

	  if (state.use !== null) {
	    return this._getUse(state.use, input._reporterState.obj)._decode(input, options);
	  } else {
	    return input.error('unknown tag: ' + tag);
	  }
	};

	Node.prototype._getUse = function _getUse(entity, obj) {

	  var state = this._baseState;
	  // Create altered use decoder if implicit is set
	  state.useDecoder = this._use(entity, obj);
	  assert(state.useDecoder._baseState.parent === null);
	  state.useDecoder = state.useDecoder._baseState.children[0];
	  if (state.implicit !== state.useDecoder._baseState.implicit) {
	    state.useDecoder = state.useDecoder.clone();
	    state.useDecoder._baseState.implicit = state.implicit;
	  }
	  return state.useDecoder;
	};

	Node.prototype._decodeChoice = function decodeChoice(input, options) {
	  var state = this._baseState;
	  var result = null;
	  var match = false;

	  Object.keys(state.choice).some(function (key) {
	    var save = input.save();
	    var node = state.choice[key];
	    try {
	      var value = node._decode(input, options);
	      if (input.isError(value)) return false;

	      result = { type: key, value: value };
	      match = true;
	    } catch (e) {
	      input.restore(save);
	      return false;
	    }
	    return true;
	  }, this);

	  if (!match) return input.error('Choice not matched');

	  return result;
	};

	//
	// Encoding
	//

	Node.prototype._createEncoderBuffer = function createEncoderBuffer(data) {
	  return new EncoderBuffer(data, this.reporter);
	};

	Node.prototype._encode = function encode(data, reporter, parent) {
	  var state = this._baseState;
	  if (state['default'] !== null && state['default'] === data) return;

	  var result = this._encodeValue(data, reporter, parent);
	  if (result === undefined) return;

	  if (this._skipDefault(result, reporter, parent)) return;

	  return result;
	};

	Node.prototype._encodeValue = function encode(data, reporter, parent) {
	  var state = this._baseState;

	  // Decode root node
	  if (state.parent === null) return state.children[0]._encode(data, reporter || new Reporter());

	  var result = null;

	  // Set reporter to share it with a child class
	  this.reporter = reporter;

	  // Check if data is there
	  if (state.optional && data === undefined) {
	    if (state['default'] !== null) data = state['default'];else return;
	  }

	  // Encode children first
	  var content = null;
	  var primitive = false;
	  if (state.any) {
	    // Anything that was given is translated to buffer
	    result = this._createEncoderBuffer(data);
	  } else if (state.choice) {
	    result = this._encodeChoice(data, reporter);
	  } else if (state.contains) {
	    content = this._getUse(state.contains, parent)._encode(data, reporter);
	    primitive = true;
	  } else if (state.children) {
	    content = state.children.map(function (child) {
	      if (child._baseState.tag === 'null_') return child._encode(null, reporter, data);

	      if (child._baseState.key === null) return reporter.error('Child should have a key');
	      var prevKey = reporter.enterKey(child._baseState.key);

	      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') return reporter.error('Child expected, but input is not object');

	      var res = child._encode(data[child._baseState.key], reporter, data);
	      reporter.leaveKey(prevKey);

	      return res;
	    }, this).filter(function (child) {
	      return child;
	    });
	    content = this._createEncoderBuffer(content);
	  } else {
	    if (state.tag === 'seqof' || state.tag === 'setof') {
	      // TODO(indutny): this should be thrown on DSL level
	      if (!(state.args && state.args.length === 1)) return reporter.error('Too many args for : ' + state.tag);

	      if (!Array.isArray(data)) return reporter.error('seqof/setof, but data is not Array');

	      var child = this.clone();
	      child._baseState.implicit = null;
	      content = this._createEncoderBuffer(data.map(function (item) {
	        var state = this._baseState;

	        return this._getUse(state.args[0], data)._encode(item, reporter);
	      }, child));
	    } else if (state.use !== null) {
	      result = this._getUse(state.use, parent)._encode(data, reporter);
	    } else {
	      content = this._encodePrimitive(state.tag, data);
	      primitive = true;
	    }
	  }

	  // Encode data itself
	  var result;
	  if (!state.any && state.choice === null) {
	    var tag = state.implicit !== null ? state.implicit : state.tag;
	    var cls = state.implicit === null ? 'universal' : 'context';

	    if (tag === null) {
	      if (state.use === null) reporter.error('Tag could be ommited only for .use()');
	    } else {
	      if (state.use === null) result = this._encodeComposite(tag, primitive, cls, content);
	    }
	  }

	  // Wrap in explicit
	  if (state.explicit !== null) result = this._encodeComposite(state.explicit, false, 'context', result);

	  return result;
	};

	Node.prototype._encodeChoice = function encodeChoice(data, reporter) {
	  var state = this._baseState;

	  var node = state.choice[data.type];
	  if (!node) {
	    assert(false, data.type + ' not found in ' + JSON.stringify(Object.keys(state.choice)));
	  }
	  return node._encode(data.value, reporter);
	};

	Node.prototype._encodePrimitive = function encodePrimitive(tag, data) {
	  var state = this._baseState;

	  if (/str$/.test(tag)) return this._encodeStr(data, tag);else if (tag === 'objid' && state.args) return this._encodeObjid(data, state.reverseArgs[0], state.args[1]);else if (tag === 'objid') return this._encodeObjid(data, null, null);else if (tag === 'gentime' || tag === 'utctime') return this._encodeTime(data, tag);else if (tag === 'null_') return this._encodeNull();else if (tag === 'int' || tag === 'enum') return this._encodeInt(data, state.args && state.reverseArgs[0]);else if (tag === 'bool') return this._encodeBool(data);else if (tag === 'objDesc') return this._encodeStr(data, tag);else throw new Error('Unsupported tag: ' + tag);
	};

	Node.prototype._isNumstr = function isNumstr(str) {
	  return (/^[0-9 ]*$/.test(str)
	  );
	};

	Node.prototype._isPrintstr = function isPrintstr(str) {
	  return (/^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(str)
	  );
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var constants = exports;

	// Helper
	constants._reverse = function reverse(map) {
	  var res = {};

	  Object.keys(map).forEach(function (key) {
	    // Convert key to integer if it is stringified
	    if ((key | 0) == key) key = key | 0;

	    var value = map[key];
	    res[value] = key;
	  });

	  return res;
	};

	constants.der = __webpack_require__(124);

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var constants = __webpack_require__(123);

	exports.tagClass = {
	  0: 'universal',
	  1: 'application',
	  2: 'context',
	  3: 'private'
	};
	exports.tagClassByName = constants._reverse(exports.tagClass);

	exports.tag = {
	  0x00: 'end',
	  0x01: 'bool',
	  0x02: 'int',
	  0x03: 'bitstr',
	  0x04: 'octstr',
	  0x05: 'null_',
	  0x06: 'objid',
	  0x07: 'objDesc',
	  0x08: 'external',
	  0x09: 'real',
	  0x0a: 'enum',
	  0x0b: 'embed',
	  0x0c: 'utf8str',
	  0x0d: 'relativeOid',
	  0x10: 'seq',
	  0x11: 'set',
	  0x12: 'numstr',
	  0x13: 'printstr',
	  0x14: 't61str',
	  0x15: 'videostr',
	  0x16: 'ia5str',
	  0x17: 'utctime',
	  0x18: 'gentime',
	  0x19: 'graphstr',
	  0x1a: 'iso646str',
	  0x1b: 'genstr',
	  0x1c: 'unistr',
	  0x1d: 'charstr',
	  0x1e: 'bmpstr'
	};
	exports.tagByName = constants._reverse(exports.tag);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var decoders = exports;

	decoders.der = __webpack_require__(126);
	decoders.pem = __webpack_require__(127);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(12);

	var asn1 = __webpack_require__(115);
	var base = asn1.base;
	var bignum = asn1.bignum;

	// Import DER constants
	var der = asn1.constants.der;

	function DERDecoder(entity) {
	  this.enc = 'der';
	  this.name = entity.name;
	  this.entity = entity;

	  // Construct base tree
	  this.tree = new DERNode();
	  this.tree._init(entity.body);
	};
	module.exports = DERDecoder;

	DERDecoder.prototype.decode = function decode(data, options) {
	  if (!(data instanceof base.DecoderBuffer)) data = new base.DecoderBuffer(data, options);

	  return this.tree._decode(data, options);
	};

	// Tree methods

	function DERNode(parent) {
	  base.Node.call(this, 'der', parent);
	}
	inherits(DERNode, base.Node);

	DERNode.prototype._peekTag = function peekTag(buffer, tag, any) {
	  if (buffer.isEmpty()) return false;

	  var state = buffer.save();
	  var decodedTag = derDecodeTag(buffer, 'Failed to peek tag: "' + tag + '"');
	  if (buffer.isError(decodedTag)) return decodedTag;

	  buffer.restore(state);

	  return decodedTag.tag === tag || decodedTag.tagStr === tag || decodedTag.tagStr + 'of' === tag || any;
	};

	DERNode.prototype._decodeTag = function decodeTag(buffer, tag, any) {
	  var decodedTag = derDecodeTag(buffer, 'Failed to decode tag of "' + tag + '"');
	  if (buffer.isError(decodedTag)) return decodedTag;

	  var len = derDecodeLen(buffer, decodedTag.primitive, 'Failed to get length of "' + tag + '"');

	  // Failure
	  if (buffer.isError(len)) return len;

	  if (!any && decodedTag.tag !== tag && decodedTag.tagStr !== tag && decodedTag.tagStr + 'of' !== tag) {
	    return buffer.error('Failed to match tag: "' + tag + '"');
	  }

	  if (decodedTag.primitive || len !== null) return buffer.skip(len, 'Failed to match body of: "' + tag + '"');

	  // Indefinite length... find END tag
	  var state = buffer.save();
	  var res = this._skipUntilEnd(buffer, 'Failed to skip indefinite length body: "' + this.tag + '"');
	  if (buffer.isError(res)) return res;

	  len = buffer.offset - state.offset;
	  buffer.restore(state);
	  return buffer.skip(len, 'Failed to match body of: "' + tag + '"');
	};

	DERNode.prototype._skipUntilEnd = function skipUntilEnd(buffer, fail) {
	  while (true) {
	    var tag = derDecodeTag(buffer, fail);
	    if (buffer.isError(tag)) return tag;
	    var len = derDecodeLen(buffer, tag.primitive, fail);
	    if (buffer.isError(len)) return len;

	    var res;
	    if (tag.primitive || len !== null) res = buffer.skip(len);else res = this._skipUntilEnd(buffer, fail);

	    // Failure
	    if (buffer.isError(res)) return res;

	    if (tag.tagStr === 'end') break;
	  }
	};

	DERNode.prototype._decodeList = function decodeList(buffer, tag, decoder, options) {
	  var result = [];
	  while (!buffer.isEmpty()) {
	    var possibleEnd = this._peekTag(buffer, 'end');
	    if (buffer.isError(possibleEnd)) return possibleEnd;

	    var res = decoder.decode(buffer, 'der', options);
	    if (buffer.isError(res) && possibleEnd) break;
	    result.push(res);
	  }
	  return result;
	};

	DERNode.prototype._decodeStr = function decodeStr(buffer, tag) {
	  if (tag === 'bitstr') {
	    var unused = buffer.readUInt8();
	    if (buffer.isError(unused)) return unused;
	    return { unused: unused, data: buffer.raw() };
	  } else if (tag === 'bmpstr') {
	    var raw = buffer.raw();
	    if (raw.length % 2 === 1) return buffer.error('Decoding of string type: bmpstr length mismatch');

	    var str = '';
	    for (var i = 0; i < raw.length / 2; i++) {
	      str += String.fromCharCode(raw.readUInt16BE(i * 2));
	    }
	    return str;
	  } else if (tag === 'numstr') {
	    var numstr = buffer.raw().toString('ascii');
	    if (!this._isNumstr(numstr)) {
	      return buffer.error('Decoding of string type: ' + 'numstr unsupported characters');
	    }
	    return numstr;
	  } else if (tag === 'octstr') {
	    return buffer.raw();
	  } else if (tag === 'objDesc') {
	    return buffer.raw();
	  } else if (tag === 'printstr') {
	    var printstr = buffer.raw().toString('ascii');
	    if (!this._isPrintstr(printstr)) {
	      return buffer.error('Decoding of string type: ' + 'printstr unsupported characters');
	    }
	    return printstr;
	  } else if (/str$/.test(tag)) {
	    return buffer.raw().toString();
	  } else {
	    return buffer.error('Decoding of string type: ' + tag + ' unsupported');
	  }
	};

	DERNode.prototype._decodeObjid = function decodeObjid(buffer, values, relative) {
	  var result;
	  var identifiers = [];
	  var ident = 0;
	  while (!buffer.isEmpty()) {
	    var subident = buffer.readUInt8();
	    ident <<= 7;
	    ident |= subident & 0x7f;
	    if ((subident & 0x80) === 0) {
	      identifiers.push(ident);
	      ident = 0;
	    }
	  }
	  if (subident & 0x80) identifiers.push(ident);

	  var first = identifiers[0] / 40 | 0;
	  var second = identifiers[0] % 40;

	  if (relative) result = identifiers;else result = [first, second].concat(identifiers.slice(1));

	  if (values) {
	    var tmp = values[result.join(' ')];
	    if (tmp === undefined) tmp = values[result.join('.')];
	    if (tmp !== undefined) result = tmp;
	  }

	  return result;
	};

	DERNode.prototype._decodeTime = function decodeTime(buffer, tag) {
	  var str = buffer.raw().toString();
	  if (tag === 'gentime') {
	    var year = str.slice(0, 4) | 0;
	    var mon = str.slice(4, 6) | 0;
	    var day = str.slice(6, 8) | 0;
	    var hour = str.slice(8, 10) | 0;
	    var min = str.slice(10, 12) | 0;
	    var sec = str.slice(12, 14) | 0;
	  } else if (tag === 'utctime') {
	    var year = str.slice(0, 2) | 0;
	    var mon = str.slice(2, 4) | 0;
	    var day = str.slice(4, 6) | 0;
	    var hour = str.slice(6, 8) | 0;
	    var min = str.slice(8, 10) | 0;
	    var sec = str.slice(10, 12) | 0;
	    if (year < 70) year = 2000 + year;else year = 1900 + year;
	  } else {
	    return buffer.error('Decoding ' + tag + ' time is not supported yet');
	  }

	  return Date.UTC(year, mon - 1, day, hour, min, sec, 0);
	};

	DERNode.prototype._decodeNull = function decodeNull(buffer) {
	  return null;
	};

	DERNode.prototype._decodeBool = function decodeBool(buffer) {
	  var res = buffer.readUInt8();
	  if (buffer.isError(res)) return res;else return res !== 0;
	};

	DERNode.prototype._decodeInt = function decodeInt(buffer, values) {
	  // Bigint, return as it is (assume big endian)
	  var raw = buffer.raw();
	  var res = new bignum(raw);

	  if (values) res = values[res.toString(10)] || res;

	  return res;
	};

	DERNode.prototype._use = function use(entity, obj) {
	  if (typeof entity === 'function') entity = entity(obj);
	  return entity._getDecoder('der').tree;
	};

	// Utility methods

	function derDecodeTag(buf, fail) {
	  var tag = buf.readUInt8(fail);
	  if (buf.isError(tag)) return tag;

	  var cls = der.tagClass[tag >> 6];
	  var primitive = (tag & 0x20) === 0;

	  // Multi-octet tag - load
	  if ((tag & 0x1f) === 0x1f) {
	    var oct = tag;
	    tag = 0;
	    while ((oct & 0x80) === 0x80) {
	      oct = buf.readUInt8(fail);
	      if (buf.isError(oct)) return oct;

	      tag <<= 7;
	      tag |= oct & 0x7f;
	    }
	  } else {
	    tag &= 0x1f;
	  }
	  var tagStr = der.tag[tag];

	  return {
	    cls: cls,
	    primitive: primitive,
	    tag: tag,
	    tagStr: tagStr
	  };
	}

	function derDecodeLen(buf, primitive, fail) {
	  var len = buf.readUInt8(fail);
	  if (buf.isError(len)) return len;

	  // Indefinite form
	  if (!primitive && len === 0x80) return null;

	  // Definite form
	  if ((len & 0x80) === 0) {
	    // Short form
	    return len;
	  }

	  // Long form
	  var num = len & 0x7f;
	  if (num >= 4) return buf.error('length octect is too long');

	  len = 0;
	  for (var i = 0; i < num; i++) {
	    len <<= 8;
	    var j = buf.readUInt8(fail);
	    if (buf.isError(j)) return j;
	    len |= j;
	  }

	  return len;
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(12);
	var Buffer = __webpack_require__(4).Buffer;

	var DERDecoder = __webpack_require__(126);

	function PEMDecoder(entity) {
	  DERDecoder.call(this, entity);
	  this.enc = 'pem';
	};
	inherits(PEMDecoder, DERDecoder);
	module.exports = PEMDecoder;

	PEMDecoder.prototype.decode = function decode(data, options) {
	  var lines = data.toString().split(/[\r\n]+/g);

	  var label = options.label.toUpperCase();

	  var re = /^-----(BEGIN|END) ([^-]+)-----$/;
	  var start = -1;
	  var end = -1;
	  for (var i = 0; i < lines.length; i++) {
	    var match = lines[i].match(re);
	    if (match === null) continue;

	    if (match[2] !== label) continue;

	    if (start === -1) {
	      if (match[1] !== 'BEGIN') break;
	      start = i;
	    } else {
	      if (match[1] !== 'END') break;
	      end = i;
	      break;
	    }
	  }
	  if (start === -1 || end === -1) throw new Error('PEM section not found for: ' + label);

	  var base64 = lines.slice(start + 1, end).join('');
	  // Remove excessive symbols
	  base64.replace(/[^a-z0-9\+\/=]+/gi, '');

	  var input = new Buffer(base64, 'base64');
	  return DERDecoder.prototype.decode.call(this, input, options);
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var encoders = exports;

	encoders.der = __webpack_require__(129);
	encoders.pem = __webpack_require__(130);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(12);
	var Buffer = __webpack_require__(4).Buffer;

	var asn1 = __webpack_require__(115);
	var base = asn1.base;

	// Import DER constants
	var der = asn1.constants.der;

	function DEREncoder(entity) {
	  this.enc = 'der';
	  this.name = entity.name;
	  this.entity = entity;

	  // Construct base tree
	  this.tree = new DERNode();
	  this.tree._init(entity.body);
	};
	module.exports = DEREncoder;

	DEREncoder.prototype.encode = function encode(data, reporter) {
	  return this.tree._encode(data, reporter).join();
	};

	// Tree methods

	function DERNode(parent) {
	  base.Node.call(this, 'der', parent);
	}
	inherits(DERNode, base.Node);

	DERNode.prototype._encodeComposite = function encodeComposite(tag, primitive, cls, content) {
	  var encodedTag = encodeTag(tag, primitive, cls, this.reporter);

	  // Short form
	  if (content.length < 0x80) {
	    var header = new Buffer(2);
	    header[0] = encodedTag;
	    header[1] = content.length;
	    return this._createEncoderBuffer([header, content]);
	  }

	  // Long form
	  // Count octets required to store length
	  var lenOctets = 1;
	  for (var i = content.length; i >= 0x100; i >>= 8) {
	    lenOctets++;
	  }var header = new Buffer(1 + 1 + lenOctets);
	  header[0] = encodedTag;
	  header[1] = 0x80 | lenOctets;

	  for (var i = 1 + lenOctets, j = content.length; j > 0; i--, j >>= 8) {
	    header[i] = j & 0xff;
	  }return this._createEncoderBuffer([header, content]);
	};

	DERNode.prototype._encodeStr = function encodeStr(str, tag) {
	  if (tag === 'bitstr') {
	    return this._createEncoderBuffer([str.unused | 0, str.data]);
	  } else if (tag === 'bmpstr') {
	    var buf = new Buffer(str.length * 2);
	    for (var i = 0; i < str.length; i++) {
	      buf.writeUInt16BE(str.charCodeAt(i), i * 2);
	    }
	    return this._createEncoderBuffer(buf);
	  } else if (tag === 'numstr') {
	    if (!this._isNumstr(str)) {
	      return this.reporter.error('Encoding of string type: numstr supports ' + 'only digits and space');
	    }
	    return this._createEncoderBuffer(str);
	  } else if (tag === 'printstr') {
	    if (!this._isPrintstr(str)) {
	      return this.reporter.error('Encoding of string type: printstr supports ' + 'only latin upper and lower case letters, ' + 'digits, space, apostrophe, left and rigth ' + 'parenthesis, plus sign, comma, hyphen, ' + 'dot, slash, colon, equal sign, ' + 'question mark');
	    }
	    return this._createEncoderBuffer(str);
	  } else if (/str$/.test(tag)) {
	    return this._createEncoderBuffer(str);
	  } else if (tag === 'objDesc') {
	    return this._createEncoderBuffer(str);
	  } else {
	    return this.reporter.error('Encoding of string type: ' + tag + ' unsupported');
	  }
	};

	DERNode.prototype._encodeObjid = function encodeObjid(id, values, relative) {
	  if (typeof id === 'string') {
	    if (!values) return this.reporter.error('string objid given, but no values map found');
	    if (!values.hasOwnProperty(id)) return this.reporter.error('objid not found in values map');
	    id = values[id].split(/[\s\.]+/g);
	    for (var i = 0; i < id.length; i++) {
	      id[i] |= 0;
	    }
	  } else if (Array.isArray(id)) {
	    id = id.slice();
	    for (var i = 0; i < id.length; i++) {
	      id[i] |= 0;
	    }
	  }

	  if (!Array.isArray(id)) {
	    return this.reporter.error('objid() should be either array or string, ' + 'got: ' + JSON.stringify(id));
	  }

	  if (!relative) {
	    if (id[1] >= 40) return this.reporter.error('Second objid identifier OOB');
	    id.splice(0, 2, id[0] * 40 + id[1]);
	  }

	  // Count number of octets
	  var size = 0;
	  for (var i = 0; i < id.length; i++) {
	    var ident = id[i];
	    for (size++; ident >= 0x80; ident >>= 7) {
	      size++;
	    }
	  }

	  var objid = new Buffer(size);
	  var offset = objid.length - 1;
	  for (var i = id.length - 1; i >= 0; i--) {
	    var ident = id[i];
	    objid[offset--] = ident & 0x7f;
	    while ((ident >>= 7) > 0) {
	      objid[offset--] = 0x80 | ident & 0x7f;
	    }
	  }

	  return this._createEncoderBuffer(objid);
	};

	function two(num) {
	  if (num < 10) return '0' + num;else return num;
	}

	DERNode.prototype._encodeTime = function encodeTime(time, tag) {
	  var str;
	  var date = new Date(time);

	  if (tag === 'gentime') {
	    str = [two(date.getFullYear()), two(date.getUTCMonth() + 1), two(date.getUTCDate()), two(date.getUTCHours()), two(date.getUTCMinutes()), two(date.getUTCSeconds()), 'Z'].join('');
	  } else if (tag === 'utctime') {
	    str = [two(date.getFullYear() % 100), two(date.getUTCMonth() + 1), two(date.getUTCDate()), two(date.getUTCHours()), two(date.getUTCMinutes()), two(date.getUTCSeconds()), 'Z'].join('');
	  } else {
	    this.reporter.error('Encoding ' + tag + ' time is not supported yet');
	  }

	  return this._encodeStr(str, 'octstr');
	};

	DERNode.prototype._encodeNull = function encodeNull() {
	  return this._createEncoderBuffer('');
	};

	DERNode.prototype._encodeInt = function encodeInt(num, values) {
	  if (typeof num === 'string') {
	    if (!values) return this.reporter.error('String int or enum given, but no values map');
	    if (!values.hasOwnProperty(num)) {
	      return this.reporter.error('Values map doesn\'t contain: ' + JSON.stringify(num));
	    }
	    num = values[num];
	  }

	  // Bignum, assume big endian
	  if (typeof num !== 'number' && !Buffer.isBuffer(num)) {
	    var numArray = num.toArray();
	    if (!num.sign && numArray[0] & 0x80) {
	      numArray.unshift(0);
	    }
	    num = new Buffer(numArray);
	  }

	  if (Buffer.isBuffer(num)) {
	    var size = num.length;
	    if (num.length === 0) size++;

	    var out = new Buffer(size);
	    num.copy(out);
	    if (num.length === 0) out[0] = 0;
	    return this._createEncoderBuffer(out);
	  }

	  if (num < 0x80) return this._createEncoderBuffer(num);

	  if (num < 0x100) return this._createEncoderBuffer([0, num]);

	  var size = 1;
	  for (var i = num; i >= 0x100; i >>= 8) {
	    size++;
	  }var out = new Array(size);
	  for (var i = out.length - 1; i >= 0; i--) {
	    out[i] = num & 0xff;
	    num >>= 8;
	  }
	  if (out[0] & 0x80) {
	    out.unshift(0);
	  }

	  return this._createEncoderBuffer(new Buffer(out));
	};

	DERNode.prototype._encodeBool = function encodeBool(value) {
	  return this._createEncoderBuffer(value ? 0xff : 0);
	};

	DERNode.prototype._use = function use(entity, obj) {
	  if (typeof entity === 'function') entity = entity(obj);
	  return entity._getEncoder('der').tree;
	};

	DERNode.prototype._skipDefault = function skipDefault(dataBuffer, reporter, parent) {
	  var state = this._baseState;
	  var i;
	  if (state['default'] === null) return false;

	  var data = dataBuffer.join();
	  if (state.defaultBuffer === undefined) state.defaultBuffer = this._encodeValue(state['default'], reporter, parent).join();

	  if (data.length !== state.defaultBuffer.length) return false;

	  for (i = 0; i < data.length; i++) {
	    if (data[i] !== state.defaultBuffer[i]) return false;
	  }return true;
	};

	// Utility methods

	function encodeTag(tag, primitive, cls, reporter) {
	  var res;

	  if (tag === 'seqof') tag = 'seq';else if (tag === 'setof') tag = 'set';

	  if (der.tagByName.hasOwnProperty(tag)) res = der.tagByName[tag];else if (typeof tag === 'number' && (tag | 0) === tag) res = tag;else return reporter.error('Unknown tag: ' + tag);

	  if (res >= 0x1f) return reporter.error('Multi-octet tag encoding unsupported');

	  if (!primitive) res |= 0x20;

	  res |= der.tagClassByName[cls || 'universal'] << 6;

	  return res;
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var inherits = __webpack_require__(12);

	var DEREncoder = __webpack_require__(129);

	function PEMEncoder(entity) {
	  DEREncoder.call(this, entity);
	  this.enc = 'pem';
	};
	inherits(PEMEncoder, DEREncoder);
	module.exports = PEMEncoder;

	PEMEncoder.prototype.encode = function encode(data, options) {
	  var buf = DEREncoder.prototype.encode.call(this, data);

	  var p = buf.toString('base64');
	  var out = ['-----BEGIN ' + options.label + '-----'];
	  for (var i = 0; i < p.length; i += 64) {
	    out.push(p.slice(i, i + 64));
	  }out.push('-----END ' + options.label + '-----');
	  return out.join('\n');
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {
		"2.16.840.1.101.3.4.1.1": "aes-128-ecb",
		"2.16.840.1.101.3.4.1.2": "aes-128-cbc",
		"2.16.840.1.101.3.4.1.3": "aes-128-ofb",
		"2.16.840.1.101.3.4.1.4": "aes-128-cfb",
		"2.16.840.1.101.3.4.1.21": "aes-192-ecb",
		"2.16.840.1.101.3.4.1.22": "aes-192-cbc",
		"2.16.840.1.101.3.4.1.23": "aes-192-ofb",
		"2.16.840.1.101.3.4.1.24": "aes-192-cfb",
		"2.16.840.1.101.3.4.1.41": "aes-256-ecb",
		"2.16.840.1.101.3.4.1.42": "aes-256-cbc",
		"2.16.840.1.101.3.4.1.43": "aes-256-ofb",
		"2.16.840.1.101.3.4.1.44": "aes-256-cfb"
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// adapted from https://github.com/apatil/pemstrip
	var findProc = /Proc-Type: 4,ENCRYPTED\r?\nDEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)\r?\n\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n/m;
	var startRegex = /^-----BEGIN (.*) KEY-----\r?\n/m;
	var fullRegex = /^-----BEGIN (.*) KEY-----\r?\n([0-9A-z\n\r\+\/\=]+)\r?\n-----END \1 KEY-----$/m;
	var evp = __webpack_require__(51);
	var ciphers = __webpack_require__(52);
	module.exports = function (okey, password) {
	  var key = okey.toString();
	  var match = key.match(findProc);
	  var decrypted;
	  if (!match) {
	    var match2 = key.match(fullRegex);
	    decrypted = new Buffer(match2[2].replace(/\r?\n/g, ''), 'base64');
	  } else {
	    var suite = 'aes' + match[1];
	    var iv = new Buffer(match[2], 'hex');
	    var cipherText = new Buffer(match[3].replace(/\r?\n/g, ''), 'base64');
	    var cipherKey = evp(password, iv.slice(0, 8), parseInt(match[1], 10)).key;
	    var out = [];
	    var cipher = ciphers.createDecipheriv(suite, cipherKey, iv);
	    out.push(cipher.update(cipherText));
	    out.push(cipher.final());
	    decrypted = Buffer.concat(out);
	  }
	  var tag = key.match(startRegex)[1] + ' KEY';
	  return {
	    tag: tag,
	    data: decrypted
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	// much of this based on https://github.com/indutny/self-signed/blob/gh-pages/lib/rsa.js
	var curves = __webpack_require__(89);
	var elliptic = __webpack_require__(90);
	var parseKeys = __webpack_require__(113);

	var BN = __webpack_require__(79);
	var EC = elliptic.ec;

	function verify(sig, hash, key, signType) {
	  var pub = parseKeys(key);
	  if (pub.type === 'ec') {
	    if (signType !== 'ecdsa') {
	      throw new Error('wrong public key type');
	    }
	    return ecVerify(sig, hash, pub);
	  } else if (pub.type === 'dsa') {
	    if (signType !== 'dsa') {
	      throw new Error('wrong public key type');
	    }
	    return dsaVerify(sig, hash, pub);
	  } else {
	    if (signType !== 'rsa') {
	      throw new Error('wrong public key type');
	    }
	  }
	  var len = pub.modulus.byteLength();
	  var pad = [1];
	  var padNum = 0;
	  while (hash.length + pad.length + 2 < len) {
	    pad.push(0xff);
	    padNum++;
	  }
	  pad.push(0x00);
	  var i = -1;
	  while (++i < hash.length) {
	    pad.push(hash[i]);
	  }
	  pad = new Buffer(pad);
	  var red = BN.mont(pub.modulus);
	  sig = new BN(sig).toRed(red);

	  sig = sig.redPow(new BN(pub.publicExponent));

	  sig = new Buffer(sig.fromRed().toArray());
	  var out = 0;
	  if (padNum < 8) {
	    out = 1;
	  }
	  len = Math.min(sig.length, pad.length);
	  if (sig.length !== pad.length) {
	    out = 1;
	  }

	  i = -1;
	  while (++i < len) {
	    out |= sig[i] ^ pad[i];
	  }
	  return out === 0;
	}

	function ecVerify(sig, hash, pub) {
	  var curveId = curves[pub.data.algorithm.curve.join('.')];
	  if (!curveId) throw new Error('unknown curve ' + pub.data.algorithm.curve.join('.'));

	  var curve = new EC(curveId);
	  var pubkey = pub.data.subjectPrivateKey.data;

	  return curve.verify(hash, sig, pubkey);
	}

	function dsaVerify(sig, hash, pub) {
	  var p = pub.data.p;
	  var q = pub.data.q;
	  var g = pub.data.g;
	  var y = pub.data.pub_key;
	  var unpacked = parseKeys.signature.decode(sig, 'der');
	  var s = unpacked.s;
	  var r = unpacked.r;
	  checkValue(s, q);
	  checkValue(r, q);
	  var montp = BN.mont(p);
	  var w = s.invm(q);
	  var v = g.toRed(montp).redPow(new BN(hash).mul(w).mod(q)).fromRed().mul(y.toRed(montp).redPow(r.mul(w).mod(q)).fromRed()).mod(p).mod(q);
	  return !v.cmp(r);
	}

	function checkValue(b, q) {
	  if (b.cmpn(0) <= 0) {
	    throw new Error('invalid sig');
	  }
	  if (b.cmp(q) >= q) {
	    throw new Error('invalid sig');
	  }
	}

	module.exports = verify;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var elliptic = __webpack_require__(90);
	var BN = __webpack_require__(79);

	module.exports = function createECDH(curve) {
		return new ECDH(curve);
	};

	var aliases = {
		secp256k1: {
			name: 'secp256k1',
			byteLength: 32
		},
		secp224r1: {
			name: 'p224',
			byteLength: 28
		},
		prime256v1: {
			name: 'p256',
			byteLength: 32
		},
		prime192v1: {
			name: 'p192',
			byteLength: 24
		},
		ed25519: {
			name: 'ed25519',
			byteLength: 32
		},
		secp384r1: {
			name: 'p384',
			byteLength: 48
		},
		secp521r1: {
			name: 'p521',
			byteLength: 66
		}
	};

	aliases.p224 = aliases.secp224r1;
	aliases.p256 = aliases.secp256r1 = aliases.prime256v1;
	aliases.p192 = aliases.secp192r1 = aliases.prime192v1;
	aliases.p384 = aliases.secp384r1;
	aliases.p521 = aliases.secp521r1;

	function ECDH(curve) {
		this.curveType = aliases[curve];
		if (!this.curveType) {
			this.curveType = {
				name: curve
			};
		}
		this.curve = new elliptic.ec(this.curveType.name);
		this.keys = void 0;
	}

	ECDH.prototype.generateKeys = function (enc, format) {
		this.keys = this.curve.genKeyPair();
		return this.getPublicKey(enc, format);
	};

	ECDH.prototype.computeSecret = function (other, inenc, enc) {
		inenc = inenc || 'utf8';
		if (!Buffer.isBuffer(other)) {
			other = new Buffer(other, inenc);
		}
		var otherPub = this.curve.keyFromPublic(other).getPublic();
		var out = otherPub.mul(this.keys.getPrivate()).getX();
		return formatReturnValue(out, enc, this.curveType.byteLength);
	};

	ECDH.prototype.getPublicKey = function (enc, format) {
		var key = this.keys.getPublic(format === 'compressed', true);
		if (format === 'hybrid') {
			if (key[key.length - 1] % 2) {
				key[0] = 7;
			} else {
				key[0] = 6;
			}
		}
		return formatReturnValue(key, enc);
	};

	ECDH.prototype.getPrivateKey = function (enc) {
		return formatReturnValue(this.keys.getPrivate(), enc);
	};

	ECDH.prototype.setPublicKey = function (pub, enc) {
		enc = enc || 'utf8';
		if (!Buffer.isBuffer(pub)) {
			pub = new Buffer(pub, enc);
		}
		this.keys._importPublic(pub);
		return this;
	};

	ECDH.prototype.setPrivateKey = function (priv, enc) {
		enc = enc || 'utf8';
		if (!Buffer.isBuffer(priv)) {
			priv = new Buffer(priv, enc);
		}
		var _priv = new BN(priv);
		_priv = _priv.toString(16);
		this.keys._importPrivate(_priv);
		return this;
	};

	function formatReturnValue(bn, enc, len) {
		if (!Array.isArray(bn)) {
			bn = bn.toArray();
		}
		var buf = new Buffer(bn);
		if (len && buf.length < len) {
			var zeros = new Buffer(len - buf.length);
			zeros.fill(0);
			buf = Buffer.concat([zeros, buf]);
		}
		if (!enc) {
			return buf;
		} else {
			return buf.toString(enc);
		}
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.publicEncrypt = __webpack_require__(136);
	exports.privateDecrypt = __webpack_require__(140);

	exports.privateEncrypt = function privateEncrypt(key, buf) {
	  return exports.publicEncrypt(key, buf, true);
	};

	exports.publicDecrypt = function publicDecrypt(key, buf) {
	  return exports.privateDecrypt(key, buf, true);
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var parseKeys = __webpack_require__(113);
	var randomBytes = __webpack_require__(9);
	var createHash = __webpack_require__(11);
	var mgf = __webpack_require__(137);
	var xor = __webpack_require__(138);
	var bn = __webpack_require__(79);
	var withPublic = __webpack_require__(139);
	var crt = __webpack_require__(88);

	var constants = {
	  RSA_PKCS1_OAEP_PADDING: 4,
	  RSA_PKCS1_PADDIN: 1,
	  RSA_NO_PADDING: 3
	};

	module.exports = function publicEncrypt(public_key, msg, reverse) {
	  var padding;
	  if (public_key.padding) {
	    padding = public_key.padding;
	  } else if (reverse) {
	    padding = 1;
	  } else {
	    padding = 4;
	  }
	  var key = parseKeys(public_key);
	  var paddedMsg;
	  if (padding === 4) {
	    paddedMsg = oaep(key, msg);
	  } else if (padding === 1) {
	    paddedMsg = pkcs1(key, msg, reverse);
	  } else if (padding === 3) {
	    paddedMsg = new bn(msg);
	    if (paddedMsg.cmp(key.modulus) >= 0) {
	      throw new Error('data too long for modulus');
	    }
	  } else {
	    throw new Error('unknown padding');
	  }
	  if (reverse) {
	    return crt(paddedMsg, key);
	  } else {
	    return withPublic(paddedMsg, key);
	  }
	};

	function oaep(key, msg) {
	  var k = key.modulus.byteLength();
	  var mLen = msg.length;
	  var iHash = createHash('sha1').update(new Buffer('')).digest();
	  var hLen = iHash.length;
	  var hLen2 = 2 * hLen;
	  if (mLen > k - hLen2 - 2) {
	    throw new Error('message too long');
	  }
	  var ps = new Buffer(k - mLen - hLen2 - 2);
	  ps.fill(0);
	  var dblen = k - hLen - 1;
	  var seed = randomBytes(hLen);
	  var maskedDb = xor(Buffer.concat([iHash, ps, new Buffer([1]), msg], dblen), mgf(seed, dblen));
	  var maskedSeed = xor(seed, mgf(maskedDb, hLen));
	  return new bn(Buffer.concat([new Buffer([0]), maskedSeed, maskedDb], k));
	}
	function pkcs1(key, msg, reverse) {
	  var mLen = msg.length;
	  var k = key.modulus.byteLength();
	  if (mLen > k - 11) {
	    throw new Error('message too long');
	  }
	  var ps;
	  if (reverse) {
	    ps = new Buffer(k - mLen - 3);
	    ps.fill(0xff);
	  } else {
	    ps = nonZero(k - mLen - 3);
	  }
	  return new bn(Buffer.concat([new Buffer([0, reverse ? 1 : 2]), ps, new Buffer([0]), msg], k));
	}
	function nonZero(len, crypto) {
	  var out = new Buffer(len);
	  var i = 0;
	  var cache = randomBytes(len * 2);
	  var cur = 0;
	  var num;
	  while (i < len) {
	    if (cur === cache.length) {
	      cache = randomBytes(len * 2);
	      cur = 0;
	    }
	    num = cache[cur++];
	    if (num) {
	      out[i++] = num;
	    }
	  }
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var createHash = __webpack_require__(11);
	module.exports = function (seed, len) {
	  var t = new Buffer('');
	  var i = 0,
	      c;
	  while (t.length < len) {
	    c = i2ops(i++);
	    t = Buffer.concat([t, createHash('sha1').update(seed).update(c).digest()]);
	  }
	  return t.slice(0, len);
	};

	function i2ops(c) {
	  var out = new Buffer(4);
	  out.writeUInt32BE(c, 0);
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 138 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function xor(a, b) {
	  var len = a.length;
	  var i = -1;
	  while (++i < len) {
	    a[i] ^= b[i];
	  }
	  return a;
	};

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var bn = __webpack_require__(79);
	function withPublic(paddedMsg, key) {
	  return new Buffer(paddedMsg.toRed(bn.mont(key.modulus)).redPow(new bn(key.publicExponent)).fromRed().toArray());
	}

	module.exports = withPublic;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var parseKeys = __webpack_require__(113);
	var mgf = __webpack_require__(137);
	var xor = __webpack_require__(138);
	var bn = __webpack_require__(79);
	var crt = __webpack_require__(88);
	var createHash = __webpack_require__(11);
	var withPublic = __webpack_require__(139);
	module.exports = function privateDecrypt(private_key, enc, reverse) {
	  var padding;
	  if (private_key.padding) {
	    padding = private_key.padding;
	  } else if (reverse) {
	    padding = 1;
	  } else {
	    padding = 4;
	  }

	  var key = parseKeys(private_key);
	  var k = key.modulus.byteLength();
	  if (enc.length > k || new bn(enc).cmp(key.modulus) >= 0) {
	    throw new Error('decryption error');
	  }
	  var msg;
	  if (reverse) {
	    msg = withPublic(new bn(enc), key);
	  } else {
	    msg = crt(enc, key);
	  }
	  var zBuffer = new Buffer(k - msg.length);
	  zBuffer.fill(0);
	  msg = Buffer.concat([zBuffer, msg], k);
	  if (padding === 4) {
	    return oaep(key, msg);
	  } else if (padding === 1) {
	    return pkcs1(key, msg, reverse);
	  } else if (padding === 3) {
	    return msg;
	  } else {
	    throw new Error('unknown padding');
	  }
	};

	function oaep(key, msg) {
	  var n = key.modulus;
	  var k = key.modulus.byteLength();
	  var mLen = msg.length;
	  var iHash = createHash('sha1').update(new Buffer('')).digest();
	  var hLen = iHash.length;
	  var hLen2 = 2 * hLen;
	  if (msg[0] !== 0) {
	    throw new Error('decryption error');
	  }
	  var maskedSeed = msg.slice(1, hLen + 1);
	  var maskedDb = msg.slice(hLen + 1);
	  var seed = xor(maskedSeed, mgf(maskedDb, hLen));
	  var db = xor(maskedDb, mgf(seed, k - hLen - 1));
	  if (compare(iHash, db.slice(0, hLen))) {
	    throw new Error('decryption error');
	  }
	  var i = hLen;
	  while (db[i] === 0) {
	    i++;
	  }
	  if (db[i++] !== 1) {
	    throw new Error('decryption error');
	  }
	  return db.slice(i);
	}

	function pkcs1(key, msg, reverse) {
	  var p1 = msg.slice(0, 2);
	  var i = 2;
	  var status = 0;
	  while (msg[i++] !== 0) {
	    if (i >= msg.length) {
	      status++;
	      break;
	    }
	  }
	  var ps = msg.slice(2, i - 1);
	  var p2 = msg.slice(i - 1, i);

	  if (p1.toString('hex') !== '0002' && !reverse || p1.toString('hex') !== '0001' && reverse) {
	    status++;
	  }
	  if (ps.length < 8) {
	    status++;
	  }
	  if (status) {
	    throw new Error('decryption error');
	  }
	  return msg.slice(i);
	}
	function compare(a, b) {
	  a = new Buffer(a);
	  b = new Buffer(b);
	  var dif = 0;
	  var len = a.length;
	  if (a.length !== b.length) {
	    dif++;
	    len = Math.min(a.length, b.length);
	  }
	  var i = -1;
	  while (++i < len) {
	    dif += a[i] ^ b[i];
	  }
	  return dif;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var bigInt = function (undefined) {
	    "use strict";

	    var BASE = 1e7,
	        LOG_BASE = 7,
	        MAX_INT = 9007199254740992,
	        MAX_INT_ARR = smallToArray(MAX_INT),
	        LOG_MAX_INT = Math.log(MAX_INT);

	    function Integer(v, radix) {
	        if (typeof v === "undefined") return Integer[0];
	        if (typeof radix !== "undefined") return +radix === 10 ? parseValue(v) : parseBase(v, radix);
	        return parseValue(v);
	    }

	    function BigInteger(value, sign) {
	        this.value = value;
	        this.sign = sign;
	        this.isSmall = false;
	    }
	    BigInteger.prototype = Object.create(Integer.prototype);

	    function SmallInteger(value) {
	        this.value = value;
	        this.sign = value < 0;
	        this.isSmall = true;
	    }
	    SmallInteger.prototype = Object.create(Integer.prototype);

	    function isPrecise(n) {
	        return -MAX_INT < n && n < MAX_INT;
	    }

	    function smallToArray(n) {
	        // For performance reasons doesn't reference BASE, need to change this function if BASE changes
	        if (n < 1e7) return [n];
	        if (n < 1e14) return [n % 1e7, Math.floor(n / 1e7)];
	        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
	    }

	    function arrayToSmall(arr) {
	        // If BASE changes this function may need to change
	        trim(arr);
	        var length = arr.length;
	        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
	            switch (length) {
	                case 0:
	                    return 0;
	                case 1:
	                    return arr[0];
	                case 2:
	                    return arr[0] + arr[1] * BASE;
	                default:
	                    return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
	            }
	        }
	        return arr;
	    }

	    function trim(v) {
	        var i = v.length;
	        while (v[--i] === 0) {}
	        v.length = i + 1;
	    }

	    function createArray(length) {
	        // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
	        var x = new Array(length);
	        var i = -1;
	        while (++i < length) {
	            x[i] = 0;
	        }
	        return x;
	    }

	    function truncate(n) {
	        if (n > 0) return Math.floor(n);
	        return Math.ceil(n);
	    }

	    function add(a, b) {
	        // assumes a and b are arrays with a.length >= b.length
	        var l_a = a.length,
	            l_b = b.length,
	            r = new Array(l_a),
	            carry = 0,
	            base = BASE,
	            sum,
	            i;
	        for (i = 0; i < l_b; i++) {
	            sum = a[i] + b[i] + carry;
	            carry = sum >= base ? 1 : 0;
	            r[i] = sum - carry * base;
	        }
	        while (i < l_a) {
	            sum = a[i] + carry;
	            carry = sum === base ? 1 : 0;
	            r[i++] = sum - carry * base;
	        }
	        if (carry > 0) r.push(carry);
	        return r;
	    }

	    function addAny(a, b) {
	        if (a.length >= b.length) return add(a, b);
	        return add(b, a);
	    }

	    function addSmall(a, carry) {
	        // assumes a is array, carry is number with 0 <= carry < MAX_INT
	        var l = a.length,
	            r = new Array(l),
	            base = BASE,
	            sum,
	            i;
	        for (i = 0; i < l; i++) {
	            sum = a[i] - base + carry;
	            carry = Math.floor(sum / base);
	            r[i] = sum - carry * base;
	            carry += 1;
	        }
	        while (carry > 0) {
	            r[i++] = carry % base;
	            carry = Math.floor(carry / base);
	        }
	        return r;
	    }

	    BigInteger.prototype.add = function (v) {
	        var value,
	            n = parseValue(v);
	        if (this.sign !== n.sign) {
	            return this.subtract(n.negate());
	        }
	        var a = this.value,
	            b = n.value;
	        if (n.isSmall) {
	            return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
	        }
	        return new BigInteger(addAny(a, b), this.sign);
	    };
	    BigInteger.prototype.plus = BigInteger.prototype.add;

	    SmallInteger.prototype.add = function (v) {
	        var n = parseValue(v);
	        var a = this.value;
	        if (a < 0 !== n.sign) {
	            return this.subtract(n.negate());
	        }
	        var b = n.value;
	        if (n.isSmall) {
	            if (isPrecise(a + b)) return new SmallInteger(a + b);
	            b = smallToArray(Math.abs(b));
	        }
	        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
	    };
	    SmallInteger.prototype.plus = SmallInteger.prototype.add;

	    function subtract(a, b) {
	        // assumes a and b are arrays with a >= b
	        var a_l = a.length,
	            b_l = b.length,
	            r = new Array(a_l),
	            borrow = 0,
	            base = BASE,
	            i,
	            difference;
	        for (i = 0; i < b_l; i++) {
	            difference = a[i] - borrow - b[i];
	            if (difference < 0) {
	                difference += base;
	                borrow = 1;
	            } else borrow = 0;
	            r[i] = difference;
	        }
	        for (i = b_l; i < a_l; i++) {
	            difference = a[i] - borrow;
	            if (difference < 0) difference += base;else {
	                r[i++] = difference;
	                break;
	            }
	            r[i] = difference;
	        }
	        for (; i < a_l; i++) {
	            r[i] = a[i];
	        }
	        trim(r);
	        return r;
	    }

	    function subtractAny(a, b, sign) {
	        var value, isSmall;
	        if (compareAbs(a, b) >= 0) {
	            value = subtract(a, b);
	        } else {
	            value = subtract(b, a);
	            sign = !sign;
	        }
	        value = arrayToSmall(value);
	        if (typeof value === "number") {
	            if (sign) value = -value;
	            return new SmallInteger(value);
	        }
	        return new BigInteger(value, sign);
	    }

	    function subtractSmall(a, b, sign) {
	        // assumes a is array, b is number with 0 <= b < MAX_INT
	        var l = a.length,
	            r = new Array(l),
	            carry = -b,
	            base = BASE,
	            i,
	            difference;
	        for (i = 0; i < l; i++) {
	            difference = a[i] + carry;
	            carry = Math.floor(difference / base);
	            difference %= base;
	            r[i] = difference < 0 ? difference + base : difference;
	        }
	        r = arrayToSmall(r);
	        if (typeof r === "number") {
	            if (sign) r = -r;
	            return new SmallInteger(r);
	        }return new BigInteger(r, sign);
	    }

	    BigInteger.prototype.subtract = function (v) {
	        var n = parseValue(v);
	        if (this.sign !== n.sign) {
	            return this.add(n.negate());
	        }
	        var a = this.value,
	            b = n.value;
	        if (n.isSmall) return subtractSmall(a, Math.abs(b), this.sign);
	        return subtractAny(a, b, this.sign);
	    };
	    BigInteger.prototype.minus = BigInteger.prototype.subtract;

	    SmallInteger.prototype.subtract = function (v) {
	        var n = parseValue(v);
	        var a = this.value;
	        if (a < 0 !== n.sign) {
	            return this.add(n.negate());
	        }
	        var b = n.value;
	        if (n.isSmall) {
	            return new SmallInteger(a - b);
	        }
	        return subtractSmall(b, Math.abs(a), a >= 0);
	    };
	    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

	    BigInteger.prototype.negate = function () {
	        return new BigInteger(this.value, !this.sign);
	    };
	    SmallInteger.prototype.negate = function () {
	        var sign = this.sign;
	        var small = new SmallInteger(-this.value);
	        small.sign = !sign;
	        return small;
	    };

	    BigInteger.prototype.abs = function () {
	        return new BigInteger(this.value, false);
	    };
	    SmallInteger.prototype.abs = function () {
	        return new SmallInteger(Math.abs(this.value));
	    };

	    function multiplyLong(a, b) {
	        var a_l = a.length,
	            b_l = b.length,
	            l = a_l + b_l,
	            r = createArray(l),
	            base = BASE,
	            product,
	            carry,
	            i,
	            a_i,
	            b_j;
	        for (i = 0; i < a_l; ++i) {
	            a_i = a[i];
	            for (var j = 0; j < b_l; ++j) {
	                b_j = b[j];
	                product = a_i * b_j + r[i + j];
	                carry = Math.floor(product / base);
	                r[i + j] = product - carry * base;
	                r[i + j + 1] += carry;
	            }
	        }
	        trim(r);
	        return r;
	    }

	    function multiplySmall(a, b) {
	        // assumes a is array, b is number with |b| < BASE
	        var l = a.length,
	            r = new Array(l),
	            base = BASE,
	            carry = 0,
	            product,
	            i;
	        for (i = 0; i < l; i++) {
	            product = a[i] * b + carry;
	            carry = Math.floor(product / base);
	            r[i] = product - carry * base;
	        }
	        while (carry > 0) {
	            r[i++] = carry % base;
	            carry = Math.floor(carry / base);
	        }
	        return r;
	    }

	    function shiftLeft(x, n) {
	        var r = [];
	        while (n-- > 0) {
	            r.push(0);
	        }return r.concat(x);
	    }

	    function multiplyKaratsuba(x, y) {
	        var n = Math.max(x.length, y.length);

	        if (n <= 30) return multiplyLong(x, y);
	        n = Math.ceil(n / 2);

	        var b = x.slice(n),
	            a = x.slice(0, n),
	            d = y.slice(n),
	            c = y.slice(0, n);

	        var ac = multiplyKaratsuba(a, c),
	            bd = multiplyKaratsuba(b, d),
	            abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

	        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
	        trim(product);
	        return product;
	    }

	    // The following function is derived from a surface fit of a graph plotting the performance difference
	    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
	    function useKaratsuba(l1, l2) {
	        return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
	    }

	    BigInteger.prototype.multiply = function (v) {
	        var value,
	            n = parseValue(v),
	            a = this.value,
	            b = n.value,
	            sign = this.sign !== n.sign,
	            abs;
	        if (n.isSmall) {
	            if (b === 0) return Integer[0];
	            if (b === 1) return this;
	            if (b === -1) return this.negate();
	            abs = Math.abs(b);
	            if (abs < BASE) {
	                return new BigInteger(multiplySmall(a, abs), sign);
	            }
	            b = smallToArray(abs);
	        }
	        if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
	            return new BigInteger(multiplyKaratsuba(a, b), sign);
	        return new BigInteger(multiplyLong(a, b), sign);
	    };

	    BigInteger.prototype.times = BigInteger.prototype.multiply;

	    function multiplySmallAndArray(a, b, sign) {
	        // a >= 0
	        if (a < BASE) {
	            return new BigInteger(multiplySmall(b, a), sign);
	        }
	        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
	    }
	    SmallInteger.prototype._multiplyBySmall = function (a) {
	        if (isPrecise(a.value * this.value)) {
	            return new SmallInteger(a.value * this.value);
	        }
	        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
	    };
	    BigInteger.prototype._multiplyBySmall = function (a) {
	        if (a.value === 0) return Integer[0];
	        if (a.value === 1) return this;
	        if (a.value === -1) return this.negate();
	        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
	    };
	    SmallInteger.prototype.multiply = function (v) {
	        return parseValue(v)._multiplyBySmall(this);
	    };
	    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

	    function square(a) {
	        var l = a.length,
	            r = createArray(l + l),
	            base = BASE,
	            product,
	            carry,
	            i,
	            a_i,
	            a_j;
	        for (i = 0; i < l; i++) {
	            a_i = a[i];
	            for (var j = 0; j < l; j++) {
	                a_j = a[j];
	                product = a_i * a_j + r[i + j];
	                carry = Math.floor(product / base);
	                r[i + j] = product - carry * base;
	                r[i + j + 1] += carry;
	            }
	        }
	        trim(r);
	        return r;
	    }

	    BigInteger.prototype.square = function () {
	        return new BigInteger(square(this.value), false);
	    };

	    SmallInteger.prototype.square = function () {
	        var value = this.value * this.value;
	        if (isPrecise(value)) return new SmallInteger(value);
	        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
	    };

	    function divMod1(a, b) {
	        // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
	        var a_l = a.length,
	            b_l = b.length,
	            base = BASE,
	            result = createArray(b.length),
	            divisorMostSignificantDigit = b[b_l - 1],

	        // normalization
	        lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
	            remainder = multiplySmall(a, lambda),
	            divisor = multiplySmall(b, lambda),
	            quotientDigit,
	            shift,
	            carry,
	            borrow,
	            i,
	            l,
	            q;
	        if (remainder.length <= a_l) remainder.push(0);
	        divisor.push(0);
	        divisorMostSignificantDigit = divisor[b_l - 1];
	        for (shift = a_l - b_l; shift >= 0; shift--) {
	            quotientDigit = base - 1;
	            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
	                quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
	            }
	            // quotientDigit <= base - 1
	            carry = 0;
	            borrow = 0;
	            l = divisor.length;
	            for (i = 0; i < l; i++) {
	                carry += quotientDigit * divisor[i];
	                q = Math.floor(carry / base);
	                borrow += remainder[shift + i] - (carry - q * base);
	                carry = q;
	                if (borrow < 0) {
	                    remainder[shift + i] = borrow + base;
	                    borrow = -1;
	                } else {
	                    remainder[shift + i] = borrow;
	                    borrow = 0;
	                }
	            }
	            while (borrow !== 0) {
	                quotientDigit -= 1;
	                carry = 0;
	                for (i = 0; i < l; i++) {
	                    carry += remainder[shift + i] - base + divisor[i];
	                    if (carry < 0) {
	                        remainder[shift + i] = carry + base;
	                        carry = 0;
	                    } else {
	                        remainder[shift + i] = carry;
	                        carry = 1;
	                    }
	                }
	                borrow += carry;
	            }
	            result[shift] = quotientDigit;
	        }
	        // denormalization
	        remainder = divModSmall(remainder, lambda)[0];
	        return [arrayToSmall(result), arrayToSmall(remainder)];
	    }

	    function divMod2(a, b) {
	        // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
	        // Performs faster than divMod1 on larger input sizes.
	        var a_l = a.length,
	            b_l = b.length,
	            result = [],
	            part = [],
	            base = BASE,
	            guess,
	            xlen,
	            highx,
	            highy,
	            check;
	        while (a_l) {
	            part.unshift(a[--a_l]);
	            if (compareAbs(part, b) < 0) {
	                result.push(0);
	                continue;
	            }
	            xlen = part.length;
	            highx = part[xlen - 1] * base + part[xlen - 2];
	            highy = b[b_l - 1] * base + b[b_l - 2];
	            if (xlen > b_l) {
	                highx = (highx + 1) * base;
	            }
	            guess = Math.ceil(highx / highy);
	            do {
	                check = multiplySmall(b, guess);
	                if (compareAbs(check, part) <= 0) break;
	                guess--;
	            } while (guess);
	            result.push(guess);
	            part = subtract(part, check);
	        }
	        result.reverse();
	        return [arrayToSmall(result), arrayToSmall(part)];
	    }

	    function divModSmall(value, lambda) {
	        var length = value.length,
	            quotient = createArray(length),
	            base = BASE,
	            i,
	            q,
	            remainder,
	            divisor;
	        remainder = 0;
	        for (i = length - 1; i >= 0; --i) {
	            divisor = remainder * base + value[i];
	            q = truncate(divisor / lambda);
	            remainder = divisor - q * lambda;
	            quotient[i] = q | 0;
	        }
	        return [quotient, remainder | 0];
	    }

	    function divModAny(self, v) {
	        var value,
	            n = parseValue(v);
	        var a = self.value,
	            b = n.value;
	        var quotient;
	        if (b === 0) throw new Error("Cannot divide by zero");
	        if (self.isSmall) {
	            if (n.isSmall) {
	                return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
	            }
	            return [Integer[0], self];
	        }
	        if (n.isSmall) {
	            if (b === 1) return [self, Integer[0]];
	            if (b == -1) return [self.negate(), Integer[0]];
	            var abs = Math.abs(b);
	            if (abs < BASE) {
	                value = divModSmall(a, abs);
	                quotient = arrayToSmall(value[0]);
	                var remainder = value[1];
	                if (self.sign) remainder = -remainder;
	                if (typeof quotient === "number") {
	                    if (self.sign !== n.sign) quotient = -quotient;
	                    return [new SmallInteger(quotient), new SmallInteger(remainder)];
	                }
	                return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
	            }
	            b = smallToArray(abs);
	        }
	        var comparison = compareAbs(a, b);
	        if (comparison === -1) return [Integer[0], self];
	        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

	        // divMod1 is faster on smaller input sizes
	        if (a.length + b.length <= 200) value = divMod1(a, b);else value = divMod2(a, b);

	        quotient = value[0];
	        var qSign = self.sign !== n.sign,
	            mod = value[1],
	            mSign = self.sign;
	        if (typeof quotient === "number") {
	            if (qSign) quotient = -quotient;
	            quotient = new SmallInteger(quotient);
	        } else quotient = new BigInteger(quotient, qSign);
	        if (typeof mod === "number") {
	            if (mSign) mod = -mod;
	            mod = new SmallInteger(mod);
	        } else mod = new BigInteger(mod, mSign);
	        return [quotient, mod];
	    }

	    BigInteger.prototype.divmod = function (v) {
	        var result = divModAny(this, v);
	        return {
	            quotient: result[0],
	            remainder: result[1]
	        };
	    };
	    SmallInteger.prototype.divmod = BigInteger.prototype.divmod;

	    BigInteger.prototype.divide = function (v) {
	        return divModAny(this, v)[0];
	    };
	    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

	    BigInteger.prototype.mod = function (v) {
	        return divModAny(this, v)[1];
	    };
	    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

	    BigInteger.prototype.pow = function (v) {
	        var n = parseValue(v),
	            a = this.value,
	            b = n.value,
	            value,
	            x,
	            y;
	        if (b === 0) return Integer[1];
	        if (a === 0) return Integer[0];
	        if (a === 1) return Integer[1];
	        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
	        if (n.sign) {
	            return Integer[0];
	        }
	        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
	        if (this.isSmall) {
	            if (isPrecise(value = Math.pow(a, b))) return new SmallInteger(truncate(value));
	        }
	        x = this;
	        y = Integer[1];
	        while (true) {
	            if (b & 1 === 1) {
	                y = y.times(x);
	                --b;
	            }
	            if (b === 0) break;
	            b /= 2;
	            x = x.square();
	        }
	        return y;
	    };
	    SmallInteger.prototype.pow = BigInteger.prototype.pow;

	    BigInteger.prototype.modPow = function (exp, mod) {
	        exp = parseValue(exp);
	        mod = parseValue(mod);
	        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
	        var r = Integer[1],
	            base = this.mod(mod);
	        while (exp.isPositive()) {
	            if (base.isZero()) return Integer[0];
	            if (exp.isOdd()) r = r.multiply(base).mod(mod);
	            exp = exp.divide(2);
	            base = base.square().mod(mod);
	        }
	        return r;
	    };
	    SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

	    function compareAbs(a, b) {
	        if (a.length !== b.length) {
	            return a.length > b.length ? 1 : -1;
	        }
	        for (var i = a.length - 1; i >= 0; i--) {
	            if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
	        }
	        return 0;
	    }

	    BigInteger.prototype.compareAbs = function (v) {
	        var n = parseValue(v),
	            a = this.value,
	            b = n.value;
	        if (n.isSmall) return 1;
	        return compareAbs(a, b);
	    };
	    SmallInteger.prototype.compareAbs = function (v) {
	        var n = parseValue(v),
	            a = Math.abs(this.value),
	            b = n.value;
	        if (n.isSmall) {
	            b = Math.abs(b);
	            return a === b ? 0 : a > b ? 1 : -1;
	        }
	        return -1;
	    };

	    BigInteger.prototype.compare = function (v) {
	        // See discussion about comparison with Infinity:
	        // https://github.com/peterolson/BigInteger.js/issues/61
	        if (v === Infinity) {
	            return -1;
	        }
	        if (v === -Infinity) {
	            return 1;
	        }

	        var n = parseValue(v),
	            a = this.value,
	            b = n.value;
	        if (this.sign !== n.sign) {
	            return n.sign ? 1 : -1;
	        }
	        if (n.isSmall) {
	            return this.sign ? -1 : 1;
	        }
	        return compareAbs(a, b) * (this.sign ? -1 : 1);
	    };
	    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

	    SmallInteger.prototype.compare = function (v) {
	        if (v === Infinity) {
	            return -1;
	        }
	        if (v === -Infinity) {
	            return 1;
	        }

	        var n = parseValue(v),
	            a = this.value,
	            b = n.value;
	        if (n.isSmall) {
	            return a == b ? 0 : a > b ? 1 : -1;
	        }
	        if (a < 0 !== n.sign) {
	            return a < 0 ? -1 : 1;
	        }
	        return a < 0 ? 1 : -1;
	    };
	    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

	    BigInteger.prototype.equals = function (v) {
	        return this.compare(v) === 0;
	    };
	    SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

	    BigInteger.prototype.notEquals = function (v) {
	        return this.compare(v) !== 0;
	    };
	    SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

	    BigInteger.prototype.greater = function (v) {
	        return this.compare(v) > 0;
	    };
	    SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

	    BigInteger.prototype.lesser = function (v) {
	        return this.compare(v) < 0;
	    };
	    SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

	    BigInteger.prototype.greaterOrEquals = function (v) {
	        return this.compare(v) >= 0;
	    };
	    SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

	    BigInteger.prototype.lesserOrEquals = function (v) {
	        return this.compare(v) <= 0;
	    };
	    SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

	    BigInteger.prototype.isEven = function () {
	        return (this.value[0] & 1) === 0;
	    };
	    SmallInteger.prototype.isEven = function () {
	        return (this.value & 1) === 0;
	    };

	    BigInteger.prototype.isOdd = function () {
	        return (this.value[0] & 1) === 1;
	    };
	    SmallInteger.prototype.isOdd = function () {
	        return (this.value & 1) === 1;
	    };

	    BigInteger.prototype.isPositive = function () {
	        return !this.sign;
	    };
	    SmallInteger.prototype.isPositive = function () {
	        return this.value > 0;
	    };

	    BigInteger.prototype.isNegative = function () {
	        return this.sign;
	    };
	    SmallInteger.prototype.isNegative = function () {
	        return this.value < 0;
	    };

	    BigInteger.prototype.isUnit = function () {
	        return false;
	    };
	    SmallInteger.prototype.isUnit = function () {
	        return Math.abs(this.value) === 1;
	    };

	    BigInteger.prototype.isZero = function () {
	        return false;
	    };
	    SmallInteger.prototype.isZero = function () {
	        return this.value === 0;
	    };
	    BigInteger.prototype.isDivisibleBy = function (v) {
	        var n = parseValue(v);
	        var value = n.value;
	        if (value === 0) return false;
	        if (value === 1) return true;
	        if (value === 2) return this.isEven();
	        return this.mod(n).equals(Integer[0]);
	    };
	    SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

	    function isBasicPrime(v) {
	        var n = v.abs();
	        if (n.isUnit()) return false;
	        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
	        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
	        if (n.lesser(25)) return true;
	        // we don't know if it's prime: let the other functions figure it out
	    }

	    BigInteger.prototype.isPrime = function () {
	        var isPrime = isBasicPrime(this);
	        if (isPrime !== undefined) return isPrime;
	        var n = this.abs(),
	            nPrev = n.prev();
	        var a = [2, 3, 5, 7, 11, 13, 17, 19],
	            b = nPrev,
	            d,
	            t,
	            i,
	            x;
	        while (b.isEven()) {
	            b = b.divide(2);
	        }for (i = 0; i < a.length; i++) {
	            x = bigInt(a[i]).modPow(b, n);
	            if (x.equals(Integer[1]) || x.equals(nPrev)) continue;
	            for (t = true, d = b; t && d.lesser(nPrev); d = d.multiply(2)) {
	                x = x.square().mod(n);
	                if (x.equals(nPrev)) t = false;
	            }
	            if (t) return false;
	        }
	        return true;
	    };
	    SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

	    BigInteger.prototype.isProbablePrime = function (iterations) {
	        var isPrime = isBasicPrime(this);
	        if (isPrime !== undefined) return isPrime;
	        var n = this.abs();
	        var t = iterations === undefined ? 5 : iterations;
	        // use the Fermat primality test
	        for (var i = 0; i < t; i++) {
	            var a = bigInt.randBetween(2, n.minus(2));
	            if (!a.modPow(n.prev(), n).isUnit()) return false; // definitely composite
	        }
	        return true; // large chance of being prime
	    };
	    SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

	    BigInteger.prototype.modInv = function (n) {
	        var t = bigInt.zero,
	            newT = bigInt.one,
	            r = parseValue(n),
	            newR = this.abs(),
	            q,
	            lastT,
	            lastR;
	        while (!newR.equals(bigInt.zero)) {
	            q = r.divide(newR);
	            lastT = t;
	            lastR = r;
	            t = newT;
	            r = newR;
	            newT = lastT.subtract(q.multiply(newT));
	            newR = lastR.subtract(q.multiply(newR));
	        }
	        if (!r.equals(1)) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
	        if (t.compare(0) === -1) {
	            t = t.add(n);
	        }
	        return t;
	    };
	    SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

	    BigInteger.prototype.next = function () {
	        var value = this.value;
	        if (this.sign) {
	            return subtractSmall(value, 1, this.sign);
	        }
	        return new BigInteger(addSmall(value, 1), this.sign);
	    };
	    SmallInteger.prototype.next = function () {
	        var value = this.value;
	        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
	        return new BigInteger(MAX_INT_ARR, false);
	    };

	    BigInteger.prototype.prev = function () {
	        var value = this.value;
	        if (this.sign) {
	            return new BigInteger(addSmall(value, 1), true);
	        }
	        return subtractSmall(value, 1, this.sign);
	    };
	    SmallInteger.prototype.prev = function () {
	        var value = this.value;
	        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
	        return new BigInteger(MAX_INT_ARR, true);
	    };

	    var powersOfTwo = [1];
	    while (powersOfTwo[powersOfTwo.length - 1] <= BASE) {
	        powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
	    }var powers2Length = powersOfTwo.length,
	        highestPower2 = powersOfTwo[powers2Length - 1];

	    function shift_isSmall(n) {
	        return (typeof n === "number" || typeof n === "string") && +Math.abs(n) <= BASE || n instanceof BigInteger && n.value.length <= 1;
	    }

	    BigInteger.prototype.shiftLeft = function (n) {
	        if (!shift_isSmall(n)) {
	            throw new Error(String(n) + " is too large for shifting.");
	        }
	        n = +n;
	        if (n < 0) return this.shiftRight(-n);
	        var result = this;
	        while (n >= powers2Length) {
	            result = result.multiply(highestPower2);
	            n -= powers2Length - 1;
	        }
	        return result.multiply(powersOfTwo[n]);
	    };
	    SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

	    BigInteger.prototype.shiftRight = function (n) {
	        var remQuo;
	        if (!shift_isSmall(n)) {
	            throw new Error(String(n) + " is too large for shifting.");
	        }
	        n = +n;
	        if (n < 0) return this.shiftLeft(-n);
	        var result = this;
	        while (n >= powers2Length) {
	            if (result.isZero()) return result;
	            remQuo = divModAny(result, highestPower2);
	            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
	            n -= powers2Length - 1;
	        }
	        remQuo = divModAny(result, powersOfTwo[n]);
	        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
	    };
	    SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

	    function bitwise(x, y, fn) {
	        y = parseValue(y);
	        var xSign = x.isNegative(),
	            ySign = y.isNegative();
	        var xRem = xSign ? x.not() : x,
	            yRem = ySign ? y.not() : y;
	        var xBits = [],
	            yBits = [];
	        var xStop = false,
	            yStop = false;
	        while (!xStop || !yStop) {
	            if (xRem.isZero()) {
	                // virtual sign extension for simulating two's complement
	                xStop = true;
	                xBits.push(xSign ? 1 : 0);
	            } else if (xSign) xBits.push(xRem.isEven() ? 1 : 0); // two's complement for negative numbers
	            else xBits.push(xRem.isEven() ? 0 : 1);

	            if (yRem.isZero()) {
	                yStop = true;
	                yBits.push(ySign ? 1 : 0);
	            } else if (ySign) yBits.push(yRem.isEven() ? 1 : 0);else yBits.push(yRem.isEven() ? 0 : 1);

	            xRem = xRem.over(2);
	            yRem = yRem.over(2);
	        }
	        var result = [];
	        for (var i = 0; i < xBits.length; i++) {
	            result.push(fn(xBits[i], yBits[i]));
	        }var sum = bigInt(result.pop()).negate().times(bigInt(2).pow(result.length));
	        while (result.length) {
	            sum = sum.add(bigInt(result.pop()).times(bigInt(2).pow(result.length)));
	        }
	        return sum;
	    }

	    BigInteger.prototype.not = function () {
	        return this.negate().prev();
	    };
	    SmallInteger.prototype.not = BigInteger.prototype.not;

	    BigInteger.prototype.and = function (n) {
	        return bitwise(this, n, function (a, b) {
	            return a & b;
	        });
	    };
	    SmallInteger.prototype.and = BigInteger.prototype.and;

	    BigInteger.prototype.or = function (n) {
	        return bitwise(this, n, function (a, b) {
	            return a | b;
	        });
	    };
	    SmallInteger.prototype.or = BigInteger.prototype.or;

	    BigInteger.prototype.xor = function (n) {
	        return bitwise(this, n, function (a, b) {
	            return a ^ b;
	        });
	    };
	    SmallInteger.prototype.xor = BigInteger.prototype.xor;

	    var LOBMASK_I = 1 << 30,
	        LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
	    function roughLOB(n) {
	        // get lowestOneBit (rough)
	        // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
	        // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
	        var v = n.value,
	            x = typeof v === "number" ? v | LOBMASK_I : v[0] + v[1] * BASE | LOBMASK_BI;
	        return x & -x;
	    }

	    function max(a, b) {
	        a = parseValue(a);
	        b = parseValue(b);
	        return a.greater(b) ? a : b;
	    }
	    function min(a, b) {
	        a = parseValue(a);
	        b = parseValue(b);
	        return a.lesser(b) ? a : b;
	    }
	    function gcd(a, b) {
	        a = parseValue(a).abs();
	        b = parseValue(b).abs();
	        if (a.equals(b)) return a;
	        if (a.isZero()) return b;
	        if (b.isZero()) return a;
	        var c = Integer[1],
	            d,
	            t;
	        while (a.isEven() && b.isEven()) {
	            d = Math.min(roughLOB(a), roughLOB(b));
	            a = a.divide(d);
	            b = b.divide(d);
	            c = c.multiply(d);
	        }
	        while (a.isEven()) {
	            a = a.divide(roughLOB(a));
	        }
	        do {
	            while (b.isEven()) {
	                b = b.divide(roughLOB(b));
	            }
	            if (a.greater(b)) {
	                t = b;b = a;a = t;
	            }
	            b = b.subtract(a);
	        } while (!b.isZero());
	        return c.isUnit() ? a : a.multiply(c);
	    }
	    function lcm(a, b) {
	        a = parseValue(a).abs();
	        b = parseValue(b).abs();
	        return a.divide(gcd(a, b)).multiply(b);
	    }
	    function randBetween(a, b) {
	        a = parseValue(a);
	        b = parseValue(b);
	        var low = min(a, b),
	            high = max(a, b);
	        var range = high.subtract(low);
	        if (range.isSmall) return low.add(Math.round(Math.random() * range));
	        var length = range.value.length - 1;
	        var result = [],
	            restricted = true;
	        for (var i = length; i >= 0; i--) {
	            var top = restricted ? range.value[i] : BASE;
	            var digit = truncate(Math.random() * top);
	            result.unshift(digit);
	            if (digit < top) restricted = false;
	        }
	        result = arrayToSmall(result);
	        return low.add(typeof result === "number" ? new SmallInteger(result) : new BigInteger(result, false));
	    }
	    var parseBase = function parseBase(text, base) {
	        var val = Integer[0],
	            pow = Integer[1],
	            length = text.length;
	        if (2 <= base && base <= 36) {
	            if (length <= LOG_MAX_INT / Math.log(base)) {
	                return new SmallInteger(parseInt(text, base));
	            }
	        }
	        base = parseValue(base);
	        var digits = [];
	        var i;
	        var isNegative = text[0] === "-";
	        for (i = isNegative ? 1 : 0; i < text.length; i++) {
	            var c = text[i].toLowerCase(),
	                charCode = c.charCodeAt(0);
	            if (48 <= charCode && charCode <= 57) digits.push(parseValue(c));else if (97 <= charCode && charCode <= 122) digits.push(parseValue(c.charCodeAt(0) - 87));else if (c === "<") {
	                var start = i;
	                do {
	                    i++;
	                } while (text[i] !== ">");
	                digits.push(parseValue(text.slice(start + 1, i)));
	            } else throw new Error(c + " is not a valid character");
	        }
	        digits.reverse();
	        for (i = 0; i < digits.length; i++) {
	            val = val.add(digits[i].times(pow));
	            pow = pow.times(base);
	        }
	        return isNegative ? val.negate() : val;
	    };

	    function stringify(digit) {
	        var v = digit.value;
	        if (typeof v === "number") v = [v];
	        if (v.length === 1 && v[0] <= 35) {
	            return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(v[0]);
	        }
	        return "<" + v + ">";
	    }
	    function toBase(n, base) {
	        base = bigInt(base);
	        if (base.isZero()) {
	            if (n.isZero()) return "0";
	            throw new Error("Cannot convert nonzero numbers to base 0.");
	        }
	        if (base.equals(-1)) {
	            if (n.isZero()) return "0";
	            if (n.isNegative()) return new Array(1 - n).join("10");
	            return "1" + new Array(+n).join("01");
	        }
	        var minusSign = "";
	        if (n.isNegative() && base.isPositive()) {
	            minusSign = "-";
	            n = n.abs();
	        }
	        if (base.equals(1)) {
	            if (n.isZero()) return "0";
	            return minusSign + new Array(+n + 1).join(1);
	        }
	        var out = [];
	        var left = n,
	            divmod;
	        while (left.isNegative() || left.compareAbs(base) >= 0) {
	            divmod = left.divmod(base);
	            left = divmod.quotient;
	            var digit = divmod.remainder;
	            if (digit.isNegative()) {
	                digit = base.minus(digit).abs();
	                left = left.next();
	            }
	            out.push(stringify(digit));
	        }
	        out.push(stringify(left));
	        return minusSign + out.reverse().join("");
	    }

	    BigInteger.prototype.toString = function (radix) {
	        if (radix === undefined) radix = 10;
	        if (radix !== 10) return toBase(this, radix);
	        var v = this.value,
	            l = v.length,
	            str = String(v[--l]),
	            zeros = "0000000",
	            digit;
	        while (--l >= 0) {
	            digit = String(v[l]);
	            str += zeros.slice(digit.length) + digit;
	        }
	        var sign = this.sign ? "-" : "";
	        return sign + str;
	    };
	    SmallInteger.prototype.toString = function (radix) {
	        if (radix === undefined) radix = 10;
	        if (radix != 10) return toBase(this, radix);
	        return String(this.value);
	    };

	    BigInteger.prototype.valueOf = function () {
	        return +this.toString();
	    };
	    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

	    SmallInteger.prototype.valueOf = function () {
	        return this.value;
	    };
	    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;

	    function parseStringValue(v) {
	        if (isPrecise(+v)) {
	            var x = +v;
	            if (x === truncate(x)) return new SmallInteger(x);
	            throw "Invalid integer: " + v;
	        }
	        var sign = v[0] === "-";
	        if (sign) v = v.slice(1);
	        var split = v.split(/e/i);
	        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
	        if (split.length === 2) {
	            var exp = split[1];
	            if (exp[0] === "+") exp = exp.slice(1);
	            exp = +exp;
	            if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
	            var text = split[0];
	            var decimalPlace = text.indexOf(".");
	            if (decimalPlace >= 0) {
	                exp -= text.length - decimalPlace - 1;
	                text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
	            }
	            if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
	            text += new Array(exp + 1).join("0");
	            v = text;
	        }
	        var isValid = /^([0-9][0-9]*)$/.test(v);
	        if (!isValid) throw new Error("Invalid integer: " + v);
	        var r = [],
	            max = v.length,
	            l = LOG_BASE,
	            min = max - l;
	        while (max > 0) {
	            r.push(+v.slice(min, max));
	            min -= l;
	            if (min < 0) min = 0;
	            max -= l;
	        }
	        trim(r);
	        return new BigInteger(r, sign);
	    }

	    function parseNumberValue(v) {
	        if (isPrecise(v)) {
	            if (v !== truncate(v)) throw new Error(v + " is not an integer.");
	            return new SmallInteger(v);
	        }
	        return parseStringValue(v.toString());
	    }

	    function parseValue(v) {
	        if (typeof v === "number") {
	            return parseNumberValue(v);
	        }
	        if (typeof v === "string") {
	            return parseStringValue(v);
	        }
	        return v;
	    }
	    // Pre-define numbers in range [-999,999]
	    for (var i = 0; i < 1000; i++) {
	        Integer[i] = new SmallInteger(i);
	        if (i > 0) Integer[-i] = new SmallInteger(-i);
	    }
	    // Backwards compatibility
	    Integer.one = Integer[1];
	    Integer.zero = Integer[0];
	    Integer.minusOne = Integer[-1];
	    Integer.max = max;
	    Integer.min = min;
	    Integer.gcd = gcd;
	    Integer.lcm = lcm;
	    Integer.isInstance = function (x) {
	        return x instanceof BigInteger || x instanceof SmallInteger;
	    };
	    Integer.randBetween = randBetween;
	    return Integer;
	}();

	// Node.js check
	if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
	    module.exports = bigInt;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)(module)))

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(143);
	exports.encode = exports.stringify = __webpack_require__(144);

/***/ },
/* 143 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function (qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr,
	        vstr,
	        k,
	        v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var stringifyPrimitive = function stringifyPrimitive(v) {
	  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function (obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    return Object.keys(obj).map(function (k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function (v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);
	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(146);
	module.exports = self.fetch.bind(self);

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	(function (self) {
	  'use strict';

	  if (self.fetch) {
	    return;
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && function () {
	      try {
	        new Blob();
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  };

	  if (support.arrayBuffer) {
	    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

	    var isDataView = function isDataView(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj);
	    };

	    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
	    };
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name);
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name');
	    }
	    return name.toLowerCase();
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value);
	    }
	    return value;
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function next() {
	        var value = items.shift();
	        return { done: value === undefined, value: value };
	      }
	    };

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function () {
	        return iterator;
	      };
	    }

	    return iterator;
	  }

	  function Headers(headers) {
	    this.map = {};

	    if (headers instanceof Headers) {
	      headers.forEach(function (value, name) {
	        this.append(name, value);
	      }, this);
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function (name) {
	        this.append(name, headers[name]);
	      }, this);
	    }
	  }

	  Headers.prototype.append = function (name, value) {
	    name = normalizeName(name);
	    value = normalizeValue(value);
	    var oldValue = this.map[name];
	    this.map[name] = oldValue ? oldValue + ',' + value : value;
	  };

	  Headers.prototype['delete'] = function (name) {
	    delete this.map[normalizeName(name)];
	  };

	  Headers.prototype.get = function (name) {
	    name = normalizeName(name);
	    return this.has(name) ? this.map[name] : null;
	  };

	  Headers.prototype.has = function (name) {
	    return this.map.hasOwnProperty(normalizeName(name));
	  };

	  Headers.prototype.set = function (name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value);
	  };

	  Headers.prototype.forEach = function (callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this);
	      }
	    }
	  };

	  Headers.prototype.keys = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push(name);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.values = function () {
	    var items = [];
	    this.forEach(function (value) {
	      items.push(value);
	    });
	    return iteratorFor(items);
	  };

	  Headers.prototype.entries = function () {
	    var items = [];
	    this.forEach(function (value, name) {
	      items.push([name, value]);
	    });
	    return iteratorFor(items);
	  };

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'));
	    }
	    body.bodyUsed = true;
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function (resolve, reject) {
	      reader.onload = function () {
	        resolve(reader.result);
	      };
	      reader.onerror = function () {
	        reject(reader.error);
	      };
	    });
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsArrayBuffer(blob);
	    return promise;
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader();
	    var promise = fileReaderReady(reader);
	    reader.readAsText(blob);
	    return promise;
	  }

	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf);
	    var chars = new Array(view.length);

	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i]);
	    }
	    return chars.join('');
	  }

	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0);
	    } else {
	      var view = new Uint8Array(buf.byteLength);
	      view.set(new Uint8Array(buf));
	      return view.buffer;
	    }
	  }

	  function Body() {
	    this.bodyUsed = false;

	    this._initBody = function (body) {
	      this._bodyInit = body;
	      if (!body) {
	        this._bodyText = '';
	      } else if (typeof body === 'string') {
	        this._bodyText = body;
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body;
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body;
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString();
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer);
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer]);
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body);
	      } else {
	        throw new Error('unsupported BodyInit type');
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8');
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type);
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	        }
	      }
	    };

	    if (support.blob) {
	      this.blob = function () {
	        var rejected = consumed(this);
	        if (rejected) {
	          return rejected;
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob);
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob');
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]));
	        }
	      };

	      this.arrayBuffer = function () {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer);
	        }
	      };
	    }

	    this.text = function () {
	      var rejected = consumed(this);
	      if (rejected) {
	        return rejected;
	      }

	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob);
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text');
	      } else {
	        return Promise.resolve(this._bodyText);
	      }
	    };

	    if (support.formData) {
	      this.formData = function () {
	        return this.text().then(decode);
	      };
	    }

	    this.json = function () {
	      return this.text().then(JSON.parse);
	    };

	    return this;
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase();
	    return methods.indexOf(upcased) > -1 ? upcased : method;
	  }

	  function Request(input, options) {
	    options = options || {};
	    var body = options.body;

	    if (typeof input === 'string') {
	      this.url = input;
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read');
	      }
	      this.url = input.url;
	      this.credentials = input.credentials;
	      if (!options.headers) {
	        this.headers = new Headers(input.headers);
	      }
	      this.method = input.method;
	      this.mode = input.mode;
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit;
	        input.bodyUsed = true;
	      }
	    }

	    this.credentials = options.credentials || this.credentials || 'omit';
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers);
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET');
	    this.mode = options.mode || this.mode || null;
	    this.referrer = null;

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests');
	    }
	    this._initBody(body);
	  }

	  Request.prototype.clone = function () {
	    return new Request(this, { body: this._bodyInit });
	  };

	  function decode(body) {
	    var form = new FormData();
	    body.trim().split('&').forEach(function (bytes) {
	      if (bytes) {
	        var split = bytes.split('=');
	        var name = split.shift().replace(/\+/g, ' ');
	        var value = split.join('=').replace(/\+/g, ' ');
	        form.append(decodeURIComponent(name), decodeURIComponent(value));
	      }
	    });
	    return form;
	  }

	  function parseHeaders(rawHeaders) {
	    var headers = new Headers();
	    rawHeaders.split('\r\n').forEach(function (line) {
	      var parts = line.split(':');
	      var key = parts.shift().trim();
	      if (key) {
	        var value = parts.join(':').trim();
	        headers.append(key, value);
	      }
	    });
	    return headers;
	  }

	  Body.call(Request.prototype);

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {};
	    }

	    this.type = 'default';
	    this.status = 'status' in options ? options.status : 200;
	    this.ok = this.status >= 200 && this.status < 300;
	    this.statusText = 'statusText' in options ? options.statusText : 'OK';
	    this.headers = new Headers(options.headers);
	    this.url = options.url || '';
	    this._initBody(bodyInit);
	  }

	  Body.call(Response.prototype);

	  Response.prototype.clone = function () {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    });
	  };

	  Response.error = function () {
	    var response = new Response(null, { status: 0, statusText: '' });
	    response.type = 'error';
	    return response;
	  };

	  var redirectStatuses = [301, 302, 303, 307, 308];

	  Response.redirect = function (url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code');
	    }

	    return new Response(null, { status: status, headers: { location: url } });
	  };

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function (input, init) {
	    return new Promise(function (resolve, reject) {
	      var request = new Request(input, init);
	      var xhr = new XMLHttpRequest();

	      xhr.onload = function () {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        };
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options));
	      };

	      xhr.onerror = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.ontimeout = function () {
	        reject(new TypeError('Network request failed'));
	      };

	      xhr.open(request.method, request.url, true);

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true;
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob';
	      }

	      request.headers.forEach(function (value, name) {
	        xhr.setRequestHeader(name, value);
	      });

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
	    });
	  };
	  self.fetch.polyfill = true;
	})(typeof self !== 'undefined' ? self : undefined);

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var querystring = __webpack_require__(142);
	var parseString = __webpack_require__(148).parseString;
	var baseURL = 'http://api.xiami.com/web?';
	var NEW_API_URL = 'http://acs.m.xiami.com/h5/';
	var Crypto = __webpack_require__(3);
	__webpack_require__(145);
	/*
	 * this api is using by http://h.xiami.com, xiami's mobile site.
	 * php version : https://github.com/metowolf/XiamiMusicAPI/blob/master/XiamiMusicAPI.php
	 */
	var xiamiFetch = function xiamiFetch(query) {
	  return new Promise(function (resolve, reject) {
	    fetch('' + baseURL + querystring.stringify(query), {
	      mode: 'no-cors',
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

	var searchSong = function searchSong(key, limit, page, raw) {
	  if (!raw) {
	    return new Promise(function (resolve, reject) {
	      xiamiFetch({
	        v: '2.0',
	        key: key,
	        limit: limit,
	        page: page,
	        r: 'search/songs',
	        app_key: 1
	      }).then(function (res) {
	        var songList = res.data.songs.map(function (item) {
	          return {
	            album: {
	              id: item.album_id,
	              name: item.album_name,
	              cover: item.album_logo
	            },
	            artists: [{
	              id: item.artist_id,
	              name: item.artist_name
	            }],
	            name: item.song_name,
	            id: item.song_id
	          };
	        });
	        var obj = {
	          success: true,
	          total: res.data.total,
	          songList: songList
	        };
	        resolve(obj);
	      }).catch(function (err) {
	        return reject({
	          success: false,
	          message: err
	        });
	      });
	    });
	  }
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

	var getSong = function getSong(id, raw) {
	  return new Promise(function (resolve, reject) {
	    fetch('http://www.xiami.com/song/playlist/id/' + id).then(function (res) {
	      return res.text();
	    }).then(function (xml) {
	      parseString(xml, function (err, res) {
	        if (err) {
	          reject({
	            success: false,
	            message: 'err paring xml , please check xiami SDK'
	          });
	        } else {
	          var ress = res.playlist.trackList[0].track[0];
	          for (var i in ress) {
	            ress[i] = ress[i][0];
	          }
	          ress.url = parseLocation(ress.location);
	          if (raw) {
	            resolve(ress);
	          } else {
	            var obj = {
	              success: true,
	              artist: {
	                id: ress.artistId,
	                name: ress.artistName
	              },
	              album: {
	                id: ress.albumId,
	                name: ress.album_name,
	                cover: ress.album_pic
	              },
	              url: ress.url,
	              lyric: ress.lyric_url,
	              name: ress.name
	            };
	            resolve(obj);
	          }
	        }
	      });
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: 'error get xiami song, please check the id !'
	      });
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

	var searchPlaylist = function searchPlaylist(key, limit, page, raw) {
	  if (!raw) {
	    return new Promise(function (resolve, reject) {
	      newRequest('mtop.alimusic.search.searchservice.searchcollects', {
	        key: key,
	        pagingVO: {
	          page: page,
	          pageSize: limit
	        }
	      }).then(function (res) {
	        var playlists = res.data.data.collects.map(function (item) {
	          return {
	            id: item.listId,
	            cover: item.collectLogo,
	            name: item.collectName,
	            author: {
	              name: item.userName,
	              id: item.userId,
	              avatar: item.authorAvatar
	            }
	          };
	        });
	        var obj = {
	          success: true,
	          total: res.data.data.pagingVO.count,
	          playlists: playlists
	        };
	        resolve(obj);
	      }).catch(function (err) {
	        return reject({
	          success: false,
	          message: err
	        });
	      });
	    });
	  }
	  return newRequest('mtop.alimusic.search.searchservice.searchcollects', {
	    key: key,
	    pagingVO: {
	      page: page,
	      pageSize: limit
	    }
	  });
	};

	var searchAlbum = function searchAlbum(key, limit, page, raw) {
	  if (!raw) {
	    return new Promise(function (resolve, reject) {
	      newRequest('mtop.alimusic.search.searchservice.searchalbums', {
	        key: key,
	        pagingVO: {
	          page: page,
	          pageSize: limit
	        }
	      }).then(function (res) {
	        var albumList = res.data.data.albums.map(function (item) {
	          return {
	            id: item.albumId,
	            cover: item.albumLogo,
	            name: item.albumName,
	            artist: {
	              name: item.artistName,
	              id: item.artistId
	            }
	          };
	        });
	        var obj = {
	          success: true,
	          total: res.data.data.pagingVO.count,
	          albumList: albumList
	        };
	        resolve(obj);
	      }).catch(function (err) {
	        return reject({
	          success: false,
	          message: err
	        });
	      });
	    });
	  }
	  return newRequest('mtop.alimusic.search.searchservice.searchalbums', {
	    key: key,
	    pagingVO: {
	      page: page,
	      pageSize: limit
	    }
	  });
	};

	var getAlbum = function getAlbum(id, raw) {
	  if (raw) {
	    return newRequest('mtop.alimusic.music.albumservice.getalbumdetail', {
	      albumId: id
	    });
	  }
	  return new Promise(function (resolve, reject) {
	    newRequest('mtop.alimusic.music.albumservice.getalbumdetail', {
	      albumId: id
	    }).then(function (res) {
	      var ab = res.data.data.albumDetail;
	      var songList = ab.songs.map(function (item) {
	        return {
	          id: item.songId,
	          name: item.songName,
	          artist: {
	            id: item.artistId,
	            name: item.artistName
	          }
	        };
	      });
	      var obj = {
	        success: true,
	        name: ab.albumName,
	        id: ab.albumId,
	        cover: ab.albumLogoM,
	        artist: {
	          name: ab.artistName,
	          id: ab.artistId
	        },
	        songList: songList
	      };
	      resolve(obj);
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: 'err get xiami album, please query with raw=true to see the detail'
	      });
	    });
	  });
	};

	var getPlaylist = function getPlaylist(id, raw) {
	  if (raw) {
	    return newRequest('mtop.alimusic.music.list.collectservice.getcollectdetail', {
	      isFullTags: false,
	      listId: id,
	      pagingVO: {
	        page: 1,
	        pageSize: 1000
	      }
	    });
	  }
	  return new Promise(function (resolve, reject) {
	    newRequest('mtop.alimusic.music.list.collectservice.getcollectdetail', {
	      isFullTags: false,
	      listId: id,
	      pagingVO: {
	        page: 1,
	        pageSize: 1000
	      }
	    }).then(function (res) {
	      var pl = res.data.data.collectDetail;
	      var songList = pl.songs.map(function (item) {
	        return {
	          id: item.songId,
	          name: item.songName,
	          artist: {
	            name: item.artistName,
	            id: item.artistId
	          },
	          album: {
	            id: item.albumId,
	            cover: item.albumLogo,
	            name: item.albumName
	          }
	        };
	      });
	      var obj = {
	        success: true,
	        name: pl.collectName,
	        id: pl.listId,
	        cover: pl.collectLogoMiddle,
	        author: {
	          id: pl.userId,
	          name: pl.userName,
	          avatar: pl.authorAvatar
	        },
	        songList: songList
	      };
	      resolve(obj);
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: 'err get xiami playlist, please query with raw=true to see the detail'
	      });
	    });
	  });
	};

	var getDailySuggest = function getDailySuggest(limit) {
	  return newRequest('mtop.alimusic.recommend.songservice.getdailysongs', {
	    context: '',
	    like: '',
	    limit: limit,
	    listen: '',
	    unlike: ''
	  });
	};

	module.exports = {
	  searchSong: searchSong,
	  searchPlaylist: searchPlaylist,
	  searchAlbum: searchAlbum,
	  getSong: getSong,
	  getAlbum: getAlbum,
	  getPlaylist: getPlaylist
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// Generated by CoffeeScript 1.10.0
	(function () {
	  "use strict";

	  var bom,
	      builder,
	      escapeCDATA,
	      events,
	      isEmpty,
	      processName,
	      processors,
	      requiresCDATA,
	      sax,
	      setImmediate,
	      wrapCDATA,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty,
	      bind = function bind(fn, me) {
	    return function () {
	      return fn.apply(me, arguments);
	    };
	  };

	  sax = __webpack_require__(149);

	  events = __webpack_require__(26);

	  builder = __webpack_require__(150);

	  bom = __webpack_require__(301);

	  processors = __webpack_require__(302);

	  setImmediate = __webpack_require__(36).setImmediate;

	  isEmpty = function isEmpty(thing) {
	    return (typeof thing === 'undefined' ? 'undefined' : _typeof(thing)) === "object" && thing != null && Object.keys(thing).length === 0;
	  };

	  processName = function processName(processors, processedName) {
	    var i, len, process;
	    for (i = 0, len = processors.length; i < len; i++) {
	      process = processors[i];
	      processedName = process(processedName);
	    }
	    return processedName;
	  };

	  requiresCDATA = function requiresCDATA(entry) {
	    return entry.indexOf('&') >= 0 || entry.indexOf('>') >= 0 || entry.indexOf('<') >= 0;
	  };

	  wrapCDATA = function wrapCDATA(entry) {
	    return "<![CDATA[" + escapeCDATA(entry) + "]]>";
	  };

	  escapeCDATA = function escapeCDATA(entry) {
	    return entry.replace(']]>', ']]]]><![CDATA[>');
	  };

	  exports.processors = processors;

	  exports.defaults = {
	    "0.1": {
	      explicitCharkey: false,
	      trim: true,
	      normalize: true,
	      normalizeTags: false,
	      attrkey: "@",
	      charkey: "#",
	      explicitArray: false,
	      ignoreAttrs: false,
	      mergeAttrs: false,
	      explicitRoot: false,
	      validator: null,
	      xmlns: false,
	      explicitChildren: false,
	      childkey: '@@',
	      charsAsChildren: false,
	      includeWhiteChars: false,
	      async: false,
	      strict: true,
	      attrNameProcessors: null,
	      attrValueProcessors: null,
	      tagNameProcessors: null,
	      valueProcessors: null,
	      emptyTag: ''
	    },
	    "0.2": {
	      explicitCharkey: false,
	      trim: false,
	      normalize: false,
	      normalizeTags: false,
	      attrkey: "$",
	      charkey: "_",
	      explicitArray: true,
	      ignoreAttrs: false,
	      mergeAttrs: false,
	      explicitRoot: true,
	      validator: null,
	      xmlns: false,
	      explicitChildren: false,
	      preserveChildrenOrder: false,
	      childkey: '$$',
	      charsAsChildren: false,
	      includeWhiteChars: false,
	      async: false,
	      strict: true,
	      attrNameProcessors: null,
	      attrValueProcessors: null,
	      tagNameProcessors: null,
	      valueProcessors: null,
	      rootName: 'root',
	      xmldec: {
	        'version': '1.0',
	        'encoding': 'UTF-8',
	        'standalone': true
	      },
	      doctype: null,
	      renderOpts: {
	        'pretty': true,
	        'indent': '  ',
	        'newline': '\n'
	      },
	      headless: false,
	      chunkSize: 10000,
	      emptyTag: '',
	      cdata: false
	    }
	  };

	  exports.ValidationError = function (superClass) {
	    extend(ValidationError, superClass);

	    function ValidationError(message) {
	      this.message = message;
	    }

	    return ValidationError;
	  }(Error);

	  exports.Builder = function () {
	    function Builder(opts) {
	      var key, ref, value;
	      this.options = {};
	      ref = exports.defaults["0.2"];
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this.options[key] = value;
	      }
	      for (key in opts) {
	        if (!hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	    }

	    Builder.prototype.buildObject = function (rootObj) {
	      var attrkey, charkey, render, rootElement, rootName;
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      if (Object.keys(rootObj).length === 1 && this.options.rootName === exports.defaults['0.2'].rootName) {
	        rootName = Object.keys(rootObj)[0];
	        rootObj = rootObj[rootName];
	      } else {
	        rootName = this.options.rootName;
	      }
	      render = function (_this) {
	        return function (element, obj) {
	          var attr, child, entry, index, key, value;
	          if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	            if (_this.options.cdata && requiresCDATA(obj)) {
	              element.raw(wrapCDATA(obj));
	            } else {
	              element.txt(obj);
	            }
	          } else {
	            for (key in obj) {
	              if (!hasProp.call(obj, key)) continue;
	              child = obj[key];
	              if (key === attrkey) {
	                if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === "object") {
	                  for (attr in child) {
	                    value = child[attr];
	                    element = element.att(attr, value);
	                  }
	                }
	              } else if (key === charkey) {
	                if (_this.options.cdata && requiresCDATA(child)) {
	                  element = element.raw(wrapCDATA(child));
	                } else {
	                  element = element.txt(child);
	                }
	              } else if (Array.isArray(child)) {
	                for (index in child) {
	                  if (!hasProp.call(child, index)) continue;
	                  entry = child[index];
	                  if (typeof entry === 'string') {
	                    if (_this.options.cdata && requiresCDATA(entry)) {
	                      element = element.ele(key).raw(wrapCDATA(entry)).up();
	                    } else {
	                      element = element.ele(key, entry).up();
	                    }
	                  } else {
	                    element = render(element.ele(key), entry).up();
	                  }
	                }
	              } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === "object") {
	                element = render(element.ele(key), child).up();
	              } else {
	                if (typeof child === 'string' && _this.options.cdata && requiresCDATA(child)) {
	                  element = element.ele(key).raw(wrapCDATA(child)).up();
	                } else {
	                  if (child == null) {
	                    child = '';
	                  }
	                  element = element.ele(key, child.toString()).up();
	                }
	              }
	            }
	          }
	          return element;
	        };
	      }(this);
	      rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
	        headless: this.options.headless,
	        allowSurrogateChars: this.options.allowSurrogateChars
	      });
	      return render(rootElement, rootObj).end(this.options.renderOpts);
	    };

	    return Builder;
	  }();

	  exports.Parser = function (superClass) {
	    extend(Parser, superClass);

	    function Parser(opts) {
	      this.parseString = bind(this.parseString, this);
	      this.reset = bind(this.reset, this);
	      this.assignOrPush = bind(this.assignOrPush, this);
	      this.processAsync = bind(this.processAsync, this);
	      var key, ref, value;
	      if (!(this instanceof exports.Parser)) {
	        return new exports.Parser(opts);
	      }
	      this.options = {};
	      ref = exports.defaults["0.2"];
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this.options[key] = value;
	      }
	      for (key in opts) {
	        if (!hasProp.call(opts, key)) continue;
	        value = opts[key];
	        this.options[key] = value;
	      }
	      if (this.options.xmlns) {
	        this.options.xmlnskey = this.options.attrkey + "ns";
	      }
	      if (this.options.normalizeTags) {
	        if (!this.options.tagNameProcessors) {
	          this.options.tagNameProcessors = [];
	        }
	        this.options.tagNameProcessors.unshift(processors.normalize);
	      }
	      this.reset();
	    }

	    Parser.prototype.processAsync = function () {
	      var chunk, err, error1;
	      try {
	        if (this.remaining.length <= this.options.chunkSize) {
	          chunk = this.remaining;
	          this.remaining = '';
	          this.saxParser = this.saxParser.write(chunk);
	          return this.saxParser.close();
	        } else {
	          chunk = this.remaining.substr(0, this.options.chunkSize);
	          this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
	          this.saxParser = this.saxParser.write(chunk);
	          return setImmediate(this.processAsync);
	        }
	      } catch (error1) {
	        err = error1;
	        if (!this.saxParser.errThrown) {
	          this.saxParser.errThrown = true;
	          return this.emit(err);
	        }
	      }
	    };

	    Parser.prototype.assignOrPush = function (obj, key, newValue) {
	      if (!(key in obj)) {
	        if (!this.options.explicitArray) {
	          return obj[key] = newValue;
	        } else {
	          return obj[key] = [newValue];
	        }
	      } else {
	        if (!(obj[key] instanceof Array)) {
	          obj[key] = [obj[key]];
	        }
	        return obj[key].push(newValue);
	      }
	    };

	    Parser.prototype.reset = function () {
	      var attrkey, charkey, ontext, stack;
	      this.removeAllListeners();
	      this.saxParser = sax.parser(this.options.strict, {
	        trim: false,
	        normalize: false,
	        xmlns: this.options.xmlns
	      });
	      this.saxParser.errThrown = false;
	      this.saxParser.onerror = function (_this) {
	        return function (error) {
	          _this.saxParser.resume();
	          if (!_this.saxParser.errThrown) {
	            _this.saxParser.errThrown = true;
	            return _this.emit("error", error);
	          }
	        };
	      }(this);
	      this.saxParser.onend = function (_this) {
	        return function () {
	          if (!_this.saxParser.ended) {
	            _this.saxParser.ended = true;
	            return _this.emit("end", _this.resultObject);
	          }
	        };
	      }(this);
	      this.saxParser.ended = false;
	      this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
	      this.resultObject = null;
	      stack = [];
	      attrkey = this.options.attrkey;
	      charkey = this.options.charkey;
	      this.saxParser.onopentag = function (_this) {
	        return function (node) {
	          var key, newValue, obj, processedKey, ref;
	          obj = {};
	          obj[charkey] = "";
	          if (!_this.options.ignoreAttrs) {
	            ref = node.attributes;
	            for (key in ref) {
	              if (!hasProp.call(ref, key)) continue;
	              if (!(attrkey in obj) && !_this.options.mergeAttrs) {
	                obj[attrkey] = {};
	              }
	              newValue = _this.options.attrValueProcessors ? processName(_this.options.attrValueProcessors, node.attributes[key]) : node.attributes[key];
	              processedKey = _this.options.attrNameProcessors ? processName(_this.options.attrNameProcessors, key) : key;
	              if (_this.options.mergeAttrs) {
	                _this.assignOrPush(obj, processedKey, newValue);
	              } else {
	                obj[attrkey][processedKey] = newValue;
	              }
	            }
	          }
	          obj["#name"] = _this.options.tagNameProcessors ? processName(_this.options.tagNameProcessors, node.name) : node.name;
	          if (_this.options.xmlns) {
	            obj[_this.options.xmlnskey] = {
	              uri: node.uri,
	              local: node.local
	            };
	          }
	          return stack.push(obj);
	        };
	      }(this);
	      this.saxParser.onclosetag = function (_this) {
	        return function () {
	          var cdata, emptyStr, err, error1, key, node, nodeName, obj, objClone, old, s, xpath;
	          obj = stack.pop();
	          nodeName = obj["#name"];
	          if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) {
	            delete obj["#name"];
	          }
	          if (obj.cdata === true) {
	            cdata = obj.cdata;
	            delete obj.cdata;
	          }
	          s = stack[stack.length - 1];
	          if (obj[charkey].match(/^\s*$/) && !cdata) {
	            emptyStr = obj[charkey];
	            delete obj[charkey];
	          } else {
	            if (_this.options.trim) {
	              obj[charkey] = obj[charkey].trim();
	            }
	            if (_this.options.normalize) {
	              obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
	            }
	            obj[charkey] = _this.options.valueProcessors ? processName(_this.options.valueProcessors, obj[charkey]) : obj[charkey];
	            if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	              obj = obj[charkey];
	            }
	          }
	          if (isEmpty(obj)) {
	            obj = _this.options.emptyTag !== '' ? _this.options.emptyTag : emptyStr;
	          }
	          if (_this.options.validator != null) {
	            xpath = "/" + function () {
	              var i, len, results;
	              results = [];
	              for (i = 0, len = stack.length; i < len; i++) {
	                node = stack[i];
	                results.push(node["#name"]);
	              }
	              return results;
	            }().concat(nodeName).join("/");
	            try {
	              obj = _this.options.validator(xpath, s && s[nodeName], obj);
	            } catch (error1) {
	              err = error1;
	              _this.emit("error", err);
	            }
	          }
	          if (_this.options.explicitChildren && !_this.options.mergeAttrs && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	            if (!_this.options.preserveChildrenOrder) {
	              node = {};
	              if (_this.options.attrkey in obj) {
	                node[_this.options.attrkey] = obj[_this.options.attrkey];
	                delete obj[_this.options.attrkey];
	              }
	              if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
	                node[_this.options.charkey] = obj[_this.options.charkey];
	                delete obj[_this.options.charkey];
	              }
	              if (Object.getOwnPropertyNames(obj).length > 0) {
	                node[_this.options.childkey] = obj;
	              }
	              obj = node;
	            } else if (s) {
	              s[_this.options.childkey] = s[_this.options.childkey] || [];
	              objClone = {};
	              for (key in obj) {
	                if (!hasProp.call(obj, key)) continue;
	                objClone[key] = obj[key];
	              }
	              s[_this.options.childkey].push(objClone);
	              delete obj["#name"];
	              if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) {
	                obj = obj[charkey];
	              }
	            }
	          }
	          if (stack.length > 0) {
	            return _this.assignOrPush(s, nodeName, obj);
	          } else {
	            if (_this.options.explicitRoot) {
	              old = obj;
	              obj = {};
	              obj[nodeName] = old;
	            }
	            _this.resultObject = obj;
	            _this.saxParser.ended = true;
	            return _this.emit("end", _this.resultObject);
	          }
	        };
	      }(this);
	      ontext = function (_this) {
	        return function (text) {
	          var charChild, s;
	          s = stack[stack.length - 1];
	          if (s) {
	            s[charkey] += text;
	            if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, '').trim() !== '')) {
	              s[_this.options.childkey] = s[_this.options.childkey] || [];
	              charChild = {
	                '#name': '__text__'
	              };
	              charChild[charkey] = text;
	              if (_this.options.normalize) {
	                charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
	              }
	              s[_this.options.childkey].push(charChild);
	            }
	            return s;
	          }
	        };
	      }(this);
	      this.saxParser.ontext = ontext;
	      return this.saxParser.oncdata = function (_this) {
	        return function (text) {
	          var s;
	          s = ontext(text);
	          if (s) {
	            return s.cdata = true;
	          }
	        };
	      }(this);
	    };

	    Parser.prototype.parseString = function (str, cb) {
	      var err, error1;
	      if (cb != null && typeof cb === "function") {
	        this.on("end", function (result) {
	          this.reset();
	          return cb(null, result);
	        });
	        this.on("error", function (err) {
	          this.reset();
	          return cb(err);
	        });
	      }
	      try {
	        str = str.toString();
	        if (str.trim() === '') {
	          this.emit("end", null);
	          return true;
	        }
	        str = bom.stripBOM(str);
	        if (this.options.async) {
	          this.remaining = str;
	          setImmediate(this.processAsync);
	          return this.saxParser;
	        }
	        return this.saxParser.write(str).close();
	      } catch (error1) {
	        err = error1;
	        if (!(this.saxParser.errThrown || this.saxParser.ended)) {
	          this.emit('error', err);
	          return this.saxParser.errThrown = true;
	        } else if (this.saxParser.ended) {
	          throw err;
	        }
	      }
	    };

	    return Parser;
	  }(events.EventEmitter);

	  exports.parseString = function (str, a, b) {
	    var cb, options, parser;
	    if (b != null) {
	      if (typeof b === 'function') {
	        cb = b;
	      }
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	        options = a;
	      }
	    } else {
	      if (typeof a === 'function') {
	        cb = a;
	      }
	      options = {};
	    }
	    parser = new exports.Parser(options);
	    return parser.parseString(str, cb);
	  };
	}).call(undefined);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	;(function (sax) {
	  // wrapper for non-node envs
	  sax.parser = function (strict, opt) {
	    return new SAXParser(strict, opt);
	  };
	  sax.SAXParser = SAXParser;
	  sax.SAXStream = SAXStream;
	  sax.createStream = createStream;

	  // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
	  // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
	  // since that's the earliest that a buffer overrun could occur.  This way, checks are
	  // as rare as required, but as often as necessary to ensure never crossing this bound.
	  // Furthermore, buffers are only tested at most once per write(), so passing a very
	  // large string into write() might have undesirable effects, but this is manageable by
	  // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
	  // edge case, result in creating at most one complete copy of the string passed in.
	  // Set to Infinity to have unlimited buffers.
	  sax.MAX_BUFFER_LENGTH = 64 * 1024;

	  var buffers = ['comment', 'sgmlDecl', 'textNode', 'tagName', 'doctype', 'procInstName', 'procInstBody', 'entity', 'attribName', 'attribValue', 'cdata', 'script'];

	  sax.EVENTS = ['text', 'processinginstruction', 'sgmldeclaration', 'doctype', 'comment', 'opentagstart', 'attribute', 'opentag', 'closetag', 'opencdata', 'cdata', 'closecdata', 'error', 'end', 'ready', 'script', 'opennamespace', 'closenamespace'];

	  function SAXParser(strict, opt) {
	    if (!(this instanceof SAXParser)) {
	      return new SAXParser(strict, opt);
	    }

	    var parser = this;
	    clearBuffers(parser);
	    parser.q = parser.c = '';
	    parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
	    parser.opt = opt || {};
	    parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
	    parser.looseCase = parser.opt.lowercase ? 'toLowerCase' : 'toUpperCase';
	    parser.tags = [];
	    parser.closed = parser.closedRoot = parser.sawRoot = false;
	    parser.tag = parser.error = null;
	    parser.strict = !!strict;
	    parser.noscript = !!(strict || parser.opt.noscript);
	    parser.state = S.BEGIN;
	    parser.strictEntities = parser.opt.strictEntities;
	    parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
	    parser.attribList = [];

	    // namespaces form a prototype chain.
	    // it always points at the current tag,
	    // which protos to its parent tag.
	    if (parser.opt.xmlns) {
	      parser.ns = Object.create(rootNS);
	    }

	    // mostly just for error reporting
	    parser.trackPosition = parser.opt.position !== false;
	    if (parser.trackPosition) {
	      parser.position = parser.line = parser.column = 0;
	    }
	    emit(parser, 'onready');
	  }

	  if (!Object.create) {
	    Object.create = function (o) {
	      function F() {}
	      F.prototype = o;
	      var newf = new F();
	      return newf;
	    };
	  }

	  if (!Object.keys) {
	    Object.keys = function (o) {
	      var a = [];
	      for (var i in o) {
	        if (o.hasOwnProperty(i)) a.push(i);
	      }return a;
	    };
	  }

	  function checkBufferLength(parser) {
	    var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
	    var maxActual = 0;
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      var len = parser[buffers[i]].length;
	      if (len > maxAllowed) {
	        // Text/cdata nodes can get big, and since they're buffered,
	        // we can get here under normal conditions.
	        // Avoid issues by emitting the text node now,
	        // so at least it won't get any bigger.
	        switch (buffers[i]) {
	          case 'textNode':
	            closeText(parser);
	            break;

	          case 'cdata':
	            emitNode(parser, 'oncdata', parser.cdata);
	            parser.cdata = '';
	            break;

	          case 'script':
	            emitNode(parser, 'onscript', parser.script);
	            parser.script = '';
	            break;

	          default:
	            error(parser, 'Max buffer length exceeded: ' + buffers[i]);
	        }
	      }
	      maxActual = Math.max(maxActual, len);
	    }
	    // schedule the next check for the earliest possible buffer overrun.
	    var m = sax.MAX_BUFFER_LENGTH - maxActual;
	    parser.bufferCheckPosition = m + parser.position;
	  }

	  function clearBuffers(parser) {
	    for (var i = 0, l = buffers.length; i < l; i++) {
	      parser[buffers[i]] = '';
	    }
	  }

	  function flushBuffers(parser) {
	    closeText(parser);
	    if (parser.cdata !== '') {
	      emitNode(parser, 'oncdata', parser.cdata);
	      parser.cdata = '';
	    }
	    if (parser.script !== '') {
	      emitNode(parser, 'onscript', parser.script);
	      parser.script = '';
	    }
	  }

	  SAXParser.prototype = {
	    end: function end() {
	      _end(this);
	    },
	    write: write,
	    resume: function resume() {
	      this.error = null;return this;
	    },
	    close: function close() {
	      return this.write(null);
	    },
	    flush: function flush() {
	      flushBuffers(this);
	    }
	  };

	  var Stream;
	  try {
	    Stream = __webpack_require__(25).Stream;
	  } catch (ex) {
	    Stream = function Stream() {};
	  }

	  var streamWraps = sax.EVENTS.filter(function (ev) {
	    return ev !== 'error' && ev !== 'end';
	  });

	  function createStream(strict, opt) {
	    return new SAXStream(strict, opt);
	  }

	  function SAXStream(strict, opt) {
	    if (!(this instanceof SAXStream)) {
	      return new SAXStream(strict, opt);
	    }

	    Stream.apply(this);

	    this._parser = new SAXParser(strict, opt);
	    this.writable = true;
	    this.readable = true;

	    var me = this;

	    this._parser.onend = function () {
	      me.emit('end');
	    };

	    this._parser.onerror = function (er) {
	      me.emit('error', er);

	      // if didn't throw, then means error was handled.
	      // go ahead and clear error, so we can write again.
	      me._parser.error = null;
	    };

	    this._decoder = null;

	    streamWraps.forEach(function (ev) {
	      Object.defineProperty(me, 'on' + ev, {
	        get: function get() {
	          return me._parser['on' + ev];
	        },
	        set: function set(h) {
	          if (!h) {
	            me.removeAllListeners(ev);
	            me._parser['on' + ev] = h;
	            return h;
	          }
	          me.on(ev, h);
	        },
	        enumerable: true,
	        configurable: false
	      });
	    });
	  }

	  SAXStream.prototype = Object.create(Stream.prototype, {
	    constructor: {
	      value: SAXStream
	    }
	  });

	  SAXStream.prototype.write = function (data) {
	    if (typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function' && Buffer.isBuffer(data)) {
	      if (!this._decoder) {
	        var SD = __webpack_require__(39).StringDecoder;
	        this._decoder = new SD('utf8');
	      }
	      data = this._decoder.write(data);
	    }

	    this._parser.write(data.toString());
	    this.emit('data', data);
	    return true;
	  };

	  SAXStream.prototype.end = function (chunk) {
	    if (chunk && chunk.length) {
	      this.write(chunk);
	    }
	    this._parser.end();
	    return true;
	  };

	  SAXStream.prototype.on = function (ev, handler) {
	    var me = this;
	    if (!me._parser['on' + ev] && streamWraps.indexOf(ev) !== -1) {
	      me._parser['on' + ev] = function () {
	        var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
	        args.splice(0, 0, ev);
	        me.emit.apply(me, args);
	      };
	    }

	    return Stream.prototype.on.call(me, ev, handler);
	  };

	  // character classes and tokens
	  var whitespace = '\r\n\t ';

	  // this really needs to be replaced with character classes.
	  // XML allows all manner of ridiculous numbers and digits.
	  var number = '0124356789';
	  var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	  // (Letter | "_" | ":")
	  var quote = '\'"';
	  var attribEnd = whitespace + '>';
	  var CDATA = '[CDATA[';
	  var DOCTYPE = 'DOCTYPE';
	  var XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
	  var XMLNS_NAMESPACE = 'http://www.w3.org/2000/xmlns/';
	  var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };

	  // turn all the string character sets into character class objects.
	  whitespace = charClass(whitespace);
	  number = charClass(number);
	  letter = charClass(letter);

	  // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
	  // This implementation works on strings, a single character at a time
	  // as such, it cannot ever support astral-plane characters (10000-EFFFF)
	  // without a significant breaking change to either this  parser, or the
	  // JavaScript language.  Implementation of an emoji-capable xml parser
	  // is left as an exercise for the reader.
	  var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;

	  var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;

	  var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
	  var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;

	  quote = charClass(quote);
	  attribEnd = charClass(attribEnd);

	  function charClass(str) {
	    return str.split('').reduce(function (s, c) {
	      s[c] = true;
	      return s;
	    }, {});
	  }

	  function isRegExp(c) {
	    return Object.prototype.toString.call(c) === '[object RegExp]';
	  }

	  function is(charclass, c) {
	    return isRegExp(charclass) ? !!c.match(charclass) : charclass[c];
	  }

	  function not(charclass, c) {
	    return !is(charclass, c);
	  }

	  var S = 0;
	  sax.STATE = {
	    BEGIN: S++, // leading byte order mark or whitespace
	    BEGIN_WHITESPACE: S++, // leading whitespace
	    TEXT: S++, // general stuff
	    TEXT_ENTITY: S++, // &amp and such.
	    OPEN_WAKA: S++, // <
	    SGML_DECL: S++, // <!BLARG
	    SGML_DECL_QUOTED: S++, // <!BLARG foo "bar
	    DOCTYPE: S++, // <!DOCTYPE
	    DOCTYPE_QUOTED: S++, // <!DOCTYPE "//blah
	    DOCTYPE_DTD: S++, // <!DOCTYPE "//blah" [ ...
	    DOCTYPE_DTD_QUOTED: S++, // <!DOCTYPE "//blah" [ "foo
	    COMMENT_STARTING: S++, // <!-
	    COMMENT: S++, // <!--
	    COMMENT_ENDING: S++, // <!-- blah -
	    COMMENT_ENDED: S++, // <!-- blah --
	    CDATA: S++, // <![CDATA[ something
	    CDATA_ENDING: S++, // ]
	    CDATA_ENDING_2: S++, // ]]
	    PROC_INST: S++, // <?hi
	    PROC_INST_BODY: S++, // <?hi there
	    PROC_INST_ENDING: S++, // <?hi "there" ?
	    OPEN_TAG: S++, // <strong
	    OPEN_TAG_SLASH: S++, // <strong /
	    ATTRIB: S++, // <a
	    ATTRIB_NAME: S++, // <a foo
	    ATTRIB_NAME_SAW_WHITE: S++, // <a foo _
	    ATTRIB_VALUE: S++, // <a foo=
	    ATTRIB_VALUE_QUOTED: S++, // <a foo="bar
	    ATTRIB_VALUE_CLOSED: S++, // <a foo="bar"
	    ATTRIB_VALUE_UNQUOTED: S++, // <a foo=bar
	    ATTRIB_VALUE_ENTITY_Q: S++, // <foo bar="&quot;"
	    ATTRIB_VALUE_ENTITY_U: S++, // <foo bar=&quot
	    CLOSE_TAG: S++, // </a
	    CLOSE_TAG_SAW_WHITE: S++, // </a   >
	    SCRIPT: S++, // <script> ...
	    SCRIPT_ENDING: S++ // <script> ... <
	  };

	  sax.XML_ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'"
	  };

	  sax.ENTITIES = {
	    'amp': '&',
	    'gt': '>',
	    'lt': '<',
	    'quot': '"',
	    'apos': "'",
	    'AElig': 198,
	    'Aacute': 193,
	    'Acirc': 194,
	    'Agrave': 192,
	    'Aring': 197,
	    'Atilde': 195,
	    'Auml': 196,
	    'Ccedil': 199,
	    'ETH': 208,
	    'Eacute': 201,
	    'Ecirc': 202,
	    'Egrave': 200,
	    'Euml': 203,
	    'Iacute': 205,
	    'Icirc': 206,
	    'Igrave': 204,
	    'Iuml': 207,
	    'Ntilde': 209,
	    'Oacute': 211,
	    'Ocirc': 212,
	    'Ograve': 210,
	    'Oslash': 216,
	    'Otilde': 213,
	    'Ouml': 214,
	    'THORN': 222,
	    'Uacute': 218,
	    'Ucirc': 219,
	    'Ugrave': 217,
	    'Uuml': 220,
	    'Yacute': 221,
	    'aacute': 225,
	    'acirc': 226,
	    'aelig': 230,
	    'agrave': 224,
	    'aring': 229,
	    'atilde': 227,
	    'auml': 228,
	    'ccedil': 231,
	    'eacute': 233,
	    'ecirc': 234,
	    'egrave': 232,
	    'eth': 240,
	    'euml': 235,
	    'iacute': 237,
	    'icirc': 238,
	    'igrave': 236,
	    'iuml': 239,
	    'ntilde': 241,
	    'oacute': 243,
	    'ocirc': 244,
	    'ograve': 242,
	    'oslash': 248,
	    'otilde': 245,
	    'ouml': 246,
	    'szlig': 223,
	    'thorn': 254,
	    'uacute': 250,
	    'ucirc': 251,
	    'ugrave': 249,
	    'uuml': 252,
	    'yacute': 253,
	    'yuml': 255,
	    'copy': 169,
	    'reg': 174,
	    'nbsp': 160,
	    'iexcl': 161,
	    'cent': 162,
	    'pound': 163,
	    'curren': 164,
	    'yen': 165,
	    'brvbar': 166,
	    'sect': 167,
	    'uml': 168,
	    'ordf': 170,
	    'laquo': 171,
	    'not': 172,
	    'shy': 173,
	    'macr': 175,
	    'deg': 176,
	    'plusmn': 177,
	    'sup1': 185,
	    'sup2': 178,
	    'sup3': 179,
	    'acute': 180,
	    'micro': 181,
	    'para': 182,
	    'middot': 183,
	    'cedil': 184,
	    'ordm': 186,
	    'raquo': 187,
	    'frac14': 188,
	    'frac12': 189,
	    'frac34': 190,
	    'iquest': 191,
	    'times': 215,
	    'divide': 247,
	    'OElig': 338,
	    'oelig': 339,
	    'Scaron': 352,
	    'scaron': 353,
	    'Yuml': 376,
	    'fnof': 402,
	    'circ': 710,
	    'tilde': 732,
	    'Alpha': 913,
	    'Beta': 914,
	    'Gamma': 915,
	    'Delta': 916,
	    'Epsilon': 917,
	    'Zeta': 918,
	    'Eta': 919,
	    'Theta': 920,
	    'Iota': 921,
	    'Kappa': 922,
	    'Lambda': 923,
	    'Mu': 924,
	    'Nu': 925,
	    'Xi': 926,
	    'Omicron': 927,
	    'Pi': 928,
	    'Rho': 929,
	    'Sigma': 931,
	    'Tau': 932,
	    'Upsilon': 933,
	    'Phi': 934,
	    'Chi': 935,
	    'Psi': 936,
	    'Omega': 937,
	    'alpha': 945,
	    'beta': 946,
	    'gamma': 947,
	    'delta': 948,
	    'epsilon': 949,
	    'zeta': 950,
	    'eta': 951,
	    'theta': 952,
	    'iota': 953,
	    'kappa': 954,
	    'lambda': 955,
	    'mu': 956,
	    'nu': 957,
	    'xi': 958,
	    'omicron': 959,
	    'pi': 960,
	    'rho': 961,
	    'sigmaf': 962,
	    'sigma': 963,
	    'tau': 964,
	    'upsilon': 965,
	    'phi': 966,
	    'chi': 967,
	    'psi': 968,
	    'omega': 969,
	    'thetasym': 977,
	    'upsih': 978,
	    'piv': 982,
	    'ensp': 8194,
	    'emsp': 8195,
	    'thinsp': 8201,
	    'zwnj': 8204,
	    'zwj': 8205,
	    'lrm': 8206,
	    'rlm': 8207,
	    'ndash': 8211,
	    'mdash': 8212,
	    'lsquo': 8216,
	    'rsquo': 8217,
	    'sbquo': 8218,
	    'ldquo': 8220,
	    'rdquo': 8221,
	    'bdquo': 8222,
	    'dagger': 8224,
	    'Dagger': 8225,
	    'bull': 8226,
	    'hellip': 8230,
	    'permil': 8240,
	    'prime': 8242,
	    'Prime': 8243,
	    'lsaquo': 8249,
	    'rsaquo': 8250,
	    'oline': 8254,
	    'frasl': 8260,
	    'euro': 8364,
	    'image': 8465,
	    'weierp': 8472,
	    'real': 8476,
	    'trade': 8482,
	    'alefsym': 8501,
	    'larr': 8592,
	    'uarr': 8593,
	    'rarr': 8594,
	    'darr': 8595,
	    'harr': 8596,
	    'crarr': 8629,
	    'lArr': 8656,
	    'uArr': 8657,
	    'rArr': 8658,
	    'dArr': 8659,
	    'hArr': 8660,
	    'forall': 8704,
	    'part': 8706,
	    'exist': 8707,
	    'empty': 8709,
	    'nabla': 8711,
	    'isin': 8712,
	    'notin': 8713,
	    'ni': 8715,
	    'prod': 8719,
	    'sum': 8721,
	    'minus': 8722,
	    'lowast': 8727,
	    'radic': 8730,
	    'prop': 8733,
	    'infin': 8734,
	    'ang': 8736,
	    'and': 8743,
	    'or': 8744,
	    'cap': 8745,
	    'cup': 8746,
	    'int': 8747,
	    'there4': 8756,
	    'sim': 8764,
	    'cong': 8773,
	    'asymp': 8776,
	    'ne': 8800,
	    'equiv': 8801,
	    'le': 8804,
	    'ge': 8805,
	    'sub': 8834,
	    'sup': 8835,
	    'nsub': 8836,
	    'sube': 8838,
	    'supe': 8839,
	    'oplus': 8853,
	    'otimes': 8855,
	    'perp': 8869,
	    'sdot': 8901,
	    'lceil': 8968,
	    'rceil': 8969,
	    'lfloor': 8970,
	    'rfloor': 8971,
	    'lang': 9001,
	    'rang': 9002,
	    'loz': 9674,
	    'spades': 9824,
	    'clubs': 9827,
	    'hearts': 9829,
	    'diams': 9830
	  };

	  Object.keys(sax.ENTITIES).forEach(function (key) {
	    var e = sax.ENTITIES[key];
	    var s = typeof e === 'number' ? String.fromCharCode(e) : e;
	    sax.ENTITIES[key] = s;
	  });

	  for (var s in sax.STATE) {
	    sax.STATE[sax.STATE[s]] = s;
	  }

	  // shorthand
	  S = sax.STATE;

	  function emit(parser, event, data) {
	    parser[event] && parser[event](data);
	  }

	  function emitNode(parser, nodeType, data) {
	    if (parser.textNode) closeText(parser);
	    emit(parser, nodeType, data);
	  }

	  function closeText(parser) {
	    parser.textNode = textopts(parser.opt, parser.textNode);
	    if (parser.textNode) emit(parser, 'ontext', parser.textNode);
	    parser.textNode = '';
	  }

	  function textopts(opt, text) {
	    if (opt.trim) text = text.trim();
	    if (opt.normalize) text = text.replace(/\s+/g, ' ');
	    return text;
	  }

	  function error(parser, er) {
	    closeText(parser);
	    if (parser.trackPosition) {
	      er += '\nLine: ' + parser.line + '\nColumn: ' + parser.column + '\nChar: ' + parser.c;
	    }
	    er = new Error(er);
	    parser.error = er;
	    emit(parser, 'onerror', er);
	    return parser;
	  }

	  function _end(parser) {
	    if (parser.sawRoot && !parser.closedRoot) strictFail(parser, 'Unclosed root tag');
	    if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) {
	      error(parser, 'Unexpected end');
	    }
	    closeText(parser);
	    parser.c = '';
	    parser.closed = true;
	    emit(parser, 'onend');
	    SAXParser.call(parser, parser.strict, parser.opt);
	    return parser;
	  }

	  function strictFail(parser, message) {
	    if ((typeof parser === 'undefined' ? 'undefined' : _typeof(parser)) !== 'object' || !(parser instanceof SAXParser)) {
	      throw new Error('bad call to strictFail');
	    }
	    if (parser.strict) {
	      error(parser, message);
	    }
	  }

	  function newTag(parser) {
	    if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
	    var parent = parser.tags[parser.tags.length - 1] || parser;
	    var tag = parser.tag = { name: parser.tagName, attributes: {} };

	    // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
	    if (parser.opt.xmlns) {
	      tag.ns = parent.ns;
	    }
	    parser.attribList.length = 0;
	    emitNode(parser, 'onopentagstart', tag);
	  }

	  function qname(name, attribute) {
	    var i = name.indexOf(':');
	    var qualName = i < 0 ? ['', name] : name.split(':');
	    var prefix = qualName[0];
	    var local = qualName[1];

	    // <x "xmlns"="http://foo">
	    if (attribute && name === 'xmlns') {
	      prefix = 'xmlns';
	      local = '';
	    }

	    return { prefix: prefix, local: local };
	  }

	  function attrib(parser) {
	    if (!parser.strict) {
	      parser.attribName = parser.attribName[parser.looseCase]();
	    }

	    if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
	      parser.attribName = parser.attribValue = '';
	      return;
	    }

	    if (parser.opt.xmlns) {
	      var qn = qname(parser.attribName, true);
	      var prefix = qn.prefix;
	      var local = qn.local;

	      if (prefix === 'xmlns') {
	        // namespace binding attribute. push the binding into scope
	        if (local === 'xml' && parser.attribValue !== XML_NAMESPACE) {
	          strictFail(parser, 'xml: prefix must be bound to ' + XML_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
	        } else if (local === 'xmlns' && parser.attribValue !== XMLNS_NAMESPACE) {
	          strictFail(parser, 'xmlns: prefix must be bound to ' + XMLNS_NAMESPACE + '\n' + 'Actual: ' + parser.attribValue);
	        } else {
	          var tag = parser.tag;
	          var parent = parser.tags[parser.tags.length - 1] || parser;
	          if (tag.ns === parent.ns) {
	            tag.ns = Object.create(parent.ns);
	          }
	          tag.ns[local] = parser.attribValue;
	        }
	      }

	      // defer onattribute events until all attributes have been seen
	      // so any new bindings can take effect. preserve attribute order
	      // so deferred events can be emitted in document order
	      parser.attribList.push([parser.attribName, parser.attribValue]);
	    } else {
	      // in non-xmlns mode, we can emit the event right away
	      parser.tag.attributes[parser.attribName] = parser.attribValue;
	      emitNode(parser, 'onattribute', {
	        name: parser.attribName,
	        value: parser.attribValue
	      });
	    }

	    parser.attribName = parser.attribValue = '';
	  }

	  function openTag(parser, selfClosing) {
	    if (parser.opt.xmlns) {
	      // emit namespace binding events
	      var tag = parser.tag;

	      // add namespace info to tag
	      var qn = qname(parser.tagName);
	      tag.prefix = qn.prefix;
	      tag.local = qn.local;
	      tag.uri = tag.ns[qn.prefix] || '';

	      if (tag.prefix && !tag.uri) {
	        strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(parser.tagName));
	        tag.uri = qn.prefix;
	      }

	      var parent = parser.tags[parser.tags.length - 1] || parser;
	      if (tag.ns && parent.ns !== tag.ns) {
	        Object.keys(tag.ns).forEach(function (p) {
	          emitNode(parser, 'onopennamespace', {
	            prefix: p,
	            uri: tag.ns[p]
	          });
	        });
	      }

	      // handle deferred onattribute events
	      // Note: do not apply default ns to attributes:
	      //   http://www.w3.org/TR/REC-xml-names/#defaulting
	      for (var i = 0, l = parser.attribList.length; i < l; i++) {
	        var nv = parser.attribList[i];
	        var name = nv[0];
	        var value = nv[1];
	        var qualName = qname(name, true);
	        var prefix = qualName.prefix;
	        var local = qualName.local;
	        var uri = prefix === '' ? '' : tag.ns[prefix] || '';
	        var a = {
	          name: name,
	          value: value,
	          prefix: prefix,
	          local: local,
	          uri: uri
	        };

	        // if there's any attributes with an undefined namespace,
	        // then fail on them now.
	        if (prefix && prefix !== 'xmlns' && !uri) {
	          strictFail(parser, 'Unbound namespace prefix: ' + JSON.stringify(prefix));
	          a.uri = prefix;
	        }
	        parser.tag.attributes[name] = a;
	        emitNode(parser, 'onattribute', a);
	      }
	      parser.attribList.length = 0;
	    }

	    parser.tag.isSelfClosing = !!selfClosing;

	    // process the tag
	    parser.sawRoot = true;
	    parser.tags.push(parser.tag);
	    emitNode(parser, 'onopentag', parser.tag);
	    if (!selfClosing) {
	      // special case for <script> in non-strict mode.
	      if (!parser.noscript && parser.tagName.toLowerCase() === 'script') {
	        parser.state = S.SCRIPT;
	      } else {
	        parser.state = S.TEXT;
	      }
	      parser.tag = null;
	      parser.tagName = '';
	    }
	    parser.attribName = parser.attribValue = '';
	    parser.attribList.length = 0;
	  }

	  function closeTag(parser) {
	    if (!parser.tagName) {
	      strictFail(parser, 'Weird empty close tag.');
	      parser.textNode += '</>';
	      parser.state = S.TEXT;
	      return;
	    }

	    if (parser.script) {
	      if (parser.tagName !== 'script') {
	        parser.script += '</' + parser.tagName + '>';
	        parser.tagName = '';
	        parser.state = S.SCRIPT;
	        return;
	      }
	      emitNode(parser, 'onscript', parser.script);
	      parser.script = '';
	    }

	    // first make sure that the closing tag actually exists.
	    // <a><b></c></b></a> will close everything, otherwise.
	    var t = parser.tags.length;
	    var tagName = parser.tagName;
	    if (!parser.strict) {
	      tagName = tagName[parser.looseCase]();
	    }
	    var closeTo = tagName;
	    while (t--) {
	      var close = parser.tags[t];
	      if (close.name !== closeTo) {
	        // fail the first time in strict mode
	        strictFail(parser, 'Unexpected close tag');
	      } else {
	        break;
	      }
	    }

	    // didn't find it.  we already failed for strict, so just abort.
	    if (t < 0) {
	      strictFail(parser, 'Unmatched closing tag: ' + parser.tagName);
	      parser.textNode += '</' + parser.tagName + '>';
	      parser.state = S.TEXT;
	      return;
	    }
	    parser.tagName = tagName;
	    var s = parser.tags.length;
	    while (s-- > t) {
	      var tag = parser.tag = parser.tags.pop();
	      parser.tagName = parser.tag.name;
	      emitNode(parser, 'onclosetag', parser.tagName);

	      var x = {};
	      for (var i in tag.ns) {
	        x[i] = tag.ns[i];
	      }

	      var parent = parser.tags[parser.tags.length - 1] || parser;
	      if (parser.opt.xmlns && tag.ns !== parent.ns) {
	        // remove namespace bindings introduced by tag
	        Object.keys(tag.ns).forEach(function (p) {
	          var n = tag.ns[p];
	          emitNode(parser, 'onclosenamespace', { prefix: p, uri: n });
	        });
	      }
	    }
	    if (t === 0) parser.closedRoot = true;
	    parser.tagName = parser.attribValue = parser.attribName = '';
	    parser.attribList.length = 0;
	    parser.state = S.TEXT;
	  }

	  function parseEntity(parser) {
	    var entity = parser.entity;
	    var entityLC = entity.toLowerCase();
	    var num;
	    var numStr = '';

	    if (parser.ENTITIES[entity]) {
	      return parser.ENTITIES[entity];
	    }
	    if (parser.ENTITIES[entityLC]) {
	      return parser.ENTITIES[entityLC];
	    }
	    entity = entityLC;
	    if (entity.charAt(0) === '#') {
	      if (entity.charAt(1) === 'x') {
	        entity = entity.slice(2);
	        num = parseInt(entity, 16);
	        numStr = num.toString(16);
	      } else {
	        entity = entity.slice(1);
	        num = parseInt(entity, 10);
	        numStr = num.toString(10);
	      }
	    }
	    entity = entity.replace(/^0+/, '');
	    if (numStr.toLowerCase() !== entity) {
	      strictFail(parser, 'Invalid character entity');
	      return '&' + parser.entity + ';';
	    }

	    return String.fromCodePoint(num);
	  }

	  function beginWhiteSpace(parser, c) {
	    if (c === '<') {
	      parser.state = S.OPEN_WAKA;
	      parser.startTagPosition = parser.position;
	    } else if (not(whitespace, c)) {
	      // have to process this as a text node.
	      // weird, but happens.
	      strictFail(parser, 'Non-whitespace before first tag.');
	      parser.textNode = c;
	      parser.state = S.TEXT;
	    }
	  }

	  function charAt(chunk, i) {
	    var result = '';
	    if (i < chunk.length) {
	      result = chunk.charAt(i);
	    }
	    return result;
	  }

	  function write(chunk) {
	    var parser = this;
	    if (this.error) {
	      throw this.error;
	    }
	    if (parser.closed) {
	      return error(parser, 'Cannot write after close. Assign an onready handler.');
	    }
	    if (chunk === null) {
	      return _end(parser);
	    }
	    if ((typeof chunk === 'undefined' ? 'undefined' : _typeof(chunk)) === 'object') {
	      chunk = chunk.toString();
	    }
	    var i = 0;
	    var c = '';
	    while (true) {
	      c = charAt(chunk, i++);
	      parser.c = c;
	      if (!c) {
	        break;
	      }
	      if (parser.trackPosition) {
	        parser.position++;
	        if (c === '\n') {
	          parser.line++;
	          parser.column = 0;
	        } else {
	          parser.column++;
	        }
	      }
	      switch (parser.state) {
	        case S.BEGIN:
	          parser.state = S.BEGIN_WHITESPACE;
	          if (c === '\uFEFF') {
	            continue;
	          }
	          beginWhiteSpace(parser, c);
	          continue;

	        case S.BEGIN_WHITESPACE:
	          beginWhiteSpace(parser, c);
	          continue;

	        case S.TEXT:
	          if (parser.sawRoot && !parser.closedRoot) {
	            var starti = i - 1;
	            while (c && c !== '<' && c !== '&') {
	              c = charAt(chunk, i++);
	              if (c && parser.trackPosition) {
	                parser.position++;
	                if (c === '\n') {
	                  parser.line++;
	                  parser.column = 0;
	                } else {
	                  parser.column++;
	                }
	              }
	            }
	            parser.textNode += chunk.substring(starti, i - 1);
	          }
	          if (c === '<' && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
	            parser.state = S.OPEN_WAKA;
	            parser.startTagPosition = parser.position;
	          } else {
	            if (not(whitespace, c) && (!parser.sawRoot || parser.closedRoot)) {
	              strictFail(parser, 'Text data outside of root node.');
	            }
	            if (c === '&') {
	              parser.state = S.TEXT_ENTITY;
	            } else {
	              parser.textNode += c;
	            }
	          }
	          continue;

	        case S.SCRIPT:
	          // only non-strict
	          if (c === '<') {
	            parser.state = S.SCRIPT_ENDING;
	          } else {
	            parser.script += c;
	          }
	          continue;

	        case S.SCRIPT_ENDING:
	          if (c === '/') {
	            parser.state = S.CLOSE_TAG;
	          } else {
	            parser.script += '<' + c;
	            parser.state = S.SCRIPT;
	          }
	          continue;

	        case S.OPEN_WAKA:
	          // either a /, ?, !, or text is coming next.
	          if (c === '!') {
	            parser.state = S.SGML_DECL;
	            parser.sgmlDecl = '';
	          } else if (is(whitespace, c)) {
	            // wait for it...
	          } else if (is(nameStart, c)) {
	            parser.state = S.OPEN_TAG;
	            parser.tagName = c;
	          } else if (c === '/') {
	            parser.state = S.CLOSE_TAG;
	            parser.tagName = '';
	          } else if (c === '?') {
	            parser.state = S.PROC_INST;
	            parser.procInstName = parser.procInstBody = '';
	          } else {
	            strictFail(parser, 'Unencoded <');
	            // if there was some whitespace, then add that in.
	            if (parser.startTagPosition + 1 < parser.position) {
	              var pad = parser.position - parser.startTagPosition;
	              c = new Array(pad).join(' ') + c;
	            }
	            parser.textNode += '<' + c;
	            parser.state = S.TEXT;
	          }
	          continue;

	        case S.SGML_DECL:
	          if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
	            emitNode(parser, 'onopencdata');
	            parser.state = S.CDATA;
	            parser.sgmlDecl = '';
	            parser.cdata = '';
	          } else if (parser.sgmlDecl + c === '--') {
	            parser.state = S.COMMENT;
	            parser.comment = '';
	            parser.sgmlDecl = '';
	          } else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
	            parser.state = S.DOCTYPE;
	            if (parser.doctype || parser.sawRoot) {
	              strictFail(parser, 'Inappropriately located doctype declaration');
	            }
	            parser.doctype = '';
	            parser.sgmlDecl = '';
	          } else if (c === '>') {
	            emitNode(parser, 'onsgmldeclaration', parser.sgmlDecl);
	            parser.sgmlDecl = '';
	            parser.state = S.TEXT;
	          } else if (is(quote, c)) {
	            parser.state = S.SGML_DECL_QUOTED;
	            parser.sgmlDecl += c;
	          } else {
	            parser.sgmlDecl += c;
	          }
	          continue;

	        case S.SGML_DECL_QUOTED:
	          if (c === parser.q) {
	            parser.state = S.SGML_DECL;
	            parser.q = '';
	          }
	          parser.sgmlDecl += c;
	          continue;

	        case S.DOCTYPE:
	          if (c === '>') {
	            parser.state = S.TEXT;
	            emitNode(parser, 'ondoctype', parser.doctype);
	            parser.doctype = true; // just remember that we saw it.
	          } else {
	            parser.doctype += c;
	            if (c === '[') {
	              parser.state = S.DOCTYPE_DTD;
	            } else if (is(quote, c)) {
	              parser.state = S.DOCTYPE_QUOTED;
	              parser.q = c;
	            }
	          }
	          continue;

	        case S.DOCTYPE_QUOTED:
	          parser.doctype += c;
	          if (c === parser.q) {
	            parser.q = '';
	            parser.state = S.DOCTYPE;
	          }
	          continue;

	        case S.DOCTYPE_DTD:
	          parser.doctype += c;
	          if (c === ']') {
	            parser.state = S.DOCTYPE;
	          } else if (is(quote, c)) {
	            parser.state = S.DOCTYPE_DTD_QUOTED;
	            parser.q = c;
	          }
	          continue;

	        case S.DOCTYPE_DTD_QUOTED:
	          parser.doctype += c;
	          if (c === parser.q) {
	            parser.state = S.DOCTYPE_DTD;
	            parser.q = '';
	          }
	          continue;

	        case S.COMMENT:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDING;
	          } else {
	            parser.comment += c;
	          }
	          continue;

	        case S.COMMENT_ENDING:
	          if (c === '-') {
	            parser.state = S.COMMENT_ENDED;
	            parser.comment = textopts(parser.opt, parser.comment);
	            if (parser.comment) {
	              emitNode(parser, 'oncomment', parser.comment);
	            }
	            parser.comment = '';
	          } else {
	            parser.comment += '-' + c;
	            parser.state = S.COMMENT;
	          }
	          continue;

	        case S.COMMENT_ENDED:
	          if (c !== '>') {
	            strictFail(parser, 'Malformed comment');
	            // allow <!-- blah -- bloo --> in non-strict mode,
	            // which is a comment of " blah -- bloo "
	            parser.comment += '--' + c;
	            parser.state = S.COMMENT;
	          } else {
	            parser.state = S.TEXT;
	          }
	          continue;

	        case S.CDATA:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING;
	          } else {
	            parser.cdata += c;
	          }
	          continue;

	        case S.CDATA_ENDING:
	          if (c === ']') {
	            parser.state = S.CDATA_ENDING_2;
	          } else {
	            parser.cdata += ']' + c;
	            parser.state = S.CDATA;
	          }
	          continue;

	        case S.CDATA_ENDING_2:
	          if (c === '>') {
	            if (parser.cdata) {
	              emitNode(parser, 'oncdata', parser.cdata);
	            }
	            emitNode(parser, 'onclosecdata');
	            parser.cdata = '';
	            parser.state = S.TEXT;
	          } else if (c === ']') {
	            parser.cdata += ']';
	          } else {
	            parser.cdata += ']]' + c;
	            parser.state = S.CDATA;
	          }
	          continue;

	        case S.PROC_INST:
	          if (c === '?') {
	            parser.state = S.PROC_INST_ENDING;
	          } else if (is(whitespace, c)) {
	            parser.state = S.PROC_INST_BODY;
	          } else {
	            parser.procInstName += c;
	          }
	          continue;

	        case S.PROC_INST_BODY:
	          if (!parser.procInstBody && is(whitespace, c)) {
	            continue;
	          } else if (c === '?') {
	            parser.state = S.PROC_INST_ENDING;
	          } else {
	            parser.procInstBody += c;
	          }
	          continue;

	        case S.PROC_INST_ENDING:
	          if (c === '>') {
	            emitNode(parser, 'onprocessinginstruction', {
	              name: parser.procInstName,
	              body: parser.procInstBody
	            });
	            parser.procInstName = parser.procInstBody = '';
	            parser.state = S.TEXT;
	          } else {
	            parser.procInstBody += '?' + c;
	            parser.state = S.PROC_INST_BODY;
	          }
	          continue;

	        case S.OPEN_TAG:
	          if (is(nameBody, c)) {
	            parser.tagName += c;
	          } else {
	            newTag(parser);
	            if (c === '>') {
	              openTag(parser);
	            } else if (c === '/') {
	              parser.state = S.OPEN_TAG_SLASH;
	            } else {
	              if (not(whitespace, c)) {
	                strictFail(parser, 'Invalid character in tag name');
	              }
	              parser.state = S.ATTRIB;
	            }
	          }
	          continue;

	        case S.OPEN_TAG_SLASH:
	          if (c === '>') {
	            openTag(parser, true);
	            closeTag(parser);
	          } else {
	            strictFail(parser, 'Forward-slash in opening tag not followed by >');
	            parser.state = S.ATTRIB;
	          }
	          continue;

	        case S.ATTRIB:
	          // haven't read the attribute name yet.
	          if (is(whitespace, c)) {
	            continue;
	          } else if (c === '>') {
	            openTag(parser);
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH;
	          } else if (is(nameStart, c)) {
	            parser.attribName = c;
	            parser.attribValue = '';
	            parser.state = S.ATTRIB_NAME;
	          } else {
	            strictFail(parser, 'Invalid attribute name');
	          }
	          continue;

	        case S.ATTRIB_NAME:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE;
	          } else if (c === '>') {
	            strictFail(parser, 'Attribute without value');
	            parser.attribValue = parser.attribName;
	            attrib(parser);
	            openTag(parser);
	          } else if (is(whitespace, c)) {
	            parser.state = S.ATTRIB_NAME_SAW_WHITE;
	          } else if (is(nameBody, c)) {
	            parser.attribName += c;
	          } else {
	            strictFail(parser, 'Invalid attribute name');
	          }
	          continue;

	        case S.ATTRIB_NAME_SAW_WHITE:
	          if (c === '=') {
	            parser.state = S.ATTRIB_VALUE;
	          } else if (is(whitespace, c)) {
	            continue;
	          } else {
	            strictFail(parser, 'Attribute without value');
	            parser.tag.attributes[parser.attribName] = '';
	            parser.attribValue = '';
	            emitNode(parser, 'onattribute', {
	              name: parser.attribName,
	              value: ''
	            });
	            parser.attribName = '';
	            if (c === '>') {
	              openTag(parser);
	            } else if (is(nameStart, c)) {
	              parser.attribName = c;
	              parser.state = S.ATTRIB_NAME;
	            } else {
	              strictFail(parser, 'Invalid attribute name');
	              parser.state = S.ATTRIB;
	            }
	          }
	          continue;

	        case S.ATTRIB_VALUE:
	          if (is(whitespace, c)) {
	            continue;
	          } else if (is(quote, c)) {
	            parser.q = c;
	            parser.state = S.ATTRIB_VALUE_QUOTED;
	          } else {
	            strictFail(parser, 'Unquoted attribute value');
	            parser.state = S.ATTRIB_VALUE_UNQUOTED;
	            parser.attribValue = c;
	          }
	          continue;

	        case S.ATTRIB_VALUE_QUOTED:
	          if (c !== parser.q) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_Q;
	            } else {
	              parser.attribValue += c;
	            }
	            continue;
	          }
	          attrib(parser);
	          parser.q = '';
	          parser.state = S.ATTRIB_VALUE_CLOSED;
	          continue;

	        case S.ATTRIB_VALUE_CLOSED:
	          if (is(whitespace, c)) {
	            parser.state = S.ATTRIB;
	          } else if (c === '>') {
	            openTag(parser);
	          } else if (c === '/') {
	            parser.state = S.OPEN_TAG_SLASH;
	          } else if (is(nameStart, c)) {
	            strictFail(parser, 'No whitespace between attributes');
	            parser.attribName = c;
	            parser.attribValue = '';
	            parser.state = S.ATTRIB_NAME;
	          } else {
	            strictFail(parser, 'Invalid attribute name');
	          }
	          continue;

	        case S.ATTRIB_VALUE_UNQUOTED:
	          if (not(attribEnd, c)) {
	            if (c === '&') {
	              parser.state = S.ATTRIB_VALUE_ENTITY_U;
	            } else {
	              parser.attribValue += c;
	            }
	            continue;
	          }
	          attrib(parser);
	          if (c === '>') {
	            openTag(parser);
	          } else {
	            parser.state = S.ATTRIB;
	          }
	          continue;

	        case S.CLOSE_TAG:
	          if (!parser.tagName) {
	            if (is(whitespace, c)) {
	              continue;
	            } else if (not(nameStart, c)) {
	              if (parser.script) {
	                parser.script += '</' + c;
	                parser.state = S.SCRIPT;
	              } else {
	                strictFail(parser, 'Invalid tagname in closing tag.');
	              }
	            } else {
	              parser.tagName = c;
	            }
	          } else if (c === '>') {
	            closeTag(parser);
	          } else if (is(nameBody, c)) {
	            parser.tagName += c;
	          } else if (parser.script) {
	            parser.script += '</' + parser.tagName;
	            parser.tagName = '';
	            parser.state = S.SCRIPT;
	          } else {
	            if (not(whitespace, c)) {
	              strictFail(parser, 'Invalid tagname in closing tag');
	            }
	            parser.state = S.CLOSE_TAG_SAW_WHITE;
	          }
	          continue;

	        case S.CLOSE_TAG_SAW_WHITE:
	          if (is(whitespace, c)) {
	            continue;
	          }
	          if (c === '>') {
	            closeTag(parser);
	          } else {
	            strictFail(parser, 'Invalid characters in closing tag');
	          }
	          continue;

	        case S.TEXT_ENTITY:
	        case S.ATTRIB_VALUE_ENTITY_Q:
	        case S.ATTRIB_VALUE_ENTITY_U:
	          var returnState;
	          var buffer;
	          switch (parser.state) {
	            case S.TEXT_ENTITY:
	              returnState = S.TEXT;
	              buffer = 'textNode';
	              break;

	            case S.ATTRIB_VALUE_ENTITY_Q:
	              returnState = S.ATTRIB_VALUE_QUOTED;
	              buffer = 'attribValue';
	              break;

	            case S.ATTRIB_VALUE_ENTITY_U:
	              returnState = S.ATTRIB_VALUE_UNQUOTED;
	              buffer = 'attribValue';
	              break;
	          }

	          if (c === ';') {
	            parser[buffer] += parseEntity(parser);
	            parser.entity = '';
	            parser.state = returnState;
	          } else if (is(parser.entity.length ? entityBody : entityStart, c)) {
	            parser.entity += c;
	          } else {
	            strictFail(parser, 'Invalid character in entity name');
	            parser[buffer] += '&' + parser.entity + c;
	            parser.entity = '';
	            parser.state = returnState;
	          }

	          continue;

	        default:
	          throw new Error(parser, 'Unknown state: ' + parser.state);
	      }
	    } // while

	    if (parser.position >= parser.bufferCheckPosition) {
	      checkBufferLength(parser);
	    }
	    return parser;
	  }

	  /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
	  if (!String.fromCodePoint) {
	    (function () {
	      var stringFromCharCode = String.fromCharCode;
	      var floor = Math.floor;
	      var fromCodePoint = function fromCodePoint() {
	        var MAX_SIZE = 0x4000;
	        var codeUnits = [];
	        var highSurrogate;
	        var lowSurrogate;
	        var index = -1;
	        var length = arguments.length;
	        if (!length) {
	          return '';
	        }
	        var result = '';
	        while (++index < length) {
	          var codePoint = Number(arguments[index]);
	          if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	          codePoint < 0 || // not a valid Unicode code point
	          codePoint > 0x10FFFF || // not a valid Unicode code point
	          floor(codePoint) !== codePoint // not an integer
	          ) {
	              throw RangeError('Invalid code point: ' + codePoint);
	            }
	          if (codePoint <= 0xFFFF) {
	            // BMP code point
	            codeUnits.push(codePoint);
	          } else {
	            // Astral code point; split in surrogate halves
	            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	            codePoint -= 0x10000;
	            highSurrogate = (codePoint >> 10) + 0xD800;
	            lowSurrogate = codePoint % 0x400 + 0xDC00;
	            codeUnits.push(highSurrogate, lowSurrogate);
	          }
	          if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	            result += stringFromCharCode.apply(null, codeUnits);
	            codeUnits.length = 0;
	          }
	        }
	        return result;
	      };
	      if (Object.defineProperty) {
	        Object.defineProperty(String, 'fromCodePoint', {
	          value: fromCodePoint,
	          configurable: true,
	          writable: true
	        });
	      } else {
	        String.fromCodePoint = fromCodePoint;
	      }
	    })();
	  }
	})( false ? undefined.sax = {} : exports);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4).Buffer))

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLBuilder, assign;

	  assign = __webpack_require__(151);

	  XMLBuilder = __webpack_require__(201);

	  module.exports.create = function (name, xmldec, doctype, options) {
	    options = assign({}, xmldec, doctype, options);
	    return new XMLBuilder(name, options).root();
	  };
	}).call(undefined);

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assignValue = __webpack_require__(152),
	    copyObject = __webpack_require__(170),
	    createAssigner = __webpack_require__(171),
	    isArrayLike = __webpack_require__(181),
	    isPrototype = __webpack_require__(184),
	    keys = __webpack_require__(185);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function (object, source) {
	  if (isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseAssignValue = __webpack_require__(153),
	    eq = __webpack_require__(169);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defineProperty = __webpack_require__(154);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155);

	var defineProperty = function () {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}();

	module.exports = defineProperty;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsNative = __webpack_require__(156),
	    getValue = __webpack_require__(168);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(157),
	    isMasked = __webpack_require__(165),
	    isObject = __webpack_require__(164),
	    toSource = __webpack_require__(167);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(158),
	    isObject = __webpack_require__(164);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	    if (!isObject(value)) {
	        return false;
	    }
	    // The use of `Object#toString` avoids issues with the `typeof` operator
	    // in Safari 9 which returns 'object' for typed arrays and other constructors.
	    var tag = baseGetTag(value);
	    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(159),
	    getRawTag = __webpack_require__(162),
	    objectToString = __webpack_require__(163);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    value = Object(value);
	    return symToStringTag && symToStringTag in value ? getRawTag(value) : objectToString(value);
	}

	module.exports = baseGetTag;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(160);

	/** Built-in value references. */
	var _Symbol = root.Symbol;

	module.exports = _Symbol;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(161);

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;

/***/ },
/* 161 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(159);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;

/***/ },
/* 163 */
/***/ function(module, exports) {

	"use strict";

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;

/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var coreJsData = __webpack_require__(166);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	module.exports = isMasked;

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(160);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;

/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	module.exports = eq;

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assignValue = __webpack_require__(152),
	    baseAssignValue = __webpack_require__(153);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseRest = __webpack_require__(172),
	    isIterateeCall = __webpack_require__(180);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function (object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var identity = __webpack_require__(173),
	    overRest = __webpack_require__(174),
	    setToString = __webpack_require__(176);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;

/***/ },
/* 173 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var apply = __webpack_require__(175);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;

/***/ },
/* 175 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseSetToString = __webpack_require__(177),
	    shortOut = __webpack_require__(179);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var constant = __webpack_require__(178),
	    defineProperty = __webpack_require__(154),
	    identity = __webpack_require__(173);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function (func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;

/***/ },
/* 178 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function () {
	    return value;
	  };
	}

	module.exports = constant;

/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function () {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var eq = __webpack_require__(169),
	    isArrayLike = __webpack_require__(181),
	    isIndex = __webpack_require__(183),
	    isObject = __webpack_require__(164);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(157),
	    isLength = __webpack_require__(182);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;

/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayLikeKeys = __webpack_require__(186),
	    baseKeys = __webpack_require__(198),
	    isArrayLike = __webpack_require__(181);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseTimes = __webpack_require__(187),
	    isArguments = __webpack_require__(188),
	    isArray = __webpack_require__(191),
	    isBuffer = __webpack_require__(192),
	    isIndex = __webpack_require__(183),
	    isTypedArray = __webpack_require__(194);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
	    // Safari 9 has enumerable `arguments.length` in strict mode.
	    key == 'length' ||
	    // Node.js 0.10 has enumerable non-index properties on buffers.
	    isBuff && (key == 'offset' || key == 'parent') ||
	    // PhantomJS 2 has enumerable non-index properties on typed arrays.
	    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
	    // Skip index properties.
	    isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;

/***/ },
/* 187 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsArguments = __webpack_require__(189),
	    isObjectLike = __webpack_require__(190);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function () {
	    return arguments;
	}()) ? baseIsArguments : function (value) {
	    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(158),
	    isObjectLike = __webpack_require__(190);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var root = __webpack_require__(160),
	    stubFalse = __webpack_require__(193);

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)(module)))

/***/ },
/* 193 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsTypedArray = __webpack_require__(195),
	    baseUnary = __webpack_require__(196),
	    nodeUtil = __webpack_require__(197);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(158),
	    isLength = __webpack_require__(182),
	    isObjectLike = __webpack_require__(190);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;

/***/ },
/* 196 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(161);

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}();

	module.exports = nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)(module)))

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isPrototype = __webpack_require__(184),
	    nativeKeys = __webpack_require__(199);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(200);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;

/***/ },
/* 200 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLBuilder, XMLDeclaration, XMLDocType, XMLElement, XMLStringifier;

	  XMLStringifier = __webpack_require__(202);

	  XMLDeclaration = __webpack_require__(203);

	  XMLDocType = __webpack_require__(294);

	  XMLElement = __webpack_require__(215);

	  module.exports = XMLBuilder = function () {
	    function XMLBuilder(name, options) {
	      var root, temp;
	      if (name == null) {
	        throw new Error("Root element needs a name");
	      }
	      if (options == null) {
	        options = {};
	      }
	      this.options = options;
	      this.stringify = new XMLStringifier(options);
	      temp = new XMLElement(this, 'doc');
	      root = temp.element(name);
	      root.isRoot = true;
	      root.documentObject = this;
	      this.rootObject = root;
	      if (!options.headless) {
	        root.declaration(options);
	        if (options.pubID != null || options.sysID != null) {
	          root.doctype(options);
	        }
	      }
	    }

	    XMLBuilder.prototype.root = function () {
	      return this.rootObject;
	    };

	    XMLBuilder.prototype.end = function (options) {
	      return this.toString(options);
	    };

	    XMLBuilder.prototype.toString = function (options) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      r = '';
	      if (this.xmldec != null) {
	        r += this.xmldec.toString(options);
	      }
	      if (this.doctype != null) {
	        r += this.doctype.toString(options);
	      }
	      r += this.rootObject.toString(options);
	      if (pretty && r.slice(-newline.length) === newline) {
	        r = r.slice(0, -newline.length);
	      }
	      return r;
	    };

	    return XMLBuilder;
	  }();
	}).call(undefined);

/***/ },
/* 202 */
/***/ function(module, exports) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLStringifier,
	      bind = function bind(fn, me) {
	    return function () {
	      return fn.apply(me, arguments);
	    };
	  },
	      hasProp = {}.hasOwnProperty;

	  module.exports = XMLStringifier = function () {
	    function XMLStringifier(options) {
	      this.assertLegalChar = bind(this.assertLegalChar, this);
	      var key, ref, value;
	      this.allowSurrogateChars = options != null ? options.allowSurrogateChars : void 0;
	      this.noDoubleEncoding = options != null ? options.noDoubleEncoding : void 0;
	      ref = (options != null ? options.stringify : void 0) || {};
	      for (key in ref) {
	        if (!hasProp.call(ref, key)) continue;
	        value = ref[key];
	        this[key] = value;
	      }
	    }

	    XMLStringifier.prototype.eleName = function (val) {
	      val = '' + val || '';
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.eleText = function (val) {
	      val = '' + val || '';
	      return this.assertLegalChar(this.elEscape(val));
	    };

	    XMLStringifier.prototype.cdata = function (val) {
	      val = '' + val || '';
	      if (val.match(/]]>/)) {
	        throw new Error("Invalid CDATA text: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.comment = function (val) {
	      val = '' + val || '';
	      if (val.match(/--/)) {
	        throw new Error("Comment text cannot contain double-hypen: " + val);
	      }
	      return this.assertLegalChar(val);
	    };

	    XMLStringifier.prototype.raw = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attName = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.attValue = function (val) {
	      val = '' + val || '';
	      return this.attEscape(val);
	    };

	    XMLStringifier.prototype.insTarget = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.insValue = function (val) {
	      val = '' + val || '';
	      if (val.match(/\?>/)) {
	        throw new Error("Invalid processing instruction value: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlVersion = function (val) {
	      val = '' + val || '';
	      if (!val.match(/1\.[0-9]+/)) {
	        throw new Error("Invalid version number: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlEncoding = function (val) {
	      val = '' + val || '';
	      if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
	        throw new Error("Invalid encoding: " + val);
	      }
	      return val;
	    };

	    XMLStringifier.prototype.xmlStandalone = function (val) {
	      if (val) {
	        return "yes";
	      } else {
	        return "no";
	      }
	    };

	    XMLStringifier.prototype.dtdPubID = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdSysID = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdElementValue = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttType = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdAttDefault = function (val) {
	      if (val != null) {
	        return '' + val || '';
	      } else {
	        return val;
	      }
	    };

	    XMLStringifier.prototype.dtdEntityValue = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.dtdNData = function (val) {
	      return '' + val || '';
	    };

	    XMLStringifier.prototype.convertAttKey = '@';

	    XMLStringifier.prototype.convertPIKey = '?';

	    XMLStringifier.prototype.convertTextKey = '#text';

	    XMLStringifier.prototype.convertCDataKey = '#cdata';

	    XMLStringifier.prototype.convertCommentKey = '#comment';

	    XMLStringifier.prototype.convertRawKey = '#raw';

	    XMLStringifier.prototype.assertLegalChar = function (str) {
	      var chars, chr;
	      if (this.allowSurrogateChars) {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
	      } else {
	        chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
	      }
	      chr = str.match(chars);
	      if (chr) {
	        throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
	      }
	      return str;
	    };

	    XMLStringifier.prototype.elEscape = function (str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\r/g, '&#xD;');
	    };

	    XMLStringifier.prototype.attEscape = function (str) {
	      var ampregex;
	      ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
	      return str.replace(ampregex, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
	    };

	    return XMLStringifier;
	  }();
	}).call(undefined);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLDeclaration,
	      XMLNode,
	      create,
	      isObject,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(204);

	  isObject = __webpack_require__(164);

	  XMLNode = __webpack_require__(207);

	  module.exports = XMLDeclaration = function (superClass) {
	    extend(XMLDeclaration, superClass);

	    function XMLDeclaration(parent, version, encoding, standalone) {
	      var ref;
	      XMLDeclaration.__super__.constructor.call(this, parent);
	      if (isObject(version)) {
	        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
	      }
	      if (!version) {
	        version = '1.0';
	      }
	      this.version = this.stringify.xmlVersion(version);
	      if (encoding != null) {
	        this.encoding = this.stringify.xmlEncoding(encoding);
	      }
	      if (standalone != null) {
	        this.standalone = this.stringify.xmlStandalone(standalone);
	      }
	    }

	    XMLDeclaration.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?xml';
	      r += ' version="' + this.version + '"';
	      if (this.encoding != null) {
	        r += ' encoding="' + this.encoding + '"';
	      }
	      if (this.standalone != null) {
	        r += ' standalone="' + this.standalone + '"';
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDeclaration;
	  }(XMLNode);
	}).call(undefined);

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseAssign = __webpack_require__(205),
	    baseCreate = __webpack_require__(206);

	/**
	 * Creates an object that inherits from the `prototype` object. If a
	 * `properties` object is given, its own enumerable string keyed properties
	 * are assigned to the created object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Object
	 * @param {Object} prototype The object to inherit from.
	 * @param {Object} [properties] The properties to assign to the object.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * function Shape() {
	 *   this.x = 0;
	 *   this.y = 0;
	 * }
	 *
	 * function Circle() {
	 *   Shape.call(this);
	 * }
	 *
	 * Circle.prototype = _.create(Shape.prototype, {
	 *   'constructor': Circle
	 * });
	 *
	 * var circle = new Circle;
	 * circle instanceof Circle;
	 * // => true
	 *
	 * circle instanceof Shape;
	 * // => true
	 */
	function create(prototype, properties) {
	  var result = baseCreate(prototype);
	  return properties == null ? result : baseAssign(result, properties);
	}

	module.exports = create;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var copyObject = __webpack_require__(170),
	    keys = __webpack_require__(185);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(164);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = function () {
	  function object() {}
	  return function (proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object();
	    object.prototype = undefined;
	    return result;
	  };
	}();

	module.exports = baseCreate;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLCData,
	      XMLComment,
	      XMLDeclaration,
	      XMLDocType,
	      XMLElement,
	      XMLNode,
	      XMLRaw,
	      XMLText,
	      isEmpty,
	      isFunction,
	      isObject,
	      hasProp = {}.hasOwnProperty;

	  isObject = __webpack_require__(164);

	  isFunction = __webpack_require__(157);

	  isEmpty = __webpack_require__(208);

	  XMLElement = null;

	  XMLCData = null;

	  XMLComment = null;

	  XMLDeclaration = null;

	  XMLDocType = null;

	  XMLRaw = null;

	  XMLText = null;

	  module.exports = XMLNode = function () {
	    function XMLNode(parent) {
	      this.parent = parent;
	      this.options = this.parent.options;
	      this.stringify = this.parent.stringify;
	      if (XMLElement === null) {
	        XMLElement = __webpack_require__(215);
	        XMLCData = __webpack_require__(292);
	        XMLComment = __webpack_require__(293);
	        XMLDeclaration = __webpack_require__(203);
	        XMLDocType = __webpack_require__(294);
	        XMLRaw = __webpack_require__(299);
	        XMLText = __webpack_require__(300);
	      }
	    }

	    XMLNode.prototype.element = function (name, attributes, text) {
	      var childNode, item, j, k, key, lastChild, len, len1, ref, val;
	      lastChild = null;
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (Array.isArray(name)) {
	        for (j = 0, len = name.length; j < len; j++) {
	          item = name[j];
	          lastChild = this.element(item);
	        }
	      } else if (isFunction(name)) {
	        lastChild = this.element(name.apply());
	      } else if (isObject(name)) {
	        for (key in name) {
	          if (!hasProp.call(name, key)) continue;
	          val = name[key];
	          if (isFunction(val)) {
	            val = val.apply();
	          }
	          if (isObject(val) && isEmpty(val)) {
	            val = null;
	          }
	          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
	            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
	          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
	            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
	          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
	            for (k = 0, len1 = val.length; k < len1; k++) {
	              item = val[k];
	              childNode = {};
	              childNode[key] = item;
	              lastChild = this.element(childNode);
	            }
	          } else if (isObject(val)) {
	            lastChild = this.element(key);
	            lastChild.element(val);
	          } else {
	            lastChild = this.element(key, val);
	          }
	        }
	      } else {
	        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
	          lastChild = this.text(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
	          lastChild = this.cdata(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
	          lastChild = this.comment(text);
	        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
	          lastChild = this.raw(text);
	        } else {
	          lastChild = this.node(name, attributes, text);
	        }
	      }
	      if (lastChild == null) {
	        throw new Error("Could not create any elements with: " + name);
	      }
	      return lastChild;
	    };

	    XMLNode.prototype.insertBefore = function (name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.insertAfter = function (name, attributes, text) {
	      var child, i, removed;
	      if (this.isRoot) {
	        throw new Error("Cannot insert elements at root level");
	      }
	      i = this.parent.children.indexOf(this);
	      removed = this.parent.children.splice(i + 1);
	      child = this.parent.element(name, attributes, text);
	      Array.prototype.push.apply(this.parent.children, removed);
	      return child;
	    };

	    XMLNode.prototype.remove = function () {
	      var i, ref;
	      if (this.isRoot) {
	        throw new Error("Cannot remove the root element");
	      }
	      i = this.parent.children.indexOf(this);
	      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
	      return this.parent;
	    };

	    XMLNode.prototype.node = function (name, attributes, text) {
	      var child, ref;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (attributes == null) {
	        attributes = {};
	      }
	      attributes = attributes.valueOf();
	      if (!isObject(attributes)) {
	        ref = [attributes, text], text = ref[0], attributes = ref[1];
	      }
	      child = new XMLElement(this, name, attributes);
	      if (text != null) {
	        child.text(text);
	      }
	      this.children.push(child);
	      return child;
	    };

	    XMLNode.prototype.text = function (value) {
	      var child;
	      child = new XMLText(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.cdata = function (value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.comment = function (value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.raw = function (value) {
	      var child;
	      child = new XMLRaw(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLNode.prototype.declaration = function (version, encoding, standalone) {
	      var doc, xmldec;
	      doc = this.document();
	      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
	      doc.xmldec = xmldec;
	      return doc.root();
	    };

	    XMLNode.prototype.doctype = function (pubID, sysID) {
	      var doc, doctype;
	      doc = this.document();
	      doctype = new XMLDocType(doc, pubID, sysID);
	      doc.doctype = doctype;
	      return doctype;
	    };

	    XMLNode.prototype.up = function () {
	      if (this.isRoot) {
	        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
	      }
	      return this.parent;
	    };

	    XMLNode.prototype.root = function () {
	      var child;
	      if (this.isRoot) {
	        return this;
	      }
	      child = this.parent;
	      while (!child.isRoot) {
	        child = child.parent;
	      }
	      return child;
	    };

	    XMLNode.prototype.document = function () {
	      return this.root().documentObject;
	    };

	    XMLNode.prototype.end = function (options) {
	      return this.document().toString(options);
	    };

	    XMLNode.prototype.prev = function () {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i < 1) {
	        throw new Error("Already at the first node");
	      }
	      return this.parent.children[i - 1];
	    };

	    XMLNode.prototype.next = function () {
	      var i;
	      if (this.isRoot) {
	        throw new Error("Root node has no siblings");
	      }
	      i = this.parent.children.indexOf(this);
	      if (i === -1 || i === this.parent.children.length - 1) {
	        throw new Error("Already at the last node");
	      }
	      return this.parent.children[i + 1];
	    };

	    XMLNode.prototype.importXMLBuilder = function (xmlbuilder) {
	      var clonedRoot;
	      clonedRoot = xmlbuilder.root().clone();
	      clonedRoot.parent = this;
	      clonedRoot.isRoot = false;
	      this.children.push(clonedRoot);
	      return this;
	    };

	    XMLNode.prototype.ele = function (name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.nod = function (name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.txt = function (value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.dat = function (value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.com = function (value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.doc = function () {
	      return this.document();
	    };

	    XMLNode.prototype.dec = function (version, encoding, standalone) {
	      return this.declaration(version, encoding, standalone);
	    };

	    XMLNode.prototype.dtd = function (pubID, sysID) {
	      return this.doctype(pubID, sysID);
	    };

	    XMLNode.prototype.e = function (name, attributes, text) {
	      return this.element(name, attributes, text);
	    };

	    XMLNode.prototype.n = function (name, attributes, text) {
	      return this.node(name, attributes, text);
	    };

	    XMLNode.prototype.t = function (value) {
	      return this.text(value);
	    };

	    XMLNode.prototype.d = function (value) {
	      return this.cdata(value);
	    };

	    XMLNode.prototype.c = function (value) {
	      return this.comment(value);
	    };

	    XMLNode.prototype.r = function (value) {
	      return this.raw(value);
	    };

	    XMLNode.prototype.u = function () {
	      return this.up();
	    };

	    return XMLNode;
	  }();
	}).call(undefined);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseKeys = __webpack_require__(198),
	    getTag = __webpack_require__(209),
	    isArguments = __webpack_require__(188),
	    isArray = __webpack_require__(191),
	    isArrayLike = __webpack_require__(181),
	    isBuffer = __webpack_require__(192),
	    isPrototype = __webpack_require__(184),
	    isTypedArray = __webpack_require__(194);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
	    return !value.length;
	  }
	  var tag = getTag(value);
	  if (tag == mapTag || tag == setTag) {
	    return !value.size;
	  }
	  if (isPrototype(value)) {
	    return !baseKeys(value).length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DataView = __webpack_require__(210),
	    Map = __webpack_require__(211),
	    Promise = __webpack_require__(212),
	    Set = __webpack_require__(213),
	    WeakMap = __webpack_require__(214),
	    baseGetTag = __webpack_require__(158),
	    toSource = __webpack_require__(167);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	    getTag = function getTag(value) {
	        var result = baseGetTag(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : '';

	        if (ctorString) {
	            switch (ctorString) {
	                case dataViewCtorString:
	                    return dataViewTag;
	                case mapCtorString:
	                    return mapTag;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag;
	                case weakMapCtorString:
	                    return weakMapTag;
	            }
	        }
	        return result;
	    };
	}

	module.exports = getTag;

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155),
	    root = __webpack_require__(160);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155),
	    root = __webpack_require__(160);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155),
	    root = __webpack_require__(160);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155),
	    root = __webpack_require__(160);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155),
	    root = __webpack_require__(160);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLAttribute,
	      XMLElement,
	      XMLNode,
	      XMLProcessingInstruction,
	      create,
	      every,
	      isFunction,
	      isObject,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(204);

	  isObject = __webpack_require__(164);

	  isFunction = __webpack_require__(157);

	  every = __webpack_require__(216);

	  XMLNode = __webpack_require__(207);

	  XMLAttribute = __webpack_require__(290);

	  XMLProcessingInstruction = __webpack_require__(291);

	  module.exports = XMLElement = function (superClass) {
	    extend(XMLElement, superClass);

	    function XMLElement(parent, name, attributes) {
	      XMLElement.__super__.constructor.call(this, parent);
	      if (name == null) {
	        throw new Error("Missing element name");
	      }
	      this.name = this.stringify.eleName(name);
	      this.children = [];
	      this.instructions = [];
	      this.attributes = {};
	      if (attributes != null) {
	        this.attribute(attributes);
	      }
	    }

	    XMLElement.prototype.clone = function () {
	      var att, attName, clonedSelf, i, len, pi, ref, ref1;
	      clonedSelf = create(XMLElement.prototype, this);
	      if (clonedSelf.isRoot) {
	        clonedSelf.documentObject = null;
	      }
	      clonedSelf.attributes = {};
	      ref = this.attributes;
	      for (attName in ref) {
	        if (!hasProp.call(ref, attName)) continue;
	        att = ref[attName];
	        clonedSelf.attributes[attName] = att.clone();
	      }
	      clonedSelf.instructions = [];
	      ref1 = this.instructions;
	      for (i = 0, len = ref1.length; i < len; i++) {
	        pi = ref1[i];
	        clonedSelf.instructions.push(pi.clone());
	      }
	      clonedSelf.children = [];
	      this.children.forEach(function (child) {
	        var clonedChild;
	        clonedChild = child.clone();
	        clonedChild.parent = clonedSelf;
	        return clonedSelf.children.push(clonedChild);
	      });
	      return clonedSelf;
	    };

	    XMLElement.prototype.attribute = function (name, value) {
	      var attName, attValue;
	      if (name != null) {
	        name = name.valueOf();
	      }
	      if (isObject(name)) {
	        for (attName in name) {
	          if (!hasProp.call(name, attName)) continue;
	          attValue = name[attName];
	          this.attribute(attName, attValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        if (!this.options.skipNullAttributes || value != null) {
	          this.attributes[name] = new XMLAttribute(this, name, value);
	        }
	      }
	      return this;
	    };

	    XMLElement.prototype.removeAttribute = function (name) {
	      var attName, i, len;
	      if (name == null) {
	        throw new Error("Missing attribute name");
	      }
	      name = name.valueOf();
	      if (Array.isArray(name)) {
	        for (i = 0, len = name.length; i < len; i++) {
	          attName = name[i];
	          delete this.attributes[attName];
	        }
	      } else {
	        delete this.attributes[name];
	      }
	      return this;
	    };

	    XMLElement.prototype.instruction = function (target, value) {
	      var i, insTarget, insValue, instruction, len;
	      if (target != null) {
	        target = target.valueOf();
	      }
	      if (value != null) {
	        value = value.valueOf();
	      }
	      if (Array.isArray(target)) {
	        for (i = 0, len = target.length; i < len; i++) {
	          insTarget = target[i];
	          this.instruction(insTarget);
	        }
	      } else if (isObject(target)) {
	        for (insTarget in target) {
	          if (!hasProp.call(target, insTarget)) continue;
	          insValue = target[insTarget];
	          this.instruction(insTarget, insValue);
	        }
	      } else {
	        if (isFunction(value)) {
	          value = value.apply();
	        }
	        instruction = new XMLProcessingInstruction(this, target, value);
	        this.instructions.push(instruction);
	      }
	      return this;
	    };

	    XMLElement.prototype.toString = function (options, level) {
	      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      ref3 = this.instructions;
	      for (i = 0, len = ref3.length; i < len; i++) {
	        instruction = ref3[i];
	        r += instruction.toString(options, level);
	      }
	      if (pretty) {
	        r += space;
	      }
	      r += '<' + this.name;
	      ref4 = this.attributes;
	      for (name in ref4) {
	        if (!hasProp.call(ref4, name)) continue;
	        att = ref4[name];
	        r += att.toString(options);
	      }
	      if (this.children.length === 0 || every(this.children, function (e) {
	        return e.value === '';
	      })) {
	        r += '/>';
	        if (pretty) {
	          r += newline;
	        }
	      } else if (pretty && this.children.length === 1 && this.children[0].value != null) {
	        r += '>';
	        r += this.children[0].value;
	        r += '</' + this.name + '>';
	        r += newline;
	      } else {
	        r += '>';
	        if (pretty) {
	          r += newline;
	        }
	        ref5 = this.children;
	        for (j = 0, len1 = ref5.length; j < len1; j++) {
	          child = ref5[j];
	          r += child.toString(options, level + 1);
	        }
	        if (pretty) {
	          r += space;
	        }
	        r += '</' + this.name + '>';
	        if (pretty) {
	          r += newline;
	        }
	      }
	      return r;
	    };

	    XMLElement.prototype.att = function (name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.ins = function (target, value) {
	      return this.instruction(target, value);
	    };

	    XMLElement.prototype.a = function (name, value) {
	      return this.attribute(name, value);
	    };

	    XMLElement.prototype.i = function (target, value) {
	      return this.instruction(target, value);
	    };

	    return XMLElement;
	  }(XMLNode);
	}).call(undefined);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayEvery = __webpack_require__(217),
	    baseEvery = __webpack_require__(218),
	    baseIteratee = __webpack_require__(224),
	    isArray = __webpack_require__(191),
	    isIterateeCall = __webpack_require__(180);

	/**
	 * Checks if `predicate` returns truthy for **all** elements of `collection`.
	 * Iteration is stopped once `predicate` returns falsey. The predicate is
	 * invoked with three arguments: (value, index|key, collection).
	 *
	 * **Note:** This method returns `true` for
	 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	 * elements of empty collections.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [predicate=_.identity] The function invoked per iteration.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 * @example
	 *
	 * _.every([true, 1, null, 'yes'], Boolean);
	 * // => false
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': false }
	 * ];
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.every(users, { 'user': 'barney', 'active': false });
	 * // => false
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.every(users, ['active', false]);
	 * // => true
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.every(users, 'active');
	 * // => false
	 */
	function every(collection, predicate, guard) {
	  var func = isArray(collection) ? arrayEvery : baseEvery;
	  if (guard && isIterateeCall(collection, predicate, guard)) {
	    predicate = undefined;
	  }
	  return func(collection, baseIteratee(predicate, 3));
	}

	module.exports = every;

/***/ },
/* 217 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.every` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = arrayEvery;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseEach = __webpack_require__(219);

	/**
	 * The base implementation of `_.every` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`
	 */
	function baseEvery(collection, predicate) {
	  var result = true;
	  baseEach(collection, function (value, index, collection) {
	    result = !!predicate(value, index, collection);
	    return result;
	  });
	  return result;
	}

	module.exports = baseEvery;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseForOwn = __webpack_require__(220),
	    createBaseEach = __webpack_require__(223);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseFor = __webpack_require__(221),
	    keys = __webpack_require__(185);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createBaseFor = __webpack_require__(222);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;

/***/ },
/* 222 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLike = __webpack_require__(181);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function (collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while (fromRight ? index-- : ++index < length) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var baseMatches = __webpack_require__(225),
	    baseMatchesProperty = __webpack_require__(271),
	    identity = __webpack_require__(173),
	    isArray = __webpack_require__(191),
	    property = __webpack_require__(287);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsMatch = __webpack_require__(226),
	    getMatchData = __webpack_require__(268),
	    matchesStrictComparable = __webpack_require__(270);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(227),
	    baseIsEqual = __webpack_require__(255);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(228),
	    stackClear = __webpack_require__(235),
	    stackDelete = __webpack_require__(236),
	    stackGet = __webpack_require__(237),
	    stackHas = __webpack_require__(238),
	    stackSet = __webpack_require__(239);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var listCacheClear = __webpack_require__(229),
	    listCacheDelete = __webpack_require__(230),
	    listCacheGet = __webpack_require__(232),
	    listCacheHas = __webpack_require__(233),
	    listCacheSet = __webpack_require__(234);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;

/***/ },
/* 229 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(231);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var eq = __webpack_require__(169);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(231);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(231);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(231);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(228);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	  this.size = 0;
	}

	module.exports = stackClear;

/***/ },
/* 236 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;

/***/ },
/* 238 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(228),
	    Map = __webpack_require__(211),
	    MapCache = __webpack_require__(240);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapCacheClear = __webpack_require__(241),
	    mapCacheDelete = __webpack_require__(249),
	    mapCacheGet = __webpack_require__(252),
	    mapCacheHas = __webpack_require__(253),
	    mapCacheSet = __webpack_require__(254);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Hash = __webpack_require__(242),
	    ListCache = __webpack_require__(228),
	    Map = __webpack_require__(211);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	module.exports = mapCacheClear;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hashClear = __webpack_require__(243),
	    hashDelete = __webpack_require__(245),
	    hashGet = __webpack_require__(246),
	    hashHas = __webpack_require__(247),
	    hashSet = __webpack_require__(248);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	    var index = -1,
	        length = entries == null ? 0 : entries.length;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(244);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(155);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;

/***/ },
/* 245 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(244);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(244);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(244);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(250);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isKeyable = __webpack_require__(251);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	module.exports = getMapData;

/***/ },
/* 251 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	module.exports = isKeyable;

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(250);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(250);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(250);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqualDeep = __webpack_require__(256),
	    isObject = __webpack_require__(164),
	    isObjectLike = __webpack_require__(190);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}

	module.exports = baseIsEqual;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(227),
	    equalArrays = __webpack_require__(257),
	    equalByTag = __webpack_require__(263),
	    equalObjects = __webpack_require__(267),
	    getTag = __webpack_require__(209),
	    isArray = __webpack_require__(191),
	    isBuffer = __webpack_require__(192),
	    isTypedArray = __webpack_require__(194);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}

	module.exports = baseIsEqualDeep;

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SetCache = __webpack_require__(258),
	    arraySome = __webpack_require__(261),
	    cacheHas = __webpack_require__(262);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(240),
	    setCacheAdd = __webpack_require__(259),
	    setCacheHas = __webpack_require__(260);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	    var index = -1,
	        length = values == null ? 0 : values.length;

	    this.__data__ = new MapCache();
	    while (++index < length) {
	        this.add(values[index]);
	    }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;

/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;

/***/ },
/* 260 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;

/***/ },
/* 261 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;

/***/ },
/* 262 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(159),
	    Uint8Array = __webpack_require__(264),
	    eq = __webpack_require__(169),
	    equalArrays = __webpack_require__(257),
	    mapToArray = __webpack_require__(265),
	    setToArray = __webpack_require__(266);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(160);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;

/***/ },
/* 265 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;

/***/ },
/* 266 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keys = __webpack_require__(185);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isStrictComparable = __webpack_require__(269),
	    keys = __webpack_require__(185);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	    var result = keys(object),
	        length = result.length;

	    while (length--) {
	        var key = result[length],
	            value = object[key];

	        result[length] = [key, value, isStrictComparable(value)];
	    }
	    return result;
	}

	module.exports = getMatchData;

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(164);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;

/***/ },
/* 270 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	module.exports = matchesStrictComparable;

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqual = __webpack_require__(255),
	    get = __webpack_require__(272),
	    hasIn = __webpack_require__(284),
	    isKey = __webpack_require__(275),
	    isStrictComparable = __webpack_require__(269),
	    matchesStrictComparable = __webpack_require__(270),
	    toKey = __webpack_require__(283);

	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(273);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(274),
	    toKey = __webpack_require__(283);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	module.exports = baseGet;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(191),
	    isKey = __webpack_require__(275),
	    stringToPath = __webpack_require__(277),
	    toString = __webpack_require__(280);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isArray = __webpack_require__(191),
	    isSymbol = __webpack_require__(276);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	module.exports = isKey;

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var baseGetTag = __webpack_require__(158),
	    isObjectLike = __webpack_require__(190);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
	}

	module.exports = isSymbol;

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoizeCapped = __webpack_require__(278);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function (string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	module.exports = stringToPath;

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoize = __webpack_require__(279);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(240);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseToString = __webpack_require__(281);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(159),
	    arrayMap = __webpack_require__(282),
	    isArray = __webpack_require__(191),
	    isSymbol = __webpack_require__(276);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = baseToString;

/***/ },
/* 282 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(276);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = toKey;

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseHasIn = __webpack_require__(285),
	    hasPath = __webpack_require__(286);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;

/***/ },
/* 285 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(274),
	    isArguments = __webpack_require__(188),
	    isArray = __webpack_require__(191),
	    isIndex = __webpack_require__(183),
	    isLength = __webpack_require__(182),
	    toKey = __webpack_require__(283);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseProperty = __webpack_require__(288),
	    basePropertyDeep = __webpack_require__(289),
	    isKey = __webpack_require__(275),
	    toKey = __webpack_require__(283);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;

/***/ },
/* 288 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(273);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLAttribute, create;

	  create = __webpack_require__(204);

	  module.exports = XMLAttribute = function () {
	    function XMLAttribute(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing attribute name of element " + parent.name);
	      }
	      if (value == null) {
	        throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
	      }
	      this.name = this.stringify.attName(name);
	      this.value = this.stringify.attValue(value);
	    }

	    XMLAttribute.prototype.clone = function () {
	      return create(XMLAttribute.prototype, this);
	    };

	    XMLAttribute.prototype.toString = function (options, level) {
	      return ' ' + this.name + '="' + this.value + '"';
	    };

	    return XMLAttribute;
	  }();
	}).call(undefined);

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLProcessingInstruction, create;

	  create = __webpack_require__(204);

	  module.exports = XMLProcessingInstruction = function () {
	    function XMLProcessingInstruction(parent, target, value) {
	      this.stringify = parent.stringify;
	      if (target == null) {
	        throw new Error("Missing instruction target");
	      }
	      this.target = this.stringify.insTarget(target);
	      if (value) {
	        this.value = this.stringify.insValue(value);
	      }
	    }

	    XMLProcessingInstruction.prototype.clone = function () {
	      return create(XMLProcessingInstruction.prototype, this);
	    };

	    XMLProcessingInstruction.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<?';
	      r += this.target;
	      if (this.value) {
	        r += ' ' + this.value;
	      }
	      r += '?>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLProcessingInstruction;
	  }();
	}).call(undefined);

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLCData,
	      XMLNode,
	      create,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(204);

	  XMLNode = __webpack_require__(207);

	  module.exports = XMLCData = function (superClass) {
	    extend(XMLCData, superClass);

	    function XMLCData(parent, text) {
	      XMLCData.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing CDATA text");
	      }
	      this.text = this.stringify.cdata(text);
	    }

	    XMLCData.prototype.clone = function () {
	      return create(XMLCData.prototype, this);
	    };

	    XMLCData.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<![CDATA[' + this.text + ']]>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLCData;
	  }(XMLNode);
	}).call(undefined);

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLComment,
	      XMLNode,
	      create,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(204);

	  XMLNode = __webpack_require__(207);

	  module.exports = XMLComment = function (superClass) {
	    extend(XMLComment, superClass);

	    function XMLComment(parent, text) {
	      XMLComment.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing comment text");
	      }
	      this.text = this.stringify.comment(text);
	    }

	    XMLComment.prototype.clone = function () {
	      return create(XMLComment.prototype, this);
	    };

	    XMLComment.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!-- ' + this.text + ' -->';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLComment;
	  }(XMLNode);
	}).call(undefined);

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

	  create = __webpack_require__(204);

	  isObject = __webpack_require__(164);

	  XMLCData = __webpack_require__(292);

	  XMLComment = __webpack_require__(293);

	  XMLDTDAttList = __webpack_require__(295);

	  XMLDTDEntity = __webpack_require__(296);

	  XMLDTDElement = __webpack_require__(297);

	  XMLDTDNotation = __webpack_require__(298);

	  XMLProcessingInstruction = __webpack_require__(291);

	  module.exports = XMLDocType = function () {
	    function XMLDocType(parent, pubID, sysID) {
	      var ref, ref1;
	      this.documentObject = parent;
	      this.stringify = this.documentObject.stringify;
	      this.children = [];
	      if (isObject(pubID)) {
	        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
	      }
	      if (sysID == null) {
	        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
	      }
	      if (pubID != null) {
	        this.pubID = this.stringify.dtdPubID(pubID);
	      }
	      if (sysID != null) {
	        this.sysID = this.stringify.dtdSysID(sysID);
	      }
	    }

	    XMLDocType.prototype.element = function (name, value) {
	      var child;
	      child = new XMLDTDElement(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.attList = function (elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      var child;
	      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.entity = function (name, value) {
	      var child;
	      child = new XMLDTDEntity(this, false, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.pEntity = function (name, value) {
	      var child;
	      child = new XMLDTDEntity(this, true, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.notation = function (name, value) {
	      var child;
	      child = new XMLDTDNotation(this, name, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.cdata = function (value) {
	      var child;
	      child = new XMLCData(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.comment = function (value) {
	      var child;
	      child = new XMLComment(this, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.instruction = function (target, value) {
	      var child;
	      child = new XMLProcessingInstruction(this, target, value);
	      this.children.push(child);
	      return this;
	    };

	    XMLDocType.prototype.root = function () {
	      return this.documentObject.root();
	    };

	    XMLDocType.prototype.document = function () {
	      return this.documentObject;
	    };

	    XMLDocType.prototype.toString = function (options, level) {
	      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!DOCTYPE ' + this.root().name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      if (this.children.length > 0) {
	        r += ' [';
	        if (pretty) {
	          r += newline;
	        }
	        ref3 = this.children;
	        for (i = 0, len = ref3.length; i < len; i++) {
	          child = ref3[i];
	          r += child.toString(options, level + 1);
	        }
	        r += ']';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    XMLDocType.prototype.ele = function (name, value) {
	      return this.element(name, value);
	    };

	    XMLDocType.prototype.att = function (elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
	    };

	    XMLDocType.prototype.ent = function (name, value) {
	      return this.entity(name, value);
	    };

	    XMLDocType.prototype.pent = function (name, value) {
	      return this.pEntity(name, value);
	    };

	    XMLDocType.prototype.not = function (name, value) {
	      return this.notation(name, value);
	    };

	    XMLDocType.prototype.dat = function (value) {
	      return this.cdata(value);
	    };

	    XMLDocType.prototype.com = function (value) {
	      return this.comment(value);
	    };

	    XMLDocType.prototype.ins = function (target, value) {
	      return this.instruction(target, value);
	    };

	    XMLDocType.prototype.up = function () {
	      return this.root();
	    };

	    XMLDocType.prototype.doc = function () {
	      return this.document();
	    };

	    return XMLDocType;
	  }();
	}).call(undefined);

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLDTDAttList, create;

	  create = __webpack_require__(204);

	  module.exports = XMLDTDAttList = function () {
	    function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
	      this.stringify = parent.stringify;
	      if (elementName == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (attributeName == null) {
	        throw new Error("Missing DTD attribute name");
	      }
	      if (!attributeType) {
	        throw new Error("Missing DTD attribute type");
	      }
	      if (!defaultValueType) {
	        throw new Error("Missing DTD attribute default");
	      }
	      if (defaultValueType.indexOf('#') !== 0) {
	        defaultValueType = '#' + defaultValueType;
	      }
	      if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
	        throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
	      }
	      if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
	        throw new Error("Default value only applies to #FIXED or #DEFAULT");
	      }
	      this.elementName = this.stringify.eleName(elementName);
	      this.attributeName = this.stringify.attName(attributeName);
	      this.attributeType = this.stringify.dtdAttType(attributeType);
	      this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
	      this.defaultValueType = defaultValueType;
	    }

	    XMLDTDAttList.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ATTLIST ' + this.elementName + ' ' + this.attributeName + ' ' + this.attributeType;
	      if (this.defaultValueType !== '#DEFAULT') {
	        r += ' ' + this.defaultValueType;
	      }
	      if (this.defaultValue) {
	        r += ' "' + this.defaultValue + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDAttList;
	  }();
	}).call(undefined);

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLDTDEntity, create, isObject;

	  create = __webpack_require__(204);

	  isObject = __webpack_require__(164);

	  module.exports = XMLDTDEntity = function () {
	    function XMLDTDEntity(parent, pe, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing entity name");
	      }
	      if (value == null) {
	        throw new Error("Missing entity value");
	      }
	      this.pe = !!pe;
	      this.name = this.stringify.eleName(name);
	      if (!isObject(value)) {
	        this.value = this.stringify.dtdEntityValue(value);
	      } else {
	        if (!value.pubID && !value.sysID) {
	          throw new Error("Public and/or system identifiers are required for an external entity");
	        }
	        if (value.pubID && !value.sysID) {
	          throw new Error("System identifier is required for a public external entity");
	        }
	        if (value.pubID != null) {
	          this.pubID = this.stringify.dtdPubID(value.pubID);
	        }
	        if (value.sysID != null) {
	          this.sysID = this.stringify.dtdSysID(value.sysID);
	        }
	        if (value.nData != null) {
	          this.nData = this.stringify.dtdNData(value.nData);
	        }
	        if (this.pe && this.nData) {
	          throw new Error("Notation declaration is not allowed in a parameter entity");
	        }
	      }
	    }

	    XMLDTDEntity.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ENTITY';
	      if (this.pe) {
	        r += ' %';
	      }
	      r += ' ' + this.name;
	      if (this.value) {
	        r += ' "' + this.value + '"';
	      } else {
	        if (this.pubID && this.sysID) {
	          r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	        } else if (this.sysID) {
	          r += ' SYSTEM "' + this.sysID + '"';
	        }
	        if (this.nData) {
	          r += ' NDATA ' + this.nData;
	        }
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDEntity;
	  }();
	}).call(undefined);

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLDTDElement, create;

	  create = __webpack_require__(204);

	  module.exports = XMLDTDElement = function () {
	    function XMLDTDElement(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing DTD element name");
	      }
	      if (!value) {
	        value = '(#PCDATA)';
	      }
	      if (Array.isArray(value)) {
	        value = '(' + value.join(',') + ')';
	      }
	      this.name = this.stringify.eleName(name);
	      this.value = this.stringify.dtdElementValue(value);
	    }

	    XMLDTDElement.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!ELEMENT ' + this.name + ' ' + this.value + '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDElement;
	  }();
	}).call(undefined);

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLDTDNotation, create;

	  create = __webpack_require__(204);

	  module.exports = XMLDTDNotation = function () {
	    function XMLDTDNotation(parent, name, value) {
	      this.stringify = parent.stringify;
	      if (name == null) {
	        throw new Error("Missing notation name");
	      }
	      if (!value.pubID && !value.sysID) {
	        throw new Error("Public or system identifiers are required for an external entity");
	      }
	      this.name = this.stringify.eleName(name);
	      if (value.pubID != null) {
	        this.pubID = this.stringify.dtdPubID(value.pubID);
	      }
	      if (value.sysID != null) {
	        this.sysID = this.stringify.dtdSysID(value.sysID);
	      }
	    }

	    XMLDTDNotation.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += '<!NOTATION ' + this.name;
	      if (this.pubID && this.sysID) {
	        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
	      } else if (this.pubID) {
	        r += ' PUBLIC "' + this.pubID + '"';
	      } else if (this.sysID) {
	        r += ' SYSTEM "' + this.sysID + '"';
	      }
	      r += '>';
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLDTDNotation;
	  }();
	}).call(undefined);

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLNode,
	      XMLRaw,
	      create,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(204);

	  XMLNode = __webpack_require__(207);

	  module.exports = XMLRaw = function (superClass) {
	    extend(XMLRaw, superClass);

	    function XMLRaw(parent, text) {
	      XMLRaw.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing raw text");
	      }
	      this.value = this.stringify.raw(text);
	    }

	    XMLRaw.prototype.clone = function () {
	      return create(XMLRaw.prototype, this);
	    };

	    XMLRaw.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLRaw;
	  }(XMLNode);
	}).call(undefined);

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Generated by CoffeeScript 1.9.1
	(function () {
	  var XMLNode,
	      XMLText,
	      create,
	      extend = function extend(child, parent) {
	    for (var key in parent) {
	      if (hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  },
	      hasProp = {}.hasOwnProperty;

	  create = __webpack_require__(204);

	  XMLNode = __webpack_require__(207);

	  module.exports = XMLText = function (superClass) {
	    extend(XMLText, superClass);

	    function XMLText(parent, text) {
	      XMLText.__super__.constructor.call(this, parent);
	      if (text == null) {
	        throw new Error("Missing element text");
	      }
	      this.value = this.stringify.eleText(text);
	    }

	    XMLText.prototype.clone = function () {
	      return create(XMLText.prototype, this);
	    };

	    XMLText.prototype.toString = function (options, level) {
	      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
	      pretty = (options != null ? options.pretty : void 0) || false;
	      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
	      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
	      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
	      level || (level = 0);
	      space = new Array(level + offset + 1).join(indent);
	      r = '';
	      if (pretty) {
	        r += space;
	      }
	      r += this.value;
	      if (pretty) {
	        r += newline;
	      }
	      return r;
	    };

	    return XMLText;
	  }(XMLNode);
	}).call(undefined);

/***/ },
/* 301 */
/***/ function(module, exports) {

	"use strict";

	// Generated by CoffeeScript 1.10.0
	(function () {
	  "use strict";

	  exports.stripBOM = function (str) {
	    if (str[0] === "\uFEFF") {
	      return str.substring(1);
	    } else {
	      return str;
	    }
	  };
	}).call(undefined);

/***/ },
/* 302 */
/***/ function(module, exports) {

	'use strict';

	// Generated by CoffeeScript 1.10.0
	(function () {
	  "use strict";

	  var prefixMatch;

	  prefixMatch = new RegExp(/(?!xmlns)^.*:/);

	  exports.normalize = function (str) {
	    return str.toLowerCase();
	  };

	  exports.firstCharLowerCase = function (str) {
	    return str.charAt(0).toLowerCase() + str.slice(1);
	  };

	  exports.stripPrefix = function (str) {
	    return str.replace(prefixMatch, '');
	  };

	  exports.parseNumbers = function (str) {
	    if (!isNaN(str)) {
	      str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
	    }
	    return str;
	  };

	  exports.parseBooleans = function (str) {
	    if (/^(?:true|false)$/i.test(str)) {
	      str = str.toLowerCase() === 'true';
	    }
	    return str;
	  };
	}).call(undefined);

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/*
	 * php api => https://github.com/metowolf/TencentMusicApi/blob/master/TencentMusicAPI.php
	 */

	var querystring = __webpack_require__(142);
	var origin = 'http://y.qq.com/';
	var S = __webpack_require__(304);
	__webpack_require__(145);

	var header = {
	  Origin: origin,
	  Referer: origin
	};

	var getSongNew = function getSongNew(mid, sizekey) {
	  return new Promise(function (resolve, reject) {
	    var guid = Math.floor(Math.random() * 1000000000);
	    fetch('https://c.y.qq.com/base/fcgi-bin/fcg_musicexpress.fcg?json=3&guid=' + guid.toString()).then(function (res) {
	      return res.text();
	    }).then(function (text) {
	      text = text.replace('jsonCallback(', '').trim();
	      text = text.substr(0, text.length - 2);
	      return Promise.resolve(JSON.parse(text));
	    }).then(function (json) {
	      var key = json.key;
	      var perfix = '';
	      if (sizekey === 'size128') {
	        perfix = 'M500';
	      } else if (sizekey === 'size320') {
	        perfix = 'M800';
	      }
	      var url = 'http://dl.stream.qqmusic.qq.com/' + perfix + mid + '.mp3?vkey=' + key + '&guid=' + guid + '&fromtag=30';
	      resolve({
	        success: true,
	        url: url
	      });
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	var generateKey = function generateKey(mid) {
	  var url = 'http://c.y.qq.com/v8/fcg-bin/fcg_play_single_song.fcg?';
	  var query = {
	    'songmid': mid,
	    'format': 'json'
	  };
	  return new Promise(function (resolve, reject) {
	    fetch('' + url + querystring.stringify(query)).then(function (res) {
	      return res.json();
	    }).then(function (d) {
	      var data = d.data[0].file;
	      if (data.size_320mp3) {
	        resolve('size320');
	      } else if (data.size_128mp3) {
	        resolve('size128');
	      }
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: 'no song is found with current id, play check qq song id'
	      });
	    });
	  });
	};

	var getSong = function getSong(mid, raw) {
	  return new Promise(function (resolve, reject) {
	    generateKey(mid).then(function (size) {
	      return getSongNew(mid, size);
	    }).then(function (data) {
	      return resolve(data);
	    }).catch(function (err) {
	      return reject(err);
	    });
	  });
	};

	var searchSong = function searchSong(key, limit, page, raw) {
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
	    fetch('' + url + querystring.stringify(query), {
	      mode: 'no-cors'
	    }).then(function (res) {
	      return res.text();
	    }).then(function (text) {
	      if (text.substr(0, 8) === 'callback') {
	        text = text.replace('callback(', '');
	        var json = JSON.parse(text.substr(0, text.length - 1));
	        if (!raw) {
	          var songList = json.data.song.list.map(function (item) {
	            return {
	              album: {
	                id: item.albumid,
	                cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + item.albummid + '.jpg',
	                name: item.albumname
	              },
	              artists: item.singer.map(function (i) {
	                return { id: i.mid, name: i.name };
	              }),
	              name: item.songname,
	              id: item.songmid
	            };
	          });
	          var obj = {
	            success: true,
	            total: json.data.song.totalnum,
	            songList: songList
	          };
	          console.log('---------------');
	          resolve(obj);
	        } else {
	          resolve(json);
	        }
	      }
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	var searchPlaylist = function searchPlaylist(key, limit, page, raw) {
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
	    fetch('' + url + querystring.stringify(query), {
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (d) {
	      if (raw) {
	        resolve(d.data);
	      } else {
	        var json = d.data;
	        var playlists = json.list.map(function (item) {
	          return {
	            id: item.dissid,
	            cover: item.imgurl,
	            name: S(item.dissname).decodeHTMLEntities().stripTags().s,
	            author: {
	              name: item.creator.name,
	              id: parseInt(item.creator.creator_uin),
	              avatar: item.creator.avatarUrl
	            }
	          };
	        });
	        var obj = {
	          success: true,
	          total: json.sum,
	          playlists: playlists
	        };
	        resolve(obj);
	      }
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	var searchAlbum = function searchAlbum(key, limit, page, raw) {
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
	    fetch('' + url + querystring.stringify(query), {
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (d) {
	      if (raw) {
	        resolve(d.data);
	      } else {
	        var json = d.data.album;
	        var albumList = json.list.map(function (item) {
	          return {
	            id: item.albumMID,
	            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + item.albumMID + '.jpg',
	            name: item.albumName,
	            artist: {
	              name: item.singerName,
	              id: item.singerMID
	            }
	          };
	        });
	        var obj = {
	          success: true,
	          total: json.totalnum,
	          albumList: albumList
	        };
	        resolve(obj);
	      }
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        err: err || 'problem in search qq album, try query with raw=true'
	      });
	    });
	  });
	};

	var getAlbum = function getAlbum(mid, raw) {
	  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg?';
	  var query = {
	    albummid: mid,
	    format: 'json',
	    inCharset: 'utf8',
	    outCharset: 'utf-8',
	    platform: 'yqq'
	  };
	  return new Promise(function (resolve, reject) {
	    fetch('' + url + querystring.stringify(query), {
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      }
	    }).then(function (res) {
	      return res.json();
	    }).then(function (d) {
	      if (raw) {
	        resolve(d);
	      }
	      var ab = d.data;
	      var songList = ab.list.map(function (item) {
	        return {
	          id: item.songmid,
	          name: item.songname,
	          artist: item.singer.map(function (i) {
	            return { id: i.mid, name: i.name };
	          })
	        };
	      });
	      var obj = {
	        success: true,
	        name: ab.name,
	        id: ab.mid,
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + ab.mid + '.jpg',
	        artist: {
	          name: ab.singername,
	          id: ab.singermid
	        },
	        songList: songList
	      };
	      resolve(obj);
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: 'no qq album found with current id, please try with raw=true !'
	      });
	    });
	  });
	};

	var getPlaylist = function getPlaylist(disstid, raw) {
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
	    fetch('' + url + querystring.stringify(query), {
	      headers: {
	        Referer: 'https://y.qq.com/portal/search.html',
	        Host: 'c.y.qq.com'
	      }
	    }).then(function (res) {
	      return res.text();
	    }).then(function (text) {
	      text = text.substr(13);
	      text = text.substr(0, text.length - 1);
	      return Promise.resolve(JSON.parse(text));
	    }).then(function (pl) {
	      if (raw) {
	        resolve(pl);
	      }
	      var songList = pl.songlist.map(function (item) {
	        return {
	          id: item.songid,
	          name: item.songname,
	          artist: item.singer.map(function (i) {
	            return { id: i.mid, name: i.name };
	          }),
	          album: {
	            id: item.albummid,
	            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000' + item.albummid + '.jpg',
	            name: item.albumname
	          }
	        };
	      });
	      var obj = {
	        success: true,
	        name: null,
	        id: pl.disstid,
	        cover: null,
	        author: {
	          id: null,
	          name: null,
	          avatar: null
	        },
	        songList: songList
	      };
	      resolve(obj);
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: 'your qq playlist id is not correct or data mapping is not correct, try query with raw=true'
	      });
	    });
	  });
	};

	//网页版搜索建议
	var searchSuggestion = function searchSuggestion(key) {
	  var url = 'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?format=json&key=' + key + '&platform=yqq';
	  return new Promise(function (resolve, reject) {
	    fetch(url).then(function (res) {
	      return res.json();
	    }).then(function (json) {
	      return resolve(json);
	    }).catch(function (err) {
	      return reject({
	        success: false,
	        message: err
	      });
	    });
	  });
	};

	module.exports = {
	  searchSong: searchSong,
	  searchPlaylist: searchPlaylist,
	  searchAlbum: searchAlbum,
	  getSong: getSong,
	  getAlbum: getAlbum,
	  getPlaylist: getPlaylist
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	string.js - Copyright (C) 2012-2014, JP Richardson <jprichardson@gmail.com>
	*/

	!function () {
	  "use strict";

	  var VERSION = '3.3.3';

	  var ENTITIES = {};

	  // from http://semplicewebsites.com/removing-accents-javascript
	  var latin_map = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "ẞ": "SS", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ß": "ss", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };

	  //******************************************************************************
	  // Added an initialize function which is essentially the code from the S
	  // constructor.  Now, the S constructor calls this and a new method named
	  // setValue calls it as well.  The setValue function allows constructors for
	  // modules that extend string.js to set the initial value of an object without
	  // knowing the internal workings of string.js.
	  //
	  // Also, all methods which return a new S object now call:
	  //
	  //      return new this.constructor(s);
	  //
	  // instead of:
	  //
	  //      return new S(s);
	  //
	  // This allows extended objects to keep their proper instanceOf and constructor.
	  //******************************************************************************

	  function initialize(object, s) {
	    if (s !== null && s !== undefined) {
	      if (typeof s === 'string') object.s = s;else object.s = s.toString();
	    } else {
	      object.s = s; //null or undefined
	    }

	    object.orig = s; //original object, currently only used by toCSV() and toBoolean()

	    if (s !== null && s !== undefined) {
	      if (object.__defineGetter__) {
	        object.__defineGetter__('length', function () {
	          return object.s.length;
	        });
	      } else {
	        object.length = s.length;
	      }
	    } else {
	      object.length = -1;
	    }
	  }

	  function S(s) {
	    initialize(this, s);
	  }

	  var __nsp = String.prototype;
	  var __sp = S.prototype = {

	    between: function between(left, right) {
	      var s = this.s;
	      var startPos = s.indexOf(left);
	      var endPos = s.indexOf(right, startPos + left.length);
	      if (endPos == -1 && right != null) return new this.constructor('');else if (endPos == -1 && right == null) return new this.constructor(s.substring(startPos + left.length));else return new this.constructor(s.slice(startPos + left.length, endPos));
	    },

	    //# modified slightly from https://github.com/epeli/underscore.string
	    camelize: function camelize() {
	      var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function (mathc, sep, c) {
	        return c ? c.toUpperCase() : '';
	      });
	      return new this.constructor(s);
	    },

	    capitalize: function capitalize() {
	      return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase());
	    },

	    charAt: function charAt(index) {
	      return this.s.charAt(index);
	    },

	    chompLeft: function chompLeft(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        s = s.slice(prefix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },

	    chompRight: function chompRight(suffix) {
	      if (this.endsWith(suffix)) {
	        var s = this.s;
	        s = s.slice(0, s.length - suffix.length);
	        return new this.constructor(s);
	      } else {
	        return this;
	      }
	    },

	    //#thanks Google
	    collapseWhitespace: function collapseWhitespace() {
	      var s = this.s.replace(/[\s\xa0]+/g, ' ').replace(/^\s+|\s+$/g, '');
	      return new this.constructor(s);
	    },

	    contains: function contains(ss) {
	      return this.s.indexOf(ss) >= 0;
	    },

	    count: function count(ss) {
	      return __webpack_require__(305)(this.s, ss);
	    },

	    //#modified from https://github.com/epeli/underscore.string
	    dasherize: function dasherize() {
	      var s = this.trim().s.replace(/[_\s]+/g, '-').replace(/([A-Z])/g, '-$1').replace(/-+/g, '-').toLowerCase();
	      return new this.constructor(s);
	    },

	    equalsIgnoreCase: function equalsIgnoreCase(prefix) {
	      var s = this.s;
	      return s.toLowerCase() == prefix.toLowerCase();
	    },

	    latinise: function latinise() {
	      var s = this.replace(/[^A-Za-z0-9\[\] ]/g, function (x) {
	        return latin_map[x] || x;
	      });
	      return new this.constructor(s);
	    },

	    decodeHtmlEntities: function decodeHtmlEntities() {
	      //https://github.com/substack/node-ent/blob/master/index.js
	      var s = this.s;
	      s = s.replace(/&#(\d+);?/g, function (_, code) {
	        return String.fromCharCode(code);
	      }).replace(/&#[xX]([A-Fa-f0-9]+);?/g, function (_, hex) {
	        return String.fromCharCode(parseInt(hex, 16));
	      }).replace(/&([^;\W]+;?)/g, function (m, e) {
	        var ee = e.replace(/;$/, '');
	        var target = ENTITIES[e] || e.match(/;$/) && ENTITIES[ee];

	        if (typeof target === 'number') {
	          return String.fromCharCode(target);
	        } else if (typeof target === 'string') {
	          return target;
	        } else {
	          return m;
	        }
	      });

	      return new this.constructor(s);
	    },

	    endsWith: function endsWith() {
	      var suffixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < suffixes.length; ++i) {
	        var l = this.s.length - suffixes[i].length;
	        if (l >= 0 && this.s.indexOf(suffixes[i], l) === l) return true;
	      }
	      return false;
	    },

	    escapeHTML: function escapeHTML() {
	      //from underscore.string
	      return new this.constructor(this.s.replace(/[&<>"']/g, function (m) {
	        return '&' + reversedEscapeChars[m] + ';';
	      }));
	    },

	    ensureLeft: function ensureLeft(prefix) {
	      var s = this.s;
	      if (s.indexOf(prefix) === 0) {
	        return this;
	      } else {
	        return new this.constructor(prefix + s);
	      }
	    },

	    ensureRight: function ensureRight(suffix) {
	      var s = this.s;
	      if (this.endsWith(suffix)) {
	        return this;
	      } else {
	        return new this.constructor(s + suffix);
	      }
	    },

	    humanize: function humanize() {
	      //modified from underscore.string
	      if (this.s === null || this.s === undefined) return new this.constructor('');
	      var s = this.underscore().replace(/_id$/, '').replace(/_/g, ' ').trim().capitalize();
	      return new this.constructor(s);
	    },

	    isAlpha: function isAlpha() {
	      return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase());
	    },

	    isAlphaNumeric: function isAlphaNumeric() {
	      return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase());
	    },

	    isEmpty: function isEmpty() {
	      return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s);
	    },

	    isLower: function isLower() {
	      return this.isAlpha() && this.s.toLowerCase() === this.s;
	    },

	    isNumeric: function isNumeric() {
	      return !/[^0-9]/.test(this.s);
	    },

	    isUpper: function isUpper() {
	      return this.isAlpha() && this.s.toUpperCase() === this.s;
	    },

	    left: function left(N) {
	      if (N >= 0) {
	        var s = this.s.substr(0, N);
	        return new this.constructor(s);
	      } else {
	        return this.right(-N);
	      }
	    },

	    lines: function lines() {
	      //convert windows newlines to unix newlines then convert to an Array of lines
	      return this.replaceAll('\r\n', '\n').s.split('\n');
	    },

	    pad: function pad(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      len = len - this.s.length;
	      var left = Array(Math.ceil(len / 2) + 1).join(ch);
	      var right = Array(Math.floor(len / 2) + 1).join(ch);
	      return new this.constructor(left + this.s + right);
	    },

	    padLeft: function padLeft(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s);
	    },

	    padRight: function padRight(len, ch) {
	      //https://github.com/component/pad
	      if (ch == null) ch = ' ';
	      if (this.s.length >= len) return new this.constructor(this.s);
	      return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch));
	    },

	    parseCSV: function parseCSV(delimiter, qualifier, escape, lineDelimiter) {
	      //try to parse no matter what
	      delimiter = delimiter || ',';
	      escape = escape || '\\';
	      if (typeof qualifier == 'undefined') qualifier = '"';

	      var i = 0,
	          fieldBuffer = [],
	          fields = [],
	          len = this.s.length,
	          inField = false,
	          inUnqualifiedString = false,
	          self = this;
	      var ca = function ca(i) {
	        return self.s.charAt(i);
	      };
	      if (typeof lineDelimiter !== 'undefined') var rows = [];

	      if (!qualifier) inField = true;

	      while (i < len) {
	        var current = ca(i);
	        switch (current) {
	          case escape:
	            //fix for issues #32 and #35
	            if (inField && (escape !== qualifier || ca(i + 1) === qualifier)) {
	              i += 1;
	              fieldBuffer.push(ca(i));
	              break;
	            }
	            if (escape !== qualifier) break;
	          case qualifier:
	            inField = !inField;
	            break;
	          case delimiter:
	            if (inUnqualifiedString) {
	              inField = false;
	              inUnqualifiedString = false;
	            }
	            if (inField && qualifier) fieldBuffer.push(current);else {
	              fields.push(fieldBuffer.join(''));
	              fieldBuffer.length = 0;
	            }
	            break;
	          case lineDelimiter:
	            if (inUnqualifiedString) {
	              inField = false;
	              inUnqualifiedString = false;
	              fields.push(fieldBuffer.join(''));
	              rows.push(fields);
	              fields = [];
	              fieldBuffer.length = 0;
	            } else if (inField) {
	              fieldBuffer.push(current);
	            } else {
	              if (rows) {
	                fields.push(fieldBuffer.join(''));
	                rows.push(fields);
	                fields = [];
	                fieldBuffer.length = 0;
	              }
	            }
	            break;
	          case ' ':
	            if (inField) fieldBuffer.push(current);
	            break;
	          default:
	            if (inField) fieldBuffer.push(current);else if (current !== qualifier) {
	              fieldBuffer.push(current);
	              inField = true;
	              inUnqualifiedString = true;
	            }
	            break;
	        }
	        i += 1;
	      }

	      fields.push(fieldBuffer.join(''));
	      if (rows) {
	        rows.push(fields);
	        return rows;
	      }
	      return fields;
	    },

	    replaceAll: function replaceAll(ss, r) {
	      //var s = this.s.replace(new RegExp(ss, 'g'), r);
	      var s = this.s.split(ss).join(r);
	      return new this.constructor(s);
	    },

	    splitLeft: function splitLeft(sep, maxSplit, limit) {
	      return __webpack_require__(306)(this.s, sep, maxSplit, limit);
	    },

	    splitRight: function splitRight(sep, maxSplit, limit) {
	      return __webpack_require__(307)(this.s, sep, maxSplit, limit);
	    },

	    strip: function strip() {
	      var ss = this.s;
	      for (var i = 0, n = arguments.length; i < n; i++) {
	        ss = ss.split(arguments[i]).join('');
	      }
	      return new this.constructor(ss);
	    },

	    stripLeft: function stripLeft(chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);

	      if (chars === undefined) {
	        pattern = /^\s+/g;
	      } else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("^[" + regex + "]+", "g");
	      }

	      return new this.constructor(ss.replace(pattern, ""));
	    },

	    stripRight: function stripRight(chars) {
	      var regex;
	      var pattern;
	      var ss = ensureString(this.s);

	      if (chars === undefined) {
	        pattern = /\s+$/g;
	      } else {
	        regex = escapeRegExp(chars);
	        pattern = new RegExp("[" + regex + "]+$", "g");
	      }

	      return new this.constructor(ss.replace(pattern, ""));
	    },

	    right: function right(N) {
	      if (N >= 0) {
	        var s = this.s.substr(this.s.length - N, N);
	        return new this.constructor(s);
	      } else {
	        return this.left(-N);
	      }
	    },

	    setValue: function setValue(s) {
	      initialize(this, s);
	      return this;
	    },

	    slugify: function slugify() {
	      var sl = new S(new S(this.s).latinise().s.replace(/[^\w\s-]/g, '').toLowerCase()).dasherize().s;
	      if (sl.charAt(0) === '-') sl = sl.substr(1);
	      return new this.constructor(sl);
	    },

	    startsWith: function startsWith() {
	      var prefixes = Array.prototype.slice.call(arguments, 0);
	      for (var i = 0; i < prefixes.length; ++i) {
	        if (this.s.lastIndexOf(prefixes[i], 0) === 0) return true;
	      }
	      return false;
	    },

	    stripPunctuation: function stripPunctuation() {
	      //return new this.constructor(this.s.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""));
	      return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
	    },

	    stripTags: function stripTags() {
	      //from sugar.js
	      var s = this.s,
	          args = arguments.length > 0 ? arguments : [''];
	      multiArgs(args, function (tag) {
	        s = s.replace(RegExp('<\/?' + tag + '[^<>]*>', 'gi'), '');
	      });
	      return new this.constructor(s);
	    },

	    template: function template(values, opening, closing) {
	      var s = this.s;
	      var opening = opening || Export.TMPL_OPEN;
	      var closing = closing || Export.TMPL_CLOSE;

	      var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
	      var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, '\\$');
	      var r = new RegExp(open + '(.+?)' + close, 'g');
	      //, r = /\{\{(.+?)\}\}/g
	      var matches = s.match(r) || [];

	      matches.forEach(function (match) {
	        var key = match.substring(opening.length, match.length - closing.length).trim(); //chop {{ and }}
	        var value = typeof values[key] == 'undefined' ? '' : values[key];
	        s = s.replace(match, value);
	      });
	      return new this.constructor(s);
	    },

	    times: function times(n) {
	      return new this.constructor(new Array(n + 1).join(this.s));
	    },

	    titleCase: function titleCase() {
	      var s = this.s;
	      if (s) {
	        s = s.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g, function ($1) {
	          return $1.toUpperCase();
	        });
	      }
	      return new this.constructor(s);
	    },

	    toBoolean: function toBoolean() {
	      if (typeof this.orig === 'string') {
	        var s = this.s.toLowerCase();
	        return s === 'true' || s === 'yes' || s === 'on' || s === '1';
	      } else return this.orig === true || this.orig === 1;
	    },

	    toFloat: function toFloat(precision) {
	      var num = parseFloat(this.s);
	      if (precision) return parseFloat(num.toFixed(precision));else return num;
	    },

	    toInt: function toInt() {
	      //thanks Google
	      // If the string starts with '0x' or '-0x', parse as hex.
	      return (/^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10)
	      );
	    },

	    trim: function trim() {
	      var s;
	      if (typeof __nsp.trim === 'undefined') s = this.s.replace(/(^\s*|\s*$)/g, '');else s = this.s.trim();
	      return new this.constructor(s);
	    },

	    trimLeft: function trimLeft() {
	      var s;
	      if (__nsp.trimLeft) s = this.s.trimLeft();else s = this.s.replace(/(^\s*)/g, '');
	      return new this.constructor(s);
	    },

	    trimRight: function trimRight() {
	      var s;
	      if (__nsp.trimRight) s = this.s.trimRight();else s = this.s.replace(/\s+$/, '');
	      return new this.constructor(s);
	    },

	    truncate: function truncate(length, pruneStr) {
	      //from underscore.string, author: github.com/rwz
	      var str = this.s;

	      length = ~~length;
	      pruneStr = pruneStr || '...';

	      if (str.length <= length) return new this.constructor(str);

	      var tmpl = function tmpl(c) {
	        return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
	      },
	          template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

	      if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, '');else template = new S(template.slice(0, template.length - 1)).trimRight().s;

	      return (template + pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length) + pruneStr);
	    },

	    toCSV: function toCSV() {
	      var delim = ',',
	          qualifier = '"',
	          escape = '\\',
	          encloseNumbers = true,
	          keys = false;
	      var dataArray = [];

	      function hasVal(it) {
	        return it !== null && it !== '';
	      }

	      if (_typeof(arguments[0]) === 'object') {
	        delim = arguments[0].delimiter || delim;
	        delim = arguments[0].separator || delim;
	        qualifier = arguments[0].qualifier || qualifier;
	        encloseNumbers = !!arguments[0].encloseNumbers;
	        escape = arguments[0].escape || escape;
	        keys = !!arguments[0].keys;
	      } else if (typeof arguments[0] === 'string') {
	        delim = arguments[0];
	      }

	      if (typeof arguments[1] === 'string') qualifier = arguments[1];

	      if (arguments[1] === null) qualifier = null;

	      if (this.orig instanceof Array) dataArray = this.orig;else {
	        //object
	        for (var key in this.orig) {
	          if (this.orig.hasOwnProperty(key)) if (keys) dataArray.push(key);else dataArray.push(this.orig[key]);
	        }
	      }

	      var rep = escape + qualifier;
	      var buildString = [];
	      for (var i = 0; i < dataArray.length; ++i) {
	        var shouldQualify = hasVal(qualifier);
	        if (typeof dataArray[i] == 'number') shouldQualify &= encloseNumbers;

	        if (shouldQualify) buildString.push(qualifier);

	        if (dataArray[i] !== null && dataArray[i] !== undefined) {
	          var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
	          buildString.push(d);
	        } else buildString.push('');

	        if (shouldQualify) buildString.push(qualifier);

	        if (delim) buildString.push(delim);
	      }

	      //chop last delim
	      //console.log(buildString.length)
	      buildString.length = buildString.length - 1;
	      return new this.constructor(buildString.join(''));
	    },

	    toString: function toString() {
	      return this.s;
	    },

	    //#modified from https://github.com/epeli/underscore.string
	    underscore: function underscore() {
	      var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/([A-Z\d]+)([A-Z][a-z])/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
	      return new this.constructor(s);
	    },

	    unescapeHTML: function unescapeHTML() {
	      //from underscore.string
	      return new this.constructor(this.s.replace(/\&([^;]+);/g, function (entity, entityCode) {
	        var match;

	        if (entityCode in escapeChars) {
	          return escapeChars[entityCode];
	        } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
	          return String.fromCharCode(parseInt(match[1], 16));
	        } else if (match = entityCode.match(/^#(\d+)$/)) {
	          return String.fromCharCode(~~match[1]);
	        } else {
	          return entity;
	        }
	      }));
	    },

	    valueOf: function valueOf() {
	      return this.s.valueOf();
	    },

	    //#Added a New Function called wrapHTML.
	    wrapHTML: function wrapHTML(tagName, tagAttrs) {
	      var s = this.s,
	          el = tagName == null ? 'span' : tagName,
	          elAttr = '',
	          wrapped = '';
	      if ((typeof tagAttrs === "undefined" ? "undefined" : _typeof(tagAttrs)) == 'object') for (var prop in tagAttrs) {
	        elAttr += ' ' + prop + '="' + new this.constructor(tagAttrs[prop]).escapeHTML() + '"';
	      }s = wrapped.concat('<', el, elAttr, '>', this, '</', el, '>');
	      return new this.constructor(s);
	    }
	  };

	  var methodsAdded = [];
	  function extendPrototype() {
	    for (var name in __sp) {
	      (function (name) {
	        var func = __sp[name];
	        if (!__nsp.hasOwnProperty(name)) {
	          methodsAdded.push(name);
	          __nsp[name] = function () {
	            String.prototype.s = this;
	            return func.apply(this, arguments);
	          };
	        }
	      })(name);
	    }
	  }

	  function restorePrototype() {
	    for (var i = 0; i < methodsAdded.length; ++i) {
	      delete String.prototype[methodsAdded[i]];
	    }methodsAdded.length = 0;
	  }

	  /*************************************
	  /* Attach Native JavaScript String Properties
	  /*************************************/

	  var nativeProperties = getNativeStringProperties();
	  for (var name in nativeProperties) {
	    (function (name) {
	      var stringProp = __nsp[name];
	      if (typeof stringProp == 'function') {
	        //console.log(stringProp)
	        if (!__sp[name]) {
	          if (nativeProperties[name] === 'string') {
	            __sp[name] = function () {
	              //console.log(name)
	              return new this.constructor(stringProp.apply(this, arguments));
	            };
	          } else {
	            __sp[name] = stringProp;
	          }
	        }
	      }
	    })(name);
	  }

	  /*************************************
	  /* Function Aliases
	  /*************************************/

	  __sp.repeat = __sp.times;
	  __sp.include = __sp.contains;
	  __sp.toInteger = __sp.toInt;
	  __sp.toBool = __sp.toBoolean;
	  __sp.decodeHTMLEntities = __sp.decodeHtmlEntities; //ensure consistent casing scheme of 'HTML'


	  //******************************************************************************
	  // Set the constructor.  Without this, string.js objects are instances of
	  // Object instead of S.
	  //******************************************************************************

	  __sp.constructor = S;

	  /*************************************
	  /* Private Functions
	  /*************************************/

	  function getNativeStringProperties() {
	    var names = getNativeStringPropertyNames();
	    var retObj = {};

	    for (var i = 0; i < names.length; ++i) {
	      var name = names[i];
	      if (name === 'to' || name === 'toEnd') continue; // get rid of the shelljs prototype messup
	      var func = __nsp[name];
	      try {
	        var type = _typeof(func.apply('teststring'));
	        retObj[name] = type;
	      } catch (e) {}
	    }
	    return retObj;
	  }

	  function getNativeStringPropertyNames() {
	    var results = [];
	    if (Object.getOwnPropertyNames) {
	      results = Object.getOwnPropertyNames(__nsp);
	      results.splice(results.indexOf('valueOf'), 1);
	      results.splice(results.indexOf('toString'), 1);
	      return results;
	    } else {
	      //meant for legacy cruft, this could probably be made more efficient
	      var stringNames = {};
	      var objectNames = [];
	      for (var name in String.prototype) {
	        stringNames[name] = name;
	      }for (var name in Object.prototype) {
	        delete stringNames[name];
	      } //stringNames['toString'] = 'toString'; //this was deleted with the rest of the object names
	      for (var name in stringNames) {
	        results.push(name);
	      }
	      return results;
	    }
	  }

	  function Export(str) {
	    return new S(str);
	  };

	  //attach exports to StringJSWrapper
	  Export.extendPrototype = extendPrototype;
	  Export.restorePrototype = restorePrototype;
	  Export.VERSION = VERSION;
	  Export.TMPL_OPEN = '{{';
	  Export.TMPL_CLOSE = '}}';
	  Export.ENTITIES = ENTITIES;

	  /*************************************
	  /* Exports
	  /*************************************/

	  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	    module.exports = Export;
	  } else {

	    if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return Export;
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	      window.S = Export;
	    }
	  }

	  /*************************************
	  /* 3rd Party Private Functions
	  /*************************************/

	  //from sugar.js
	  function multiArgs(args, fn) {
	    var result = [],
	        i;
	    for (i = 0; i < args.length; i++) {
	      result.push(args[i]);
	      if (fn) fn.call(args, args[i], i);
	    }
	    return result;
	  }

	  //from underscore.string
	  var escapeChars = {
	    lt: '<',
	    gt: '>',
	    quot: '"',
	    apos: "'",
	    amp: '&'
	  };

	  function escapeRegExp(s) {
	    // most part from https://github.com/skulpt/skulpt/blob/ecaf75e69c2e539eff124b2ab45df0b01eaf2295/src/str.js#L242
	    var c;
	    var i;
	    var ret = [];
	    var re = /^[A-Za-z0-9]+$/;
	    s = ensureString(s);
	    for (i = 0; i < s.length; ++i) {
	      c = s.charAt(i);

	      if (re.test(c)) {
	        ret.push(c);
	      } else {
	        if (c === "\\000") {
	          ret.push("\\000");
	        } else {
	          ret.push("\\" + c);
	        }
	      }
	    }
	    return ret.join("");
	  }

	  function ensureString(string) {
	    return string == null ? '' : '' + string;
	  }

	  //from underscore.string
	  var reversedEscapeChars = {};
	  for (var key in escapeChars) {
	    reversedEscapeChars[escapeChars[key]] = key;
	  }

	  ENTITIES = {
	    "amp": "&",
	    "gt": ">",
	    "lt": "<",
	    "quot": "\"",
	    "apos": "'",
	    "AElig": 198,
	    "Aacute": 193,
	    "Acirc": 194,
	    "Agrave": 192,
	    "Aring": 197,
	    "Atilde": 195,
	    "Auml": 196,
	    "Ccedil": 199,
	    "ETH": 208,
	    "Eacute": 201,
	    "Ecirc": 202,
	    "Egrave": 200,
	    "Euml": 203,
	    "Iacute": 205,
	    "Icirc": 206,
	    "Igrave": 204,
	    "Iuml": 207,
	    "Ntilde": 209,
	    "Oacute": 211,
	    "Ocirc": 212,
	    "Ograve": 210,
	    "Oslash": 216,
	    "Otilde": 213,
	    "Ouml": 214,
	    "THORN": 222,
	    "Uacute": 218,
	    "Ucirc": 219,
	    "Ugrave": 217,
	    "Uuml": 220,
	    "Yacute": 221,
	    "aacute": 225,
	    "acirc": 226,
	    "aelig": 230,
	    "agrave": 224,
	    "aring": 229,
	    "atilde": 227,
	    "auml": 228,
	    "ccedil": 231,
	    "eacute": 233,
	    "ecirc": 234,
	    "egrave": 232,
	    "eth": 240,
	    "euml": 235,
	    "iacute": 237,
	    "icirc": 238,
	    "igrave": 236,
	    "iuml": 239,
	    "ntilde": 241,
	    "oacute": 243,
	    "ocirc": 244,
	    "ograve": 242,
	    "oslash": 248,
	    "otilde": 245,
	    "ouml": 246,
	    "szlig": 223,
	    "thorn": 254,
	    "uacute": 250,
	    "ucirc": 251,
	    "ugrave": 249,
	    "uuml": 252,
	    "yacute": 253,
	    "yuml": 255,
	    "copy": 169,
	    "reg": 174,
	    "nbsp": 160,
	    "iexcl": 161,
	    "cent": 162,
	    "pound": 163,
	    "curren": 164,
	    "yen": 165,
	    "brvbar": 166,
	    "sect": 167,
	    "uml": 168,
	    "ordf": 170,
	    "laquo": 171,
	    "not": 172,
	    "shy": 173,
	    "macr": 175,
	    "deg": 176,
	    "plusmn": 177,
	    "sup1": 185,
	    "sup2": 178,
	    "sup3": 179,
	    "acute": 180,
	    "micro": 181,
	    "para": 182,
	    "middot": 183,
	    "cedil": 184,
	    "ordm": 186,
	    "raquo": 187,
	    "frac14": 188,
	    "frac12": 189,
	    "frac34": 190,
	    "iquest": 191,
	    "times": 215,
	    "divide": 247,
	    "OElig;": 338,
	    "oelig;": 339,
	    "Scaron;": 352,
	    "scaron;": 353,
	    "Yuml;": 376,
	    "fnof;": 402,
	    "circ;": 710,
	    "tilde;": 732,
	    "Alpha;": 913,
	    "Beta;": 914,
	    "Gamma;": 915,
	    "Delta;": 916,
	    "Epsilon;": 917,
	    "Zeta;": 918,
	    "Eta;": 919,
	    "Theta;": 920,
	    "Iota;": 921,
	    "Kappa;": 922,
	    "Lambda;": 923,
	    "Mu;": 924,
	    "Nu;": 925,
	    "Xi;": 926,
	    "Omicron;": 927,
	    "Pi;": 928,
	    "Rho;": 929,
	    "Sigma;": 931,
	    "Tau;": 932,
	    "Upsilon;": 933,
	    "Phi;": 934,
	    "Chi;": 935,
	    "Psi;": 936,
	    "Omega;": 937,
	    "alpha;": 945,
	    "beta;": 946,
	    "gamma;": 947,
	    "delta;": 948,
	    "epsilon;": 949,
	    "zeta;": 950,
	    "eta;": 951,
	    "theta;": 952,
	    "iota;": 953,
	    "kappa;": 954,
	    "lambda;": 955,
	    "mu;": 956,
	    "nu;": 957,
	    "xi;": 958,
	    "omicron;": 959,
	    "pi;": 960,
	    "rho;": 961,
	    "sigmaf;": 962,
	    "sigma;": 963,
	    "tau;": 964,
	    "upsilon;": 965,
	    "phi;": 966,
	    "chi;": 967,
	    "psi;": 968,
	    "omega;": 969,
	    "thetasym;": 977,
	    "upsih;": 978,
	    "piv;": 982,
	    "ensp;": 8194,
	    "emsp;": 8195,
	    "thinsp;": 8201,
	    "zwnj;": 8204,
	    "zwj;": 8205,
	    "lrm;": 8206,
	    "rlm;": 8207,
	    "ndash;": 8211,
	    "mdash;": 8212,
	    "lsquo;": 8216,
	    "rsquo;": 8217,
	    "sbquo;": 8218,
	    "ldquo;": 8220,
	    "rdquo;": 8221,
	    "bdquo;": 8222,
	    "dagger;": 8224,
	    "Dagger;": 8225,
	    "bull;": 8226,
	    "hellip;": 8230,
	    "permil;": 8240,
	    "prime;": 8242,
	    "Prime;": 8243,
	    "lsaquo;": 8249,
	    "rsaquo;": 8250,
	    "oline;": 8254,
	    "frasl;": 8260,
	    "euro;": 8364,
	    "image;": 8465,
	    "weierp;": 8472,
	    "real;": 8476,
	    "trade;": 8482,
	    "alefsym;": 8501,
	    "larr;": 8592,
	    "uarr;": 8593,
	    "rarr;": 8594,
	    "darr;": 8595,
	    "harr;": 8596,
	    "crarr;": 8629,
	    "lArr;": 8656,
	    "uArr;": 8657,
	    "rArr;": 8658,
	    "dArr;": 8659,
	    "hArr;": 8660,
	    "forall;": 8704,
	    "part;": 8706,
	    "exist;": 8707,
	    "empty;": 8709,
	    "nabla;": 8711,
	    "isin;": 8712,
	    "notin;": 8713,
	    "ni;": 8715,
	    "prod;": 8719,
	    "sum;": 8721,
	    "minus;": 8722,
	    "lowast;": 8727,
	    "radic;": 8730,
	    "prop;": 8733,
	    "infin;": 8734,
	    "ang;": 8736,
	    "and;": 8743,
	    "or;": 8744,
	    "cap;": 8745,
	    "cup;": 8746,
	    "int;": 8747,
	    "there4;": 8756,
	    "sim;": 8764,
	    "cong;": 8773,
	    "asymp;": 8776,
	    "ne;": 8800,
	    "equiv;": 8801,
	    "le;": 8804,
	    "ge;": 8805,
	    "sub;": 8834,
	    "sup;": 8835,
	    "nsub;": 8836,
	    "sube;": 8838,
	    "supe;": 8839,
	    "oplus;": 8853,
	    "otimes;": 8855,
	    "perp;": 8869,
	    "sdot;": 8901,
	    "lceil;": 8968,
	    "rceil;": 8969,
	    "lfloor;": 8970,
	    "rfloor;": 8971,
	    "lang;": 9001,
	    "rang;": 9002,
	    "loz;": 9674,
	    "spades;": 9824,
	    "clubs;": 9827,
	    "hearts;": 9829,
	    "diams;": 9830
	  };
	}.call(undefined);

/***/ },
/* 305 */
/***/ function(module, exports) {

	"use strict";

	function count(self, substr) {
	  var count = 0;
	  var pos = self.indexOf(substr);

	  while (pos >= 0) {
	    count += 1;
	    pos = self.indexOf(substr, pos + 1);
	  }

	  return count;
	}

	module.exports = count;

/***/ },
/* 306 */
/***/ function(module, exports) {

	'use strict';

	function splitLeft(self, sep, maxSplit, limit) {

	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }

	  var splitResult = self.split(sep);
	  var splitPart1 = splitResult.slice(0, maxSplit);
	  var splitPart2 = splitResult.slice(maxSplit);

	  if (splitPart2.length === 0) {
	    splitResult = splitPart1;
	  } else {
	    splitResult = splitPart1.concat(splitPart2.join(sep));
	  }

	  if (typeof limit === 'undefined') {
	    return splitResult;
	  } else if (limit < 0) {
	    return splitResult.slice(limit);
	  } else {
	    return splitResult.slice(0, limit);
	  }
	}

	module.exports = splitLeft;

/***/ },
/* 307 */
/***/ function(module, exports) {

	'use strict';

	function splitRight(self, sep, maxSplit, limit) {

	  if (typeof maxSplit === 'undefined') {
	    var maxSplit = -1;
	  }
	  if (typeof limit === 'undefined') {
	    var limit = 0;
	  }

	  var splitResult = [self];

	  for (var i = self.length - 1; i >= 0; i--) {

	    if (splitResult[0].slice(i).indexOf(sep) === 0 && (splitResult.length <= maxSplit || maxSplit === -1)) {
	      splitResult.splice(1, 0, splitResult[0].slice(i + sep.length)); // insert
	      splitResult[0] = splitResult[0].slice(0, i);
	    }
	  }

	  if (limit >= 0) {
	    return splitResult.slice(-limit);
	  } else {
	    return splitResult.slice(0, -limit);
	  }
	}

	module.exports = splitRight;

/***/ }
/******/ ]);