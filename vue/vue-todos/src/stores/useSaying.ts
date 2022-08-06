import { defineStore } from "pinia";
import { api } from "@/utils/API/api";

interface SayingResponse {
  slip: {
    advice: string;
    id: number;
  };
}

export const useSaying = defineStore("saying", {
  state: () => ({
    loading: false,
    error: false,
    newSaying: "",
    nextId: 0,
  }),

  actions: {
    async setSaying() {
      try {
        this.loading = true;
        const result = await api<SayingResponse>("https://api.adviceslip.com/advice");
        console.log(result);
        this.newSaying = result.slip.advice;
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
