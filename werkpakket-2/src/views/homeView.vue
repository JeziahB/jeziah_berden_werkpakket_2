<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import PopularProductsComponent from "../components/PopularProductsComponent.vue";

export default {
data()
{
  return {

  }
},
  components: {
    HeaderComponent,
    PopularProductsComponent

  }
}
</script>
<template>
<!--  <AboutComponent/>-->

<!--  <section class="gallery">-->
<!--    <div class="cards-wrapper">-->
<!--      <CardComponent v-for="product in products"-->
<!--                     v-bind:key="product.id"-->
<!--                     v-bind:product="product"-->
<!--      />-->
<!--    </div>-->
<!--  </section>-->
    <HeaderComponent/>
  <PopularProductsComponent/>
</template>



<style scoped>

</style>