
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'Project 1', description: 'project description about Project 1', completed: 0},
        {id: 2, name: 'Project 2', description: 'project description about Project 2', completed: 0},
        {id: 3, name: 'Project 3', description: 'project description about Project 3', completed: 0},
      ])
    });
};
