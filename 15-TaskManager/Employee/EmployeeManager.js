"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
class EmployeeManager {
    constructor() {
        this._employees = new Set();
    }
    addEmployee(employee) {
        this._employees.add(employee);
    }
    removeEmployee(employeeId) {
        const employeeToRemove = this.findEmployeeById(employeeId);
        if (!employeeToRemove) {
            throw new Error("Employee with the provided ID not found");
        }
        if (this.hasActiveTasks(employeeToRemove)) {
            throw new Error("Cannot remove employee with active tasks");
        }
        this._employees.delete(employeeToRemove);
    }
    changePosition(employeeId, position) {
        const employee = this.findEmployeeById(employeeId);
        if (!employee)
            throw new Error("Employee with the provided ID not found");
        employee.changeEmployeePosition(position);
    }
    findEmployeeById(employeeId) {
        for (const employee of this._employees) {
            if (employee.id === employeeId) {
                return employee;
            }
        }
        return undefined;
    }
    hasActiveTasks(employee) {
        for (const task of employee.tasks) {
            if (task.status !== "Done" && task.status !== "Postponed") {
                return true;
            }
        }
        return false;
    }
}
exports.EmployeeManager = EmployeeManager;
