class Note {
    private readonly _id: number
    title: string
    status: boolean
    content: string
    modificationDate: Date
    readonly creationDate: Date

    get id(){
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

    editNote(title: string, content: string): void {
        this.title = title;
        this.content = content;
        this.modificationDate = new Date();
    }
}


class ConfirmNote extends Note {
    override editNote(title: string, content: string) {
        const isConfirm = confirm("Are u sure that u need edit this note?")
        if (isConfirm) {
            super.editNote(title, content);
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
        if (this.todos.length === 0) throw new Error("Todo list are empty");
        return this.todos.find(todo => todo.id === id)
    }

    public getTodoList(): Note[] {
        if (this.todos.length === 0) throw new Error("Todo list are empty");
        return this.todos
    }

    editTodo(id: number, title: string, content: string) {
        if (this.todos.length === 0) throw new Error("Todo list are empty");
        if (id == -1) throw new Error("negative id can't be");

        const todoIndex = this.todos.findIndex((note) => note.id === id);

        this.todos[todoIndex].title = title;
        this.todos[todoIndex].content = content;
        this.todos[todoIndex].modificationDate = new Date();
    }

    toggleStatus(id: number) {
        if (id == -1) throw new Error("negative id can't be");
        const todoIndex = this.todos.findIndex((note) => note.id === id);
        this.todos[todoIndex].status = !this.todos[todoIndex].status
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

console.log(searchResult);
console.log(sortedResult);
todoList.addTodo(defaultNote)
todoList.addTodo(confirmNote)
console.log(todoList.getTodoList())

