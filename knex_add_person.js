const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

const personInfo = process.argv.slice(2);

console.log(personInfo);
knex('famous_people').insert({first_name: personInfo[0], last_name: personInfo[1], birthdate: personInfo[2]})
  .then(() => {
    console.log("Person added!");
  })
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
    knex.destroy();
  });