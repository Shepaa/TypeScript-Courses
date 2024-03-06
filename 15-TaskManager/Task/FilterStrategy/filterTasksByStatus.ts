import {IFilterStrategy} from "./FliterStrategy";
import {ITask} from "../ITask";
import {Status} from "../TasksEnums/Statutes";

export class FilterTasksByStatus implements IFilterStrategy{
    constructor(private status: Status) {}
    filter(tasks: ITask[]) {
        return tasks.filter(task => task.status === this.status);
    }
}