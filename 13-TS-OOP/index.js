var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Note = /** @class */ (function () {
    function Note(id, title, content) {
        this.id = id;
        this.title = title;
        this.status = false;
        this.content = content;
        this.creationDate = new Date();
        this.modificationDate = new Date();
    }
    Note.prototype.editNote = function (title, content) {
        this.title = title;
        this.content = content;
        this.modificationDate = new Date();
    };
    return Note;
}());
var ConfirmNote = /** @class */ (function (_super) {
    __extends(ConfirmNote, _super);
    function ConfirmNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmNote.prototype.editNote = function (title, content) {
        var isConfirm = confirm("Are u sure that u need edit this note?");
        if (isConfirm) {
            _super.prototype.editNote.call(this, title, content);
        }
        else {
            console.log("Confirming cancel");
        }
    };
    return ConfirmNote;
}(Note));
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodo = function (note) {
        this.todos.push(note);
    };
    TodoList.prototype.removeTodoById = function (id) {
        this.todos = this.todos.filter(function (todo) { return id !== todo.id; });
    };
    TodoList.prototype.getTodoById = function (id) {
        if (this.todos.length === 0)
            throw new Error("Todo list are empty");
        return this.todos.find(function (todo) { return todo.id === id; });
    };
    TodoList.prototype.getTodoList = function () {
        if (this.todos.length === 0)
            throw new Error("Todo list are empty");
        return this.todos;
    };
    TodoList.prototype.editTodo = function (id, title, content) {
        if (this.todos.length === 0)
            throw new Error("Todo list are empty");
        if (id > 0)
            throw new Error("negative id can't be");
        var todoIndex = this.todos.findIndex(function (note) { return note.id === id; });
        this.todos[todoIndex].title = title;
        this.todos[todoIndex].content = content;
        this.todos[todoIndex].modificationDate = new Date();
    };
    TodoList.prototype.toggleStatus = function (id) {
        if (id > 0)
            throw new Error("negative id can't be");
        var todoIndex = this.todos.findIndex(function (note) { return note.id === id; });
        this.todos[todoIndex].status = !this.todos[todoIndex].status;
    };
    TodoList.prototype.searchBy = function (conditions) {
        return this.todos.sort(function (a, b) { return (a[conditions] > b[conditions] ? 1 : -1); });
    };
    return TodoList;
}());
var todoList = new TodoList();
var defaultNote = new Note(1, "Usual note", "Usual note content");
var confirmNote = new ConfirmNote(2, "", "");
todoList.addTodo(defaultNote);
todoList.addTodo(confirmNote);
console.log(todoList.getTodoList());
