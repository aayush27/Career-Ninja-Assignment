const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect(process.env.MONGODB_URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });

// const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("GOT").collection("battle").findOne({name : "Battle of the Golden Tooth"}, function(err, res){
//       console.log('err: ', err);
//       console.log('res: ', res);

//   });
//   // perform actions on the collection object
//   client.close();
// });
mongoose.Promise = global.Promise;

module.exports = {
    Battle: require('./battle.model')
};