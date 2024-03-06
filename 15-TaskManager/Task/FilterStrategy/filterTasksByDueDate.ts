import {IFilterStrategy} from "./FliterStrategy";
import {ITask} from "../ITask";

export class FilterTasksByDueDate implements IFilterStrategy{
    constructor(private dueDate: Date) {}
    filter(tasks: ITask[]) {
        return tasks.filter(task => task.dueDate === this.dueDate);
    }
}