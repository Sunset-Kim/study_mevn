<template lang="">
  <div>자식 emit('response', "텍스트")</div>
</template>
<script setup>
const emit = defineEmits(["response"]);

emit("response", "자식으로 부터 Emit Response를 받았어요");
</script>
<style lang=""></style>
