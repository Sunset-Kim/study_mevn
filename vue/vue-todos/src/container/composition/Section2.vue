<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

let id = 0;

const h3 = ref<HTMLHeadElement | null>(null);
const completed = ref(false);

onMounted(() => {
  if (h3.value) {
    h3.value.textContent = "Ref 접근";
  }
});

const filteredTodos = computed(() => {
  return todos.value.filter((todo) => (completed.value ? todo.done === true : todo));
});

const todos = ref<Todo[]>([
  {
    id: id++,
    title: "할일이 없는게 할일",
    done: false,
  },
  {
    id: id++,
    title: "할일이 없는게 할일2",
    done: false,
  },
  {
    id: id++,
    title: "할일이 없는게 할일3",
    done: false,
  },
  {
    id: id++,
    title: "할일을 다한게 할일",
    done: true,
  },
]);

const inputValue = ref("");

const onInput = (e: Event) => {
  inputValue.value = (<HTMLInputElement>e.target).value;
};

function addTodo() {
  if (inputValue.value === "") return;
  todos.value.push({ id: id++, title: inputValue.value, done: false });
  inputValue.value = "";
}

function checkTodo(id: number) {
  const todo = todos.value.find((todo) => todo.id === id);
  if (todo) {
    todo.done = !todo.done;
  }
}

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function showCompleteTodos() {
  completed.value = true;
}

function showAllTodos() {
  completed.value = false;
}
</script>

<template>
  <section>
    <h3 class="title">TODO</h3>
    <div class="form">
      <input :value="inputValue" @input="onInput" class="input" type="text" />
      <button @click="addTodo" class="button">추가요</button>
    </div>

    <div class="button__group">
      <button :class="{ button: true, button__tab: true, is_active: !completed }" @click="showAllTodos">
        모두보기
      </button>
      <button :class="{ button: true, button__tab: true, is_active: completed }" @click="showCompleteTodos">
        완료된 목록만보기
      </button>
    </div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id" :class="{ todo: true, done: todo.done }">
        <input type="checkbox" :checked="todo.done" @click="checkTodo(todo.id)" />
        <p>{{ todo.title }}</p>
        <button class="button" @click="deleteTodo(todo.id)">삭제</button>
      </li>
    </ul>
  </section>

  <section>
    <h3 class="title" ref="h3">언제까지 어깨춤을 추게할꼬에오?</h3>
  </section>
</template>

<style lang="scss" scoped>
$green: var(--vue-green);
$green-hover: var(--vue-green-hover);

section {
  margin-bottom: 16px;
  p {
    font-size: 14px;
  }
}
.helper {
  height: 18px;
  margin-top: 4px;
  color: $green;
}
.title {
  padding-left: 4px;
  font-weight: bold;
  display: block;
  margin-bottom: 16px;
  color: $green;
  background-color: $green-hover;
}

.subtitle {
  font-size: 16px;
}

.button {
  background-color: transparent;
  border: 0;
  color: $green;
  transition: 0.4s;

  &:hover {
    background-color: $green-hover;
  }
}

.input {
  border-radius: 99px;
  border: 1px solid transparent;
  background-color: $green-hover;
  width: 100%;
  padding: 4px 16px;
  font-size: 15px;

  transition: 0.4s;

  &:focus {
    border: 1px solid $green;
    outline: none;
  }
}

.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;

  &.done {
    text-decoration: line-through;
  }
}

.form {
  display: flex;
  width: 100%;
  margin-bottom: 8px;

  .input {
    flex: 2;
    border-radius: 8px 0 0 8px;
    border: 1px solid $green;
  }

  .button {
    position: relative;
    flex: 0.5;
    border-radius: 0 8px 8px 0;
    border: 1px solid $green;
    border-left: 0;
    background-color: $green;
    color: white;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 0 8px 8px 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      pointer-events: none;
      transition: 0.3s;
    }

    &:hover {
      &::after {
        opacity: 0.1;
      }
    }
  }
}

.button__group {
  display: flex;
  margin-bottom: 8px;
}
.button__tab {
  flex: 1;
  font-size: 14px;
  padding: 8px 0;
  &.is_active {
    background-color: $green-hover;
  }
}
</style>
