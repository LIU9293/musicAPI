'use strict'
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const MusicApi = require('../src');

app.get('/searchSong/:vendor', (req, res) => {
  let key = req.query.key,
      limit = req.query.limit,
      page = req.query.page;
  let vendor = req.params.vendor;
  MusicApi.searchSong(vendor, {
    key,
    limit,
    page,
  })
    .then(data => res.json(data))
    .catch(err => res.send(err))
})

app.listen(port);

console.log("server started on port " + port);
