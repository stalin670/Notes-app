require("dotenv").config();
const mongoose = require("mongoose")

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const connection = mongoose.connect(process.env.mongoUrl
    , {useNewUrlParser: true, useUnifiedTopology: true}
).then()
.catch(err => console.log(err));

module.exports = {
    connection,
};

