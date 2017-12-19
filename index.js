const express = require('express')
const app = express()
const bookmarksController = require('./controllers/bookmarks')
const PORT = 8080

app.use('/', bookmarksController)

app.listen(PORT, () => console.log(`It's going down on port ${PORT}`))
