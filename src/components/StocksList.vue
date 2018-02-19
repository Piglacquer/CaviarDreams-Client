<template>
  <div id="">
    <router-link to="/" tag='h3'>Home</router-link>
    <AddStock :user='this.$route.params.userId' :userStocksFetch='userStocksFetch' :stockListApiUrl='stockListApiUrl' :stocksApi='stocksApi' />
    <StockCard v-for='stock in userStocks' :stock='stock' :key='stock.tickerSymbol' :userStocksFetch='userStocksFetch' :stockListApiUrl='stockListApiUrl' :stocksApi='stocksApi'/>
  </div>
</template>
<script>
import StockCard from '@/components/StockCard'
import AddStock from '@/components/AddStock'

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
    AddStock
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
    // alphaApiUrl(userStocks){
    //   let url= 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols='
    //   for(let i = 0; i < userStocks.length; i++){
    //     url += userStocks[i].tickerSymbol + ','
    //   }
    //   this.alphaApi = url.slice(0, -1) + '&apikey=R0J2HMLV25PDH5MU'
    //   console.log(this.alphaApi)
    // }
  },
  mounted() {
    this.stockListApiUrl(),
    this.userStocksFetch(this.stocksApi)
  }
}</script>
<style scoped>

</style>
