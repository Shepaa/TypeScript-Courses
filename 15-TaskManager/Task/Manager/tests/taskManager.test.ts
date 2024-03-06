import {TaskManager} from "../TaskManager";
import {Task} from "../../Task";
import {TaskTypes} from "../../TasksEnums/TaskTypes";
import {Priority} from "../../TasksEnums/Priorities";
import {Employee} from "../../../Employee/Employee";
import {EmployeePositions} from "../../../Employee/EmployeePositions";
import {Status} from "../../TasksEnums/Statutes";
import {CreationDateSortingStrategy} from "../../SortingStrategy/CreationDateSortingStrategy";

describe('TaskManager', () => {
    let taskManager: TaskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    })


    it('should add a new task when createTask method is called', () => {
        const task = new Task(
            "Finish project report",
            new Date("2024-03-10"),
            TaskTypes.Bug,
            Priority.High,
            "Finish the report for the quarterly project",
            new Employee("", EmployeePositions.Junior),
            Status.InProgress
        );
        taskManager.createTask(task);
        expect(taskManager['tasks']).toContain(task)
    });

    it('should throw error when editing non-existing task', () => {
        expect(() => taskManager.editTask(999, { /* someData */})).toThrowError();
    });

    it('should update task type successfully', () => {
        const task = new Task(
            "Finish project report",
            new Date("2024-03-10"),
            TaskTypes.Bug,
            Priority.High,
            "Finish the report for the quarterly project",
            new Employee("", EmployeePositions.Junior),
            Status.InProgress
        );
        const talkWithOldStatus = {...task} as any
        taskManager.createTask(task)
        taskManager.updateTaskType(task.id, TaskTypes.Task)
        expect(task.type).not.toEqual(talkWithOldStatus.status)
    });

    it('should delete task successfully', () => {
        const task = new Task(
            "Finish project report",
            new Date("2024-03-10"),
            TaskTypes.Bug,
            Priority.High,
            "Finish the report for the quarterly project",
            new Employee("", EmployeePositions.Junior),
            Status.InProgress
        );
        taskManager.deleteTask(task.id);
        expect(taskManager.filterTasks()).not.toContain(task);
    });

    it('should throw error when trying to delete non-existing task', () => {
        expect(() => taskManager.deleteTask(999)).toThrowError();
    });
})