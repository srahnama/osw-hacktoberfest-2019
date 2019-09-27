<template>
  <div class="contributors-list">
    <Contributor
      v-for="contributor in contributors"
      :key="contributor.username"
      :contributor="contributor" />
  </div>
</template>

<script>
import contributors from '../assets/contributors'
import Contributor from './Contributor'

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
