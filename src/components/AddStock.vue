<template>
  <div id="">
    <form method="post" v-on:submit.prevent="postGetReset">
      <label for="ticker">Ticker Symbol:</label>
      <input v-model='stock.tickerSymbol' type="text" name="ticker" placeholder='MSFT'>
      <label for="shares">Number of Shares:</label>
      <input v-model='stock.numberOfShares' type="number" name="shares" placeholder='23'>
      <label for="cost">Average Cost:</label>
      <input v-model='stock.avgCost' type="decimal" name="cost" placeholder='3.50'>
      <button type='submit' class='button-add'>Add Stock</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddStock",
  data() {
    return {
      stock: {
        userId: this.user,
        tickerSymbol: '',
        numberOfShares: '',
        avgCost: '',
      },
      postStockUrl: 'https://tower-server.herokuapp.com/stocks/'
    }
  },
  props: ['user', 'userStocksFetch', 'stockListApiUrl', 'stocksApi'],
  methods:{
    postStock(){
      return fetch(this.postStockUrl, {
        method: "POST",
        body: JSON.stringify(this.stock),
        headers: new Headers({
    'Content-Type': 'application/json'})
      })
      .then(resp => resp.json())
    },
    resetForm(){
      this.stock.tickerSymbol = ''
      this.stock.numberOfShares = ''
      this.stock.avgCost = ''
    },
    postGetReset(){
      this.postStock()
      .then(() => this.stockListApiUrl())
      .then(() => this.userStocksFetch(this.stocksApi))
      .then(() => this.resetForm())
    }
  }
}</script>
<style scoped>
</style>
