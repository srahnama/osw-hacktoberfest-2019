<template>
  <div class="generate">
    <header class="text-center mb-5">
      <h2> Generate JSON </h2>
      <p class="lead text-muted">Fill the form in to generate your JSON. Ready to copy & paste!</p>
    </header>
    <form onsubmit="generateJson()">
      <b-row>
        <b-col sm="6">
          <b-form-group
            id="input-group-1"
            label="GitHub username:"
            label-for="input-1"
            description="Your github username"
          >
            <b-form-input
              id="input-1"
              v-model="form.username"
              type="text"
              required
              placeholder="Username"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            id="input-group-2"
            label="Favourite color:"
            label-for="input-2"
            :description="yourColor"
          >
            <b-form-input
              id="input-2"
              v-model="form.color"
              type="color"
              required
              placeholder="Color"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col sm="12" class="d-flex justify-content-end">
          <b-button type="submit" variant="primary">Generate</b-button>
        </b-col>
      </b-row>
    </form>

    <hr>

    <div class="result bg-light p-3 rounded">
      <pre v-if="resultIsReady">{{form}}</pre>
    </div>
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
      },
      resultIsReady: true
    }
  },
  computed: {
    yourColor () {
      return this.form.color ? `Selected color: ${this.form.color}` : ''
    }
  },
  methods: {
    generateJson () {
      this.resultIsReady = false

      this.getGithubUser()
        .then((res) => {
          this.resultIsReady = true
          console.log(res)
        })
        .catch((err) => {
          this.resultIsReady = false
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
