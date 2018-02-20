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
  padding: 0;
  margin: 0;
  height: 100vh;
}
h4{
  font-family: 'Mukta Mahee', sans-serif;
}
.add-form{
  background-color: white;
  padding: 15px;
  border-radius: 15px;
}

.button-update, .button-update-show{
  background-color:#45B379;
  font-family: 'Mukta Mahee', sans-serif;
}

.button-add{
  background-color: #45B379;
  border-radius: 10px;
  border-style: none;
  height: 2rem;
  width: auto;
  font-family: 'Mukta Mahee', sans-serif;
}

.button-remove{
  background-color: rgb(233, 97, 104);
  border-radius: 10px;
  border-style: none;
  height: 2rem;
  width: auto;
  font-family: 'Mukta Mahee', sans-serif;
}

h3 {
  font-family: 'Yeseva One';
  color: black;
  background-color: white;
}

h4{
  color: white;
}
</style>
