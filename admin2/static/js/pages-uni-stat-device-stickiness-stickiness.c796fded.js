(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-device-stickiness-stickiness"],{"0836":function(t,e,a){var i=a("08b6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("9fcb6a32",i,!0,{sourceMap:!1,shadowMode:!1})},"08b6":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),t.exports=e},1095:function(t,e,a){"use strict";var i=a("0836"),n=a.n(i);n.a},"14d3":function(t,e,a){"use strict";a.r(e);var i=a("9512"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"348e":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:a("7593").default,uniDataSelect:a("8301").default,uniStatTabs:a("ec04").default,uniDatetimePicker:a("f096").default,qiunDataCharts:a("47d7").default,uniStatTable:a("5b91").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[t._v("用户忠诚度用户对您应用的访问深度及访问频次情况。助您了解用户对应用的粘度，尤其在对内容改进后，效果是否有所提升")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAppid.apply(void 0,arguments)}},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("v-uni-view",{staticClass:"uni-stat--x mb-l",staticStyle:{"padding-top":"0"}},[a("v-uni-view",{staticClass:"mb-m line-bottom"},[a("uni-stat-tabs",{staticStyle:{"line-height":"40px","margin-bottom":"-17px"},attrs:{type:"boldLine",tabs:t.types},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}})],1),a("v-uni-view",{staticClass:"p-m"},[a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"pie",chartData:t.chartData,echartsH5:!0,echartsApp:!0,errorMessage:t.errorMessage}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:t.tableData,filedsMap:t.fieldsMap,loading:t.loading}})],1)],1)],1)},r=[]},"3ef4":function(t,e,a){"use strict";var i=a("a2b3"),n=a.n(i);n.a},4911:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniTable:a("d123").default,uniTr:a("045e").default,uniTh:a("32d3").default,uniTooltip:a("f36c").default,uniIcons:a("b351").default,uniTd:a("7403").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("uni-table",{attrs:{loading:t.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[t._l(t.filedsMap,(function(e,i){return[e.title?a("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:t._u([t.tooltip&&e.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[t._v(t._s(e.tooltip))])]},proxy:!0}:null],null,!0)},[t._v(t._s(e.title)),t.tooltip&&e.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):t._e()],1)],1):t._e()]}))],2),t._l(t.data,(function(e,i){return a("uni-tr",{key:i},[t._l(t.filedsMap,(function(i,n){return[i.title?a("uni-td",{key:n+"_"+n+"_0",attrs:{align:"center"}},[t._v(t._s(void 0!==e[i.field]?e[i.field]:"-"))]):t._e()]}))],2)}))],2)},r=[]},"554c":function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("b85c"));a("4de4"),a("d3b7"),a("159b"),a("d81d"),a("99af"),a("a9e3"),a("7db0"),a("14d9"),a("13d5"),a("ac1f"),a("1276");var r=a("b0a6"),o=i(a("7499")),s={data:function(){return{fieldsMap:o.default,query:{appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},loading:!1,currentDateTab:1,tableData:[],panelData:o.default.filter((function(t){return t.hasOwnProperty("value")})),chartData:{},type:"visit_depth_data",types:[{_id:"visit_depth_data",name:"访问页数"},{_id:"duration_data",name:"访问时长"}],field:"visit_devices",fields:[{_id:"visit_devices",name:"访问人数"},{_id:"visit_times",name:"访问次数"}],options:{visit_depth_data:{prefix:"p",title:"页",value:[1,2,3,4,5,10]},duration_data:{prefix:"s",title:"秒",value:[0,3,6,11,21,31,51,100]}},channelData:[],errorMessage:""}},computed:{fieldName:function(){var t=this;return this.fields.forEach((function(e){if(e._id===t.field)return e.name}))},channelQuery:function(){var t=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:t})},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,i=(0,r.stringifyQuery)({appid:e,uni_platform:a});return i}},created:function(){var t=this;this.debounceGet=(0,r.debounce)((function(){t.getAllData(t.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(t){this.debounceGet()}},type:function(){this.getAllData(this.query)},field:function(){this.getAllData(this.query)}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(t){this.getChannelData(t,!1)},changePlatform:function(t,e,a,i){this.getChannelData(null,t),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a=(0,r.getTimeOfSomeDayAgo)(t),i=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[a,i]},createStr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"visit_depth_data",a=t.length,i=this.options[e].prefix,n=this.options[e].value,r=n.map((function(n){return t.map((function(t){return"sum(".concat(e,".").concat(t,".").concat(i+"_"+n,") as ").concat(a>1?t+"_"+i+"_"+n:i+"_"+n)}))})),o=r.join();return o},parseChars:function(t){t=t.split("_");var e=this.options[this.type],a=e.title;e.value.forEach((function(i,n){var r=e.value[n+1];i===Number(t[t.length-1])&&(a=r?i+1===r?i+a:i+"-"+(r-1)+a:i+"+"+a)}));return a},getAllData:function(t){t.appid?(this.errorMessage="",this.getChartData(t,this.field,this.fieldName),this.getTabelData(t)):this.errorMessage="请先选择应用"},getChartData:function(e){var a=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.field;arguments.length>2&&void 0!==arguments[2]||this.fields.find((function(t){return t._id===a.field})).name;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var n=this.createStr([i],this.type),o=t.database();o.collection("uni-stat-loyalty-result").where(e).groupBy("appid").groupField(n).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,i=(e.count,e.data);i=i[0];var n={series:[{data:[]}]};for(var r in i)if("appid"!==r){var o=a.parseChars(r),s=i[r];n.series[0].data.push({name:o,value:s})}a.chartData=n})).catch((function(t){})).finally((function(){a.loading=!1}))},getTabelData:function(e){var a=this;e=(0,r.stringifyQuery)(e,null,["uni_platform"]);var i=this.createStr(["visit_devices","visit_times"],this.type);this.fieldsMap[0].title=this.types.find((function(t){return t._id===a.type})).name,this.loading=!0;var s=t.database();s.collection("uni-stat-loyalty-result").where(e).groupBy("appid").groupField(i).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,i=(e.count,e.data),s=a.type,l=[],c=a.options[s].prefix;c="_".concat(c,"_");var u,d=(0,n.default)(i);try{for(d.s();!(u=d.n()).done;){var f=u.value;for(var p in f)if("appid"!==p){var h={},v=p.split(c);h.name=v[1],h[v[0]]=f[p],l.push(h)}}}catch(C){d.e(C)}finally{d.f()}var m=[],_={},b=function(t,e){return t+e},g=l.filter((function(t){return t.visit_devices})).map((function(t){return t.visit_devices}));g=g.length?g.reduce(b):0;var y=l.filter((function(t){return t.visit_times})).map((function(t){return t.visit_times}));y=y.length?y.reduce(b):0,_.visit_times=y,_.visit_devices=g,a.options[s].value.forEach((function(t){var e={};e.name=t+"p",l.forEach((function(a){if(Number(a.name)===t)for(var i in a)i!==name&&(e[i]=a[i],e["total_"+i]=_[i])})),e.name=a.parseChars(String(t)),m.push(e)}));for(var x=0,w=m;x<w.length;x++){var D=w[x];(0,r.mapfields)(o.default,D,D)}a.tableData=[],a.tableData=m})).catch((function(t){})).finally((function(){a.loading=!1}))},getChannelData:function(e,a){var i=this;this.query.channel_id="";var n=t.database(),r={};e=e||this.query.appid,e&&(r.appid=e),a=a||this.query.platform_id,a&&(r.platform_id=a);var o=n.collection("uni-stat-app-platforms").field("_id, name").getTemp(),s=n.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();n.collection(s,o).orderBy("platform_id","asc").get().then((function(t){var e,a=t.result.data,n=[];if(a.length>0)for(var r in a)e=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(e=a[r].platform_id[0].name+"-"+e),n.push({value:a[r]._id,text:e});i.channelData=n})).catch((function(t){})).finally((function(){}))}}};e.default=s}).call(this,a("a9ff")["default"])},"5b91":function(t,e,a){"use strict";a.r(e);var i=a("4911"),n=a("14d3");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("1095");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"67b9b6bd",null,!1,i["a"],void 0);e["default"]=s.exports},"6c5e":function(t,e,a){"use strict";a.r(e);var i=a("e03c"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},7499:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=[{title:"名称",field:"name",tooltip:"",formatter:""},{title:"访问人数",field:"visit_devices",tooltip:"访问人数（活跃用户数）：访问过应用内任意页面的总用户数（去重）",value:0},{title:"访问人数占比",field:"visit_devices/total_visit_devices",computed:"visit_devices/total_visit_devices",formatter:"%"},{title:"访问次数",field:"visit_times",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"访问次数占比",field:"visit_times/total_visit_times",computed:"visit_times/total_visit_times",formatter:"%",tooltip:""}]},8301:function(t,e,a){"use strict";a.r(e);var i=a("b17d"),n=a("6c5e");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("3ef4");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"3128c571",null,!1,i["a"],void 0);e["default"]=s.exports},"92dc":function(t,e,a){"use strict";a.r(e);var i=a("554c"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},9512:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};e.default=i},a17a:function(t,e,a){var i=a("d588");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("127d3dd4",i,!0,{sourceMap:!1,shadowMode:!1})},a2b3:function(t,e,a){var i=a("abb1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("75738e15",i,!0,{sourceMap:!1,shadowMode:!1})},abb1:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-3128c571]{display:none}}.uni-stat__select[data-v-3128c571]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-3128c571]{width:100%;flex:1}.uni-stat__actived[data-v-3128c571]{width:100%;flex:1}.uni-label-text[data-v-3128c571]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-3128c571]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-3128c571]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-3128c571]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-3128c571]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-3128c571]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-3128c571]{font-size:14px;color:#909399}.uni-select__selector[data-v-3128c571]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-3128c571]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-3128c571],\r\n.uni-select__selector-item[data-v-3128c571]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-3128c571]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-3128c571]:last-child,\r\n.uni-select__selector-item[data-v-3128c571]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-3128c571]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-3128c571],\r\n.uni-popper__arrow[data-v-3128c571]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-3128c571]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-3128c571]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-3128c571]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-3128c571]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-3128c571]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),t.exports=e},b17d:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={uniIcons:a("b351").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-stat__select"},[t.label?a("span",{staticClass:"uni-label-text hide-on-phone"},[t._v(t._s(t.label+"："))]):t._e(),a("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":t.current}},[a("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":t.disabled}},[a("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}},[t.current?a("v-uni-view",{staticClass:"uni-select__input-text"},[t._v(t._s(t.current))]):a("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[t._v(t._s(t.typePlaceholder))]),t.current&&t.clear?a("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearVal.apply(void 0,arguments)}}}):a("uni-icons",{attrs:{type:t.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),t.showSelector?a("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelector.apply(void 0,arguments)}}}):t._e(),t.showSelector?a("v-uni-view",{staticClass:"uni-select__selector"},[a("v-uni-view",{staticClass:"uni-popper__arrow"}),a("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===t.mixinDatacomResData.length?a("v-uni-view",{staticClass:"uni-select__selector-empty"},[a("v-uni-text",[t._v(t._s(t.emptyTips))])],1):t._l(t.mixinDatacomResData,(function(e,i){return a("v-uni-view",{key:i,staticClass:"uni-select__selector-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.change(e)}}},[a("v-uni-text",{class:{"uni-select__selector__disabled":e.disable}},[t._v(t._s(t.formatItemName(e)))])],1)}))],2)],1):t._e()],1)],1)],1)},r=[]},d588:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-25a2251d]{display:flex;flex-wrap:wrap;align-items:center}.label-text[data-v-25a2251d]{font-size:14px;color:#666;margin:auto 0;margin-right:5px}.line-bottom[data-v-25a2251d]{border-bottom:2px solid #eee}.uni-stat-panel[data-v-25a2251d]{box-shadow:unset;border-bottom:1px solid #eee;padding:0;margin:0 15px}',""]),t.exports=e},d6f9:function(t,e,a){"use strict";a.r(e);var i=a("348e"),n=a("92dc");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("e89b");var o=a("f0c5"),s=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"25a2251d",null,!1,i["a"],void 0);e["default"]=s.exports},e03c:function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3"),a("7db0"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("c975"),a("99af");var i={name:"uni-stat-select",mixins:[t.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var t=this;this.debounceGet=this.debounce((function(){t.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var t=this.placeholder,e={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return e?t+e:t},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(t,e){Array.isArray(t)&&e!==t&&(this.mixinDatacomResData=t)}},valueCom:function(t,e){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(t){t.length&&this.initDefVal()}}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var i=this,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];a&&clearTimeout(a),a=setTimeout((function(){t.apply(i,r)}),e)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var t="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var e;if(this.collection&&(e=this.getCache()),e||0===e)t=e;else{var a="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),t=a}(t||0===t)&&this.emit(t)}else t=this.valueCom;var i=this.mixinDatacomResData.find((function(e){return e.value===t}));this.current=i?this.formatItemName(i):""},isDisabled:function(t){var e=!1;return this.mixinDatacomResData.forEach((function(a){a.value===t&&(e=a.disable)})),e},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(t){t.disable||(this.showSelector=!1,this.current=this.formatItemName(t),this.emit(t.value))},emit:function(t){this.$emit("change",t),this.$emit("input",t),this.$emit("update:modelValue",t),this.collection&&this.setCache(t)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(t){var e=t.text,a=t.value,i=t.channel_code;if(i=i?"(".concat(i,")"):"",this.format){var n="";for(var r in n=this.format,t)n=n.replace(new RegExp("{".concat(r,"}"),"g"),t[r]);return n}return this.collection.indexOf("app-list")>0?"".concat(e,"(").concat(a,")"):e||"未命名".concat(i)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};return e[t]},setCache:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),a=uni.getStorageSync(this.cacheKey)||{};a[e]=t,uni.setStorageSync(this.cacheKey,a)},removeCache:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),e=uni.getStorageSync(this.cacheKey)||{};delete e[t],uni.setStorageSync(this.cacheKey,e)}}};e.default=i}).call(this,a("a9ff")["default"])},e89b:function(t,e,a){"use strict";var i=a("a17a"),n=a.n(i);n.a}}]);