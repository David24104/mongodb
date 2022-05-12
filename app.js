//jshint esversion:8

const mongoose = require("mongoose");

//Connecting the url

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// main().catch(err => console.log(err));
//
// async function main(){
//   await mongoose.connect("mongodb://localhost:27017/fruitsDB");
// }

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Decent fruit",
});

fruit.save().then(() => console.log("Created"));
