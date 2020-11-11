<template lang="pug">
	div
		p(v-if="error") {{error}}
		svg#svg0.zero( :viewBox="'0,0,'+ds.w+','+ds.h+''" xmlns="http://www.w3.org/2000/svg"  @mousedown="startDrag($event)" @mousemove="doDrag" @load="initSvg")
				defs(id="comps")
					g#mover
						path(d="m0 10 h80 l0 20 l-20 0 l-10 20 l10 0 l-20 20 l-20 -20 l10 0 l-10 -20 l-20 0 l0 -20")
				g.static
					rect.zero_rect( x="0" y="0" :width="ds.w" :height="ds.h" )
					line.axis( :x1="middleOffset" :x2="ds.w-middleOffset" :y1="ds.h*ds.y" :y2="ds.h*ds.y" :stroke-width="k"  )
					text.lblNowTime( :x="x+middleOffset" :y="ds.h*ds.tmy"   :font-size="tmf" ) {{curTm}}
				g.static(v-for="n in tiki" :key="n.id") 
					line.axis_ticks( :x1="n.x" :x2="n.x" :y1="ds.h*ds.y" :y2="ds.h*ds.y-ds.h*ds.tsz" :stroke-width="k")
					text.axis_ticks_labels( :x="n.x" :y="ds.h*ds.lby"  :font-size="lbf" ) {{n.tml}}
				g#pMover( @mouseenter="canSliderDrug=!canSliderDrug" @mouseleave="canSliderDrug=!canSliderDrug")
					use.draggable(xlink:href="#mover"  :transform="'translate('+x+','+ds.h*y+') scale('+mv+')'" )
</template>

<script>
import DoAxes from "@/libs/doAxes.js";
/* eslint-disable */
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
export default {
	name: 'TimeSlider',
	props: {
		n: {
			type:Object,
			default: () =>( {t:72.5, l:81.4, k: 500}) // Ratio fontSize px to Width px, where t for time text,l for ticks text, k is for stroke
		},
		ds: {
			type:Object,
			default: () =>( 
				{
					w: 2000,
					h: 120,     // for viewBox( 0,0,w,h)
				   y: 0.7125,   // Percent of height (h) where axis placed 0.50 means middle
				   tmy: 0.201,  // Percent of height (h) where current time label placed
				   tsz: 0.06,   // Percent of height (h) ticks length
				   lby: 0.93,   // Percent of height (h) where ticks labels placed
				   mv:  0.06,   // Percent of mover size 100 X 100 (thumb)

				}
			) //ds:{w:2000, h:120,  y:0.7125, tmy:0.20, tsz:0.06, lby:0.93, mv:0.06 },
		},
		tickCount:{
			type:Number,
			default: () =>( 25)
		}
	},
	components: {
	
	},
	data:() => ({
		msg: 'Welcome', title: 'TimeSlider', error: '',
		tiki: [],
		tmlbl:[{"id" : 1 ,tm: "06:00", tmx:3.001}],
		dragging: false,canSliderDrug: false,
		x: 50,  y: 0.15,
		u: 1,     // Point size in Pixel
		curTm:"06:00",
		selectedElement:false,
		offset:0,  // Mouse offset define in startDrag
		svgSlider:null,
		middleOffset:0,
	}),
	computed: {
		mv: function () { return (this.ds.h/8)*0.06  },
		tmf: function () { return ((this.ds.w*this.u/this.n.t)/this.u)+"px"  },
		lbf: function () { return ( (this.ds.w*this.u/this.n.l)/this.u)+"px" },
		k  : function () { return ( (this.ds.w*this.u/this.n.k)/this.u  )+"px"  },
		ewd: function () { return (this.ds.w*this.u)+"px"  },
	},
	mounted: function () {
		window.addEventListener('mouseup', this.stopDrag);
		this.initSvg();
	},
	created() {
	
	},
	activated(){
	
	},
	watch: {

	},
	methods: {

		setNowTime(){
			// Set Current Time
			this.curTm = new Date(Date.now()).toTimeString().slice(0,5);
			let pos =  this.tmlbl.find(a => a.tm == this.curTm);
			//console.log( " Cur getTime" ,this.curTm, " pos ", pos, "middleOffset:",this.middleOffset);
			if (pos) this.x = pos.tmx - this.middleOffset ;
		},
		setTicks(tickCount) {
			let doAxes = new DoAxes();
			//let of = this.ds.of*this.ds.w;
			let of = this.middleOffset;
			// Fill Time Label tmlbl ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			while (this.tmlbl.length>0) {	this.tmlbl.pop()		};

			this.tmlbl=doAxes.fillTimeLabel(this.ds.w,of,1440).map((x) => x);
			while (this.tiki.length>0) {	this.tiki.pop()	};
			this.tiki=doAxes.fillAxisLabel(of,1440,tickCount).map((x) => x);
		},
		initSvg(event) {
			if (event) {
				this.svgSlider=event.target;
			} else if (!event || !this.svgSlider ) {
				this.svgSlider=document.getElementById('svg0');
			} else {
				return;
			}

			if (this.svgSlider) {
				let CTM = this.svgSlider.getScreenCTM();
				let moverPos =this.svgSlider.getElementById('pMover').getBoundingClientRect();
				this.u = CTM.a;
				this.middleOffset = ((moverPos.width)/CTM.a)/2;
				this.setTicks(this.tickCount);
				this.setNowTime();
			}
			
		},
		getMousePosition(evt) {
			// var CTM = this.svgSlider.getScreenCTM();
			// return {
			// 	x: (evt.clientX - CTM.e) / CTM.a,
			// 	y: (evt.clientY - CTM.f) / CTM.d
			// };
			
			  let pt = this.svgSlider.createSVGPoint();
			  pt.x = evt.clientX;
			  pt.y = evt.clientY;
			  let cursorPt = pt.matrixTransform(this.svgSlider.getScreenCTM().inverse());
			  return {x: Math.floor(cursorPt.x), y: Math.floor(cursorPt.y)}
			
		},
		startDrag(event) {
			if (event.target.classList.contains('draggable')) {
				this.dragging = true;
				this.selectedElement = event.target;
				this.offset = this.getMousePosition(event);
				//console.log("startDrag selectedElement ", this.selectedElement);
				this.offset.x -=  this.x
				let sPos = this.selectedElement.getBoundingClientRect()
			}
		},
		stopDrag() {
			this.dragging = false;
			this.selectedElement = null;
		},
		doDrag(event) {
			event.preventDefault();
			let tag = event.target
			if (this.dragging) {
				let coord = this.getMousePosition(event);
				let x1 = coord.x - this.offset.x;
				let end = this.tmlbl.slice(-1)[0].tmx-this.middleOffset;
				if ( x1 <= end && x1>0 ){
					this.x = x1;
					this.getDrugTime(this.x)
				}
			}
		},
		getDrugTime(x){
			let m = this.middleOffset + x;
			let row = this.tmlbl.filter(a=> a.tmx >=m ).slice(0,1)[0];
			this.curTm = row.tm;
			this.$emit('current-time',this.curTm);

		},
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '.././assets/style/main.styl'
	
</style>