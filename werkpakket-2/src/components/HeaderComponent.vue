<script>

export default {

}
</script>

<template>
  <div id="homepage">
    <div class="front_landing">
      <h1>Rock Assistant</h1>
      <h2>Rock your Home Assistant!</h2>
      <ul>
        <li><p>A High Performance, Low Power Consuming,<br> Computer for Home Assistant</p></li>
        <li><p>Running Debian Linux 12 </p></li>
        <li><p>Docker installed for containerized running of <br> the Supervised version of Home Assistant.</p></li>
        <li><p>Fully customizable</p></li>
      </ul>
      <router-link to="/product" class="nav-list-link">
      <p id="readmore">Explore more</p>

      <button class="shadow__btn">Order Now!</button>
      </router-link>
    </div>
    <div class="mainimg">
      <img src="src/assets/images/rock_assistant_headimg.png" alt="prodcut">

    </div>

  </div>
  <div id="uitleg">
    <div class="detail">
      <h2>CPU</h2>
      <p>The Rock Assistant runs on the Radxa Rock 5B Single Board Computer using an 8 core Rockchip RK3588 SoC. This is a combined ARM quad core Cortex - A76 CPU @ 2.2/2.4GHz and a quad core Cortex - A55 CPU @ 1.8GHz and an ARM Mali - G610MC4 GPU.</p>
    </div>
    <div class="detail">
      <h2>Memory</h2>
      <p>The Rock Assistant has 8 GB of 64bit DDR4 memory. </p>
    </div>

    <div class="detail">
      <h2>Storage</h2>
      <p>A 256 or 512 GB Samsung NVME SSD is the Boot, OS, Applications & Data drive.</p>
    </div>


  </div>
</template>

<style >

</style>
