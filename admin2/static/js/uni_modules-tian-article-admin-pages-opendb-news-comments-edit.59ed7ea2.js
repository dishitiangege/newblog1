(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-comments-edit"],{2326:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniForms:n("cf8e").default,uniFormsItem:n("0a0d").default,uniEasyinput:n("5e6f").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{validateTrigger:"bind"},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}},[n("uni-forms-item",{attrs:{name:"article_id",label:""}},[n("uni-easyinput",{attrs:{placeholder:"文章ID，opendb-news-posts 表中的`_id`字段"},model:{value:t.formData.article_id,callback:function(e){t.$set(t.formData,"article_id",e)},expression:"formData.article_id"}})],1),n("uni-forms-item",{attrs:{name:"comment_content",label:"评论内容"}},[n("uni-easyinput",{attrs:{placeholder:"评论内容"},model:{value:t.formData.comment_content,callback:function(e){t.$set(t.formData,"comment_content",e)},expression:"formData.comment_content"}})],1),n("uni-forms-item",{attrs:{name:"like_count",label:""}},[n("uni-easyinput",{attrs:{placeholder:"评论喜欢数、点赞数",type:"number"},model:{value:t.formData.like_count,callback:function(e){t.$set(t.formData,"like_count",e)},expression:"formData.like_count"}})],1),n("uni-forms-item",{attrs:{name:"comment_type",label:""}},[n("uni-easyinput",{attrs:{placeholder:"回复类型： 0 针对文章的回复  1 针对评论的回复",type:"number"},model:{value:t.formData.comment_type,callback:function(e){t.$set(t.formData,"comment_type",e)},expression:"formData.comment_type"}})],1),n("uni-forms-item",{attrs:{name:"reply_user_id",label:""}},[n("uni-easyinput",{attrs:{placeholder:"被回复的评论用户ID，comment_type为1时有效"},model:{value:t.formData.reply_user_id,callback:function(e){t.$set(t.formData,"reply_user_id",e)},expression:"formData.reply_user_id"}})],1),n("uni-forms-item",{attrs:{name:"reply_comment_id",label:""}},[n("uni-easyinput",{attrs:{placeholder:"被回复的评论ID，comment_type为1时有效"},model:{value:t.formData.reply_comment_id,callback:function(e){t.$set(t.formData,"reply_comment_id",e)},expression:"formData.reply_comment_id"}})],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),n("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},o=[]},"63bd":function(t,e,n){"use strict";n.r(e);var a=n("9e20"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"9e20":function(t,e,n){"use strict";(function(t){n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530"));n("caad"),n("2532"),n("d3b7");var o=a(n("526b")),r=t.database();r.command;function u(t){var e={};for(var n in o.default)t.includes(n)&&(e[n]=o.default[n]);return e}var c={data:function(){return{formData:{article_id:"",comment_content:"",like_count:null,comment_type:null,reply_user_id:"",reply_comment_id:""},formOptions:{},rules:(0,i.default)({},u(["article_id","comment_content","like_count","comment_type","reply_user_id","reply_comment_id"]))}},onLoad:function(t){var e=t.id;this.formDataId=e,this.getDetail(e)},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(e){t.submitForm(e)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var e=this;r.collection("opendb-news-comments").doc(this.formDataId).update(t).then((function(t){uni.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),r.collection("opendb-news-comments").doc(t).get().then((function(t){var n=t.result.data[0];n&&(e.formData=n)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=c}).call(this,n("a9ff")["default"])},dadc:function(t,e,n){"use strict";n.r(e);var a=n("2326"),i=n("63bd");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports}}]);