<template>
  <nav>
    <ul class="wrapper">
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
.wrapper {
  display: flex;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  a {
    text-transform: capitalize;
    font-size: 16px;
  }
}

a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid $border;

  &:first-of-type {
    border: 0;
  }
}
</style>
