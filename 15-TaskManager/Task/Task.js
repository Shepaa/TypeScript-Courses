"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(title, dueData, type, priority, description, assignedTo, status) {
        this._title = title;
        this._dueDate = dueData;
        this._status = status;
        this._type = type;
        this._creationDate = new Date();
        this._priority = priority;
        this._description = description;
        this._id = Task.currentId++;
        this._assignedTo = assignedTo;
    }
    get title() {
        return this._title;
    }
    get dueDate() {
        return this._dueDate;
    }
    get status() {
        return this._status;
    }
    get type() {
        return this._type;
    }
    get creationDate() {
        return this._creationDate;
    }
    get description() {
        return this._description;
    }
    get priority() {
        return this._priority;
    }
    get id() {
        return this._id;
    }
    get assignedTo() {
        return this._assignedTo;
    }
    updateType(type) {
        this._type = type;
    }
}
exports.Task = Task;
Task.currentId = 1;
