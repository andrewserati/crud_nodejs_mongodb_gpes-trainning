const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAndrewForTests:jurupinga@andrewgpes-hnhnn.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});