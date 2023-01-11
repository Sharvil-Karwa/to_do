const mongoose = require("mongoose");
const db = process.env.MONGO_URI;

const connect = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongodb has been connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connect;
