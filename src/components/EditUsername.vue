<template>
  <div class='edit-username'>
    <input class='username-input' type="text" v-model='user.name' v-if='inputShow' placeholder='new username'>
    <button class='button-update' v-if="inputShow" @click='updateAndToggle'>Update</button>
    <button class='button-update-show' @click='updateFieldToggle' v-if='updateShow'>Update User</button>
  </div>
</template>
<script>
export default {
  name: "EditUsername",
  data(){
    return {
      inputShow: false,
      updateShow: true,
      usersApi: 'https://tower-server.herokuapp.com/users',
      user: {
        name: ''
      }
    }
  },
  methods: {
    updateFieldToggle(){
      this.inputShow = true
      this.updateShow = false
    },
    updateAndToggle(){
      fetch(this.usersApi + '/' + this.$route.params.userId, {
        method: 'PUT',
        body: JSON.stringify({name: this.user.name}),
        headers: {'Content-Type': 'application/json'}
      })
      .then(() => {
        this.inputShow = false
        this.updateShow = true
      })
    }
  }
}</script>
<style scoped>
.edit-username{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 55vw;
  height: 7vh;
  border-radius: 15px;
  margin-bottom: 10px;
  font-family: 'Mukta Mahee', sans-serif;
}
.button-update-show{
  width: 100%;
  height: 10vh;
  border-radius: 15px;
  border-style: none;
  font-size: 2rem;
  font-family: 'Mukta Mahee', sans-serif;
}
.button-update{
  width: 50%;
  height: 10vh;
  border-radius: 15px;
  border-style: none;
  font-size: 2rem;
  font-family: 'Mukta Mahee', sans-serif;
}
.username-input{
  width: 50%;
  height: 10vh;
  border-radius: 15px;
  border-style: none;
  font-size: 2rem;
  font-family: 'Mukta Mahee', sans-serif;
}
</style>
