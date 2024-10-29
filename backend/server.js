const express = require('express');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
