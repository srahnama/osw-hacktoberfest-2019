<template>
  <a href="https://twitter.com/share?ref_src=twsrc%5Etfw"
     class="twitter-share-button"
     data-size="large"
     :data-text="twObj.text"
     :data-url="twObj.url"
     :data-hashtags="twObj.hashTag"
     data-show-count="false"></a>
</template>

<script>
const twObj = {
  text: 'Hey!, join @OS_Weekends and start contributing now! 🎃💙',
  hashTag: 'Hacktoberfest, OSW_Hacktoberfest_19',
  url: 'https://github.com/OSWeekends/osw-hacktoberfest-2019'
}

export default {
  name: 'ShareTwitterBtn',
  data () {
    return {
      twObj
    }
  }
}
</script>
