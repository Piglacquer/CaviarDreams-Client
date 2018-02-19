<template>
  <div id="StockCard">
    <div class="Numbers">
      <div class='stock-header'>
        <h3 class='ticker'>Ticker: {{stock.tickerSymbol}}</h3>
        <button type="button" class='button-remove' @click='removeAndRefresh' name="remove">Remove Stock</button>
      </div>
      <h4 class='shares'>Number of Shares: {{stock.numberOfShares}}</h4>
      <h4 class='cost'>Average Cost: {{stock.avgCost}}</h4>
      <h4 class='gainLoss'>Unrealized Gain/Loss: {{unrealizedGainLoss}}</h4>
    </div>
    <StockChart :stockVolumeIntraday='stockVolumeIntraday' :stockHighsMonthly='stockHighsMonthly' :stockLowsMonthly='stockLowsMonthly' :stockKeysIntraday='stockKeysIntraday' :stockCurrentIntraday='stockCurrentIntraday' :intradayLoaded='intradayLoaded' :monthlyLoaded='monthlyLoaded' />
  </div>
</template>
<script>
import StockChart from '@/components/StockChart'

export default {
  name: "StockCard",
  data() {
    return {
      intradayUrl: '',
      monthlyUrl: '',
      stockDataIntraday: [],
      stockKeysIntraday: [],
      stockVolumeIntraday: [],
      stockCurrentIntraday: [],
      stockDataMonthly: [],
      stockKeysMonthly: [],
      stockHighsMonthly: [],
      stockLowsMonthly: [],
      intradayLoaded: false,
      monthlyLoaded: false,
      deleteStockUrl: ''

    }
  },
  components: {
    StockChart
  },
  methods: {
    alphaApiIntraday(stock){
      this.intradayUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + stock + '&interval=1min&apikey=R0J2HMLV25PDH5MU'
    },
    alphaApiMonthly(stock){
      this.monthlyUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=' + stock + '&apikey=R0J2HMLV25PDH5MU'
    },
    alphaFetchIntraday(api){
      fetch(api)
        .then(resp => resp.json())
        .then(resp => this.stockDataIntraday = resp['Time Series (1min)'])
        .then(() => this.getKeysIntraday())
        .then(() => this.populateStockCurrent())
        .then(() => this.populateStockVolume())
        .then(() => this.intradayLoaded = true)
    },
    alphaFetchMonthly(api){
      fetch(api)
        .then(resp => resp.json())
        .then(resp => this.stockDataMonthly = resp['Monthly Time Series'])
        .then(() => this.getKeysMonthly())
        .then(() => this.populateStockHighs())
        .then(() => this.populateStockLows())
        .then(() => this.monthlyLoaded = true)
    },
    getKeysIntraday(){
      this.stockKeysIntraday = Object.keys(this.stockDataIntraday)
    },
    populateStockVolume(){
      for (var i = 0; i < this.stockKeysIntraday.length; i++) {
        this.stockVolumeIntraday.push(this.stockDataIntraday[this.stockKeysIntraday[i]]['5. volume'])
      }
    },
    populateStockCurrent(){
      for (var i = 0; i < this.stockKeysIntraday.length; i++) {
        this.stockCurrentIntraday.push(this.stockDataIntraday[this.stockKeysIntraday[i]]['4. close'])
      }
    },
    getKeysMonthly(){
      this.stockKeysMonthly = Object.keys(this.stockDataMonthly)
    },
    populateStockHighs(){
      for (var i = 0; i < this.stockKeysMonthly.length; i++) {
        this.stockHighsMonthly.push(this.stockDataMonthly[this.stockKeysMonthly[i]]['2. high'])
      }
      this.stockHighsMonthly.splice(12)
    },
    populateStockLows(){
      for (var i = 0; i < this.stockKeysMonthly.length; i++) {
        this.stockLowsMonthly.push(this.stockDataMonthly[this.stockKeysMonthly[i]]['3. low'])
      }
      this.stockLowsMonthly.splice(12)
    },
    stockDeleteApiUrl(){
      this.deleteStockUrl = 'https://tower-server.herokuapp.com/stocks/' + this.$route.params.userId
      console.log(this.deleteStockUrl)
      console.log(this.stock.tickerSymbol, 'hi')
    },
    removeStock(){
      return fetch(this.deleteStockUrl, {
        method: 'DELETE',
        body: JSON.stringify({ticker: this.stock.tickerSymbol}),
        headers: {'Content-Type': 'application/json'}
      })
    },
    removeAndRefresh(){
      this.stockDeleteApiUrl()
      this.removeStock()
      .then(() => this.stockListApiUrl())
      .then(() => this.userStocksFetch(this.stocksApi))
    }
  },
  props: ['stock', 'userStocksFetch', 'stockListApiUrl', 'stocksApi'],
  mounted(){
    this.alphaApiIntraday(this.stock.tickerSymbol)
    this.alphaApiMonthly(this.stock.tickerSymbol)
    this.alphaFetchMonthly(this.monthlyUrl)
    this.alphaFetchIntraday(this.intradayUrl)
  },
  computed: {
    unrealizedGainLoss(){
      return ((this.stockCurrentIntraday[0] - this.stock.avgCost) * this.stock.numberOfShares).toFixed(2)
    }
  }
}</script>
<style scoped>
#StockCard{
  /* display:flex; */
  /* flex-flow: row nowrap; */
  /* width: 100%;
  height: 100%; */
}
.Numbers{
  display: flex;
  flex-flow: column nowrap;
}
StockChart{

}
.stock-header{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
