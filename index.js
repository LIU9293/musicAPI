require('es6-promise').polyfill()
require('babel-register')
require('isomorphic-fetch')
const MusicApi = require('./src/index')

module.exports = MusicApi
