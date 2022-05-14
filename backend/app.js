import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.bjgmb.mongodb.net/Blog?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(5000);
  })
  .then(() => {
    console.log('Connected to DB!');
  })
  .catch((err) => console.log(err));

app.use('/api', (req, res, next) => {
  res.send('Hello world');
});
