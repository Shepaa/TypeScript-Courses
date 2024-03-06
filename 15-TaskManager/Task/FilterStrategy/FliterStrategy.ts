import {ITask} from "../ITask";

export interface IFilterStrategy {
    filter(tasks: ITask[]): void;
}