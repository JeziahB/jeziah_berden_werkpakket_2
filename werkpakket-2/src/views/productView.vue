<script>
import { ref, watch } from 'vue';
import ProductCardComponent from '../components/ProductCardComponent.vue';
import { useProductenStore } from '@/stores/counter';

export default {
  components: {
    ProductCardComponent,
  },
  setup() {
    const productenStore = useProductenStore();
    const itemsPerPage = 8;
    const currentPage = ref(1);

    const applyFilters = () => {
      productenStore.toggleFilter('categorie', productenStore.selectedFilters.categorie);
      productenStore.toggleFilter('kleur', productenStore.selectedFilters.kleur);

      // Reset to the first page when filters change and recalculate paginatedProducts
      currentPage.value = 1;
      paginatedProducts.value = getPaginatedProducts();
    };

    const goToPage = newPage => {
      if (newPage >= 1 && newPage <= totalPages.value) {
        currentPage.value = newPage;
      }
    };

    const getPaginatedProducts = () => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return productenStore.getFilteredProducts.slice(startIndex, endIndex);
    };

    // Watcher om paginatedProducts opnieuw te berekenen wanneer currentPage wijzigt
    watch(() => currentPage.value, () => {
      paginatedProducts.value = getPaginatedProducts();
    });

    const totalPages = ref(Math.ceil(productenStore.getFilteredProducts.length / itemsPerPage));

    const paginatedProducts = ref(getPaginatedProducts());

    return {
      productenStore,
      applyFilters,
      goToPage,
      currentPage,
      totalPages,
      paginatedProducts,
    };
  },
};
</script>
<template>
  <div class="filter_and_product">
    <div class="filter">
      <h2>Filter</h2>
      <hr class="underline">
      <div class="filter_component">
        <label>Categorie:</label>
        <select v-model="productenStore.selectedFilters.categorie" @change="applyFilters">
          <option value="">Alle categorieën</option>
          <option value="full_product">full product</option>
          <option value="component">component</option>

        </select>
      </div>
      <div class="filter_component">
        <label>Kleur:</label>
        <select v-model="productenStore.selectedFilters.kleur" @change="applyFilters">
          <option value="">Alle kleuren</option>
          <option value="zwart">Zwart</option>
          <option value="blauw">Blauw</option>
          <option value="grijs">Grijs</option>
          <option value="rood">Rood</option>
        </select>
      </div>
    </div>


    <div class="producten_incol">
      <div class="producten">
        <div v-for="product in paginatedProducts" :key="product.cardId" class="product detail">
          <ProductCardComponent :product="product" />
        </div>
      </div>

      <!-- Paginatie-interface -->
      <div class="pagination">
        <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">&#60;</button>
        <span>{{ currentPage }}</span>
        <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">&#62;</button>
      </div>
    </div>
  </div>
</template>