<template lang="">
  <div class="slider__wrap">
    <span class="left" @click="toLeft">왼쪽</span>
    <span class="right" @click="toRight">오른쪽</span>
    <p>{{ activateImg.name }}</p>
    <img :src="activateImg.src" :alt="activateImg.name" :style="{ width: `${width}px`, height: `${height}px` }" />
    <div class="dot">
      <span @click="setActive(0)" :class="{ active: currIdx === 0 }"> </span>
      <span @click="setActive(1)" :class="{ active: currIdx === 1 }"> </span>
      <span @click="setActive(2)" :class="{ active: currIdx === 2 }"> </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SliderOption } from "@/App.vue";
import { computed, ref, defineComponent } from "vue";

interface Props {
  option: SliderOption;
}

const props = defineProps<Props>();
const currIdx = ref(0);
const toRight = () => {
  currIdx.value = Math.min(currIdx.value + 1, props.option.list.length - 1);
};
const toLeft = () => {
  currIdx.value = Math.max(currIdx.value - 1, 0);
};
const setActive = (idx: number) => (currIdx.value = idx);
const width = computed(() => props.option.width);
const height = computed(() => props.option.height);
const activateImg = computed(() => props.option.list[currIdx.value]);
</script>
<style lang="css">
.dot {
  display: flex;
}

.dot span {
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: black;
  opacity: 0.3;
}

.dot span.active {
  opacity: 1;
}
</style>
