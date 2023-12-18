<script>
export default {
  data() {
    return {
      navItems: [
        {
          path: "/",
          name: "home"
        },
        {
          path: "/product",
          name: "product"
        },
        {
          path: "/detail",
          name: "detail"
        },
        // {
        //   path: "/cart",
        //   name: "cart"
        // },
        // {
        //   path: "/login",
        //   name: "login"
        // },
      ]
    }
  },

}
</script>

<template>
<!--  <nav>-->
<!--    <a href="index.html">  <img  src="assets/RockAssistantPNG.png" alt="logo"> </a>-->
<!--    <a href="producten.html">  <h1>Products</h1></a>-->
<!--    <a href="detailpagina.html">  <h1>Details</h1></a>-->

<!--  </nav>-->
  <nav class="navbar">
      <div class="navbar-navigation-right">
        <ul class="nav-list">

          <li v-for="navItem in navItems"
              class="nav-list-item">
            <router-link :to="navItem.path" class="nav-list-link">{{navItem.name}}</router-link>
          </li>
        </ul>
    </div>
    <div class="icons">
      <router-link to="/cart" class="nav-list-link">
      <i class="fa fa-shopping-cart" style="font-size:36px;color:white"></i>
      </router-link>
      <p></p>
      <router-link to="/login" class="nav-list-link">
         <i class="fa fa-user" style="font-size:36px;color:white"></i>
      </router-link>
    </div>
  </nav>
</template>