// const assert = require('assert')
const { searchSong, searchAlbum, searchPlaylist } = require('../src')

describe('Search Song...', () => {
  it('should be success to search songs in netease', done => {
    searchSong('netease', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
  it('should be success to search songs in xiami', done => {
    searchSong('xiami', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
  it('should be success to search songs in qq', done => {
    searchSong('qq', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
})

describe('Search Album...', () => {
  it('should be success to search albums in netease', done => {
    searchAlbum('netease', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
  it('should be success to search albums in xiami', done => {
    searchAlbum('xiami', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
  it('should be success to search albums in qq', done => {
    searchAlbum('qq', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
})

describe('Search Playlist...', () => {
  it('should be success to search playlist in netease', done => {
    searchPlaylist('netease', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
  it('should be success to search playlist in xiami', done => {
    searchPlaylist('xiami', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
  it('should be success to search playlist in qq', done => {
    searchPlaylist('qq', { key: 'taylor' })
      .then(res => {
        if (res.success) {
          done()
        } else {
          done(false)
        }
      })
      .catch(err => done(err))
  })
})
