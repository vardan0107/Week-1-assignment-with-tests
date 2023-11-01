/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) {
    this.todoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index > this.todoList.length - 1) {
      return;
    }
    this.todoList = [
      ...this.todoList.slice(0, index),
      updatedTodo,
      ...this.todoList.slice(index + 1),
    ];
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo > this.todoList.length - 1) {
      return null;
    }
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList = [];
  }
}

let todoList = new Todo();

todoList.add("Task 1");
todoList.add("Task 2");
todoList.add("Task 3");

console.log(todoList.get(3));

module.exports = Todo;
