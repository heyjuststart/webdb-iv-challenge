
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeingredients', function(tbl) {
    tbl.increments();
    tbl.string('name', 128).notNullable().unique();
    tbl.decimal('quantity').notNullable();
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipeingredients');
};



