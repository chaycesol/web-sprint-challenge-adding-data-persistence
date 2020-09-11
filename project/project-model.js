const db = require('../data/connection');

module.exports = {
    getResources,
    getProjects,
    getTasks, 
    findTasks,
    findProjectById,
    addProject,
    addResource,
    addTask 
};

/* RESOURCES  */

//  retrieve a list of resources.
function getResources() {
    return db('resource')
};

// adding resources
function addResource(resource) {
    return db("resource")
    .insert(resource, "id");
};

/* PROJECTS  */
// retrieve a list of projects.
function getProjects() {
    return db('project')
};

// retrieve a specific project by ID
function findProjectById(id) {
    return db('project')
    .where({ id })
    .first();
};

// adding projects
function addProject(project) {
    return db("project")
    .insert(project, "id");
};

/* Tasks */
//retrieve a list of tasks. The list of tasks should include the project name and project description.
function getTasks() {
    return db('project AS p')
        .join('task AS t', 'p.id', '=', 't.project_id')
        .select('t.description', 't.notes', 'p.name as project_name', 'p.description as project_description')
        .orderBy('p.id')
};

// retrieve list of tasks for specific project by ID
function findTasks(id) {
    return db('project AS p')
        .where('p.id', '=', id)
        .join('task AS t', 'p.id', '=', 't.project_id')
        .select('t.description', 't.notes', 'p.name as project_name', 'p.description as project_description')
        .orderBy('p.id')
}

//adds task to specific project by ID
function addTask(task, projectId) {
    task.project_id = projectId;
    return db("task")
      .insert(task, "id")
      .then((ids) => {
        const [id] = ids;
        return db("task").where({ id }).first();
      });
  }


