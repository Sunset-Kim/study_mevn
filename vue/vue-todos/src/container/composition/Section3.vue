<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Section3Child from "./Section3Child.vue";
import Section3Emit from "./Section3Emit.vue";
import Section3Slot from "./Section3Slot.vue";

const title = ref("Emit을 받기전입니다");
</script>

<template>
  <section>
    <h3 class="title">자식컴포넌트와 Props</h3>
    <Section3Child msg="안녕" />
  </section>

  <section>
    <h3 class="title">자식컴포넌트와 Emits</h3>
    <p>{{ title }}</p>
    <Section3Emit @response="(text:string) => (title = text)" />
  </section>

  <section>
    <h3 class="title">자식컴포넌트 슬롯</h3>
    <Section3Slot> 슬롯을 삽입했어요 </Section3Slot>
  </section>
</template>

<style lang="scss" scoped></style>
