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
	name: 'TimeSlider2',
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
		msg: 'Welcome', title: 'TimeSlider2', error: '',
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
		/*nn: function () { 
				if ( this.fontSize === ''){
					console.log ( " No defaults")
					return {t:72.5, l:81.4, k: 500} // Ratio fontSize px to Width px, where k is for stroke
				} else  return this.fontSize;
			},*/
		// mover scale, aspect ratio original 100*8
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
			//this.tmlbl=doAxes.fillAxisLabel(3,1440,12).map((x) => x);
			//console.log(" setTicks DONE",this.middleOffset);
			console.log("setTicks DONE off ", of, "this.middleOffset:", this.middleOffset);
		},
		initSvg(event) {
			console.log(" initSvg props",this.n )
			//console.log( "Class List :",event.target.classList, "Class Name :",event.target.className);
			if (event) {
				this.svgSlider=event.target;
				console.log("Event  this.svgSlider" ,this.svgSlider);
			} else if (!event || !this.svgSlider ) {
				this.svgSlider=document.getElementById('svg0');
				console.log("##this.svgSlider" ,this.svgSlider)
			} else {
				console.log("initSvg not found  svg0" ,this.svgSlider)
				return;
			}

			//console.log("initSvg svgSlider" ,this.svgSlider);
			if (this.svgSlider) {
				let CTM = this.svgSlider.getScreenCTM();
				//console.log(" CTM :" ,CTM);
				let moverPos =this.svgSlider.getElementById('pMover').getBoundingClientRect();
				this.u = CTM.a;
				this.middleOffset = ((moverPos.width)/CTM.a)/2;
				//console.log("moverPos.width:" ,moverPos.width, "this.middleOffset:", this.middleOffset);
				this.setTicks(this.tickCount);
				this.setNowTime();
			}
			//this.svgLegth();
		},
		svgLegth() {
			var tk = document.querySelector(".ticklable");
			console.log( "  svg Length ", tk, " child ", tk.children.length ," baseVal ",  tk.x.baseVal[0] );
			let br = tk.getBoundingClientRect();
			console.log(" bre: " , br);
			var val  = tk.x.baseVal[0];
			console.log(" ##value: " + val.value +
				", #valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
				", #valueAsString: " + val.valueAsString);
			//val.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PT, 20);
			val.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_MM);
				console.log("value: " + val.value +
				", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
				", valueAsString: " + val.valueAsString);
			// read x in pixel and cm units
			for (let i = 0; i < tk.children.length; i++) {
			  console.log(tk.children[i].font-family);
			}
			let attrs=tk.attributes;
			for(var i = attrs.length - 1; i >= 0; i--) {
				console.log(attrs[i].name + "->" + attrs[i].value);
			}
			console.log("font--> ",  attrs['font-size'].value);
			let fs =tk.attributes['font-size'].baseVal;
			console.log("--> ", fs);
			let rec =document.getElementById('svg0')
			console.log("rec --> ", rec);
			let recH = 25.4 * ( this.ds.h / 96);
			let recH1 = 25.4 * ( this.ds.h*this.u / 96);
			let p = "font="+ attrs['font-size'].value+" bre: " + br.width+ " mm ="+ 25.4 * ( br.width / 96)+ " rec H mm:" + recH + " rec1 H mm:" + recH1 +" br.height  mm ="+ 25.4 * ( br.height / 96);
			attrs['font-size'].value=recH1*0.15+"mm";
			this.iList.push(p);
			//console.log("initSlider --> " ,document.getElementById('svg0'));
			
		},
		getMousePosition(evt) {
			//console.log("this.svgSlider: ",this.svgSlider)
			var CTM = this.svgSlider.getScreenCTM();
			return {
				x: (evt.clientX - CTM.e) / CTM.a,
				y: (evt.clientY - CTM.f) / CTM.d
			};
		},
		startDrag(event) {
			if (event.target.classList.contains('draggable')) {
				this.dragging = true;
				this.selectedElement = event.target;
				this.offset = this.getMousePosition(event);
				//console.log("startDrag selectedElement ", this.selectedElement);
				this.offset.x -=  this.x
				let sPos = this.selectedElement.getBoundingClientRect()
				console.log("offset ", this.offset.x, " x ", this.x," sPos ",sPos);
			}
			//console.log( "Class List :",event.target.classList, "Class Name :",event.target.className);
		},
		stopDrag() {
			this.dragging = false;
			// console.log("tstopDrag#### ",this.svgSlider)
			this.selectedElement = null;
			//this.x = this.y = 'no';
		},
		doDrag(event) {
			event.preventDefault();
			let tag = event.target
			if (this.dragging) {
				//this.x = event.clientX;
				 // this.y = event.clientY;
				 // this.x = parseFloat(this.selectedElement.getAttributeNS(null, "x"));
				 // this.x=this.x+1;
				let coord = this.getMousePosition(event);
				let x1 = coord.x - this.offset.x;
				let end = this.tmlbl.slice(-1)[0].tmx-this.middleOffset;
				//console.log(end)
				if ( x1 <= end && x1>0 ){
								this.x = x1;
								this.getDrugTime(this.x)}
				//console.log(this.selectedElement.getAttributeNS(null, "x"), " x ", this.x, "event.clientX",event.clientX);
				 // console.log(coord, " coord ", this.x, "event.clientX",event.clientX);
				//this.selectedElement.setAttributeNS(null, "x", this.x + 1);
				
			}
		},
		getDrugTime(x){
			let m = this.middleOffset + x;
			let row = this.tmlbl.filter(a=> a.tmx >=m ).slice(0,1)[0];
			this.curTm = row.tm;
			this.$emit('currentTime',this.curTm);
			//console.log(row);
			//this.tmlbl.
		},
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
	$colorMain = black
	$color = silver
	body
		font-size 2em
		font 14px/1.5 Helvetica, arial, sans-serif
	.zero 
		width 100%
		display flex
		justify-content center
		align-items center
		&_rect
			stroke darken($colorMain, 10%) 
			stroke-width 5.5 
			fill lighten($color, 90%)
			border-style solid 
			stroke-opacity 0.1
			rx 15
	.axis
		stroke desaturate($colorMain, 10%)	
		&_ticks
			stroke lighten($colorMain, 10%)
			&_labels
				font-family sans-serif
				text-anchor middle
				fill lighten($colorMain, 20%)
				text-align center
  .draggable
		stroke lighten($colorMain, 30%) 
		fill lighten($colorMain, 93%)
		stroke-width  sw = 2
		transition opacity 0.5s linear
		&:hover
			cursor move
			stroke-width sw*1.5
			fill lighten($color, 50%)
	.static 
		cursor arrow
	.lblNowTime
		font-family arial
		fill $colorMain
		text-align center
		text-anchor middle


	
</style>