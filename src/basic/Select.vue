<template>
  <select class="select" v-model="selected">
    <option v-for="option in options" :value="option">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
import { SORT_PRODUCTS } from "@/store/types/products-mutations";

export default {
  data() {
    return {
      selected: { text: "По наименованию", value: "name", sortMethod: "asc" },
      options: [
        { text: "По наименованию", value: "name", sortMethod: "asc" },
        {
          text: "По возрастанию цены",
          value: "price",
          sortMethod: "asc",
        },
        {
          text: "По убыванию цены",
          value: "price",
          sortMethod: "desc",
        },
      ],
    };
  },
  watch: {
    selected: {
      handler() {
        this.$store.commit(SORT_PRODUCTS, this.selected);
        // console.log(this.selected);
      },
    },
  },
  computed: {
    products() {
      return this.$store.state.products.items;
    },
    sortBy() {
      return this.$store.state.products.sortBy;
    },
  },
};
</script>

<style scoped lang="scss">
.select {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  font-size: 12px;
  padding: 10px 16px;
  opacity: 0.4;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
</style>
