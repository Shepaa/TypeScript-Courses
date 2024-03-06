import { TaskManager} from "./Task/Manager/TaskManager";
import {Task} from "./Task/Task";
import {TaskTypes} from "./Task/TasksEnums/TaskTypes";
import {Priority} from "./Task/TasksEnums/Priorities";
import {Status} from "./Task/TasksEnums/Statutes";
import {Employee} from "./Employee/Employee";
import {EmployeePositions} from "./Employee/EmployeePositions";
import {EmployeeManager} from "./Employee/EmployeeManager";

const taskManager = new TaskManager();
const employeeManager = new EmployeeManager()

const task1 = new Task(
    "Finish project report",
    new Date("2024-03-10"),
    TaskTypes.Bug,
    Priority.High,
    "Finish the report for the quarterly project",
    new Employee("John",EmployeePositions.Junior),
    Status.InProgress
);
const task2 = new Task(
    "Finish project report",
    new Date("2024-03-10"),
    TaskTypes.Bug,
    Priority.High,
    "Finish the report for the quarterly project",
    new Employee("Dima",EmployeePositions.Junior),
    Status.InProgress
);
