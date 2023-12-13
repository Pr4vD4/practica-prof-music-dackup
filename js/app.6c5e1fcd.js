(function(){"use strict";var t={4241:function(t,e,d){var n=d(9242),a=d(3396);function r(t,e,d,n,r,i){const s=(0,a.up)("IndexView");return(0,a.wg)(),(0,a.j4)(s)}function i(t,e,d,n,r,i){const s=(0,a.up)("Sort");return t.sorted?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(s,{key:0}))}const s={class:"sorter container-fluid d-flex flex-column h-100 p-5",ref:"sorter"},o=(0,a.uE)('<div class="drag-item percussion drum" data-target="percussion" data-v-0b08cdd0></div><div class="drag-item percussion hat" data-target="percussion" data-v-0b08cdd0></div><div class="drag-item percussion xylophone" data-target="percussion" data-v-0b08cdd0></div><div class="drag-item wind flute" data-target="wind" data-v-0b08cdd0></div><div class="drag-item wind trumpet" data-target="wind" data-v-0b08cdd0></div><div class="drag-item wind trombone" data-target="wind" data-v-0b08cdd0></div><div class="drag-item stringed guitar" data-target="stringed" data-v-0b08cdd0></div><div class="drag-item stringed el-guitar" data-target="stringed" data-v-0b08cdd0></div><div class="drag-item stringed harp" data-target="stringed" data-v-0b08cdd0></div><div class="drag-item stringed violin" data-target="stringed" data-v-0b08cdd0></div><div class="drag-item keyboardIns piano" data-target="keyboardIns" data-v-0b08cdd0></div><div class="drag-item keyboardIns accordion" data-target="keyboardIns" data-v-0b08cdd0></div><div class="drag-item keyboardIns synth" data-target="keyboardIns" data-v-0b08cdd0></div><div class="title text-center" data-v-0b08cdd0> Отсортируй все инструменты </div><div class="d-flex game flex-column" data-v-0b08cdd0><div class="d-flex h-50 w-100 mb-1" data-v-0b08cdd0><div class="drag-container w-50 h-100 m-1" id="stringed" data-v-0b08cdd0><div class="h1 text-center" data-v-0b08cdd0> Струнные </div></div><div class="drag-container w-50 h-100 m-1" id="wind" data-v-0b08cdd0><div class="h1 text-center" data-v-0b08cdd0> Духовые </div></div></div><div class="d-flex h-50 w-100 mt-1" data-v-0b08cdd0><div class="drag-container w-50 h-100 m-1" id="keyboardIns" data-v-0b08cdd0><div class="h1 text-center" data-v-0b08cdd0> Клавишные </div></div><div class="drag-container w-50 h-100 m-1" id="percussion" data-v-0b08cdd0><div class="h1 text-center" data-v-0b08cdd0> Ударные </div></div></div></div>',15),c=[o];function g(t,e,d,n,r,i){const o=(0,a.up)("CongratulationsMessage");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t.sorterGame.success?((0,a.wg)(),(0,a.j4)(o,{key:0})):(0,a.kq)("",!0),(0,a._)("div",s,c,512)],64)}class u{constructor(t){this.success=!1,this.stringed=0,this.sortedStringed=new Set,this.wind=0,this.sortedWind=new Set,this.keyboardIns=0,this.sortedKeyboard=new Set,this.percussion=0,this.sortedPercussion=new Set,this.countInstruments(t)}countInstruments(t){this.stringed=t.querySelectorAll(".stringed").length,this.wind=t.querySelectorAll(".wind").length,this.keyboardIns=t.querySelectorAll(".keyboardIns").length,this.percussion=t.querySelectorAll(".percussion").length}}function l(t){let e=d(7809)(),n=document.querySelectorAll(".drag-item");function a(t){e[0]+t.target.getBoundingClientRect().width/2<window.innerWidth&&e[0]-t.target.getBoundingClientRect().width/2>0&&e[1]-t.target.getBoundingClientRect().height/2>0&&e[1]+t.target.getBoundingClientRect().width/2<window.innerHeight&&anime({targets:t.target,translateX:e[0]-t.target.getBoundingClientRect().width/2,translateY:e[1]-t.target.getBoundingClientRect().height/2,easing:"linear",duration:20,update:()=>{}})}function r(e){let d=document.querySelector("#"+e.target.dataset.target),n=d.getBoundingClientRect(),a=e.target.getBoundingClientRect();a.x>=n.x&&a.x<n.x+n.width&&a.y+a.height/2>n.y&&a.y+a.height/2<n.y+n.height&&(console.log("inside"),"stringed"===e.target.dataset.target?t.sortedStringed.add(e.target):"wind"===e.target.dataset.target?t.sortedWind.add(e.target):"keyboardIns"===e.target.dataset.target?t.sortedKeyboard.add(e.target):"percussion"===e.target.dataset.target&&t.sortedPercussion.add(e.target)),t.sortedWind.size===t.wind&&t.sortedStringed.size===t.stringed&&t.sortedKeyboard.size===t.keyboardIns&&t.sortedPercussion.size===t.percussion&&(console.log("congratulations"),t.success=!0)}n.forEach((t=>{let e=window.innerWidth-t.getBoundingClientRect().width,d=window.innerHeight-t.getBoundingClientRect().height;t.style.transform=`translateX(${v(0,e)}px) translateY(${v(0,d)}px)`,t.addEventListener("touchmove",a),t.addEventListener("touchend",r)}))}function v(t,e){return Math.random()*(e-t)+t}const h=t=>((0,a.dD)("data-v-5074c3c4"),t=t(),(0,a.Cn)(),t),f={class:"message"},m=h((()=>(0,a._)("div",{class:"message-box d-flex flex-column justify-content-center align-items-center"},[(0,a._)("div",{class:"h1"},"Вы успешно справились!"),(0,a._)("a",{href:"/",class:"toMenu mt-5"},"На главную")],-1))),b=[m];function w(t,e,d,n,r,i){return(0,a.wg)(),(0,a.iD)("div",f,b)}var p={name:"CongratulationsMessage"},y=d(89);const x=(0,y.Z)(p,[["render",w],["__scopeId","data-v-5074c3c4"]]);var k=x,I=(0,a.aZ)({name:"Sort",components:{CongratulationsMessage:k},data(){return{sorterGame:{}}},mounted(){this.sorterGame=new u(this.$refs.sorter),console.log(this.sorterGame),l(this.sorterGame)}});const C=(0,y.Z)(I,[["render",g],["__scopeId","data-v-0b08cdd0"]]);var S=C,_=(0,a.aZ)({name:"IndexView",components:{Sort:S},data(){return{sorted:!1}}});const O=(0,y.Z)(_,[["render",i]]);var j=O,B={name:"App",components:{IndexView:j}};const R=(0,y.Z)(B,[["render",r]]);var q=R;(0,n.ri)(q).mount("#app")}},e={};function d(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,d),r.exports}d.m=t,function(){var t=[];d.O=function(e,n,a,r){if(!n){var i=1/0;for(g=0;g<t.length;g++){n=t[g][0],a=t[g][1],r=t[g][2];for(var s=!0,o=0;o<n.length;o++)(!1&r||i>=r)&&Object.keys(d.O).every((function(t){return d.O[t](n[o])}))?n.splice(o--,1):(s=!1,r<i&&(i=r));if(s){t.splice(g--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var g=t.length;g>0&&t[g-1][2]>r;g--)t[g]=t[g-1];t[g]=[n,a,r]}}(),function(){d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,{a:e}),e}}(),function(){d.d=function(t,e){for(var n in e)d.o(e,n)&&!d.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){d.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};d.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],s=n[1],o=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)d.o(s,a)&&(d.m[a]=s[a]);if(o)var g=o(d)}for(e&&e(n);c<i.length;c++)r=i[c],d.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return d.O(g)},n=self["webpackChunkprof_music"]=self["webpackChunkprof_music"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=d.O(void 0,[998],(function(){return d(4241)}));n=d.O(n)})();
//# sourceMappingURL=app.6c5e1fcd.js.map