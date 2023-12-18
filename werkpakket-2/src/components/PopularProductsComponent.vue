<script>
import jsonData from '@/assets/product.json'
export default {
  data() {
    return {
      items: jsonData.producten
    }
  },

  computed: {
    displayTopProducts() {
      // Sort products by stock in descending order
      const top3Products = [...jsonData.producten].sort((a, b) => b.stock - a.stock );

      // Take the top 3 products
      return top3Products.slice(0,3);
    },
    props: [
      'cardId',
      'titel',
      'omschrijving',
      'afbeelding',
      'prijs',
      'btwTarief',
      'stock'
    ],
  }
}
</script>
<template>
  <h1>Populaire producten</h1>
  <div class="filter_and_product">
  <div  class="producten_incol" >
    <div class="producten">
      <div v-for="(product, index) in displayTopProducts" :key="index" class="product detail">
        <img class="fotoo" :src='product.afbeelding' alt="showproduct">

        <h2>{{ product.title}}</h2>
        <p>{{ product.omschrijving }}</p>

        <p>8 core Rockchip</p>
        <p>8 GB of 64bit DDR4 memory.</p>
        <h2 class="bottom right">$39.99</h2>
      </div>
    </div>
  </div>
  </div>


</template>

<style >

</style>
