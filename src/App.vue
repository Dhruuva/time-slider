<template lang="pug">
#app
  .w3-container
    div(class="w3-container w3-blue" id="zero")
      h2 Simple time slider
      .w3-row-padding.w3-border
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Viewbox width: {{d.w}} 
            input(type="range" v-model="d.w" min="100" max="2000")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Viewbox height: {{d.h}} 
            input(type="range" v-model="d.h" min="100" max="200")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Axis y: {{d.y}} 
            input(type="range" v-model="d.y" min="0.61" max="0.95" step="0.01")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Label y: {{d.tmy}} 
            input(type="range" v-model="d.tmy" min="0.01" max="0.95" step="0.01")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Tick size: {{d.tsz}} 
            input(type="range" v-model="d.tsz" min="0.01" max="0.95" step="0.01")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Axis labels y: {{d.lby}} 
            input(type="range" v-model="d.lby" min="0.01" max="0.95" step="0.01")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Thumb size: {{d.mv}} 
            input(type="range" v-model="d.mv" min="0.01" max="0.95" step="0.01")
        .w3-col.m6
          blockquote.w3-panel.w3-leftbar.w3-light-grey
          p.w3-large
          i {{str}}
          p Just copy/past this code to your page
      .w3-panel           
        TimeSlider(:ds="d" :n="f" :tickCount="tickCount" ) 
      .w3-row-padding.w3-border
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Label font size: {{f.t}} 
            input(type="range" v-model="f.t" min="10" max="300" step="0.5")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Axis labels font size: {{f.l}} 
            input(type="range" v-model="f.l" min="10" max="300" step="0.5")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Stroke width: {{f.k}} 
            input(type="range" v-model="f.k"  min="10" max="1000" step="10")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Axis tick count: {{tickCount}} 
            input(type="range" v-model.number="tickCount" min="2" max="48" step="1")

      .w3-row-padding.w3-margin-top
        .w3-third
          input.w3-input.w3-border(type='text' placeholder='One')
        .w3-third
          input.w3-input.w3-border(type='text' placeholder='Two')
        .w3-third
          input.w3-input.w3-border(type='text' placeholder='Three')  
</template>

<script>
import "@/assets/w3.css";
import TimeSlider from "./components/TimeSlider.vue";

export default {
  name: "app",
  components: {
    TimeSlider
  },
  data: () => ({
    d: {
      w: 2000,
      h: 120, // for viewBox( 0,0,w,h)
      y: 0.7125, // Percent of height (h) where axis placed 0.50 means middle
      tmy: 0.201, // Percent of height (h) where current time label placed
      tsz: 0.06, // Percent of height (h) ticks length
      lby: 0.93, // Percent of height (h) where ticks labels placed
      mv: 0.06
    }, // Percent of mover size 100 X 100 (thumb)
    f: { t: 72.5, l: 81.4, k: 500 },
    tickCount: 16 // :n="'{t:'+t+',l:'+l+',k:'+k+'}'"
  }),
  computed: {
    ds: function() {
      let p = "{ w:";
      p = p.concat(
        this.d.w.toString(),
        ", h:",
        this.d.h.toString(),
        ", y:",
        this.d.y.toString(),
        ", tmy:",
        this.d.tmy.toString(),
        ", tsz:",
        this.d.tsz.toString(),
        ", lby:",
        this.d.lby.toString(),
        ", mv:",
        this.d.mv.toString(),
        " }"
      );
      //this.ds1=JSON.parse(p);
      return p;
    },
    n: function() {
      let p = "{ t:";
      p = p.concat(
        this.f.t.toString(),
        ", l:",
        this.f.l.toString(),
        ", k:",
        this.f.k.toString(),
        " }"
      );
      return p;
    },
    t: function() {
      let p = "{ tickCount:";
      p = p.concat(this.tickCount.toString(), " }");
      return p;
    },
    str: function() {
      let p = ":ds=";
      p = p.concat(this.ds, " :n=", this.n, " :tickCount=", this.tickCount);
      return p;
    },
    tik: function() {
      console.log(" tickCount ", parseInt(this.tickCount));
      return parseInt(this.tickCount);
    }
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
