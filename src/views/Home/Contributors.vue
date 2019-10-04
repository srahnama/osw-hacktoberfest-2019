<template>
  <div class="row">
    <Contributor
      v-for="(contributor, index) in contributors"
      :key="contributor.username"
      :contributor="{...contributor, index}" />
  </div>
</template>

<script>
import Contributor from './Contributor'

export default {
  name: 'Contributors',
  components: {
    Contributor
  },
  props: {
    contributors: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="stylus">

</style>
