<template lang="pug">
#app
  div.w3-container
    img.w3-display-topleft.w3-container.w3-animate-zoom(alt="Vue logo" src="./assets/logo.svg" style="width:10%;max-width:150px")
    div(class="w3-card-4 w3-blue w3-padding-16" id="zero")
      div.w3-container.w3-animate-left
        h3.w3-snow(style="text-shadow:1px 1px 0 #444") This is simple dashboard help You easy implement TimeSlider component on the your page. 
      div.w3-panel.w3-pale-yellow
        h6.w3-opacity You can see the parameters effects and how to easy reach customization of the look.  
      .w3-cell-row.w3-border.w3-padding-small
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Viewbox width: {{d.w}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.w" min="100" max="2000")
      
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Viewbox height: {{d.h}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.h" min="30" max="200")
      
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Axis y: {{d.y}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.y" min="0.61" max="0.95" step="0.01")
      
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Label y: {{d.tmy}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.tmy" min="0.01" max="0.95" step="0.01")
      
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Tick size: {{d.tsz}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.tsz" min="0.01" max="0.95" step="0.01")
      
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Axis labels y: {{d.lby}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.lby" min="0.01" max="0.95" step="0.01")
      
        div.w3-container.w3-yellow.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Thumb size: {{d.mv}} 
          input.w3-input.w3-animate-input(type="range" v-model="d.mv" min="0.01" max="1.3" step="0.01")
      .w3-cell-row.w3-border
        .w3-panel.w3-round-xxlarge.w3-deep-orange.w3-animate-zoom
          button.fly( @click="copyText" )
            Icon(icon="prime:copy" height="29") 
          h5.w3-snow( style="text-shadow:1px 1px 0 #444") {{html}}
          p.w3-small Just copy/past this code to your page
      .w3-panel.w3-animate-bottom           
        TimeSlider(ref="timeSlider" :ds="d" :n="f" :tickCount="tickCount" v-on:current-time="shiftTime($event)" :colorMain="colorMain" :color="color") 
      .w3-cell-row.w3-border.w3-padding-small
        div.w3-container.w3-khaki.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Label font size: {{f.t}} 
          input.w3-input.w3-animate-input(type="range" v-model="f.t" min="10" max="300" step="0.5")
        div.w3-container.w3-khaki.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Axis labels font size: {{f.l}} 
          input.w3-input.w3-animate-input(type="range" v-model="f.l" min="10" max="300" step="0.5")
        div.w3-container.w3-khaki.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Stroke width: {{f.k}} 
          input.w3-input.w3-animate-input(type="range" v-model="f.k"  min="10" max="1000" step="10")
        div.w3-container.w3-lime.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large.w3-animate-left Axis ticks count: {{tickCount}} 
          input.w3-input.w3-animate-input(type="range" v-model.number="tickCount" min="2" max="48" step="1")
        div.w3-container.w3-blue.w3-cell.w3-border.w3-border-grey.w3-round-large.w3-tooltip
          span.w3-text.w3-tag.w3-small.w3-light-grey use initSvg() method to update appearance
          button.w3-btn.w3-blue.w3-margin.w3-padding-large.w3-border.w3-border-gray(@click="reDraw")
            p.w3-xlarge Reload
      .w3-cell-row.w3-border.w3-padding-small
        div.w3-container.w3-blue.w3-cell.w3-border.w3-border-grey.w3-round-large
          h6 Time: 
            span.w3-badge.w3-yellow.w3-xlarge {{curTime}}
        div.w3-container.w3-blue.w3-cell.w3-border.w3-border-grey.w3-round-large
          p.w3-large To capture slider value use component 'current-time' event
          i.w3-opacity.w3-large v-on:current-time="shiftTime($event)" 
        div.w3-container.w3-blue.w3-cell.w3-border.w3-border-grey.w3-round-large
          div.w3-border.w3-margin
            div.w3-container.w3-margin-left
              label.w3-cell.w3-large( for="head") Main color for labels,axe & ticks 
                input.w3-cell( type="color" id="head"   v-model="colorMain")
            div.w3-container.w3-margin-left      
              label.w3-cell.w3-margin-left.w3-large( for="head2") Secondary color for background   
                input.w3-cell( type="color" id="head2"   v-model="color")
            i.w3-opacity.w3-large {{c}}

      .w3-cell-row.w3-border.w3-padding-small(style="margin-top:-5px")
        times-slider1(ref="timeSlider2" :ds="{ w:958, h:45, y:0.78, tmy:0.201, tsz:0.06, lby:0.93, mv:0.35 }" :n="{ t:97, l:119.5, k:1000 }" tick-count=13 color-main='#f0ee56' color='#472713' v-on:current-time="shiftTime($event)")
      textarea#aria(:style="aStyle" rows="1" :value="html" )    
</template>

<script>
import TimeSlider from "./components/TimeSlider.vue";
import { Icon } from '@iconify/vue';
export default {
  name: "app",
  components: {
    TimeSlider,
    "times-slider1": TimeSlider,
    Icon
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
    curTime: new Date(Date.now()).toTimeString().slice(0, 5),
    aStyle: "visibility: hidden;"
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
    },
    copyText(){
      this.aStyle="visibility: visible;"
      setTimeout(()=>{
        let aria = document.getElementById("aria");
        aria.focus();
        aria.select(); 
        document.execCommand("copy");
        this.aStyle="visibility: hidden;"   
      },5);
      return 'ok';     
    }
  }
};
</script>
<style lang="stylus">
body
  padding 1px
  background-color  #fff6e6
  line-height 0.6em
input 
  padding 1px !important
#aria
  opacity 3%  
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 30px
.fly
  float: right;
  padding 0.01em 0.01em
  z-index 1
  margin-left -3rem
  margin-top 3rem
  &:hover
    border 1px solid #0f5ef3
    background-image linear-gradient(to bottom, #9eee, #eee)
  &:active 
    color rgb(213, 251, 251)
    text-shadow 1px 2px 0 rgba(0,0,0,0.5)
    background-image: linear-gradient(to bottom, #a7c3f4, #103675);
    border 1px solid rgba(0,0,0,0.3)
    border-style groove
    box-shadow: 0.3em 0.3em  rgb(10, 38, 46) groove;  

</style>



