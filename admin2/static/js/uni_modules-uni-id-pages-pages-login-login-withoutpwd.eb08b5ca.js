(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withoutpwd"],{"398a":function(n,t,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("ac1f"),e("00b4"),e("caad"),e("4de4"),e("d3b7");var o=i(e("c7eb")),a=i(e("1da1")),r=i(e("ff89")),c=i(e("e4c1")),u={mixins:[c.default],data:function(){return{type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}},computed:{loginTypes:function(){return(0,a.default)((0,o.default)().mark((function n(){return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",r.default.loginTypes);case 1:case"end":return n.stop()}}),n)})))()},isPhone:function(){return/^1\d{10}$/.test(this.phone)},imgSrc:function(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},onLoad:function(n){var t=this;return(0,a.default)((0,o.default)().mark((function e(){var i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=n.type||r.default.loginTypes[0],t.type=i,"univerify"!=i&&(t.focusPhone=!0),t.$nextTick((function(){["weixin","apple"].includes(i)&&(t.$refs.uniFabLogin.servicesList=t.$refs.uniFabLogin.servicesList.filter((function(n){return n.id!=i})))})),uni.$on("uni-id-pages-setLoginType",(function(n){t.type=n}));case 5:case"end":return e.stop()}}),e)})))()},onShow:function(){var n=this;document.onkeydown=function(t){var e=t||window.event;e&&13==e.keyCode&&n.toSmsPage()}},onUnload:function(){uni.$off("uni-id-pages-setLoginType")},onReady:function(){},methods:{showCurrentWebview:function(){(void 0).setStyle({top:0})},quickLogin:function(n){var t,e,i={};null!==(t=n.detail)&&void 0!==t&&t.code&&(i.phoneNumberCode=n.detail.code),("weixinMobile"!==this.type||null!==(e=n.detail)&&void 0!==e&&e.code)&&this.$refs.uniFabLogin.login_before(this.type,!0,i)},toSmsPage:function(){return this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,uni.showToast({title:"手机号码格式不正确",icon:"none",duration:3e3}))},toPwdLogin:function(){uni.navigateTo({url:"../login/password"})},chooseArea:function(){uni.showToast({title:"暂不支持其他国家",icon:"none",duration:3e3})}}};t.default=u},"6a2c":function(n,t,e){"use strict";e.r(t);var i=e("398a"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=o.a},"87ff":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 水平间距 */\r\n/* 水平间距 */\r\n/* 行为相关颜色 */\r\n/* 兼容 uni-ui 相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-25b831cc]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-25b831cc]{padding:0 %?60?%}.login-logo[data-v-25b831cc]{display:none}@media screen and (min-width:690px){.uni-content[data-v-25b831cc]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-25b831cc]{display:flex;justify-content:center}.login-logo uni-image[data-v-25b831cc]{width:60px;height:60px}.register-back[data-v-25b831cc]{display:none}uni-button[data-v-25b831cc]{padding-bottom:1px}}.uni-content uni-view[data-v-25b831cc]{box-sizing:border-box}.title[data-v-25b831cc]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-25b831cc]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-25b831cc]  .uni-easyinput__content,\r\n.input-box[data-v-25b831cc]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-25b831cc]{color:#04498c;cursor:pointer}.uni-content[data-v-25b831cc]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-25b831cc]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-25b831cc]{height:auto!important}@media screen and (min-width:690px){.uni-content[data-v-25b831cc]{height:350px}}.uni-content[data-v-25b831cc],\r\n.quickLogin[data-v-25b831cc]{display:flex;flex-direction:column}.phone-box[data-v-25b831cc]{position:relative;display:flex}.area[data-v-25b831cc]{position:absolute;left:10px;z-index:9;top:12px;font-size:14px}.area[data-v-25b831cc]::after{content:"";border:3px solid transparent;border-top-color:#000;top:12px;left:3px;position:relative}.input-box[data-v-25b831cc]{box-sizing:border-box;flex:1;padding-left:45px;margin-bottom:10px;border-radius:0}.quickLogin[data-v-25b831cc]{height:350px;align-items:center;justify-content:center}.quickLoginBtn[data-v-25b831cc]{margin:20px 0;width:%?450?%;max-width:230px;height:%?82?%}.tip[data-v-25b831cc]{margin-top:-15px;margin-bottom:20px}@media screen and (min-width:690px){.quickLogin[data-v-25b831cc]{height:auto}}',""]),n.exports=t},a8d8:function(n,t,e){"use strict";var i=e("e37d"),o=e.n(i);o.a},b658:function(n,t,e){"use strict";e.r(t);var i=e("cb55"),o=e("6a2c");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("a8d8");var r=e("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"25b831cc",null,!1,i["a"],void 0);t["default"]=c.exports},cb55:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uniIdPagesAgreements:e("3e3b").default,uniEasyinput:e("5e6f").default,uniIdPagesFabLogin:e("262e2").default},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"uni-content"},[e("v-uni-view",{staticClass:"login-logo"},[e("v-uni-image",{attrs:{src:n.logo}})],1),e("v-uni-text",{staticClass:"title"},[n._v("请选择登录方式")]),["apple","weixin","weixinMobile"].includes(n.type)?[e("v-uni-text",{staticClass:"tip"},[n._v("将根据第三方账号服务平台的授权范围获取你的信息")]),e("v-uni-view",{staticClass:"quickLogin"},["weixinMobile"!==n.type?e("v-uni-image",{staticClass:"quickLoginBtn",attrs:{src:n.imgSrc,mode:"widthFix"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.quickLogin.apply(void 0,arguments)}}}):e("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary","open-type":"getPhoneNumber"},on:{getphonenumber:function(t){arguments[0]=t=n.$handleEvent(t),n.quickLogin.apply(void 0,arguments)}}},[n._v("微信授权手机号登录")]),e("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}})],1)]:[e("v-uni-text",{staticClass:"tip"},[n._v("未注册的账号验证通过后将自动注册")]),e("v-uni-view",{staticClass:"phone-box"},[e("v-uni-view",{staticClass:"area",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.chooseArea.apply(void 0,arguments)}}},[n._v("+86")]),e("uni-easyinput",{staticClass:"input-box",attrs:{focus:n.focusPhone,type:"number",inputBorder:!1,maxlength:"11",placeholder:"请输入手机号"},on:{blur:function(t){arguments[0]=t=n.$handleEvent(t),n.focusPhone=!1}},model:{value:n.phone,callback:function(t){n.phone=t},expression:"phone"}})],1),e("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}}),e("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.toSmsPage.apply(void 0,arguments)}}},[n._v("获取验证码")])],e("uni-id-pages-fab-login",{ref:"uniFabLogin"})],2)},a=[]},e37d:function(n,t,e){var i=e("87ff");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var o=e("4f06").default;o("7b0c0978",i,!0,{sourceMap:!1,shadowMode:!1})}}]);