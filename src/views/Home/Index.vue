<template>
  <div class="home">
    <HeaderTitle title="Awesome Contributors ✨" />
    <Contributors />
  </div>
</template>

<script>
import Contributors from './Contributors.vue'
import HeaderTitle from '@/components//HeaderTitle'

export default {
  name: 'Home',
  components: {
    HeaderTitle,
    Contributors
  }
}
</script>
