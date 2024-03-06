"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Statutes_1 = require("../TasksEnums/Statutes");
const Observable_1 = require("../utils/Observer/Observable");
class TaskManager extends Observable_1.Observable {
    constructor() {
        super();
        this.tasks = [];
    }
    setSortingStrategy(sortingStrategy) {
        this.sortingStrategy = sortingStrategy;
    }
    setFilterStrategy(filterStrategy) {
        this.filterStrategy = filterStrategy;
    }
    filterTasks() {
        if (!this.filterStrategy)
            throw new Error("You should set strategy before");
        const filteredTasks = [...this.tasks];
        this.filterStrategy.filter(filteredTasks);
        return filteredTasks;
    }
    sortTasks() {
        if (!this.sortingStrategy)
            throw new Error("You should set strategy before");
        const sortedTasks = [...this.tasks];
        return this.sortingStrategy.sort(sortedTasks);
    }
    createTask(task) {
        if (this.tasks.some(existingTask => existingTask.id === task.id)) {
            throw new Error("Task with the same ID already exists");
        }
        this.tasks.push(task);
    }
    viewTasks() {
        console.log("List of Tasks:");
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}, Assigned To: ${task.assignedTo ? task.assignedTo.name : 'Unassigned'}`);
        });
    }
    editTask(id, newData) {
        const taskToUpdate = this.findTaskById(id);
        if (!taskToUpdate) {
            throw new Error("Task with the provided ID not found");
        }
        if (!taskToUpdate.assignedTo) {
            throw new Error("Task cannot be updated without assigned employee");
        }
        if (newData.status && !taskToUpdate.assignedTo) {
            throw new Error("Task status cannot be updated without assigned employee");
        }
        Object.assign(taskToUpdate, newData);
    }
    deleteTask(id) {
        const indexToDelete = this.tasks.findIndex(task => task.id === id);
        if (indexToDelete === -1) {
            throw new Error("Task with the provided ID not found");
        }
        this.tasks.splice(indexToDelete, 1);
    }
    updateTaskType(id, type) {
        const taskToUpdate = this.findTaskById(id);
        if (!taskToUpdate) {
            throw new Error("Task with the provided ID not found");
        }
        if ((taskToUpdate.status === Statutes_1.Status.InProgress || Statutes_1.Status.Done) && !taskToUpdate.assignedTo) {
            throw new Error("Task status cannot be updated without assigned employee");
        }
        taskToUpdate.updateType(type);
        this.notify();
    }
    findTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }
}
exports.TaskManager = TaskManager;
