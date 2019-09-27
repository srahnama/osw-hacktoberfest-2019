<template>
  <div class="contributor">
    {{ contributor }}
  </div>
</template>

<script>
export default {
  name: 'Contributor',
  props: {
    contributor: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
