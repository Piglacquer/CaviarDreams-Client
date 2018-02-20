<template>
  <div id="Chart">
    <div class="container">
      <div class="Chart__list">
        <div class="Chart">
          <Chart v-if='intradayLoaded && monthlyLoaded' :chartData="{stockVolumeIntraday, stockCurrentIntraday, stockHighsMonthly, stockLowsMonthly, stockKeysIntraday, stockKeysIntradayTruncated}" :height='200' :width='900'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart'

export default {
  name: "StockChart",
  components: {
    Chart
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  props: ['stockVolumeIntraday', 'stockHighsMonthly', 'stockLowsMonthly', 'stockKeysIntraday', 'stockCurrentIntraday', 'intradayLoaded', 'monthlyLoaded', 'stockKeysIntradayTruncated'],
  methods:{
  },
  computed:{
  }
}</script>
<style>
.Chart {
  background: #212733;
  border-radius: 15px;
  box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
  margin:  25px -10px;
}
</style>
