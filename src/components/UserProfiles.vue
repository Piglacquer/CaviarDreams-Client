<template>
  <div class='users'>
    <h3>UserProfiles</h3>
    <UserList
    :listOfUsers='listOfUsers'
    :usersApi='usersApi'
    :getUsers='getUsers'
    ></UserList>
    <AddUser :getUsers='getUsers'></AddUser>
  </div>
</template>
<script>
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'

export default {
  name: "UserProfiles",
  data(){
    return {
      usersApi: 'https://tower-server.herokuapp.com/users',
      listOfUsers: []
    }
  },
  components:{
    UserList,
    AddUser
  },
  methods:{
    getUsers(){
      fetch(this.usersApi)
      .then(resp => resp.json())
      .then(resp => this.listOfUsers = resp.users)
    }
  },
  mounted() {
    this.getUsers()
  }
}</script>
<style scoped>
.users{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
}
</style>
