(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_plugs-system-menu-list"],{"239e":function(e,t,n){"use strict";n.r(t);var o=n("42c8"),a=n("bae4");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r=n("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"570e5c21",null,!1,o["a"],void 0);t["default"]=s.exports},"42c8":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-data-dialog",{attrs:{title:e.page.title,top:e.page.top,width:e.page.width,mode:"form"},model:{value:e.value.show,callback:function(t){e.$set(e.value,"show",t)},expression:"value.show"}},[n("vk-data-form",{ref:"form1",attrs:{"form-type":e.value.mode,rules:e.form1.props.rules,action:e.form1.props.action,columns:e.form1.props.columns,loading:e.form1.props.loading,labelWidth:e.form1.props.labelWidth,"before-action":e.form1.props.beforeAction,"show-cancel":e.page.showCancel,"cancel-text":e.page.cancelText,"submit-text":e.page.submitText},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.onFormSuccess.apply(void 0,arguments)}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1)},a=[]},4327:function(e,t,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c975"),n("99af");var a,i=o(n("efce")),r=o(n("239e")),s=uni.vk,l={},u={components:{bindPermission:i.default,addMenuByJson:r.default},data:function(){return{loading:!1,data:{},table1:{action:"admin/system/menu/sys/getAll",columns:[{key:"name",title:"菜单名称",type:"html",width:340,align:"left",formatter:function(e,t,n,o){var a=t.icon||"el-icon-tickets";return a.indexOf("vk-icon")>-1&&(a="vk-icon "+a),'<i class="'.concat(a,'" style="margin-right: 10px;"></i><text>').concat(t.name,"</text>")}},{key:"menu_id",title:"菜单唯一标识",type:"text",width:350,align:"left"},{key:"url",title:"菜单URL",type:"text",width:250,align:"left"},{key:"comment",title:"备注",type:"text",width:200,align:"left"},{key:"permission",title:"菜单内置权限表",type:"text",width:120,defaultValue:"无"},{key:"enable",title:"是否启用",type:"tag",defaultValue:!1,data:[{value:!0,label:"启用",tagType:"success"},{value:!1,label:"禁用",tagType:"danger"}]},{key:"hidden_menu",title:"是否隐藏",type:"tag",defaultValue:!1,data:[{value:!0,label:"隐藏",tagType:"danger"},{value:!1,label:"显示",tagType:"success"}]},{key:"sort",title:"排序值",type:"number",width:120},{key:"parent_id",title:"父级菜单Id",type:"text",width:250,align:"left"}],multipleSelection:[],selectItem:""},formDatas:{},queryForm1:{formData:{},columns:[]},form1:{data:{sort:0,enable:!0,url:""},props:{action:"",columns:[{key:"",title:"基础属性",type:"bar-title"},{key:"menu_id",title:"菜单标识",type:"text",tips:"设置一个能表达唯一含义的标识",show:["add"]},{key:"name",title:"菜单名称",type:"text",tips:"设置菜单的名称"},{key:"icon",title:"图标",type:"icon",tips:"设置一个能表达权限含义的图标"},{key:"url",title:"URL",type:"text",tips:"页面路径，本地路径需以 / 开头 网络路径需带http:// 或 https://"},{key:"sort",title:"排序值",type:"number",tips:"越小越显示在前面"},{key:"parent_id",title:"父级菜单",type:"tree-select",tips:"父级的menu_id",action:"admin/system/menu/sys/getAll",props:{list:"rows",value:"menu_id",label:"label",children:"children"}},{key:"comment",title:"备注",type:"textarea",maxlength:"99",showWordLimit:!0,autosize:{minRows:2,maxRows:10},tips:"设置一个备注来更详细的描述此权限的含义"},{key:"enable",title:"是否启用",type:"switch",tips:"当关闭时，菜单将失效，再次启用时，菜单会恢复。"},{key:"hidden_menu",title:"是否隐藏",type:"switch",tips:"当设为true时，菜单不显示在左侧菜单列表中。"}],rules:{menu_id:[{required:!0,message:"菜单标识不能为空",trigger:"blur"},{min:2,max:40,message:"长度在 2 到 40 个字符",trigger:"blur"}],name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],sort:[{type:"number",message:"排序值必须为数字"}]},formType:"",show:!1}}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=this,s=a.vk,a.options=e,a.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){l["form1"]=s.pubfn.copyObject(a.form1)},pageTo:function(e){s.navigateTo(e)},resetForm:function(){s.pubfn.resetForm(l,a)},search:function(){a.$refs.table1.query()},refresh:function(){a.$refs.table1.refresh()},getCurrentRow:function(e){return a.$refs.table1.getCurrentRow(e)},currentChange:function(e){a.table1.selectItem=e},selectionChange:function(e){a.table1.multipleSelection=e},addBtn:function(){a.resetForm(),a.form1.props.action="admin/system/menu/sys/add",a.form1.props.formType="add",a.form1.props.title="添加",a.form1.props.show=!0;var e=a.getCurrentRow();e&&e.menu_id&&a.$set(a.form1.data,"parent_id",e.menu_id)},updateBtn:function(e){var t=e.item;a.form1.props.action="admin/system/menu/sys/update",a.form1.props.formType="update",a.form1.props.title="编辑",a.form1.props.show=!0,a.form1.data=t},formSuccess:function(){if(a.form1.props.show=!1,"update"===a.form1.props.formType){var e=a.getCurrentRow(!0);e.parent_id!==a.form1.data.parent_id?a.refresh():s.pubfn.objectAssign(e,a.form1.data)}else a.refresh()},deleteBtn:function(e){var t=e.item,n=e.deleteFn;n({action:"admin/system/menu/sys/delete",data:{menu_id:t.menu_id}})},bindPermissionBtn:function(){var e=a.getCurrentRow();a.formDatas.bindPermission={show:!0,item:e}},addMenuByJsonBtn:function(){var e=a.getCurrentRow();a.formDatas.addMenuByJson={show:!0,item:e}}},watch:{},filters:{},computed:{}};t.default=u},"6c2fc":function(e,t,n){"use strict";n.r(t);var o=n("4327"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},7817:function(e,t,n){"use strict";n.r(t);var o=n("dd7d"),a=n("6c2fc");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r=n("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"14a4e76c",null,!1,o["a"],void 0);t["default"]=s.exports},"954a":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-data-dialog",{attrs:{title:e.page.title,top:e.page.top,width:e.page.width,mode:"form"},model:{value:e.value.show,callback:function(t){e.$set(e.value,"show",t)},expression:"value.show"}},[n("vk-data-form",{directives:[{name:"loading",rawName:"v-loading",value:e.page.loading,expression:"page.loading"}],ref:"form1",attrs:{"form-type":e.value.mode,rules:e.form1.props.rules,action:e.form1.props.action,columns:e.form1.props.columns,loading:e.form1.props.loading,labelWidth:e.form1.props.labelWidth,"before-action":e.form1.props.beforeAction,"show-cancel":e.page.showCancel,"cancel-text":e.page.cancelText,"submit-text":e.page.submitText},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.onFormSuccess.apply(void 0,arguments)}},scopedSlots:e._u([{key:"permissionList",fn:function(){return[n("el-tree",{ref:"tree",attrs:{data:e.data.treeData,"node-key":e.data.nodeKey,"default-checked-keys":e.data.checkedKeys,props:{children:"children",label:"label"},"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!0}})]},proxy:!0}]),model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1)},a=[]},"99ca":function(e,t,n){"use strict";var o;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("d81d");var a=uni.vk,i={props:{value:{Type:Object,default:function(){return{show:!1,mode:"",item:""}}}},data:function(){return{page:{title:"导入菜单",submitText:"导入",cancelText:"关闭",showCancel:!0,top:"7vh",width:"800px"},form1:{data:{mode:1,jsonType:1},props:{action:"admin/system/menu/sys/adds",columns:[{key:"jsonType",title:"json类型",type:"radio",data:[{value:1,label:"树形结构"},{value:2,label:"数组结构"}]},{key:"parent_id",title:"父级菜单Id",type:"text",showRule:"jsonType=1"},{key:"mode",title:"重复标识是否覆盖",type:"radio",data:[{value:1,label:"覆盖"},{value:2,label:"忽略"}]},{key:"menus",title:"JSON内容",type:"textarea",autosize:{minRows:18,maxRows:18}}],rules:{menus:[{required:!0,message:"不能为空",trigger:"change"}]},formType:"",loading:!1,show:!1,labelWidth:"140px",beforeAction:function(e){try{var t=JSON.parse(e.menus);return"[object Object]"===Object.prototype.toString.call(t)&&(t=[t]),1==e.jsonType&&(t.map((function(t,n){t.parent_id=e.parent_id})),t=a.pubfn.treeToArray(t,{id:"menu_id",parent_id:"parent_id",children:"children"})),{menus:t}}catch(n){return a.toast("json解析失败","none"),console.error(n),!1}}}}}},mounted:function(){o=this,o.init()},methods:{init:function(){var e=o,t=e.value;o._input(t)},_input:function(e){o.$emit("input",e)},onOpen:function(){o=this;var e=o,t=e.value,n=void 0===t?{}:t,a=n.item||{},i=a.menu_id;o.form1.data.parent_id=i},onClose:function(){o.resetForm()},onFormSuccess:function(){o.close(),o.$emit("success")},open:function(){var e=o,t=e.value;t.show=!0,o._input(t)},close:function(){var e=o,t=e.value;t.show=!1,o._input(t)},resetForm:function(){o.$refs.form1.resetForm()},submitForm:function(){o.$refs.form1.submitForm()}},watch:{"value.show":{handler:function(e,t){e?this.onOpen():this.onClose()}}},filters:{},computed:{}};t.default=i},bae4:function(e,t,n){"use strict";n.r(t);var o=n("99ca"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},dd7d:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"vk-table-button-box"},[n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBtn.apply(void 0,arguments)}}},[e._v("添加")]),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-s-tools",disabled:!e.table1.selectItem},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPermissionBtn.apply(void 0,arguments)}}},[e._v("设置内置权限")]),n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addMenuByJsonBtn.apply(void 0,arguments)}}},[e._v("通过JSON批量导入菜单")])],1),n("vk-data-table",{ref:"table1",attrs:{action:e.table1.action,columns:e.table1.columns,"query-form-param":e.queryForm1,"right-btns":["detail_auto","update","delete"],"default-expand-all":!0},on:{update:function(t){arguments[0]=t=e.$handleEvent(t),e.updateBtn.apply(void 0,arguments)},delete:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteBtn.apply(void 0,arguments)},"current-change":function(t){arguments[0]=t=e.$handleEvent(t),e.currentChange.apply(void 0,arguments)},"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}}),n("vk-data-dialog",{attrs:{title:e.form1.props.title,width:"700px",mode:"form"},model:{value:e.form1.props.show,callback:function(t){e.$set(e.form1.props,"show",t)},expression:"form1.props.show"}},[n("vk-data-form",{attrs:{rules:e.form1.props.rules,action:e.form1.props.action,"form-type":e.form1.props.formType,columns:e.form1.props.columns,"label-width":"80px"},on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.formSuccess.apply(void 0,arguments)}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1),n("bindPermission",{on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh.apply(void 0,arguments)}},model:{value:e.formDatas.bindPermission,callback:function(t){e.$set(e.formDatas,"bindPermission",t)},expression:"formDatas.bindPermission"}}),n("addMenuByJson",{on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh.apply(void 0,arguments)}},model:{value:e.formDatas.addMenuByJson,callback:function(t){e.$set(e.formDatas,"addMenuByJson",t)},expression:"formDatas.addMenuByJson"}})],1)},a=[]},de77:function(e,t,n){"use strict";n.r(t);var o=n("e01f"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},e01f:function(e,t,n){"use strict";var o;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af"),n("a434"),n("c975");var a=uni.vk,i={props:{value:{Type:Object,default:function(){return{show:!1,mode:"",item:""}}}},data:function(){return{data:{info:{},treeData:[],checkedKeys:[],nodeKey:"permission_id"},page:{title:"权限赋予",submitText:"确定",cancelText:"关闭",showCancel:!0,top:"7vh",width:"800px",loading:!1},form1:{data:{menu_id:"",reset:!0,permissionList:[]},props:{action:"admin/system/menu/sys/bindPermission",columns:[{key:"permissionList",title:"权限列表",type:"text"}],rules:{},labelWidth:"100px",beforeAction:function(e){for(var t=o.$refs.tree.getCheckedKeys(),n=o.$refs.tree.getHalfCheckedKeys(),i=t.concat(n),r=0;r<i.length;r++)a.pubfn.isNull(i[r])&&(i.splice(r,1),r--);return e.permissionList=i,e}}}}},mounted:function(){o=this,o.init()},methods:{init:function(){var e=o,t=e.value;o._input(t)},_input:function(e){o.$emit("input",e)},onOpen:function(){o=this;var e=o,t=e.value,n=void 0===t?{}:t,i=n.item,r=i.menu_id,s=i.name,l=i.permission,u=void 0===l?[]:l;o.page.title="权限赋予（".concat(s,"）"),o.data.info=i,o.form1.data.menu_id=r,o.form1.data.permissionList=u,o.page.loading=!0,a.callFunction({url:"admin/system/permission/sys/getAll",data:{},success:function(e){var t=[{label:"全选",permission_id:"",children:e.rows}];o.data.treeData=t;var n=a.pubfn.copyObject(u);for(var i in e.list){var r=e.list[i],s=n.indexOf(r.parent_id);s>-1&&n.splice(s,1)}o.data.checkedKeys=n,o.$refs.tree.setCheckedKeys(n)},complete:function(){o.page.loading=!1}})},onClose:function(){o.resetForm()},onFormSuccess:function(){o.close(),o.$emit("success")},open:function(){var e=o,t=e.value;t.show=!0,o._input(t)},close:function(){var e=o,t=e.value;t.show=!1,o._input(t)},resetForm:function(){o.$refs.form1.resetForm()}},watch:{"value.show":{handler:function(e,t){e?this.onOpen():this.onClose()}}},filters:{},computed:{}};t.default=i},efce:function(e,t,n){"use strict";n.r(t);var o=n("954a"),a=n("de77");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r=n("f0c5"),s=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"3114830a",null,!1,o["a"],void 0);t["default"]=s.exports}}]);