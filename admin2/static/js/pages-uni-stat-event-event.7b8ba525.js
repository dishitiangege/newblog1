(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-uni-stat-event-event"],{"0804":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},"0e79":function(e,t,n){var i=n("5f3e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("8d6fc748",i,!0,{sourceMap:!1,shadowMode:!1})},2191:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"prev","uni-pagination.nextText":"next","uni-pagination.piecePerPage":"piece/page"}')},"299d":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".uni-stat-edit--x[data-v-b0dec182]{display:flex;justify-content:space-between}.uni-stat-edit--btn[data-v-b0dec182]{cursor:pointer}",""]),e.exports=t},3155:function(e,t,n){var i=n("299d");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("584b5b6c",i,!0,{sourceMap:!1,shadowMode:!1})},"35bd":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("2191")),o=i(n("73b0")),r=i(n("b58d")),u=i(n("67b6a")),l=i(n("fb6e")),c={en:a.default,es:o.default,fr:r.default,"zh-Hans":u.default,"zh-Hant":l.default};t.default=c},"3c5b":function(e,t,n){"use strict";n.r(t);var i=n("4c55"),a=n("fd4f");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("980e");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"03b6d5de",null,!1,i["a"],void 0);t["default"]=u.exports},"3c8b":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("2ca0");var i={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=i},"3df3":function(e,t,n){"use strict";n.r(t);var i=n("48b8"),a=n("4b33");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("8d81");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"b0dec182",null,!1,i["a"],void 0);t["default"]=u.exports},"3ef4":function(e,t,n){"use strict";var i=n("a2b3"),a=n.n(i);a.a},"48b8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniStatBreadcrumb:n("7593").default,uniLink:n("3c5b").default,uniDataSelect:n("8301").default,uniStatTabs:n("ec04").default,uniDatetimePicker:n("f096").default,uniTable:n("d123").default,uniTr:n("045e").default,uniTh:n("32d3").default,uniTd:n("7403").default,uniPagination:n("863e").default,uniPopup:n("d50b").default,uniPopupDialog:n("cd6c").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("uni-stat-breadcrumb",{staticClass:"uni-stat-breadcrumb-on-phone"}),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-sub-title hide-on-phone"},[e._v("分析用户自定义事件"),n("uni-link",{attrs:{href:"https://ask.dcloud.net.cn/article/36304",text:"自定义事件说明>>"}})],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"uni-stat--x flex p-1015"},[n("uni-data-select",{attrs:{collection:"opendb-app-list",field:"appid as value, name as text",orderby:"text asc",defItem:1,label:"应用选择",clear:!1},model:{value:e.query.appid,callback:function(t){e.$set(e.query,"appid",t)},expression:"query.appid"}}),n("uni-data-select",{staticClass:"ml-m",attrs:{collection:"opendb-app-versions",where:e.versionQuery,field:"_id as value, version as text, uni_platform as label, create_date as date",format:"{label} - {text}",orderby:"date desc",label:"版本选择"},model:{value:e.query.version_id,callback:function(t){e.$set(e.query,"version_id",t)},expression:"query.version_id"}})],1),n("v-uni-view",{staticClass:"uni-stat--x flex"},[n("uni-stat-tabs",{attrs:{label:"日期选择",current:e.currentDateTab,mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTimeRange.apply(void 0,arguments)}}}),n("uni-datetime-picker",{staticClass:"uni-stat-datetime-picker",class:{"uni-stat__actived":e.currentDateTab<0&&!!e.query.create_time.length},attrs:{type:"daterange",end:(new Date).getTime(),returnType:"timestamp",clearIcon:!1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.useDatetimePicker.apply(void 0,arguments)}},model:{value:e.query.create_time,callback:function(t){e.$set(e.query,"create_time",t)},expression:"query.create_time"}})],1),n("v-uni-view",{staticClass:"uni-stat--x"},[n("uni-stat-tabs",{attrs:{label:"平台选择",type:"boldLine",mode:"platform"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePlatform.apply(void 0,arguments)}},model:{value:e.query.platform_id,callback:function(t){e.$set(e.query,"platform_id",t)},expression:"query.platform_id"}}),e.query.platform_id&&-1===e.query.platform_id.indexOf("==")?n("uni-data-select",{ref:"version-select",staticClass:"p-channel",attrs:{collection:"uni-stat-app-channels",where:e.channelQuery,field:"_id as value, channel_name as text",orderby:"text asc",label:"渠道/场景值选择"},model:{value:e.query.channel_id,callback:function(t){e.$set(e.query,"channel_id",t)},expression:"query.channel_id"}}):e._e()],1),n("v-uni-view",{staticClass:"uni-stat--x p-m"},[n("uni-table",{attrs:{loading:e.loading,border:!0,stripe:!0,emptyText:e.$t("common.empty")}},[n("uni-tr",[e._l(e.fieldsMap,(function(t,i){return[t.title?n("uni-th",{key:i+"_"+i+"_0",attrs:{align:"center"}},[e._v(e._s(t.title))]):e._e()]}))],2),e._l(e.tableData,(function(t,i){return n("uni-tr",{key:i},e._l(e.fieldsMap,(function(i,a){return n("uni-td",{key:a,attrs:{align:"center"}},[e._v(e._s(void 0!==t[i.field]?t[i.field]:"-"))])})),1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"show-page-size":!0,"page-size":e.options.pageSize,current:e.options.pageCurrent,total:e.options.total},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageCurrent.apply(void 0,arguments)},pageSizeChange:function(t){arguments[0]=t=e.$handleEvent(t),e.changePageSize.apply(void 0,arguments)}}})],1)],1)],1),n("uni-popup",{ref:"inputDialog",attrs:{type:"dialog",maskClick:!0}},[n("uni-popup-dialog",{ref:"inputClose",attrs:{mode:"input",title:"请编辑名称",placeholder:"请输入内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.editName.apply(void 0,arguments)}},model:{value:e.updateValue,callback:function(t){e.updateValue=t},expression:"updateValue"}})],1)],1)},o=[]},"4b33":function(e,t,n){"use strict";n.r(t);var i=n("a957"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"4c55":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},a=[]},"4efa":function(e,t,n){"use strict";var i=n("0e79"),a=n.n(i);a.a},"585f":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=i},"595e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),e.exports=t},"5d3e":function(e,t,n){var i=n("6d4b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("b3d69a5a",i,!0,{sourceMap:!1,shadowMode:!1})},"5f3e":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-pagination[data-v-28de2840]{display:flex;position:relative;overflow:hidden;flex-direction:row;justify-content:center;align-items:center}.uni-pagination__total[data-v-28de2840]{font-size:14px;color:#999;margin-right:15px}.uni-pagination__btn[data-v-28de2840]{display:flex;cursor:pointer;padding:0 8px;line-height:30px;font-size:12px;position:relative;background-color:#f0f0f0;flex-direction:row;justify-content:center;align-items:center;text-align:center;border-radius:5px}.uni-pagination__child-btn[data-v-28de2840]{display:flex;font-size:12px;position:relative;flex-direction:row;justify-content:center;align-items:center;text-align:center;color:#666;font-size:12px}.uni-pagination__num[data-v-28de2840]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:30px;line-height:30px;font-size:12px;color:#666;margin:0 5px}.uni-pagination__num-tag[data-v-28de2840]{cursor:pointer;min-width:30px;margin:0 5px;height:30px;text-align:center;line-height:30px;color:#999;border-radius:4px}.uni-pagination__num-current[data-v-28de2840]{display:flex;flex-direction:row}.uni-pagination__num-current-text[data-v-28de2840]{font-size:15px}.current-index-text[data-v-28de2840]{color:#2979ff}.uni-pagination--enabled[data-v-28de2840]{color:#333;opacity:1}.uni-pagination--disabled[data-v-28de2840]{opacity:.5;cursor:default}.uni-pagination--hover[data-v-28de2840]{color:rgba(0,0,0,.6);background-color:#eee}.tag--active[data-v-28de2840]:hover{color:#2979ff}.page--active[data-v-28de2840]{color:#fff;background-color:#2979ff}.page--active[data-v-28de2840]:hover{color:#fff}.is-pc-hide[data-v-28de2840]{display:block}.is-phone-hide[data-v-28de2840]{display:none}@media screen and (min-width:450px){.is-pc-hide[data-v-28de2840]{display:none}.is-phone-hide[data-v-28de2840]{display:block}.uni-pagination__num-flex-none[data-v-28de2840]{flex:none}}',""]),e.exports=t},6707:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+e.dialogType]},[e._v(e._s(e.titleText))])],1),"base"===e.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[e._v(e._s(e.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:e.placeholderText,focus:e.focus},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[e._v(e._s(e.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[e._v(e._s(e.okText))])],1)],1)],1)},a=[]},"67b6a":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一页","uni-pagination.nextText":"下一页","uni-pagination.piecePerPage":"条/页"}')},"6c5e":function(e,t,n){"use strict";n.r(t);var i=n("e03c"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"6d4b":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-15e4b0ea]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-15e4b0ea]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-15e4b0ea]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-15e4b0ea]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-15e4b0ea]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-15e4b0ea]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-15e4b0ea]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-15e4b0ea]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-15e4b0ea]{font-size:16px;color:#333}.uni-button-color[data-v-15e4b0ea]{color:#2979ff}.uni-dialog-input[data-v-15e4b0ea]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-15e4b0ea]{color:#18bc37}.uni-popup__warn[data-v-15e4b0ea]{color:#f3a73f}.uni-popup__error[data-v-15e4b0ea]{color:#e43d33}.uni-popup__info[data-v-15e4b0ea]{color:#909399}',""]),e.exports=t},"73b0":function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"anterior","uni-pagination.nextText":"prxima","uni-pagination.piecePerPage":"Art��culo/P��gina"}')},"74a4":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"创建时间",field:"create_time",tooltip:"",formatter:""},{title:"事件ID",field:"event_key",stat:-1},{title:"事件参数",field:"param",tooltip:""},{title:"平台",field:"platform",tooltip:""},{title:"设备标识",field:"device_id",tooltip:""}]},"7e1f":function(e,t,n){var i=n("595e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a346bd00",i,!0,{sourceMap:!1,shadowMode:!1})},8301:function(e,t,n){"use strict";n.r(t);var i=n("b17d"),a=n("6c5e");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("3ef4");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"3128c571",null,!1,i["a"],void 0);t["default"]=u.exports},"863e":function(e,t,n){"use strict";n.r(t);var i=n("c4f6"),a=n("88ec");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("4efa");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"28de2840",null,!1,i["a"],void 0);t["default"]=u.exports},"88ec":function(e,t,n){"use strict";n.r(t);var i=n("aaa0"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"8d81":function(e,t,n){"use strict";var i=n("3155"),a=n.n(i);a.a},"91bc":function(e,t,n){"use strict";n.r(t);var i=n("9d20"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"980e":function(e,t,n){"use strict";var i=n("7e1f"),a=n.n(i);a.a},"9d20":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a=i(n("585f")),o=n("37dc"),r=i(n("ffce")),u=(0,o.initVueI18n)(r.default),l=u.t,c={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||l("uni-popup.ok")},closeText:function(){return this.cancelText||l("uni-popup.cancel")},placeholderText:function(){return this.placeholder||l("uni-popup.placeholder")},titleText:function(){return this.title||l("uni-popup.title")}},watch:{type:function(e){this.dialogType=e},mode:function(e){"input"===e&&(this.dialogType="info")},value:function(e){this.val=e}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};t.default=c},a2b3:function(e,t,n){var i=n("abb1");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("75738e15",i,!0,{sourceMap:!1,shadowMode:!1})},a957:function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("b85c"));n("d3b7"),n("14d9");var o=n("b0a6"),r=i(n("74a4")),u={data:function(){return{fieldsMap:r.default,query:{appid:"",platform_id:"",uni_platform:"",channel_id:"",version_id:"",create_time:[]},options:{pageSize:20,pageCurrent:1,total:0},loading:!1,currentDateTab:1,tableData:[],panelData:[],queryId:"",updateValue:"",channelData:[]}},computed:{channelQuery:function(){var e=this.query.platform_id;return(0,o.stringifyQuery)({platform_id:e})},versionQuery:function(){var e=this.query,t=e.appid,n=e.uni_platform,i=(0,o.stringifyQuery)({appid:t,uni_platform:n});return i}},created:function(){var e=this;this.debounceGet=(0,o.debounce)((function(){return e.getAllData()})),this.getChannelData()},watch:{query:{deep:!0,handler:function(e){this.options.pageCurrent=1,this.debounceGet()}}},methods:{useDatetimePicker:function(){this.currentDateTab=-1},changeAppid:function(e){this.getChannelData(e,!1)},changePlatform:function(e,t,n,i){this.getChannelData(null,e),this.query.version_id=0,this.query.uni_platform=i.code},changeTimeRange:function(e,t){this.currentDateTab=t;var n=(0,o.getTimeOfSomeDayAgo)(e),i=(0,o.getTimeOfSomeDayAgo)(0)-1;this.query.create_time=[n,i]},changePageCurrent:function(e){this.options.pageCurrent=e.current,this.getTableData()},changePageSize:function(e){this.options.pageSize=e,this.options.pageCurrent=1,this.getTableData()},getAllData:function(e){this.getTableData(e)},getTableData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.stringifyQuery)(this.query,null,["uni_platform"]),i=this.options.pageCurrent;this.loading=!0;var u=e.database();u.collection("uni-stat-event-logs","uni-stat-app-platforms").where(n).orderBy("create_time","desc").skip((i-1)*this.options.pageSize).limit(this.options.pageSize).get({getCount:!0}).then((function(e){var n=e.result,i=n.count,u=n.data;t.tableData=[],t.options.total=i;var l,c=(0,a.default)(u);try{for(c.s();!(l=c.n()).done;){var s=l.value;s.create_time=(0,o.parseDateTime)(s.create_time,"dateTime"),s.platform=s.platform&&s.platform[0].name,(0,o.mapfields)(r.default,s,s),t.tableData.push(s)}}catch(d){c.e(d)}finally{c.f()}})).catch((function(e){})).finally((function(){t.loading=!1}))},getChannelData:function(t,n){var i=this;this.query.channel_id="";var a=e.database(),o={};t=t||this.query.appid,t&&(o.appid=t),n=n||this.query.platform_id,n&&(o.platform_id=n);var r=a.collection("uni-stat-app-platforms").field("_id, name").getTemp(),u=a.collection("uni-stat-app-channels").where(o).field("_id, channel_name, create_time, platform_id").getTemp();a.collection(u,r).orderBy("platform_id","asc").get().then((function(e){var t,n=e.result.data,a=[];if(n.length>0)for(var o in n)t=n[o].channel_name?n[o].channel_name:"默认",n[o].platform_id.length>0&&(t=n[o].platform_id[0].name+"-"+t),a.push({value:n[o]._id,text:t});i.channelData=a})).catch((function(e){})).finally((function(){}))}}};t.default=u}).call(this,n("a9ff")["default"])},aaa0:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("14d9"),n("d3b7"),n("e25e");var a=n("37dc"),o=i(n("35bd")),r=(0,a.initVueI18n)(o.default),u=r.t,l={name:"UniPagination",emits:["update:modelValue","input","change","pageSizeChange"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},prevText:{type:String},nextText:{type:String},piecePerPageText:{type:String},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1},showPageSize:{type:[Boolean,String],default:!1},pagerCount:{type:Number,default:7},pageSizeRange:{type:Array,default:function(){return[20,50,100,500]}}},data:function(){return{pageSizeIndex:0,currentIndex:1,paperData:[],pickerShow:!1}},computed:{piecePerPage:function(){return this.piecePerPageText||u("uni-pagination.piecePerPage")},prevPageText:function(){return this.prevText||u("uni-pagination.prevText")},nextPageText:function(){return this.nextText||u("uni-pagination.nextText")},maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e},paper:function(){for(var e=this.currentIndex,t=this.pagerCount,n=this.total,i=this.pageSize,a=[],o=[],r=Math.ceil(n/i),u=0;u<r;u++)a.push(u+1);o.push(1);var l=a[a.length-(t+1)/2];return a.forEach((function(n,i){(t+1)/2>=e?n<t+1&&n>1&&o.push(n):e+2<=l?n>e-(t+1)/2&&n<e+(t+1)/2&&o.push(n):(n>e-(t+1)/2||r-t<n)&&n<a[a.length-1]&&o.push(n)})),r>t?((t+1)/2>=e?o[o.length-1]="...":e+2<=l?(o[1]="...",o[o.length-1]="..."):o[1]="...",o.push(a[a.length-1])):(t+1)/2>=e||e+2<=l||(o.shift(),o.push(a[a.length-1])),o}},watch:{current:{immediate:!0,handler:function(e,t){this.currentIndex=e<1?1:e}},value:{immediate:!0,handler:function(e){1===Number(this.current)&&(this.currentIndex=e<1?1:e)}},pageSizeIndex:function(e){this.$emit("pageSizeChange",this.pageSizeRange[e])}},methods:{pickerChange:function(e){this.pageSizeIndex=e.detail.value,this.pickerClick()},pickerClick:function(){var e=document.querySelector("body");if(e){this.pickerShow=!this.pickerShow,this.pickerShow?e.classList.add("uni-pagination-picker-show"):setTimeout((function(){return e.classList.remove("uni-pagination-picker-show")}),300)}},selectPage:function(e,t){if(parseInt(e))this.currentIndex=e,this.change("current");else{var n=Math.ceil(this.total/this.pageSize);if(t<=1)return void(this.currentIndex-5>1?this.currentIndex-=5:this.currentIndex=1);if(t>=6)return void(this.currentIndex+5>n?this.currentIndex=n:this.currentIndex+=5)}},clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)>=this.maxPage||(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("input",this.currentIndex),this.$emit("update:modelValue",this.currentIndex),this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=l},abb1:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@media screen and (max-width:500px){.hide-on-phone[data-v-3128c571]{display:none}}.uni-stat__select[data-v-3128c571]{display:flex;align-items:center;cursor:pointer;width:100%;flex:1;box-sizing:border-box}.uni-stat-box[data-v-3128c571]{width:100%;flex:1}.uni-stat__actived[data-v-3128c571]{width:100%;flex:1}.uni-label-text[data-v-3128c571]{font-size:14px;font-weight:700;color:#6a6a6a;margin:auto 0;margin-right:5px}.uni-select[data-v-3128c571]{font-size:14px;border:1px solid #e5e5e5;box-sizing:border-box;border-radius:4px;padding:0 5px;padding-left:10px;position:relative;display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:row;align-items:center;border-bottom:solid 1px #e5e5e5;width:100%;flex:1;height:35px}.uni-select--disabled[data-v-3128c571]{background-color:#f5f7fa;cursor:not-allowed}.uni-select__label[data-v-3128c571]{font-size:16px;height:35px;padding-right:10px;color:#909399}.uni-select__input-box[data-v-3128c571]{height:35px;position:relative;display:flex;flex:1;flex-direction:row;align-items:center}.uni-select__input[data-v-3128c571]{flex:1;font-size:14px;height:22px;line-height:22px}.uni-select__input-plac[data-v-3128c571]{font-size:14px;color:#909399}.uni-select__selector[data-v-3128c571]{box-sizing:border-box;position:absolute;top:calc(100% + 12px);left:0;width:100%;background-color:#fff;border:1px solid #ebeef5;border-radius:6px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:3;padding:4px 0}.uni-select__selector-scroll[data-v-3128c571]{max-height:200px;box-sizing:border-box}.uni-select__selector-empty[data-v-3128c571],\r\n.uni-select__selector-item[data-v-3128c571]{display:flex;cursor:pointer;line-height:35px;font-size:14px;text-align:center;\r\n  /* border-bottom: solid 1px $uni-border-3; */padding:0 10px}.uni-select__selector-item[data-v-3128c571]:hover{background-color:#f9f9f9}.uni-select__selector-empty[data-v-3128c571]:last-child,\r\n.uni-select__selector-item[data-v-3128c571]:last-child{border-bottom:none}.uni-select__selector__disabled[data-v-3128c571]{opacity:.4;cursor:default}\r\n/* picker 弹出层通用的指示小三角 */.uni-popper__arrow[data-v-3128c571],\r\n.uni-popper__arrow[data-v-3128c571]::after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px}.uni-popper__arrow[data-v-3128c571]{filter:drop-shadow(0 2px 12px rgba(0,0,0,.03));top:-6px;left:10%;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5}.uni-popper__arrow[data-v-3128c571]::after{content:" ";top:1px;margin-left:-6px;border-top-width:0;border-bottom-color:#fff}.uni-select__input-text[data-v-3128c571]{width:100%;color:#3a3a3a;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;overflow:hidden}.uni-select__input-placeholder[data-v-3128c571]{color:#6a6a6a;font-size:12px}.uni-select--mask[data-v-3128c571]{position:fixed;top:0;bottom:0;right:0;left:0}',""]),e.exports=t},b17d:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("b351").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-stat__select"},[e.label?n("span",{staticClass:"uni-label-text hide-on-phone"},[e._v(e._s(e.label+"："))]):e._e(),n("v-uni-view",{staticClass:"uni-stat-box",class:{"uni-stat__actived":e.current}},[n("v-uni-view",{staticClass:"uni-select",class:{"uni-select--disabled":e.disabled}},[n("v-uni-view",{staticClass:"uni-select__input-box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}},[e.current?n("v-uni-view",{staticClass:"uni-select__input-text"},[e._v(e._s(e.current))]):n("v-uni-view",{staticClass:"uni-select__input-text uni-select__input-placeholder"},[e._v(e._s(e.typePlaceholder))]),e.current&&e.clear?n("uni-icons",{attrs:{type:"clear",color:"#c0c4cc",size:"24"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clearVal.apply(void 0,arguments)}}}):n("uni-icons",{attrs:{type:e.showSelector?"top":"bottom",size:"14",color:"#999"}})],1),e.showSelector?n("v-uni-view",{staticClass:"uni-select--mask",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleSelector.apply(void 0,arguments)}}}):e._e(),e.showSelector?n("v-uni-view",{staticClass:"uni-select__selector"},[n("v-uni-view",{staticClass:"uni-popper__arrow"}),n("v-uni-scroll-view",{staticClass:"uni-select__selector-scroll",attrs:{"scroll-y":"true"}},[0===e.mixinDatacomResData.length?n("v-uni-view",{staticClass:"uni-select__selector-empty"},[n("v-uni-text",[e._v(e._s(e.emptyTips))])],1):e._l(e.mixinDatacomResData,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-select__selector-item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.change(t)}}},[n("v-uni-text",{class:{"uni-select__selector__disabled":t.disable}},[e._v(e._s(e.formatItemName(t)))])],1)}))],2)],1):e._e()],1)],1)],1)},o=[]},b2e7:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},b58d:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"précédente","uni-pagination.nextText":"suivante","uni-pagination.piecePerPage":"Articles/Pages"}')},b84b:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},c4f6:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIcons:n("b351").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[!0===e.showPageSize||"true"===e.showPageSize?n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeRange},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)},cancel:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}},nativeOn:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerClick.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeRange[e.pageSizeIndex])+" "+e._s(e.piecePerPage))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1):e._e(),n("v-uni-view",{staticClass:"uni-pagination__total is-phone-hide"},[e._v("共 "+e._s(e.total)+" 条")]),n("v-uni-view",{staticClass:"uni-pagination__btn",class:1===e.currentIndex?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"left"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.prevPageText))])]],2),n("v-uni-view",{staticClass:"uni-pagination__num uni-pagination__num-flex-none"},[n("v-uni-view",{staticClass:"uni-pagination__num-current"},[n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide current-index-text"},[e._v(e._s(e.currentIndex))]),n("v-uni-text",{staticClass:"uni-pagination__num-current-text is-pc-hide"},[e._v("/"+e._s(e.maxPage||0))]),e._l(e.paper,(function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-pagination__num-tag tag--active is-phone-hide",class:{"page--active":t===e.currentIndex},on:{click:function(n){if(!n.type.indexOf("key")&&e._k(n.keyCode,"top",void 0,n.key,void 0))return null;arguments[0]=n=e.$handleEvent(n),e.selectPage(t,i)}}},[n("v-uni-text",[e._v(e._s(t))])],1)}))],2)],1),n("v-uni-view",{staticClass:"uni-pagination__btn",class:e.currentIndex>=e.maxPage?"uni-pagination--disabled":"uni-pagination--enabled",attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[!0===e.showIcon||"true"===e.showIcon?[n("uni-icons",{attrs:{color:"#666",size:"16",type:"right"}})]:[n("v-uni-text",{staticClass:"uni-pagination__child-btn"},[e._v(e._s(e.nextPageText))])]],2)],1)},o=[]},cd6c:function(e,t,n){"use strict";n.r(t);var i=n("6707"),a=n("91bc");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("cfc3");var r=n("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"15e4b0ea",null,!1,i["a"],void 0);t["default"]=u.exports},cfc3:function(e,t,n){"use strict";var i=n("5d3e"),a=n.n(i);a.a},e03c:function(e,t,n){"use strict";(function(e){n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("7db0"),n("d3b7"),n("159b"),n("ac1f"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("c975"),n("99af");var i={name:"uni-stat-select",mixins:[e.mixinDatacom||{}],props:{localdata:{type:Array,default:function(){return[]}},value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},label:{type:String,default:""},placeholder:{type:String,default:"请选择"},emptyTips:{type:String,default:"无选项"},clear:{type:Boolean,default:!0},defItem:{type:Number,default:0},disabled:{type:Boolean,default:!1},format:{type:String,default:""}},data:function(){return{showSelector:!1,current:"",mixinDatacomResData:[],apps:[],channels:[],cacheKey:"uni-data-select-lastSelectedValue"}},created:function(){var e=this;this.debounceGet=this.debounce((function(){e.query()}),300),this.collection&&!this.localdata.length&&this.debounceGet()},computed:{typePlaceholder:function(){var e=this.placeholder,t={"opendb-stat-app-versions":"版本","opendb-app-channels":"渠道","opendb-app-list":"应用"}[this.collection];return t?e+t:e},valueCom:function(){return this.value}},watch:{localdata:{immediate:!0,handler:function(e,t){Array.isArray(e)&&t!==e&&(this.mixinDatacomResData=e)}},valueCom:function(e,t){this.initDefVal()},mixinDatacomResData:{immediate:!0,handler:function(e){e.length&&this.initDefVal()}}},methods:{debounce:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=null;return function(){for(var i=this,a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];n&&clearTimeout(n),n=setTimeout((function(){e.apply(i,o)}),t)}},query:function(){this.mixinDatacomEasyGet()},onMixinDatacomPropsChange:function(){this.collection&&this.debounceGet()},initDefVal:function(){var e="";if(!this.valueCom&&0!==this.valueCom||this.isDisabled(this.valueCom)){var t;if(this.collection&&(t=this.getCache()),t||0===t)e=t;else{var n="";this.defItem>0&&this.defItem<=this.mixinDatacomResData.length&&(n=this.mixinDatacomResData[this.defItem-1].value),e=n}(e||0===e)&&this.emit(e)}else e=this.valueCom;var i=this.mixinDatacomResData.find((function(t){return t.value===e}));this.current=i?this.formatItemName(i):""},isDisabled:function(e){var t=!1;return this.mixinDatacomResData.forEach((function(n){n.value===e&&(t=n.disable)})),t},clearVal:function(){this.emit(""),this.collection&&this.removeCache()},change:function(e){e.disable||(this.showSelector=!1,this.current=this.formatItemName(e),this.emit(e.value))},emit:function(e){this.$emit("change",e),this.$emit("input",e),this.$emit("update:modelValue",e),this.collection&&this.setCache(e)},toggleSelector:function(){this.disabled||(this.showSelector=!this.showSelector)},formatItemName:function(e){var t=e.text,n=e.value,i=e.channel_code;if(i=i?"(".concat(i,")"):"",this.format){var a="";for(var o in a=this.format,e)a=a.replace(new RegExp("{".concat(o,"}"),"g"),e[o]);return a}return this.collection.indexOf("app-list")>0?"".concat(t,"(").concat(n,")"):t||"未命名".concat(i)},getLoadData:function(){return this.mixinDatacomResData},getCurrentCacheKey:function(){return this.collection},getCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),t=uni.getStorageSync(this.cacheKey)||{};return t[e]},setCache:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getCurrentCacheKey(),n=uni.getStorageSync(this.cacheKey)||{};n[t]=e,uni.setStorageSync(this.cacheKey,n)},removeCache:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getCurrentCacheKey(),t=uni.getStorageSync(this.cacheKey)||{};delete t[e],uni.setStorageSync(this.cacheKey,t)}}};t.default=i}).call(this,n("a9ff")["default"])},fb6e:function(e){e.exports=JSON.parse('{"uni-pagination.prevText":"上一頁","uni-pagination.nextText":"下一頁","uni-pagination.piecePerPage":"條/頁"}')},fd4f:function(e,t,n){"use strict";n.r(t);var i=n("3c8b"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},ffce:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("0804")),o=i(n("b84b")),r=i(n("b2e7")),u={en:a.default,"zh-Hans":o.default,"zh-Hant":r.default};t.default=u}}]);