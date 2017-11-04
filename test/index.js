// const assert = require('assert')
const { searchSong } = require('../src')

describe('Search Song...', () => {
  describe('search songs in netease', () => {
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
})
