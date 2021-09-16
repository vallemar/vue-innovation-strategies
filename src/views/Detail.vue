<template>
  <div class="c-view">
    <Loading v-if="!data" full="true"></Loading>
    <div class="content-details" v-else>
      <h2> {{ data.name }}</h2>
      <p class="properties" v-for="(property, i) in currentProperties" :key="i">
        <span class="key">{{ buildTitle(property) }}:</span>
        <span> {{ data[property] }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {People, Planets, Starships} from "@/types/types";
import Loading from "@/components/Loading.vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "Detail",
  components: {Loading},
  props: {
    item: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const route = useRoute()
    const data = ref<People | Starships | Planets>(props.item ? JSON.parse(props.item) : null)
    const typeView = route.params.view as string;

    const iteratorByType: any = {
      "people": ["birth_year", "eye_color", "gender", "hair_color"],
      "starships": ["model", "manufacturer", "cost_in_credits", "length",
        "max_atmosphering_speed", "passengers", "consumables", "starship_class"],
      "planets": ["rotation_period", "orbital_period", "diameter", "climate",
        "gravity", "terrain"]
    }
    const currentProperties: string[] = iteratorByType[typeView];

    const buildTitle = (title: string) => title.replace("_", " ")

    if (!data.value) {
      fetch(`${process.env.VUE_APP_URL_SWAPI}${typeView}/${route.params.id}`).then(async response => {
        data.value = await response.json() as People;
      })
    }

    return {data, currentProperties, buildTitle}
  }
});
</script>
<style scoped>
.content-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h2 {
  margin: 16px 0;
}

.properties {
  margin-top: 10px;
}

.properties .key {
  font-weight: bold;
  text-transform: capitalize;

}

.properties :not(.key) {
  padding-left: 15px;
}
</style>
