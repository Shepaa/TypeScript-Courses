import {IFilterStrategy} from "./FliterStrategy";
import {ITask} from "../ITask";
import {TaskTypes} from "../TasksEnums/TaskTypes";

export class FilterTasksByType implements IFilterStrategy{
    constructor(private taskType: TaskTypes) {}
    filter(tasks: ITask[]) {
        return tasks.filter(task => task.type === this.taskType);
    }
}