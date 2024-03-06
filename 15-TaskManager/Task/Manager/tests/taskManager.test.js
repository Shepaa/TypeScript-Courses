"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("../TaskManager");
const Task_1 = require("../../Task");
const TaskTypes_1 = require("../../TasksEnums/TaskTypes");
const Priorities_1 = require("../../TasksEnums/Priorities");
const Employee_1 = require("../../../Employee/Employee");
const EmployeePositions_1 = require("../../../Employee/EmployeePositions");
const Statutes_1 = require("../../TasksEnums/Statutes");
describe('TaskManager', () => {
    let taskManager;
    beforeEach(() => {
        taskManager = new TaskManager_1.TaskManager();
    });
    it('should add a new task when createTask method is called', () => {
        const task = new Task_1.Task("Finish project report", new Date("2024-03-10"), TaskTypes_1.TaskTypes.Bug, Priorities_1.Priority.High, "Finish the report for the quarterly project", new Employee_1.Employee("", EmployeePositions_1.EmployeePositions.Junior), Statutes_1.Status.InProgress);
        taskManager.createTask(task);
        expect(taskManager['tasks']).toContain(task);
    });
    it('should throw error when editing non-existing task', () => {
        expect(() => taskManager.editTask(999, { /* someData */})).toThrowError();
    });
    it('should update task type successfully', () => {
        const task = new Task_1.Task("Finish project report", new Date("2024-03-10"), TaskTypes_1.TaskTypes.Bug, Priorities_1.Priority.High, "Finish the report for the quarterly project", new Employee_1.Employee("", EmployeePositions_1.EmployeePositions.Junior), Statutes_1.Status.InProgress);
        const talkWithOldStatus = Object.assign({}, task);
        taskManager.createTask(task);
        taskManager.updateTaskType(task.id, TaskTypes_1.TaskTypes.Task);
        expect(task.type).not.toEqual(talkWithOldStatus.status);
    });
    it('should delete task successfully', () => {
        const task = new Task_1.Task("Finish project report", new Date("2024-03-10"), TaskTypes_1.TaskTypes.Bug, Priorities_1.Priority.High, "Finish the report for the quarterly project", new Employee_1.Employee("", EmployeePositions_1.EmployeePositions.Junior), Statutes_1.Status.InProgress);
        taskManager.deleteTask(task.id);
        expect(taskManager.filterTasks()).not.toContain(task);
    });
    it('should throw error when trying to delete non-existing task', () => {
        expect(() => taskManager.deleteTask(999)).toThrowError();
    });
});
