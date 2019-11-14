'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');
const db = require('./models/index');
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(router);

(async () => {
  try {
    await db.sequelize.sync();
    app.listen(port);
    console.log(`Server listening on port ${port}`);
  }
  catch (err) {
    console.log('Error connecting to the db', err);
  }
})();
