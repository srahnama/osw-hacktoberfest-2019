<template>
  <div class="generate">
    <h1>Generate JSON</h1>
    <form onsubmit="generateJson()">

      <div class="form-group">
        <label for="username">Github Name:</label>
        <input type="text" id="username">
      </div>

      <div class="form-group">
        <label for="color">Favourite Color:</label>
        <input type="text" id="color">
      </div>

      <div class="form-group">
        <input type="submit" value="Generate">
      </div>
    </form>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Generate',
  data () {
    return {
      form: {
        username: '',
        color: ''
      }
    }
  },
  methods: {
    generateJson () {
      console.log('generando JSON..')
      this.getGithubUser()
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getGithubUser (user) {
      const url = `https://api.github.com/users/${user}`
      return axios.get(url)
    }
  }
}
</script>

<style scoped>

</style>
