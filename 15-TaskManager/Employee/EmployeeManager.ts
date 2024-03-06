import {Employee} from "./Employee";
import {EmployeePositions} from "./EmployeePositions";

export class EmployeeManager {
    private readonly _employees: Set<Employee>;

    constructor() {
        this._employees = new Set<Employee>();
    }

    public addEmployee(employee: Employee): void {
        this._employees.add(employee)
    }

    public removeEmployee(employeeId: number): void {
        const employeeToRemove = this.findEmployeeById(employeeId);
        if (!employeeToRemove) {
            throw new Error("Employee with the provided ID not found");
        }

        if (this.hasActiveTasks(employeeToRemove)) {
            throw new Error("Cannot remove employee with active tasks");
        }
        this._employees.delete(employeeToRemove);
    }

    public changePosition(employeeId: number, position: EmployeePositions) {
        const employee = this.findEmployeeById(employeeId);
        if (!employee) throw new Error("Employee with the provided ID not found");

        employee.changeEmployeePosition(position);
    }

    private findEmployeeById(employeeId: number): Employee | undefined {
        for (const employee of this._employees) {
            if (employee.id === employeeId) {
                return employee;
            }
        }
        return undefined;
    }

    private hasActiveTasks(employee: Employee): boolean {
        for (const task of employee.tasks) {
            if (task.status !== "Done" && task.status !== "Postponed") {
                return true;
            }
        }
        return false;
    }
}