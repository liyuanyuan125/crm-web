/**
 * @description mock-serve
 * @author zhangbing
 * @date 2019-11-04
 */
const express =  require('express')
const fs = require('fs')
var colors = require('colors.ts');
const path = require('path')

const mock = require('../mock/route')

const router = express.Router()
const app = express()
const port = 8000

for (var url in mock) {
  var mockFile = mock[url]
  router.post(url, (function (mockFile) {
    return function (req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.send(fs.readFileSync(path.resolve(__dirname + './../../src/mock/' + mockFile)))
    }
  })(mockFile))

  router.get(url, (function (mockFile) {
    return function (req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.send(fs.readFileSync(path.resolve(__dirname + './../../src/mock/' + mockFile)))
    }
  })(mockFile))

  router.put(url, (function (mockFile) {
    return function (req, res) {
      res.setHeader('Content-Type', 'application/json')
      res.send(fs.readFileSync(path.resolve(__dirname + './../../src/mock/' + mockFile)))
    }
  })(mockFile))
}

app.use('/', router)

app.listen(port)
console.log(`mock server run successful listen at ${port} `.green)
