<script setup lang="ts">
import { reactive, ref } from "vue";

const obj = reactive({
  message: "나는 선언적렌더링 Reactive 입니다",
});
const message = ref("나는 선언적렌더링 Ref 입니다");

const titleClass = ref("title");
</script>

<template lang="">
  <section>
    <h3 v-bind:class="titleClass">선언적렌더링</h3>
    <p>reactive : {{ obj.message }}</p>
    <p>ref : {{ message }}</p>
  </section>

  <section>
    <h3 :class="titleClass">속성바인딩</h3>
    <p class="code">v-bind:class="title"</p>
    <p class="code">:class="title"</p>
  </section>
</template>

<style lang="scss">
section {
  margin-bottom: 16px;
}
.title {
  display: block;
  margin-bottom: 16px;
  color: var(--vue-green);
  background-color: var(--vue-green-hover);
}
</style>
