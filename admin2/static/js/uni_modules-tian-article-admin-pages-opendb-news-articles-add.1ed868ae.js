(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-articles-add"],{1141:function(t,a,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e("5530"));e("caad"),e("2532"),e("d3b7");var i=n(e("0254")),s=n(e("4613")),r=t.database();r.command;function u(t){var a={};for(var e in i.default)t.includes(e)&&(a[e]=i.default[e]);return a}var c={components:{Tinymce:s.default},data:function(){return{formOptions:{status:[{value:1,text:"是"},{value:0,text:"否"}],checks:[{value:1,text:"是"},{value:0,text:"否"}]},formData:{user_id:"",category_id:"",title:"",content:"",excerpt:"",source_from:"",article_status:1,view_count:0,like_count:0,is_sticky:0,is_essence:0,comment_status:0,comment_count:0,last_comment_user_id:"",avatar:"",publish_date:null,publish_ip:"",last_modify_date:null,last_modify_ip:"",mode:1},rules:(0,o.default)({},u(["user_id","title","content","excerpt","article_status","comment_status","last_comment_user_id","avatar","publish_date","last_modify_date","last_modify_ip","mode","view_count","like_count","is_sticky","is_essence","comment_count","publish_ip","category_id"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(a){t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;r.collection("opendb-news-articles").add(t).then((function(t){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=c}).call(this,e("a9ff")["default"])},"2e26":function(t,a,e){"use strict";e.d(a,"b",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var n={uniForms:e("cf8e").default,uniFormsItem:e("0a0d").default,uniEasyinput:e("5e6f").default,cloudImage:e("8692").default,uniDataCheckbox:e("ca21").default,cloudUserSelect:e("6b56").default},o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"title",label:"标题"}},[e("uni-easyinput",{attrs:{placeholder:"标题"},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("uni-forms-item",{attrs:{name:"avatar",label:"封面大图"}},[e("cloud-image",{attrs:{placeholder:"缩略图地址"},model:{value:t.formData.avatar,callback:function(a){t.$set(t.formData,"avatar",a)},expression:"formData.avatar"}})],1),e("uni-forms-item",{attrs:{name:"category_id",label:"分类"}},[e("uni-data-checkbox",{attrs:{collection:"opendb-news-categories",field:"name as text, _id as value"},model:{value:t.formData.category_id,callback:function(a){t.$set(t.formData,"category_id",a)},expression:"formData.category_id"}})],1),e("uni-forms-item",{attrs:{name:"excerpt",label:"摘要"}},[e("uni-easyinput",{attrs:{placeholder:"文章摘录"},model:{value:t.formData.excerpt,callback:function(a){t.$set(t.formData,"excerpt",a)},expression:"formData.excerpt"}})],1),e("uni-forms-item",{attrs:{name:"content",label:"文章内容"}},[e("Tinymce",{ref:"editor",attrs:{width:860,height:400},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1),e("uni-forms-item",{attrs:{name:"user_id",label:"上传用户"}},[e("cloud-user-select",{attrs:{condition:"nickname!=null"},model:{value:t.formData.user_id,callback:function(a){t.$set(t.formData,"user_id",a)},expression:"formData.user_id"}})],1),e("uni-forms-item",{attrs:{name:"source_from",label:"来源"}},[e("uni-easyinput",{attrs:{placeholder:"请输入完整来源信息"},model:{value:t.formData.source_from,callback:function(a){t.$set(t.formData,"source_from",a)},expression:"formData.source_from"}})],1),e("uni-forms-item",{attrs:{name:"view_count",label:"阅读数量"}},[e("uni-easyinput",{attrs:{placeholder:"阅读数量",type:"number"},model:{value:t.formData.view_count,callback:function(a){t.$set(t.formData,"view_count",a)},expression:"formData.view_count"}})],1),e("uni-forms-item",{attrs:{name:"like_count",label:"点赞数"}},[e("uni-easyinput",{attrs:{placeholder:"喜欢数、点赞数",type:"number"},model:{value:t.formData.like_count,callback:function(a){t.$set(t.formData,"like_count",a)},expression:"formData.like_count"}})],1),e("uni-forms-item",{attrs:{name:"comment_count",label:"评论数"}},[e("uni-easyinput",{attrs:{placeholder:"评论数",type:"number"},model:{value:t.formData.comment_count,callback:function(a){t.$set(t.formData,"comment_count",a)},expression:"formData.comment_count"}})],1),e("uni-forms-item",{attrs:{name:"article_status",label:"发布"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.status},model:{value:t.formData.article_status,callback:function(a){t.$set(t.formData,"article_status",a)},expression:"formData.article_status"}})],1),e("uni-forms-item",{attrs:{name:"is_sticky",label:"是否置顶"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.checks},model:{value:t.formData.is_sticky,callback:function(a){t.$set(t.formData,"is_sticky",a)},expression:"formData.is_sticky"}})],1),e("uni-forms-item",{attrs:{name:"is_essence",label:"是否加精"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.checks},model:{value:t.formData.is_essence,callback:function(a){t.$set(t.formData,"is_essence",a)},expression:"formData.is_essence"}})],1),e("uni-forms-item",{attrs:{name:"comment_status",label:"开放评论"}},[e("uni-data-checkbox",{attrs:{localdata:t.formOptions.status},model:{value:t.formData.comment_status,callback:function(a){t.$set(t.formData,"comment_status",a)},expression:"formData.comment_status"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},i=[]},4283:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-app--showleftwindow .uni-container .uni-forms[data-v-52688e40]{width:100%;max-width:100%}.uni-easyinput[data-v-52688e40]{max-width:%?920?%}',""]),t.exports=a},"883d":function(t,a,e){"use strict";var n=e("b6c2"),o=e.n(n);o.a},"88e7":function(t,a,e){"use strict";e.r(a);var n=e("2e26"),o=e("f068");for(var i in o)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return o[t]}))}(i);e("883d");var s=e("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"52688e40",null,!1,n["a"],void 0);a["default"]=r.exports},b6c2:function(t,a,e){var n=e("4283");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=e("4f06").default;o("19fbb464",n,!0,{sourceMap:!1,shadowMode:!1})},f068:function(t,a,e){"use strict";e.r(a);var n=e("1141"),o=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=o.a}}]);