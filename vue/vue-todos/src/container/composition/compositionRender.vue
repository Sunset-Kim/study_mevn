<script setup lang="ts">
import { reactive, ref } from "vue";

const obj = reactive({
  message: "나는 선언적렌더링 Reactive 입니다",
});
const message = ref("나는 선언적렌더링 Ref 입니다");
const counter = ref(0);
const titleClass = ref("title");

const increment = () => {
  counter.value++;
};

const text = ref("");
const textmodel = ref("");
const onInput = (e: Event) => {
  text.value = (e.target as HTMLInputElement).value;
};
</script>

<template lang="">
  <section>
    <h3 v-bind:class="titleClass">선언적렌더링</h3>
    <p>reactive : {{ obj.message }}</p>
    <p>ref : {{ message }}</p>
  </section>

  <section>
    <h3 :class="titleClass">속성바인딩</h3>
    <p>v-bind:class="title"</p>
    <p>:class="title"</p>
  </section>

  <section>
    <h3 :class="titleClass">이벤트 리스너</h3>
    <button class="button" v-on:click="increment">{{ counter }} v-on:click</button>
    <button class="button" @click="increment">{{ counter }} @click</button>
  </section>

  <section>
    <h3 :class="titleClass">폼 바인딩</h3>
    <h5 class="subtitle">value, @input 사용하기</h5>
    <input class="input" :value="text" @input="onInput" />
    <p class="helper">{{ text }}</p>

    <input class="input" v-model="textmodel" placeholder="model은 한타임 노려" />
    <p class="helper">{{ textmodel }}</p>
  </section>
</template>

<style lang="scss">
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
</style>
