const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log('Database connected');
  });