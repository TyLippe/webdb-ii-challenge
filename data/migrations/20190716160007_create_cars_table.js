
exports.up = function(knex) {
    //we make changes to the db schema 
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        
        tbl.decimal('VIN', 128).unique().notNullable();
        tbl.string('Make').notNullable();
        tbl.string('Model').notNullable();
        tbl.decimal('Mileage').notNullable();
        tbl.string('Transmission');
        tbl.string('Title');
    })
};

exports.down = function(knex) {
    //we undo the changes to the db schema
    return knex.schema.dropTableIfExists('cars');
};
