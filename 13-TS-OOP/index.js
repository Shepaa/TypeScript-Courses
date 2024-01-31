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
        this._id = id;
        this.title = title;
        this.status = false;
        this.content = content;
        this.creationDate = new Date();
        this.modificationDate = new Date();
    }
    Object.defineProperty(Note.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Note.prototype.update = function (todo) {
        Object.assign(this, todo);
    };
    Note.prototype.toggleStatus = function () {
        this.status = !this.status;
    };
    return Note;
}());
var ConfirmNote = /** @class */ (function (_super) {
    __extends(ConfirmNote, _super);
    function ConfirmNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConfirmNote.prototype.update = function (todo) {
        var isConfirm = confirm("Are u sure that u need edit this note?");
        if (isConfirm) {
            _super.prototype.update.call(this, todo);
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
    TodoList.prototype.editTodo = function (id, payload) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (!todo)
            throw new Error("incorrect id");
        todo.update(payload);
    };
    TodoList.prototype.toggleStatus = function (id) {
        if (id === -1)
            throw new Error("negative id can't be");
        var todoIndex = this.todos.find(function (note) { return note.id === id; });
        console.log(todoIndex);
    };
    TodoList.prototype.searchBy = function (conditions) {
        return this.todos.sort(function (a, b) { return (a[conditions] > b[conditions] ? 1 : -1); });
    };
    return TodoList;
}());
var TodoListSort = /** @class */ (function () {
    function TodoListSort(todos) {
        this.todos = [];
        this.todos = todos;
    }
    TodoListSort.prototype.sortBy = function (field) {
        return this.todos.sort(function (a, b) { return (a[field] > b[field] ? 1 : -1); });
    };
    return TodoListSort;
}());
var TodoListSearch = /** @class */ (function () {
    function TodoListSearch(todos) {
        this.todos = [];
        this.todos = todos;
    }
    TodoListSearch.prototype.searchByField = function (field, value) {
        return this.todos.filter(function (todo) { return todo[field] === value; });
    };
    return TodoListSearch;
}());
var todoList = new TodoList();
var defaultNote = new Note(1, "Usual note", "Usual note content");
var confirmNote = new ConfirmNote(2, "", "");
var sortList = new TodoListSort(todoList.getTodoList());
var sortedResult = sortList.sortBy("creationDate");
var searchList = new TodoListSearch(todoList.getTodoList());
var searchResult = searchList.searchByField("title", "Usual note");
todoList.addTodo(defaultNote);
todoList.changeStatus(1);
todoList.addTodo(confirmNote);
