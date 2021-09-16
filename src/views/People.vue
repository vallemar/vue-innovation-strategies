<template>
  <div class="c-view">
    <div class="content-flex ">
      PEOPÑE
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

import {ItemCategoryMenu} from "@/types/types";


export default defineComponent({
  name: "People",
  components: {},
  props: {
    categoryMenu: {
      type: Object as PropType<ItemCategoryMenu>,
      default: null
    }
  },
  setup() {

    return {}
  }
});
</script>
