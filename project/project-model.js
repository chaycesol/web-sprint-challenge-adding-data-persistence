const db = require('../data/connection');

module.exports = {
    getResources,
    getProjects, 
    findById,
    findSteps, 
    add,
    addStep, 
    update,
    remove
};

//  retrieve a list of resources.
function getResources() {
    return db('resource')
};
// retrieve a list of projects.
function getProjects() {
    return db('project')
};

// Returns specifuc schemes by id
function findById(id) {
    return db('schemes')
    .where({ id })
    .first();
};

//returns steps by scheme id
function findSteps(id) {
    return db('schemes AS s')
        .where('s.id', '=', id) 
        .join('steps AS p', 's.id','=', 'p.scheme_id')
        .select("p.id", "s.scheme_name", "p.step_number", "p.instructions")
        .orderBy('p.step_number', 'asc') //ORDER BY DAMNIT!
};

// creates a new scheme 
function add(scheme) {
    return db("schemes")
    .insert(scheme, "id");
};

// creates new step -- NEEEDS WORK NOT FUNCTIONING
function addStep(step, schemeId) {
    step.scheme_id = schemeId;
    return db("steps")
      .insert(step, "id")
      .then((ids) => {
        const [id] = ids;
        return db("steps").where({ id }).first();
      });
  }

  

// updates and exisiting scheme
function update(changes, id){
    return db('schemes')
    .where({ id })
    .update(changes, id)
};

// deletes scheme by ID
function remove(id){
    return db('schemes')
    .where({ id })
    .del()
};