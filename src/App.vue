<template>
  <div id="app">
    <vLayout>
      <router-view/>
    </vLayout>
  </div>
</template>

<script>
import vLayout from '@/layouts/Main'

export default {
  name: 'App',
  components: {
    vLayout
  }
}
</script>

<style lang="stylus">
#app
  position relative
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

</style>
