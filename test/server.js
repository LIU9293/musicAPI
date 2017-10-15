'use strict';
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const compression = require('compression');
const cors = require('cors');
const MusicApi = require('../src');

// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(cors());

//gzip
app.use(compression());

app.get('/api/search/song/:vendor', (req, res) => {
  let vendor = req.params.vendor;
  MusicApi.searchSong(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.get('/api/search/album/:vendor', (req, res) => {
  let vendor = req.params.vendor;
  MusicApi.searchAlbum(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.get('/api/search/playlist/:vendor', (req, res) => {
  let vendor = req.params.vendor;
  MusicApi.searchPlaylist(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.get('/api/get/song/:vendor', (req, res) => {
  let vendor = req.params.vendor;
  MusicApi.getSong(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.get('/api/get/album/:vendor', (req, res) => {
  let vendor = req.params.vendor;
  MusicApi.getAlbum(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.get('/api/get/playlist/:vendor', (req, res) => {
  let vendor = req.params.vendor;
  MusicApi.getPlaylist(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.get('/api/suggest/album/:vendor', (req, res) => {
  let limit = req.query.limit,
    raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getSuggestAlbums(vendor, req.query || {})
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

app.listen(port);

console.log('server started on port ' + port);
