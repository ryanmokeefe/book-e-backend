const express = require('express')

// we are invoking express' Router method to obtain an instance of an express Router 
// that we will then configure below by attaching (via setter methods) route handling 
const Router  = express.Router()

// set a handler function on the router instance to handle GET requests to '/'
Router.get('/', (req, res)=>res.send("Hello Bookmarks"))

module.exports = Router
