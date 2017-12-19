// we're importing a mongoose instance from schema.js
const mongoose = require('./schema.js')

// using native ES6 Promises, in place of mongoose's deprecated mpromise library
// `Promise` will provide us with .then() for success, and .catch() for errors
mongoose.Promise = Promise

//set the uri for connecting to our local mongodb
const mongoUri = 'mongodb://localhost/book-e'

//connect to the database, with the mongoose instance that was 
mongoose
  .connect(mongoUri, {useMongoClient: true})
  .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose
