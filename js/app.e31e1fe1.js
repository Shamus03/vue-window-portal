(function(e){function t(t){for(var o,i,l=t[0],u=t[1],p=t[2],d=0,s=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&s.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);c&&c(t);while(s.length)s.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-window-portal/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("h3",[e._v("vue-window-portal demo")]),e._v(" You may need to check for blocked popups! "),n("p",[e._v(" Text: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),n("p",[e._v(" Window open: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.open,expression:"open"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.open)?e._i(e.open,null)>-1:e.open},on:{change:function(t){var n=e.open,o=t.target,r=!!o.checked;if(Array.isArray(n)){var a=null,i=e._i(n,a);o.checked?i<0&&(e.open=n.concat([a])):i>-1&&(e.open=n.slice(0,i).concat(n.slice(i+1)))}else e.open=r}}})])]),n("VueWindowPortal",{staticClass:"wrapper",attrs:{open:e.open,left:600,top:20},on:{"update:open":function(t){e.open=t}}},[n("h3",[e._v("I'm a new window!")]),e._v(" Text: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})]),n("VueWindowPortal",{staticClass:"wrapper",attrs:{open:e.open,left:600,top:600,"no-style":""},on:{"update:open":function(t){e.open=t}}},[n("h3",[e._v("I'm a new window, but I have no style!")]),e._v(" Text: "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})])],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.open?n("div",[e._t("default")],2):e._e()},l=[],u=(n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("a9e3"),n("d3b7"),n("3ca3"),n("ddb0"),{props:{open:{type:Boolean,default:!1},width:{type:Number,default:600},height:{type:Number,default:400},left:{type:Number,default:200},top:{type:Number,default:200},noStyle:{type:Boolean,default:!1}},data:function(){return{windowRef:null}},watch:{open:function(e){e?this.openPortal():this.closePortal()}},mounted:function(){this.open&&this.openPortal(),window.addEventListener("beforeunload",this.closePortal)},beforeDestroy:function(){this.closePortal(),window.removeEventListener("beforeunload",this.closePortal)},methods:{openPortal:function(){if(!this.windowRef){var e=this.width,t=this.height,n=this.left,o=this.top;if(this.windowRef=window.open("","","width=".concat(e,",height=").concat(t,",left=").concat(n,",top=").concat(o)),this.windowRef.addEventListener("beforeunload",this.closePortal),!this.noStyle){var r=!0,a=!1,i=void 0;try{for(var l,u=document.head.querySelectorAll("style, link[rel=stylesheet]")[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var p=l.value;this.windowRef.document.head.appendChild(p.cloneNode(!0))}}catch(d){a=!0,i=d}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}}var c=document.createElement("div");c.id="app",c.appendChild(this.$el),this.windowRef.document.body.appendChild(c),this.$emit("update:open",!0)}},closePortal:function(){this.windowRef&&(this.windowRef.close(),this.windowRef=null,this.$emit("update:open",!1),this.$emit("closed"))}}}),p=u,c=n("2877"),d=Object(c["a"])(p,i,l,!1,null,null,null),s=d.exports,f=o["a"].extend({components:{VueWindowPortal:s},data:function(){return{text:"magic!",open:!1}}}),h=f,v=(n("034f"),Object(c["a"])(h,r,a,!1,null,null,null)),w=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e31e1fe1.js.map