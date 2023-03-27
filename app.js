const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  let date = new Date();
  let day = `${date.getDate()}`;
  let month = `${date.getMonth()}`;
  let year = `${date.getFullYear()}`;
  const result = addDays(new Date(year, month, day), 100);

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
