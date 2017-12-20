const express             = require('express')
const bookmarksController = require('./controllers/bookmarks')
const parser              = require('body-parser')
const app = express()
const PORT = 8080

app.use(parser.json({extended: true}))
app.use('/api/bookmarks/', bookmarksController)

app.listen(PORT, () => console.log(`It's going down on port ${PORT}`))
