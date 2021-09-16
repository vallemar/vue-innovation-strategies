<template>
  <div :class="{full: full}">
    <div class="loader"></div>
  </div>

</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  text: String,
  background: {
    type: String,
    default: "rgb(255,200,35)",
  },
  full: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({ count: 0 });
</script>

<style scoped>
div.full{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;
  background: white;
  z-index: 10;

  position: absolute;
  left:0;
  top:0
}
.loader {
  border: 4px solid #F0F0F0;
  border-radius: 50%;
  border-top: 4px solid rgb(255,200,35);
  width: 35px;
  height: 35px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}


/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
