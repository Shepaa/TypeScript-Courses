import {IFilterStrategy} from "./FliterStrategy";
import {ITask} from "../ITask";
import {IEmployee} from "../../Employee/IEmployee";

export class FilterTasksByAssignedTo implements IFilterStrategy{
    constructor(private employee: IEmployee ) {}
    filter(tasks: ITask[]) {
        return tasks.filter(task => task.assignedTo === this.employee);
    }
}