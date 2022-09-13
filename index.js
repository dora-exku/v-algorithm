const express = require('express')
const url = require('url')
const getCkey = require('./lib/tencent_ckey81')
const app = express()
const port = 5050
app.get('/tencent/ckey81', (req, res) => {
  const params = url.parse(req.url, true).query
  //'q0043w6hy6v', '1661996310', '3.5.57', 'c504bdf377891e043b5a8618b5a4fe27', '10901'
  var ckey = getCkey(params?.vid, params?.tm, params?.version, params?.guid, params?.platform, params?.url, params?.referer)
  res.json({
    ckey: ckey
  })
})


app.listen(port, () => {
  console.log('starting ' + port)
})