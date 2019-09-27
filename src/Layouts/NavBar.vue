<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/generate">Generate</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="stylus">
  #nav
    margin-top 20px
    margin-bottom 20px
    text-align center
    a
      font-weight bold
      color #2c3e50
      &.router-link-exact-active
        color #42b983

</style>
