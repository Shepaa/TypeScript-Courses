import {Task} from "../Task";
import {ISortingStrategy} from "./ISortingStrategy";

export class DueDateSortingStrategy implements ISortingStrategy {
    sort(tasks: Task[]): Task[] {
        return tasks.slice().sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
    }
}