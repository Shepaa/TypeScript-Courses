"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTasksByType = void 0;
class FilterTasksByType {
    constructor(taskType) {
        this.taskType = taskType;
    }
    filter(tasks) {
        return tasks.filter(task => task.type === this.taskType);
    }
}
exports.FilterTasksByType = FilterTasksByType;
