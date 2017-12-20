const express             = require('express')
const bookmarksController = require('./controllers/bookmarks')
const parser              = require('body-parser')
const cors                = require('cors')

const app = express()
const PORT = 8080

app.use(cors())

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api/bookmarks/', bookmarksController)

app.listen(PORT, () => console.log(`Live on port ${PORT}`))
