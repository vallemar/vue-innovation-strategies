<template>
  <div class="card">
    <div class="content-card">
      <slot></slot>
    </div>

  </div>
</template>


<style scoped lang="scss">
.card {
  padding: 1rem;
}

.content-card {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, .2), 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12);
  border-radius: 6px;
}
</style>
