import {ITask} from "./ITask";
import {Status} from "./TasksEnums/Statutes";
import {IEmployee} from "../Employee/IEmployee";
import {Priority} from "./TasksEnums/Priorities";
import {TaskTypes} from "./TasksEnums/TaskTypes";

export class Task implements ITask {
    private _title: string;
    private _dueDate: Date;
    private _status: Status;
    private _type: TaskTypes;
    private _creationDate: Date;
    private _priority: Priority;
    private _description: string;
    private readonly _id: number;
    private readonly _assignedTo: IEmployee;

    private static currentId: number = 1;

    constructor(
        title: string,
        dueData: Date,
        type: TaskTypes,
        priority: Priority,
        description: string,
        assignedTo: IEmployee,
        status: Status) {
        this._title = title
        this._dueDate = dueData;
        this._status = status;
        this._type = type;
        this._creationDate = new Date()
        this._priority = priority
        this._description = description
        this._id = Task.currentId++;
        this._assignedTo = assignedTo
    }

    public get title(): string {
        return this._title
    }

    public get dueDate(): Date {
        return this._dueDate
    }

    public get status(): Status {
        return this._status
    }

    public get type(): TaskTypes {
        return this._type
    }

    public get creationDate(): Date {
        return this._creationDate
    }

    public get description(): string {
        return this._description
    }

    public get priority() {
        return this._priority;
    }

    public get id(): number {
        return this._id
    }

    public get assignedTo(): IEmployee {
        return this._assignedTo
    }

    public updateType(type: TaskTypes): void {
        this._type = type
    }
}