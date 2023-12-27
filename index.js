// Importing Third party libraries
const express = require("express");

const mydayController = require("./controller/myDay.controller");
const remindController = require("./controller/remind.controller");
const imprtantController = require("./controller/important.controller");
const plannedController = require("./controller/planned.controller");
const assignedController = require("./controller/assigned.controller");
const searchController = require("./controller/search.controller");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logger Middleware
app.use((req, _, next) => {
  console.log(req.url);
  next();
});

// Search API
app.get("/search/", searchController.search);

// tasks (Working)
app.get("/tasks", mydayController.getAll);
app.post("/create/task", mydayController.create);
app.delete("/delete/:id", mydayController.delete);
app.put("/update/:id", mydayController.updateTask);
app.get("/task/:id", mydayController.getById);

//remind (Workingl)
app.get("/remind", remindController.getAll);
app.post("/create/reminder", remindController.create);
app.delete("/reminder/:id", remindController.delete);
app.put("/reminder/:id", remindController.updateReminder);

//important tasks (Working)
app.get("/impTask", imprtantController.getAll);
app.post("/create/imptask", imprtantController.create);
app.delete("/impTask/:id", imprtantController.delete);
7;
app.put("/impTask/:id", imprtantController.updateImportantTask);
app.get("/impTask/:id", imprtantController.getById);

//Planned tasks  (Working)
app.get("/plannedtask", plannedController.getAll);
app.post("/create/plannedtask", plannedController.create);
app.delete("/plannedtask/:id", plannedController.delete);
app.put("/plannedtask/:id", plannedController.updatePlannedTask);
app.get("/plannedtask/:id", plannedController.getById);

//assigend Tasks (Wroking)
app.get("/assigendtask", assignedController.getAll);
app.post("/create/assigendTask", assignedController.create);
app.delete("/assigendtask/:id", assignedController.delete);
app.put("/assigendtask/:id", assignedController.updateAssignedTask);
app.get("/assigendtask/:id", assignedController.getById);

// Listening to PORT: 8080
app.listen(8080, function () {
  console.log("⚡️ Server is running on port 8080");
});
