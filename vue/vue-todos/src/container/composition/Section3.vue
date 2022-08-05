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
