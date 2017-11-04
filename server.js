const express = require('express')
const compression = require('compression')
const cors = require('cors')
const MusicApi = require('./index')

const port = process.env.PORT || 8001
const app = express()

// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(cors())

// gzip
app.use(compression())

app.get('/api/search/song/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.searchSong(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/api/search/album/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.searchAlbum(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/api/search/playlist/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.searchPlaylist(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/api/get/song/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.getSong(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/api/get/album/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.getAlbum(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/api/get/playlist/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.getPlaylist(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/api/suggest/album/:vendor', (req, res) => {
  const { vendor } = req.params
  MusicApi.getSuggestAlbums(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.listen(port)

console.log(`server started on port ${port}`) // eslint-disable-line
