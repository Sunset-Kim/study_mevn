import { defineStore } from "pinia";

type Todo = {
  title: string;
  done: boolean;
};

interface TodoState {
  newTodo: string;
  todos: Todo[];
  filter: string;
  nextId: number;
}

export const useTodos = defineStore("todos", {
  state: (): TodoState => ({
    newTodo: "",
    todos: [
      {
        title: "안된다",
        done: false,
      },
    ],
    filter: "all",
    nextId: 0,
  }),

  actions: {
    addTodo(title: string) {
      this.todos.push({ title, done: false });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    removeTodo(todo: Todo) {
      this.todos = this.todos.filter((item) => item.title !== todo.title);
    },

    toggleDone(todo: Todo) {
      const current = this.todos.find((item) => item.title === todo.title);
      if (current) {
        current.done = !current.done;
      }
    },
  },

  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.done);
    },

    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.done);
    },

    filteredTodo(state) {
      if (this.filter === "finished") {
        return this.finishedTodos(state);
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos(state);
      } else {
        return this.todos;
      }
    },
    totalLength: (state) => state.todos.length,

    doneLength(state) {
      return state.todos.filter((todo) => todo.done).length;
    },
  },
});
