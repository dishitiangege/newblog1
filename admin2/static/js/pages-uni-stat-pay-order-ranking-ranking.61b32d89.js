(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-pay-order-ranking-ranking"],{"0e4c":function(e,t,a){"use strict";a.r(t);var n=a("d1a3"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},1797:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.text-btn[data-v-46ae333d]{color:#2979ff;cursor:pointer;margin:0 5px}',""]),e.exports=t},"21e2":function(e,t,a){"use strict";var n=a("cb23"),r=a.n(n);r.a},"40e8":function(e,t,a){"use strict";a.r(t);var n=a("f4d8"),r=a("0e4c");for(var i in r)["default"].indexOf(i)<0&&function(e){a.d(t,e,(function(){return r[e]}))}(i);a("21e2");var s=a("f0c5"),l=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"46ae333d",null,!1,n["a"],void 0);t["default"]=l.exports},"9de0":function(e,t,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var n in e){var s=e[n],l=s.type,o=s.value;switch(l){case"search":"string"===typeof o&&o.length&&(a[n]=new RegExp(o));break;case"select":if(o.length){var u,d=[],c=(0,i.default)(o);try{for(c.s();!(u=c.n()).done;){var f=u.value;d.push(t.eq(f))}}catch(C){c.e(C)}finally{c.f()}a[n]=t.or(d)}break;case"range":if(o.length){var p=o[0],v=o[1];a[n]=t.and([t.gte(p),t.lte(v)])}break;case"date":if(o.length){var h=(0,r.default)(o,2),m=h[0],_=h[1],b=new Date(m),g=new Date(_);a[n]=t.and([t.gte(b),t.lte(g)])}break;case"timestamp":if(o.length){var y=(0,r.default)(o,2),x=y[0],w=y[1];a[n]=t.and([t.gte(x),t.lte(w)])}break}}return a},t.validator=void 0;var r=n(a("3835")),i=n(a("b85c"));a("4d63"),a("c607"),a("ac1f"),a("2c3e"),a("25f0"),a("14d9");t.validator={user_id:{rules:[{format:"string"}],label:"用户ID"},provider:{rules:[{format:"string"},{range:[{text:"微信支付",value:"wxpay"},{text:"支付宝",value:"alipay"},{text:"苹果应用内支付",value:"appleiap"}]}],label:"支付供应商"},provider_pay_type:{rules:[{format:"string"}],label:"支付方式"},uni_platform:{rules:[{format:"string"}],label:"应用平台"},status:{rules:[{format:"int"},{range:[{text:"已关闭",value:-1},{text:"未支付",value:0},{text:"已支付",value:1},{text:"已部分退款",value:2},{text:"已全额退款",value:3}]}],defaultValue:0,label:"订单状态"},type:{rules:[{format:"string"}],label:"订单类型"},order_no:{rules:[{format:"string"},{minLength:20,maxLength:28}],label:"业务系统订单号"},out_trade_no:{rules:[{format:"string"}],label:"支付插件订单号"},transaction_id:{rules:[{format:"string"}],label:"交易单号"},device_id:{rules:[{format:"string"}],label:"设备ID"},client_ip:{rules:[{format:"string"}],label:"客户端IP"},openid:{rules:[{format:"string"}],label:"openid"},description:{rules:[{format:"string"}],label:"支付描述"},"err_msg ":{rules:[{format:"string"}],label:"支付失败原因"},total_fee:{rules:[{format:"int"}],label:"订单总金额"},refund_fee:{rules:[{format:"int"}],label:"订单总退款金额"},refund_count:{rules:[{format:"int"}],label:"当前退款笔数"},refund_list:{rules:[{format:"array"}],label:"退款详情"},provider_appid:{rules:[{format:"string"}],label:"开放平台appid"},appid:{rules:[{format:"string"}],label:"DCloud AppId"},user_order_success:{rules:[{format:"bool"}],label:"回调状态"},pay_date:{rules:[{format:"timestamp"}],label:"支付时间"},notify_date:{rules:[{format:"timestamp"}],label:"异步通知时间"},cancel_date:{rules:[{format:"timestamp"}],label:"取消时间"}};t.enumConverter={provider_valuetotext:{wxpay:"微信支付",alipay:"支付宝",appleiap:"苹果应用内支付"},status_valuetotext:{0:"未支付",1:"已支付",2:"已部分退款",3:"已全额退款","-1":"已关闭"}}},cb23:function(e,t,a){var n=a("1797");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=a("4f06").default;r("b12dd9f4",n,!0,{sourceMap:!1,shadowMode:!1})},d1a3:function(e,t,a){"use strict";(function(e){a("7a82");var n=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac1f"),a("841c"),a("99af"),a("498a"),a("d81d"),a("4de4"),a("d3b7"),a("b64b");var r=n(a("5530")),i=a("9de0"),s=a("b0a6"),l=n(a("96ae")),o=e.database(),u={ascending:"asc",descending:"desc"},d={data:function(){return{collectionList:"uni-pay-orders",query:{appid:"",platform_id:"",uni_platform:"",version:"",pay_date:[],channel_code:""},where:"",orderby:"total_fee desc",orderByFieldName:"",selectedIndexs:[],options:(0,r.default)({pageSize:20,pageCurrent:1,filterData:{}},i.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"价值用户排行.xls",type:"xls",fields:{"用户ID":"user_id","用户昵称":"nickname","支付金额":"total_fee","订单数量":"count"}},exportExcelData:[],dateTabs:{time:[],timeStr:"",index:null,list:[{_id:0,name:"今天"},{_id:1,name:"昨天"},{_id:7,name:"最近七天"},{_id:30,name:"最近30天"},{_id:90,name:"最近90天"}]}}},onLoad:function(){this._filter={}},onReady:function(){},methods:{payDatePicker:function(e){this.query.pay_date=e,this.search()},onqueryload:function(e){this.exportExcelData=e},getWhere:function(){var e="status>0",t=this.query,a=t.pay_date,n=t.appid,r=t.version,i=t.uni_platform,s=t.channel_code;return a&&2==a.length&&(e+=" && pay_date>=".concat(a[0]," && pay_date<=").concat(a[1])),n&&(e+=" && appid=='".concat(n,"'")),r&&(e+=" && stat_data.app_version=='".concat(r,"'")),i&&(e+=" && stat_data.platform=='".concat(i,"'")),s&&(e+=" && stat_data.channel=='".concat(s,"'")),e=e.trim(),e},search:function(){var e=this;if(this.query.appid){var t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))}},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var a=this;uni.navigateTo({url:e,events:{refreshData:function(){a.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},sortChange:function(e,t){var a=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+u[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){a.$refs.udb.loadData()}))},filterChange:function(e,t){var a=this;this._filter[t]={type:e.filterType,value:e.filter};var n=(0,i.filterToWhere)(this._filter,o.command);Object.keys(n).length?this.where=n:this.where="",this.$nextTick((function(){a.$refs.udb.loadData()}))},platformChange:function(e,t,a,n){this.query.version=0,this.query.uni_platform=n.code},nameFormat:function(e){return e.user_id?e.nickname?"".concat(e.user_id,"（").concat(e.nickname,"）"):e.user_id:"匿名用户"},pageToUser:function(e){var t=e.user_id;uni.navigateTo({url:"/pages/system/user/list?id=".concat(t)})},pageToOrder:function(e){var t=e.user_id;uni.navigateTo({url:"/pages/uni-stat/pay-order/list/list?user_id=".concat(t)})},dateTabsChange:function(e,t){this.dateTabs.index=t;var a=(0,s.getTimeOfSomeDayAgo)(e),n=l.default.getOffsetStartAndEnd("day",0).endTime;1==e&&(n=l.default.getOffsetStartAndEnd("day",0,a).endTime),this.query.pay_date=[a,n]}},watch:{query:{deep:!0,handler:function(e){this.search()}}},computed:{versionQuery:function(){var e=this.query,t=e.appid,a=e.uni_platform,n=(0,s.stringifyQuery)({appid:t,uni_platform:a});return n},channelQuery:function(){var e=this.query,t=e.appid,a=e.platform_id,n=(0,s.stringifyQuery)({appid:t,platform_id:a});return n}}};t.default=d}).call(this,a("a9ff")["default"])},f4d8:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}));var n={uniStatBreadcrumb:a("7593").default,downloadExcel:a("470f").default,uniDataSelect:a("8301").default,uniStatTabs:a("ec04").default,uniDatetimePicker:a("f096").default,unicloudDb:a("960d").default,uniTable:a("d123").default,uniTr:a("045e").default,uniTh:a("32d3").default,uniTd:a("7403").default,uniPagination:a("863e").default},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("uni-stat-breadcrumb")],1),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),a("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[a("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),a("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),a("v-uni-view",{staticClass:"uni-stat--x",staticStyle:{"margin-bottom":"0"}},[a("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.platformChange.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?a("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"channel_code as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_code,callback:function(t){e.$set(e.query,"channel_code",t)},expression:"query.channel_code"}}):e._e()],1),a("v-uni-view",{staticClass:"flex"},[a("uni-stat-tabs",{attrs:{type:"box",current:e.dateTabs.index,tabs:e.dateTabs.list},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.dateTabsChange.apply(void 0,arguments)}}}),a("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",attrs:{type:"daterange",end:Date.now(),"return-type":"timestamp","clear-icon":!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.dateTabs.index=null}},model:{value:e.query.pay_date,callback:function(t){e.$set(e.query,"pay_date",t)},expression:"query.pay_date"}})],1),a("unicloud-db",{ref:"udb",attrs:{collection:e.collectionList,field:"user_id,nickname,uni_platform,status,total_fee,refund_fee,appid,pay_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,groupby:"user_id","group-field":"sum(total_fee) as total_fee,sum(refund_fee) as refund_fee, sum(subtract(total_fee,refund_fee)) as reality_fee, sum(1) as count,last(nickname) as nickname",options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,r=t.pagination,i=t.loading,s=t.error;t.options;return[a("uni-table",{ref:"table",staticStyle:{"min-height":"900px"},attrs:{loading:i,emptyText:s.message||i?"请求中...":"没有更多数据",border:!0,stripe:!0,type:""},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[a("uni-tr",[a("uni-th",{attrs:{align:"center"}},[e._v("排名")]),a("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"user_id")}}},[e._v("用户")]),a("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"reality_fee")}}},[e._v("支付金额（不含退款）")]),a("uni-th",{attrs:{align:"center",sortable:!0},on:{"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"count")}}},[e._v("订单数量")])],1),e._l(n,(function(t,n){return a("uni-tr",{key:n},[a("uni-td",{attrs:{align:"center"}},[e._v(e._s(parseInt(n+1+(r.current-1)*r.size)))]),a("uni-td",{attrs:{align:"center"}},[a("v-uni-text",{staticClass:"text-btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.pageToUser(t)}}},[e._v(e._s(e.nameFormat(t)))])],1),a("uni-td",{attrs:{align:"center"}},[e._v(e._s((t.reality_fee/100).toFixed(2)))]),a("uni-td",{attrs:{align:"center"}},[a("v-uni-text",{staticClass:"text-btn",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.pageToOrder(t)}}},[e._v(e._s(t.count))])],1)],1)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("uni-pagination",{attrs:{"show-icon":!0,"page-size":r.size,total:r.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:r.current,callback:function(t){e.$set(r,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},i=[]}}]);