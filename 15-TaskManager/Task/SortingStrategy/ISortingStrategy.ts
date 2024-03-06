import {Task} from "../Task";

export interface ISortingStrategy {
    sort(tasks: Task[]): Task[];
}