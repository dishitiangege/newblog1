(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-add","pages-demo-icons-icons"],{"139c":function(e,t,n){"use strict";n.r(t);var a=n("f539"),i=n("1d04");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("53d2");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"244a2d54",null,!1,a["a"],void 0);t["default"]=r.exports},"197f":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".icon-modal-box[data-v-12328e3c]{padding-top:var(--top-window-height)}.icon-modal[data-v-12328e3c]{width:350px;background-color:#fff;height:500px;overflow-y:scroll}@media screen and (min-width:768px){.icon-modal-pc[data-v-12328e3c]{width:600px}}[data-v-12328e3c] .uni-forms-item__label{width:90px!important}",""]),e.exports=t},"1cb5":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=["pulldown","refreshempty","back","forward","more","more-filled","scan","qq","weibo","weixin","pengyouquan","loop","refresh","refresh-filled","arrowthindown","arrowthinleft","arrowthinright","arrowthinup","undo-filled","undo","redo","redo-filled","bars","chatboxes","camera","chatboxes-filled","camera-filled","cart-filled","cart","checkbox-filled","checkbox","arrowleft","arrowdown","arrowright","smallcircle-filled","arrowup","circle","eye-filled","eye-slash-filled","eye-slash","eye","flag-filled","flag","gear-filled","reload","gear","hand-thumbsdown-filled","hand-thumbsdown","hand-thumbsup-filled","heart-filled","hand-thumbsup","heart","home","info","home-filled","info-filled","circle-filled","chat-filled","chat","mail-open-filled","email-filled","mail-open","email","checkmarkempty","list","locked-filled","locked","map-filled","map-pin","map-pin-ellipse","map","minus-filled","mic-filled","minus","micoff","mic","clear","smallcircle","close","closeempty","paperclip","paperplane","paperplane-filled","person-filled","contact-filled","person","contact","images-filled","phone","images","image","image-filled","location-filled","location","plus-filled","plus","plusempty","help-filled","help","navigate-filled","navigate","mic-slash-filled","search","settings","sound","sound-filled","spinner-cycle","download-filled","personadd-filled","videocam-filled","personadd","upload","upload-filled","starhalf","star-filled","star","trash","phone-filled","compose","videocam","trash-filled","download","chatbubble-filled","chatbubble","cloud-download","cloud-upload-filled","cloud-upload","cloud-download-filled","headphones","shop"]},"1d04":function(e,t,n){"use strict";n.r(t);var a=n("93fe"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},"2d8a":function(e,t,n){var a=n("197f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("1d7cb05d",a,!0,{sourceMap:!1,shadowMode:!1})},"3c5b":function(e,t,n){"use strict";n.r(t);var a=n("4c55"),i=n("fd4f");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("980e");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"03b6d5de",null,!1,a["a"],void 0);t["default"]=r.exports},"3c8b":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("2ca0");var a={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA:function(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created:function(){this._isH5=null},methods:{isMail:function(){return this.href.startsWith("mailto:")},isTel:function(){return this.href.startsWith("tel:")},openURL:function(){window.open(this.href)},makePhoneCall:function(e){uni.makePhoneCall({phoneNumber:e})}}};t.default=a},4743:function(e,t,n){"use strict";var a=n("2d8a"),i=n.n(a);i.a},"4c55":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isShowA?n("a",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},attrs:{href:e.href,download:e.download}},[e._t("default",[e._v(e._s(e.text))])],2):n("v-uni-text",{staticClass:"uni-link",class:{"uni-link--withline":!0===e.showUnderLine||"true"===e.showUnderLine},style:{color:e.color,fontSize:e.fontSize+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openURL.apply(void 0,arguments)}}},[e._t("default",[e._v(e._s(e.text))])],2)},i=[]},"53d2":function(e,t,n){"use strict";var a=n("7ea1"),i=n.n(a);i.a},"595e":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"\n.uni-link[data-v-03b6d5de]{cursor:pointer}\n.uni-link--withline[data-v-03b6d5de]{text-decoration:underline}",""]),e.exports=t},"75fe":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uniForms:n("cf8e").default,uniFormsItem:n("0a0d").default,uniEasyinput:n("5e6f").default,uniLink:n("3c5b").default,uniDataCheckbox:n("ca21").default,uniPopup:n("d50b").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{labelWidth:"80",rules:e.rules,validateTrigger:"bind"},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}},[n("uni-forms-item",{attrs:{name:"menu_id",label:"标识",required:!0}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},model:{value:e.formData.menu_id,callback:function(t){e.$set(e.formData,"menu_id",t)},expression:"formData.menu_id"}})],1),n("uni-forms-item",{attrs:{name:"name",label:"显示名称",required:!0}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("uni-forms-item",{staticStyle:{"margin-bottom":"10px"},attrs:{name:"icon",label:"图标class"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单图标css样式类名"},scopedSlots:e._u([{key:"right",fn:function(){return[n("span",{staticStyle:{color:"#007aff",cursor:"pointer","padding-right":"10px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showIconPopup.apply(void 0,arguments)}}},[e._v("内置图标")])]},proxy:!0}]),model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}}),n("uni-link",{staticClass:"uni-form-item-tips",attrs:{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？"}})],1),n("uni-forms-item",{attrs:{name:"url",label:"页面URL"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"URL必须是/开头，若URL为空代表是目录而不是叶子节点"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),n("uni-forms-item",{attrs:{name:"sort",label:"序号"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort",t)},expression:"formData.sort"}})],1),n("uni-forms-item",{attrs:{name:"parent_id",label:"父菜单标识"}},[n("uni-easyinput",{attrs:{disabled:!0,clearable:!1,placeholder:"新增菜单时自动填充, 一级菜单不需要填写"},model:{value:e.formData.parent_id,callback:function(t){e.$set(e.formData,"parent_id",t)},expression:"formData.parent_id"}})],1),n("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"permission",label:"权限列表"}},[n("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions","page-size":500,field:"permission_name as text, permission_id as value"},model:{value:e.formData.permission,callback:function(t){e.$set(e.formData,"permission",t)},expression:"formData.permission"}}),n("v-uni-view",{staticClass:"uni-form-item-tips"},[e._v("当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单")])],1),n("uni-forms-item",{attrs:{name:"enable",label:"是否启用"}},[n("v-uni-switch",{attrs:{checked:e.formData.enable},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.binddata("enable",t.detail.value)}}})],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submitForm.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.submit")))]),n("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[n("v-uni-button",{staticClass:"uni-button",attrs:{tyle:"width: 100px;"}},[e._v(e._s(e.$t("common.button.back")))])],1)],1)],1),n("uni-popup",{ref:"iconPopup",staticClass:"icon-modal-box",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"icon-modal icon-modal-pc"},[n("Icons",{attrs:{tag:!1,"fix-window":!1}})],1)],1)],1)},o=[]},"7afd":function(e,t,n){"use strict";(function(e){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530"));n("caad"),n("2532"),n("d3b7");var o=a(n("9913")),l=a(n("139c")),r=e.database();r.command;function s(e){var t={};for(var n in o.default)e.includes(n)&&(t[n]=o.default[n]);return t}var u={components:{Icons:l.default},data:function(){return{formData:{menu_id:"",name:"",icon:"",url:"",sort:null,parent_id:"",permission:[],enable:!0},rules:(0,i.default)({},s(["menu_id","name","icon","url","sort","parent_id","permission","enable"]))}},onLoad:function(e){e.parent_id&&(this.formData.parent_id=e.parent_id)},methods:{submitForm:function(){this.$refs.form.submit()},submit:function(e){var t=this,n=e.detail,a=n.value,i=n.errors;i||(uni.showLoading({title:"提交中...",mask:!0}),r.collection("opendb-admin-menus").add(a).then((function(e){uni.showToast({title:"新增成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},showIconPopup:function(){this.$refs.iconPopup.open()}}};t.default=u}).call(this,n("a9ff")["default"])},"7e1f":function(e,t,n){var a=n("595e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("a346bd00",a,!0,{sourceMap:!1,shadowMode:!1})},"7ea1":function(e,t,n){var a=n("e4f8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("12865721",a,!0,{sourceMap:!1,shadowMode:!1})},"93fe":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("1cb5")),o={data:function(){return{icons:i.default}},props:{tag:{type:Boolean,default:!0},fixWindow:{type:Boolean,default:!0}},methods:{setClipboardData:function(e,t){var n="uni-icons-"+t;this.tag&&"tag"===e&&(n='<view class="'+n+'"></view>'),uni.setClipboardData({data:n,success:function(e){uni.showToast({icon:"none",title:"复制 "+n+" 成功！"})},fail:function(e){uni.showModal({content:"复制 "+n+" 失败！",showCancel:!1})}})}}};t.default=o},"980e":function(e,t,n){"use strict";var a=n("7e1f"),i=n.n(a);i.a},9913:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c975");t.default={menu_id:{rules:[{required:!0},{format:"string"}]},name:{rules:[{required:!0},{format:"string"}]},icon:{rules:[{format:"string"}]},url:{rules:[{format:"string"},{validateFunction:function(e,t,n,a){return""!==t&&-1===t.indexOf("http")&&0!==t.indexOf("/")&&a("URL必须以/开头，如/pages/index/index"),!0}}]},sort:{rules:[{format:"int"}]},parent_id:{rules:[{format:"string"}]},permission:{rules:[{format:"array"}]},enable:{rules:[{format:"bool"}]}}},a059:function(e,t,n){"use strict";n.r(t);var a=n("7afd"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},e4f8:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.icons[data-v-244a2d54]{display:flex;flex-direction:row;flex-wrap:wrap}.icon-item[data-v-244a2d54]{display:flex;width:16.6%;height:120px;font-size:30px;text-align:center;justify-content:center;align-items:center;flex-direction:column}.icon-item[data-v-244a2d54]:hover,\r\n.icon-item:hover .icon-text[data-v-244a2d54]{color:#2979ff}.icon-text[data-v-244a2d54]{color:#99a9bf;font-size:12px;text-align:center;height:1em;line-height:1em;margin-top:15px}@media only screen and (max-width:500px){.icon-item[data-v-244a2d54]{width:33.3%}}',""]),e.exports=t},f539:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"},[e._v(e._s(e.$t("demo.icons.title"))+"（uni-icons）")]),n("v-uni-view",{staticClass:"uni-sub-title"},[e._v(e._s(e.$t("demo.icons.describle")))])],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("v-uni-view",{staticClass:"icons"},e._l(e.icons,(function(t,a){return n("v-uni-view",{key:a,staticClass:"icon-item pointer"},[n("v-uni-view",{class:"uni-icons-"+t,on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.setClipboardData("tag",t)}}}),n("v-uni-text",{staticClass:"icon-text",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.setClipboardData("class",t)}}},[e._v("uni-icons-"+e._s(t))])],1)})),1)],1)],1)},i=[]},fbb6:function(e,t,n){"use strict";n.r(t);var a=n("75fe"),i=n("a059");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("4743");var l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"12328e3c",null,!1,a["a"],void 0);t["default"]=r.exports},fd4f:function(e,t,n){"use strict";n.r(t);var a=n("3c8b"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a}}]);