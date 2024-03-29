
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function (table) {
      table.increments('id');
      table.string('description', 255);
      table.date('date_achieved');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
