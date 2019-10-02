<template>
  <div class="stats">
    <h1 class="text-center">Stats Page</h1>
  </div>
</template>

<script>
export default {
  name: 'Stats',
  methods: {
    hexToRGB (hex) {
      // Delete '#'
      if (hex.charAt(0) === '#') {
        hex = hex.substr(1)
      }
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)
      const colorRGB = `rgba(${r}, ${g}, ${b}, 1)`
      console.log(colorRGB)
    }
  }
}
</script>

<style lang="stylus">

</style>
