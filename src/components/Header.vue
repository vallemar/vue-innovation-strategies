<template>
  <header class="header">
    <h1 class="text-gradient">{{msg}}</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="scss">
.header{
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
</style>
