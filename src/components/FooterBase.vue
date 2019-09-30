<template>
  <footer class="footer bg-light border-top border-white">
    <div class="container">
      <div class="py-4">
        <p class="m-0 text-center">
          <a href="https://github.com/OSWeekends/osw-hacktoberfest-2019"><i class="fab fa-github fa-2x"></i></a>
          <a href="https://github.com/OSWeekends/osw-hacktoberfest-2019"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="https://github.com/OSWeekends/osw-hacktoberfest-2019"><i class="fab fa-meetup fa-2x"></i></a>
          </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterBase'
}
</script>

<style lang="stylus">

.footer
  position fixed
  bottom 0
  width 100%

i
  margin 2%

.fab
  shadows : 10px 10px #000

.fa-github
  color #242a2e

.fa-twitter
  color #4fa1f2

.fa-meetup
  color #ee4060
</style>
