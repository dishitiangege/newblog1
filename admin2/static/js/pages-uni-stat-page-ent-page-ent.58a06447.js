(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-page-ent-page-ent"],{"05e7":function(e,t,n){"use strict";n.r(t);var i=n("4583"),a=n("0c01");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("f72e");var u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1f4870c4",null,!1,i["a"],void 0);t["default"]=o.exports},"0c01":function(e,t,n){"use strict";n.r(t);var i=n("eb76"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"0e79":function(e,t,n){var i=n("5f3e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("8d6fc748",i,!0,{sourceMap:!1,shadowMode:!1})},2191:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"35bd":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("2191")),r=i(n("73b0")),u=i(n("b58d")),o=i(n("67b6a")),s=i(n("fb6e")),l={en:a.default,es:r.default,fr:u.default,"zh-Hans":o.default,"zh-Hant":s.default};t.default=l},4583:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniStatBreadcrumb:n("7593").default,uniDataSelect:n("8301").default,uniStatTabs:n("ec04").default,uniDatetimePicker:n("f096").default,uniStatPanel:n("30ef").default,uniTable:n("d123").default,uniTr:n("045e").default,uniTh:n("32d3").default,uniTooltip:n("f36c").default,uniIcons:n("b351").default,uniTd:n("7403").default,uniPagination:n("863e").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[e._v("入口页数据分析")])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[n("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),n("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),n("v-uni-view",{staticClass:"uni-stat--x flex"},[n("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),n("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.start_time,callback:function(t){e.$set(e.query,"start_time",t)},expression:"query.start_time"}})],1),n("v-uni-view",{staticClass:"uni-stat--x"},[n("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?n("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_id,callback:function(t){e.$set(e.query,"channel_id",t)},expression:"query.channel_id"}}):e._e()],1),n("uni-stat-panel",{attrs:{items:e.panelData}}),n("v-uni-view",{staticClass:"uni-stat--x p-m"},[n("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:e.$t("common.empty")}},[n("uni-tr",[e._l(e.fieldsMap,(function(t,i){return[t.title?n("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[n("uni-tooltip",{scopedSlots:e._u([0===i&&t.tooltip?{key:"content",fn:function(){return[n("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.title)),0===i&&t.tooltip?n("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):e._e()]}))],2),e._l(e.tableData,(function(t,i){return n("uni-tr",{key:i},e._l(e.fieldsMap,(function(i,a){return n("uni-td",{key:a,attrs:{align:0===a?"left":"center"}},[e._v(e._s(void 0!==t[i.field]?t[i.field]:"-"))])})),1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},"4efa":function(e,t,n){"use strict";var i=n("0e79"),a=n.n(i);a.a},"5f3e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},"67b6a":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"73b0":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"863e":function(e,t,n){"use strict";n.r(t);var i=n("c4f6"),a=n("88ec");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("4efa");var u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],void 0);t["default"]=o.exports},"88ec":function(e,t,n){"use strict";n.r(t);var i=n("aaa0"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},"9e80":function(e,t,n){var i=n("a8a6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a317d732",i,!0,{sourceMap:!1,shadowMode:!1})},a8a6:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-stat-edit--x[data-v-1f4870c4]{display:flex;justify-content:space-between}",""]),e.exports=t},aaa0:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("14d9"),n("d3b7"),n("e25e");var a=n("37dc"),r=i(n("35bd")),u=(0,a.initVueI18n)(r.default),o=u.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||o("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||o("uni-pagination.prevText")},nextPageText:function(){return this.nextText||o("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize,a=[],r=[],u=Math.ceil(n/i),o=0;o<u;o++)a.push(o+1);r.push(1);var s=a[a.length-(t+1)/2];return a.forEach((function(n,i){(t+1)/2>=e?n<t+1&&n>1&&r.push(n):e+2<=s?n>e-(t+1)/2&&n<e+(t+1)/2&&r.push(n):(n>e-(t+1)/2||u-t<n)&&n<a[a.length-1]&&r.push(n)})),u>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(a[a.length-1])):(t+1)/2>=e||e+2<=s||(r.shift(),r.push(a[a.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add("uni-pagination-picker-show"):setTimeout((function(){return e.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=s},b58d:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},bd68:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"入口页",field:"path",tooltip:"设备进入应用访问的第一个页面，例如设备从页面1进入应用，跳转到页面2，1为入口页，而2不是"},{title:"页面名称",field:"title"},{title:"访问次数",field:"visit_times",tooltip:"访问过应用内任意页面总次数，多个页面之间跳转、同一页面的重复访问计为多次访问",value:0},{title:"入口页次数",field:"entry_count",tooltip:"作为访问会话第一个访问页面（即着陆页）的次数",value:0},{title:"跳出率",field:"bounce_rate",formatter:"%%",tooltip:"只浏览一个页面便离开应用的次数占总启动次数的百分比",value:0,stat:"avg"},{title:"访问总时长",field:"duration",disabled:!0},{title:"次均停留时长",field:"avg_device_session_time",computed:"duration/visit_times",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0},{title:"设备平均停留时长 ",field:"avg_user_time",computed:"duration/visit_devices",formatter:":",tooltip:"平均每个设备停留在应用内的总时长，即应用停留总时长/访问设备数",value:0}]},c4f6:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("b351").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=e.$handleEvent(n),e.selectPage(t,i)}}},[n("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},eb76:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("b85c"));n("4de4"),n("d3b7"),n("b64b"),n("14d9");var r=n("b0a6"),u=i(n("bd68")),o={data:function(){return{fieldsMap:u.default,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,tableData:[],panelData:u.default.filter((function(e){return e.hasOwnProperty("value")})),channelData:[]}},computed:{channelQuery:function(){var e=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:e})},versionQuery:function(){var e=this.query,t=e.appid,n=e.uni_platform,i=(0,r.stringifyQuery)({appid:t,uni_platform:n});return i}},created:function(){var e=this;this.debounceGet=(0,r.debounce)((function(){return e.getAllData()})),this.getChannelData()},watch:{query:{deep:!0,handler:function(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(e){this.getChannelData(e,!1)},changePlatform:function(e,t,n,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(e,t){this.currentDateTab=t;var n=(0,r.getTimeOfSomeDayAgo)(e),i=(0,r.getTimeOfSomeDayAgo)(0)-1;this.query.start_time=[n,i]},changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTableData()},changePageSize:function(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTableData()},getAllData:function(){this.getPanelData(),this.getTableData()},getTableData:function(t){var n=this;t=(0,r.stringifyQuery)(this.query,null,["uni_platform"]);var i=this.options.pageCurrent;this.loading=!0;var o=e.database(),s=(0,r.stringifyQuery)({appid:this.query.appid}),l=o.collection("uni-stat-pages").where(s).getTemp(),c=o.collection("uni-stat-page-result").where(t+" && entry_count > 0").getTemp();o.collection(c,l).field("".concat((0,r.stringifyField)(u.default),", stat_date, page_id")).groupBy("page_id").groupField((0,r.stringifyGroupField)(u.default)).orderBy("entry_count","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var t=e.result,i=t.count,o=t.data;n.options.total=i,n.tableData=[];var s,l=(0,a.default)(o);try{for(l.s();!(s=l.n()).done;){var c=s.value,d=c.page_id;if(Array.isArray(d)){delete c.page_id;var p=d[0];if(p&&Object.keys(p).length)for(var f in p)"_id"!==f&&(c[f]=p[f])}(0,r.mapfields)(u.default,c,c),n.tableData.push(c)}}catch(g){l.e(g)}finally{l.f()}})).catch((function(e){})).finally((function(){n.loading=!1}))},getPanelData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,r.stringifyQuery)(this.query,null,["uni_platform"]),i=e.database();i.collection("uni-stat-page-result").where(n).field((0,r.stringifyField)(u.default)).groupBy("appid").groupField((0,r.stringifyGroupField)(u.default)).orderBy("start_time","desc ").get().then((function(e){var n=e.result.data[0];t.panelData=[],t.panelData=(0,r.mapfields)(u.default,n)}))},navTo:function(e){var t="/pages/uni-stat/overview/overview?id=".concat(e);uni.navigateTo({url:t})},getChannelData:function(t,n){var i=this;this.query.channel_id="";var a=e.database(),r={};t=t||this.query.appid,t&&(r.appid=t),n=n||this.query.platform_id,n&&(r.platform_id=n);var u=a.collection("uni-stat-app-platforms").field("_id, name").getTemp(),o=a.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();a.collection(o,u).orderBy("platform_id","asc").get().then((function(e){var t,n=e.result.data,a=[];if(n.length>0)for(var r in n)t=n[r].channel_name?n[r].channel_name:"默认",n[r].platform_id.length>0&&(t=n[r].platform_id[0].name+"-"+t),a.push({value:n[r]._id,text:t});i.channelData=a})).catch((function(e){})).finally((function(){}))}}};t.default=o}).call(this,n("a9ff")["default"])},f72e:function(e,t,n){"use strict";var i=n("9e80"),a=n.n(i);a.a},fb6e:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')}}]);