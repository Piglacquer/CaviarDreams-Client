<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import UserProfiles from '@/components/UserProfiles'
export default {
  name: 'App'
}</script>

<style>
body{
  background-color: #000016;
}

.button-add{
  background-color: rgb(142, 235, 143);
  border-radius: 10px;
  border-style: none;
  height: 2rem;
  width: auto;
}

.button-remove{
  background-color: rgb(233, 97, 104);
  border-radius: 10px;
  border-style: none;
  height: 2rem;
  width: auto;
}

h3 {
  font-family: 'Yeseva One';
  color: white;
}

h4{
  color: white;
}
</style>
