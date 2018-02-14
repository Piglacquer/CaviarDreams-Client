<template>
  <div id="">
    <p>CurrentPrice: {{stockCurrentIntraday}}</p>
    <p>IntradayVolume: {{stockVolumeIntraday}}</p>
    <p>MonthlyHighs: {{stockHighsMonthly}}</p>
    <p>MonthlyLows: {{stockLowsMonthly}}</p>
    <p>IntradayKeys: {{stockKeysIntraday}}</p>
  </div>
</template>
<script>
export default {
  name: "StockChart",
  data() {
    return {
    }
  },
  props: ['stockVolumeIntraday', 'stockHighsMonthly', 'stockLowsMonthly', 'stockKeysIntraday', 'stockCurrentIntraday'],
  methods:{

  },
  mounted(){
  },
  computed:{
  }
}</script>
<style scoped>
div{

}

</style>
