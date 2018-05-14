

exports.up = function(knex, Promise) {
    return knex.schema.createTable('personal', table => {
        table.increments('id');
        table.string('image');
        table.string('title');
        table.string('image_two');
        table.string('description');
        table.string('image_three');
        table.string('link');
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('personal')
};




// dropdb personal && createdb personal && knex migrate:latest && knex seed:run && nodemon server.js