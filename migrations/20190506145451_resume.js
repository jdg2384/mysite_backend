exports.up = function(knex, Promise) {
    return knex.schema.createTable('resume', table => {
        table.increments('id');
        table.string('company').unique();
        table.string('submitted_time');
        table.string('viewed_time');
        table.string('link');
        table.string('skills');
        table.string('skills_desired');
        table.string('job_site');
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('resume')
};

