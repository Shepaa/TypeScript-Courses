"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./Task/Task");
const TaskTypes_1 = require("./Task/TasksEnums/TaskTypes");
const Priorities_1 = require("./Task/TasksEnums/Priorities");
const Statutes_1 = require("./Task/TasksEnums/Statutes");
const Employee_1 = require("./Employee/Employee");
const EmployeePositions_1 = require("./Employee/EmployeePositions");
// const taskManager = new TaskManager();
// const employeeManager = new EmployeeManager()
//
const task1 = new Task_1.Task("Finish project report", new Date("2024-03-10"), TaskTypes_1.TaskTypes.Bug, Priorities_1.Priority.High, "Finish the report for the quarterly project", new Employee_1.Employee("John", EmployeePositions_1.EmployeePositions.Junior), Statutes_1.Status.InProgress);
// const task2 = new Task(
//     "Finish project report",
//     new Date("2024-03-10"),
//     TaskTypes.Bug,
//     Priority.High,
//     "Finish the report for the quarterly project",
//     new Employee("Dima",EmployeePositions.Junior),
//     Status.InProgress
// );
console.log(task1.id);
