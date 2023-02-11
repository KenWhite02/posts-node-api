const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('connected to MongoDB successfully');
  })
  .catch((error) => {
    console.log(error);
  });
