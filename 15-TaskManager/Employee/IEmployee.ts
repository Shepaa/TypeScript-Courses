import {ITask} from "../Task/ITask";

export interface IEmployee{
    id: number;
    name: string;
    position: string;
    tasks: ITask[];
}