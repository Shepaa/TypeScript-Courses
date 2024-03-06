import {IEmployee} from "./IEmployee";
import {ITask} from "../Task/ITask";
import {EmployeePositions} from "./EmployeePositions";

export class Employee implements IEmployee {
    private readonly _id: number;
    private _name: string;
    private _position: EmployeePositions;
    private _tasks: ITask[] = [];
    private static currentId: number = 1;

    constructor(name: string, position: EmployeePositions) {
        this._name = name;
        this._position = position;
        this._id = Employee.currentId++;
    }

    public get tasks(): ITask[] {
        return this._tasks
    }

    public get id(): number {
        return this._id
    }

    public get name(): string {
        return this._name
    }

    public get position(): string {
        return this._position
    }

    public changeEmployeePosition(position: EmployeePositions) {
        this._position = position
    }
}