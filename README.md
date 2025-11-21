[![npm version](https://badge.fury.io/js/times-slider.svg)](https://badge.fury.io/js/times-slider)
![npm](https://img.shields.io/npm/dw/times-slider)
![MIT License](https://img.shields.io/github/license/dhruuva/times-slider.svg)
# times-slider
My times-slider Vue component which provides most comfortable way for user in time operation like selecting,filtering searching ,limiting, ..etc. Compatible with Vue 2.x and at last with Vue 3.
Vue 2 is legacy now (according to Vue documentation).  And all new versions begging with 1.0.17 will not be supported Vue 2 projects. For using it in Vue 2 feel free and follow vue2 branch of this repo.
All below instructions is for Vue 3 projects only.

## Fast look
To view it online and parameters usage visit https://dhruuva.github.io/time-slider/
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

## Contributing
pull requests for Fix bugs, doc errors, new style themes and also new features, suggestions for improvement write me    ... welcome.

## License
Copyright (c) 2025
Licensed under the [MIT license](https://github.com/Dhruuva/time-slider?tab=MIT-1-ov-file#readme).
