<template>
  <div class="home">
    <HeaderTitle title="Awesome Contributors ✨" />
    <SearchForm @onsearch="searchChange"/>
    <Contributors :contributors="contributors"/>
  </div>
</template>

<script>
import Contributors from './Contributors.vue'
import SearchForm from './SearchForm'
import HeaderTitle from '@/components//HeaderTitle'
import contributors from '@/assets/contributors.json'

export default {
  name: 'Home',
  components: {
    SearchForm,
    HeaderTitle,
    Contributors
  },
  data () {
    return {
      contributors
    }
  },
  methods: {
    searchChange (val) {
      // Filter list
      console.log('SEARCH VAL: ', val)
    }
  }
}
</script>
