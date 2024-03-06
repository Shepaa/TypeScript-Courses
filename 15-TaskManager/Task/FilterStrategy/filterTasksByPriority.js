"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterTasksByPriority = void 0;
class FilterTasksByPriority {
    constructor(priority) {
        this.priority = priority;
    }
    filter(tasks) {
        return tasks.filter(task => task.priority === this.priority);
    }
}
exports.FilterTasksByPriority = FilterTasksByPriority;
