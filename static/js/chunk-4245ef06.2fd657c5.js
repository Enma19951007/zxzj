(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4245ef06"],{"081f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("my-header",{attrs:{title:"口语跟读",isBack:""}}),s("div",{staticStyle:{height:"50px"}}),s("div",{staticClass:"head-container"},[s("div",{staticClass:"head-left"},[t._v("待完成：")]),s("div",{staticClass:"head-left-sp"},[t._v(t._s(t.questionNumber))]),s("div",{staticClass:"head-right"},[t._v(t._s(t.time))])]),t._m(0),s("div",{staticClass:"ward-container"},[s("div",{staticClass:"ward-item"},[t._v("What colour's your new dress?")]),s("div",{staticClass:"tips-item",on:{click:function(e){t.showValue=!t.showValue}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showValue,expression:"showValue"}],staticClass:"tips-item-value"},[t._v("你的新连衣裙是什么颜色的？")]),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.showValue,expression:"!showValue"}],attrs:{name:"arrow-down"}}),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.showValue,expression:"showValue"}],attrs:{name:"arrow-up"}}),s("span",[t._v("显示解释")])],1)]),s("div",{staticClass:"button-container"},[s("div",{staticClass:"button-item"},[s("div",{staticClass:"sound-item",on:{click:function(e){return t.clickMethod(1)}}},[s("van-icon",{staticStyle:{"margin-top":"10px"},attrs:{name:"volume-o",color:"#fff",size:"30px"}})],1),s("div",{staticClass:"radio-item",on:{click:function(e){return t.clickMethod(2)}}},[s("van-icon",{staticStyle:{"margin-top":"20px"},attrs:{name:"music-o",color:"#fff",size:"30px"}})],1),s("div",{staticClass:"go-item",on:{click:function(e){return t.clickMethod(3)}}},[s("van-icon",{staticStyle:{"margin-top":"10px"},attrs:{name:"arrow",color:"#fff",size:"30px"}})],1)])])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img-container"},[i("img",{attrs:{src:s("8492"),alt:""}})])}],a=s("e725"),o={name:"speak",components:{myHeader:a["a"]},data:function(){return{questionNumber:12,time:"00:00",showValue:!1,currentTime:null,startTime:null}},mounted:function(){var t=this;this.startTime=new Date,this.currentTime=this.getNow(),setInterval(function(){t.currentTime!=t.getNow()&&(t.currentTime=t.getNow(),t.time=t.getNewSecond())},200)},methods:{clickMethod:function(t){this.$toast("触发事件"+t)},getNow:function(){return(new Date).getSeconds()},getNewSecond:function(){var t=new Date,e=new Date(t-this.startTime);return this.trimTime(e.getMinutes(),e.getSeconds())},trimTime:function(t,e){return t<10&&(t="0"+t),e<10&&(e="0"+e),t+":"+e}}},c=o,r=(s("5f87"),s("2877")),l=Object(r["a"])(c,i,n,!1,null,"4405a7a8",null);e["default"]=l.exports},"5f87":function(t,e,s){"use strict";var i=s("c274"),n=s.n(i);n.a},"689b":function(t,e,s){"use strict";var i=s("7b10"),n=s.n(i);n.a},"7b10":function(t,e,s){},8492:function(t,e,s){t.exports=s.p+"static/img/speak1.48d1fbf3.png"},c274:function(t,e,s){},e725:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-container"},[t.isBack?s("span",{staticClass:"title-back",on:{click:function(e){return t.goBack()}}},[s("van-icon",{attrs:{name:"arrow-left"}})],1):t._e(),s("span",{staticClass:"title-CSS",on:{click:function(e){return t.chooseList(t.isList)}}},[t._v("\n    "+t._s(t.title)+"\n    "),t.isList?s("van-icon",{attrs:{size:"20px",name:"arrow-down"}}):t._e()],1),s("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}})],1)},n=[],a={name:"myHeader",props:{title:String,isBack:{type:Boolean,default:!1},isList:{type:Boolean,default:!1},actions:{type:Array,default:function(){return[]}}},data:function(){return{showList:!1}},methods:{goBack:function(){this.$router.go(-1)},chooseList:function(t){t&&(this.showList=!0)},onSelect:function(t){this.$emit("chooseItem",t),this.showList=!1}}},o=a,c=(s("689b"),s("2877")),r=Object(c["a"])(o,i,n,!1,null,"0a98e707",null);e["a"]=r.exports}}]);