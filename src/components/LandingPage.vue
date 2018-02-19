<template>
  <router-link to='/home'>
    <div id="main">
      <img src="../../static/oysterWithCaviar.svg" alt="OverFlowing Caviar">
      <h1>Caviar Dreams</h1>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "LandingPage",
  data(){
    return {

    }
  }
}</script>
<style scoped>
a{
  text-decoration: none;
  color: black;
}

#main{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

img{
  width: 40%;
  margin-bottom: -9rem;
}
h1{
  font-family: 'Yeseva One';
  font-size: 6vw;
  -webkit-text-stroke: 1px white;
  text-decoration: none;
}
</style>
