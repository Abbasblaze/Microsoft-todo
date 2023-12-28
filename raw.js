// "Task has been assigned successfully";
// "Error occurred while creating the task.";

// SELECT id, tasks, reminders, plantasks, assignedtask
// FROM (
//     SELECT id, task AS tasks, NULL AS reminders, NULL AS plantasks, NULL AS assignedtask FROM public.task
//     UNION ALL
//     SELECT id, NULL AS tasks, reminder AS reminders, NULL AS plantasks, NULL AS assignedtask FROM public.reminder
//     UNION ALL
//     SELECT id, NULL AS tasks, NULL AS reminders, plantasks, NULL AS assignedtask FROM public.plannedtasks
//     UNION ALL
//     SELECT id, NULL AS tasks, NULL AS reminders, NULL AS plantasks, assignedtask FROM public.assigned
// ) AS combined
// WHERE tasks IS NOT NULL OR reminders IS NOT NULL OR plantasks IS NOT NULL OR assignedtask IS NOT NULL;
