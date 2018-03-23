const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: 'https://idriuk.github.io/cloud/'
}));


app.get('/', (req, res) => res.send('Check auto deploy to heroku'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))
