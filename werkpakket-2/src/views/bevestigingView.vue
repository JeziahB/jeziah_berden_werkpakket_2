<template>
  <div >
    <h1>Succesvolle aankoop!</h1>
    <h2>Aangekochte producten:</h2>
    <div v-if="productenStore.winkelwagen.length > 0">
      <div v-for="product in productenStore.winkelwagen" :key="product.cardId" class="cart">
        <div class="smallerdiv">
          <img :src="product.afbeelding" alt="Product afbeelding" />
        </div>
        <div class="marginchange">
          <h1>{{ product.titel }}</h1>
          <p>{{ product.omschrijving }}</p>
          <p>Prijs: €{{ product.prijs.toFixed(2) }}</p>
          <p>Aantal: {{ product.quantity }}

          </p>
        </div>
      </div>
      <h2>Totaal bedrag: €{{ getCartTotalPrice(productenStore).toFixed(2) }}</h2>
      <h2>Totaal bedrag incl. BTW: €{{ getCartTotalPriceIncludingBTW(productenStore).toFixed(2) }}</h2>

    </div>
    <router-link to="/home" class="nav-list-link">
    <button>Terug naar home</button>
    </router-link>
  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { useProductenStore } from '@/stores/counter.js';

import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default defineComponent({
  name: 'CartView',
  components: ProductCardComponent,

  data() {

    return {
      productenStore: useProductenStore(),

    };
  },
  methods: {

    getCartTotalPrice: function (state) {
      return state.winkelwagen.reduce((total, product) => total + product.prijs * product.quantity, 0);
    },
    getCartTotalPriceIncludingBTW: function (state) {
      const totalPrice = this.getCartTotalPrice(state);
      const btwRate = this.calculateAverageBtwRate(state.winkelwagen);
      return totalPrice * (1 + btwRate);
    },
    calculateAverageBtwRate: function (products) {
      const totalBtwRate = products.reduce((total, product) => total + product.btwTarief / 100, 0);
      return totalBtwRate / products.length;
    },
  },
});
</script>