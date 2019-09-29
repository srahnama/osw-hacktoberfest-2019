<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../../assets/logo.png">-->
    <header>
      <h1> Awesome Contributors ✨</h1>
    </header>
    <!-- Buscador -->
    <Contributors />
  </div>
</template>

<script>
// @ is an alias to /src
import Contributors from '@/components/Contributors.vue'

export default {
  name: 'home',
  components: {
    Contributors
  }
}
</script>
