const express = require('express');
const db = require('./config/connection');
const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}!`);
  });
});
