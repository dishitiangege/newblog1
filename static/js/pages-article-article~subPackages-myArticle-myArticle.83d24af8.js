(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-article~subPackages-myArticle-myArticle"],{"11d2":function(t,e,i){"use strict";i.r(e);var n=i("9b17"),o=i("9a4a"),a=i("52fd"),r=i("e0e4"),s=i("68f3");e["default"]={en:n,es:o,fr:a,"zh-Hans":r,"zh-Hant":s}},"19f4":function(t,e,i){var n=i("2648");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("0a80ea08",n,!0,{sourceMap:!1,shadowMode:!1})},"1d4a":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)?i("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[i("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onItemClick(n,e)}}},[i("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"widthFix"}}),i("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),i("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"fab-circle-v",class:{"uni-fab__plus--active":t.isShow}}),i("v-uni-view",{staticClass:"fab-circle-h",class:{"uni-fab__plus--active":t.isShow}})],1)],1)},o=[]},"252d":function(t,e,i){"use strict";i.r(e);var n=i("1d4a"),o=i("85f0");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("ed12");var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"6bad4bb4",null,!1,n["a"],void 0);e["default"]=s.exports},2648:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-fab[data-v-6bad4bb4]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10}.uni-fab--active[data-v-6bad4bb4]{opacity:1}.uni-fab--leftBottom[data-v-6bad4bb4]{left:5px;bottom:20px;bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--leftTop[data-v-6bad4bb4]{left:5px;top:30px;top:calc(30px + var(--window-top));padding:10px}.uni-fab--rightBottom[data-v-6bad4bb4]{right:5px;bottom:20px;bottom:calc(20px + var(--window-bottom));padding:10px}.uni-fab--rightTop[data-v-6bad4bb4]{right:5px;top:30px;top:calc(30px + var(--window-top));padding:10px}.uni-fab__circle[data-v-6bad4bb4]{position:fixed;display:flex;justify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:55px;z-index:11}.uni-fab__circle--leftBottom[data-v-6bad4bb4]{left:15px;bottom:30px;bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-6bad4bb4]{left:15px;top:40px;top:calc(40px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-6bad4bb4]{right:15px;bottom:30px;bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-6bad4bb4]{right:15px;top:40px;top:calc(40px + var(--window-top))}.uni-fab__circle--left[data-v-6bad4bb4]{left:0}.uni-fab__circle--right[data-v-6bad4bb4]{right:0}.uni-fab__circle--top[data-v-6bad4bb4]{top:0}.uni-fab__circle--bottom[data-v-6bad4bb4]{bottom:0}.uni-fab__plus[data-v-6bad4bb4]{font-weight:700}.fab-circle-v[data-v-6bad4bb4]{position:absolute;width:3px;height:31px;left:26px;top:12px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.fab-circle-h[data-v-6bad4bb4]{position:absolute;width:31px;height:3px;left:12px;top:26px;background-color:#fff;-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.uni-fab__plus--active[data-v-6bad4bb4]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-6bad4bb4]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-6bad4bb4]{border-width:0;box-shadow:0 0 5px 2px rgba(0,0,0,.2)}.uni-fab__content--left[data-v-6bad4bb4]{justify-content:flex-start}.uni-fab__content--right[data-v-6bad4bb4]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-6bad4bb4]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-6bad4bb4]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-6bad4bb4]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-6bad4bb4]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-6bad4bb4]{opacity:1}.uni-fab__item-image[data-v-6bad4bb4]{width:25px;height:25px;margin-bottom:3px}.uni-fab__item-text[data-v-6bad4bb4]{color:#fff;font-size:12px}.uni-fab__item--first[data-v-6bad4bb4]{width:55px}',""]),t.exports=e},"463d":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.timestampFormat=void 0,i("e25e");var o=n(i("53ca"));e.timestampFormat=function(t){if(!t)return"";function e(t){return(1==String(t).length?"0":"")+t}(0,o.default)("string"==t)&&(t=parseInt(t));var i=parseInt((new Date).getTime()),n=(i-t)/1e3,a=new Date(1e3*i),r=new Date(t),s=r.getFullYear(),c=r.getMonth()+1,l=r.getDate(),u=r.getHours(),d=r.getMinutes();r.getSeconds();if(n<60)return"刚刚";if(n<3600)return Math.floor(n/60)+"分钟前";if(a.getFullYear()==s&&a.getMonth()+1==c&&a.getDate()==l)return"今天"+e(u)+":"+e(d);var f=new Date(1e3*(i-86400));return f.getFullYear()==s&&f.getMonth()+1==c&&f.getDate()==l?"昨天"+e(u)+":"+e(d):a.getFullYear()==s?e(c)+"月"+e(l)+"日 "+e(u)+":"+e(d):s+"年"+e(c)+"月"+e(l)+"日 "+e(u)+":"+e(d)}},"4af1":function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("2909")),a=n(i("53ca"));i("a9e3"),i("c975"),i("d3b7"),i("14d9"),i("a434"),i("ac1f"),i("e9c4"),i("b64b"),i("d9e2"),i("d401"),i("fb6a");var r=i("37dc"),s=n(i("11d2")),c=(0,r.initVueI18n)(s.default),l=c.t,u={load:"load",error:"error"},d={add:"add",replace:"replace"},f={auto:"auto",onready:"onready",manual:"manual"},h=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],p={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return h.forEach((function(i){e.push(t[i])})),e}),(function(e,i){if(t.paginationInternal.size=t.pageSize,e[0]!==i[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==f.manual){for(var n=!1,o=2;o<e.length;o++)if(e[o]!==i[o]){n=!0;break}n&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==f.auto||this.loadData()},beforeDestroy:function(){},methods:{loadData:function(t,e){var i=null,n=!1;"object"===(0,a.default)(t)?(t.clear&&(this.pageData===d.replace?this.clear():n=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(i=e)):"function"===typeof t&&(i=t),this._execLoadData(i,n)},loadMore:function(){this._isEnded||this.loading||(this.pageData===d.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.action,o=i.showToast,a=void 0===o||o,r=i.toastTitle,s=i.success,c=i.fail,u=i.complete,d=i.needConfirm,f=void 0===d||d,h=i.needLoading,p=void 0===h||h,b=i.loadingTitle,g=void 0===b?"":b;p&&uni.showLoading({title:g});var v=t.database(this.spaceInfo);n&&(v=v.action(n)),v.collection(this.getMainCollection()).add(e).then((function(t){s&&s(t),a&&uni.showToast({title:r||l("uniCloud.component.add.success")})})).catch((function(t){c&&c(t),f&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){p&&uni.hideLoading(),u&&u()}))},remove:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.action,o=i.success,a=i.fail,r=i.complete,s=i.confirmTitle,c=i.confirmContent,u=i.needConfirm,d=void 0===u||u,f=i.needLoading,h=void 0===f||f,p=i.loadingTitle,b=void 0===p?"":p;t&&t.length&&(d?uni.showModal({title:s||l("uniCloud.component.remove.showModal.title"),content:c||l("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(i){i.confirm&&e._execRemove(t,n,o,a,r,d,h,b)}}):this._execRemove(t,n,o,a,r,d,h,b))},update:function(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.action,a=n.showToast,r=void 0===a||a,s=n.toastTitle,c=n.success,u=n.fail,d=n.complete,f=n.needConfirm,h=void 0===f||f,p=n.needLoading,b=void 0===p||p,g=n.loadingTitle,v=void 0===g?"":g;b&&uni.showLoading({title:v});var m=t.database(this.spaceInfo);return o&&(m=m.action(o)),m.collection(this.getMainCollection()).doc(e).update(i).then((function(t){c&&c(t),r&&uni.showToast({title:s||l("uniCloud.component.update.success")})})).catch((function(t){u&&u(t),h&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){b&&uni.hideLoading(),d&&d()}))},getMainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]},getTemp:function(){var e,i=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=t.database(this.spaceInfo);this.action&&(n=n.action(this.action)),n=(e=n).collection.apply(e,(0,o.default)(this.collectionArgs)),this.foreignKey&&(n=n.foreignKey(this.foreignKey)),this.where&&Object.keys(this.where).length&&(n=n.where(this.where)),this.field&&(n=n.field(this.field)),this.groupby&&(n=n.groupBy(this.groupby)),this.groupField&&(n=n.groupField(this.groupField)),!0===this.distinct&&(n=n.distinct()),this.orderby&&(n=n.orderBy(this.orderby));var a=this.paginationInternal,r=a.current,s=a.size,c={};this.getcount&&(c.getCount=this.getcount);var l={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(c.getTree=l),this.gettreepath&&(c.getTreePath=l),n=n.skip(s*(r-1)).limit(s),i?(n=n.getTemp(c),n.udb=this):n=n.get(c),n},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var i=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(n){i.loading=!1,i._execLoadDataSuccess(n.result,t,e)})).catch((function(e){i.loading=!1,i._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,i){var n=t.data,a=t.count;this._isEnded=void 0!==a?this.paginationInternal.current*this.paginationInternal.size>=a:n.length<this.pageSize,this.hasMore=!this._isEnded;var r,s=this.getone?n.length?n[0]:void 0:n;(this.getcount&&(this.paginationInternal.count=a),e&&e(s,this._isEnded,this.paginationInternal),this._dispatchEvent(u.load,s),this.getone||this.pageData===d.replace)?this.dataList=s:i?this.dataList=s:(r=this.dataList).push.apply(r,(0,o.default)(s))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(u.error,t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,i,n,o,a,r,s,c){var l=this;if(this.collection&&e){var u=Array.isArray(e)?e:[e];if(u.length){s&&uni.showLoading({mask:!0,title:c});var f=t.database(this.spaceInfo),h=f.command,p=f;i&&(p=p.action(i)),p.collection(this.getMainCollection()).where({_id:h.in(u)}).remove().then((function(t){n&&n(t.result),l.pageData===d.replace?l.refresh():l.removeData(u)})).catch((function(t){o&&o(t),r&&uni.showModal({content:t.message,showCancel:!1})})).finally((function(){s&&uni.hideLoading(),a&&a()}))}}},removeData:function(t){for(var e=t.slice(0),i=this.dataList,n=i.length-1;n>=0;n--){var o=e.indexOf(i[n]._id);o>=0&&(i.splice(n,1),e.splice(o,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=p}).call(this,i("a9ff")["default"])},"52fd":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"539b":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[this._t("default",null,{options:this.options,data:this.dataList,pagination:this.paginationInternal,loading:this.loading,hasMore:this.hasMore,error:this.errorMessage})],2)},o=[]},"68f3":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否刪除數據"}')},7231:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.calcCommentsCount=void 0,i("d3b7"),i("159b");e.calcCommentsCount=function(t){var e=t.length;return t.forEach((function(t){e+=t.replies.length})),e}},"848e":function(t,e,i){"use strict";i.r(e);var n=i("4af1"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"85f0":function(t,e,i){"use strict";i.r(e);var n=i("bce3"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"960d":function(t,e,i){"use strict";i.r(e);var n=i("539b"),o=i("848e");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);var r=i("f0c5"),s=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},"9a4a":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},"9b17":function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"Success","uniCloud.component.update.success":"Success","uniCloud.component.remove.showModal.title":"Tips","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},bce3:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+10+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,e){this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,e){this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}};e.default=n},bceb:function(t,e,i){t.exports=i.p+"static/img/333.5fbb5924.svg"},e0e4:function(t){t.exports=JSON.parse('{"uniCloud.component.add.success":"新增成功","uniCloud.component.update.success":"修改成功","uniCloud.component.remove.showModal.title":"提示","uniCloud.component.remove.showModal.content":"是否删除该数据"}')},ed12:function(t,e,i){"use strict";var n=i("19f4"),o=i.n(n);o.a}}]);