exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_description: "Own some property", notes: "gotta start somewhere", completed: false, projects_id: 1 },
        { task_description: "Take over surrounding property", notes: "expansion", completed: false, projects_id: 1 },
        { task_description: "Buy a Cake", notes: "Im hungry", completed: true, projects_id: 2 },
        { task_description: "Eat the Cake", notes: "Looks Yummy", completed: true, projects_id: 2 },
        { task_description: "Regret eating the entire cake", completed: true, projects_id: 2 },
        { task_description: "Finished todays project", completed: true, projects_id: 3 },
        { task_description: "Start the Sprint", completed: true, projects_id: 3 },
        { task_description: "Finish the Sprint", completed: false, projects_id: 3 },
      ]);
    });
};
