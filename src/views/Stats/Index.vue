<template>
  <div class="stats">
    <HeaderTitle title="Contributors stats 🚀" />
    <section class="row" v-if="loaded">
      <StatsWidget class="mr-2" title="Contributors" :value="contributorsCount" />
      <ColorWidget class="ml-2" title="Average Color" :value="averageColor" />
      <ColorGridWidget class="mt-4" :colors="colors" />
    </section>
    <template v-else>
      <p>Loading...</p>
    </template>

    <template v-if="isReady">
      <apexchart height="200" :options="options" :series="series"></apexchart>
    </template>
  </div>
</template>

<script>
import { get } from 'axios'

import HeaderTitle from '@/components/HeaderTitle'
import contributors from '@/assets/contributors.json'
import StatsWidget from './StatsWidget'
import ColorWidget from './ColorWidget'
import ColorGridWidget from './ColorGridWidget'

import { colorHelper } from '@/modules/color'

export default {
  name: 'Stats',
  components: { HeaderTitle, ColorWidget, ColorGridWidget, StatsWidget },
  data: () => ({
    contributors,
    colorHelper,
    loaded: false,
    averageColor: undefined,
    contributorsCount: contributors.length.toString(),
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
    series: [
      {
        name: 'Number of Commits'
      }
    ]
  }),
  async mounted () {
    this.averageColor = await this.getRGBAverage()
    this.loaded = true

    const url = 'https://api.github.com/repos/OSWeekends/osw-hacktoberfest-2019/stats/punch_card'
    get(url)
      .then((res) => {
        console.log(res)
        this.selectedData = res.data.filter(item => item[0] === 1)
        console.log(this.selectedData)
        this.options.xaxis = {
          categories: this.selectedData.map(item => item[1])
        }
        this.series[0].data = this.selectedData.map(item => item[2])
        this.isReady = true
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    async getRGBAverage () {
      const colors = this.colors.map(c => c.replace(/#/g, ''))
      const rgbValue = await this.colorHelper.getRGBAverageFromHex(colors)
      const jsonColor = await this.colorHelper.getJsonColor(rgbValue, 'rgb')

      return jsonColor.hex.value
    }
  },
  computed: {
    colors () {
      return this.contributors.map(c => c.color)
    }
  }
}
</script>

<style lang="stylus">
.stats-dashboard
  display: flex
  justify-content: space-evenly
</style>
