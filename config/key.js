const mongoose = require('mongoose');

mongoose.connect(process.env.Mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error in connecting to MongoDB", err);
});