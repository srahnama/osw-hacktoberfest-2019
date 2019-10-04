<template>
  <div class="mt-5 pt-5">
    <b-form-group label="Days of the week">
      <b-form-radio-group
        v-model="selected"
        :options="days"
        name="radio-inline"
        @change="fetchData"
      ></b-form-radio-group>
    </b-form-group>
    <pre>{{selected}}</pre>

    <apexchart v-if="isReady" height="200" :options="options" :series="series"></apexchart>
    <p class="lead text-center">Number of commits for day in each hour</p>
  </div>
</template>
<script>
import { get } from 'axios'

const days = [
  { text: 'Monday', value: '1' },
  { text: 'Tuesday', value: '2' },
  { text: 'Wednesday', value: '3' },
  { text: 'Thursday', value: '4' },
  { text: 'Friday', value: '5' },
  { text: 'Saturday', value: '6' },
  { text: 'Sunday', value: '7' }
]

export default {
  name: 'ChartsStats',
  data () {
    return {
      isReady: false,
      selectedDay: 1,
      selectedData: [],
      options: {
        chart: {
          width: '100%',
          height: 200,
          type: 'bar',
          id: 'example'
        }
      },
      series: [],
      selected: '1',
      days
    }
  },
  methods: {
    // Recargar
    fetchData () {
      const url = 'https://api.github.com/repos/OSWeekends/osw-hacktoberfest-2019/stats/punch_card'
      get(url)
        .then((res) => {
          this.selectedData = res.data.filter(item => item[0] === Number(this.selected))
          console.log(this.selectedData)
          this.options.xaxis = { categories: this.selectedData.map(item => item[1]) }
          this.series = []
          this.series.push({})
          this.series[0].data = this.selectedData.map(item => item[2])
          this.series[0].name = 'Number of Commits'
          this.isReady = true
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
