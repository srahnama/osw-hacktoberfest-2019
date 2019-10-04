<template>
  <section class="center">
    <h1>
      <img src="https://cultofthepartyparrot.com/parrots/hd/twinsparrot.gif" />
    </h1>
    <h4>{{message}}</h4>
  </section>
</template>
<script>
export default {
  name: 'Loader',
  props: { message: { type: String, default: 'Loading...' } }
}
</script>
