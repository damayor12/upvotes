const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.inverse);
  } catch (error) {
    console.log(`${error}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
