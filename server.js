const express = require('express');
const db = require('./config/connection');
const mongodb = require('mongodb').MongoClient;
const routes = require('./routes/apiRoutes')

const app = express();
const PORT = 3001;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for  running on port ${PORT}!`);
  });
});
