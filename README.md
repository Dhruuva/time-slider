[![npm version](https://badge.fury.io/js/times-slider.svg)](https://badge.fury.io/js/times-slider)
![npm](https://img.shields.io/npm/dw/times-slider)
![NPM License](https://img.shields.io/npm/l/times-slider)
![Static Badge](https://img.shields.io/badge/vue-3.x-green?style=flat&labelColor=gray)

# times-slider
My times-slider Vue component which provides most comfortable way for user in time operation like selecting,filtering searching ,limiting, ..etc. Compatible with Vue 2.x and at last with Vue 3.
Vue 2 is legacy now (according to Vue documentation).  And all new versions begging with 1.0.17 will not be supported Vue 2 projects. For using it with Vue 2 feel free and follow vue2 branch of this repo.
All below instructions is for Vue 3 projects only.

## Fast look
To view it online and parameters usage visit https://dhruuva.github.io/time-slider/
## Install
``` bash
npm install times-slider --save
```
and in your vue page locally used without component registration ( at my view it most easy  way in Vue 3)
``` html
<template>
   <main>
    <p> {{nowTime}}</p>
    <mySlider v-on:current-time="shiftTime($event)"  color-main="navy"  color='snow'  ></mySlider>
  </main>
</template>

```
``` javascript
 <script setup>
import mySlider from 'times-slider';
import {ref,reactive} from 'vue'
const nowTime = ref('00:00');
const shiftTime = (tm) => nowTime.value=tm;
</script>
```
``` css
<style>
@import '/node_modules/times-slider/times-slider.css';
</style>

```
Or use directly from a CDN
``` html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/times-slider"></script>
<div id="app">
<p>{{curTime}}</p>
<div class="svgResponsive">
	<time-slider v-on:currentTime="shiftTime($event)"></time-slider>
</div>
</div>
<script>
const { createApp,computed } = Vue;
const vm = {
	 components: {
	    'times-slider': window["TimeSlider"]
	     },
	data: () => ({
		curTime: new Date(Date.now()).toTimeString().slice(0,5),
	}),
	
	methods:{
		  shiftTime(a) {
		      this.curTime = a;
		    }
	}	
};
Vue.createApp(vm).mount('#app');
</script>

```
# try it
Go [first-look](https://codepen.io/dhruuva/pen/azNVdOQ)  on [CodePen](https://codepen.io).

## Contributing
pull requests for Fix bugs, doc errors, new style themes and also new features, suggestions for improvement write me    ... welcome.

## License
Copyright (c) 2025
Licensed under the [MIT license](https://github.com/Dhruuva/time-slider?tab=MIT-1-ov-file#readme).
