(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{178:function(t,e,n){"use strict";n.d(e,"a",(function(){return _t}));var r=n(90),c=n(267),o=n(15),i=n(61),a=Object(i.b)({name:"coffee",initialState:{amount:0,water:0,ratio:15,isWater:!1},reducers:{updateAmount:function(t,e){t.amount=e.payload},updateWater:function(t,e){t.water=e.payload},updateRatio:function(t,e){t.ratio=e.payload},updateIsWater:function(t){t.isWater=!t.isWater},calculateAmount:function(t,e){t.amount=Math.round(e.payload/t.ratio)},calculateWater:function(t,e){t.water=Math.round(e.payload*t.ratio)},calculateIceCoffeeAmount:function(t,e){t.amount=Math.round(e.payload/t.ratio*2)},calculateIceCoffeeWater:function(t,e){t.water=Math.round(e.payload*t.ratio/2)}}}),u=a.actions,s=u.updateIsWater,l=u.updateWater,d=u.updateRatio,j=u.updateAmount,b=u.calculateAmount,g=u.calculateWater,f=u.calculateIceCoffeeWater,x=u.calculateIceCoffeeAmount,O=a.reducer,p=Object(i.b)({name:"screen",initialState:{nowScreen:"normal"},reducers:{changeScreen:function(t,e){t.nowScreen=e.payload}}}),h=p.actions.changeScreen,m=p.reducer,k=Object(i.a)({reducer:{coffee:O,screen:m}}),y=n(5),w=n.n(y),T=n(8),S=n.n(T),C=n(7),v=n.n(C),B=n(253),R=n(264),I=n(112),A=n(0);function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=n(29);function z(){return Object(P.a)()}var L=n(262),W=n(254),E=n(255),N=n(83),F=n(263),M=n(51),K=n(258),J=n(259),G=n(260),H=n(261),q={light:{text:"#333",background:"#fff",tint:"#333",tabIconDefault:"#ccc",tabIconSelected:"#333"},dark:{text:"#fff",background:"#333",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"},toggleSwitch:{track:"#fff",trueTrack:"#56DE03",falseTrack:"#DDDDDD"},inputView:{wText:"#fff",dText:"#333",wBackground:"rgba(168, 168, 168, 0.09)",dBackground:"rgba(216, 216, 216, 0.09)"},timerButtonLight:{startText:"rgb(52, 199, 89)",startBackground:"rgba(52, 199, 89, 0.4)",startBorder:"rgba(52, 199, 89, 0.3)",stopText:"rgba(255, 59, 48, 0.7)",stopBackground:"rgba(255, 59, 48, 0.4)"},timerButtonDark:{startText:"rgba(48, 209, 88, 0.9)",startBackground:"rgba(48, 209, 88, 0.3)",stopText:"rgba(255, 69, 58, 0.9)",stopBackground:"rgba(255, 69, 58, 0.3)"},timerResetButton:{dText:"#333",wText:"#fff",background:"rgb(208, 208, 208)"}},Q=n(6),U=n(2),X=n(9),Y=n.n(X),Z=n(30),$=n(4),_=n(1),tt=["style","lightColor","darkColor"],et=["style","lightColor","darkColor"];function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(Object(n),!0).forEach((function(e){w()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ct(t,e){var n=z(),r=t[n];return r||q[n][e]}function ot(t){var e=t.style,n=t.lightColor,r=t.darkColor,c=Y()(t,tt),o=ct({light:n,dark:r},"text");return Object(_.jsx)(Z.a,rt({style:[{color:o},e]},c))}function it(t){var e=t.style,n=t.lightColor,r=t.darkColor,c=Y()(t,et),o=ct({light:n,dark:r},"background");return Object(_.jsx)($.a,rt({style:[{backgroundColor:o},e]},c))}var at=n(58),ut=Object(A.memo)((function(t){var e=Object(o.b)(),n=t.title,r="dark"===Object(P.a)(),c=Object(A.useState)(0),i=S()(c,2),a=i[0],u=i[1];return Object(_.jsxs)(it,{children:[Object(_.jsx)(ot,{style:st.title,children:n}),Object(_.jsx)(at.a,{style:[st.input,r?st.dark:st.light],placeholder:"input",maxLength:2,returnKeyType:"done",keyboardType:"numbers-and-punctuation",onChangeText:function(t){return u(Number(t))},onSubmitEditing:function(){e(d(a)),e(l(0)),e(j(0))}})]})})),st=U.a.create({title:{fontSize:20,marginBottom:5},input:{padding:10,marginTop:8,borderRadius:10,width:"95%",fontSize:20},dark:{color:q.inputView.wText,backgroundColor:q.inputView.wBackground},light:{color:q.inputView.dText,backgroundColor:q.inputView.wBackground}}),lt=n(20);function dt(){Object(lt.o)();return Object(_.jsxs)(it,{style:jt.container,children:[Object(_.jsx)(r.a,{style:"ios"===Q.a.OS?"light":"auto"}),Object(_.jsx)(ut,{title:"Ratio (default: 15)"})]})}var jt=U.a.create({container:{flex:1,paddingLeft:15,paddingTop:20},title:{fontSize:20,fontWeight:"bold"},switchButton:{marginTop:15}}),bt=n(154);function gt(t){var e=t.navigation;return Object(_.jsxs)(it,{style:ft.container,children:[Object(_.jsx)(ot,{style:ft.title,children:"\u304d\u3066\u304f\u308c\u3066\u3042\u308a\u304c\u3068\u3046\uff01\u4eca\u65e5\u3082\u30b3\u30fc\u30d2\u30fc\u3092\u697d\u3057\u3082\u3046\uff01"}),Object(_.jsx)(bt.a,{onPress:function(){return e.replace("Root")},style:ft.link,children:Object(_.jsx)(ot,{style:ft.linkText,children:"\u30db\u30fc\u30e0\u3078\u623b\u308b"})})]})}var ft=U.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),xt=n(155),Ot=n.n(xt),pt=n(156),ht=Object(A.memo)((function(){var t=Object(o.b)(),e="dark"===Object(P.a)(),n=Object(A.useState)(0),r=S()(n,2),c=r[0],i=r[1],a=Object(o.c)((function(t){return t.screen.nowScreen}));return Object(_.jsx)(pt.a,{style:mt.container,children:Object(_.jsx)(at.a,{style:[mt.input,e?mt.dark:mt.light],placeholder:"input",maxLength:3,returnKeyType:"done",keyboardType:"numbers-and-punctuation",textAlign:"center",onChangeText:function(t){return i(Number(t))},onSubmitEditing:function(){t(l(c)),"normal"===a||"cafeAuLait"===a?t(b(c)):"iceCoffee"===a&&t(x(c))}})})})),mt=U.a.create({container:{flex:1},title:{fontSize:25,marginBottom:15,left:-5,textAlign:"center"},input:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,fontSize:25,textAlign:"center"},dark:{color:q.inputView.wText,backgroundColor:q.inputView.wBackground},light:{color:q.inputView.dText,backgroundColor:q.inputView.wBackground}}),kt=Object(A.memo)((function(){var t="dark"===Object(P.a)(),e=Object(o.c)((function(t){return t.coffee})).water;return Object(_.jsx)(it,{style:[yt.container,t?yt.dark:yt.light],children:Object(_.jsxs)(ot,{style:yt.text,children:[e," cc"]})})})),yt=U.a.create({container:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,textAlign:"center"},text:{fontSize:25,textAlign:"center"},dark:{color:q.inputView.wText,backgroundColor:q.inputView.wBackground},light:{color:q.inputView.dText,backgroundColor:q.inputView.wBackground}}),wt=Object(A.memo)((function(t){var e=t.title,n=Object(o.c)((function(t){return t.coffee.isWater}));return Object(_.jsxs)(it,{style:Tt.container,children:[Object(_.jsx)(ot,{style:Tt.title,children:e}),n?Object(_.jsx)(it,{children:Object(_.jsx)(kt,{})}):Object(_.jsx)(it,{children:Object(_.jsx)(ht,{})})]})})),Tt=U.a.create({container:{flex:1},title:{fontSize:25,paddingLeft:30,paddingRight:30,paddingBottom:8}}),St=function(){var t=Object(o.b)(),e="dark"===Object(P.a)();return Object(_.jsx)(B.a,{name:"exchange",size:24,color:e?"white":"black",onPress:function(){t(s()),t(j(0)),t(l(0))}})},Ct=Object(A.memo)((function(){var t=Object(o.b)(),e="dark"===Object(P.a)(),n=Object(A.useState)(0),r=S()(n,2),c=r[0],i=r[1],a=Object(o.c)((function(t){return t.screen.nowScreen}));return Object(_.jsx)(at.a,{style:[vt.input,e?vt.dark:vt.light],placeholder:"input",maxLength:3,returnKeyType:"done",keyboardType:"numbers-and-punctuation",textAlign:"center",onChangeText:function(t){return i(Number(t))},onSubmitEditing:function(){t(j(c)),"cafeAuLait"===a||"normal"===a?t(g(c)):"iceCoffee"===a&&t(f(c))}})})),vt=U.a.create({container:{flex:1},input:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,fontSize:25,textAlign:"center"},dark:{color:q.inputView.wText,backgroundColor:q.inputView.wBackground},light:{color:q.inputView.dText,backgroundColor:q.inputView.wBackground}}),Bt=Object(A.memo)((function(){var t="dark"===Object(P.a)(),e=Object(o.c)((function(t){return t.coffee})).amount;return Object(_.jsx)(it,{style:[Rt.container,t?Rt.dark:Rt.light],children:Object(_.jsxs)(ot,{style:Rt.text,children:[e," g"]})})})),Rt=U.a.create({container:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,textAlign:"center"},text:{fontSize:25,textAlign:"center"},dark:{color:q.inputView.wText,backgroundColor:q.inputView.wBackground},light:{color:q.inputView.dText,backgroundColor:q.inputView.wBackground}}),It=Object(A.memo)((function(t){var e=t.title,n=Object(o.c)((function(t){return t.coffee.isWater}));return Object(_.jsxs)(it,{style:At.container,children:[Object(_.jsx)(ot,{style:At.title,children:e}),n?Object(_.jsx)(it,{children:Object(_.jsx)(Ct,{})}):Object(_.jsx)(it,{children:Object(_.jsx)(Bt,{})})]})})),At=U.a.create({container:{flex:1},title:{fontSize:25,paddingLeft:30,paddingRight:30,paddingBottom:8}}),Vt=Object(A.memo)((function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(it,{style:Dt.rowItem,children:Object(_.jsx)(wt,{title:"\u6e6f\u91cf"})}),Object(_.jsx)(St,{}),Object(_.jsx)(it,{style:Dt.rowItem,children:Object(_.jsx)(It,{title:"\u8c46\u91cf"})})]})})),Dt=U.a.create({rowItem:{textAlign:"center",width:150,flex:.5,paddingLeft:30,paddingRight:30}}),Pt=Object(A.memo)((function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(it,{style:zt.rowItem,children:Object(_.jsx)(It,{title:"\u8c46\u91cf"})}),Object(_.jsx)(St,{}),Object(_.jsx)(it,{style:zt.rowItem,children:Object(_.jsx)(wt,{title:"\u6e6f\u91cf"})})]})})),zt=U.a.create({rowItem:{textAlign:"center",width:150,flex:.5,paddingLeft:30,paddingRight:30}}),Lt=Object(A.memo)((function(){var t="dark"===Object(P.a)(),e=Object(o.c)((function(t){return t.coffee.ratio}));return Object(_.jsx)(it,{style:[Wt.container,t?Wt.dark:Wt.light],children:Object(_.jsxs)(ot,{style:Wt.text,children:["Ratio 1 : ",e]})})})),Wt=U.a.create({container:{padding:10,marginTop:8,marginRight:10,borderRadius:10,width:150,height:40,textAlign:"center"},text:{fontSize:20,textAlign:"center"},dark:{color:q.inputView.wText,backgroundColor:q.inputView.wBackground},light:{color:q.inputView.dText,backgroundColor:q.inputView.wBackground}}),Et=n(157),Nt=n(106),Ft=Object(A.memo)((function(){var t="dark"===Object(P.a)(),e=Object(A.useState)(!1),n=S()(e,2),r=n[0],c=n[1],o=Object(A.useState)(!1),i=S()(o,2),a=i[0],u=i[1],s=U.a.create({container:{marginTop:15},sectionStyle:{},button:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginHorizontal:40},buttonText:{fontSize:20,color:t?q.timerResetButton.dText:q.timerResetButton.wText},dark:{color:q.inputView.wText},light:{color:q.inputView.dText},startButton:{width:80,height:80,justifyContent:"center",alignItems:"center",padding:10,borderRadius:100,backgroundColor:t?q.timerButtonDark.startBackground:q.timerButtonLight.startBackground},startText:{color:t?q.timerButtonDark.startText:q.timerButtonLight.startText},stopButton:{backgroundColor:t?q.timerButtonDark.stopBackground:q.timerButtonLight.stopBackground,width:80,height:80,justifyContent:"center",alignItems:"center",padding:10,borderRadius:100},stopText:{color:t?q.timerButtonDark.stopText:q.timerButtonLight.stopText},resetButton:{backgroundColor:q.timerResetButton.background,width:80,height:80,justifyContent:"center",alignItems:"center",padding:10,borderRadius:100}}),l={container:{padding:20,borderRadius:4,width:"98%",alignItems:"center"},text:{fontSize:84,fontWeight:"300",color:t?q.dark.text:q.light.text,margin:20}};return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(it,{style:s.container,children:[Object(_.jsx)(it,{style:[s.sectionStyle,t?s.dark:s.light],children:Object(_.jsx)(Et.Stopwatch,{start:r,reset:a,options:l,style:t?s.dark:s.light})}),Object(_.jsxs)(it,{style:[s.button],children:[Object(_.jsx)(Nt.a,{onPress:function(){c(!1),u(!0)},style:[s.resetButton],children:Object(_.jsx)(ot,{style:[s.buttonText],children:"RESET"})}),Object(_.jsx)(Nt.a,{onPress:function(){c(!r),u(!1)},style:[r?s.stopButton:s.startButton],children:Object(_.jsx)(ot,{style:[s.buttonText,r?s.stopText:s.startText],children:r?"STOP":"START"})})]})]})})}));function Mt(t){Ot()(t);var e=Object(o.c)((function(t){return t.coffee.isWater})),n=Object(o.b)(),r=Object(lt.o)();return Object(A.useEffect)((function(){r&&(n(h("normal")),n(j(0)),n(l(0)))}),[r]),Object(_.jsxs)(it,{style:Kt.container,children:[Object(_.jsx)(it,{style:[Kt.containerItem],children:e?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Pt,{})}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Vt,{})})}),Object(_.jsx)(it,{style:Kt.ratioContainer,children:Object(_.jsx)(Lt,{})}),Object(_.jsx)(it,{children:Object(_.jsx)(Ft,{})})]})}var Kt=U.a.create({container:{flex:1},containerItem:{marginTop:20,padding:10,flexDirection:"row"},ratioContainer:{marginTop:39,padding:10,alignItems:"center"},dark:{color:q.dark.text,backgroundColor:q.dark.background},light:{color:q.light.text,backgroundColor:q.light.background}});function Jt(){var t=Object(o.c)((function(t){return t.coffee.isWater})),e=Object(o.b)(),n=Object(lt.o)();return Object(A.useEffect)((function(){n&&(e(h("cafeAuLait")),e(j(0)),e(l(0)))}),[n]),Object(_.jsxs)(it,{style:Gt.container,children:[Object(_.jsx)(it,{style:[Gt.containerItem],children:t?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Pt,{})}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Vt,{})})}),Object(_.jsx)(it,{style:Gt.ratioContainer,children:Object(_.jsx)(Lt,{})}),Object(_.jsx)(it,{children:Object(_.jsx)(Ft,{})})]})}var Gt=U.a.create({container:{flex:1},containerItem:{marginTop:20,padding:10,flexDirection:"row"},ratioContainer:{marginTop:39,padding:10,alignItems:"center"},dark:{color:q.dark.text,backgroundColor:q.dark.background},light:{color:q.light.text,backgroundColor:q.light.background}}),Ht={prefixes:[n(179).a("/")],config:{screens:{Root:{screens:{Normal:{screens:{NormalScreen:"normal"}},CafeAuLait:{screens:{CafeAuLaitScreen:"cafe au lait"}},IceCoffee:{screens:{IceCoffeeScreen:"Ice coffee"}},Setting:{screens:{SettingScreen:"Setting"}}}},Modal:"modal",NotFound:"*"}}};function qt(){var t=Object(o.c)((function(t){return t.coffee.isWater})),e=Object(o.b)(),n=Object(lt.o)();return Object(A.useEffect)((function(){n&&(e(h("iceCoffee")),e(j(0)),e(l(0)))}),[n]),Object(_.jsxs)(it,{style:Qt.container,children:[Object(_.jsx)(it,{style:[Qt.containerItem],children:t?Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Pt,{})}):Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(Vt,{})})}),Object(_.jsx)(it,{style:Qt.ratioContainer,children:Object(_.jsx)(Lt,{})}),Object(_.jsx)(it,{children:Object(_.jsx)(Ft,{})})]})}var Qt=U.a.create({container:{flex:1},containerItem:{marginTop:20,padding:10,flexDirection:"row"},ratioContainer:{marginTop:39,padding:10,alignItems:"center"},dark:{color:q.dark.text,backgroundColor:q.dark.background},light:{color:q.light.text,backgroundColor:q.light.background}});function Ut(t){var e=t.colorScheme;return Object(_.jsx)(W.a,{linking:Ht,theme:"dark"===e?E.a:N.a,children:Object(_.jsx)(Yt,{})})}var Xt=Object(F.a)();function Yt(){return Object(_.jsxs)(Xt.Navigator,{children:[Object(_.jsx)(Xt.Screen,{name:"Root",component:$t,options:{headerShown:!1}}),Object(_.jsx)(Xt.Screen,{name:"NotFound",component:gt,options:{title:"Oops!"}}),Object(_.jsx)(Xt.Group,{screenOptions:{presentation:"modal"},children:Object(_.jsx)(Xt.Screen,{name:"Modal",component:dt})})]})}var Zt=Object(L.a)();function $t(){var t=z();return Object(_.jsxs)(Zt.Navigator,{initialRouteName:"Normal",screenOptions:{tabBarActiveTintColor:q[t].tint},children:[Object(_.jsx)(Zt.Screen,{name:"Normal",component:Mt,options:function(e){var n=e.navigation;return{title:"Coffee",tabBarIcon:function(t){var e=t.color;return Object(_.jsx)(K.a,{name:"coffee",size:24,color:e})},headerRight:function(){return Object(_.jsx)(M.a,{onPress:function(){return n.navigate("Modal")},style:function(t){return{opacity:t.pressed?.5:1}},children:Object(_.jsx)(J.a,{name:"setting",size:25,color:q[t].text,style:{marginRight:15}})})}}}}),Object(_.jsx)(Zt.Screen,{name:"CafeAuLait",component:Jt,options:function(e){var n=e.navigation;return{title:"Cafe Au Lait",tabBarIcon:function(t){var e=t.color;return Object(_.jsx)(G.a,{name:"ios-cafe-outline",size:30,color:e})},headerRight:function(){return Object(_.jsx)(M.a,{onPress:function(){return n.navigate("Modal")},style:function(t){return{opacity:t.pressed?.5:1}},children:Object(_.jsx)(J.a,{name:"setting",size:25,color:q[t].text,style:{marginRight:15}})})}}}}),Object(_.jsx)(Zt.Screen,{name:"IceCoffee",component:qt,options:function(e){var n=e.navigation;return{title:"Ice Coffee",tabBarIcon:function(t){var e=t.color;return Object(_.jsx)(H.a,{name:"cup-water",size:24,color:e})},headerRight:function(){return Object(_.jsx)(M.a,{onPress:function(){return n.navigate("Modal")},style:function(t){return{opacity:t.pressed?.5:1}},children:Object(_.jsx)(J.a,{name:"setting",size:25,color:q[t].text,style:{marginRight:15}})})}}}})]})}function _t(){var t=function(){var t=Object(A.useState)(!1),e=S()(t,2),r=e[0],c=e[1];return Object(A.useEffect)((function(){v.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,I.b(),t.next=4,v.a.awrap(R.b(D(D({},B.a.font),{},{"space-mono":n(208)})));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.warn(t.t0);case 9:return t.prev=9,c(!0),I.a(),t.finish(9);case 13:case"end":return t.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}(),e=z();return t?Object(_.jsx)(o.a,{store:k,children:Object(_.jsxs)(c.b,{children:[Object(_.jsx)(Ut,{colorScheme:e}),Object(_.jsx)(r.a,{})]})}):null}},183:function(t,e,n){t.exports=n(246)},208:function(t,e,n){t.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},228:function(t,e){}},[[183,1,2]]]);
//# sourceMappingURL=app.f13bb4bb.chunk.js.map