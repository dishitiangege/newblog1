(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages_plugs-system-role-list"],{"03aa":function(e,t,n){"use strict";var o;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af"),n("a434"),n("c975");var a=uni.vk,i={props:{value:{Type:Object,default:function(){return{show:!1,mode:"",item:""}}}},data:function(){return{data:{treeData:[],checkedKeys:[],nodeKey:"menu_id"},page:{title:"菜单赋予",submitText:"确定",cancelText:"关闭",showCancel:!0,top:"7vh",width:"800px",loading:!1},form1:{data:{role_id:"",reset:!0,menuList:[],addPermission:!0},props:{action:"admin/system/role/sys/bindMenu",columns:[{key:"addPermission",title:"同时赋予菜单内置权限",type:"switch"},{key:"menuList",title:"菜单列表",type:"text",showLabel:!1}],rules:{},labelWidth:"160px",beforeAction:function(e){for(var t=o.$refs.tree.getCheckedKeys(),n=o.$refs.tree.getHalfCheckedKeys(),i=t.concat(n),r=0;r<i.length;r++)a.pubfn.isNull(i[r])&&(i.splice(r,1),r--);return e.menuList=i,e}}}}},mounted:function(){o=this,o.init()},methods:{init:function(){var e=o,t=e.value;o._input(t)},_input:function(e){o.$emit("input",e)},onOpen:function(){o=this;var e=o,t=e.value,n=void 0===t?{}:t,i=n.item,r=i.role_id,l=i.role_name,s=i.menu,c=void 0===s?[]:s;o.page.title="菜单赋予（".concat(l,"）"),o.form1.data.role_id=r,o.form1.data.menuList=c,o.page.loading=!0,a.callFunction({url:"admin/system/menu/sys/getAll",data:{},success:function(e){var t=[{label:"全选",menu_id:"",children:e.rows}];o.data.treeData=t;var n=a.pubfn.copyObject(c);for(var i in e.list){var r=e.list[i],l=n.indexOf(r.parent_id);l>-1&&n.splice(l,1)}o.data.checkedKeys=n,o.$refs.tree.setCheckedKeys(n)},complete:function(){o.page.loading=!1}})},onClose:function(){o.resetForm()},onFormSuccess:function(){o.close(),o.$emit("success")},open:function(){var e=o,t=e.value;t.show=!0,o._input(t)},close:function(){var e=o,t=e.value;t.show=!1,o._input(t)},resetForm:function(){o.$refs.form1.resetForm()}},watch:{"value.show":{handler:function(e,t){e?this.onOpen():this.onClose()}}},filters:{},computed:{}};t.default=i},"1bd8":function(e,t,n){"use strict";n.r(t);var o=n("e34b"),a=n("6bc4");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r=n("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"4261a22c",null,!1,o["a"],void 0);t["default"]=l.exports},4697:function(e,t,n){"use strict";var o=n("fdef"),a=n.n(o);a.a},5607:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page-body"},[n("vk-data-table-query",{attrs:{columns:e.queryForm1.columns},on:{search:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.queryForm1.formData,callback:function(t){e.$set(e.queryForm1,"formData",t)},expression:"queryForm1.formData"}}),n("v-uni-view",{staticClass:"vk-table-button-box"},[n("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-circle-plus-outline"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBtn.apply(void 0,arguments)}}},[e._v("添加")]),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-s-tools",disabled:!e.table1.selectItem},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPermissionBtn.apply(void 0,arguments)}}},[e._v("权限赋予")]),n("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-s-tools",disabled:!e.table1.selectItem},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMenu.apply(void 0,arguments)}}},[e._v("菜单赋予")])],1),n("vk-data-table",{ref:"table1",attrs:{action:e.table1.action,columns:e.table1.columns,"query-form-param":e.queryForm1,"right-btns":["detail_auto","update","delete"],selection:!1,"row-no":!0,pagination:!0},on:{update:function(t){arguments[0]=t=e.$handleEvent(t),e.updateBtn.apply(void 0,arguments)},delete:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteBtn.apply(void 0,arguments)},"current-change":function(t){arguments[0]=t=e.$handleEvent(t),e.currentChange.apply(void 0,arguments)},"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}}),n("vk-data-dialog",{attrs:{title:e.form1.props.title,width:"500px",mode:"form"},model:{value:e.form1.props.show,callback:function(t){e.$set(e.form1.props,"show",t)},expression:"form1.props.show"}},[n("vk-data-form",{attrs:{rules:e.form1.props.rules,action:e.form1.props.action,"form-type":e.form1.props.formType,columns:e.form1.props.columns,"label-width":"80px"},on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.form1.props.show=!1,e.refresh()}},model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1),n("bindPermission",{on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh.apply(void 0,arguments)}},model:{value:e.formDatas.bindPermission,callback:function(t){e.$set(e.formDatas,"bindPermission",t)},expression:"formDatas.bindPermission"}}),n("bindMenu",{on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.refresh.apply(void 0,arguments)}},model:{value:e.formDatas.bindMenu,callback:function(t){e.$set(e.formDatas,"bindMenu",t)},expression:"formDatas.bindMenu"}})],1)},a=[]},"6bc4":function(e,t,n){"use strict";n.r(t);var o=n("03aa"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},7044:function(e,t,n){"use strict";n.r(t);var o=n("5607"),a=n("deda");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("4697");var r=n("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"36e4c4d0",null,!1,o["a"],void 0);t["default"]=l.exports},"93d8":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"[data-v-36e4c4d0] .el-tree-node__content .el-checkbox{margin-right:8px}",""]),e.exports=t},9840:function(e,t,n){"use strict";n("7a82");var o=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("ddb0"),n("99af");var a,i=o(n("3835")),r=o(n("b85c")),l=o(n("eacf")),s=o(n("1bd8")),c=uni.vk,u={},d={components:{bindPermission:l.default,bindMenu:s.default},data:function(){return{loading:!1,data:{},table1:{action:"admin/system/role/sys/getList",columns:[{key:"role_id",title:"角色标识",type:"text",width:220},{key:"role_name",title:"角色名称",type:"text",width:130},{key:"comment",title:"备注",type:"text",minWidth:180},{key:"permission",title:"拥有的权限",type:"text",minWidth:290,align:"left",formatter:function(e,t,n,o){var a="";return a="admin"===t.role_id?"系统内置角色 - 拥有所有权限":"admin-lv3"===t.role_id?"系统内置角色 - 拥有除【核弹级】权限外的其他所有权限":"admin-lv2"===t.role_id?"系统内置角色 - 拥有【炸弹级、子弹级】级别的权限":"admin-lv1"===t.role_id?"系统内置角色 - 拥有【子弹级】级别的权限":"query-all"===t.role_id?"系统内置角色 - 拥有所有【查询】分类且非【核弹级】的权限":c.pubfn.isNull(e)?"该角色未赋予任何权限":e,a}},{key:"menu",title:"拥有的菜单",type:"text",minWidth:290,align:"left",formatter:function(e,t,n,o){var a="";return a="admin"===t.role_id?"系统内置角色 - 拥有所有菜单":c.pubfn.isNull(e)?"该角色未赋予任何菜单":e,a}},{key:"stats_count_info",title:"统计信息",type:"html",width:220,align:"left",show:["detail"],formatter:function(e,t,n,o){console.log("val",e);var a="";for(var l in e){switch(l){case"curd_category":a+="分类:&nbsp;&nbsp;";break;case"level":a+="等级:&nbsp;&nbsp;";break;case"match_mode":a+="模式:&nbsp;&nbsp;";break;default:a+="菜单和权限:&nbsp;&nbsp;";break}var s,c=(0,r.default)(e[l].entries());try{for(c.s();!(s=c.n()).done;){var u=(0,i.default)(s.value,2),d=(u[0],u[1]);a+="".concat(d.label," : ").concat(d.count,"个&nbsp;&nbsp;")}}catch(f){c.e(f)}finally{c.f()}a+="<br/>"}return a}},{key:"enable",title:"是否启用",type:"tag",data:[{value:!0,label:"启用",tagType:"success"},{value:!1,label:"禁用",tagType:"danger"}]}],multipleSelection:[],selectItem:""},queryForm1:{formData:{},columns:[{key:"role_id",title:"角色标识",type:"text",width:160,mode:"%%"},{key:"role_name",title:"角色名称",type:"text",width:160,mode:"%%"},{key:"_add_time",title:"添加时间",type:"datetimerange",width:400}]},form1:{data:{enable:!0},props:{action:"",columns:[{key:"role_id",title:"角色标识",type:"text",show:["add"]},{key:"role_name",title:"角色名称",type:"text"},{key:"comment",title:"备注",type:"textarea",maxlength:"99",showWordLimit:!0,autosize:{minRows:2,maxRows:10}},{key:"enable",title:"是否启用",type:"switch"}],rules:{role_id:[{required:!0,message:"角色标识不能为空",trigger:"blur"}],role_name:[{required:!0,message:"角色名称不能为空",trigger:"change"}]},formType:"",show:!1}},formDatas:{}}},onLoad:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=this,c=a.vk,a.options=e,a.init(e)},onReady:function(){},onShow:function(){},onHide:function(){},methods:{init:function(e){u["form1"]=c.pubfn.copyObject(a.form1)},pageTo:function(e){c.navigateTo(e)},resetForm:function(){c.pubfn.resetForm(u,a)},search:function(){a.$refs.table1.query()},refresh:function(){a.$refs.table1.refresh()},getCurrentRow:function(){return a.$refs.table1.getCurrentRow()},currentChange:function(e){a.table1.selectItem=e},selectionChange:function(e){a.table1.multipleSelection=e},addBtn:function(){a.resetForm(),a.form1.props.action="admin/system/role/sys/add",a.form1.props.formType="add",a.form1.props.title="添加",a.form1.props.show=!0},updateBtn:function(e){var t=e.item;a.form1.props.action="admin/system/role/sys/update",a.form1.props.formType="update",a.form1.props.title="编辑",a.form1.props.show=!0,a.form1.data=t},deleteBtn:function(e){var t=e.item,n=e.deleteFn;n({action:"admin/system/role/sys/delete",data:{role_id:t.role_id}})},bindPermissionBtn:function(){var e=a.getCurrentRow();a.formDatas.bindPermission={show:!0,item:e}},bindMenu:function(){var e=a.getCurrentRow();a.formDatas.bindMenu={show:!0,item:e}}},watch:{},filters:{},computed:{}};t.default=d},d02b:function(e,t,n){"use strict";n.r(t);var o=n("d25b"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},d25b:function(e,t,n){"use strict";var o;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af"),n("a434"),n("d3b7"),n("159b"),n("c975");var a=uni.vk,i={props:{value:{Type:Object,default:function(){return{show:!1,mode:"",item:""}}}},data:function(){return{data:{info:{},treeData:[],checkedKeys:[],nodeKey:"permission_id"},page:{title:"权限赋予",submitText:"确定",cancelText:"关闭",showCancel:!0,top:"7vh",width:"800px",loading:!1},form1:{data:{role_id:"",reset:!0,permissionList:[],stats_count_info:{}},props:{action:"admin/system/role/sys/bindPermission",columns:[{key:"permissionList",title:"权限列表",type:"text"}],rules:{},labelWidth:"100px",beforeAction:function(e){for(var t=o.$refs.tree.getCheckedKeys(),n=o.$refs.tree.getHalfCheckedKeys(),i=t.concat(n),r=0;r<i.length;r++)a.pubfn.isNull(i[r])&&(i.splice(r,1),r--);e.permissionList=i;var l=a.pubfn.getData(o.data,"info.stats_count_info.type[0].count",0);"number"!==typeof l&&(l=0);var s=a.pubfn.treeToArray(o.data.treeData,{id:"permission_id",parent_id:"parent_id",children:"children",deleteChildren:!0}),c={curd_category:[{type:0,label:"未分类",count:0},{type:1,label:"增",count:0},{type:2,label:"删",count:0},{type:3,label:"改",count:0},{type:4,label:"查",count:0},{type:5,label:"特殊",count:0}],level:[{type:0,label:"未分类",count:0},{type:1,label:"子弹级",count:0},{type:2,label:"炸弹级",count:0},{type:3,label:"榴弹级",count:0},{type:4,label:"核弹级",count:0}],match_mode:[{type:0,label:"完整路径",count:0},{type:1,label:"通配符",count:0},{type:2,label:"正则表达式",count:0}],type:[{type:0,label:"菜单",count:l},{type:1,label:"权限",count:0}]};return i.forEach((function(e,t,n){var o=a.pubfn.getListItem(s,"permission_id",e);(0===o.curd_category||o.curd_category)&&c["curd_category"][o.curd_category].count++,(0===o.level||o.level)&&c["level"][o.level].count++,(0===o.match_mode||o.match_mode)&&c["match_mode"][o.match_mode].count++,a.pubfn.isNotNull(o.url)&&c["type"][1].count++})),e.stats_count_info=c,e}}}}},mounted:function(){o=this,o.init()},methods:{init:function(){var e=o,t=e.value;o._input(t)},_input:function(e){o.$emit("input",e)},onOpen:function(){o=this;var e=o,t=e.value,n=void 0===t?{}:t,i=n.item,r=i.role_id,l=i.role_name,s=i.permission,c=void 0===s?[]:s;o.page.title="权限赋予（".concat(l,"）"),o.data.info=i,o.form1.data.role_id=r,o.form1.data.permissionList=c,o.page.loading=!0,a.callFunction({url:"admin/system/permission/sys/getAll",data:{},success:function(e){var t=[{label:"全选",permission_id:"",children:e.rows}];o.data.treeData=t;var n=a.pubfn.copyObject(c);for(var i in e.list){var r=e.list[i],l=n.indexOf(r.parent_id);l>-1&&n.splice(l,1)}o.data.checkedKeys=n,o.$refs.tree.setCheckedKeys(n)},complete:function(){o.page.loading=!1}})},onClose:function(){o.resetForm()},onFormSuccess:function(){o.close(),o.$emit("success")},open:function(){var e=o,t=e.value;t.show=!0,o._input(t)},close:function(){var e=o,t=e.value;t.show=!1,o._input(t)},resetForm:function(){o.$refs.form1.resetForm()}},watch:{"value.show":{handler:function(e,t){e?this.onOpen():this.onClose()}}},filters:{},computed:{}};t.default=i},dd02:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-data-dialog",{attrs:{title:e.page.title,top:e.page.top,width:e.page.width,mode:"form"},model:{value:e.value.show,callback:function(t){e.$set(e.value,"show",t)},expression:"value.show"}},[n("vk-data-form",{directives:[{name:"loading",rawName:"v-loading",value:e.page.loading,expression:"page.loading"}],ref:"form1",attrs:{"form-type":e.value.mode,rules:e.form1.props.rules,action:e.form1.props.action,columns:e.form1.props.columns,loading:e.form1.props.loading,labelWidth:e.form1.props.labelWidth,"before-action":e.form1.props.beforeAction,"show-cancel":e.page.showCancel,"cancel-text":e.page.cancelText,"submit-text":e.page.submitText},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.onFormSuccess.apply(void 0,arguments)}},scopedSlots:e._u([{key:"permissionList",fn:function(){return[n("el-tree",{ref:"tree",attrs:{data:e.data.treeData,"node-key":e.data.nodeKey,"default-checked-keys":e.data.checkedKeys,props:{children:"children",label:"label"},"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!0}})]},proxy:!0}]),model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1)},a=[]},deda:function(e,t,n){"use strict";n.r(t);var o=n("9840"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},e34b:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vk-data-dialog",{attrs:{title:e.page.title,top:e.page.top,width:e.page.width,mode:"form"},model:{value:e.value.show,callback:function(t){e.$set(e.value,"show",t)},expression:"value.show"}},[n("vk-data-form",{directives:[{name:"loading",rawName:"v-loading",value:e.page.loading,expression:"page.loading"}],ref:"form1",attrs:{"form-type":e.value.mode,rules:e.form1.props.rules,action:e.form1.props.action,columns:e.form1.props.columns,loading:e.form1.props.loading,labelWidth:e.form1.props.labelWidth,"before-action":e.form1.props.beforeAction,"show-cancel":e.page.showCancel,"cancel-text":e.page.cancelText,"submit-text":e.page.submitText},on:{"update:loading":function(t){arguments[0]=t=e.$handleEvent(t),e.$set(e.form1.props,"loading",t)},success:function(t){arguments[0]=t=e.$handleEvent(t),e.onFormSuccess.apply(void 0,arguments)}},scopedSlots:e._u([{key:"menuList",fn:function(){return[n("el-tree",{ref:"tree",attrs:{data:e.data.treeData,"node-key":e.data.nodeKey,"default-checked-keys":e.data.checkedKeys,props:{children:"children",label:"label"},"show-checkbox":!0,"default-expand-all":!0,"expand-on-click-node":!0}})]},proxy:!0}]),model:{value:e.form1.data,callback:function(t){e.$set(e.form1,"data",t)},expression:"form1.data"}})],1)},a=[]},eacf:function(e,t,n){"use strict";n.r(t);var o=n("dd02"),a=n("d02b");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r=n("f0c5"),l=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"be0afbac",null,!1,o["a"],void 0);t["default"]=l.exports},fdef:function(e,t,n){var o=n("93d8");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("4f06").default;a("db6bda0a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);