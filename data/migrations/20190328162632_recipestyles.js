exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipestyles', function(tbl) {
    tbl.increments();
    tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .string('name', 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipestyles');
};
