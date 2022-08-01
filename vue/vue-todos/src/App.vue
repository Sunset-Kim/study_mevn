<script setup lang="ts">
import { RouterView } from "vue-router";
import NavList from "./components/NavList.vue";
</script>

<template>
  <header>
    <NavList />
  </header>

  <!-- 본문내용 -->
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
