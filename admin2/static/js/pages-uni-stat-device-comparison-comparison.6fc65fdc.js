(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-comparison-comparison"],{"3c35":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-charts-box1[data-v-5bc1b396]{padding:10px;height:420px}',""]),t.exports=e},"3ef4":function(t,e,a){"use strict";var n=a("a2b3"),i=a.n(n);i.a},"5f60":function(t,e,a){var n=a("3c35");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("532e755c",n,!0,{sourceMap:!1,shadowMode:!1})},"6c5e":function(t,e,a){"use strict";a.r(e);var n=a("e03c"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},8092:function(t,e,a){"use strict";a.r(e);var n=a("b23c"),i=a("e9f3");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d6b5");var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5bc1b396",null,!1,n["a"],void 0);e["default"]=c.exports},8301:function(t,e,a){"use strict";a.r(e);var n=a("b17d"),i=a("6c5e");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("3ef4");var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"3128c571",null,!1,n["a"],void 0);e["default"]=c.exports},"9dd0":function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af"),a("e9c4"),a("3c65"),a("d3b7"),a("159b"),a("14d9");var i=n(a("b85c")),r=n(a("2909")),o=a("b0a6"),c={data:function(){return{query:{dimension:"day",appid:"",version_id:"",start_time:(0,o.getTimeOfSomeDayAgo)(0)},platforms:[],dayChartsData:[],monChartsData:[],errorMessage:""}},created:function(){var t=this;this.debounceGet=(0,o.debounce)((function(){t.getAllData(t.query)}),300)},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}}},computed:{chartsData:function(){return[].concat((0,r.default)(this.dayChartsData),(0,r.default)(this.monChartsData))},versionQuery:function(){var t=this.query.appid,e=(0,o.stringifyQuery)({appid:t});return e}},methods:{getAllData:function(t){t.appid?(this.errorMessage="",this.getChartData(t),this.getRangeCountData(t,"month")):this.errorMessage="请先选择应用"},getChartData:function(e){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day";e=JSON.parse(JSON.stringify(e));var i=(0,o.getTimeOfSomeDayAgo)(0);if(e.start_time>=i){var r=(new Date).getTime();e.start_time=[i,r],e=(0,o.stringifyQuery)(e,!0)}else e=(0,o.stringifyQuery)(e);var c=t.database();c.collection("uni-stat-result").where(e).field("active_device_count,new_device_count,total_devices,platform_id").groupBy("platform_id").groupField("sum(active_device_count) as ".concat(n,"_active_device_count, sum(new_device_count) as ").concat(n,"_new_device_count, max(total_devices) as ").concat(n,"_total_devices")).get().then((function(t){var e=t.result.data;a.initChartOption(e,"dayChartsData")}))},getRangeCountData:function(e,a){var n=this;e=(0,o.stringifyQuery)(e);var i=t.database();i.collection("uni-stat-result").where(e).field("active_device_count, new_device_count, platform_id, ".concat(a,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(a,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(a?a+",":"","platform_id")).groupField("sum(active_device_count) as ".concat(a,"_active_device_count, sum(new_device_count) as ").concat(a,"_new_device_count")).orderBy("year asc, ".concat(a," asc")).get().then((function(t){var e=t.result.data;n.initChartOption(e,"monChartsData","month")}))},initChartOption:function(e,a){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"day",o=t.database();o.collection("uni-stat-app-platforms").get().then((function(t){var o=[{field:"".concat(r,"_new_device_count"),title:"".concat("day"===r?"日":"月","新增设备对比"),series:[{data:[]}]},{field:"".concat(r,"_active_device_count"),title:"".concat("day"===r?"日":"月","活跃设备对比"),series:[{data:[]}]}];"day"===r&&o.unshift({field:"day_total_devices",title:"总设备数对比",series:[{data:[]}]}),n[a]=o;var c=t.result.data,s={};c.forEach((function(t){s[t._id]=t.name}));var u,l=(0,i.default)(n[a]);try{for(l.s();!(u=l.n()).done;){var d,f=u.value,p=f.series[0].data,v=JSON.parse(JSON.stringify(s)),h=(0,i.default)(e);try{for(h.s();!(d=h.n()).done;){var m=d.value;for(var g in m)if(f.field===g){var _=m.platform_id,b={name:v[_],value:m[g]};p.push(b),delete v[_]}}}catch(w){h.e(w)}finally{h.f()}for(var y in v){var x={name:v[y],value:0};p.push(x)}}}catch(w){l.e(w)}finally{l.f()}}))}}};e.default=c}).call(this,a("a9ff")["default"])},a2b3:function(t,e,a){var n=a("abb1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("75738e15",n,!0,{sourceMap:!1,shadowMode:!1})},abb1:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-3128c571]{display:none}}.uni-stat__select[data-v-3128c571]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-3128c571]{width:100%;flex:1}.uni-stat__actived[data-v-3128c571]{width:100%;flex:1}.uni-label-text[data-v-3128c571]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-3128c571]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-3128c571]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-3128c571]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-3128c571]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-3128c571]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-3128c571]{font-size:14px;color:#909399}.uni-select__selector[data-v-3128c571]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-3128c571]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-3128c571],\r\n.uni-select__selector-item[data-v-3128c571]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-3128c571]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-3128c571]:last-child,\r\n.uni-select__selector-item[data-v-3128c571]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-3128c571]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-3128c571],\r\n.uni-popper__arrow[data-v-3128c571]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-3128c571]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-3128c571]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-3128c571]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-3128c571]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-3128c571]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),t.exports=e},b0a6:function(t,e,a){"use strict";(function(t){a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.createUniStatQuery=function(t){return Object.assign({},t,{type:"native_app",create_env:"uni-stat"})},e.debounce=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,r)}),e)}},e.division=s,e.fileToUrl=function(t){for(var e in v)if(v.hasOwnProperty(e)){var a=v[e];if(a===t)return e}var n=(window.URL||window.webkitURL).createObjectURL(t);return v[n]=t,n},e.fillTrendChartData=function(t,e,a){var n=e.start_time,i=e.dimension;if(["hour","day"].indexOf(i)>-1){var r,o=[];"hour"===i?r=36e5:"day"===i&&(r=864e5);var c=n[0],s=n[1],u=c;o=[c];while(u+r<=s)u+=r,o.push(u);for(var l=[],d=function(e){var n=o[e],i=t.find((function(t,e){return t.start_time===n}));if(i)l.push(i);else{var r={start_time:n};a.map((function(t,e){r[t.field]=0})),l.push(r)}},f=0;f<o.length;f++)d(f);return l}return t},e.format=u,e.formatDate=l,e.formatterData=function(t){var e=t.fieldsMap,a=t.data,n=t.formatter,i=void 0===n||n,r=JSON.parse(JSON.stringify(a));return r.map((function(t){var a=function(a){var n=e.find((function(t){return t.field==a}));if("object"===(0,o.default)(n)){var r=n.fix,c=void 0===r?0:r;"number"===typeof n.multiple&&"number"===typeof t[a]&&(t[a]=Number((t[a]*n.multiple).toFixed(c))),i&&n.formatter&&"number"===typeof t[a]&&(","===n.formatter?t[a]=function(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}(t[a]):"%"===n.formatter?t[a]="".concat((100*t[a]).toFixed(c),"%"):"-"===n.formatter&&(t[a]=d(t[a])))}};for(var n in t)a(n)})),r},e.getAllDateCN=function(t,e){var a=[],n=0;while(e.getTime()-t.getTime()>=0)a[n]=t.getTime(),t.setDate(t.getDate()+1),n+=1;return a},e.getFieldTotal=function(){var e,a=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.query,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"total_devices";"object"===(0,o.default)(n)&&(n=c(n,!1,["uni_platform"]));var r=t.database();return r.collection("uni-stat-result").where(n).field("".concat(i," as temp_").concat(i,", start_time")).groupBy("start_time").groupField("sum(temp_".concat(i,") as ").concat(i)).orderBy("start_time","desc").get().then((function(t){var n=t.result.data;return e=n.length&&n[0][i],e=u(e),a.panelData&&a.panelData.forEach((function(t){t.field===i&&(t.value=e)})),Promise.resolve(e)}))},e.getTimeOfSomeDayAgo=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now(),a=new Date(e),n=864e5,i=[a.getFullYear(),a.getMonth()+1,a.getDate()].join("/");i+=" 00:00:00";var r=new Date(i).getTime()-n*t;return r},e.mapfields=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"value",c=[],l=a;t=JSON.parse(JSON.stringify(t));var d,f=JSON.parse(JSON.stringify(e)),p=(0,r.default)(t);try{for(p.s();!(d=p.n()).done;){var v=d.value,h=v.field,m=v.computed,g=v.formatter,_=v.disable,b=v.fix;if(!_){a=l||v;var y=a.hasOwnProperty(o),x=n+h;if(e){var w=e[x];if(m){var D=m.split("/"),C=(0,i.default)(D,2),S=C[0],O=C[1];S=Number(f[n+S]),O=Number(f[n+O]);var M=u(s(S,O),g,b);y&&h===a.field?a[o]=M:a[h]=M}else if(w){var k=u(w,g,b);y?a.field===h&&(a[o]=k):a[h]=k}}y&&c.push(a)}}}catch(N){p.e(N)}finally{p.f()}return c},e.maxDeltaDay=p,e.parseDateTime=d,e.stringifyField=function(t,e,a){e&&(t=t.filter((function(t){return t.field===e})));a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=[];return t.computed?e=t.computed.split("/"):e.push(t.field),e=e.map((function(e){return-1===t.stat?e:"".concat(e," as ").concat("temp_"+e)})),e.join()}));return n.join()},e.stringifyGroupField=function(t,e,a){e&&(t=t.filter((function(t){return t.field===e})));a&&(t=t.filter((function(t){return t.field&&t.hasOwnProperty(a)})));var n=t.map((function(t){var e=t.stat,a=[];return t.computed?a=t.computed.split("/"):a.push(t.field),a=a.map((function(t){if(-1!==e)return"".concat(e||"sum","(").concat("temp_"+t,") as ").concat(t)})),a.filter(Boolean).join()})).filter(Boolean).join();return n},e.stringifyQuery=c;var i=n(a("3835")),r=n(a("b85c")),o=n(a("53ca"));function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=[],i=Object.keys(t),r=t.start_time;i.forEach((function(i){if("time_range"!==i&&-1===a.indexOf(i)){var o=t[i];o&&("string"===typeof o&&o.indexOf(i)>-1?n.push(o):("string"===typeof o&&(o='"'.concat(o,'"')),Array.isArray(o)?2===o.length&&i.indexOf("time")>-1?n.push("".concat(i," >= ").concat(o[0]," && ").concat(i," <= ").concat(o[1])):(o=o.map((function(t){return"".concat(i,' == "').concat(t,'"')})).join(" || "),o&&n.push("(".concat(o,")"))):e&&"dimension"===i?p(r)?n.push('dimension == "hour"'):o&&'"hour"'!==o?n.push("".concat(i," == ").concat(o)):n.push('dimension == "day"'):n.push("".concat(i," == ").concat(o))))}}));var o=n.join(" && ");return o||{}}function s(t,e){return e?t/e:0}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=arguments.length>2?arguments[2]:void 0;if("number"!==typeof t)return t;if("%"===e)return t*=100,String(t).indexOf(".")>-1&&(t=t.toFixed(2)),t=t?t+e:t,t;if("%%"===e)return t=Number(t),t.toFixed(2)+"%";if("-"===e)return l(t,"day");if(":"===e){var n,i,r;t=Math.ceil(t),n=i=r=0;var o=3600,c=60;if(t>=o){n=Math.floor(t/o);var s=t%o;s>=c?(i=Math.floor(s/c),r=s%c):r=s}else o>=t&&t>=c?(i=Math.floor(t/c),r=t%c):r=t;var u=[n,i,r].map((function(t){return t<10?"0"+t:t}));return u.join(e)}return","===e?t.toLocaleString():(String(t).indexOf(".")>-1&&(t=Math.abs(t)>1?t.toFixed(a||0):t.toFixed(a||2)),t)}function l(t,e){var a=new Date(t);if("hour"===e){var n=a.getHours();return n=n<10?"0"+n:n,"".concat(n,":00 ~ ").concat(n,":59")}if("week"===e){var i=a.getDate()-a.getDay()+1,r=i+6,o=new Date(a.setDate(i));o=d(o);var c=new Date(a.setDate(r));return c=d(c),"".concat(o," ~ ").concat(c)}if("month"===e){var s=new Date(a.getFullYear(),a.getMonth(),1);s=d(s);var u=new Date(a.getFullYear(),a.getMonth()+1,0);return u=d(u),"".concat(s," ~ ").concat(u)}return d(a)}function d(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",n=t;"object"!==(0,o.default)(n)&&(n=new Date(n));var i=n.getFullYear(),r=n.getMonth()+1,c=n.getDate(),s=n.getHours(),u=n.getMinutes(),l=n.getSeconds(),d=[i,f(r),f(c)].join(a),p=[f(s),f(u),f(l)].join(":");return"dateTime"===e?d+" "+p:d}function f(t){return t<10?"0"+t:t}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t.length)return!0;var a=864e5,n=(0,i.default)(t,2),r=n[0],o=n[1],c=o-r<a*e;return c}a("ac1f"),a("5319"),a("e9c4"),a("d81d"),a("7db0"),a("d3b7"),a("a9e3"),a("c975"),a("14d9"),a("b64b"),a("159b"),a("99af"),a("4de4"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861");var v={}}).call(this,a("a9ff")["default"])},b17d:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniIcons:a("b351").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat__select"},[t.label?a("span",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),a("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":t.current}},[a("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":t.disabled}},[a("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}},[t.current?a("v-uni-view",{staticClass:"uni-select__input-text"},[t._v(t._s(t.current))]):a("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[t._v(t._s(t.typePlaceholder))]),t.current&&t.clear?a("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearVal.apply(void 0,arguments)}}}):a("uni-icons",{attrs:{type:t.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),t.showSelector?a("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}}):t._e(),t.showSelector?a("v-uni-view",{staticClass:"uni-select__selector"},[a("v-uni-view",{staticClass:"uni-popper__arrow"}),a("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===t.mixinDatacomResData.length?a("v-uni-view",{staticClass:"uni-select__selector-empty"},[a("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._l(t.mixinDatacomResData,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-select__selector-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(e)}}},[a("v-uni-text",{class:{"uni-select__selector__disabled":e.disable}},[t._v(t._s(t.formatItemName(e)))])],1)}))],2)],1):t._e()],1)],1)],1)},r=[]},b23c:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniStatBreadcrumb:a("7593").default,uniDataSelect:a("8301").default,uniDatetimePicker:a("f096").default,qiunDataCharts:a("47d7").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-sub-title"},[t._v("多个指标在不同平台数据的占比，可以直观看出各个平台引流的效果")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex mb-m",staticStyle:{padding:"0px 15px"}},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}}),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"ml-m label-text hide-on-phone"},[t._v("日期选择:")]),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":!!t.query.start_time},attrs:{type:"date",returnType:"timestamp",clearIcon:!1},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1)],1),a("v-uni-view",{staticClass:"dispaly-grid"},t._l(t.chartsData,(function(e,n){return a("v-uni-view",{key:n,staticClass:"uni-stat--x uni-charts-box1"},[a("v-uni-view",{staticClass:"label-text",staticStyle:{margin:"5px 0 20px 0"}},[t._v(t._s(t.chartsData[n].title))]),a("qiun-data-charts",{attrs:{type:"ring",chartData:t.chartsData[n],echartsH5:!0,echartsApp:!0,errorMessage:t.errorMessage}})],1)})),1)],1)],1)},r=[]},d6b5:function(t,e,a){"use strict";var n=a("5f60"),i=a.n(n);i.a},e03c:function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("7db0"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("c975"),a("99af");var n={name:"uni-stat-select",mixins:[t.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var t=this;this.debounceGet=this.debounce((function(){t.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var t=this.placeholder,e={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return e?t+e:t},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},valueCom:function(t,e){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,r)}),e)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var t="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var e;if(this.collection&&(e=this.getCache()),e||0===e)t=e;else{var a="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),t=a}(t||0===t)&&this.emit(t)}else t=this.valueCom;var n=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=n?this.formatItemName(n):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(a){a.value===t&&(e=a.disable)})),e},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),this.collection&&this.setCache(t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,a=t.value,n=t.channel_code;if(n=n?"(".concat(n,")"):"",this.format){var i="";for(var r in i=this.format,t)i=i.replace(new RegExp("{".concat(r,"}"),"g"),t[r]);return i}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(a,")"):e||"未命名".concat(n)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),a=uni.getStorageSync(this.cacheKey)||{};a[e]=t,uni.setStorageSync(this.cacheKey,a)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};delete e[t],uni.setStorageSync(this.cacheKey,e)}}};e.default=n}).call(this,a("a9ff")["default"])},e9f3:function(t,e,a){"use strict";a.r(e);var n=a("9dd0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a}}]);