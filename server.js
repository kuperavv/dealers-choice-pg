const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { client, syncAndSeed } = require('./db');

const routes = require('./Public/pages');
const port = process.env.PORT || 1337;

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use('/', routes);

const init = async () => {
  try {
    await client.connect();
    await syncAndSeed();
    app.listen(port, () => console.log(`Listening in port ${port}`));
  } catch (er) {
    console.log(er);
  }
};

init();
