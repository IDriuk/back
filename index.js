const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Check auto deploy to heroku'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
