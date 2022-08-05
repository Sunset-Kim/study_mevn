<template lang="">
  <div>
    <div class="index__container">
      <h2>목차</h2>
      <ul>
        <li><router-link to="/composition/1">1장 컴포지션렌더</router-link></li>
        <li><router-link to="/composition/2">2장 컴포지션렌더</router-link></li>
        <li><router-link to="/composition/3">3장 Child & Props</router-link></li>
      </ul>
    </div>

    <RouterView />
  </div>
  <div></div>
</template>
<script setup></script>
<style lang="scss" scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
}
.index__container {
  margin: 16px 0;
  padding: 16px 0;
  background-color: var(--vue-green-hover);
}
</style>
