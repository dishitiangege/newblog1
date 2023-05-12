(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subPackages-releaseFirendCircle-releaseFirendCircle"],{"01d7":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3"),i("99af"),i("d3b7"),i("159b"),i("14d9"),i("c975");var n={name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto",border:{}}}},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles:function(){return Object.assign({width:"auto",height:"auto",border:{}},this.imageStyles)},boxStyle:function(){var e=this.styles,t=e.width,i=void 0===t?"auto":t,n=e.height,a=void 0===n?"auto":n,r={};"auto"===a?"auto"!==i?(r.height=this.value2px(i),r["padding-top"]=0):r.height=0:(r.height=this.value2px(a),r["padding-top"]=0),r.width="auto"===i?"auto"!==a?this.value2px(a):"33.3%":this.value2px(i);var o="";for(var s in r)o+="".concat(s,":").concat(r[s],";");return o},borderStyle:function(){var e=this.styles.border,t={};if("boolean"===typeof e)t.border=e?"1px #eee solid":"none";else{var i=e&&e.width||1;i=this.value2px(i);var n=e&&e.radius||3;n=this.value2px(n),t={"border-width":i,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":n}}var a="";for(var r in t)a+="".concat(r,":").concat(t[r],";");return a}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",e)},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},prviewImage:function(e,t){var i=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((function(e){i.push(e.url)})),uni.previewImage({urls:i,current:t}))},value2px:function(e){return"number"===typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e}}};t.default=n},"06fc":function(e,t,i){"use strict";i.r(t);var n=i("01d7"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"0783":function(e,t,i){var n=i("38c2");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("9e7fc04a",n,!0,{sourceMap:!1,shadowMode:!1})},"0d43":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__container"},[e._l(e.filesList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content",style:e.borderStyle},[i("v-uni-image",{staticClass:"file-image",attrs:{src:t.url,mode:"aspectFill"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.prviewImage(t,n)}}}),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box",on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e(),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),t.errMsg?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)],1)})),e.filesList.length<e.limit&&!e.readonly?i("v-uni-view",{staticClass:"file-picker__box",style:e.boxStyle},[i("v-uni-view",{staticClass:"file-picker__box-content is-add",style:e.borderStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})])],2)],1):e._e()],2)},a=[]},"14de":function(e,t,i){"use strict";var n=i("eccc"),a=i.n(n);a.a},1627:function(e,t,i){"use strict";var n=i("2594"),a=i.n(n);a.a},1910:function(e,t,i){"use strict";(function(e){i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.chooseAndUploadFile=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"all"};if("image"===e.type)return l(a(e),e);if("video"===e.type)return l(r(e),e);return l(o(e),e)},t.uploadCloudFiles=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2?arguments[2]:void 0;t=JSON.parse(JSON.stringify(t));var a=t.length,r=0,o=this;return new Promise((function(s){while(r<i)l();function l(){var i=r++;if(i>=a)!t.find((function(e){return!e.url&&!e.errMsg}))&&s(t);else{var c=t[i],u=o.files.findIndex((function(e){return e.uuid===c.uuid}));c.url="",delete c.errMsg,e.uploadFile({filePath:c.path,cloudPath:c.cloudPath,fileType:c.fileType,onUploadProgress:function(e){e.index=u,n&&n(e)}}).then((function(e){c.url=e.fileID,c.index=u,i<a&&l()})).catch((function(e){c.errMsg=e.errMsg||e.message,c.index=u,i<a&&l()}))}}}))},i("d3b7"),i("ac1f"),i("5319"),i("159b"),i("baa5"),i("d81d"),i("e9c4"),i("7db0"),i("c740");var n="chooseAndUploadFile:fail";function a(e){var t=e.count,i=e.sizeType,a=void 0===i?["original","compressed"]:i,r=e.sourceType,o=void 0===r?["album","camera"]:r,l=e.extension;return new Promise((function(e,i){uni.chooseImage({count:t,sizeType:a,sourceType:o,extension:l,success:function(t){e(s(t,"image"))},fail:function(e){i({errMsg:e.errMsg.replace("chooseImage:fail",n)})}})}))}function r(e){var t=e.camera,i=e.compressed,a=e.maxDuration,r=e.sourceType,o=void 0===r?["album","camera"]:r,l=e.extension;return new Promise((function(e,r){uni.chooseVideo({camera:t,compressed:i,maxDuration:a,sourceType:o,extension:l,success:function(t){var i=t.tempFilePath,n=t.duration,a=t.size,r=t.height,o=t.width;e(s({errMsg:"chooseVideo:ok",tempFilePaths:[i],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:i,size:a,type:t.tempFile&&t.tempFile.type||"",width:o,height:r,duration:n,fileType:"video",cloudPath:""}]},"video"))},fail:function(e){r({errMsg:e.errMsg.replace("chooseVideo:fail",n)})}})}))}function o(e){var t=e.count,i=e.extension;return new Promise((function(e,a){var r=uni.chooseFile;if("undefined"!==typeof wx&&"function"===typeof wx.chooseMessageFile&&(r=wx.chooseMessageFile),"function"!==typeof r)return a({errMsg:n+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});r({type:"all",count:t,extension:i,success:function(t){e(s(t))},fail:function(e){a({errMsg:e.errMsg.replace("chooseFile:fail",n)})}})}))}function s(e,t){return e.tempFiles.forEach((function(e,i){e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+i+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((function(e){return e.path}))),e}function l(e,t){var i=t.onChooseFile;t.onUploadProgress;return e.then((function(e){if(i){var t=i(e);if("undefined"!==typeof t)return Promise.resolve(t).then((function(t){return"undefined"===typeof t?e:t}))}return e})).then((function(e){return!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e}))}}).call(this,i("a9ff")["default"])},"1ad4":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-file-picker[data-v-0ef21aac]{\nbox-sizing:border-box;overflow:hidden\n}.uni-file-picker__header[data-v-0ef21aac]{padding-top:5px;padding-bottom:10px;\ndisplay:flex;\njustify-content:space-between}.file-title[data-v-0ef21aac]{font-size:14px;color:#333}.file-count[data-v-0ef21aac]{font-size:14px;color:#999}.is-add[data-v-0ef21aac]{\ndisplay:flex;\nalign-items:center;justify-content:center}.icon-add[data-v-0ef21aac]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-0ef21aac]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}",""]),e.exports=t},"20de":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-221cc322]{padding:%?20?% %?40?%}.content .input[data-v-221cc322]{caret-color:#4cd964;height:%?160?%;padding:0 %?15?%}.content .tips[data-v-221cc322]{margin-top:%?120?%}',""]),e.exports=t},2294:function(e,t,i){"use strict";i.r(t);var n=i("b149"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"254d":function(e,t,i){"use strict";var n=i("0783"),a=i.n(n);a.a},2594:function(e,t,i){var n=i("20de");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6022dd22",n,!0,{sourceMap:!1,shadowMode:!1})},"34b7":function(e,t,i){"use strict";i.r(t);var n=i("7a77"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"369f":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("498a");var n={data:function(){return{content:"",maxSize:1536e3,imageValue:[]}},methods:{select:function(e){console.log("选择文件：",e);var t=e.tempFiles[0].maxSize;if(t>this.maxSize)return uni.showToast({icon:"error",title:"选择图片超载,请重新选择嗷！！！",duration:2e3}),!1},progress:function(e){},success:function(e){},fail:function(e){uni.showToast({icon:"error",title:"网络故障,上传失败，请检查网络！！！",duration:2e3})},onNavigationBarButtonTap:function(e){var t=e.index;0==t&&this.handleRelease()},handleRelease:function(){var e=this;if(this.$u.trim(this.content)){var t={content:this.content,images:this.imageValue};vk.callFunction({url:"client/friendCircle/kh/addFriendCircle",title:"",data:t}).then((function(t){0==t.code&&e.$u.route({type:"back"})}))}else uni.showToast({icon:"error",title:"世界这么大，说点什么吧！！！",duration:2e3})}}};t.default=n},"38c2":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-file-picker__container[data-v-5cf66a2a]{display:flex;box-sizing:border-box;flex-wrap:wrap;margin:-5px}.file-picker__box[data-v-5cf66a2a]{position:relative;width:33.3%;height:0;padding-top:33.33%;box-sizing:border-box}.file-picker__box-content[data-v-5cf66a2a]{position:absolute;top:0;right:0;bottom:0;left:0;margin:5px;border:1px #eee solid;border-radius:5px;overflow:hidden}.file-picker__progress[data-v-5cf66a2a]{position:absolute;bottom:0;left:0;right:0;\n  /* border: 1px red solid; */z-index:2}.file-picker__progress-item[data-v-5cf66a2a]{width:100%}.file-picker__mask[data-v-5cf66a2a]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:12px;background-color:rgba(0,0,0,.4)}.file-image[data-v-5cf66a2a]{width:100%;height:100%}.is-add[data-v-5cf66a2a]{display:flex;align-items:center;justify-content:center}.icon-add[data-v-5cf66a2a]{width:50px;height:5px;background-color:#f1f1f1;border-radius:2px}.rotate[data-v-5cf66a2a]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.icon-del-box[data-v-5cf66a2a]{display:flex;align-items:center;justify-content:center;position:absolute;top:3px;right:3px;height:26px;width:26px;border-radius:50%;background-color:rgba(0,0,0,.5);z-index:2;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.icon-del[data-v-5cf66a2a]{width:15px;height:2px;background-color:#fff;border-radius:2px}',""]),e.exports=t},"65d6":function(e,t,i){"use strict";i.r(t);var n=i("8cd5"),a=i("2294");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("d1f1");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1fecfc2e",null,!1,n["a"],void 0);t["default"]=s.exports},"7a77":function(e,t,i){"use strict";(function(e){i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("2909")),r=n(i("5530")),o=n(i("c7eb")),s=n(i("1da1"));i("a9e3"),i("d3b7"),i("159b"),i("14d9"),i("a434"),i("ac1f"),i("00b4"),i("b64b"),i("99af"),i("3ca3"),i("ddb0"),i("c740"),i("e25e"),i("baa5");var l=i("1910"),c=i("ebe2"),u=n(i("958d")),d=n(i("65d6")),f={name:"uniFilePicker",components:{uploadImage:u.default,uploadFile:d.default},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{value:{type:[Array,Object],default:function(){return[]}},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:function(){return[]}},title:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},imageStyles:{type:Object,default:function(){return{width:"auto",height:"auto"}}},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:function(){return["original","compressed"]}}},data:function(){return{files:[],localValue:[]}},watch:{value:{handler:function(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList:function(){var e=[];return this.files.forEach((function(t){e.push(t)})),e},showType:function(){return"image"===this.fileMediatype?this.mode:"list"},limitLength:function(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created:function(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=l.chooseAndUploadFile),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles:function(e){var t=this;0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((function(){t.setEmit()}))),this.$nextTick((function(){t.setEmit()}))},upload:function(){var e=[];this.files.forEach((function(t,i){"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},setValue:function(e,t){var i=this;return(0,s.default)((0,o.default)().mark((function t(){var n,a,r,l;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=function(){var e=(0,s.default)((0,o.default)().mark((function e(t){var n,a;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=/cloud:\/\/([\w.]+\/?)\S*/,a="",a=t.fileID?t.fileID:t.url,!n.test(a)){e.next=8;break}return t.fileID=a,e.next=7,i.getTempFileURL(a);case 7:t.url=e.sent;case 8:return t.url&&(t.path=t.url),e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"object"!==i.returnType){t.next=10;break}if(!e){t.next=7;break}return t.next=5,n(e);case 5:t.next=8;break;case 7:e={};case 8:t.next=19;break;case 10:e||(e=[]),a=0;case 12:if(!(a<e.length)){t.next=19;break}return r=e[a],t.next=16,n(r);case 16:a++,t.next=12;break;case 19:i.localValue=e,i.form&&i.formItem&&!i.is_reset&&(i.is_reset=!1,i.formItem.setValue(i.localValue)),l=Object.keys(e).length>0?e:[],i.files=[].concat(l);case 23:case"end":return t.stop()}}),t)})))()},choose:function(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?uni.showToast({title:"您最多选择 ".concat(this.limitLength," 个文件"),icon:"none"}):this.chooseFiles())},chooseFiles:function(){var t=this,i=(0,c.get_extname)(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,extension:i.length>0?i:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:function(e){t.setProgress(e,e.index)}}).then((function(e){t.setSuccessAndError(e.tempFiles)})).catch((function(e){console.log("选择失败",e)}))},chooseFileCallback:function(e){var t=this;return(0,s.default)((0,o.default)().mark((function i(){var n,a,s,l,u,d,f,p;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:n=(0,c.get_extname)(t.fileExtname),a=1===Number(t.limitLength)&&t.disablePreview&&!t.disabled||"object"===t.returnType,a&&(t.files=[]),s=(0,c.get_files_and_is_max)(e,n),l=s.filePaths,u=s.files,n&&n.length>0||(l=e.tempFilePaths,u=e.tempFiles),d=[],f=0;case 7:if(!(f<u.length)){i.next=21;break}if(!(t.limitLength-t.files.length<=0)){i.next=10;break}return i.abrupt("break",21);case 10:return u[f].uuid=Date.now(),i.next=13,(0,c.get_file_data)(u[f],t.fileMediatype);case 13:p=i.sent,p.progress=0,p.status="ready",t.files.push(p),d.push((0,r.default)((0,r.default)({},p),{},{file:u[f]}));case 18:f++,i.next=7;break;case 21:t.$emit("select",{tempFiles:d,tempFilePaths:l}),e.tempFiles=u,t.autoUpload&&!t.noSpace||(e.tempFiles=[]);case 24:case"end":return i.stop()}}),i)})))()},uploadFiles:function(e){var t=this;e=[].concat(e),l.uploadCloudFiles.call(this,e,5,(function(e){t.setProgress(e,e.index,!0)})).then((function(e){t.setSuccessAndError(e)})).catch((function(e){console.log(e)}))},setSuccessAndError:function(e,t){var i=this;return(0,s.default)((0,o.default)().mark((function t(){var n,a,r,s,l,c,u;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=[],a=[],r=[],s=[],l=(0,o.default)().mark((function t(l){var c,u,d;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(c=e[l],u=c.uuid?i.files.findIndex((function(e){return e.uuid===c.uuid})):c.index,-1!==u&&i.files){t.next=4;break}return t.abrupt("return","break");case 4:if("request:fail"!==c.errMsg){t.next=12;break}i.files[u].url=c.path,i.files[u].status="error",i.files[u].errMsg=c.errMsg,a.push(i.files[u]),s.push(i.files[u].url),t.next=26;break;case 12:if(i.files[u].errMsg="",i.files[u].fileID=c.url,d=/cloud:\/\/([\w.]+\/?)\S*/,!d.test(c.url)){t.next=21;break}return t.next=18,i.getTempFileURL(c.url);case 18:i.files[u].url=t.sent,t.next=22;break;case 21:i.files[u].url=c.url;case 22:i.files[u].status="success",i.files[u].progress+=1,n.push(i.files[u]),r.push(i.files[u].fileID);case 26:case"end":return t.stop()}}),t)})),c=0;case 6:if(!(c<e.length)){t.next=14;break}return t.delegateYield(l(c),"t0",8);case 8:if(u=t.t0,"break"!==u){t.next=11;break}return t.abrupt("break",14);case 11:c++,t.next=6;break;case 14:n.length>0&&(i.setEmit(),i.$emit("success",{tempFiles:i.backObject(n),tempFilePaths:r})),a.length>0&&i.$emit("fail",{tempFiles:i.backObject(a),tempFilePaths:s});case 16:case"end":return t.stop()}}),t)})))()},setProgress:function(e,t,i){this.files.length;var n=Math.round(100*e.loaded/e.total),a=t;i||(a=this.files.findIndex((function(t){return t.uuid===e.tempFile.uuid}))),-1!==a&&this.files[a]&&(this.files[a].progress=n-1,this.$emit("progress",{index:a,progress:parseInt(n),tempFile:this.files[a]}))},delFile:function(e){var t=this;this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((function(){t.setEmit()}))},getFileExt:function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},setEmit:function(){var e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=(0,a.default)(e)),this.$emit("input",this.localValue)},backObject:function(e){var t=[];return e.forEach((function(e){t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},getTempFileURL:function(t){return(0,s.default)((0,o.default)().mark((function i(){var n;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t={fileList:[].concat(t)},i.next=3,e.getTempFileURL(t);case 3:return n=i.sent,i.abrupt("return",n.fileList[0].tempFileURL||"");case 5:case"end":return i.stop()}}),i)})))()},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,i=t.$options.name;while(i!==e){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}};t.default=f}).call(this,i("a9ff")["default"])},"7cee":function(e,t,i){"use strict";i.r(t);var n=i("fe6a"),a=i("f552");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("1627"),i("14de");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"221cc322",null,!1,n["a"],void 0);t["default"]=s.exports},"8cd5":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker__files"},[e.readonly?e._e():i("v-uni-view",{staticClass:"files-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)}}},[e._t("default")],2),e.list.length>0?i("v-uni-view",{staticClass:"uni-file-picker__lists is-text-box",style:e.borderStyle},e._l(e.list,(function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-file-picker__lists-box",class:{"files-border":0!==n&&e.styles.dividline},style:0!==n&&e.styles.dividline&&e.borderLineStyle},[i("v-uni-view",{staticClass:"uni-file-picker__item"},[i("v-uni-view",{staticClass:"files__name"},[e._v(e._s(t.name))]),e.delIcon&&!e.readonly?i("v-uni-view",{staticClass:"icon-del-box icon-files",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile(n)}}},[i("v-uni-view",{staticClass:"icon-del icon-files"}),i("v-uni-view",{staticClass:"icon-del rotate"})],1):e._e()],1),t.progress&&100!==t.progress||0===t.progress?i("v-uni-view",{staticClass:"file-picker__progress"},[i("v-uni-progress",{staticClass:"file-picker__progress-item",attrs:{percent:-1===t.progress?0:t.progress,"stroke-width":"4",backgroundColor:t.errMsg?"#ff5a5f":"#EBEBEB"}})],1):e._e(),"error"===t.status?i("v-uni-view",{staticClass:"file-picker__mask",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.uploadFiles(t,n)}}},[e._v("点击重试")]):e._e()],1)})),1):e._e()],1)},a=[]},"958d":function(e,t,i){"use strict";i.r(t);var n=i("0d43"),a=i("06fc");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("254d");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5cf66a2a",null,!1,n["a"],void 0);t["default"]=s.exports},"98ce":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-file-picker"},[e.title?i("v-uni-view",{staticClass:"uni-file-picker__header"},[i("v-uni-text",{staticClass:"file-title"},[e._v(e._s(e.title))]),i("v-uni-text",{staticClass:"file-count"},[e._v(e._s(e.filesList.length)+"/"+e._s(e.limitLength))])],1):e._e(),"image"===e.fileMediatype&&"grid"===e.showType?i("upload-image",{attrs:{readonly:e.readonly,"image-styles":e.imageStyles,"files-list":e.filesList,limit:e.limitLength,disablePreview:e.disablePreview,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-view",{staticClass:"is-add"},[i("v-uni-view",{staticClass:"icon-add"}),i("v-uni-view",{staticClass:"icon-add rotate"})],1)])],2):e._e(),"image"!==e.fileMediatype||"grid"!==e.showType?i("upload-file",{attrs:{readonly:e.readonly,"list-styles":e.listStyles,"files-list":e.filesList,showType:e.showType,delIcon:e.delIcon},on:{uploadFiles:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadFiles.apply(void 0,arguments)},choose:function(t){arguments[0]=t=e.$handleEvent(t),e.choose.apply(void 0,arguments)},delFile:function(t){arguments[0]=t=e.$handleEvent(t),e.delFile.apply(void 0,arguments)}}},[e._t("default",[i("v-uni-button",{attrs:{type:"primary",size:"mini"}},[e._v("选择文件")])])],2):e._e()],1)},a=[]},"9f50":function(e,t,i){var n=i("d211");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("bb46c650",n,!0,{sourceMap:!1,shadowMode:!1})},b149:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3"),i("d3b7"),i("159b"),i("14d9"),i("99af"),i("c975");var n={name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:function(){return[]}},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:function(){return{border:!0,dividline:!0,borderStyle:{}}}},readonly:{type:Boolean,default:!1}},computed:{list:function(){var e=[];return this.filesList.forEach((function(t){e.push(t)})),e},styles:function(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle:function(){var e=this.styles,t=e.borderStyle,i=e.border,n={};if(i){var a=t&&t.width||1;a=this.value2px(a);var r=t&&t.radius||5;r=this.value2px(r),n={"border-width":a,"border-style":t&&t.style||"solid","border-color":t&&t.color||"#eee","border-radius":r}}else n.border="none";var o="";for(var s in n)o+="".concat(s,":").concat(n[s],";");return o},borderLineStyle:function(){var e={},t=this.styles.borderStyle;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){var i=t&&t.width||1,n=t&&t.style||0;"number"===typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-width"]=i,"number"===typeof n?n+="px":n=n.indexOf("px")?n:n+"px",e["border-top-style"]=n}var a="";for(var r in e)a+="".concat(r,":").concat(e[r],";");return a}},methods:{uploadFiles:function(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose:function(){this.$emit("choose")},delFile:function(e){this.$emit("delFile",e)},value2px:function(e){return"number"===typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e}}};t.default=n},d1f1:function(e,t,i){"use strict";var n=i("9f50"),a=i.n(n);a.a},d211:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-file-picker__files[data-v-1fecfc2e]{display:flex;flex-direction:column;justify-content:flex-start}.uni-file-picker__lists[data-v-1fecfc2e]{position:relative;margin-top:5px;overflow:hidden}.file-picker__mask[data-v-1fecfc2e]{display:flex;justify-content:center;align-items:center;position:absolute;right:0;top:0;bottom:0;left:0;color:#fff;font-size:14px;background-color:rgba(0,0,0,.4)}.uni-file-picker__lists-box[data-v-1fecfc2e]{position:relative}.uni-file-picker__item[data-v-1fecfc2e]{display:flex;align-items:center;padding:8px 10px;padding-right:5px;padding-left:10px}.files-border[data-v-1fecfc2e]{border-top:1px #eee solid}.files__name[data-v-1fecfc2e]{flex:1;font-size:14px;color:#666;margin-right:25px;word-break:break-all;word-wrap:break-word}.icon-files[data-v-1fecfc2e]{position:static;background-color:initial}.is-list-card[data-v-1fecfc2e]{border:1px #eee solid;margin-bottom:5px;border-radius:5px;box-shadow:0 0 2px 0 rgba(0,0,0,.1);padding:5px}.files__image[data-v-1fecfc2e]{width:40px;height:40px;margin-right:10px}.header-image[data-v-1fecfc2e]{width:100%;height:100%}.is-text-box[data-v-1fecfc2e]{border:1px #eee solid;border-radius:5px}.is-text-image[data-v-1fecfc2e]{width:25px;height:25px;margin-left:5px}.rotate[data-v-1fecfc2e]{position:absolute;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.icon-del-box[data-v-1fecfc2e]{display:flex;margin:auto 0;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;right:5px;height:26px;width:26px;z-index:2;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.icon-del[data-v-1fecfc2e]{width:15px;height:1px;background-color:#333}@media (min-width:768px){.uni-file-picker__files[data-v-1fecfc2e]{max-width:375px}}',""]),e.exports=t},d9672:function(e,t,i){var n=i("1ad4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("2e8a69cc",n,!0,{sourceMap:!1,shadowMode:!1})},ebe2:function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.get_files_and_is_max=t.get_file_info=t.get_file_ext=t.get_file_data=t.get_extname=void 0;var a=n(i("c7eb")),r=n(i("1da1"));i("baa5"),i("ac1f"),i("5319"),i("d3b7"),i("159b"),i("c975"),i("14d9"),i("99af");var o=function(e){var t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}};t.get_file_ext=o;t.get_extname=function(e){if(Array.isArray(e))return e;var t=e.replace(/(\[|\])/g,"");return t.split(",")};t.get_files_and_is_max=function(e,t){var i=[],n=[];return t&&0!==t.length?(e.tempFiles.forEach((function(e){var a=o(e.name),r=a.ext.toLowerCase();-1!==t.indexOf(r)&&(n.push(e),i.push(e.path))})),n.length!==e.tempFiles.length&&uni.showToast({title:"当前选择了".concat(e.tempFiles.length,"个文件 ，").concat(e.tempFiles.length-n.length," 个文件格式不正确"),icon:"none",duration:5e3}),{filePaths:i,files:n}):{filePaths:i,files:n}};var s=function(e){return new Promise((function(t,i){uni.getImageInfo({src:e,success:function(e){t(e)},fail:function(e){i(e)}})}))};t.get_file_info=s;var l=function(){var e=(0,r.default)((0,a.default)().mark((function e(t){var i,n,r,l,c,u=arguments;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=u.length>1&&void 0!==u[1]?u[1]:"image",n=o(t.name),r=n.ext.toLowerCase(),l={name:t.name,uuid:t.uuid,extname:r||"",cloudPath:t.cloudPath,fileType:t.fileType,url:t.path||t.path,size:t.size,image:{},path:t.path,video:{}},"image"!==i){e.next=14;break}return e.next=7,s(t.path);case 7:c=e.sent,delete l.video,l.image.width=c.width,l.image.height=c.height,l.image.location=c.path,e.next=15;break;case 14:delete l.image;case 15:return e.abrupt("return",l);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.get_file_data=l},eccc:function(e,t,i){var n=i("fa5b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7c77dece",n,!0,{sourceMap:!1,shadowMode:!1})},efbb:function(e,t,i){"use strict";var n=i("d9672"),a=i.n(n);a.a},f552:function(e,t,i){"use strict";i.r(t);var n=i("369f"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},fa5b:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content .upload[data-v-221cc322] .u-list-item,\n.content .upload .u-add-wrap[data-v-221cc322]{background-color:#eceae8}.content .slot-wrap[data-v-221cc322]{display:flex;align-items:center;padding:0 %?30?%}',""]),e.exports=t},fe23:function(e,t,i){"use strict";i.r(t);var n=i("98ce"),a=i("34b7");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("efbb");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0ef21aac",null,!1,n["a"],void 0);t["default"]=s.exports},fe6a:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uniFilePicker:i("fe23").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-textarea",{staticClass:"input",attrs:{placeholder:"这一刻的想法...","show-confirm-bar":!1,"adjust-position":!1,"disable-default-padding":!0},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}),i("uni-file-picker",{attrs:{"return-type":"array",fileMediatype:"image",mode:"grid","del-icon":!1},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.select.apply(void 0,arguments)},progress:function(t){arguments[0]=t=e.$handleEvent(t),e.progress.apply(void 0,arguments)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.success.apply(void 0,arguments)},fail:function(t){arguments[0]=t=e.$handleEvent(t),e.fail.apply(void 0,arguments)}},model:{value:e.imageValue,callback:function(t){e.imageValue=t},expression:"imageValue"}})],1)},r=[]}}]);