"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DueDateSortingStrategy = void 0;
class DueDateSortingStrategy {
    sort(tasks) {
        return tasks.slice().sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    }
}
exports.DueDateSortingStrategy = DueDateSortingStrategy;
