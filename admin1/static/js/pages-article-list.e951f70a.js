(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-list"],{1740:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".drawer_content[data-v-1dc3921e]{padding:0 20px}.drawer_content .el-tag[data-v-1dc3921e]{cursor:pointer;margin-right:10px}.drawer_content .button-new-tag[data-v-1dc3921e]{margin-left:10px;height:32px;line-height:30px;padding-top:0;padding-bottom:0}.drawer_content .input-new-tag[data-v-1dc3921e]{width:90px;margin-left:10px;vertical-align:bottom}.drawer_footer[data-v-1dc3921e]{position:fixed;bottom:0;z-index:99999;width:50%;text-align:center;margin-bottom:20px}",""]),t.exports=e},"301d":function(t,e,i){var a=i("1740");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("59bcd500",a,!0,{sourceMap:!1,shadowMode:!1})},4587:function(t,e,i){"use strict";i.r(e);var a=i("a274"),n=i("7cb7");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("832e");var r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"1dc3921e",null,!1,a["a"],void 0);e["default"]=l.exports},"7cb7":function(t,e,i){"use strict";i.r(e);var a=i("ba4c"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"832e":function(t,e,i){"use strict";var a=i("301d"),n=i.n(a);n.a},a274:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page-body"},[i("vk-data-table-query",{attrs:{columns:t.queryForm1.columns},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.queryForm1.formData,callback:function(e){t.$set(t.queryForm1,"formData",e)},expression:"queryForm1.formData"}}),i("v-uni-view",[i("el-row",[i("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addBtn.apply(void 0,arguments)}}},[t._v("添加")])],1)],1),i("vk-data-table",{ref:"articleTable",attrs:{action:t.articleTable.action,columns:t.articleTable.columns,"query-form-param":t.queryForm1,"right-btns":["update","delete"],selection:!1,"row-no":!0,pagination:!0},on:{update:function(e){arguments[0]=e=t.$handleEvent(e),t.updateBtn.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteBtn.apply(void 0,arguments)},"current-change":function(e){arguments[0]=e=t.$handleEvent(e),t.currentChange.apply(void 0,arguments)},"selection-change":function(e){arguments[0]=e=t.$handleEvent(e),t.selectionChange.apply(void 0,arguments)}}}),i("el-drawer",{ref:"drawer",attrs:{title:t.drawerTitle,"before-close":t.handleClose,visible:t.showArticle,direction:"rtl","custom-class":"demo-drawer",size:"50%"},on:{"update:visible":function(e){arguments[0]=e=t.$handleEvent(e),t.showArticle=e}}},[i("div",{staticClass:"drawer_content"},[i("el-form",{ref:"form",attrs:{model:t.articleForm,"label-position":"top","label-width":"80px"}},[i("el-form-item",{attrs:{label:"文章标题"}},[i("el-input",{model:{value:t.articleForm.title,callback:function(e){t.$set(t.articleForm,"title",e)},expression:"articleForm.title"}})],1),i("el-form-item",{attrs:{label:"添加时间"}},[i("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",format:"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:t.articleForm._add_time_str,callback:function(e){t.$set(t.articleForm,"_add_time_str",e)},expression:"articleForm._add_time_str"}})],1),i("el-form-item",{attrs:{label:"文章分类"}},[t._l(t.categoryList,(function(e,a){return i("el-tag",{key:a,attrs:{type:e.type,closable:!0,"disable-transitions":!1,effect:"dark"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryClick(e,a)},close:function(i){arguments[0]=i=t.$handleEvent(i),t.handleCategoryClose(e)}}},[t._v(t._s(e._id))])})),t.categoryVisible?i("el-input",{ref:"saveCategoryInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCategoryConfirm.apply(void 0,arguments)}},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.handleCategoryConfirm.apply(void 0,arguments)}},model:{value:t.categoryValue,callback:function(e){t.categoryValue=e},expression:"categoryValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCategoryInput.apply(void 0,arguments)}}},[t._v("+ New category")])],2),i("el-form-item",{attrs:{label:"文章标签"}},[t._l(t.tagList,(function(e,a){return i("el-tag",{key:a,attrs:{type:e.type,closable:!0,"disable-transitions":!1,effect:"dark"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.tagClick(e,a)},close:function(i){arguments[0]=i=t.$handleEvent(i),t.handleTagClose(e)}}},[t._v(t._s(e._id))])})),t.tagVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTagConfirm.apply(void 0,arguments)}},nativeOn:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;arguments[0]=e=t.$handleEvent(e),t.handleTagConfirm.apply(void 0,arguments)}},model:{value:t.tagValue,callback:function(e){t.tagValue=e},expression:"tagValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showTagInput.apply(void 0,arguments)}}},[t._v("+ New Tag")])],2),i("el-form-item",{attrs:{label:"文章内容"}},[i("mavon-editor",{ref:"mdEditor",on:{imgAdd:function(e){arguments[0]=e=t.$handleEvent(e),t.$imgAdd.apply(void 0,arguments)}},model:{value:t.articleForm.content,callback:function(e){t.$set(t.articleForm,"content",e)},expression:"articleForm.content"}})],1)],1)],1),i("div",{staticClass:"drawer_footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.articleFormSubmit.apply(void 0,arguments)}}},[t._v("立即创建")]),i("el-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancelForm.apply(void 0,arguments)}}},[t._v("取消")])],1)])],1)},n=[]},ba4c:function(t,e,i){"use strict";var a;i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9"),i("a434"),i("c975"),i("ac1f"),i("841c");var n=uni.vk,o={data:function(){return{loading:!1,data:{},articleTable:{action:"admin/article/sys/getList",columns:[{key:"_id",title:"id",type:"text"},{key:"title",title:"标题",type:"text",sortable:"custom"},{key:"view_count",title:"查看次数",type:"text"},{key:"last_modify_date",title:"添加时间",type:"time",sortable:"custom"}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[{key:"title",title:"标题",type:"text",width:160,mode:"%%"},{key:"publish_date",title:"添加时间",type:"datetimerange",width:400,mode:"[]"}]},articleForm:{title:"",content:"",view_count:0,last_modify_date:"",_add_time_str:""},showArticle:!1,drawerTitle:"文章管理",categorySelectList:[],categoryList:[],tagList:[],tagSelectList:[],categoryVisible:!1,categoryValue:"",tagVisible:!1,tagValue:"",last_modify_ip:null}},onLoad:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=this,n=this.vk,this.options=t},onReady:function(){},onShow:function(){},onHide:function(){},methods:{articleFormSubmit:function(){var t=this;this.articleForm.title?this.articleForm.content?0!=this.categoryList.length?0!=this.tagList.length?(this.articleForm.content=this.$refs.mdEditor.d_render,this.articleForm.last_modify_date=new Date(this.articleForm._add_time_str).getTime(),this.articleForm._id?n.callFunction({url:"admin/article/sys/update",data:this.articleForm,success:function(e){var i=t.parseList(t.categorySelectList,t.tagSelectList,t.articleForm._id),a=i.categoryList,n=i.tagList;t.categoryAdd(a),t.tagAdd(n),t.showArticle=!1,t.$refs.articleTable.refresh()},complete:function(){}}):n.callFunction({url:"admin/article/sys/add",data:this.articleForm,success:function(e){var i=e.id,a=t.parseList(t.categorySelectList,t.tagSelectList,i),n=a.categoryList,o=a.tagList;t.categoryAdd(n),t.tagAdd(o),t.showArticle=!1,t.$refs.articleTable.refresh()},complete:function(){}})):this.$message.error("请选择至少一个标签！"):this.$message.error("请选择至少一个分类！"):this.$message.error("请填写文章内容！"):this.$message.error("请填写文章标题！")},categoryAdd:function(t){n.callFunction({url:"admin/category/sys/add",data:t,success:function(t){console.log("=========================分类新增完毕")},complete:function(){}})},tagAdd:function(t){n.callFunction({url:"admin/tag/sys/add",data:t,success:function(t){console.log("=========================标签新增完毕")},complete:function(){}})},parseList:function(t,e,i){var a=[],n=[];return t&&t.forEach((function(t){a.push({name:t._id,articleId:i})})),e&&e.forEach((function(t){n.push({name:t._id,articleId:i})})),{categoryList:a,tagList:n}},tagClick:function(t,e){"info"==t.type?(t.type="",this.tagSelectList.push(t)):(t.type="info",this.tagSelectList.splice(this.tagSelectList.indexOf(t),1))},categoryClick:function(t,e){"info"==t.type?(t.type="",this.categorySelectList.push(t)):(t.type="info",this.categorySelectList.splice(this.categorySelectList.indexOf(t),1))},showTagInput:function(){var t=this;this.tagVisible=!0,this.$nextTick((function(e){t.$refs.saveTagInput.$refs.input.focus()}))},handleTagConfirm:function(){var t=this.tagValue;t&&(this.tagList.push({_id:t,type:""}),this.tagSelectList.push({_id:t,type:""})),this.tagVisible=!1,this.tagValue=""},handleTagClose:function(t){this.tagList.splice(this.tagList.indexOf(t),1)},showCategoryInput:function(){var t=this;this.categoryVisible=!0,this.$nextTick((function(e){t.$refs.saveCategoryInput.$refs.input.focus()}))},handleCategoryConfirm:function(){var t=this.categoryValue;t&&(this.categoryList.push({_id:t,type:""}),this.categorySelectList.push({_id:t,type:""})),this.categoryVisible=!1,this.categoryValue=""},handleCategoryClose:function(t){this.categoryList.splice(this.categoryList.indexOf(t),1)},$imgAdd:function(t,e){var i=e.miniurl;n.pubfn.base64ToFile({base64:i,success:function(e){var i=e.path;console.log(i),n.callFunctionUtil.uploadFile({title:"上传中...",filePath:i,fileType:"image",success:function(e){a.$refs.mdEditor.$img2Url(t,e.url)}})}})},getCategoryAndTagList:function(t){var e=this;n.callFunction({url:"admin/article/sys/getCategoryAndTag",data:{pageSize:-1},success:function(i){a.categoryList=i.categoryList,a.tagList=i.tagList,t&&(t.categoryList=e.hightlightCategory(t.categoryList),t.tagList=e.hightlightTag(t.tagList),a.articleForm=t,a.showArticle=!0)},complete:function(){}})},handleClose:function(t){this.showArticle=!1},cancelForm:function(){this.showArticle=!1},pageTo:function(t){n.navigateTo(t)},search:function(){this.$refs.articleTable.search()},refresh:function(){this.$refs.articleTable.refresh()},getCurrentRow:function(){return this.$refs.articleTable.getCurrentRow()},currentChange:function(t){this.articleTable.selectItem=t},selectionChange:function(t){this.articleTable.multipleSelection=t},resetForm:function(){this.categoryList=[],this.tagList=[],this.categorySelectList=[],this.tagSelectList=[],this.articleForm={title:"",content:"",view_count:0,last_modify_date:"",_add_time_str:""}},addBtn:function(){this.resetForm(),this.getCategoryAndTagList(),this.showArticle=!0},updateBtn:function(t){var e=t.item;this.resetForm(),this.getCategoryAndTagList(e),console.log(e)},hightlightCategory:function(t){for(var e=0;e<this.categoryList.length;e++)for(var i=0;i<t.length;i++)this.categoryList[e]._id==t[i]._id&&(this.categoryList[e].type="");return this.categorySelectList=t,t},hightlightTag:function(t){for(var e=0;e<this.tagList.length;e++)for(var i=0;i<t.length;i++)this.tagList[e]._id==t[i]._id&&(this.tagList[e].type="");return this.tagSelectList=t,t},deleteBtn:function(t){var e=t.item,i=t.deleteFn;i({action:"admin/article/sys/delete",data:{_id:e._id}})}},watch:{},filters:{},computed:{}};e.default=o}}]);