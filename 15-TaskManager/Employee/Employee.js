"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(name, position) {
        this._tasks = [];
        this._name = name;
        this._position = position;
        this._id = Employee.currentId++;
    }
    get tasks() {
        return this._tasks;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get position() {
        return this._position;
    }
    changeEmployeePosition(position) {
        this._position = position;
    }
}
exports.Employee = Employee;
Employee.currentId = 1;
