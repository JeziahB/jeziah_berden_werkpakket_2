<script>

import HeaderComponent from './components/HeaderComponent.vue';
import ProductCardComponent from "./components/ProductCardComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  data() {
    return {

    }
  },
  components: {
    HeaderComponent,
    ProductCardComponent,
    FooterComponent,
    NavComponent
  }
}
</script>

<template>
<NavComponent/>
<!--  <HeaderComponent/>-->
<!--  <ProductCardComponent/>-->
<router-view></router-view>
<FooterComponent/>

</template>

<style>

</style>
