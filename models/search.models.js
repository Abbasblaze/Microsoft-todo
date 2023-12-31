const db = require("../db");

// constructor
class Search {
  constructor(search) {
    this.search = search;
  }
}

// search apis
exports.search = (id) => {
  db.query(
    `SELECT tasks AS tasks, NULL AS reminder, NULL AS plantasks, NULL AS assignedtasks
    FROM task
    WHERE tasks LIKE 'Y%'
    UNION 
    SELECT NULL AS tasks, reminders AS reminder, NULL AS plantasks, NULL AS assignedtasks
    FROM reminder
    WHERE reminders LIKE 'Y%'
    UNION 
    SELECT NULL AS tasks, NULL AS reminder, plantasks AS plantasks, NULL AS assignedtasks
    FROM plannedtasks
    WHERE plantasks LIKE 'Y%'
    UNION 
    SELECT NULL AS tasks, NULL AS reminder, NULL AS plantasks, assignedtask AS assignedtasks
    FROM assigned
    WHERE assignedtask LIKE 'Y%';
    `,
    (err, res) => {
      if (err) {
        console.error("Error executing query:", err);
        return err;
      }

      console.log("Search result:", res);
    }
  );
};
