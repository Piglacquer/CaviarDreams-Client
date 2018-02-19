import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartData: {
      type: Array | Object,
      required: true
    }
  },
  data() {
    return {
      options: {
        responsive: true,
        // maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              id: 'A',
              type: 'logarithmic',
              position: 'left'
              // ticks: {
              //   max: Math.max(...this.chartData.stockVolumeIntraday),
              //   min: Math.min(...this.chartData.stockVolumeIntraday)
              // }
            },
            {
              id: 'B',
              type: 'linear',
              position: 'right',
              ticks: {
                max: Math.max(...this.chartData.stockCurrentIntraday),
                min: Math.min(...this.chartData.stockCurrentIntraday)
              }
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(208, 164, 202)')
    this.gradient.addColorStop(0.5, 'rgba(208, 164, 202, 0.25)')
    this.gradient.addColorStop(1, 'rgba(208, 164, 202, 0)')

    this.gradient2.addColorStop(0, 'rgba(68, 231, 204, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.renderChart(
      {
        labels: this.chartData.stockKeysIntraday,
        datasets: [
          {
            label: 'Volume',
            backgroundColor: this.gradient,
            yAxisID: 'A',
            data: this.chartData.stockVolumeIntraday
          },
          {
            label: 'CurrentPrice',
            backgroundColor: this.gradient2,
            yAxisID: 'B',
            data: this.chartData.stockCurrentIntraday
          }
        ]
      },
      this.options
    )
  }
}
