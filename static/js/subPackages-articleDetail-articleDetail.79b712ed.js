(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["subPackages-articleDetail-articleDetail"],{9830:function(t,e,i){"use strict";i.r(e);var n=i("e11a"),a=i("fd3d");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);var c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"25b609e3",null,!1,n["a"],void 0);e["default"]=l.exports},aa45:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("d401"),i("25f0");var a=n(i("cc4f")),o=i("7231"),c={components:{comment:a.default},data:function(){return{mode:"square",scrollTop:0,iconStyle:{fontSize:"32rpx",color:"#2979ff"},articleDetail:{},commentList:[],articleId:"",commentForm:{content:""}}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onReady:function(){},onLoad:function(t){var e=this;this.articleId=t.id;var i={pageIndex:1,pageSize:1,articleId:this.articleId};vk.callFunction({url:"client/article/kh/getList",title:"",data:i}).then((function(t){0==t.code&&(e.articleDetail=t.rows[0],e.getCommentList(),e.articleDetail.tags.forEach((function(t,i){t.color=e.getRandomColor()})),e.articleDetail.categories.forEach((function(t,i){t.color=e.getRandomColor()})))}))},methods:{getCommentList:function(){var t=this;vk.callFunction({url:"client/comment/kh/getComment",title:"",data:{articleId:this.articleId}}).then((function(e){0==e.code&&(t.commentList=e.rows)}))},goTagSelect:function(t,e){this.$u.route({url:"pages/archives/archivesSelect",params:{name:t.name,type:e}})},refreshList:function(){this.getCommentList()},commentSubmit:function(){var t=this,e={isLike:0,likeNum:0,articleId:this.articleId,content:this.commentForm.content};vk.callFunction({url:"client/comment/kh/addComment",title:"",data:e}).then((function(e){0==e.code&&(t.getCommentList(),t.commentForm.content="")}))},calcComments:function(t){return t=t||[],(0,o.calcCommentsCount)(t).toString()},getRandomColor:function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)}}};e.default=c},e11a:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("92f9").default,uTag:i("c49a").default,uParse:i("14da").default,uForm:i("03f9").default,uFormItem:i("8806").default,uInput:i("915d").default,uButton:i("2f20").default,uBackTop:i("22a7").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"app-article content"},[i("v-uni-view",{staticClass:"post-header"},[i("v-uni-view",{staticClass:"post-title"},[t._v(t._s(t.articleDetail.title))]),i("v-uni-view",{staticClass:"article-desc"},[i("v-uni-view",{staticClass:"post-time"},[i("u-icon",{attrs:{name:"star-fill",size:"34",color:""}}),t._v("Posted on"),i("v-uni-text",{staticClass:"time"},[t._v(t._s(t.articleDetail.createdAt?t.articleDetail.createdAt.slice(0,10):""))])],1),i("v-uni-view",{staticClass:"list-item-others"},[i("v-uni-text",{staticClass:"splitLine"}),i("u-icon",{attrs:{name:"tags-fill",size:"34",color:""}}),t._l(t.articleDetail.tags,(function(e,n){return i("u-tag",{key:n,staticStyle:{"margin-left":"10rpx"},attrs:{color:"#fff",size:"mini","border-color":e.color,"bg-color":e.color,text:e.name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTagSelect(e,"tag")}}})})),i("v-uni-text",{staticClass:"splitLine"}),i("u-icon",{attrs:{name:"bookmark-fill",size:"34",color:""}}),t._l(t.articleDetail.categories,(function(e,n){return i("u-tag",{key:e.name,staticStyle:{"margin-left":"10rpx"},attrs:{color:"#fff",size:"mini","border-color":e.color,"bg-color":e.color,text:e.name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTagSelect(e,"category")}}})})),i("v-uni-text",{staticClass:"splitLine"}),i("u-icon",{attrs:{name:"chat-fill",size:"34",color:"",label:t.calcComments(t.articleDetail.comments)}}),i("u-icon",{attrs:{name:"eye-fill",size:"34",color:"",label:t.articleDetail.viewCount?t.articleDetail.viewCount.toString():0}})],2)],1)],1),i("v-uni-view",{staticClass:"article-detail"},[i("u-parse",{attrs:{html:t.articleDetail.content,"use-anchor":!0}})],1),i("v-uni-view",{staticClass:"comment"},[i("u-form",{ref:"commentForm",attrs:{model:t.commentForm,"label-width":"0"}},[i("u-form-item",[i("u-input",{attrs:{type:"textarea",border:!0,autoHeight:!0},model:{value:t.commentForm.content,callback:function(e){t.$set(t.commentForm,"content",e)},expression:"commentForm.content"}})],1)],1),i("u-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.commentSubmit.apply(void 0,arguments)}}},[t._v("提交评论")]),i("comment",{attrs:{commentList:t.commentList,articleId:t.articleId},on:{refreshList:function(e){arguments[0]=e=t.$handleEvent(e),t.refreshList.apply(void 0,arguments)}}})],1),i("u-back-top",{attrs:{mode:t.mode,"scroll-top":t.scrollTop,"icon-style":t.iconStyle}})],1)},o=[]},fd3d:function(t,e,i){"use strict";i.r(e);var n=i("aa45"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);