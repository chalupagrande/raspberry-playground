const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use('/', express.static('./client'))

app.use(bodyParser.json())
app.post('/call', (req, res) => {
  console.log('IP', req.ip, req.body.ip)
  res.send('ok')
})

app.listen(3000, ()=> {
  console.log('listening on 3000')
})
