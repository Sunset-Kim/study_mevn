<template lang="">
  <div>나는 자식 프롭스이여유</div>
  <p>
    {{ props.msg }}
  </p>
</template>
<script setup>
const props = defineProps({
  msg: String,
});
</script>
<style></style>
