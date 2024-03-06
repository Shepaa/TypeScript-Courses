import {ITask} from "../ITask";
import {Task} from "../Task";
import {TaskTypes} from "../TasksEnums/TaskTypes";
import {ISortingStrategy} from "../SortingStrategy/ISortingStrategy";
import {IFilterStrategy} from "../FilterStrategy/FliterStrategy";
import {Status} from "../TasksEnums/Statutes";
import {Observable} from "../utils/Observer/Observable";

export class TaskManager extends Observable {
    private tasks: Task[];
    private filterStrategy!: IFilterStrategy;
    private sortingStrategy!: ISortingStrategy;

    constructor() {
        super()
        this.tasks = [];
    }

    public setSortingStrategy(sortingStrategy: ISortingStrategy): void {
        this.sortingStrategy = sortingStrategy;
    }

    public setFilterStrategy(filterStrategy: IFilterStrategy): void {
        this.filterStrategy = filterStrategy;
    }

    public filterTasks(): Task[] {
        if (!this.filterStrategy) throw new Error("You should set strategy before");
        const filteredTasks = [...this.tasks]
        this.filterStrategy.filter(filteredTasks)
        return filteredTasks
    }

    public sortTasks(): Task[] {
        if (!this.sortingStrategy) throw new Error("You should set strategy before");
        const sortedTasks = [...this.tasks];
        return this.sortingStrategy.sort(sortedTasks);
    }

    public createTask(task: Task): void {
        if (this.tasks.some(existingTask => existingTask.id === task.id)) {
            throw new Error("Task with the same ID already exists");
        }

        this.tasks.push(task);
    }

    public viewTasks(): void {
        console.log("List of Tasks:");
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Title: ${task.title}, Status: ${task.status}, Assigned To: ${task.assignedTo ? task.assignedTo.name : 'Unassigned'}`);
        });
    }

    public editTask(id: number, newData: Partial<ITask>): void {
        const taskToUpdate = this.findTaskById(id);
        if (!taskToUpdate) {
            throw new Error("Task with the provided ID not found");
        }

        if (!taskToUpdate.assignedTo) {
            throw new Error("Task cannot be updated without assigned employee");
        }

        if (newData.status && !taskToUpdate.assignedTo) {
            throw new Error("Task status cannot be updated without assigned employee");
        }

        Object.assign(taskToUpdate, newData);
    }

    public deleteTask(id: number): void {
        const indexToDelete = this.tasks.findIndex(task => task.id === id);
        if (indexToDelete === -1) {
            throw new Error("Task with the provided ID not found");
        }

        this.tasks.splice(indexToDelete, 1);
    }

    public updateTaskType(id: number, type: TaskTypes): void {
        const taskToUpdate = this.findTaskById(id);
        if (!taskToUpdate) {
            throw new Error("Task with the provided ID not found");
        }
        if ((taskToUpdate.status === Status.InProgress || Status.Done) && !taskToUpdate.assignedTo) {
            throw new Error("Task status cannot be updated without assigned employee");
        }
        taskToUpdate.updateType(type);
        this.notify();
    }

    private findTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }
}




