<template>
  <select @change="onChange">
    <option selected value> -- select an option --</option>
    <option v-for="(name, i) in items" :key="i" :value="name">{{ name }}</option>
  </select>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Filter",
  props: {
    items: {
      type: Array,
      default: () => ([])
    }
  },
  setup(props, context) {

    const onChange = (e: any) => {
      context.emit('update:query', e.target.value)
    }
    return {
      onChange
    }
  }
});
</script>

<style scoped lang="scss">

</style>
