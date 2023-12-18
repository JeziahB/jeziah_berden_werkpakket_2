<template>
  <div>
    <h2>Winkelwagen</h2>
    <div v-if="productenStore.winkelwagen.length > 0">
      <div v-for="product in productenStore.winkelwagen" :key="product.cardId">
        <p>{{ product.titel }} - Hoeveelheid: {{ product.quantity }}</p>
        <p>Prijs per stuk: €{{ product.prijs.toFixed(2) }}</p>
        <p>Totaal prijs: €{{ (product.prijs * product.quantity).toFixed(2) }}</p>
        <button @click="removeFromCart(product.cardId)">Verwijder</button>
      </div>
      <hr />
      <p>Totale prijs winkelwagen: €{{ productenStore.getCartTotalPrice.toFixed(2) }}</p>
    </div>
    <div v-else>
      Winkelwagen is leeg.
    </div>
  </div>
</template>

<script>
import { useProductenStore } from '@/stores/counter.js';

export default {
  name: 'CartView',
  data() {
    return {
      productenStore: useProductenStore(),
    };
  },
  methods: {
    removeFromCart(cardId) {
      this.productenStore.removeFromCart(cardId);
    },
  },
};
</script>