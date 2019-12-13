const db = require('../data/db-config');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addResources,
    addProject,
    addTask
}

function getProjects() {
    return db('projects')
  }

function addProject(newProject) {
return db('projects')
    .insert(newProject);
}    

function getResources() {
    return db('resources')
 } 
 
function addResources(newResource) {
return db('resources')
    .insert(newResource);
} 

function getTasks(project_id) {
    console.log(project_id)
    return db('tasks')
    .select('name', 'description', 'task_description', "notes")
    .join('projects', 'projects.id', 'projects_id')
    .where('projects_id', project_id);
} 

function addTask(newTask) {
    return db('tasks')
      .insert(newTask)
  }

