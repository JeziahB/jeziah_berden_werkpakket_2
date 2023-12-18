
<script>
import { ref, onMounted } from 'vue';
import { useProductenStore } from '@/stores/counter.js';

export default {
  props: {
    product: Object,
  },
  setup(props) {
    const productenStore = useProductenStore();
    const product = ref(null);

    onMounted(() => {
      // Zoek het product op basis van het cardId in de store
      product.value = productenStore.getProductById(props.product.cardId);
    });

    const addToCart = (cardId) => {
      productenStore.decreaseStock(cardId);
      // Voeg verdere logica toe zoals het bijwerken van de winkelwagen, enz.
    };

    return {
      product,
      addToCart,
    };
  },
};
</script>



<template>
  <div>
    <h2>Product</h2>
    <div v-if="product">
      <router-link :to="{ name: 'product-detail', params: { cardId: product.cardId }}" tag="li">
        <img :src="product.afbeelding" alt="Product afbeelding" />
      </router-link>
      <h3>{{ product.titel }}</h3>
      <p>{{ product.omschrijving }}</p>
      <p>Prijs: €{{ product.prijs.toFixed(2) }}</p>
      <p>Voorraad: {{ product.stock }}</p>
      <button @click="addToCart(product.cardId)" :disabled="product.stock === 0">IN WINKELWAGEN</button>
    </div>
    <div v-else>
      Geen producten beschikbaar.
    </div>
  </div>

</template>
