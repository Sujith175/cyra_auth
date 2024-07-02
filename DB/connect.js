const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL, {}).then((data) => {
    console.log(`Mongo Db is Connected`);
  });
};

module.exports = connectDatabase;
