
exports.up = function(knex) {
    //we make changes to the db schema 
    return knex.schema.createTable('fruits', tbl => {
        tbl.increments();
        
        tbl.string('name', 128).unique().notNullable();
        tbl.decimal('avgWeightOz');
        tbl.boolean('delicious');
    })
};

exports.down = function(knex) {
    //we undo the changes to the db schema
    return knex.schema.dropTableIfExists('fruits');
};
