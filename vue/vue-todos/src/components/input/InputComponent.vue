<template lang="">
  <div>
    <form class="form" v-on:submit.prevent="onSubmit">
      <input class="input" type="text" :value="text" @input="onInput" />
      <button class="button">입력</button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputComponent",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onInput(e: Event) {
      this.text = (e.target as HTMLInputElement).value;
    },
    onSubmit(e: Event) {
      this.$emit("send", this.text);
      this.text = "";
    },
  },
});
</script>
<style lang=""></style>
