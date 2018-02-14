<template>
  <div id="">
    <StockCard v-for='stock in userStocks' :stock='stock' :key='stock.tickerSymbol'></StockCard>
  </div>
</template>
<script>
import StockCard from '@/components/StockCard'
export default {
  name: "StocksList",
  data() {
    return {
      stocksApi: '',
      userStocks: []
    }
  },
  components: {
    StockCard
  },
  methods: {
    StockListApiUrl(){
      this.stocksApi = 'https://tower-server.herokuapp.com/stocks/' + this.$route.params.userId
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
    this.StockListApiUrl(),

    fetch(this.stocksApi)
    .then(resp => resp.json())
    .then(resp => this.userStocks = (resp.stocks))


  }
}</script>
<style scoped>

</style>
