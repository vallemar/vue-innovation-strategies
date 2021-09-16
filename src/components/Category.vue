<template>
  <div class="c-category">
    <router-link  :to="{ name: 'search', params: { view: categoryMenu.key }}">
      <h3> {{ categoryMenu.name }}</h3>
    </router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {ItemCategoryMenu} from "@/types/types";

export default defineComponent({
  name: "Category",
  props: {
    categoryMenu: {
      type: Object as PropType<ItemCategoryMenu>,
      default: null
    }
  },
});
</script>

<style scoped lang="scss">
.c-category {
  min-height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
