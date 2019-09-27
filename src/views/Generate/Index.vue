<template>
  <div class="generate">
    <h1>Generate JSON</h1>
    <form onsubmit="generateJson()">

      <b-form-group
        id="input-group-1"
        label="GitHub username:"
        label-for="input-1"
        description="Your GitHub username"
      >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="text"
          required
          placeholder="Username"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="GitHub username:"
        label-for="input-1"
        description="Format: rgb()"
      >
        <b-form-input
          id="input-1"
          v-model="form.color"
          type="color"
          required
          placeholder="Color"
        ></b-form-input>
      </b-form-group>

      <div>
        <b-button type="submit" variant="primary">Generate</b-button>
      </div>
    </form>

    <pre>{{form}}</pre>
  </div>
</template>

<script>
import axios from 'axios'

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
