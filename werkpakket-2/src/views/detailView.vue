<script>
import { ref, onMounted } from 'vue';
import { useProductenStore } from '@/stores/counter.js';

export default {
  props: ['cardId'],
  setup(props) {
    const productenStore = useProductenStore();
    const product = ref(null);

    onMounted(() => {
      console.log('Card ID:', props.cardId);

      // Fetch the product based on the cardId in the store
      product.value = productenStore.getProductById(parseInt(props.cardId));

      console.log('Fetched Product:', product.value);
    });

    const addToCart = (cardId) => {
      productenStore.decreaseStock(cardId);
      // Add further logic like updating the shopping cart, etc.
    };

    return {
      product,
      addToCart,
    };
  },
};
</script>

<template>
  <div class="filter_and_product">
    <h2>Product Details</h2>
    <div v-if="product">
      <img :src="product.afbeelding" alt="Product afbeelding" />
      <h3>{{ product.titel }}</h3>
      <p>{{ product.omschrijving }}</p>
      <p>Prijs: €{{ product.prijs.toFixed(2) }}</p>
      <p>Voorraad: {{ product.stock }}</p>
      <button @click="addToCart(product.cardId)" :disabled="product.stock === 0">IN WINKELWAGEN</button>
    </div>
    <div v-else>
      Product not found.
    </div>
  </div>
</template>

