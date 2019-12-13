exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { rname: "Computer", rdescription: "A device that can help program or research" },
        { rname: "Old Cheese", rdescription: "Smells kinda funny" },
        { rname: "Water", rdescription: "Helps stay hydrated" },
        { rname: "TL WES", rdescription: "He answers questions about backend" },
      ]);
    });
};
