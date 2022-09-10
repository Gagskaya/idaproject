<template>
  <div class="sidebar">
    <div class="sidebar__form">
      <div class="sidebar__form-name">
        <p>Наименование товара <span class="sidebar__form-required"></span></p>
        <Input
          placeholder="Введите наименование товара"
          v-model="state.name"
          :error="v$.name.$error"
        />
        <span v-if="v$.name.$error" class="sidebar__form-error"
          >Поле является обязательным</span
        >
      </div>
      <div class="sidebar__form-description">
        <p>Описание товара</p>
        <TextField
          placeholder="Введите описание товара"
          v-model="state.description"
        />
      </div>
      <div class="sidebar__form-link">
        <p>
          Ссылка на изображение товара
          <span class="sidebar__form-required"></span>
        </p>
        <Input
          placeholder="Введите ссылку"
          v-model="state.link"
          :error="v$.link.$error"
        />
        <span v-if="v$.link.$error" class="sidebar__form-error"
          >Поле является обязательным</span
        >
      </div>
      <div class="sidebar__form-price">
        <p>Цена товара <span class="sidebar__form-required"></span></p>
        <Input
          placeholder="Введите цену"
          v-model="state.price"
          :error="v$.price.$error"
        />
        <span v-if="v$.price.$error" class="sidebar__form-error"
          >Поле является обязательным</span
        >
      </div>
      <div class="sidebar__form-submit">
        <button
          :class="v$.$errors.length ? 'disabled' : ''"
          @click="addProduct"
        >
          Добавить товар
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import { FETCH_ADD_PRODUCT } from "@/store/types/products-mutations";

import Input from "@/basic/Input";
import TextField from "@/basic/TextField";

export default {
  components: { TextField, Input },
  setup() {
    const state = reactive({
      name: "",
      description: "",
      link: "",
      price: "",
    });
    const rules = computed(() => {
      return {
        name: { required },
        description: "",
        link: { required },
        price: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  methods: {
    addProduct() {
      this.v$.$validate();

      if (this.v$.$errors.length) {
        return;
      }
      const newProduct = {
        name: this.state.name,
        description: this.state.description,
        link: this.state.link,
        price: Number(this.state.price),
      };
      this.$store.dispatch(FETCH_ADD_PRODUCT, newProduct);
      this.state.name = "";
      this.state.description = "";
      this.state.link = "";
      this.state.price = "";
      this.v$.$reset();
    },
  },
  computed: {
    products() {
      return this.$store.state.products.items;
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  flex-basis: 25%;
  max-width: 332px;
  margin-right: 16px;
  p {
    font-size: 10px;
    line-height: 13px;
    color: #49485e;
  }

  &__title {
    h2 {
      font-size: 28px;
      font-family: "Source Sans Pro Semi-Bold";
    }
  }
  &__form {
    margin-top: 16px;
    padding: 24px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    &-required {
      display: inline-block;
      width: 4px;
      height: 4px;
      position: relative;
      top: -5px;
      background: #ff8484;
      border-radius: 4px;
    }
    &-error {
      font-size: 8px;
      line-height: 10px;
      letter-spacing: -0.02em;
      color: #ff8484;
    }
    div {
      margin-bottom: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-name {
      p {
        margin-bottom: 4px;
      }
    }
    &-submit {
      button {
        width: 100%;
        color: #fff;
        background: #7bae73;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        padding: 10px 0 11px 0;
        font-size: 12px;
        line-height: 15px;
        font-family: "Source Sans Pro Semi-Bold";
        cursor: pointer;
        border: none;
        margin-top: 8px;
        &:hover {
          background: #75966e;
        }
        &:active {
          background: #657561;
        }
        &.disabled {
          background: #eeeeee;
          color: #b4b4b4;
          cursor: inherit;
        }
      }
    }
  }
}
@media screen and (max-width: 1199px) {
  .sidebar {
    flex-basis: 35%;
  }
}
@media screen and (max-width: 991px) {
  .sidebar {
    flex-basis: 50%;
  }
}
@media screen and (max-width: 767px) {
  .sidebar {
    flex-basis: 100%;
    margin-bottom: 15px;
  }
}
</style>
