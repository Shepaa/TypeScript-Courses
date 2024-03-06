"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTasksByStatus = void 0;
class FilterTasksByStatus {
    constructor(status) {
        this.status = status;
    }
    filter(tasks) {
        return tasks.filter(task => task.status === this.status);
    }
}
exports.FilterTasksByStatus = FilterTasksByStatus;
