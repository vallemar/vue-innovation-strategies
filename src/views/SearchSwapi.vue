<template>
  <div class="c-view">
    <div class="">
      <h2>{{ keySearch.toUpperCase() }}</h2>
      <Loading full="true" v-if="!data"></Loading>
      <div v-else>
        <Filter v-model:query="filterName" :items="filters" class="filter"/>
        <ul>
          <li v-for="(item, i) in dataFilter" :key="i">
            <router-link :to="{name: 'details', params: {id: (i+1),  item: JSON.stringify(item) }}"> {{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";

import {GenericSwapiResponse, ItemCategoryMenu, ItemSWAPI} from "@/types/types";
import {useRoute} from "vue-router";
import Loading from "@/components/Loading.vue";
import Filter from "@/components/Filter.vue";


export default defineComponent({
  name: "SearchSwapi",
  components: {Filter, Loading},
  props: {
    categoryMenu: {
      type: Object as PropType<ItemCategoryMenu>,
      default: null
    }
  },
  setup() {
    /*INIT*/
    const data = ref<ItemSWAPI[]>()
    const route = useRoute()
    const keySearch = route.params.view;
    const childURL = route.path + "/1";
    const filters = ref<string[]>()
    const filterName = ref<string>("")

    fetch(process.env.VUE_APP_URL_SWAPI + keySearch).then(async response => {
      data.value = (await response.json() as GenericSwapiResponse).results;
      filters.value = data.value.map(result => result.name)
    })

    /*COMPUTED*/
    const dataFilter = computed(() => filterName.value ? data.value?.filter(result => result.name.includes(filterName.value)) : data.value)


    return {data, keySearch, childURL, filters, dataFilter, filterName}
  }
});
</script>
<style scoped>
li {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  padding: 10px 0;
  border-bottom: thin solid rgba(0, 0, 0, .22);
}

.filter {
  margin-top: 1rem;
}
</style>
