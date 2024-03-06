import {IEmployee} from "../Employee/IEmployee";
import {TaskTypes} from "./TasksEnums/TaskTypes";
import {Priority} from "./TasksEnums/Priorities";
import {Status} from "./TasksEnums/Statutes";

export interface ITask {
    type: TaskTypes;
    id: number;
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    creationDate: Date;
    dueDate: Date;
    assignedTo: IEmployee;
}