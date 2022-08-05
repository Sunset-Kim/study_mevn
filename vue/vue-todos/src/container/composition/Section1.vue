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

// 조건부 렌더링
const isShow = ref(true);
const toggleShow = () => (isShow.value = !isShow.value);

const array = ref(["a", "b", "c"]);
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

  <section>
    <h3 :class="titleClass">조건부 렌더링</h3>
    <button type="button" class="button" @click="toggleShow">토글해욧</button>
    <p v-if="isShow" class="helper">v-if 조건부 렌더링</p>
    <p v-else class="helper">v-else 조건부 렌더링</p>

    <!-- <button type="button" class="button" @click="increment">버튼{{ isNaN(count % 3) ? 0 : count % 3 }}</button>
    <p v-if="array[isNaN(count % 3) ? 0 : count % 3] === 'a'" class="helper">a</p>
    <p v-else-if="array[isNaN(count % 3) ? 0 : count % 3] === 'b'" class="helper">b</p>
    <p v-else-if="array[isNaN(count % 3) ? 0 : count % 3] === 'c'" class="helper">c</p>
    <p v-else class="help">no</p> -->
  </section>
</template>

<style lang="scss" scoped></style>
