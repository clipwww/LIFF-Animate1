(window.webpackJsonp=window.webpackJsonp||[]).push([["page-1"],{4541:function(e,t,n){"use strict";n.r(t);var r,i=n("7a23"),a=Object(i.P)("data-v-39e49487"),c=a((function(e,t,n,r,c,o){var l=Object(i.D)("DeafultList"),u=Object(i.D)("Tab"),d=Object(i.D)("Search"),s=Object(i.D)("Tabs");return Object(i.w)(),Object(i.e)(s,{class:"mt-2",type:"card",active:r.mode,"onUpdate:active":t[1]||(t[1]=function(e){return r.mode=e}),"offset-top":"8px",sticky:"",ellipsis:""},{default:a((function(){return[Object(i.i)(u,{title:"列表",name:"list"},{default:a((function(){return[Object(i.i)(l)]})),_:1}),Object(i.i)(u,{title:"搜尋",name:"search"},{default:a((function(){return[Object(i.i)(d)]})),_:1})]})),_:1},8,["active"])})),o=n("c31d"),l=n("d282"),u=n("ea8e"),d=n("02de"),s=n("db17"),b=n("a8c1"),f=n("22d1"),v=n("b1d2"),j=n("7e3e"),O=n("2eaa"),p=n("93f2"),g=n("a6cd"),y=n("095c"),h=n("3548"),m=n("b070"),x=n("4eda"),S=Object(l.a)("sticky"),w=S[0],k=S[1],B=w({props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},emits:["scroll"],setup:function(e,t){var n=t.emit,r=t.slots,a=Object(i.B)(),c=Object(p.a)(a),o=Object(i.A)({fixed:!1,height:0,transform:0}),l=Object(i.c)((function(){return Object(u.c)(e.offsetTop)})),f=Object(i.c)((function(){if(o.fixed){var t=l.value?l.value+"px":void 0,n=o.transform?"translate3d(0, "+o.transform+"px, 0)":void 0;return{top:t,zIndex:void 0!==e.zIndex?+e.zIndex:void 0,transform:n}}})),v=function(e){n("scroll",{scrollTop:e,isFixed:o.fixed})},j=function(){if(a.value&&!Object(d.a)(a)){o.height=a.value.offsetHeight;var t=e.container,n=Object(b.b)(window),r=Object(b.a)(a.value);if(t){var i=r+t.offsetHeight;if(n+l.value+o.height>i){var c=o.height+n-i;return c<o.height?(o.fixed=!0,o.transform=-(c+l.value)):o.fixed=!1,void v(n)}}n+l.value>r?(o.fixed=!0,o.transform=0):o.fixed=!1,v(n)}};return Object(h.a)("scroll",j,{target:c}),function(e,t){if(s.b&&window.IntersectionObserver){var n=new IntersectionObserver((function(e){t(e[0].intersectionRatio>0)}),{root:document.body}),r=function(){e.value&&n.unobserve(e.value)};Object(i.t)(r),Object(i.r)(r),Object(y.a)((function(){e.value&&n.observe(e.value)}))}}(a,j),function(){var e=o.fixed,t=o.height,n={height:e?t+"px":void 0};return Object(i.i)("div",{ref:a,style:n},[Object(i.i)("div",{class:k({fixed:e}),style:f.value},[null==r.default?void 0:r.default()])])}}}),I=n("471a"),C=Object(l.a)("tab"),T=C[0],z=C[1],D=T({props:{dot:Boolean,type:String,color:String,title:String,badge:[Number,String],isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,renderTitle:Function,inactiveColor:String},setup:function(e){var t=Object(i.c)((function(){var t={},n=e.type,r=e.color,i=e.disabled,a=e.isActive,c=e.activeColor,o=e.inactiveColor;r&&"card"===n&&(t.borderColor=r,i||(a?t.backgroundColor=r:t.color=r));var l=a?c:o;return l&&(t.color=l),t})),n=function(){var t,n=Object(i.i)("span",{class:z("text",{ellipsis:!e.scrollable})},[e.renderTitle?e.renderTitle():e.title]);return e.dot||Object(s.c)(e.badge)&&""!==e.badge?Object(i.i)(I.a,{dot:e.dot,content:e.badge},"function"==typeof(t=n)||"[object Object]"===Object.prototype.toString.call(t)&&!Object(i.n)(t)?n:{default:function(){return[n]}}):n};return function(){return Object(i.i)("div",{role:"tab",class:[z({active:e.isActive,disabled:e.disabled})],style:t.value,"aria-selected":e.isActive},[n()])}}}),N=n("5596"),L=Object(l.a)("tabs"),R=L[0],A=L[1],_=R({props:{inited:Boolean,animated:Boolean,swipeable:Boolean,lazyRender:Boolean,count:{type:Number,required:!0},duration:{type:[Number,String],required:!0},currentIndex:{type:Number,required:!0}},emits:["change"],setup:function(e,t){var n=t.emit,r=t.slots,a=Object(i.B)(),c=function(e){n("change",e)},o=function(){var t,n=null==r.default?void 0:r.default();return e.animated||e.swipeable?Object(i.i)(N.b,{ref:a,loop:!1,class:A("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:c},"function"==typeof(t=n)||"[object Object]"===Object.prototype.toString.call(t)&&!Object(i.n)(t)?n:{default:function(){return[n]}}):n},l=function(t){var n=a.value;n&&n.state.active!==t&&n.swipeTo(t,{immediate:!e.inited})};return Object(i.L)((function(){return e.currentIndex}),l),Object(i.u)((function(){l(e.currentIndex)})),function(){return Object(i.i)("div",{class:A("content",{animated:e.animated||e.swipeable})},[o()])}}}),V=Object(l.a)("tabs"),P=V[0],q=V[1],H=P({props:{color:String,border:Boolean,sticky:Boolean,animated:Boolean,swipeable:Boolean,scrollspy:Boolean,background:String,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},ellipsis:{type:Boolean,default:!0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},lazyRender:{type:Boolean,default:!0},swipeThreshold:{type:[Number,String],default:5}},emits:["click","change","scroll","disabled","rendered","update:active"],setup:function(e,t){var n,a,c,o,l=t.emit,S=t.slots,w=Object(i.B)(),k=Object(i.B)(),I=Object(i.B)(),C=Object(O.a)(),T=Object(p.a)(w),z=(o=Object(i.B)([]),Object(i.s)((function(){o.value=[]})),[o,function(e){return function(t){o.value[e]=t}}]),N=z[0],L=z[1],R=Object(g.a)("vanTabs"),A=R.children,V=R.linkChildren,P=Object(i.A)({inited:!1,position:"",currentIndex:-1,lineStyle:{backgroundColor:e.color}}),H=Object(i.c)((function(){return A.length>e.swipeThreshold||!e.ellipsis})),W=Object(i.c)((function(){return{borderColor:e.color,background:e.background}})),$=function(e,t){var n;return null!=(n=e.name)?n:t},F=Object(i.c)((function(){var e=A[P.currentIndex];if(e)return $(e,P.currentIndex)})),U=Object(i.c)((function(){return Object(u.c)(e.offsetTop)})),G=Object(i.c)((function(){return e.sticky?U.value+n:0})),M=function(t){var n=k.value,i=N.value;if(H.value&&i&&i[P.currentIndex]){var a=i[P.currentIndex].$el;!function(e,t,n){Object(f.a)(r);var i=0,a=e.scrollLeft,c=0===n?1:Math.round(1e3*n/16);!function n(){e.scrollLeft+=(t-a)/c,++i<c&&(r=Object(f.d)(n))}()}(n,a.offsetLeft-(n.offsetWidth-a.offsetWidth)/2,t?0:+e.duration)}},J=function(){var t=P.inited;Object(i.p)((function(){var n=N.value;if(n&&n[P.currentIndex]&&"line"===e.type&&!Object(d.a)(w.value)){var r=n[P.currentIndex].$el,i=e.lineWidth,a=e.lineHeight,c=r.offsetLeft+r.offsetWidth/2,o={width:Object(u.a)(i),backgroundColor:e.color,transform:"translateX("+c+"px) translateX(-50%)"};if(t&&(o.transitionDuration=e.duration+"s"),Object(s.c)(a)){var l=Object(u.a)(a);o.height=l,o.borderRadius=l}P.lineStyle=o}}))},X=function(t){var n=function(e){for(var t=e<P.currentIndex?-1:1;e>=0&&e<A.length;){if(!A[e].disabled)return e;e+=t}}(t);if(Object(s.c)(n)){var r=A[n],i=$(r,n),a=null!==P.currentIndex;P.currentIndex=n,i!==e.active&&(l("update:active",i),a&&l("change",i,r.title))}},E=function(e){var t=A.filter((function(t,n){return $(t,n)===e})),n=t[0]?A.indexOf(t[0]):0;X(n)},K=function(t){if(void 0===t&&(t=!1),e.scrollspy){var n=A[P.currentIndex].$el;if(n){var r=Object(b.a)(n,T.value)-G.value;a=!0,function(e,t,n,r){var i=Object(b.b)(e),a=i<t,c=0===n?1:Math.round(1e3*n/16),o=(t-i)/c;!function n(){i+=o,(a&&i>t||!a&&i<t)&&(i=t),Object(b.g)(e,i),a&&i<t||!a&&i>t?Object(f.d)(n):r&&Object(f.d)(r)}()}(T.value,r,t?0:+e.duration,(function(){a=!1}))}}},Q=function(e){c=e.isFixed,l("scroll",e)},Y=function(){return A.map((function(t,n){return Object(i.i)(D,{ref:L(n),dot:t.dot,type:e.type,badge:t.badge,title:t.title,color:e.color,style:t.titleStyle,class:t.titleClass,isActive:n===P.currentIndex,disabled:t.disabled,scrollable:H.value,renderTitle:t.$slots.title,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:function(){!function(t,n){var r=A[n],i=r.title,a=r.disabled,c=$(A[n],n);a?l("disabled",c,i):(Object(j.a)({interceptor:e.beforeChange,args:[c],done:function(){X(n),K()}}),l("click",c,i),Object(m.a)(t))}(t,n)}},null)}))},Z=function(){var t,n,r,a=e.type,c=e.border;return Object(i.i)("div",{ref:I,class:[q("wrap",{scrollable:H.value}),(t={},t[v.e]="line"===a&&c,t)]},[Object(i.i)("div",{ref:k,role:"tablist",class:q("nav",[a,{complete:H.value}]),style:W.value},[null==(n=S["nav-left"])?void 0:n.call(S),Y(),"line"===a&&Object(i.i)("div",{class:q("line"),style:P.lineStyle},null),null==(r=S["nav-right"])?void 0:r.call(S)])])};return Object(i.L)([function(){return e.color},C.width],J),Object(i.L)((function(){return e.active}),(function(e){e!==F.value&&E(e)})),Object(i.L)((function(){return A.length}),(function(){P.inited&&(E(e.active||F.value),J(),Object(i.p)((function(){M(!0)})))})),Object(i.L)((function(){return P.currentIndex}),(function(){M(),J(),c&&!e.scrollspy&&Object(b.f)(Math.ceil(Object(b.a)(w.value)-U.value))})),Object(x.a)({resize:J,scrollTo:function(e){Object(i.p)((function(){E(e),K(!0)}))}}),Object(i.q)(J),Object(y.a)((function(){E(e.active||F.value),Object(i.p)((function(){P.inited=!0,n=Object(b.c)(I.value),M(!0)}))})),Object(h.a)("scroll",(function(){if(e.scrollspy&&!a){var t=function(){for(var e=0;e<A.length;e++)if(Object(b.d)(A[e].$el)>G.value)return 0===e?0:e-1;return A.length-1}();X(t)}}),{target:T.value}),V({emit:l,props:e,setLine:J,currentName:F,scrollIntoView:M}),function(){var t,n;return Object(i.i)("div",{ref:w,class:q([e.type])},[e.sticky?Object(i.i)(B,{container:w.value,offsetTop:U.value,onScroll:Q},(n=t=Z(),"function"==typeof n||"[object Object]"===Object.prototype.toString.call(n)&&!Object(i.n)(n)?t:{default:function(){return[t]}})):Z(),Object(i.i)(_,{count:A.length,inited:P.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:P.currentIndex,onChange:X},{default:function(){return[null==S.default?void 0:S.default()]}})])}}}),W=n("6ba6"),$=n("2bb1");function F(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(i.n)(e)}var U=Object(l.a)("tab"),G=U[0],M=U[1],J=G({props:Object(o.a)({},m.b,{dot:Boolean,name:[Number,String],badge:[Number,String],title:String,titleStyle:null,titleClass:null,disabled:Boolean}),setup:function(e,t){var n=t.slots,r=Object(i.B)(!1),a=Object(W.a)("vanTabs"),c=a.parent,o=a.index;if(!c)throw new Error("[Vant] Tabs: <van-tab> must be used inside <van-tabs>");var l=function(){var t;return null!=(t=e.name)?t:o.value},u=function(){var t=l()===c.currentName.value;return t&&!r.value&&(r.value=!0,c.props.lazyRender&&Object(i.p)((function(){c.emit("rendered",l(),e.title)}))),t};return Object(i.L)((function(){return e.title}),(function(){c.setLine(),c.scrollIntoView()})),function(){var e=c.props,t=e.animated,a=e.swipeable,o=e.scrollspy,l=e.lazyRender;if(n.default||t){var d,s=u(),b=o||s;if(t||a)return Object(i.i)($.a,{role:"tabpanel","aria-hidden":!s,class:M("pane-wrapper",{inactive:!s})},F(d=Object(i.i)("div",{class:M("pane")},[null==n.default?void 0:n.default()]))?d:{default:function(){return[d]}});var f=r.value||o||!l?null==n.default?void 0:n.default():null;return Object(i.N)(Object(i.i)("div",{role:"tabpanel",class:M("pane")},F(f)?f:{default:function(){return[f]}}),[[i.K,b]])}}}}),X=n("95b1"),E=n("4fa3"),K={name:"AgefansList",components:{DeafultList:X.default,Search:E.default,Tabs:H,Tab:J},setup:function(){return{mode:Object(i.B)("list")}}};K.render=c,K.__scopeId="data-v-39e49487",t.default=K},"4fa3":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),i=Object(r.P)("data-v-3565023c");Object(r.z)("data-v-3565023c");var a=Object(r.h)("搜索"),c={class:"text-xs text-gray-500 my-1"},o={class:"text-xs text-gray-500"};Object(r.x)();var l=i((function(e,t,n,l,u,d){var s=Object(r.D)("Button"),b=Object(r.D)("VanSearch"),f=Object(r.D)("Skeleton"),v=Object(r.D)("Cell"),j=Object(r.D)("Image"),O=Object(r.D)("PullRefresh");return Object(r.w)(),Object(r.e)(O,{class:"mt-2",modelValue:e.refreshing,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.refreshing=t}),onRefresh:l.fetchData},{default:i((function(){return[Object(r.i)(b,{modelValue:e.keyword,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.keyword=t}),"show-action":"",placeholder:"請輸入關鍵字",onSearch:l.fetchData},{action:i((function(){return[Object(r.i)(s,{type:"primary",onClick:l.fetchData},{default:i((function(){return[a]})),_:1},8,["onClick"])]})),_:1},8,["modelValue","onSearch"]),e.loading?(Object(r.w)(),Object(r.e)(r.a,{key:0},Object(r.C)(10,(function(e){return Object(r.i)(v,{class:"py-2",key:e},{default:i((function(){return[Object(r.i)(f,{class:"p-0",row:2})]})),_:2},1024)})),64)):(Object(r.w)(!0),Object(r.e)(r.a,{key:1},Object(r.C)(e.list,(function(e){return Object(r.w)(),Object(r.e)(v,{key:e.id,title:e.title,size:"large","is-link":"",center:"",to:{name:"AgefansDetails",params:{id:e.id}}},{icon:i((function(){return[Object(r.i)(j,{src:e.imgUrl,class:"w-16 mr-2"},null,8,["src"])]})),label:i((function(){return[Object(r.i)("div",null,Object(r.G)(e.originName),1),Object(r.i)("div",c,"類型: "+Object(r.G)(e.type),1),Object(r.i)("div",o,"放送日: "+Object(r.G)(e.dateAired),1)]})),_:2},1032,["title","to"])})),128))]})),_:1},8,["modelValue","onRefresh"])})),u=(n("96cf"),n("5530")),d=n("1da1"),s=n("44bf"),b=n("7d5e"),f=n("58e6"),v=n("7744"),j=n("c31d"),O=n("d282"),p=n("b1d2"),g=n("b070"),y=n("ad06"),h=n("543e");function m(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!Object(r.n)(e)}var x=Object(O.a)("button"),S=x[0],w=x[1],k=S({props:Object(j.a)({},g.b,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},nativeType:{type:String,default:"button"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),emits:["click"],setup:function(e,t){var n=t.emit,i=t.slots,a=Object(g.c)(),c=function(){return e.loading?i.loading?i.loading():Object(r.i)(h.a,{class:w("loading"),size:e.loadingSize,type:e.loadingType,color:"currentColor"},null):e.icon?Object(r.i)(y.a,{name:e.icon,class:w("icon"),classPrefix:e.iconPrefix},null):void 0},o=function(){var t;if(t=e.loading?e.loadingText:i.default?i.default():e.text)return Object(r.i)("span",{class:w("text")},m(t)?t:{default:function(){return[t]}})},l=function(){var t=e.color,n=e.plain;if(t){var r={};return r.color=n?t:"white",n||(r.background=t),-1!==t.indexOf("gradient")?r.border=0:r.borderColor=t,r}},u=function(t){e.loading||e.disabled||(n("click",t),a())};return function(){var t,n,i=e.tag,a=e.type,d=e.size,s=e.block,b=e.round,f=e.plain,v=e.square,j=e.loading,O=e.disabled,g=e.hairline,y=e.nativeType,h=e.iconPosition,x=[w([a,d,{plain:f,block:s,round:b,square:v,loading:j,disabled:O,hairline:g}]),(n={},n[p.c]=g,n)];return Object(r.i)(i,{type:y,class:x,style:l(),disabled:O,onClick:u},m(t=Object(r.i)("div",{class:w("content")},["left"===h&&c(),o(),"right"===h&&c()]))?t:{default:function(){return[t]}})}}}),B=n("d961"),I=(n("0613"),n("08ba")),C={components:{VanSearch:B.a,Button:k,Cell:v.b,PullRefresh:f.a,Skeleton:b.a,Image:s.a},setup:function(){var e=Object(r.A)({keyword:"",list:[],refreshing:!1,loading:!1});function t(){return(t=Object(d.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.keyword){t.next=2;break}return t.abrupt("return");case 2:return e.refreshing=!1,e.loading=!0,t.next=6,I.a.getList(e.keyword);case 6:if(n=t.sent,e.loading=!1,n.success){t.next=10;break}return t.abrupt("return");case 10:e.list=n.items;case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(u.a)(Object(u.a)({},Object(r.H)(e)),{},{fetchData:function(){return t.apply(this,arguments)}})}};C.render=l,C.__scopeId="data-v-3565023c",t.default=C}}]);