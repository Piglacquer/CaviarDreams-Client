<template>
  <div class='user-list-readme'>
    <div class="user-list">
      <div class='users' v-for='user in listOfUsers'>
        <router-link class='names' :to='{
          name: "StocksList",
          params: {userId: user.userId}
        }' tag='h3'>{{user.name}}</router-link>
        <button class='button-remove' type="button" v-on:click='deleteUserAndStocks(user.userId)'>Remove User</button>
      </div>
    </div>
    <div class="readme">
      <h2>What It Is:</h2>
      <p>This is an application designed to help you keep track of your portfolio and how it's doing.</p>
      <h2>How It Works:</h2>
      <p>To your left are the current users for this application, to add yourself to the list enter your username into the field above and hit "Add User".</p>
      <p>Once you've done that, click on your username to transport yourself to your portfolio page, then add your stocks in the input form at the top of the page!</p>
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
.user-list-readme{
  display: flex;
  flex-flow: row nowrap;
}

.user-list{
  display: flex;
  flex-flow: column nowrap;
  margin: 0 1rem 0 2rem;
}

.users{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 50vw;
  background: linear-gradient(to bottom right, #9E8A7C, #857468);
  animation: 1s ease-out 0s 1 slideInFromLeft;
  padding: 30px;
  /* padding: 10px; */
  border-radius: 15px;
  margin-top: 10px;
}

.readme{
  background: linear-gradient(to bottom right, #58A0E8 , #2A6BAB);
  animation: 1s ease-out 0s 1 slideInFromRight;
  padding: 30px;
  /* padding: 5px 15px 5px 15px; */
  border-radius: 15px;
  margin: 10px 2rem 0 1rem;
  font-family: 'Mukta Mahee', sans-serif;
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(+100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
header {


}
</style>
