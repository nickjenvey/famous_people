const { Client } = require("pg");
const settings = require("./settings");

const config = {
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
};

const client = new Client(config);

module.exports = client;