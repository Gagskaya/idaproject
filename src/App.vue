<template>
  <div class="app">
    <Header />
    <div class="app-wrap">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";

export default {
  components: {
    Header,
    Sidebar,
    Content,
  },
};
</script>

<style lang="scss">
@import "./assets/fonts/fonts.css";

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Sans Pro Regular";
  outline: none;
  font-size: 16px;
}

.app {
  width: 1440px;
  margin: 0 auto;
  padding: 32px;
  &-wrap {
    display: flex;
  }
}
@media screen and (max-width: 1439px) {
  .app {
    width: 1140px;
  }
  .content {
    &__card {
      flex-basis: 49%;
    }
  }
}
@media screen and (max-width: 1199px) {
  .app {
    width: 950px;
  }
}
@media screen and (max-width: 991px) {
  .app {
    width: 650px;
  }
}
@media screen and (max-width: 767px) {
  .app {
    width: 400px;
    padding: 10px;
    &-wrap {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
@media screen and (max-width: 419px) {
  .app {
    width: 100%;
  }
}
</style>
