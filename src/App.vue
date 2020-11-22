<template lang="pug">
#app
  div.w3-container
    img.w3-display-topleft.w3-container.w3-animate-zoom(alt="Vue logo" src="./assets/logo.png" style="width:10%;max-width:150px")
    div(class="w3-card-4 w3-blue w3-padding-16" id="zero")
      div.w3-container.w3-animate-left
        h2.w3-snow(style="text-shadow:1px 1px 0 #444") This is simple dashboard help You easy apply TimeSlider component on the your page. 
      div.w3-panel.w3-pale-yellow
        h6.w3-opacity You can see the parameters effects and how to easy reach customization of the look.  
      .w3-row-padding.w3-border
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Viewbox width: {{d.w}} 
            input(type="range" v-model="d.w" min="100" max="2000")
        .w3-col.m2
          div.w3-panel.w3-yellow.w3-card-4
            p Viewbox height: {{d.h}} 
            input(type="range" v-model="d.h" min="30" max="200")
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
            input(type="range" v-model="d.mv" min="0.01" max="1.3" step="0.01")
        .w3-col.m10
          blockquote.w3-panel.w3-leftbar.w3-light-grey
          p.w3-large
          i.w3-opacity.w3-large {{str}}
          p Just copy/past this code to your page
      .w3-panel.w3-animate-bottom           
        TimeSlider(ref="timeSlider" :ds="d" :n="f" :tickCount="tickCount" v-on:current-time="shiftTime($event)" :colorMain="colorMain" :color="color") 
      .w3-row-padding.w3-border
        .w3-col.m2
          div.w3-panel.w3-khaki.w3-card-4
            p Label font size: {{f.t}} 
            input(type="range" v-model="f.t" min="10" max="300" step="0.5")
        .w3-col.m2
          div.w3-panel.w3-khaki.w3-card-4
            p Axis labels font size: {{f.l}} 
            input(type="range" v-model="f.l" min="10" max="300" step="0.5")
        .w3-col.m2
          div.w3-panel.w3-khaki.w3-card-4
            p Stroke width: {{f.k}} 
            input(type="range" v-model="f.k"  min="10" max="1000" step="10")
        .w3-col.m2
          div.w3-panel.w3-lime.w3-card-4
            p Axis ticks count: {{tickCount}} 
            input(type="range" v-model.number="tickCount" min="2" max="48" step="1")
        .w3-col.m2
          div.w3-panel.w3-card-4.w3-margin      
            button.w3-button.w3-green.w3-margin(@click="reDraw") ReDraw 
            
      .w3-col.m2.w3-margin
          div.w3-panel.w3-blue.w3-card-4
            h5 Time: 
              span.w3-badge.w3-yellow.w3-xlarge {{curTime}}
      .w3-col.m4.w3-margin
          div.w3-panel.w3-blue.w3-card-4
            p.w3-meddium
            i.w3-opacity.w3-large v-on:current-time="shiftTime($event)"
            p To capture slider value use component 'current-time' event 
      .w3-col.m4.w3-margin
        div.w3-panel.w3-blue.w3-card-4
          div.w3-border.w3-margin
            div.w3-container.w3-margin-left
              label.w3-cell( for="head") Main color for labels,axe & ticks 
                input.w3-cell( type="color" id="head"   v-model="colorMain")
            div.w3-container.w3-margin-left      
              label.w3-cell.w3-margin-left( for="head2") Secondary color for background   
                input.w3-cell( type="color" id="head2"   v-model="color")
            i.w3-opacity.w3-large {{c}}
      .w3-col.m12(style="margin-top:-35px")
        .w3-panel.w3-round-xxlarge.w3-deep-orange.w3-animate-zoom
          h5.w3-snow( style="text-shadow:1px 1px 0 #444") {{html}}         
</template>

<script>
import "@/assets/w3.css";
import TimeSlider from "./components/TimeSlider.vue";

export default {
  name: "app",
  components: {
    TimeSlider,
    "times-slider1": TimeSlider
  },
  data: () => ({
    d: {
      w: 2000,
      h: 120, // for viewBox( 0,0,w,h)
      y: 0.7125, // Percent of height (h) where axis placed 0.50 means middle
      tmy: 0.201, // Percent of height (h) where current time label placed
      tsz: 0.06, // Percent of height (h) ticks length
      lby: 0.93, // Percent of height (h) where ticks labels placed
      mv: 0.93
    }, // Percent of mover size 100 X 100 (thumb)
    f: { t: 72.5, l: 81.4, k: 500 },
    tickCount: 16, // :n="'{t:'+t+',l:'+l+',k:'+k+'}'"
    colorMain: "#2F4F4F",
    color: "#f0f8ff",
    curTime: new Date(Date.now()).toTimeString().slice(0, 5)
  }),
  computed: {
    ds: function() {
      let p = '"{ w:';
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
        '  }"'
      );
      //this.ds1=JSON.parse(p);
      return p;
    },
    n: function() {
      let p = '"{ t:';
      p = p.concat(
        this.f.t.toString(),
        ", l:",
        this.f.l.toString(),
        ", k:",
        this.f.k.toString(),
        ' }"'
      );
      return p;
    },
    t: function() {
      let p = "{ tick-count:";
      p = p.concat(this.tickCount.toString(), " }");
      return p;
    },
    str: function() {
      let p = "<time-slider :ds=";
      p = p.concat(
        this.ds,
        " :n=",
        this.n,
        " :tick-count=",
        this.tickCount,
        " ></time-slider>"
      );
      return p;
    },
    c: function() {
      let p = "color-main='";
      p = p.concat(this.colorMain.toString(), "'  ");
      p = p.concat("color='", this.color.toString(), "'");
      return p;
    },
    html: function() {
      let p = "";
      p = p.concat(
        this.str.toString().slice(0, -15),
        this.c,
        "  v-on:current-time=" + '"shiftTime($event)" ' + " ></time-slider>"
      );

      return p;
    },
    tik: function() {
      console.log(" tickCount ", parseInt(this.tickCount));
      return parseInt(this.tickCount);
    }
  },
  methods: {
    shiftTime(a) {
      this.curTime = a;
    },
    reDraw() {
      //console.log(this.$refs.timeSlider);
      this.$refs.timeSlider.initSvg();
      //timeSlider2.init
    }
  }
};
</script>
<style lang="stylus">
body
  padding 5px
  background-color  #fff6e6
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 30px
</style>
