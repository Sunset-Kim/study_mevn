<script setup lang="ts">
import { useCounterStore } from "@stores/counter";

const counter = useCounterStore();

counter.$patch({ counter: counter.counter + 1 });
</script>

<template>
  {{ counter.counter }}

  <button @click="counter.increment">카운터업</button>
</template>
