'use strict'
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const MusicApi = require('../src');

app.get('/search/song/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.searchSong(vendor, {
    key,
    limit,
    page,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
});

app.get('/search/album/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.searchAlbum(vendor, {
    key,
    limit,
    page,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
});

app.get('/search/playlist/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.searchPlaylist(vendor, {
    key,
    limit,
    page,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.get('/get/song/:vendor', (req, res) => {
  let id = req.query.id,
      br = req.query.br,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getSong(vendor, {
    id,
    raw,
    br,
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
});

app.get('/get/album/:vendor', (req, res) => {
  let id = req.query.id,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getAlbum(vendor, {
    id,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
});

app.get('/get/playlist/:vendor', (req, res) => {
  let id = req.query.id,
      raw = req.query.raw;
  let vendor = req.params.vendor;
  MusicApi.getPlaylist(vendor, {
    id,
    raw
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
});

app.listen(port);

console.log("server started on port " + port);
