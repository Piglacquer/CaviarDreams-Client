<template>
  <div id="">
    <h3>AddUser</h3>
    <form method="post" v-on:submit.prevent="postUser">
      <label for="ticker">Username:</label>
      <input type="text" name="UserName" placeholder='Marcus Aurelius' v-model='user.name'>
      <button type="submit" class='button-add'>Add User</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddUser",
  data() {
    return {
      postUserUrl: 'https://tower-server.herokuapp.com/users/',
      user: {
        name: ''
    }
    }
  },
  methods: {
    postUser(){
     fetch(this.postUserUrl, {
        method: 'POST',
        body: JSON.stringify(this.user),
        headers: new Headers({
    'Content-Type': 'application/json'})
      })
      .then(resp => resp.json())
      .then(() => this.user.name = '')
      .then(() => this.getUsers())
      }
    },
    props: ['getUsers']
}</script>
<style scoped>
</style>
