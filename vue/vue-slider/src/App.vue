<script lang="ts">
import { defineComponent } from "vue";
import ImgSlider from "./components/ImgSlider.vue";
const BASE = "http://127.0.0.1:12010/img/";

type List = {
  src: string;
  name: string;
  id: number;
};

export interface SliderOption {
  list: List[];
  height: number;
  width: number;
}

export default defineComponent({
  name: "App",
  components: {
    ImgSlider,
  },
  setup() {
    const option = {
      list: [
        {
          src: `${BASE}/img1.jpeg`,
          name: "불놀이야",
          id: 1,
        },
        {
          src: `${BASE}/img2.jpeg`,
          name: "건물이야",
          id: 2,
        },
        {
          src: `${BASE}/img3.jpeg`,
          name: "나도몰러",
          id: 3,
        },
      ],
      height: 800,
      width: 450,
    };
    return {
      option,
    };
  },
});
</script>

<template>
  <ImgSlider :option="option" />
</template>

<style scoped></style>
