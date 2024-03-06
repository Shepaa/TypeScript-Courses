"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTasksByDueDate = void 0;
class FilterTasksByDueDate {
    constructor(dueDate) {
        this.dueDate = dueDate;
    }
    filter(tasks) {
        return tasks.filter(task => task.dueDate === this.dueDate);
    }
}
exports.FilterTasksByDueDate = FilterTasksByDueDate;
