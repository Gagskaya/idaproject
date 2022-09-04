<template>
  <div class="header">
    <div class="header__title">
      <h2>Добавление товара</h2>
    </div>
    <div class="header__sort">
      <Select />
    </div>
  </div>
</template>

<script>
import Select from "../basic/Select";

export default {
  components: { Select },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  &__sort {
    margin-bottom: 16px;
  }
}
</style>
