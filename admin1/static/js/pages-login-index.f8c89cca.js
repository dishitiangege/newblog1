(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-index"],{"209c":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"page-body no-user-select"},[o("v-uni-view",{staticClass:"login-view"},[o("v-uni-image",{staticClass:"image",attrs:{src:e.vk.getVuex("$app.config.staticUrl.navBar.logo"),mode:"aspectFit"}}),o("v-uni-text",{staticClass:"login-title"},[e._v("欢迎登录")]),o("el-form",{ref:"rule1",staticClass:"form-view",attrs:{model:e.form1,"status-icon":!0,rules:e.rules,"label-width":"60px"}},[o("el-form-item",{staticClass:"form-item",attrs:{label:"账 号",prop:"pass"}},[o("el-input",{staticClass:"input",attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.form1.username,callback:function(t){e.$set(e.form1,"username",t)},expression:"form1.username"}})],1),o("el-form-item",{staticClass:"form-item",attrs:{label:"密 码",prop:"checkPass"}},[o("el-input",{staticClass:"input",attrs:{type:"password","show-password":!0,placeholder:"请输入密码",maxlength:"20"},model:{value:e.form1.password,callback:function(t){e.$set(e.form1,"password",t)},expression:"form1.password"}})],1),o("v-uni-view",{staticClass:"password-box"},[o("v-uni-view",{staticClass:"remember-password"},[o("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[o("v-uni-text",{staticClass:"tips",staticStyle:{"font-size":"12px"}},[e._v("记住密码")])],1)],1),o("v-uni-view",{staticClass:"forget-password"},[o("v-uni-text",{staticStyle:{"font-size":"12px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.forgetPassWord.apply(void 0,arguments)}}},[e._v("忘记密码？")])],1)],1),o("el-button",{staticClass:"login_but",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("登录")])],1)],1)],1)},i=[]},"25b3":function(e,t,o){"use strict";o("7a82");var a=o("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("c975");var i,n=a(o("5530")),s=a(o("5c11")),r=uni.vk,l={data:function(){return(0,n.default)((0,n.default)({},s.default.staticUrl.navBar),{},{form1:{username:"",password:"",needPermission:!0},checked:!1,rules:{}})},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i=this,r=i.vk,i.options=e,i.init(e)},created:function(){i=this,r=i.vk},mounted:function(){},methods:{init:function(){var e=r.getVuex("$user"),t=e.login;if(r.pubfn.isNotNull(t)&&(i.form1.username=t.username,i.form1.password=t.password,i.checked=!0),!getApp().isAllowLoginBackground())return!1;r.userCenter.checkToken({loading:!0,success:function(e){i.login_success()}})},submit:function(){r.userCenter.login({data:i.form1,success:function(e){if(!getApp().isAllowLoginBackground(e.userInfo))return r.alert("您的账户无登陆权限"),!1;i.checked&&(r.setVuex("$user.login.username",i.form1.username),r.setVuex("$user.login.password",i.form1.password)),i.login_success()}})},login_success:function(){getApp().init();var e=getCurrentPages();e.length>=2&&e[e.length-2]&&e[e.length-2].route&&-1==e[e.length-2].route.indexOf("login/index")?r.reLaunch("/"+e[e.length-2].route):r.reLaunch("/pages/index/index")},forgetPassWord:function(){console.log("忘记密码了"),r.toast("暂不支持","none")},shortMessageLogin:function(){console.log("短信登录")},noCccount:function(){console.log("没有账号")},register:function(){console.log("立即注册"),r.toast("暂不支持注册","none")}}};t.default=l},"6eba":function(e,t,o){var a=o("24fb"),i=o("1de5"),n=o("7cae");t=a(!1);var s=i(n);t.push([e.i,".page-body[data-v-65fda7c8]{width:100%;height:100vh;background:#46d0e7 url("+s+") no-repeat fixed 50%;background-size:cover;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.page-body .login-view[data-v-65fda7c8]:hover{background-color:#fff}.page-body .login-view[data-v-65fda7c8]{width:100%;max-width:420px;border-radius:7px;background-color:hsla(0,0%,100%,.97);padding:40px 30px;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #f5f5f5;-webkit-box-shadow:6px 6px 10px 0 #888;box-shadow:6px 6px 10px 0 #888}.page-body .login-view[data-v-65fda7c8] .input .el-input__inner{border:0!important;background-color:hsla(0,0%,100%,0)}.page-body .login-view .image[data-v-65fda7c8]{display:block;width:64px;height:64px;margin:0 auto;margin-bottom:15px;border-radius:6px}.page-body .login-view .form-view[data-v-65fda7c8]{margin-top:20px}.page-body .login-view .form-view .form-item[data-v-65fda7c8]{border-bottom:1px solid #f5f5f5}.page-body .login-view .login-title[data-v-65fda7c8]{display:block;text-align:center;color:#121212;font-size:22px;letter-spacing:2px}.page-body .login-view .login_but[data-v-65fda7c8]{width:100%;letter-spacing:4px;font-size:17px}.page-body .login-view .password-box[data-v-65fda7c8]{font-size:13px;color:#b1b1b1;margin-bottom:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.page-body .login-view .password-box .remember-password[data-v-65fda7c8]{-webkit-box-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page-body .login-view .password-box .forget-password[data-v-65fda7c8]{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.page-body .login-view .password-box .forget-password[data-v-65fda7c8]:active{color:#3a6ffd}.page-body .login-view .tips[data-v-65fda7c8]{color:#b1b1b1}.page-body .login-view .btns-box[data-v-65fda7c8]{font-size:13px;color:#b1b1b1;padding-top:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box}.page-body .login-view .btns-box uni-text[data-v-65fda7c8]{cursor:pointer}.page-body .login-view .btns-box uni-text[data-v-65fda7c8]:first-of-type{-webkit-box-flex:1;-ms-flex:1;flex:1}.page-body .login-view .btns-box uni-text[data-v-65fda7c8]:nth-of-type(2){margin-right:8px}.page-body .login-view .btns-box .register[data-v-65fda7c8]{color:#46d0e7}",""]),e.exports=t},"7cae":function(e,t,o){e.exports=o.p+"static/img/007.503ba890.jpg"},"8eb4":function(e,t,o){"use strict";o.r(t);var a=o("209c"),i=o("fb63");for(var n in i)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(n);o("b6e7");var s=o("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"65fda7c8",null,!1,a["a"],void 0);t["default"]=r.exports},b247:function(e,t,o){var a=o("6eba");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=o("4f06").default;i("add59d9e",a,!0,{sourceMap:!1,shadowMode:!1})},b6e7:function(e,t,o){"use strict";var a=o("b247"),i=o.n(a);i.a},fb63:function(e,t,o){"use strict";o.r(t);var a=o("25b3"),i=o.n(a);for(var n in a)["default"].indexOf(n)<0&&function(e){o.d(t,e,(function(){return a[e]}))}(n);t["default"]=i.a}}]);