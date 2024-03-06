"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTasksByAssignedTo = void 0;
class FilterTasksByAssignedTo {
    constructor(employee) {
        this.employee = employee;
    }
    filter(tasks) {
        return tasks.filter(task => task.assignedTo === this.employee);
    }
}
exports.FilterTasksByAssignedTo = FilterTasksByAssignedTo;
