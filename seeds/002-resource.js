
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'Resource One', description: 'description about Resource One'},
        {id: 2, name: 'Resource Two', description: 'description about Resource Two'},
        {id: 3, name: 'Resource Three', description: 'description about Resource Three'},
        {id: 4, name: 'Resource Four', description: 'description about Resource Four'},
        {id: 5, name: 'Resource Five', description: 'description about Resource Five'},
        {id: 6, name: 'Resource Six', description: 'description about Resource Six'}
      ]);
    });
};
