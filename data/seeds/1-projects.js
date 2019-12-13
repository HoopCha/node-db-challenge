exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: "Conquer the World", description: "take over some countries and stuff", completed: false },
        { name: "Eat a Cake", description: "consume an entire cake by myself", completed: true },
        { name: "Finish Sprint", description: "Take test early because vacation", completed: false },
      ]);
    });
};