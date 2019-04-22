const mongoose = require("mongoose");
const config = require("./environment");

const env = config.app.environment || "development";

const options = {
  useNewUrlParser: true
};

// add handler for lost connection
module.exports = () => {
  mongoose.connect(config.mongodb.host, options);
  
  mongoose.connection.on("connected", function() {
    console.log("Mongoose default connection open to " + config.mongodb.host);
  });

  
}