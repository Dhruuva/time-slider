(function(t){function e(e){for(var r,n,l=e[0],d=e[1],s=e[2],p=0,c=[];p<l.length;p++)n=l[p],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&c.push(i[n][0]),i[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);w&&w(e);while(c.length)c.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,l=1;l<o.length;l++){var d=o[l];0!==i[d]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=o[0]))}return t}var r={},i={app:0},a=[];function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var w=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"01b2":function(t,e,o){var r=o("f70c");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=o("499e").default;i("ef263a6c",r,!0,{sourceMap:!1,shadowMode:!1})},"14f0":function(t,e,o){var r=o("24fb");e=r(!1),e.push([t.i,"body[data-v-bbf30598]{font-size:2em;font:14px/1.5 Helvetica,arial,sans-serif}.zero[data-v-bbf30598]{width:100%;display:flex;justify-content:center;align-items:center}.zero_rect[data-v-bbf30598]{stroke:#000;stroke-width:5.5;fill:#f9f9f9;border-style:solid;stroke-opacity:.1;rx:15}.axis[data-v-bbf30598]{stroke:#000}.axis_ticks[data-v-bbf30598]{stroke:#1a1a1a}.axis_ticks_labels[data-v-bbf30598]{font-family:sans-serif;text-anchor:middle;fill:#333;text-align:center}.draggable[data-v-bbf30598]{stroke:#4d4d4d;fill:#ededed;stroke-width:2;transition:opacity .5s linear}.draggable[data-v-bbf30598]:hover{cursor:move;stroke-width:3;fill:#e0e0e0}.static[data-v-bbf30598]{cursor:arrow}.lblNowTime[data-v-bbf30598]{font-family:arial;fill:#000;text-align:center;text-anchor:middle}",""]),t.exports=e},"2d49":function(t,e,o){function r(){var t=[],e=[],o=function(t){return new Promise((function(e,o){var r="return:";try{var i=100/t;if(isNaN(t)||!isFinite(i))throw console.log(isNaN(t),isFinite(i)),"Parameter is not a number!"+i;e(r+t+i)}catch(a){o(a)}}))},r=function(e,o,r){while(t.length>0)t.pop();var i=o,a=1,n=parseFloat((e-2*o)/r),l=new Date,d=6-l.getTimezoneOffset()/60;l.setHours(d,0,0);while(a<=1440){i+=n;var s={id:Math.round(a),tm:new Date(l).toISOString().slice(11,16),tmx:i};t.push(s),l=new Date(l).getTime()+6e4,a++}return t},i=function(o,r,i){if(t.length<2)return[{id:-1,x:"Please call fillTimeLabel function first!"}];var n=1,l=a(r,i),d=1;e=t.map((function(t){if(t.id==n){var e={id:t.id,x:t.tmx,tml:t.tm,n:d};return n+=l,d++,e}})).filter(Boolean);var s=t.slice(-1)[0],w={id:s.id,x:s.tmx,tml:s.tm,n:d};return e.push(w),e},a=function(t,e){for(var o=t/24,r=e;r<=24;r++){var i=t%r;if(0==i){o=t/r;break}}return o};this.test=function(t){return o(t)},this.fillTimeLabel=function(t,e,o){return r(t,e,o)},this.fillAxisLabel=function(t,e,o){return i(t,e,o)}}o("4de4"),o("d81d"),o("fb6a"),o("d3b7"),o("e6cf"),t.exports=r},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"w3-container"},[o("div",{staticClass:"w3-card-4 w3-blue w3-padding-16",attrs:{id:"zero"}},[t._m(0),t._m(1),o("div",{staticClass:"w3-row-padding w3-border"},[o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Viewbox width: "+t._s(t.d.w)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.w,expression:"d.w"}],attrs:{type:"range",min:"100",max:"2000"},domProps:{value:t.d.w},on:{__r:function(e){return t.$set(t.d,"w",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Viewbox height: "+t._s(t.d.h)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.h,expression:"d.h"}],attrs:{type:"range",min:"100",max:"200"},domProps:{value:t.d.h},on:{__r:function(e){return t.$set(t.d,"h",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Axis y: "+t._s(t.d.y)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.y,expression:"d.y"}],attrs:{type:"range",min:"0.61",max:"0.95",step:"0.01"},domProps:{value:t.d.y},on:{__r:function(e){return t.$set(t.d,"y",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Label y: "+t._s(t.d.tmy)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.tmy,expression:"d.tmy"}],attrs:{type:"range",min:"0.01",max:"0.95",step:"0.01"},domProps:{value:t.d.tmy},on:{__r:function(e){return t.$set(t.d,"tmy",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Tick size: "+t._s(t.d.tsz)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.tsz,expression:"d.tsz"}],attrs:{type:"range",min:"0.01",max:"0.95",step:"0.01"},domProps:{value:t.d.tsz},on:{__r:function(e){return t.$set(t.d,"tsz",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Axis labels y: "+t._s(t.d.lby)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.lby,expression:"d.lby"}],attrs:{type:"range",min:"0.01",max:"0.95",step:"0.01"},domProps:{value:t.d.lby},on:{__r:function(e){return t.$set(t.d,"lby",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Thumb size: "+t._s(t.d.mv)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.d.mv,expression:"d.mv"}],attrs:{type:"range",min:"0.01",max:"0.95",step:"0.01"},domProps:{value:t.d.mv},on:{__r:function(e){return t.$set(t.d,"mv",e.target.value)}}})])]),o("div",{staticClass:"w3-col m10"},[o("blockquote",{staticClass:"w3-panel w3-leftbar w3-light-grey"}),o("p",{staticClass:"w3-large"}),o("i",{staticClass:"w3-opacity w3-large"},[t._v(t._s(t.str))]),o("p",[t._v("Just copy/past this code to your page")])])]),o("div",{staticClass:"w3-panel"},[o("TimeSlider",{ref:"timeSlider",attrs:{ds:t.d,n:t.f,tickCount:t.tickCount},on:{"current-time":function(e){return t.shiftTime(e)}}})],1),o("div",{staticClass:"w3-row-padding w3-border"},[o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Label font size: "+t._s(t.f.t)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.f.t,expression:"f.t"}],attrs:{type:"range",min:"10",max:"300",step:"0.5"},domProps:{value:t.f.t},on:{__r:function(e){return t.$set(t.f,"t",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Axis labels font size: "+t._s(t.f.l)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.f.l,expression:"f.l"}],attrs:{type:"range",min:"10",max:"300",step:"0.5"},domProps:{value:t.f.l},on:{__r:function(e){return t.$set(t.f,"l",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Stroke width: "+t._s(t.f.k)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.f.k,expression:"f.k"}],attrs:{type:"range",min:"10",max:"1000",step:"10"},domProps:{value:t.f.k},on:{__r:function(e){return t.$set(t.f,"k",e.target.value)}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-yellow w3-card-4"},[o("p",[t._v("Axis ticks count: "+t._s(t.tickCount)+" ")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tickCount,expression:"tickCount",modifiers:{number:!0}}],attrs:{type:"range",min:"2",max:"48",step:"1"},domProps:{value:t.tickCount},on:{__r:function(e){t.tickCount=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})])]),o("div",{staticClass:"w3-col m2"},[o("div",{staticClass:"w3-panel w3-card-4 w3-margin"},[o("button",{staticClass:"w3-button w3-green w3-margin",on:{click:t.reDraw}},[t._v("ReDraw ")])])])]),t._m(2),o("div",{staticClass:"w3-col m2 w3-margin"},[o("div",{staticClass:"w3-panel w3-blue w3-card-4"},[o("h5",[t._v("Time: "),o("span",{staticClass:"w3-badge w3-yellow w3-xlarge"},[t._v(t._s(t.curTime))])])])]),t._m(3)])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w3-container"},[r("h2",[t._v("This is simple dashboard help You easy apply TimeSlider component on the your page. ")]),r("img",{staticClass:"w3-display-topleft w3-container",staticStyle:{width:"10%","max-width":"150px"},attrs:{alt:"Vue logo",src:o("cf05")}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w3-panel w3-pale-yellow"},[o("h6",{staticClass:"w3-opacity"},[t._v("You can see the parameters effects and how to easy reach customization of the look. ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w3-panel w3-pale-yellow"},[o("h6",{staticClass:"w3-opacity"},[t._v("To see changes use ReDraw button. ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w3-col m6 w3-margin"},[o("div",{staticClass:"w3-panel w3-blue w3-card-4"},[o("p",{staticClass:"w3-meddium"}),o("i",{staticClass:"w3-opacity w3-large"},[t._v('v-on:current-time="shiftTime($event)"')]),o("p",[t._v("To capture slider value use component 'current-time' event ")])])])}],n=(o("99af"),o("d3b7"),o("25f0"),o("01b2"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.error?o("p",[t._v(t._s(t.error))]):t._e(),o("svg",{staticClass:"zero",attrs:{id:"svg0",viewBox:"0,0,"+t.ds.w+","+t.ds.h,xmlns:"http://www.w3.org/2000/svg"},on:{mousedown:function(e){return t.startDrag(e)},mousemove:t.doDrag,load:t.initSvg}},[o("defs",{attrs:{id:"comps"}},[o("g",{attrs:{id:"mover"}},[o("path",{attrs:{d:"m0 10 h80 l0 20 l-20 0 l-10 20 l10 0 l-20 20 l-20 -20 l10 0 l-10 -20 l-20 0 l0 -20"}})])]),o("g",{staticClass:"static"},[o("rect",{staticClass:"zero_rect",attrs:{x:"0",y:"0",width:t.ds.w,height:t.ds.h}}),o("line",{staticClass:"axis",attrs:{x1:t.middleOffset,x2:t.ds.w-t.middleOffset,y1:t.ds.h*t.ds.y,y2:t.ds.h*t.ds.y,"stroke-width":t.k}}),o("text",{staticClass:"lblNowTime",attrs:{x:t.x+t.middleOffset,y:t.ds.h*t.ds.tmy,"font-size":t.tmf}},[t._v(t._s(t.curTm))])]),t._l(t.tiki,(function(e){return o("g",{key:e.id,staticClass:"static"},[o("line",{staticClass:"axis_ticks",attrs:{x1:e.x,x2:e.x,y1:t.ds.h*t.ds.y,y2:t.ds.h*t.ds.y-t.ds.h*t.ds.tsz,"stroke-width":t.k}}),o("text",{staticClass:"axis_ticks_labels",attrs:{x:e.x,y:t.ds.h*t.ds.lby,"font-size":t.lbf}},[t._v(t._s(e.tml))])])})),o("g",{attrs:{id:"pMover"},on:{mouseenter:function(e){t.canSliderDrug=!t.canSliderDrug},mouseleave:function(e){t.canSliderDrug=!t.canSliderDrug}}},[o("use",{staticClass:"draggable",attrs:{"xlink:href":"#mover",transform:"translate("+t.x+","+t.ds.h*t.y+") scale("+t.mv+")"}})])],2)])}),l=[],d=(o("4de4"),o("7db0"),o("d81d"),o("fb6a"),o("a9e3"),o("2d49")),s=o.n(d),w={name:"TimeSlider",props:{n:{type:Object,default:function(){return{t:72.5,l:81.4,k:500}}},ds:{type:Object,default:function(){return{w:2e3,h:120,y:.7125,tmy:.201,tsz:.06,lby:.93,mv:.06}}},tickCount:{type:Number,default:function(){return 25}}},components:{},data:function(){return{msg:"Welcome",title:"TimeSlider",error:"",tiki:[],tmlbl:[{id:1,tm:"06:00",tmx:3.001}],dragging:!1,canSliderDrug:!1,x:50,y:.15,u:1,curTm:"06:00",selectedElement:!1,offset:0,svgSlider:null,middleOffset:0}},computed:{mv:function(){return this.ds.h/8*.06},tmf:function(){return this.ds.w*this.u/this.n.t/this.u+"px"},lbf:function(){return this.ds.w*this.u/this.n.l/this.u+"px"},k:function(){return this.ds.w*this.u/this.n.k/this.u+"px"},ewd:function(){return this.ds.w*this.u+"px"}},mounted:function(){window.addEventListener("mouseup",this.stopDrag),this.initSvg()},created:function(){},activated:function(){},watch:{},methods:{setNowTime:function(){var t=this;this.curTm=new Date(Date.now()).toTimeString().slice(0,5);var e=this.tmlbl.find((function(e){return e.tm==t.curTm}));e&&(this.x=e.tmx-this.middleOffset)},setTicks:function(t){var e=new s.a,o=this.middleOffset;while(this.tmlbl.length>0)this.tmlbl.pop();this.tmlbl=e.fillTimeLabel(this.ds.w,o,1440).map((function(t){return t}));while(this.tiki.length>0)this.tiki.pop();this.tiki=e.fillAxisLabel(o,1440,t).map((function(t){return t}))},initSvg:function(t){if(t)this.svgSlider=t.target;else{if(t&&this.svgSlider)return;this.svgSlider=document.getElementById("svg0")}if(this.svgSlider){var e=this.svgSlider.getScreenCTM(),o=this.svgSlider.getElementById("pMover").getBoundingClientRect();this.u=e.a,this.middleOffset=o.width/e.a/2,this.setTicks(this.tickCount),this.setNowTime()}},getMousePosition:function(t){var e=this.svgSlider.getScreenCTM();return{x:(t.clientX-e.e)/e.a,y:(t.clientY-e.f)/e.d}},startDrag:function(t){if(t.target.classList.contains("draggable")){this.dragging=!0,this.selectedElement=t.target,this.offset=this.getMousePosition(t),this.offset.x-=this.x;this.selectedElement.getBoundingClientRect()}},stopDrag:function(){this.dragging=!1,this.selectedElement=null},doDrag:function(t){t.preventDefault();t.target;if(this.dragging){var e=this.getMousePosition(t),o=e.x-this.offset.x,r=this.tmlbl.slice(-1)[0].tmx-this.middleOffset;o<=r&&o>0&&(this.x=o,this.getDrugTime(this.x))}},getDrugTime:function(t){var e=this.middleOffset+t,o=this.tmlbl.filter((function(t){return t.tmx>=e})).slice(0,1)[0];this.curTm=o.tm,this.$emit("current-time",this.curTm)}}},p=w,c=(o("dea9"),o("2877")),m=Object(c["a"])(p,n,l,!1,null,"bbf30598",null),h=m.exports,b={name:"app",components:{TimeSlider:h},data:function(){return{d:{w:2e3,h:120,y:.7125,tmy:.201,tsz:.06,lby:.93,mv:.06},f:{t:72.5,l:81.4,k:500},tickCount:16,curTime:"00:00"}},computed:{ds:function(){var t="{ w:";return t=t.concat(this.d.w.toString(),", h:",this.d.h.toString(),", y:",this.d.y.toString(),", tmy:",this.d.tmy.toString(),", tsz:",this.d.tsz.toString(),", lby:",this.d.lby.toString(),", mv:",this.d.mv.toString()," }"),t},n:function(){var t="{ t:";return t=t.concat(this.f.t.toString(),", l:",this.f.l.toString(),", k:",this.f.k.toString()," }"),t},t:function(){var t="{ tickCount:";return t=t.concat(this.tickCount.toString()," }"),t},str:function(){var t="<time-slider :ds=";return t=t.concat(this.ds," :n=",this.n," :tickCount=",this.tickCount," ><time-slider/>"),t},tik:function(){return console.log(" tickCount ",parseInt(this.tickCount)),parseInt(this.tickCount)}},methods:{shiftTime:function(t){this.curTime=t},reDraw:function(){console.log(this.$refs.timeSlider),this.$refs.timeSlider.initSvg()}}},f=b,u=(o("7faf"),Object(c["a"])(f,i,a,!1,null,null,null)),g=u.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#app")},"7faf":function(t,e,o){"use strict";var r=o("b7f3"),i=o.n(r);i.a},b7f3:function(t,e,o){var r=o("e7ed");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=o("499e").default;i("3bfb87de",r,!0,{sourceMap:!1,shadowMode:!1})},c85d:function(t,e,o){var r=o("14f0");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=o("499e").default;i("dc95d626",r,!0,{sourceMap:!1,shadowMode:!1})},cf05:function(t,e,o){t.exports=o.p+"www/img/logo.82b9c7a5.png"},dea9:function(t,e,o){"use strict";var r=o("c85d"),i=o.n(r);i.a},e7ed:function(t,e,o){var r=o("24fb");e=r(!1),e.push([t.i,"body{padding:5px;background-color:#fff6e6}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:30px}",""]),t.exports=e},f70c:function(t,e,o){var r=o("24fb");e=r(!1),e.push([t.i,'html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}figure{margin:1em 40px}img{border-style:none}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}body,html{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}.w3-serif{font-family:serif}h1,h2,h3,h4,h5,h6{font-family:Segoe UI,Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}hr{border:0;border-top:1px solid #eee;margin:20px 0}.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(2n){background-color:#f1f1f1}.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(2n){background-color:#f1f1f1}.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr td,.w3-centered tr th{text-align:center}.w3-table-all td,.w3-table-all th,.w3-table td,.w3-table th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}.w3-table-all td:first-child,.w3-table-all th:first-child,.w3-table td:first-child,.w3-table th:first-child{padding-left:16px}.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w3-btn:disabled,.w3-button:disabled,.w3-disabled{cursor:not-allowed;opacity:.3}.w3-disabled *,:disabled *{pointer-events:none}.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}.w3-display-container,.w3-tooltip{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}.w3-ripple:active{opacity:.5}.w3-ripple{transition:opacity 0s}.w3-input{padding:8px;display:block}.w3-input,.w3-select{border:none;border-bottom:1px solid #ccc;width:100%}.w3-select{padding:9px 0}.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}.w3-dropdown-hover:hover .w3-dropdown-content{display:block}.w3-dropdown-click:hover,.w3-dropdown-click:hover>.w3-button:first-child,.w3-dropdown-hover:first-child,.w3-dropdown-hover:hover>.w3-button:first-child{background-color:#ccc;color:#000}.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}.w3-bar-block .w3-dropdown-click,.w3-bar-block .w3-dropdown-hover{width:100%}.w3-bar-block .w3-dropdown-click .w3-dropdown-content,.w3-bar-block .w3-dropdown-hover .w3-dropdown-content{min-width:100%}.w3-bar-block .w3-dropdown-click .w3-button,.w3-bar-block .w3-dropdown-hover .w3-button{width:100%;text-align:left;padding:8px 16px}#main,.w3-main{transition:margin-left .4s}.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}.w3-bar .w3-dropdown-click,.w3-bar .w3-dropdown-hover{position:static;float:left}.w3-bar .w3-button{white-space:normal}.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}.w3-responsive{display:block;overflow-x:auto}.w3-bar:after,.w3-bar:before,.w3-cell-row:after,.w3-cell-row:before,.w3-clear:after,.w3-clear:before,.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row-padding:after,.w3-row-padding:before,.w3-row:after,.w3-row:before{content:"";display:table;clear:both}.w3-col,.w3-half,.w3-quarter,.w3-third,.w3-threequarter,.w3-twothird{float:left;width:100%}.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}.w3-auto,.w3-content{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}.w3-hide{display:none!important}.w3-show,.w3-show-block{display:block!important}.w3-show-inline-block{display:inline-block!important}@media (max-width:1205px){.w3-auto{max-width:95%}}@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}.w3-dropdown-click.w3-mobile .w3-dropdown-content,.w3-dropdown-hover.w3-mobile .w3-dropdown-content{position:relative}.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-click.w3-mobile,.w3-dropdown-hover.w3-mobile{text-align:center}.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button,.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button{width:100%}}@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}.w3-bottom,.w3-top{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);z-index:2}.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}.w3-display-middle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}.w3-display-left{left:0}.w3-display-left,.w3-display-right{position:absolute;top:50%;transform:translateY(-50%);-ms-transform:translateY(-50%)}.w3-display-right{right:0}.w3-display-topmiddle{top:0}.w3-display-bottommiddle,.w3-display-topmiddle{position:absolute;left:50%;transform:translate(-50%);-ms-transform:translate(-50%)}.w3-display-bottommiddle{bottom:0}.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}.w3-display-position{position:absolute}.w3-circle{border-radius:50%}.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}.w3-row-padding,.w3-row-padding>.w3-col,.w3-row-padding>.w3-half,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-third,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-twothird{padding:0 8px}.w3-container,.w3-panel{padding:.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}.w3-code,.w3-codespan{font-family:Consolas,courier new;font-size:16px}.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4caf50;word-wrap:break-word}.w3-codespan{color:#dc143c;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,.2),0 4px 20px 0 rgba(0,0,0,.19)}.w3-spin{-webkit-animation:w3-spin 2s linear infinite;animation:w3-spin 2s linear infinite}@-webkit-keyframes w3-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes w3-spin{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes fading{0%{opacity:0}50%{opacity:1}to{opacity:0}}.w3-animate-opacity{-webkit-animation:opac .8s;animation:opac .8s}@-webkit-keyframes opac{0%{opacity:0}to{opacity:1}}@keyframes opac{0%{opacity:0}to{opacity:1}}.w3-animate-top{position:relative;-webkit-animation:animatetop .4s;animation:animatetop .4s}@-webkit-keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{0%{top:-300px;opacity:0}to{top:0;opacity:1}}.w3-animate-left{position:relative;-webkit-animation:animateleft .4s;animation:animateleft .4s}@-webkit-keyframes animateleft{0%{left:-300px;opacity:0}to{left:0;opacity:1}}@keyframes animateleft{0%{left:-300px;opacity:0}to{left:0;opacity:1}}.w3-animate-right{position:relative;-webkit-animation:animateright .4s;animation:animateright .4s}@-webkit-keyframes animateright{0%{right:-300px;opacity:0}to{right:0;opacity:1}}@keyframes animateright{0%{right:-300px;opacity:0}to{right:0;opacity:1}}.w3-animate-bottom{position:relative;-webkit-animation:animatebottom .4s;animation:animatebottom .4s}@-webkit-keyframes animatebottom{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}@keyframes animatebottom{0%{bottom:-300px;opacity:0}to{bottom:0;opacity:1}}.w3-animate-zoom{-webkit-animation:animatezoom .6s;animation:animatezoom .6s}@-webkit-keyframes animatezoom{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes animatezoom{0%{transform:scale(0)}to{transform:scale(1)}}.w3-animate-input{transition:width .4s ease-in-out}.w3-animate-input:focus{width:100%!important}.w3-hover-opacity:hover,.w3-opacity{opacity:.6}.w3-hover-opacity-off:hover,.w3-opacity-off{opacity:1}.w3-opacity-max{opacity:.25}.w3-opacity-min{opacity:.75}.w3-grayscale-max,.w3-greyscale-max,.w3-hover-grayscale:hover,.w3-hover-greyscale:hover{filter:grayscale(100%)}.w3-grayscale,.w3-greyscale{filter:grayscale(75%)}.w3-grayscale-min,.w3-greyscale-min{filter:grayscale(50%)}.w3-sepia{filter:sepia(75%)}.w3-hover-sepia:hover,.w3-sepia-max{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important}.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}.w3-code,.w3-section{margin-top:16px!important;margin-bottom:16px!important}.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}.w3-left{float:left!important}.w3-right{float:right!important}.w3-button:hover{color:#000!important;background-color:#ccc!important}.w3-hover-none:hover,.w3-transparent{background-color:transparent!important}.w3-hover-none:hover{box-shadow:none!important}.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#0ff!important}.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196f3!important}.w3-hover-light-blue:hover,.w3-light-blue{color:#000!important;background-color:#87ceeb!important}.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}.w3-blue-gray,.w3-blue-grey,.w3-hover-blue-gray:hover,.w3-hover-blue-grey:hover{color:#fff!important;background-color:#607d8b!important}.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4caf50!important}.w3-hover-light-green:hover,.w3-light-green{color:#000!important;background-color:#8bc34a!important}.w3-hover-indigo:hover,.w3-indigo{color:#fff!important;background-color:#3f51b5!important}.w3-hover-khaki:hover,.w3-khaki{color:#000!important;background-color:khaki!important}.w3-hover-lime:hover,.w3-lime{color:#000!important;background-color:#cddc39!important}.w3-hover-orange:hover,.w3-orange{color:#000!important;background-color:#ff9800!important}.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}.w3-hover-pink:hover,.w3-pink{color:#fff!important;background-color:#e91e63!important}.w3-hover-purple:hover,.w3-purple{color:#fff!important;background-color:#9c27b0!important}.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}.w3-hover-red:hover,.w3-red{color:#fff!important;background-color:#f44336!important}.w3-hover-sand:hover,.w3-sand{color:#000!important;background-color:#fdf5e6!important}.w3-hover-teal:hover,.w3-teal{color:#fff!important;background-color:#009688!important}.w3-hover-yellow:hover,.w3-yellow{color:#000!important;background-color:#ffeb3b!important}.w3-hover-white:hover,.w3-white{color:#000!important;background-color:#fff!important}.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}.w3-gray,.w3-grey,.w3-hover-gray:hover,.w3-hover-grey:hover{color:#000!important;background-color:#9e9e9e!important}.w3-hover-light-gray:hover,.w3-hover-light-grey:hover,.w3-light-gray,.w3-light-grey{color:#000!important;background-color:#f1f1f1!important}.w3-dark-gray,.w3-dark-grey,.w3-hover-dark-gray:hover,.w3-hover-dark-grey:hover{color:#fff!important;background-color:#616161!important}.w3-hover-pale-red:hover,.w3-pale-red{color:#000!important;background-color:#fdd!important}.w3-hover-pale-green:hover,.w3-pale-green{color:#000!important;background-color:#dfd!important}.w3-hover-pale-yellow:hover,.w3-pale-yellow{color:#000!important;background-color:#ffc!important}.w3-hover-pale-blue:hover,.w3-pale-blue{color:#000!important;background-color:#dff!important}.w3-hover-text-amber:hover,.w3-text-amber{color:#ffc107!important}.w3-hover-text-aqua:hover,.w3-text-aqua{color:#0ff!important}.w3-hover-text-blue:hover,.w3-text-blue{color:#2196f3!important}.w3-hover-text-light-blue:hover,.w3-text-light-blue{color:#87ceeb!important}.w3-hover-text-brown:hover,.w3-text-brown{color:#795548!important}.w3-hover-text-cyan:hover,.w3-text-cyan{color:#00bcd4!important}.w3-hover-text-blue-gray:hover,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-text-blue-grey{color:#607d8b!important}.w3-hover-text-green:hover,.w3-text-green{color:#4caf50!important}.w3-hover-text-light-green:hover,.w3-text-light-green{color:#8bc34a!important}.w3-hover-text-indigo:hover,.w3-text-indigo{color:#3f51b5!important}.w3-hover-text-khaki:hover,.w3-text-khaki{color:#b4aa50!important}.w3-hover-text-lime:hover,.w3-text-lime{color:#cddc39!important}.w3-hover-text-orange:hover,.w3-text-orange{color:#ff9800!important}.w3-hover-text-deep-orange:hover,.w3-text-deep-orange{color:#ff5722!important}.w3-hover-text-pink:hover,.w3-text-pink{color:#e91e63!important}.w3-hover-text-purple:hover,.w3-text-purple{color:#9c27b0!important}.w3-hover-text-deep-purple:hover,.w3-text-deep-purple{color:#673ab7!important}.w3-hover-text-red:hover,.w3-text-red{color:#f44336!important}.w3-hover-text-sand:hover,.w3-text-sand{color:#fdf5e6!important}.w3-hover-text-teal:hover,.w3-text-teal{color:#009688!important}.w3-hover-text-yellow:hover,.w3-text-yellow{color:#d2be0e!important}.w3-hover-text-white:hover,.w3-text-white{color:#fff!important}.w3-hover-text-black:hover,.w3-text-black{color:#000!important}.w3-hover-text-gray:hover,.w3-hover-text-grey:hover,.w3-text-gray,.w3-text-grey{color:#757575!important}.w3-hover-text-light-gray:hover,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-text-light-grey{color:#f1f1f1!important}.w3-hover-text-dark-gray:hover,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-text-dark-grey{color:#3a3a3a!important}.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#0ff!important}.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196f3!important}.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87ceeb!important}.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}.w3-border-blue-gray,.w3-border-blue-grey,.w3-hover-border-blue-gray:hover,.w3-hover-border-blue-grey:hover{border-color:#607d8b!important}.w3-border-green,.w3-hover-border-green:hover{border-color:#4caf50!important}.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:khaki!important}.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}.w3-border-gray,.w3-border-grey,.w3-hover-border-gray:hover,.w3-hover-border-grey:hover{border-color:#9e9e9e!important}.w3-border-light-gray,.w3-border-light-grey,.w3-hover-border-light-gray:hover,.w3-hover-border-light-grey:hover{border-color:#f1f1f1!important}.w3-border-dark-gray,.w3-border-dark-grey,.w3-hover-border-dark-gray:hover,.w3-hover-border-dark-grey:hover{border-color:#616161!important}.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffc!important}.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}',""]),t.exports=e}});
//# sourceMappingURL=app.d03d79e6.js.map