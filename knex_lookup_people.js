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

const name = process.argv.slice(2)[0];
knex.from('famous_people').select("*").where('first_name', '=', name)
  .then((people) => {
    console.log("Searching...");
    console.log(`Found ${people.length} person(s) by the name '${name}':`);
    for (person of people) {
      console.log(`- ${person.id}: ${person.first_name} ${person.last_name}, born '${person.birthdate.toLocaleDateString()}'`);
    }
  })
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
    knex.destroy();
  });