(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-channel-channel~pages-uni-stat-device-overview-overview~pages-uni-stat-device-trend-t~8ca0cde3"],{"0ba7":function(t,e,i){"use strict";i.r(e);var n=i("4315"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"30ef":function(t,e,i){"use strict";i.r(e);var n=i("6e05"),a=i("0ba7");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("a351");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"1cbb1150",null,!1,n["a"],void 0);e["default"]=s.exports},"3ef4":function(t,e,i){"use strict";var n=i("a2b3"),a=i.n(n);a.a},4315:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uni-stat-panel",data:function(){return{}},props:{items:{type:Array,default:function(){return[]}},contrast:{type:Boolean,default:!1}}};e.default=n},"6c5e":function(t,e,i){"use strict";i.r(e);var n=i("e03c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6e05":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniTooltip:i("f36c").default,uniIcons:i("b351").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-stat--sum-x mb-m"},t._l(t.items,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-stat--sum-item",class:["今天"===e.value?"uni-stat--sum-item-width":""]},[i("uni-tooltip",{scopedSlots:t._u([e.tooltip?{key:"content",fn:function(){return[i("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[i("v-uni-view",{staticClass:"uni-stat--sum-item-title"},[t._v(t._s(e.title?e.title:"")),e.title?i("uni-icons",{staticClass:"ml-s",attrs:{type:"help",color:"#666"}}):t._e()],1)],1),i("v-uni-view",{staticClass:"uni-stat--sum-item-value"},[t._v(t._s(e.value?e.value:0))]),t.contrast?i("v-uni-view",{staticClass:"uni-stat--sum-item-contrast"},[t._v(t._s(e.contrast?e.contrast:0))]):t._e()],1)})),1)},o=[]},"828a":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-stat-tooltip-s[data-v-1cbb1150]{width:160px;white-space:normal}.uni-stat--sum-x[data-v-1cbb1150]{display:flex;justify-content:space-evenly;flex-wrap:wrap;border-radius:4px;padding:15px;box-shadow:-1px -1px 5px 0 rgba(0,0,0,.1)}.uni-stat--sum-item[data-v-1cbb1150]{white-space:nowrap;text-align:center;margin:10px 18px}.uni-stat--sum-item-width[data-v-1cbb1150]{width:100px}.uni-stat--sum-item-title[data-v-1cbb1150]{display:flex;align-items:center;justify-content:center;min-height:17px;font-size:12px;color:#666}.uni-stat--sum-item-value[data-v-1cbb1150]{font-size:24px;line-height:48px;font-weight:700;color:#333}.uni-stat--sum-item-contrast[data-v-1cbb1150]{font-size:14px;color:#666}@media screen and (max-width:500px){.uni-stat--sum-x[data-v-1cbb1150]{padding:15px 0;justify-content:space-between;flex-wrap:unset;overflow-x:auto!important}[data-v-1cbb1150]::-webkit-scrollbar{display:none}}',""]),t.exports=e},8301:function(t,e,i){"use strict";i.r(e);var n=i("b17d"),a=i("6c5e");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("3ef4");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"3128c571",null,!1,n["a"],void 0);e["default"]=s.exports},"90a8":function(t,e,i){var n=i("828a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("179c5e4e",n,!0,{sourceMap:!1,shadowMode:!1})},a2b3:function(t,e,i){var n=i("abb1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("75738e15",n,!0,{sourceMap:!1,shadowMode:!1})},a351:function(t,e,i){"use strict";var n=i("90a8"),a=i.n(n);a.a},abb1:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-3128c571]{display:none}}.uni-stat__select[data-v-3128c571]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-3128c571]{width:100%;flex:1}.uni-stat__actived[data-v-3128c571]{width:100%;flex:1}.uni-label-text[data-v-3128c571]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-3128c571]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-3128c571]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-3128c571]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-3128c571]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-3128c571]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-3128c571]{font-size:14px;color:#909399}.uni-select__selector[data-v-3128c571]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-3128c571]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-3128c571],\r\n.uni-select__selector-item[data-v-3128c571]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-3128c571]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-3128c571]:last-child,\r\n.uni-select__selector-item[data-v-3128c571]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-3128c571]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-3128c571],\r\n.uni-popper__arrow[data-v-3128c571]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-3128c571]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-3128c571]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-3128c571]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-3128c571]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-3128c571]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),t.exports=e},b17d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("b351").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-stat__select"},[t.label?i("span",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),i("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":t.current}},[i("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":t.disabled}},[i("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}},[t.current?i("v-uni-view",{staticClass:"uni-select__input-text"},[t._v(t._s(t.current))]):i("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[t._v(t._s(t.typePlaceholder))]),t.current&&t.clear?i("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearVal.apply(void 0,arguments)}}}):i("uni-icons",{attrs:{type:t.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),t.showSelector?i("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}}):t._e(),t.showSelector?i("v-uni-view",{staticClass:"uni-select__selector"},[i("v-uni-view",{staticClass:"uni-popper__arrow"}),i("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===t.mixinDatacomResData.length?i("v-uni-view",{staticClass:"uni-select__selector-empty"},[i("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._l(t.mixinDatacomResData,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-select__selector-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.change(e)}}},[i("v-uni-text",{class:{"uni-select__selector__disabled":e.disable}},[t._v(t._s(t.formatItemName(e)))])],1)}))],2)],1):t._e()],1)],1)],1)},o=[]},e03c:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("7db0"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("c975"),i("99af");var n={name:"uni-stat-select",mixins:[t.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var t=this;this.debounceGet=this.debounce((function(){t.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var t=this.placeholder,e={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return e?t+e:t},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},valueCom:function(t,e){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,i=null;return function(){for(var n=this,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];i&&clearTimeout(i),i=setTimeout((function(){t.apply(n,o)}),e)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var t="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var e;if(this.collection&&(e=this.getCache()),e||0===e)t=e;else{var i="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(i=this.mixinDatacomResData[this.defItem-1].value),t=i}(t||0===t)&&this.emit(t)}else t=this.valueCom;var n=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=n?this.formatItemName(n):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(i){i.value===t&&(e=i.disable)})),e},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),this.collection&&this.setCache(t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,i=t.value,n=t.channel_code;if(n=n?"(".concat(n,")"):"",this.format){var a="";for(var o in a=this.format,t)a=a.replace(new RegExp("{".concat(o,"}"),"g"),t[o]);return a}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(i,")"):e||"未命名".concat(n)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),i=uni.getStorageSync(this.cacheKey)||{};i[e]=t,uni.setStorageSync(this.cacheKey,i)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};delete e[t],uni.setStorageSync(this.cacheKey,e)}}};e.default=n}).call(this,i("a9ff")["default"])}}]);