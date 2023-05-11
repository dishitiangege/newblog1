(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-user-overview-overview"],{"137d":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.resFieldsMap=e.fieldsMap=e.entFieldsMap=void 0;e.fieldsMap=[{value:"今天",contrast:"昨天"},{title:"新增用户",field:"new_user_count",tooltip:"首次访问应用的用户数（以用户为判断标准，去重）",value:0,contrast:0},{title:"活跃用户",field:"active_user_count",tooltip:"访问过应用内任意页面的总用户数，今日数据为每小时活跃用户累加（未虑重），昨日数据为全天活跃用户虑重后结果。",value:0,contrast:0},{title:"次均停留时长",field:"avg_user_session_time",formatter:":",tooltip:"平均每次打开应用停留在应用内的总时长，即应用停留总时长/启动次数",value:0,contrast:0,stat:"avg"},{title:"人均停留时长 ",field:"avg_user_time",formatter:":",tooltip:"平均每个用户停留在应用内的总时长，即应用停留总时长/活跃用户",value:0,contrast:0,stat:"avg"},{title:"总用户数",field:"total_users",tooltip:"从添加统计到当前选择时间的总用户数（去重）",value:0,contrast:0}];e.resFieldsMap=[{title:"受访页",field:"path",tooltip:"用户进入应用访问的所有页面，例如用户从页面1进入应用，跳转到页面2，1,2均为受访页",formatter:""},{title:"访问次数",field:"visit_times",tooltip:"访问该页面的总次数",value:0},{title:"占比",field:"rate",computed:"visit_times/total_app_access",tooltip:"某个页面的访问次数占所有页面访问次数的比例",formatter:"%"}];e.entFieldsMap=[{title:"入口页",field:"path",tooltip:"用户进入应用访问的第一个页面，例如用户从页面1进入应用，跳转到页面2，1为入口页，而2不是",formatter:""},{title:"访问次数",field:"entry_count",tooltip:"访问该页面的总次数",value:0},{title:"占比",field:"rate",computed:"entry_count/total_app_access",tooltip:"某个页面的访问次数占所有页面访问次数的比例",formatter:"%"}]},3379:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-stat-card-header[data-v-729dc091]{display:flex;justify-content:space-between;color:#555;font-size:14px;font-weight:600;padding:10px 0;margin-bottom:15px}.uni-stat-card-header-link[data-v-729dc091]{cursor:pointer}",""]),t.exports=e},"53b8":function(t,e,a){var i=a("3379");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("4f06").default;r("65a45832",i,!0,{sourceMap:!1,shadowMode:!1})},"688d":function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("b85c")),n=i(a("3835"));a("4de4"),a("d3b7"),a("159b"),a("14d9"),a("7db0"),a("d81d"),a("e9c4"),a("99af"),a("a9e3");var s=a("b0a6"),o=a("137d"),l=o.fieldsMap.filter((function(t){return t.hasOwnProperty("value")})),u={data:function(){return{tableName:"uni-stat-result",fieldsMap:o.fieldsMap,resFieldsMap:o.resFieldsMap,entFieldsMap:o.entFieldsMap,query:{dimension:"hour",appid:"",platform_id:"",uni_platform:"",version_id:"",start_time:[]},options:{pageCurrent:1,total:0,pageSizeIndex:0,pageSizeRange:[10,20,50,100]},loading:!1,currentDateTab:2,chartTab:"new_user_count",tableData:[],resTableData:[],entTableData:[],panelData:l,chartData:{},eopts:{seriesTemplate:[{itemStyle:{borderWidth:2,borderColor:"#1890FF",color:"#1890FF"},areaStyle:{color:{colorStops:[{offset:0,color:"#1890FF"},{offset:1,color:"#FFFFFF"}]}}},{lineStyle:{color:"#ea7ccc",width:2,type:"dashed"},itemStyle:{borderWidth:1,borderColor:"#ea7ccc",color:"#ea7ccc"},areaStyle:null}]},tabIndex:0,errorMessage:""}},onLoad:function(t){var e=t.appid;e&&(this.query.appid=e)},computed:{pageSize:function(){var t=this.options,e=t.pageSizeRange,a=t.pageSizeIndex;return e[a]},chartTabs:function(){var t=[];return o.fieldsMap.forEach((function(e){var a=e.field,i=e.title;a&&i&&t.push({_id:a,name:i})})),t},versionQuery:function(){var t=this.query,e=t.appid,a=t.uni_platform,i=(0,s.stringifyQuery)({appid:e,uni_platform:a});return i},channelQuery:function(){var t=this.query,e=t.appid,a=t.platform_id,i=(0,s.stringifyQuery)({appid:e,platform_id:a});return i}},created:function(){var t=this;this.debounceGet=(0,s.debounce)((function(){t.getAllData(t.query)}),300)},watch:{query:{deep:!0,handler:function(t){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=null},changePlatform:function(t,e,a,i){this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(t,e){this.currentDateTab=e;var a,i;a=(0,s.getTimeOfSomeDayAgo)(t),i=t?(0,s.getTimeOfSomeDayAgo)(0)-1:(0,s.getTimeOfSomeDayAgo)(0)+864e5-1,this.query.start_time=[a,i]},changePageCurrent:function(t){this.options.pageCurrent=t.current,this.getChartData(this.query)},changePageSize:function(t){var e=t.detail.value;this.options.pageCurrent=1,this.options.pageSizeIndex=e,this.getChartData(this.query)},changeChartTab:function(t,e,a){this.tabIndex=e,this.getChartData(this.query,t,a)},getAllData:function(t){t.appid?(this.errorMessage="",this.getPanelData(),this.getChartData(t)):this.errorMessage="请先选择应用"},getDays:function(){if(!this.query.start_time.length)return!0;var t=(0,n.default)(this.query.start_time,2),e=t[0],a=t[1],i=a-e>=864e5;return i},getPanelData:function(){var e=this,a=this.query,i=a.appid,r=a.platform_id,n=a.version_id,l=(0,s.stringifyQuery)({appid:i,platform_id:r,version_id:n,start_time:[(0,s.getTimeOfSomeDayAgo)(1),(new Date).getTime()]}),u=t.database();u.collection(this.tableName).where(l).field("".concat((0,s.stringifyField)(o.fieldsMap),",dimension,stat_date")).groupBy("stat_date, dimension").groupField((0,s.stringifyGroupField)(o.fieldsMap)).orderBy("stat_date","desc").get().then((function(t){var a=t.result.data,i=a.find((function(t){return t.stat_date===(0,s.parseDateTime)((0,s.getTimeOfSomeDayAgo)(0),"","")}))||{};i.total_users=0;var r=a.find((function(t){return"day"===t.dimension&&t.stat_date===(0,s.parseDateTime)((0,s.getTimeOfSomeDayAgo)(1),"","")}));e.panelData=[],e.panelData=(0,s.mapfields)(o.fieldsMap,i),e.panelData.map((function(t){(0,s.mapfields)(o.fieldsMap,r,t,"","contrast")})),s.getFieldTotal.call(e,l,"total_users")}))},getChartData:function(e){var a,i=this,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.chartTabs[this.tabIndex]._id,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.chartTabs[this.tabIndex].name,c=(this.options.pageCurrent,this.currentDateTab),d=(0,s.getTimeOfSomeDayAgo)(c),f=864e5;if(!this.getDays()){var p=d-f,h=d+f-1;e=JSON.parse(JSON.stringify(e)),a=e.start_time=[p,h]}e=(0,s.stringifyQuery)(e,!0,["uni_platform"]);var m=t.database();m.collection(this.tableName).where(e).field("".concat((0,s.stringifyField)(o.fieldsMap,l),", start_time")).groupBy("start_time").groupField((0,s.stringifyGroupField)(o.fieldsMap,l)).orderBy("start_time","asc").get({getCount:!0}).then((function(t){var e=t.result,c=(e.count,e.data),f={categories:[],series:[{name:u,data:[]}]},p=o.fieldsMap.filter((function(t){return t.field===l}));if(p=JSON.parse(JSON.stringify(p)),delete p[0].value,p[0].formatter="",i.getDays()){var h,m=(0,r.default)(c);try{for(m.s();!(h=m.n()).done;){var v=h.value;(0,s.mapfields)(p,v,v);var g=(0,s.formatDate)(v.start_time,"day"),y=Number(v[l]);f.series[0].data.push(y),f.categories.push(g)}}catch(_){m.e(_)}finally{m.f()}}else(function(){for(var t=a,e=(0,n.default)(t,2),i=e[0],r=e[1],o=f.series[1]={name:(0,s.formatDate)(i),data:[]},u=f.series[0]={name:(0,s.formatDate)(r),data:[]},h=function(t){var e=t<10?"0"+t:t,a="".concat(e,":00 ~ ").concat(e,":59");f.categories.push(a),o.data[t]=0,u.data[t]=0,c.forEach((function(e){(0,s.mapfields)(p,e,e);var a=Number(e[l]),i=new Date(e.start_time);e.start_time<d?i.getHours()===t&&(o.data[t]=a):i.getHours()===t&&(u.data[t]=a)}))},m=0;m<24;++m)h(m)})();i.chartData=f})).catch((function(t){})).finally((function(){}))},getAppAccessTimes:function(e){var a=t.database();return a.collection(this.tableName).where(e).groupBy("appid").groupField("sum(page_visit_count) as total_app_access").get()},navTo:function(t){t&&uni.navigateTo({url:t})}}};e.default=u}).call(this,a("a9ff")["default"])},"9e6c":function(t,e,a){"use strict";var i=a("53b8"),r=a.n(i);r.a},cc7a:function(t,e,a){"use strict";a.r(e);var i=a("688d"),r=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=r.a},d5c0:function(t,e,a){"use strict";a.r(e);var i=a("fe69"),r=a("cc7a");for(var n in r)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(n);a("9e6c");var s=a("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"729dc091",null,!1,i["a"],void 0);e["default"]=o.exports},fe69:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uniStatBreadcrumb:a("7593").default,uniDataSelect:a("8301").default,uniStatTabs:a("ec04").default,uniDatetimePicker:a("f096").default,uniStatPanel:a("30ef").default,qiunDataCharts:a("47d7").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"})],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:t.query.appid,callback:function(e){t.$set(t.query,"appid",e)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:t.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:t.query.version_id,callback:function(e){t.$set(t.query,"version_id",e)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x flex"},[a("uni-stat-tabs",{attrs:{label:"日期选择",current:t.currentDateTab,mode:"date",today:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTimeRange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":t.currentDateTab<0&&!!t.query.start_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.useDatetimePicker.apply(void 0,arguments)}},model:{value:t.query.start_time,callback:function(e){t.$set(t.query,"start_time",e)},expression:"query.start_time"}})],1),a("v-uni-view",{staticClass:"uni-stat--x"},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePlatform.apply(void 0,arguments)}},model:{value:t.query.platform_id,callback:function(e){t.$set(t.query,"platform_id",e)},expression:"query.platform_id"}}),t.query.platform_id&&-1===t.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:t.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:t.query.channel_id,callback:function(e){t.$set(t.query,"channel_id",e)},expression:"query.channel_id"}}):t._e()],1),a("uni-stat-panel",{attrs:{items:t.panelData,contrast:!0}}),a("v-uni-view",{staticClass:"uni-stat--x p-m"},[a("v-uni-view",{staticClass:"uni-stat-card-header"},[t._v("趋势图")]),a("uni-stat-tabs",{staticClass:"mb-l",attrs:{type:"box",tabs:t.chartTabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeChartTab.apply(void 0,arguments)}},model:{value:t.chartTab,callback:function(e){t.chartTab=e},expression:"chartTab"}}),a("v-uni-view",{staticClass:"uni-charts-box"},[a("qiun-data-charts",{attrs:{type:"area",chartData:t.chartData,eopts:t.eopts,echartsH5:!0,echartsApp:!0,tooltipFormat:"tooltipCustom",errorMessage:t.errorMessage}})],1)],1)],1)],1)},n=[]}}]);