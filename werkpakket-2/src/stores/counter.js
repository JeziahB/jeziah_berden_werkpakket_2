import { defineStore } from 'pinia';
import productenData from '@/assets/product.json';

export const useProductenStore = defineStore({
  id: 'producten',
  state: () => ({
    producten: [],
    winkelwagen: [],
  }),
  getters: {
    getProductById: (state) => (cardId) => {
      return state.producten.find((product) => product.cardId === cardId);
    },
    getCartTotal: (state) => {
      return state.winkelwagen.reduce((total, product) => total + product.quantity, 0);
    },
    getCartTotalPrice: (state) => {
      return state.winkelwagen.reduce((total, product) => total + product.prijs * product.quantity, 0);
    },
  },
  actions: {
    setProducten() {
      this.producten = productenData.producten;
    },

    decreaseStock(cardId) {
      const product = this.getProductById(cardId);
      if (product && product.stock > 0) {
        product.stock -= 1;
      }
    },
    addToCart(product) {
      const cartProduct = this.winkelwagen.find((item) => item.cardId === product.cardId);

      if (cartProduct) {
        // Als het product al in de winkelwagen zit, verhoog de hoeveelheid
        cartProduct.quantity += 1;
      } else {
        // Als het product nog niet in de winkelwagen zit, voeg het toe
        this.winkelwagen.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(cardId) {
      const index = this.winkelwagen.findIndex((item) => item.cardId === cardId);
      if (index !== -1) {
        const product = this.winkelwagen[index];
        // Als de hoeveelheid meer dan 1 is, verminder de hoeveelheid
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          // Verwijder het product volledig als de hoeveelheid 1 is
          this.winkelwagen.splice(index, 1);
        }
      }
    },
    CountQuantity(cardId) {
      const product = this.getProductById(cardId);
      if (product && product.quantity >= 0) {
        product.quantity += 1;
      }
    },
    decreaseQuantity(cardId) {
      const product = this.getProductById(cardId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});