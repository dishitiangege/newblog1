(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-activity-activity"],{"0836":function(e,t,a){var n=a("08b6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("9fcb6a32",n,!0,{sourceMap:!1,shadowMode:!1})},"08b6":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".uni-stat-tooltip-s[data-v-67b9b6bd]{width:160px;white-space:normal}",""]),e.exports=t},"0e79":function(e,t,a){var n=a("5f3e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("8d6fc748",n,!0,{sourceMap:!1,shadowMode:!1})},1095:function(e,t,a){"use strict";var n=a("0836"),i=a.n(n);i.a},"14d3":function(e,t,a){"use strict";a.r(t);var n=a("9512"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},2191:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"35bd":function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("2191")),r=n(a("73b0")),o=n(a("b58d")),c=n(a("67b6a")),s=n(a("fb6e")),u={en:i.default,es:r.default,fr:o.default,"zh-Hans":c.default,"zh-Hant":s.default};t.default=u},"3ef4":function(e,t,a){"use strict";var n=a("a2b3"),i=a.n(n);i.a},4911:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniTable:a("d123").default,uniTr:a("045e").default,uniTh:a("32d3").default,uniTooltip:a("f36c").default,uniIcons:a("b351").default,uniTd:a("7403").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:"暂无数据"}},[a("uni-tr",[e._l(e.filedsMap,(function(t,n){return[t.title?a("uni-th",{key:n+"_"+n+"_0",attrs:{align:"center"}},[a("uni-tooltip",{scopedSlots:e._u([e.tooltip&&t.tooltip?{key:"content",fn:function(){return[a("v-uni-view",{staticClass:"uni-stat-tooltip-s"},[e._v(e._s(t.tooltip))])]},proxy:!0}:null],null,!0)},[e._v(e._s(t.title)),e.tooltip&&t.tooltip?a("uni-icons",{attrs:{type:"help",color:"#666"}}):e._e()],1)],1):e._e()]}))],2),e._l(e.data,(function(t,n){return a("uni-tr",{key:n},[e._l(e.filedsMap,(function(n,i){return[n.title?a("uni-td",{key:i+"_"+i+"_0",attrs:{align:"center"}},[e._v(e._s(void 0!==t[n.field]?t[n.field]:"-"))]):e._e()]}))],2)}))],2)},r=[]},"4efa":function(e,t,a){"use strict";var n=a("0e79"),i=a.n(n);i.a},"5b91":function(e,t,a){"use strict";a.r(t);var n=a("4911"),i=a("14d3");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("1095");var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"67b9b6bd",null,!1,n["a"],void 0);t["default"]=c.exports},"5f3e":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},"67b6a":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},6880:function(e,t,a){"use strict";a.r(t);var n=a("af83"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"69d0":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"日期",field:"start_time",tooltip:"",formatter:"-"},{title:"日活",field:"active_user_count",tooltip:"选中日期当天的访问用户数"},{title:"周活",field:"week_active_user_count",tooltip:"选中日期所在自然周（包括选中日期在内）的访问用户数"},{title:"日活/周活",field:"active_user_count/week_active_user_count",computed:"active_user_count/week_active_user_count",tooltip:"选中日期的访问用户数占周访问用户数的百分比",formatter:"%"},{title:"月活",field:"month_active_user_count",tooltip:"选中日期所在自然月（包括选中日期在内）的访问用户数"},{title:"日活/月活",field:"active_user_count/month_active_user_count",computed:"active_user_count/month_active_user_count",tooltip:"选中日期的访问用户数占月访问用户数的百分比",formatter:"%"}]},"6c5e":function(e,t,a){"use strict";a.r(t);var n=a("e03c"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"70ba":function(e,t,a){"use strict";a.r(t);var n=a("84bc4"),i=a("6880");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6570c86a",null,!1,n["a"],void 0);t["default"]=c.exports},"73b0":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},8301:function(e,t,a){"use strict";a.r(t);var n=a("b17d"),i=a("6c5e");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("3ef4");var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"3128c571",null,!1,n["a"],void 0);t["default"]=c.exports},"84bc4":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniStatBreadcrumb:a("7593").default,uniDataSelect:a("8301").default,uniStatTabs:a("ec04").default,uniDatetimePicker:a("f096").default,qiunDataCharts:a("47d7").default,uniStatTable:a("5b91").default,uniPagination:a("863e").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[e._v("用户活跃度分析")])],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeAppid.apply(void 0,arguments)}},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,mode:"date",yesterday:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.start_time,callback:function(t){e.$set(e.query,"start_time",t)},expression:"query.start_time"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_id,callback:function(t){e.$set(e.query,"channel_id",t)},expression:"query.channel_id"}}):e._e()],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"label-text mb-l"},[e._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:e.chartTabs},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeChartTab.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:e.chartData,echartsH5:!0,echartsApp:!0,errorMessage:e.errorMessage}})],1)],1),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("uni-stat-table",{attrs:{data:e.tableData,filedsMap:e.fieldsMap,loading:e.loading,tooltip:!0}}),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1)],1)},r=[]},"863e":function(e,t,a){"use strict";a.r(t);var n=a("c4f6"),i=a("88ec");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("4efa");var o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"28de2840",null,!1,n["a"],void 0);t["default"]=c.exports},"88ec":function(e,t,a){"use strict";a.r(t);var n=a("aaa0"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},9512:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"uni-stat-table",data:function(){return{}},props:{data:{type:Array,default:function(){return[]}},filedsMap:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!1}}};t.default=n},a2b3:function(e,t,a){var n=a("abb1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("4f06").default;i("75738e15",n,!0,{sourceMap:!1,shadowMode:!1})},aaa0:function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("14d9"),a("d3b7"),a("e25e");var i=a("37dc"),r=n(a("35bd")),o=(0,i.initVueI18n)(r.default),c=o.t,s={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||c("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||c("uni-pagination.prevText")},nextPageText:function(){return this.nextText||c("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),a=Number(this.pageSize);return t&&a&&(e=Math.ceil(t/a)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,a=this.total,n=this.pageSize,i=[],r=[],o=Math.ceil(a/n),c=0;c<o;c++)i.push(c+1);r.push(1);var s=i[i.length-(t+1)/2];return i.forEach((function(a,n){(t+1)/2>=e?a<t+1&&a>1&&r.push(a):e+2<=s?a>e-(t+1)/2&&a<e+(t+1)/2&&r.push(a):(a>e-(t+1)/2||o-t<a)&&a<i[i.length-1]&&r.push(a)})),o>t?((t+1)/2>=e?r[r.length-1]="...":e+2<=s?(r[1]="...",r[r.length-1]="..."):r[1]="...",r.push(i[i.length-1])):(t+1)/2>=e||e+2<=s||(r.shift(),r.push(i[i.length-1])),r}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add("uni-pagination-picker-show"):setTimeout((function(){return e.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var a=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>a?this.currentIndex=a:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=s},abb1:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-3128c571]{display:none}}.uni-stat__select[data-v-3128c571]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-3128c571]{width:100%;flex:1}.uni-stat__actived[data-v-3128c571]{width:100%;flex:1}.uni-label-text[data-v-3128c571]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-3128c571]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-3128c571]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-3128c571]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-3128c571]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-3128c571]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-3128c571]{font-size:14px;color:#909399}.uni-select__selector[data-v-3128c571]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-3128c571]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-3128c571],\r\n.uni-select__selector-item[data-v-3128c571]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-3128c571]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-3128c571]:last-child,\r\n.uni-select__selector-item[data-v-3128c571]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-3128c571]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-3128c571],\r\n.uni-popper__arrow[data-v-3128c571]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-3128c571]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-3128c571]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-3128c571]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-3128c571]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-3128c571]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),e.exports=t},af83:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("b85c"));a("d3b7"),a("14d9"),a("a9e3"),a("99af");var r=a("b0a6"),o=n(a("69d0")),c={data:function(){return{tableName:"uni-stat-result",fieldsMap:o.default,query:{dimension:"day",appid:"",platform_id:"",uni_platform:"",version_id:"",channel_id:"",start_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:0,currentChartTab:"day",tableData:[],chartData:{},defaultChart:{field:"new_user_count",name:"新增用户"},channelData:[],errorMessage:""}},computed:{chartTabs:function(){var e=[{_id:"day",name:"日活"},{_id:"week",name:"周活"},{_id:"month",name:"月活"}];return(0,r.maxDeltaDay)(this.query.start_time,7)&&e.forEach((function(e,t){"month"===e._id?e.disabled=!0:e.disabled=!1})),e},channelQuery:function(){var e=this.query.platform_id;return(0,r.stringifyQuery)({platform_id:e})},versionQuery:function(){var e=this.query,t=e.appid,a=e.uni_platform,n=(0,r.stringifyQuery)({appid:t,uni_platform:a});return n}},created:function(){var e=this;this.debounceGet=(0,r.debounce)((function(){e.getAllData(e.query)}),300),this.getChannelData()},watch:{query:{deep:!0,handler:function(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(e){this.getChannelData(e,!1)},changePlatform:function(e,t,a,n){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=n.code},changeTimeRange:function(e,t){this.currentDateTab=t;var a,n;a=(0,r.getTimeOfSomeDayAgo)(e),n=e?(0,r.getTimeOfSomeDayAgo)(0)-1:(0,r.getTimeOfSomeDayAgo)(0)+864e5-1,this.query.start_time=[a,n]},changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTabelData(this.query)},changePageSize:function(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTabelData(this.query)},changeChartTab:function(e,t,a){this.currentChartTab=e,this.getChartData(this.query,e,a)},getAllData:function(e){e.appid?(this.errorMessage="",this.getChartData(e,this.currentChartTab),this.getTabelData(e)):this.errorMessage="请先选择应用"},getChartData:function(t,a){var n=this,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"日活",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"active_user_count",u={categories:[],series:[{name:c,data:[]}]};t=(0,r.stringifyQuery)(t,null,["uni_platform"]);var l=e.database();"day"===a?l.collection(this.tableName).where(t).field("".concat((0,r.stringifyField)(o.default,s),", start_time")).groupBy("start_time").groupField((0,r.stringifyGroupField)(o.default,s)).orderBy("start_time","asc").get({getCount:!0}).then((function(e){var t=e.result,a=(t.count,t.data);n.chartData=[];var o,c=(0,i.default)(a);try{for(c.s();!(o=c.n()).done;){var l=o.value,d=(0,r.formatDate)(l.start_time,"day"),p=l[s];u.series[0].data.push(p),u.categories.push(d)}}catch(f){c.e(f)}finally{c.f()}n.chartData=u})).catch((function(e){})):this.getRangeCountData(t,a).then((function(e){var t=a;"week"===a&&(a="isoWeek");var o=e.result,c=(o.count,o.data);n.chartData=[];var l,d=(0,i.default)(c);try{for(d.s();!(l=d.n()).done;){var p=l.value,f=+new Date(p.year,0)+(6048e5*Number(p[a])-1),h=(0,r.formatDate)(f,t),v=p[a+"_"+s];v&&(u.series[0].data.push(v),u.categories.push(h))}}catch(g){d.e(g)}finally{d.f()}n.chartData=u}))},getTabelData:function(t){var a=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active_user_count",c=this.options.pageCurrent;t=(0,r.stringifyQuery)(t,null,["uni_platform"]),this.loading=!0;var s=e.database();s.collection(this.tableName).where(t).field("".concat((0,r.stringifyField)(o.default,n),", start_time")).groupBy("start_time").groupField((0,r.stringifyGroupField)(o.default,n)).orderBy("start_time","desc").skip((c-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var n=e.result,c=n.count,s=n.data,u=s,l=c,d=[],p=[];a.getRangeCountData(t,"week").then((function(e){var n=e.result,c=(n.count,n.data);d=c,a.getRangeCountData(t,"month").then((function(e){var t=e.result,n=(t.count,t.data);p=n;var c,s=a.mapWithWeekAndMonth(u,d,p),f=(0,i.default)(s);try{for(f.s();!(c=f.n()).done;){var h=c.value;(0,r.mapfields)(o.default,h,h)}}catch(v){f.e(v)}finally{f.f()}a.tableData=[],a.options.total=l,a.tableData=s})).finally((function(){a.loading=!1}))}))})).catch((function(e){}))},getRangeCountData:function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"active_user_count";"week"===a&&(a="isoWeek");this.options.pageCurrent;var i=e.database();return i.collection(this.tableName).where(t).field("".concat(n,", start_time, ").concat(a,'(add(new Date(0),start_time), "Asia/Shanghai") as ').concat(a,',year(add(new Date(0),start_time), "Asia/Shanghai") as year')).groupBy("year, ".concat(a)).groupField("sum(".concat(n,") as ").concat(a,"_").concat(n)).orderBy("year asc, ".concat(a," asc")).get({getCount:!0})},mapWithWeekAndMonth:function(e,t,a){var n,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"active_user_count",o=(0,i.default)(e);try{for(o.s();!(n=o.n()).done;){var c,s=n.value,u=new Date(s.start_time),l=u.getUTCFullYear(),d=u.getMonth()+1,p=this.getWeekNumber(u),f=(0,i.default)(t);try{for(f.s();!(c=f.n()).done;){var h=c.value;h.isoWeek===p&&h.year===l&&(s["isoWeek_".concat(r)]=h["week_".concat(r)])}}catch(_){f.e(_)}finally{f.f()}var v,g=(0,i.default)(a);try{for(g.s();!(v=g.n()).done;){var m=v.value;m.month===d&&m.year===l&&(s["month_".concat(r)]=m["month_".concat(r)])}}catch(_){g.e(_)}finally{g.f()}}}catch(_){o.e(_)}finally{o.f()}return e},getWeekNumber:function(e){e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),e.setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1)),a=Math.ceil(((e-t)/864e5+1)/7);return a},getChannelData:function(t,a){var n=this;this.query.channel_id="";var i=e.database(),r={};t=t||this.query.appid,t&&(r.appid=t),a=a||this.query.platform_id,a&&(r.platform_id=a);var o=i.collection("uni-stat-app-platforms").field("_id, name").getTemp(),c=i.collection("uni-stat-app-channels").where(r).field("_id, channel_name, create_time, platform_id").getTemp();i.collection(c,o).orderBy("platform_id","asc").get().then((function(e){var t,a=e.result.data,i=[];if(a.length>0)for(var r in a)t=a[r].channel_name?a[r].channel_name:"默认",a[r].platform_id.length>0&&(t=a[r].platform_id[0].name+"-"+t),i.push({value:a[r]._id,text:t});n.channelData=i})).catch((function(e){})).finally((function(){}))}}};t.default=c}).call(this,a("a9ff")["default"])},b17d:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniIcons:a("b351").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-stat__select"},[e.label?a("span",{staticClass:"uni-label-text hide-on-phone"},[e._v(e._s(e.label+"："))]):e._e(),a("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":e.current}},[a("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":e.disabled}},[a("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}},[e.current?a("v-uni-view",{staticClass:"uni-select__input-text"},[e._v(e._s(e.current))]):a("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[e._v(e._s(e.typePlaceholder))]),e.current&&e.clear?a("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearVal.apply(void 0,arguments)}}}):a("uni-icons",{attrs:{type:e.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),e.showSelector?a("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}):e._e(),e.showSelector?a("v-uni-view",{staticClass:"uni-select__selector"},[a("v-uni-view",{staticClass:"uni-popper__arrow"}),a("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.mixinDatacomResData.length?a("v-uni-view",{staticClass:"uni-select__selector-empty"},[a("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._l(e.mixinDatacomResData,(function(t,n){return a("v-uni-view",{key:n,staticClass:"uni-select__selector-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.change(t)}}},[a("v-uni-text",{class:{"uni-select__selector__disabled":t.disable}},[e._v(e._s(e.formatItemName(t)))])],1)}))],2)],1):e._e()],1)],1)],1)},r=[]},b58d:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},c4f6:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniIcons:a("b351").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?a("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[a("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),a("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),a("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),a("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),a("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[a("v-uni-view",{staticClass:"uni-pagination__num-current"},[a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),a("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,n){return a("v-uni-view",{key:n,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(a){if(!a.type.indexOf("key")&&e._k(a.keyCode,"top",void 0,a.key,void 0))return null;arguments[0]=a=e.$handleEvent(a),e.selectPage(t,n)}}},[a("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),a("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[a("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[a("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},r=[]},e03c:function(e,t,a){"use strict";(function(e){a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("a9e3"),a("7db0"),a("d3b7"),a("159b"),a("ac1f"),a("5319"),a("4d63"),a("c607"),a("2c3e"),a("25f0"),a("c975"),a("99af");var n={name:"uni-stat-select",mixins:[e.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var e=this;this.debounceGet=this.debounce((function(){e.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var e=this.placeholder,t={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return t?e+t:e},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(e,t){Array.isArray(e)&&t!==e&&(this.mixinDatacomResData=e)}},valueCom:function(e,t){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(e){e.length&&this.initDefVal()}}},methods:{debounce:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=null;return function(){for(var n=this,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];a&&clearTimeout(a),a=setTimeout((function(){e.apply(n,r)}),t)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var e="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var t;if(this.collection&&(t=this.getCache()),t||0===t)e=t;else{var a="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(a=this.mixinDatacomResData[this.defItem-1].value),e=a}(e||0===e)&&this.emit(e)}else e=this.valueCom;var n=this.mixinDatacomResData.find((function(t){return t.value===e}));this.current=n?this.formatItemName(n):""},isDisabled:function(e){var t=!1;return this.mixinDatacomResData.forEach((function(a){a.value===e&&(t=a.disable)})),t},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(e){e.disable||(this.showSelector=!1,this.current=this.formatItemName(e),this.emit(e.value))},emit:function(e){this.$emit("change",e),this.$emit("input",e),this.$emit("update:modelValue",e),this.collection&&this.setCache(e)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(e){var t=e.text,a=e.value,n=e.channel_code;if(n=n?"(".concat(n,")"):"",this.format){var i="";for(var r in i=this.format,e)i=i.replace(new RegExp("{".concat(r,"}"),"g"),e[r]);return i}return this.collection.indexOf("app-list")>0?"".concat(t,"(").concat(a,")"):t||"未命名".concat(n)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),t=uni.getStorageSync(this.cacheKey)||{};return t[e]},setCache:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),a=uni.getStorageSync(this.cacheKey)||{};a[t]=e,uni.setStorageSync(this.cacheKey,a)},removeCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),t=uni.getStorageSync(this.cacheKey)||{};delete t[e],uni.setStorageSync(this.cacheKey,t)}}};t.default=n}).call(this,a("a9ff")["default"])},fb6e:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')}}]);