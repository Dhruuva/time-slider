[![npm version](https://badge.fury.io/js/times-slider.svg)](https://badge.fury.io/js/times-slider)

# TimeSlider
A TimeSlider Vue component. Compatible with Vue 2.x
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
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/times-slider"></script>
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
