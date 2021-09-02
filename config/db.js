const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      // autoIndex: false, // Don't build indexes
      // poolSize: 10, // Maintain up to 10 socket connections
      // serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      // family: 4 // Use IPv4, skip trying IPv6
    });

    console.log(`Connected DB`);
  } catch (error) {
    console.log(error.message);
    process.exit(1); // error code
  }
};

module.exports = connectDB;
