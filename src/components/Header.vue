<template>
  <div class='header'>
    <div class='logo'>
      <img src="../../static/oysterWithCaviar.svg" alt="OverFlowing Caviar">
      <h1>Caviar Dreams</h1>
    </div>
    <nav>
      <router-link to="/home" tag='h3'>Home</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header"
}</script>
<style scoped>
.logo{
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding-left: 1rem;
}

nav{
  padding-right: 1rem;
}
.header{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom right, #9E8A7C, #857468);
  width: 100%;
  height: 15vh;
  margin: 0 1rem 2rem 1rem;
}
</style>
