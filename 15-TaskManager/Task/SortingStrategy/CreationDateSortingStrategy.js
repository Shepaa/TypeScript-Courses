"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationDateSortingStrategy = void 0;
class CreationDateSortingStrategy {
    sort(tasks) {
        return tasks.slice().sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
    }
}
exports.CreationDateSortingStrategy = CreationDateSortingStrategy;
