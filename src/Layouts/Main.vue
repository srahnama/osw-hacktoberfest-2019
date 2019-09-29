<template>
  <div class="main-layout">

    <NavBar/>

    <div class="container">
      <hr>
      <slot></slot>
    </div>

    <FooterBase/>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import FooterBase from '@/components/FooterBase'

export default {
  name: 'MainLayout',
  components: { FooterBase, NavBar }
}
</script>

<style lang="stylus">
  .main-layout
    margin-bottom: 170px
    position relative

</style>
