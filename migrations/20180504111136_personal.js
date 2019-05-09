

exports.up = function(knex, Promise) {
    return knex.schema.createTable('personal', table => {
        table.increments('id');
        table.string('image');
        table.string('title');
        table.string('tech');
        table.string('image_two');
        table.string('description',2000);
        table.string('image_three');
        table.string('url');
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('personal')
};




// dropdb personal && createdb personal && knex migrate:latest && knex seed:run && nodemon server.js