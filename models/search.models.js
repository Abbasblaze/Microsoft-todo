const db = require("../db");

// constructor
class Search {
  constructor(search) {
    this.search = search;
  }
}

// search apis
exports.search = (id, tasks, callback) => {
  db.query(
    'SELECT * FROM "task" WHERE tasks LIKE $1',
    [`%${id}%`],
    (err, res) => {
      if (err) {
        console.error("Error executing query:", err);
        return err, null;
      }

      console.log("Search result:", res);
    }
  );
};
