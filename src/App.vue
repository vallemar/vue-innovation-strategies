<template>
  <div >
    <Header msg="Innovation Strategies"></Header>
    <router-view  class="view"/>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view{
  padding: 0 15px;
}
</style>
<script>
import Header from "@/components/Header";
export default {
  components: {Header}
}
</script>