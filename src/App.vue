<template lang="pug">
#app
  .w3-container
    .w3-card-4 
      h2 Simple time slider
      TimeSlider
</template>

<script>
import '@/assets/w3.css';  
import TimeSlider from "./components/TimeSlider.vue";

export default {
  name: "app",
  components: {
    TimeSlider
  }
};
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
