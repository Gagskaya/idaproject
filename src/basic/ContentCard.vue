<template>
  <div class="content__card">
    <div class="content__card-header">
      <div class="content__card-header-img">
        <img :src="link" alt="фото товара" />
      </div>
      <div class="content__card-header-delete" @click="() => deleteProduct(id)">
        <img
          src="../assets/icons/delete-product.svg"
          alt="иконка удаления товара"
        />
      </div>
    </div>
    <div class="content__card-footer">
      <div class="content__card-footer-name">
        <h4>{{ name }}</h4>
      </div>
      <div class="content__card-footer-description">
        <p>
          {{ description }}
        </p>
      </div>
      <div class="content__card-footer-price">
        <h3>{{ price }} руб.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_DELETE_PRODUCT } from "@/store/types/products-mutations";

export default {
  props: {
    name: {
      default: "",
      type: String,
    },
    description: {
      default: "",
      type: String,
    },
    link: {
      default: "",
      type: String,
    },
    price: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  methods: {
    deleteProduct(id) {
      if (window.confirm("Вы дейсвительно хотите удалить товар?")) {
        this.$store.dispatch(FETCH_DELETE_PRODUCT, id);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content__card {
  flex-basis: 25%;
  margin-bottom: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    .content__card-header-delete {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
  &-header {
    &-img {
      width: 332px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-delete {
      position: absolute;
      top: -10px;
      right: -10px;
      cursor: pointer;
      opacity: 0;
    }
  }
  &-footer {
    padding: 16px 16px 24px 16px;
    &-name {
      h4 {
        font-family: "Source Sans Pro Semi-Bold";
        font-size: 20px;
        line-height: 25px;
      }
    }
    &-description {
      margin-bottom: 32px;
      margin-top: 16px;
      font-family: "Source Sans Pro Regular";
      font-size: 16px;
      line-height: 20px;
    }
    &-price {
      h3 {
        font-family: "Source Sans Pro Semi-Bold";
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
}
</style>
