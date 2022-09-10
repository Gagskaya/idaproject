<template>
  <div class="content">
    <ContentCard
      v-for="product in products"
      :name="product.name"
      :description="product.description"
      :link="product.link"
      :price="product.price"
      :id="product.id"
    />
  </div>
</template>

<script>
import { FETCH_PRODUCTS } from "@/store/types/products-mutations";

import ContentCard from "@/basic/ContentCard";

export default {
  components: { ContentCard },
  mounted() {
    this.$store.dispatch(FETCH_PRODUCTS);
  },
  computed: {
    products() {
      return this.$store.state.products.items;
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  flex-basis: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media screen and (max-width: 1199px) {
  .content {
    flex-basis: 65%;
  }
}
@media screen and (max-width: 991px) {
  .content {
    flex-basis: 50%;
  }
}
@media screen and (max-width: 767px) {
  .content {
    flex-basis: 100%;
  }
}
</style>
