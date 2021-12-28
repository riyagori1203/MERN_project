const mongoose = require("mongoose");

// dbURI="mongodb+srv://riya:<Riya1203>@wevolve.xcvnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
module.export = mongoose.connect("mongodb+srv://riya:<Riya1203>@wevolve.xcvnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then((result) =>console.log("db is connected"))
  .catch((err) => console.log(err));