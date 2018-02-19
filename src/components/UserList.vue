<template>
  <div>
    <h3>UserList</h3>
    <div class='container' v-for='user in listOfUsers'>
      <router-link class='names' :to='{
        name: "StocksList",
        params: {userId: user.userId}
      }' tag='h3'>{{user.name}}</router-link>
      <button class='button-remove' type="button" v-on:click='deleteUserAndStocks(user.userId)'>Remove User</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserList",
  data() {
    return {
    }
  },
  props: ['listOfUsers', 'usersApi', 'getUsers'],
  methods: {
    deleteUser(id){
      fetch(this.usersApi, {
        method: 'DELETE',
        body: JSON.stringify({userId: id}),
        headers: ({'Content-Type': 'application/json'})
      })
      .then(() => this.getUsers())
    },
    deleteUserStocks(id){
      fetch('https://tower-server.herokuapp.com/stocks', {
        method: 'DELETE',
        body: JSON.stringify({userId: id}),
        headers: ({'Content-Type': 'application/json'})
      })
    },
    deleteUserAndStocks(id){
      this.deleteUser(id)
      this.deleteUserStocks(id)
    }
  },
  mounted(){
  }
}</script>
<style scoped>
.container{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 75vw;
}

.names {
  background-color: white;
  width: 25vw;
  padding-left: 10px;
}
</style>
