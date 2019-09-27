<template>
  <div class="contributors-list">
    <Contributor
      v-for="contributor in contributors"
      :key="contributor.username"
      :contributor="contributor" />
  </div>
</template>

<script>
import Contributor from './Contributor'
import contributors from '../assets/contributors.json'

export default {
  name: 'Contributors',
  components: {
    Contributor
  },
  data () {
    return {
      contributors
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
