
exports.up = function(knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments('id')
        //name
        tbl.string('name')
            .notNullable()
        //description
        tbl.string('description')
        //completed boolean default false
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(0)
    })
    .createTable('resource', tbl => {
      tbl.increments('id')
      // name
      tbl.string('name')
        .notNullable()
        .unique()
      //description
      tbl.string('description')
  })
  .createTable('projectresources', tbl => {
      // project id (foreign key)
      tbl.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('project')
      //resource id (foreign key)
      tbl.integer('resource_id')
        .notNullable()
        .references('id')
        .inTable('resource')
      // primary key set to combo of two columns rather than one specific to this table
      tbl.primary([`project_id`, 'resource_id'])
  })
  .createTable('task', tbl => {
      tbl.increments('id')
      //description
      tbl.string('description')
        .notNullable()
      //notes
      tbl.string('notes')
      //completed boolean default false
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(0)
      //project id (foreign key)
      tbl.integer('project_id')
        .notNullable()
        .references('id')
        .inTable('project')
  })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('task')
    .dropTableIfExists('projectresources')
    .dropTableIfExists('resource')
    .dropTableIfExists('project')
  };
  