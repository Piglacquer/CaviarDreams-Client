<template>
  <div id="stocks-list">
    <Header />
    <EditUsername />
    <AddStock :user='this.$route.params.userId' :userStocksFetch='userStocksFetch' :stockListApiUrl='stockListApiUrl' :stocksApi='stocksApi' />
    <StockCard v-for='stock in userStocks' :stock='stock' :key='stock.tickerSymbol' :userStocksFetch='userStocksFetch' :stockListApiUrl='stockListApiUrl' :stocksApi='stocksApi'/>
    <Footer />
  </div>
</template>
<script>
import StockCard from '@/components/StockCard'
import AddStock from '@/components/AddStock'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EditUsername from '@/components/EditUsername'

export default {
  name: "StocksList",
  data() {
    return {
      stocksApi: '',
      userStocks: []
    }
  },
  components: {
    StockCard,
    AddStock,
    Header,
    Footer,
    EditUsername
  },
  methods: {
    stockListApiUrl(){
      this.stocksApi = 'https://tower-server.herokuapp.com/stocks/' + this.$route.params.userId
    },
    userStocksFetch(url){
      fetch(url)
      .then(resp => resp.json())
      .then(resp => this.userStocks = (resp.stocks))
    }
  },
  mounted() {
    this.stockListApiUrl(),
    this.userStocksFetch(this.stocksApi)
  }
}</script>
<style scoped>
#stocks-list{
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>
