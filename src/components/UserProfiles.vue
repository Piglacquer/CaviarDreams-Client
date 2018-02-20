<template>
  <div class='users'>
    <Header />
    <AddUser :getUsers='getUsers'></AddUser>
    <UserList
    :listOfUsers='listOfUsers'
    :usersApi='usersApi'
    :getUsers='getUsers'
    ></UserList>
    <Footer />
  </div>
</template>
<script>
import UserList from '@/components/UserList'
import AddUser from '@/components/AddUser'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    AddUser,
    Header,
    Footer
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
  height: 100vh;
  background-image: url('../../static/oysterWithCaviar.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}
</style>
