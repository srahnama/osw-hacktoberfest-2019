<template>
  <div class="main-layout">

    <NavBar/>

    <hr>

    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'MainLayout',
  components: { NavBar }
}
</script>
