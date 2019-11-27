const mongoose = require('mongoose');
const url = "mongodb+srv://dbAndrewForTests:jurupinga@andrewgpes-hnhnn.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, (err) => {
  if (err) console.log('Deu ruim véi');
});

mongoose.connection.once("open", () => 
  console.log("MongoDB funfando topzera!")
);