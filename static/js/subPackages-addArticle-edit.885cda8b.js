(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subPackages-addArticle-edit"],{"0ff6":function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniForms:e("505a").default,uniFormsItem:e("584f").default,uniEasyinput:e("2127").default,cloudImage:e("f724").default,uniDataCheckbox:e("3a39").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{validateTrigger:"bind"},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"title",label:"标题"}},[e("uni-easyinput",{attrs:{placeholder:"标题"},model:{value:t.formData.title,callback:function(a){t.$set(t.formData,"title",a)},expression:"formData.title"}})],1),e("uni-forms-item",{attrs:{name:"avatar",label:"封面大图"}},[e("cloud-image",{attrs:{placeholder:"缩略图地址"},model:{value:t.formData.avatar,callback:function(a){t.$set(t.formData,"avatar",a)},expression:"formData.avatar"}})],1),e("uni-forms-item",{attrs:{name:"category_id",label:"分类"}},[e("uni-data-checkbox",{attrs:{collection:"blog-article-category",field:"name as text, _id as value"},model:{value:t.formData.category_id,callback:function(a){t.$set(t.formData,"category_id",a)},expression:"formData.category_id"}})],1),e("uni-forms-item",{attrs:{name:"excerpt",label:"摘要"}},[e("uni-easyinput",{attrs:{placeholder:"文章摘录"},model:{value:t.formData.excerpt,callback:function(a){t.$set(t.formData,"excerpt",a)},expression:"formData.excerpt"}})],1),t.formData.content?e("uni-forms-item",{attrs:{name:"content",label:"文章内容"}},[e("Tinymce",{ref:"editor",attrs:{width:860,height:400},model:{value:t.formData.content,callback:function(a){t.$set(t.formData,"content",a)},expression:"formData.content"}})],1):t._e(),e("uni-forms-item",{attrs:{name:"source_from",label:"来源"}},[e("uni-easyinput",{attrs:{placeholder:"请输入完整来源信息"},model:{value:t.formData.source_from,callback:function(a){t.$set(t.formData,"source_from",a)},expression:"formData.source_from"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},o=[]},"551f":function(t,a,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530"));e("caad"),e("2532"),e("d3b7");var o=n(e("9962")),s=n(e("92df")),u=t.database();u.command;function r(t){var a={};for(var e in o.default)t.includes(e)&&(a[e]=o.default[e]);return a}var c={components:{Tinymce:s.default},data:function(){return{formData:{user_id:"",category_id:"",title:"",content:"",excerpt:"",source_from:"",article_status:null,view_count:null,like_count:null,is_sticky:null,is_essence:null,comment_status:null,comment_count:null,last_comment_user_id:"",avatar:"",publish_date:null,publish_ip:"",last_modify_date:null,last_modify_ip:"",mode:null},formOptions:{status:[{value:1,text:"是"},{value:0,text:"否"}],checks:[{value:1,text:"是"},{value:0,text:"否"}]},rules:(0,i.default)({},r(["user_id","title","content","excerpt","article_status","comment_status","last_comment_user_id","avatar","publish_date","last_modify_date","last_modify_ip","mode","category_id","comment_count","is_essence","is_sticky","view_count","like_count","publish_ip"]))}},onLoad:function(t){var a=t.id;this.formDataId=a,this.getDetail(a)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),console.log("this.formdata",this.formData),this.$refs.form.validate().then((function(a){a.last_modify_date=Date.now(),a.last_modify_ip=u.env.clientIP,t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;u.collection("opendb-news-articles").doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),a.getOpenerEventChannel().emit("refresh",{refresh:!0}),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),u.collection("opendb-news-articles").doc(t).field("user_id,title,content,excerpt,article_status,comment_status,last_comment_user_id,avatar,publish_date,last_modify_date,mode,category_id,comment_count,is_essence,is_sticky,view_count,like_count").get().then((function(t){var e=t.result.data[0];e&&(a.formData=e)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=c}).call(this,e("a9ff")["default"])},"60b4":function(t,a,e){var n=e("c716");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("7c3ea3a4",n,!0,{sourceMap:!1,shadowMode:!1})},"9a34":function(t,a,e){"use strict";e.r(a);var n=e("551f"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},c716:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-app--showleftwindow .uni-container .uni-forms[data-v-6101283b]{width:100%;max-width:100%}.uni-easyinput[data-v-6101283b]{max-width:%?920?%}',""]),t.exports=a},cf43:function(t,a,e){"use strict";var n=e("60b4"),i=e.n(n);i.a},e280:function(t,a,e){"use strict";e.r(a);var n=e("0ff6"),i=e("9a34");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("cf43");var s=e("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6101283b",null,!1,n["a"],void 0);a["default"]=u.exports}}]);