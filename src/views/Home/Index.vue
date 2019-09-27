<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../../assets/logo.png">-->
    <header>
      <h1>Contributors</h1>
    </header>
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
