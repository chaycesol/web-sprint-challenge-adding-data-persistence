
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, description: 'Task One', notes: 'Task One for Project 1', completed: 0, project_id: 1},
        {id: 2, description: 'Task Two', notes: 'Task Two for Project 1', completed: 1, project_id: 1},
        {id: 3, description: 'Task Three', notes: 'Task Three for Project 1', completed: 0, project_id: 1},
        {id: 4, description: 'Task One', notes: 'Task One for Project 2', completed: 1, project_id: 2},
        {id: 5, description: 'Task Two', notes: 'Task Two for Project 2', completed: 0, project_id: 2},
        {id: 6, description: 'Task Three', notes: 'Task Three for Project 2', completed: 0, project_id: 2},
        {id: 7, description: 'Task One', notes: 'Task One for Project 3', completed: 0, project_id: 3},
        {id: 8, description: 'Task Two', notes: 'Task Two for Project 3', completed: 1, project_id: 3},
        {id: 9, description: 'Task Three', notes: 'Task Three for Project 3', completed: 0, project_id: 3},
      ]);
    });
};
