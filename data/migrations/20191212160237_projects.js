exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl.string('name', 255).notNullable();
          tbl.string('description', 255)
          tbl.boolean('completed').notNullable().defaultTo(false);
      })

      .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('rname', 255).notNullable().unique()
        tbl.string('rdescription', 255)
      })

      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.string('task_description', 300).notNullable();
          tbl.string('notes', 500)
          tbl.boolean('completed').notNullable().defaultTo(false);
          tbl
          .integer('projects_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT') 
          .onUpdate('CASCADE'); 
      })

      .createTable('project_resources', tbl => {
        tbl.increments();
        tbl
        .integer('projects_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
        tbl
        .integer('resources_id')
        .unsigned()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
    })
  };
  

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};