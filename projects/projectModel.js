const db = require('../data/db-config');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addResources,
    addProject,
    addTask,
    getProjectResources
}

function getProjects() {
    return db('projects')
  }

function getProjectResources(project_id) {
    return db('project_resources')
    .select('*')
    .join('projects', 'projects.id', 'projects_id')
    .join('resources', 'resources.id', 'resources_id')
    .where('projects_id', project_id);
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
    return db('tasks')
    .select('*') //name', 'description', 'task_description', "notes", 'completed
    .join('projects', 'projects.id', 'projects_id')
    .where('projects_id', project_id);
} 

function addTask(newTask) {
    return db('tasks')
      .insert(newTask)
  }

