<template>
  <div>
    <b-form-group id="fieldset-1" description="Search user or name." label="Search" label-for="search">
      <b-form-input id="search" v-model="search" trim @input="onInput"></b-form-input>
    </b-form-group>
  </div>
</template>
<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onInput (val) {
      this.$emit('onsearch', val)
    }
  }
}
</script>
