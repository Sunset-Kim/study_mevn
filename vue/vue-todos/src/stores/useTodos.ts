import { defineStore } from "pinia";

type Todo = {
  isFinished: boolean;
};

interface TodoState {
  todos: Todo[];
  filter: string;
  nextId: number;
}

export const useTodos = defineStore("todos", {
  state: (): TodoState => ({
    todos: [],
    filter: "all",
    nextId: 0,
  }),

  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },

    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },

    filteredTodo(state) {
      if (this.filter === "finished") {
        return this.filteredTodo(state);
      } else if ((this.filter = "unfinished")) {
        return this.unfinishedTodos(state);
      } else {
        return this.todos;
      }
    },
  },
});
