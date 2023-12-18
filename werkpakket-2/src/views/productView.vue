<script>

import ProductCardComponent from '../components/ProductCardComponent.vue'
import { useProductenStore } from "@/stores/counter";
import jsonData from '@/assets/product.json'
export default {
  data() {
    return {
      items: jsonData.producten
    }
  },
  props: {
    product: Object
  },

  components: {
    ProductCardComponent
  },
  name: 'ProductList',
  computed: {
    producten() {
      // Hier nieuwe objecten toewijzen om mutaties te voorkomen
      return this.productenStore.producten.map((product) => ({ ...product }));
    },
  },
}
</script>
<template>
  <div class="filter_and_product">

    <div class="filter">
      <h2>Filter</h2>
      <hr class="underline">
      <div class="filter_component">
        <label class="checkBox">
        </label>
        <p>Component</p>
      </div>
      <div class="filter_component">
        <label class="checkBox">
        </label>
        <p>Price: Low to High</p>
      </div>
      <h2>Color</h2>
      <div class="filter_component">
        <label class="checkBox">
        </label>
        <p>Black</p>
      </div>
      <div class="filter_component">
        <label class="checkBox">
        </label>
        <p>Cyan</p>
      </div>
      <div class="filter_component">
        <label class="checkBox">
        </label>
        <p>Light Grey</p>
      </div>
    </div>



  <div class="producten_incol">
    <div class="producten">
  <div v-for="product in items" :key="product.cardId" class="product detail">
  <ProductCardComponent :product="product"/>
  </div>
    </div>
  </div>
  </div>



</template>


