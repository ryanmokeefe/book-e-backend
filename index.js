const express             = require('express')
const bookmarksController = require('./controllers/bookmarks')

const app = express()
const PORT = 8080

app.use('/', bookmarksController)

app.listen(PORT, () => console.log(`It's going down on port ${PORT}`))
