<template>
  <section class="col-12 pt-3 shadow bg-white rounded">
    <h4>Color Grid</h4>
    <div class="row">
      <div class="color-tile"
        v-for="color in uniqueColors"
        :key="color"
        :style="{ backgroundColor: color }"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ColorGrid',
  props: {
    colors: {
      type: Array,
      required: true
    }
  },
  data: () => ({ uniqueColors: undefined }),
  mounted () {
    this.uniqueColors = new Set(this.colors)
  }
}
</script>

<style lang="stylus">
  .color-tile
    height 1em
    width 1em
    min-height 0.1em
    border solid 1px white
</style>
