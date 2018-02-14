<template>
  <div id="">
    <h3>Ticker: {{stock.tickerSymbol}}</h3>
    <h4>Number of Shares: {{stock.numberOfShares}}</h4>
    <h4>Average Cost: {{stock.avgCost}}</h4>
    <h4>Unrealized Gain/Loss: {{unrealizedGainLoss}}</h4>
    <StockChart :stockVolumeIntraday='stockVolumeIntraday' :stockHighsMonthly='stockHighsMonthly' :stockLowsMonthly='stockLowsMonthly' :stockKeysIntraday='stockKeysIntraday' :stockCurrentIntraday='stockCurrentIntraday'/>
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
      stockLowsMonthly: []

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
    },
    alphaFetchMonthly(api){
      fetch(api)
        .then(resp => resp.json())
        .then(resp => this.stockDataMonthly = resp['Monthly Time Series'])
        .then(() => this.getKeysMonthly())
        .then(() => this.populateStockHighs())
        .then(() => this.populateStockLows())
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
    }
  },
  props: ['stock'],
  mounted(){
    this.alphaApiIntraday(this.stock.tickerSymbol)
    this.alphaApiMonthly(this.stock.tickerSymbol)
    this.alphaFetchMonthly(this.monthlyUrl)
    this.alphaFetchIntraday(this.intradayUrl)
  },
  computed: {
    unrealizedGainLoss(){
      return this.stockCurrentIntraday[0] - this.stock.avgCost
    }
  }
}</script>
<style scoped>
</style>
