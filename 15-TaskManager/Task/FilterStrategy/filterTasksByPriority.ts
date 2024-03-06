import {IFilterStrategy} from "./FliterStrategy";
import {ITask} from "../ITask";
import {Priority} from "../TasksEnums/Priorities";

export class FilterTasksByPriority implements IFilterStrategy{
    constructor(private priority: Priority) {}
    filter(tasks: ITask[]) {
        return tasks.filter(task => task.priority === this.priority);
    }
}