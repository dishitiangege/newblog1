(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-trend-trend"],{"02f8":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"日期",field:"start_time",tooltip:"",formatter:"",stat:-1},{title:"新增用户",field:"new_user_count",tooltip:"首次访问应用的用户数（以设备为判断标准，去重）",value:0},{title:"活跃用户",field:"active_user_count",tooltip:"访问过应用内任意页面的总用户数（去重）",value:0},{title:"次均停留时长",field:"avg_user_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,stat:"avg"},{title:"人均停留时长 ",field:"avg_user_time",formatter:":",tooltip:"平均每个用户停留在应用内的总时长，即应用停留总时长/活跃用户",value:0,stat:"avg"},{title:"总用户数",field:"total_users",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0}]},"0836":function(e,t,a){var n=a("08b6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("9fcb6a32",n,!0,{sourceMap:!1,shadowMode:!1})},"08b6":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),e.exports=t},"0e79":function(e,t,a){var n=a("5f3e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("8d6fc748",n,!0,{sourceMap:!1,shadowMode:!1})},1095:function(e,t,a){"use strict";var n=a("0836"),i=a.n(n);i.a},"14d3":function(e,t,a){"use strict";a.r(t);var n=a("9512"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},2191:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},2362:function(e,t,a){"use strict";a.r(t);var n=a("ef69"),i=a("3806");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"7224c498",null,!1,n["a"],void 0);t["default"]=o.exports},"35bd":function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("2191")),r=n(a("73b0")),u=n(a("b58d")),o=n(a("67b6a")),s=n(a("fb6e")),l={en:i.default,es:r.default,fr:u.default,"zh-Hans":o.default,"zh-Hant":s.default};t.default=l},3806:function(e,t,a){"use strict";a.r(t);var n=a("b0ab"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},4911:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniTable:a("d123").default,uniTr:a("045e").default,uniTh:a("32d3").default,uniTooltip:a("f36c").default,uniIcons:a("b351").default,uniTd:a("7403").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[e._l(e.filedsMap,(function(t,n){return[t.title?a("uni-th",{key:n+"_"+n+"_0",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:e._u([e.tooltip&&t.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.title)),e.tooltip&&t.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):e._e()]}))],2),e._l(e.data,(function(t,n){return a("uni-tr",{key:n},[e._l(e.filedsMap,(function(n,i){return[n.title?a("uni-td",{key:i+"_"+i+"_0",attrs:{align:"center"}},[e._v(e._s(void 0!==t[n.field]?t[n.field]:"-"))]):e._e()]}))],2)}))],2)},r=[]},"4efa":function(e,t,a){"use strict";var n=a("0e79"),i=a.n(n);i.a},"5b91":function(e,t,a){"use strict";a.r(t);var n=a("4911"),i=a("14d3");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("1095");var u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"67b9b6bd",null,!1,n["a"],void 0);t["default"]=o.exports},"5f3e":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},"67b6a":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"73b0":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"863e":function(e,t,a){"use strict";a.r(t);var n=a("c4f6"),i=a("88ec");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("4efa");var u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"28de2840",null,!1,n["a"],void 0);t["default"]=o.exports},"88ec":function(e,t,a){"use strict";a.r(t);var n=a("aaa0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},9512:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};t.default=n},aaa0:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("14d9"),a("d3b7"),a("e25e");var i=a("37dc"),r=n(a("35bd")),u=(0,i.initVueI18n)(r.default),o=u.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||o("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||o("uni-pagination.prevText")},nextPageText:function(){return this.nextText||o("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),a=Number(this.pageSize);return t&&a&&(e=Math.ceil(t/a)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,a=this.total,n=this.pageSize,i=[],r=[],u=Math.ceil(a/n),o=0;o<u;o++)i.push(o+1);r.push(1);var s=i[i.length-(t+1)/2];return i.forEach((function(a,n){(t+1)/2>=e?a<t+1&&a>1&&r.push(a):e+2<=s?a>e-(t+1)/2&&a<e+(t+1)/2&&r.push(a):(a>e-(t+1)/2||u-t<a)&&a<i[i.length-1]&&r.push(a)})),u>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(t+1)/2>=e||e+2<=s||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add("uni-pagination-picker-show"):setTimeout((function(){return e.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var a=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>a?this.currentIndex=a:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=s},b0ab:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("b85c")),r=n(a("3835"));a("4de4"),a("d3b7"),a("159b"),a("14d9"),a("e9c4");var u=a("b0a6"),o=n(a("02f8")),s={data:function(){return{fieldsMap:o.default,query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,currentDimensionTab:0,tableData:[],panelData:o.default.filter((function(e){return e.hasOwnProperty("value")})),chartData:{},chartTab:"new_user_count",channelData:[],tabName:"新增用户",errorMessage:""}},computed:{chartTabs:function(){var e=[];return o.default.forEach((function(t){var a=t.field,n=t.title,i=t.hasOwnProperty("value");a&&n&&i&&e.push({_id:a,name:n})})),e},dimensionTabs:function(){var e=[{_id:"hour",name:"按时"},{_id:"day",name:"按日"},{_id:"week",name:"按周"},{_id:"month",name:"按月"}];return this.getDays()?(this.query.dimension="day",e.forEach((function(e,t){"hour"===e._id?e.disabled=!0:e.disabled=!1})),this.currentDimensionTab=1):(this.query.dimension="hour",e.forEach((function(e,t){"hour"===e._id?e.disabled=!1:e.disabled=!0})),this.currentDimensionTab=0),e},channelQuery:function(){var e=this.query.platform_id;return(0,u.stringifyQuery)({platform_id:e})},versionQuery:function(){var e=this.query,t=e.appid,a=e.uni_platform,n=(0,u.stringifyQuery)({appid:t,uni_platform:a});return n}},created:function(){var e=this;this.debounceGet=(0,u.debounce)((function(){e.getAllData(e.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(e){this.debounceGet()}}},methods:{getDays:function(){if(!this.query.start_time.length)return!0;var e=(0,r.default)(this.query.start_time,2),t=e[0],a=e[1],n=a-t>=864e5;return n},useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(e){this.getChannelData(e,!1)},changePlatform:function(e,t,a,n){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange:function(e,t){this.currentDateTab=t;var a,n;a=(0,u.getTimeOfSomeDayAgo)(e),n=e?(0,u.getTimeOfSomeDayAgo)(0)-1:(0,u.getTimeOfSomeDayAgo)(0)+864e5-1,this.query.start_time=[a,n]},changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize:function(e){this.options.pageSize=e,this.getTabelData(this.query)},changeChartTab:function(e,t,a){this.tabName=a,this.getChartData(this.query,e,a)},getAllData:function(e){e.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(e,this.chartTab,this.tabName),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData:function(t){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.chartTab,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"新增用户";t=(0,u.stringifyQuery)(t,!0,["uni_platform"]);var s=this.query.dimension,l=e.database();l.collection("uni-stat-result").where(t).field("".concat((0,u.stringifyField)(o.default,n),", start_time")).groupBy("start_time").groupField((0,u.stringifyGroupField)(o.default,n)).orderBy("start_time","asc").get({getCount:!0}).then((function(e){var t=e.result,l=(t.count,t.data),c={categories:[],series:[{name:r,data:[]}]},d=o.default.filter((function(e){return e.field===n}));d=JSON.parse(JSON.stringify(d)),delete d[0].value,d[0].formatter="";var p,f=(0,i.default)(l);try{for(f.s();!(p=f.n()).done;){var h=p.value;(0,u.mapfields)(d,h,h);var g=(0,u.formatDate)(h.start_time,s),v=h[n];c.series[0].data.push(v),c.categories.push(g)}}catch(m){f.e(m)}finally{f.f()}a.chartData=c})).catch((function(e){})).finally((function(){a.loading=!1}))},getTabelData:function(t){var a=this,n=this.options.pageCurrent;t=(0,u.stringifyQuery)(t,!0,["uni_platform"]),this.options.pageCurrent=1,this.loading=!0;var r=e.database();r.collection("uni-stat-result").where(t).field((0,u.stringifyField)(o.default)).groupBy("start_time").groupField((0,u.stringifyGroupField)(o.default)).orderBy("start_time","desc").skip((n-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var t,n=e.result,r=n.count,s=n.data,l=(0,i.default)(s);try{for(l.s();!(t=l.n()).done;){var c=t.value,d=c.start_time;if(d){var p=a.query.dimension;c.start_time=(0,u.formatDate)(d,p)}(0,u.mapfields)(o.default,c,c)}}catch(f){l.e(f)}finally{l.f()}a.tableData=[],a.options.total=r,a.tableData=s})).catch((function(e){})).finally((function(){a.loading=!1}))},getPanelData:function(){var t=this,a=JSON.parse(JSON.stringify(this.query));a.dimension="day";var n=(0,u.stringifyQuery)(a,null,["uni_platform"]),i=e.database();i.collection("uni-stat-result").where(n).field("".concat((0,u.stringifyField)(o.default),",stat_date")).groupBy("appid").groupField((0,u.stringifyGroupField)(o.default)).orderBy("stat_date","desc").get().then((function(e){var a=e.result.data[0];a&&(a.total_users=0),t.panelData=[],t.panelData=(0,u.mapfields)(o.default,a),u.getFieldTotal.call(t,n,"total_users")}))},navTo:function(e){var t="/pages/uni-stat/overview/overview?id=".concat(e);uni.navigateTo({url:t})},getChannelData:function(t,a){var n=this;this.query.channel_id="";var i=e.database(),r={};t=t||this.query.appid,t&&(r.appid=t),a=a||this.query.platform_id,a&&(r.platform_id=a);var u=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),o=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(o,u).orderBy("platform_id","asc").get().then((function(e){var t,a=e.result.data,i=[];if(a.length>0)for(var r in a)t=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(t=a[r].platform_id[0].name+"-"+t),i.push({value:a[r]._id,text:t});n.channelData=i})).catch((function(e){})).finally((function(){}))}}};t.default=s}).call(this,a("a9ff")["default"])},b58d:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},c4f6:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniIcons:a("b351").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?a("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[a("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),a("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),a("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),a("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),a("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[a("v-uni-view",{staticClass:"uni-pagination__num-current"},[a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,n){return a("v-uni-view",{key:n,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(a){if(!a.type.indexOf("key")&&e._k(a.keyCode,"top",void 0,a.key,void 0))return null;arguments[0]=a=e.$handleEvent(a),e.selectPage(t,n)}}},[a("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),a("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},ef69:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniStatBreadcrumb:a("7593").default,uniDataSelect:a("8301").default,uniStatTabs:a("ec04").default,uniDatetimePicker:a("f096").default,uniStatPanel:a("30ef").default,qiunDataCharts:a("47d7").default,uniStatTable:a("5b91").default,uniPagination:a("863e").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[e._v("各指标趋势分析")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeAppid.apply(void 0,arguments)}},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.start_time,callback:function(t){e.$set(e.query,"start_time",t)},expression:"query.start_time"}}),a("uni-stat-tabs",{attrs:{label:"维度选择",type:"box",current:e.currentDimensionTab,tabs:e.dimensionTabs},model:{value:e.query.dimension,callback:function(t){e.$set(e.query,"dimension",t)},expression:"query.dimension"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_id,callback:function(t){e.$set(e.query,"channel_id",t)},expression:"query.channel_id"}}):e._e()],1),a("uni-stat-panel",{attrs:{items:e.panelData}}),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"label-text mb-l"},[e._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:e.chartTabs},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeChartTab.apply(void 0,arguments)}},model:{value:e.chartTab,callback:function(t){e.chartTab=t},expression:"chartTab"}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:e.chartData,echartsH5:!0,echartsApp:!0,errorMessage:e.errorMessage}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:e.tableData,filedsMap:e.fieldsMap,loading:e.loading}}),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},fb6e:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')}}]);