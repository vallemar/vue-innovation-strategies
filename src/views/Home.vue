<template>
  <div class="c-view">
    <div class="content-flex ">
      <Card class="column-12 column-4-m" v-for="(itemMenu, i) in categoryMenu" :key="i">
        <Category :categoryMenu="itemMenu"></Category>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Category from "@/components/Category.vue";
import {ItemCategoryMenu} from "@/types/types";
import Card from "@/components/Card.vue";


export default defineComponent({
  name: "Home",
  components: {
    Card,
    Category
  },
  setup() {
    const categoryMenu: ItemCategoryMenu[] = [
      {name: "People", key: "people"},
      {name: "Starships", key: "starships"},
      {name: "Planets", key: "planets"},
    ];
    return {
      categoryMenu
    }
  }
});
</script>
