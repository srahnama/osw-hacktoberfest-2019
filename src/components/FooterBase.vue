<template>
  <footer class="footer bg-light border-top border-white">
    <div class="container">
      <div class="py-4">
        <p class="m-0 text-center">
          <a href="https://github.com/OSWeekends/osw-hacktoberfest-2019"><i class="fab fa-github m-2"></i></a>
          <a href="https://twitter.com/os_weekends"><i class="fab fa-twitter m-2"></i></a>
          <a href="https://meetup.com/es-ES/Open-Source-Weekends"><i class="fab fa-meetup m-2"></i></a>
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

.fa-github
  color #242a2e

.fa-twitter
  color #4fa1f2

.fa-meetup
  color #ee4060
</style>
