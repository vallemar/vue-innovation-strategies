<template>
  <div class="c-view">
    <div class="">
      <h2>{{keySearch.toUpperCase()}}</h2>
      <Loading full="true" v-if="!data?.results"></Loading>
      <div v-else>
        <ul>
          <li v-for="(item, i) in data?.results" :key="i">
            <router-link :to="childURL"> {{ item.name }}</router-link>
           </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";

import {GenericSwapiResponse, ItemCategoryMenu} from "@/types/types";
import {useRoute} from "vue-router";
import Loading from "@/components/Loading.vue";


export default defineComponent({
  name: "SearchSwapi",
  components: {Loading},
  props: {
    categoryMenu: {
      type: Object as PropType<ItemCategoryMenu>,
      default: null
    }
  },
  setup() {
    const data = ref<GenericSwapiResponse>()
    const route = useRoute()
    const keySearch = route.params.view;
    const childURL = route.path + "/1";

    fetch(process.env.VUE_APP_URL_SWAPI + keySearch).then(async response => {
      data.value = await response.json();
    })
    return {data, keySearch, childURL}
  }
});
</script>
<style scoped>
li{
  display: flex;
  justify-content: flex-start;
  text-align: left;
  padding: 10px 0;
  border-bottom: thin solid rgba(0,0,0,.22);
}
</style>
