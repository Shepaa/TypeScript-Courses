import {Task} from "../Task";
import {ISortingStrategy} from "./ISortingStrategy";

export class CreationDateSortingStrategy implements ISortingStrategy {
    sort(tasks: Task[]): Task[] {
        return tasks.slice().sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
    }
}