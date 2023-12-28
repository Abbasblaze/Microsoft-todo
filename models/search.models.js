const db = require("../db");

// constructor
class Search {
  constructor(search) {
    this.search = search;
  }
}

// search apis
exports.search = (id, tasks) => {
  db.query(
    `SELECT id, task AS tasks, NULL AS reminders, NULL AS plantasks, NULL AS assignedtask FROM public.task
    UNION ALL
    SELECT id, NULL AS tasks, reminder AS reminders, NULL AS plantasks, NULL AS assignedtask FROM public.reminder
    UNION ALL
    SELECT id, NULL AS tasks, NULL AS reminders, plantasks, NULL AS assignedtask FROM public.plannedtasks
    UNION ALL
    SELECT id, NULL AS tasks, NULL AS reminders, NULL AS plantasks, assignedtask FROM public.assigned
    WHERE tasks LIKE '%Your%'
       OR reminders LIKE 'your%'
       OR plantasks LIKE '%this'
       OR assignedtask LIKE '_Your_task';
    
    `,
    (err, res) => {
      if (err) {
        console.error("Error executing query:", err);
        return err, null;
      }

      console.log("Search result:", res);
    }
  );
};
