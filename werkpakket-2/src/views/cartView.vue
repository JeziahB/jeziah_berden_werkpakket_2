<template>
  <div >
    <h2>Winkelwagen</h2>
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
          <button @click="removeFromCart(product.cardId)">-</button>
        <button @click="countQuantity(product.cardId)">+</button>

        </p>
        </div>
      </div>
      <h2>Totaal bedrag: €{{ getCartTotalPrice(productenStore).toFixed(2) }}</h2>
      <h2>Totaal bedrag incl. BTW: €{{ getCartTotalPriceIncludingBTW(productenStore).toFixed(2) }}</h2>

    </div>
    <div v-else>
      <h1>Winkelwagen is leeg.</h1>
    </div>
    <router-link to="/checkout" class="nav-list-link">
    <button>Ga naar checkout</button>
    </router-link>
  </div>
</template>

<script>
import { useProductenStore } from '@/stores/counter.js';
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
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
    removeFromCart(cardId) {
      this.productenStore.removeFromCart(cardId);
    },
    countQuantity(cardId) {
      const product = this.productenStore.getProductById(cardId);

      if (product) {
        // Increase the quantity
        this.productenStore.addToCart(product);
      }
    },

  }
};
</script>