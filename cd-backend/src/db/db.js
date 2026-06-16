const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect("mongodb+srv://as:HuhNZNpBvqJEbOuM@cluster0.v2mwqfo.mongodb.net/project-1")
  console.log("MongoDB connected");
}

module.exports = connectDB;