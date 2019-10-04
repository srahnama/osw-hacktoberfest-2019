<template>
  <b-form>
    <b-form-group id="fieldset-1" description="Let us know your name." label="Enter your name" label-for="search">
      <b-form-input id="search" v-model="name" trim></b-form-input>
    </b-form-group>
  </b-form>
</template>
<script>
export default {
  name: 'SearchForm'
}
</script>
