const express = require('express')
const cors = require('cors')

const cloudData = require('./cloud_data');

const app = express()
const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV == 'production') {
  app.use(cors({
    origin: 'https://idriuk.github.io'
  }));
} else {
  app.use(cors());
}

app.get('/', (req, res) => res.send(cloudData))

app.listen(PORT, () => console.log(`Api listening on port ${PORT}`))
