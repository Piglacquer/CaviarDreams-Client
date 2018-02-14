<template>
  <div>
    <h3>UserList</h3>
    <div class='container' v-for='user in listOfUsers'>
      <router-link :to='{
        name: "StocksList",
        params: {userId: user.userId}
      }' tag='h3'>{{user.name}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserList",
  data() {
    return {}
  },
  props: ['listOfUsers']

}</script>
<style scoped>
</style>
