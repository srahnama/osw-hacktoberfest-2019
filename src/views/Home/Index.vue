<template>
  <div class="home">
    <HeaderTitle title="Awesome Contributors ✨" />
    <SearchForm/>
    <Contributors />
  </div>
</template>

<script>
import Contributors from './Contributors.vue'
import HeaderTitle from '@/components//HeaderTitle'
import SearchForm from './SearchForm'

export default {
  name: 'Home',
  components: {
    SearchForm,
    HeaderTitle,
    Contributors
  }
}
</script>
