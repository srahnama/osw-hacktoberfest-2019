<template>
  <div class="main-layout">

    <NavBar/>

    <div class="container">
      <hr>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'MainLayout',
  components: { NavBar }
}
</script>
