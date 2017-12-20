const express  = require('express')
const mongoose = require('../db/connection')

// gets the model from our database connection, for querying and changing data  
const Bookmark = mongoose.model('Bookmark')

// we are invoking express' Router method to obtain an instance of an express Router 
// that we will then configure below by attaching (via setter methods) route handling 
const Router = express.Router()

// set a handler function on the router instance to handle GET requests to '/'
Router.get('/api/bookmarks/', (req, res) => {
  Bookmark.find({}).then(bookmarks => res.json(bookmarks))
})

Router.get('/api/bookmarks/:title', (req, res) => {
  Bookmark.findOne({title: req.params.title}).then(bookmark => res.json(bookmark))
})

module.exports = Router
