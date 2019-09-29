<template>
  <div class="home">
    <HeaderTitle />
    <Contributors />
  </div>
</template>

<script>
import Contributors from './Contributors.vue'
import HeaderTitle from './HeaderTitle'

export default {
  name: 'Home',
  components: {
    HeaderTitle,
    Contributors
  }
}
</script>
