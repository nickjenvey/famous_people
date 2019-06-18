const db = require('./db');

db.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  const name = process.argv.slice(2)[0];
  db.query("SELECT * FROM famous_people WHERE first_name LIKE $1 OR last_name LIKE $1", [name], (err, res) => {
    if (err) {
      return console.error("error running query", err);
    }
    const people = res.rows;
    console.log("Searching...");
    console.log(`Found ${people.length} person(s) by the name '${name}':`);
    people.forEach((person) => {
      console.log(`- ${person.id}: ${person.first_name} ${person.last_name}, born '${person.birthdate.toLocaleDateString()}'`);
    })
    db.end();
  });
});