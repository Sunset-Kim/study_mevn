<template>
  <nav class="nav">
    <ul>
      <li v-for="item in routes" :key="item.name">
        <router-link :to="{ name: item.name }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import routes from "../router/routes";
</script>

<style scoped lang="scss">
$border: var(--color-border);

.nav {
  ul {
    display: flex;
    justify-content: center;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid $border;
    text-transform: capitalize;

    &:first-of-type {
      border: 0;
    }
  }
}
</style>
