<template>
  <div class="generate mb-5">
    <header class="text-center mb-5">
      <h2> Generate JSON </h2>
      <p class="lead text-muted">Fill the form in to generate your JSON. Ready to copy & paste!</p>
    </header>

    <form @submit.prevent="generateJson">
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
          <b-button class="button-custom-width" type="submit" variant="primary">Generate JSON!</b-button>
        </b-col>
      </b-row>
    </form>

    <hr class="my-5">

    <h5>Result: </h5>
    <div class="result bg-light p-3 mb-2 rounded">
      <pre v-if="showCopyModel" class="mb-0" >{{copyModel}}</pre>
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
        color: '#B4DA55',
        username: ''
      },
      copyModel: {
        name: '',
        color: '',
        username: '',
        avatarUrl: ''
      }
    }
  },
  computed: {
    yourColor () {
      return this.form.color ? `Selected color: ${this.form.color}` : ''
    },
    showCopyModel () {
      return this.copyModel.name !== ''
    }
  },
  methods: {
    generateJson (ev) {
      // this.hexToRGB(this.form.color)
      this.getGithubUser(this.form.username)
        .then((res) => {
          console.log(res)
          this.copyModel.name = res.data.name
          this.copyModel.color = this.form.color
          this.copyModel.username = this.form.username
          this.copyModel.avatarUrl = res.data.avatar_url
        })
        .catch((err) => {
          console.log(err)
          this.copyModel = { name: '', color: '', username: '', avatarUrl: '' }
        })
    },
    getGithubUser (user) {
      const url = `https://api.github.com/users/${user}`
      return axios.get(url)
    }
    // hexToRGB (hex) {
    //   // Delete '#'
    //   if (hex.charAt(0) === '#') {
    //     hex = hex.substr(1)
    //   }
    //   const r = parseInt(hex.substring(0, 2), 16)
    //   const g = parseInt(hex.substring(2, 4), 16)
    //   const b = parseInt(hex.substring(4, 6), 16)
    //   this.colorRGB = `rgba(${r}, ${g}, ${b}, 1)`
    // }
  }
}
</script>

<style lang="stylus">
  .generate
    .result
      min-height 158px

    .button-custom-width
      width 145px
</style>
