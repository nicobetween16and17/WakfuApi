const mongoose = require('mongoose')
const {urlConnection} = require('./config/db.json')

mongoose.connect(urlConnection,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=> {
    console.log("MongoDb Connection Succesful");
  }).catch((e) => {
    console.log("Error on MongoDB Connection ");
    console.log(e);
    //kill app on Error
    process.exit();
  })
  
   const db = mongoose.connection;
  module.exports = db;