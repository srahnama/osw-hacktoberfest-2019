<template>
  <header class="mb-5">
    <h1>{{title}}</h1>
  </header>
</template>
<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: { type: String, required: true }
  }
}
</script>
