<template>
  <div>
    <div>
      {{ newSaying }}
    </div>
    <div class="input__container">
      <InputComponent />
    </div>

    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id" :class="{ todo: true, done: todo.done }">
          <input type="checkbox" :checked="todo.done" />
          <p>{{ todo.title }}</p>
          <button class="button" @click="deleteTodo(todo.id)">삭제</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input__container {
  margin-top: 16px;
}

p {
  margin-bottom: 0;
}
</style>

<script lang="ts">
import { onMounted } from "vue";
import InputComponent from "../components/input/InputComponent.vue";
import { useSaying } from "@/stores/useSaying";
import { mapState, storeToRefs } from "pinia";

export default {
  name: "TodosView",
  components: {
    InputComponent,
  },
  setup() {
    const today = Date().toString();
    const saying = useSaying();

    onMounted(() => {
      saying.setSaying();
    });

    return {
      today,
    };
  },
  computed: { ...mapState(useSaying, ["newSaying"]) },
};
</script>
