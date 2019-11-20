'use strict';

const app = require('./server');
require('dotenv').config()

const db = require('./models/index');
const port = 5000;

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