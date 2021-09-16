<template>
  <button @click="router.back()" v-if="route.path !== '/'" class="c-back-btn bg-gradient">Back</button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRoute, useRouter} from "vue-router";

export default defineComponent({
  name: "BackBtn",
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    return {route, router}
  }
});
</script>

<style scoped>
.c-back-btn {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.25s;
  font-size: 1rem;
  color: white;
}

.c-back-btn:hover {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  background: rgb(255, 200, 35);
  background: linear-gradient(249deg, rgba(255, 200, 35, 1) 0%, rgba(201, 221, 10, 1) 35%, rgba(0, 177, 193, 1) 100%);
}
</style>
