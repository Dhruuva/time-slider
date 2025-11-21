[![npm version](https://badge.fury.io/js/times-slider.svg)](https://badge.fury.io/js/times-slider)
![npm](https://img.shields.io/npm/dw/times-slider)
![Static Badge](https://img.shields.io/badge/vue-2.x-green?style=flat&labelColor=gray)
![Static Badge](https://img.shields.io/badge/vue2-v1.0.16-green?style=flat&labelColor=gray)

# TimeSlider
A TimeSlider Vue component. Compatible with Vue 2.x only. 
## Demo

To view online and parameters usage visit repo github-pages:
https://dhruuva.github.io/time-slider/
## Install
``` bash
npm install times-slider --save
```

``` javascript
<script>
 import TimeSlider from 'times-slider'
export default {
	name: 'TestPage',
	components: {
		TimeSlider
	},
	data () {
		return {
			curTime: "00:00"
		}
	},
	methods:{
		shiftTime(a) {
			this.curTime=a
		}

	}
}
</script>
```
Or use directly from a CDN
``` html
<script src="https://unpkg.com/vue@2.7.16"></script>
<script src="https://unpkg.com/times-slider@1.0.16"></script>
<div id="app">
<p>{{curTime}}</p>
<div class="svgResponsive">
	<time-slider v-on:currentTime="shiftTime($event)"></time-slider>
</div>
</div>
<script>
	new Vue({
		el: '#app',
		components: {
		  	TimeSlider
		},
		data: () => ({
			curTime: "00:00"
		}),
		methods:{
		  	shiftTime(a) {
		      this.curTime = a;
		    },
		}
		
	})
</script>

```
# try it
Go [first-look](https://codepen.io/dhruuva/pen/YzWMYWJ) by Aleksey Bazhenov
  ([@dhruuva](https://codepen.io/dhruuva)) on [CodePen](https://codepen.io).
