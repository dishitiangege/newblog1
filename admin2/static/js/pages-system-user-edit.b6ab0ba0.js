(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-user-edit"],{2068:function(t,a,e){"use strict";e.r(a);var n=e("a551"),i=e("3b77");for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(s);e("faa4");var o=e("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"97c86824",null,!1,n["a"],void 0);a["default"]=r.exports},"3b77":function(t,a,e){"use strict";e.r(a);var n=e("c265"),i=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(s);a["default"]=i.a},"463a":function(t,a,e){var n=e("5a2b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("6990dd7b",n,!0,{sourceMap:!1,shadowMode:!1})},"5a2b":function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".reset-password-btn[data-v-97c86824]{\n\t/* height: 100%; */line-height:36px;color:#007aff;text-decoration:underline;cursor:pointer}.cancel-reset-password-btn[data-v-97c86824]{color:#007aff;padding-right:10px;cursor:pointer}[data-v-97c86824] .uni-forms-item__label{width:90px!important}.uni-forms-item-flex-center-x[data-v-97c86824]{display:flex;align-items:center;flex-wrap:wrap}",""]),t.exports=a},a551:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return n}));var n={uniForms:e("cf8e").default,uniFormsItem:e("0a0d").default,uniEasyinput:e("5e6f").default,uniDataCheckbox:e("ca21").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules,validateTrigger:"bind"},on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[e("uni-forms-item",{attrs:{name:"username",label:"用户名",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户名"},model:{value:t.formData.username,callback:function(a){t.$set(t.formData,"username",a)},expression:"formData.username"}})],1),e("uni-forms-item",{attrs:{name:"nickname",label:"用户昵称",required:!0}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入用户昵称"},model:{value:t.formData.nickname,callback:function(a){t.$set(t.formData,"nickname",a)},expression:"formData.nickname"}})],1),t.showPassword?e("uni-forms-item",{key:"password",attrs:{name:"password",label:"重置密码"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入重置密码"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}},[e("v-uni-view",{staticClass:"cancel-reset-password-btn",attrs:{slot:"right"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.trigger.apply(void 0,arguments)}},slot:"right"},[t._v("取消")])],1)],1):e("uni-forms-item",{attrs:{label:"重置密码"}},[e("span",{staticClass:"reset-password-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.trigger.apply(void 0,arguments)}}},[t._v("点击重置密码")])]),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"role",label:"角色列表"}},[e("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.roles},model:{value:t.formData.role,callback:function(a){t.$set(t.formData,"role",a)},expression:"formData.role"}})],1),e("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"tags",label:"用户标签",labelWidth:"100"}},[e("uni-data-checkbox",{ref:"checkboxTags",attrs:{multiple:!0,collection:"uni-id-tag",field:"tagid as value, name as text"},model:{value:t.formData.tags,callback:function(a){t.$set(t.formData,"tags",a)},expression:"formData.tags"}}),e("span",{staticClass:"link-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoTagAdd.apply(void 0,arguments)}}},[t._v("新增")]),e("span",{staticClass:"link-btn",staticStyle:{"margin-left":"10px"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoTagList.apply(void 0,arguments)}}},[t._v("管理")])],1),e("uni-forms-item",{attrs:{name:"authorizedApp",label:"可登录应用"}},[e("v-uni-view",{staticClass:"uni-forms-item-flex-center-x"},[e("uni-data-checkbox",{attrs:{multiple:!0,localdata:t.appList},model:{value:t.formData.authorizedApp,callback:function(a){t.$set(t.formData,"authorizedApp",a)},expression:"formData.authorizedApp"}}),e("span",{staticClass:"link-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoAppList.apply(void 0,arguments)}}},[t._v("管理")])],1),t.formDataId===t.userId?e("v-uni-view",{staticClass:"uni-form-item-tips"},[t._v("当前有未添加的应用"+t._s(t.unknownAppidsCom)+"，建议点击右侧管理进行添加")]):t._e()],1),e("uni-forms-item",{attrs:{name:"mobile",label:"手机号"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入手机号"},model:{value:t.formData.mobile,callback:function(a){t.$set(t.formData,"mobile",a)},expression:"formData.mobile"}})],1),e("uni-forms-item",{attrs:{name:"email",label:"邮箱"}},[e("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入邮箱"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}})],1),e("uni-forms-item",{attrs:{name:"status",label:"用户状态"}},[Number(t.formData.status)<2?e("v-uni-switch",{attrs:{checked:t.formData.status,disabled:t.formDataId===t.userId},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("status",a.detail.value)}}}):e("v-uni-view",{staticClass:"uni-form-item-empty"},[t._v(t._s(t.parseUserStatus(t.formData.status)))]),t.formDataId===t.userId?e("v-uni-view",{staticClass:"uni-form-item-tips"},[t._v("请勿禁用当前登录的账号")]):t._e()],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),e("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[e("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1)],1)],1)},s=[]},c265:function(t,a,e){"use strict";(function(t){e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("5530"));e("caad"),e("2532"),e("a9e3"),e("d3b7"),e("d81d"),e("14d9"),e("c975"),e("3c65"),e("7db0");var s=e("eb9d"),o=t.database();o.command;function r(t){var a={};for(var e in s.validator)t.includes(e)&&(a[e]=s.validator[e]);return a}var l={data:function(){return{showPassword:!1,formData:{username:"",nickname:"",password:void 0,role:[],tags:[],authorizedApp:[],mobile:void 0,email:void 0,status:!1},rules:(0,i.default)((0,i.default)({},r(["username","password","role","mobile","email"])),{},{status:{rules:[{format:"bool"}]}}),roles:[],userId:"",appList:[],unknownAppids:[]}},onLoad:function(t){var a=t.id;this.formDataId=a;var e=uni.getStorageSync("uni-id-pages-userInfo")||{};this.userId=e._id,this.getDetail(a),this.loadroles()},methods:{gotoAppList:function(){uni.navigateTo({url:"../app/list"})},gotoTagList:function(){uni.navigateTo({url:"../tag/list"})},gotoTagAdd:function(){var t=this;uni.navigateTo({url:"../tag/add",events:{refreshCheckboxData:function(){t.$refs.checkboxTags.loadData()}}})},trigger:function(){this.showPassword=!this.showPassword},submitForm:function(t){this.$refs.form.submit()},submit:function(t){var a=this,e=t.detail,n=e.value,i=e.errors;i||(uni.showLoading({title:"修改中...",mask:!0}),"boolean"===typeof n.status&&(n.status=Number(!n.status)),n.uid=this.formDataId,this.$request("updateUser",n).then((function(){uni.showToast({title:"修改成功"});var t=a.getOpenerEventChannel();t.emit&&t.emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(t){uni.hideLoading()})))},resetPWd:function(t){this.$request("system/user/resetPwd",t).then().catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally()},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),o.collection("uni-id-users").doc(t).field("username,nickname,role,dcloud_appid as authorizedApp,tags,mobile,email,status").get().then((function(t){var e=t.result.data[0];e&&(void 0===e.status&&(e.status=!0),0===e.status&&(e.status=!0),1===e.status&&(e.status=!1),a.formData=Object.assign(a.formData,e),a.loadAppList(a.formData.authorizedApp))})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},loadroles:function(){var t=this;o.collection("uni-id-roles").limit(500).get().then((function(a){var e=[];t.roles=a.result.data.map((function(t){return e.push(t.role_id),{value:t.role_id,text:t.role_name}})),-1===e.indexOf("admin")&&t.roles.unshift({value:"admin",text:"超级管理员"})})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))},loadAppList:function(t){var a=this;o.collection("opendb-app-list").limit(500).get().then((function(e){var n=e.result.data.map((function(t,a){return{value:t.appid,text:t.name}}));n||(n=[]),t.map((function(t){var e=n.find((function(a){return a.value===t}));e||(a.unknownAppids.push(t),n.push({value:t,text:"未知应用".concat(t)}))})),a.appList=n})).catch((function(t){uni.showModal({title:"提示",content:t.message,showCancel:!1})}))},parseUserStatus:function(t){return 0===t?"启用":1===t?"禁用":2===t?"审核中":3===t?"审核拒绝":"启用"}},computed:{unknownAppidsCom:function(){var t=this,a="";return this.unknownAppids.map((function(e,n){a+=e,n!==t.unknownAppids.length-1&&(a+="、")})),a}}};a.default=l}).call(this,e("a9ff")["default"])},eb9d:function(t,a,e){"use strict";e("7a82");var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.enumConverter=void 0,a.filterToWhere=function(t,a){var e={};for(var n in t){var o=t[n],r=o.type,l=o.value;switch(r){case"search":"string"===typeof l&&l.length&&(e[n]=new RegExp(l));break;case"select":if(l.length){var u,c=[],d=(0,s.default)(l);try{for(d.s();!(u=d.n()).done;){var f=u.value;c.push(a.eq(f))}}catch(y){d.e(y)}finally{d.f()}e[n]=a.or(c)}break;case"range":if(l.length){var m=l[0],p=l[1];e[n]=a.and([a.gte(m),a.lte(p)])}break;case"date":if(l.length){var v=(0,i.default)(l,2),h=v[0],b=v[1],g=new Date(h),w=new Date(b);e[n]=a.and([a.gte(g),a.lte(w)])}break;case"timestamp":if(l.length){var x=(0,i.default)(l,2),k=x[0],D=x[1];e[n]=a.and([a.gte(k),a.lte(D)])}break}}return e},a.validator=void 0;var i=n(e("3835")),s=n(e("b85c"));e("ac1f"),e("00b4"),e("4d63"),e("c607"),e("2c3e"),e("25f0"),e("14d9");a.validator={username:{rules:[{required:!0,errorMessage:"请输入用户名"},{minLength:3,maxLength:32,errorMessage:"用户名长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,a,e,n){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&n("用户名不能是：手机号或邮箱"),/^\d+$/.test(a)&&n("用户名不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(a)&&n("用户名不能包含中文"),!0}}],label:"用户名"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,a,e,n){return(/^1\d{10}$/.test(a)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a))&&n("昵称不能是：手机号或邮箱"),/^\d+$/.test(a)&&n("昵称不能为纯数字"),!0}}],label:"昵称"},password:{rules:[{required:!0},{format:"password"},{minLength:6}],label:"密码"},mobile:{rules:[{format:"string"},{pattern:"^\\+?[0-9-]{3,20}$"}],label:"手机号码"},status:{rules:[{format:"int"},{range:[{text:"正常",value:0},{text:"禁用",value:1},{text:"审核中",value:2},{text:"审核拒绝",value:3}]}],defaultValue:0,label:"用户状态"},email:{rules:[{format:"string"},{format:"email"}],label:"邮箱"},role:{rules:[{format:"array"}],label:"角色"},last_login_date:{rules:[{format:"timestamp"}]}};a.enumConverter={status_valuetotext:{0:"正常",1:"禁用",2:"审核中",3:"审核拒绝"}}},faa4:function(t,a,e){"use strict";var n=e("463a"),i=e.n(n);i.a}}]);