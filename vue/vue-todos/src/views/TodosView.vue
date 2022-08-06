<template>
  <div>
    <div class="saying">
      <div v-if="newSaying">
        {{ newSaying }}
      </div>
      <div v-else>로딩중</div>
    </div>

    <div class="input__container">
      <InputComponent @send="onAdd" />
    </div>

    <div>총{{ totalLength }} 중 {{ doneLength }}남았습니다</div>

    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.title" :class="{ todo: true, done: todo.done }">
          <input type="checkbox" :checked="todo.done" @click="toggleDone(todo)" />
          <p>{{ todo.title }}</p>
          <button class="button" @click="removeTodo(todo)">삭제</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input__container {
  margin-top: 16px;
}

.saying {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

p {
  margin-bottom: 0;
}
</style>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import InputComponent from "../components/input/InputComponent.vue";
import { useSaying } from "@/stores/useSaying";
import { mapState } from "pinia";
import { useTodos } from "@/stores/useTodos";

export default defineComponent({
  name: "TodosView",
  components: {
    InputComponent,
  },

  setup() {
    const today = Date().toString();
    const saying = useSaying();
    const todoStore = useTodos();

    onMounted(() => {
      saying.setSaying();
    });

    return {
      today,
      addTodo: todoStore.addTodo,
      removeTodo: todoStore.removeTodo,
      toggleDone: todoStore.toggleDone,
    };
  },
  computed: {
    ...mapState(useSaying, ["newSaying"]), //
    ...mapState(useTodos, ["todos", "totalLength", "doneLength"]),
  },
  methods: {
    onAdd(e: any) {
      this.addTodo(e);
    },
  },
});
</script>
