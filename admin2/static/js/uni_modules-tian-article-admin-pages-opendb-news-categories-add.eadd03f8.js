(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-tian-article-admin-pages-opendb-news-categories-add"],{9046:function(t,a,e){"use strict";e.r(a);var n=e("9d1f"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},"997a":function(t,a,e){"use strict";e.r(a);var n=e("dbe5"),i=e("9046");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);var r=e("f0c5"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);a["default"]=u.exports},"9d1f":function(t,a,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530"));e("caad"),e("2532"),e("d3b7");var o=n(e("4ae2")),r=t.database();r.command;function u(t){var a={};for(var e in o.default)t.includes(e)&&(a[e]=o.default[e]);return a}var s={data:function(){return{formOptions:{},formData:{name:"",description:"",icon:"",sort:null,article_count:null,create_date:null},rules:(0,i.default)({},u(["name","description","icon","sort","article_count","create_date"]))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.submit().then((function(a){t.submitForm(a)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var a=this;r.collection("blog-article-category").add(t).then((function(t){uni.showToast({title:"新增成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};a.default=s}).call(this,e("a9ff")["default"])},dbe5:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var n={uniForms:e("cf8e").default,uniFormsItem:e("0a0d").default,uniEasyinput:e("5e6f").default,cloudImage:e("8692").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"name",label:"名称"}},[e("uni-easyinput",{attrs:{placeholder:"类别名称"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("uni-forms-item",{attrs:{name:"description",label:"描述"}},[e("uni-easyinput",{attrs:{placeholder:"类别描述"},model:{value:t.formData.description,callback:function(a){t.$set(t.formData,"description",a)},expression:"formData.description"}})],1),e("uni-forms-item",{attrs:{name:"icon",label:"图标地址"}},[e("cloud-image",{attrs:{placeholder:"类别图标地址"},model:{value:t.formData.icon,callback:function(a){t.$set(t.formData,"icon",a)},expression:"formData.icon"}})],1),e("uni-forms-item",{attrs:{name:"sort",label:"排序"}},[e("uni-easyinput",{attrs:{placeholder:"类别显示顺序",type:"number"},model:{value:t.formData.sort,callback:function(a){t.$set(t.formData,"sort",a)},expression:"formData.sort"}})],1),e("uni-forms-item",{attrs:{name:"article_count",label:"文章数"}},[e("uni-easyinput",{attrs:{placeholder:"该类别下文章数量",type:"number"},model:{value:t.formData.article_count,callback:function(a){t.$set(t.formData,"article_count",a)},expression:"formData.article_count"}})],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},o=[]}}]);