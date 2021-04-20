const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongo = process.env.MONGO || 'mongodb://localhost/minhas-series-rest'

const bodyParser = require('body-parser')
app.use(bodyParser({ extended: true }))

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const series = require('./routes/series')

app.use('/series', series)

// const series = [
//   { name: 'Friends' },
//   { name: 'Breaking Bad' }
// ]

// app.get('/series', (req, res) => res.send(series))

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log('listening...'))
  })
  .catch(e => console.log(e))
