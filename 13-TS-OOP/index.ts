class Note {
    private readonly _id: number
    title: string
    status: boolean
    content: string
    modificationDate: Date
    readonly creationDate: Date

    get id() {
        return this._id
    }

    constructor(id: number, title: string, content: string) {
        this._id = id;
        this.title = title;
        this.status = false;
        this.content = content;
        this.creationDate = new Date();
        this.modificationDate = new Date();
    }

    update(todo: Note): void {
        Object.assign(this, todo)
    }

    toggleStatus() {
        this.status = !this.status
    }
}


class ConfirmNote extends Note {
    override update(todo: Note) {
        const isConfirm = confirm("Are u sure that u need edit this note?")
        if (isConfirm) {
            super.update(todo);
        } else {
            console.log("Confirming cancel")
        }
    }

}

class TodoList {
    private todos: Note[] = []


    public addTodo(note: Note): void {
        this.todos.push(note)
    }

    public removeTodoById(id: number): void {
        this.todos = this.todos.filter(todo => id !== todo.id);
    }

    public getTodoById(id: number) {
        return this.todos.find(todo => todo.id === id)
    }

    public getTodoList(): Note[] {
        return this.todos
    }

    editTodo(id: number, payload: Note) {
        const todo = this.todos.find(todo => todo.id === id)
        if (!todo) throw new Error("incorrect id");

        todo.update(payload)

    }

    changeStatus(id: number) {
        const todo = this.todos.find((note) => note.id === id)
        if (!todo) throw new Error("incorrect id");

        todo.toggleStatus()
    }

    searchBy(conditions: keyof Note) {
        return this.todos.sort((a, b) => (a[conditions] > b[conditions] ? 1 : -1))
    }
}

class TodoListSort {
    private todos: Note[] = [];

    constructor(todos: Note[]) {
        this.todos = todos;
    }

    sortBy(field: keyof Note): Note[] {
        return this.todos.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    }
}

class TodoListSearch {
    private todos: Note[] = [];

    constructor(todos: Note[]) {
        this.todos = todos;
    }

    searchByField(field: keyof Note, value: any): Note[] {
        return this.todos.filter(todo => todo[field] === value);
    }
}

const todoList = new TodoList();
const defaultNote = new Note(1, "Usual note", "Usual note content")
const confirmNote = new ConfirmNote(2, "", "")
const sortList = new TodoListSort(todoList.getTodoList());
const sortedResult = sortList.sortBy("creationDate");
const searchList = new TodoListSearch(todoList.getTodoList());
const searchResult = searchList.searchByField("title", "Usual note");


todoList.addTodo(defaultNote)
console.log(todoList.getTodoList());
todoList.changeStatus(1)
console.log(todoList.getTodoList());


