<script>
import { useProductenStore } from '@/stores/counter.js';

export default {
  data() {
    return {
      productenStore: useProductenStore(),
    };
  },
  computed: {
    opvraagProduct() {
      const productId = this.$route.params.cardId;
      return this.productenStore.getProductById(productId);
    },
  },
  methods: {
    addToCart() {
      if (this.opvraagProduct && this.opvraagProduct.stock > 0) {
        // Maak een kopie van het product om wijzigingen te vermijden
        const cartProduct = { ...this.opvraagProduct };

        // Controleer of het product al in de winkelwagen zit
        const cartItem = this.productenStore.winkelwagen.find(
            (item) => item.cardId === cartProduct.cardId
        );

        if (cartItem) {
          // Als het product al in de winkelwagen zit, verhoog de hoeveelheid
          cartItem.quantity += 1;
        } else {
          // Voeg het product toe aan de winkelwagen met een beginhoeveelheid van 1
          cartProduct.quantity = 1;
          this.productenStore.winkelwagen.push(cartProduct);
        }

        // Werk de voorraad bij in de winkel
        this.productenStore.decreaseStock(cartProduct.cardId);

      }
    },
  },
};
</script>
<template>
  <div class="filter_and_product">
    <h2>Product Details</h2>

    <div v-if="opvraagProduct">
      <div class="imgsmaller">
      <img :src="opvraagProduct.afbeelding" alt="Product afbeelding" />
      </div>
      <h3>{{ opvraagProduct.titel }}</h3>
      <p>{{ opvraagProduct.omschrijving }}</p>
      <p>Prijs: €{{ opvraagProduct.prijs }}</p>
      <p>Voorraad: {{ opvraagProduct.stock }}</p>
      <button @click="addToCart" :disabled="opvraagProduct.stock === 0">
        IN WINKELWAGEN
      </button>
    </div>
    <div v-else>
      Product not found.
    </div>
  </div>
</template>
