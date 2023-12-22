<template>
  <div >
    <h2>Aangekochte producten</h2>
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
    <div v-else>
      <h1>Winkelwagen is leeg.</h1>
    </div>

  </div>














  <div>
    <!-- Overzicht van aangekochte producten -->

    <!-- Voeg hier de logica toe om het overzicht van de aangekochte producten weer te geven -->

    <!-- Verzendingsadres formulier -->
    <h2>Verzendingsadres</h2>
    <form @submit.prevent="submitShippingAddress">

      <label>
        Naam:
        <input type="text" v-model="shippingAddress.name" required />
      </label>

      <label>
        Achternaam:
        <input type="text" v-model="shippingAddress.lastName" required />
      </label>

      <label>
        Straat:
        <input type="text" v-model="shippingAddress.street" required />
      </label>

      <label>
        Stad:
        <input type="text" v-model="shippingAddress.city" required />
      </label>

      <label>
        Postcode:
        <input type="text" v-model="shippingAddress.postcode" required />
      </label>
      <br>
      <!-- Checkbox voor afwijkende facturatiegegevens -->
      <label>
        <input type="checkbox" v-model="separateBillingAddress" />
        Afwijkende facturatiegegevens
      </label>

      <!-- Formulier voor facturatiegegevens (zichtbaar indien checkbox is aangevinkt) -->
      <div v-if="separateBillingAddress">
        <h2>Facturatiegegevens</h2>
        <label>
          Naam:
          <input type="text" v-model="billingAddress.name" required />
        </label>

        <label>
          Achternaam:
          <input type="text" v-model="billingAddress.lastName" required />
        </label>

        <!-- Voeg hier andere velden toe voor facturatiegegevens -->
      </div>
      <router-link to="/bevestiging" class="nav-list-link">
      <button type="submit">Volgende</button>
      </router-link>
    </form>
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
      separateBillingAddress: false,
      shippingAddress: {
        name: '',
        lastName: '',
        street: '',
        city: '',
        postcode: '',
      },
      billingAddress: {
        name: '',
        lastName: '',
        // Voeg hier andere velden toe voor facturatiegegevens
      },
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