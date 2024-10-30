const express = require('express')
const serverless = require('serverless-http')
const app = express()
app.get('/hello', (req, res) => {
    res.send('deployed Successfully')
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
module.exports.handler = serverless(app)