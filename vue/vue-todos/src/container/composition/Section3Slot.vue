<template>
  <div>
    <h5>나는 자식컴포넌트이고, 슬롯을 아래에 렌더링합니다.</h5>
    <slot>원래는 슬롯이에요</slot>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
h5 {
  font-size: 15px;
}
</style>
