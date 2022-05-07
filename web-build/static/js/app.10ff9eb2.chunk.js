(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{178:function(t,e,n){"use strict";n.d(e,"a",(function(){return ee}));var r=n(90),c=n(267),o=n(14),i=n(61),a=Object(i.b)({name:"coffee",initialState:{amount:0,water:0,ratio:15,iceAmount:0,iceWater:0,iceRatio:15,isWater:!1},reducers:{updateAmount:function(t,e){t.amount=e.payload},updateWater:function(t,e){t.water=e.payload},updateRatio:function(t,e){t.ratio=e.payload},updateIsWater:function(t){t.isWater=!t.isWater},calculateAmount:function(t,e){t.amount=Math.round(e.payload/t.ratio)},calculateWater:function(t,e){t.water=Math.round(e.payload*t.ratio)},updateIceAmount:function(t,e){t.iceAmount=e.payload},updateIceWater:function(t,e){t.iceWater=e.payload},calculateIceCoffeeAmount:function(t,e){t.iceAmount=Math.round(e.payload/t.iceRatio*2)},calculateIceCoffeeWater:function(t,e){t.iceWater=Math.round(e.payload*t.iceRatio/2)}}}),u=a.actions,s=u.updateIsWater,l=u.updateWater,d=u.updateRatio,j=u.updateAmount,b=u.updateIceAmount,g=u.updateIceWater,f=u.calculateAmount,x=u.calculateWater,O=u.calculateIceCoffeeWater,p=u.calculateIceCoffeeAmount,h=a.reducer,m=Object(i.b)({name:"screen",initialState:{nowScreen:"normal"},reducers:{changeScreen:function(t,e){t.nowScreen=e.payload}}}),k=m.actions.changeScreen,y=m.reducer,w=Object(i.a)({reducer:{coffee:h,screen:y}}),T=n(5),S=n.n(T),v=n(8),C=n.n(v),B=n(7),R=n.n(B),I=n(253),A=n(264),V=n(112),D=n(0);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){S()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z=n(29);function L(){return Object(z.a)()}var E=n(262),N=n(254),F=n(255),M=n(83),K=n(263),J=n(51),G=n(258),H=n(259),q=n(260),Q=n(261),U={light:{text:"#333",background:"#fff",tint:"#333",tabIconDefault:"#ccc",tabIconSelected:"#333"},dark:{text:"#fff",background:"#333",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"},toggleSwitch:{track:"#fff",trueTrack:"#56DE03",falseTrack:"#DDDDDD"},inputView:{wText:"#fff",dText:"#333",wBackground:"rgba(168, 168, 168, 0.09)",dBackground:"rgba(216, 216, 216, 0.09)"},timerButtonLight:{startText:"rgb(52, 199, 89)",startBackground:"rgba(52, 199, 89, 0.4)",startBorder:"rgba(52, 199, 89, 0.3)",stopText:"rgba(255, 59, 48, 0.7)",stopBackground:"rgba(255, 59, 48, 0.4)"},timerButtonDark:{startText:"rgba(48, 209, 88, 0.9)",startBackground:"rgba(48, 209, 88, 0.3)",stopText:"rgba(255, 69, 58, 0.9)",stopBackground:"rgba(255, 69, 58, 0.3)"},timerResetButton:{dText:"#333",wText:"#fff",background:"rgb(208, 208, 208)"}},X=n(6),Y=n(2),Z=n(9),$=n.n(Z),_=n(30),tt=n(4),et=n(1),nt=["style","lightColor","darkColor"],rt=["style","lightColor","darkColor"];function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(Object(n),!0).forEach((function(e){S()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function it(t,e){var n=L(),r=t[n];return r||U[n][e]}function at(t){var e=t.style,n=t.lightColor,r=t.darkColor,c=$()(t,nt),o=it({light:n,dark:r},"text");return Object(et.jsx)(_.a,ot({style:[{color:o},e]},c))}function ut(t){var e=t.style,n=t.lightColor,r=t.darkColor,c=$()(t,rt),o=it({light:n,dark:r},"background");return Object(et.jsx)(tt.a,ot({style:[{backgroundColor:o},e]},c))}var st=n(58),lt=Object(D.memo)((function(t){var e=Object(o.b)(),n=t.title,r="dark"===Object(z.a)(),c=Object(D.useState)(0),i=C()(c,2),a=i[0],u=i[1];return Object(et.jsxs)(ut,{children:[Object(et.jsx)(at,{style:dt.title,children:n}),Object(et.jsx)(st.a,{style:[dt.input,r?dt.dark:dt.light],placeholder:"input",maxLength:2,returnKeyType:"done",keyboardType:"numbers-and-punctuation",onChangeText:function(t){return u(Number(t))},onSubmitEditing:function(){e(d(a)),e(l(0)),e(j(0))}})]})})),dt=Y.a.create({title:{fontSize:20,marginBottom:5},input:{padding:10,marginTop:8,borderRadius:10,width:"95%",fontSize:20},dark:{color:U.inputView.wText,backgroundColor:U.inputView.wBackground},light:{color:U.inputView.dText,backgroundColor:U.inputView.wBackground}}),jt=n(20);function bt(){Object(o.b)();var t=Object(jt.o)();return Object(D.useEffect)((function(){}),[t]),Object(et.jsxs)(ut,{style:gt.container,children:[Object(et.jsx)(r.a,{style:"ios"===X.a.OS?"light":"auto"}),Object(et.jsx)(lt,{title:"Ratio (default: 15)"})]})}var gt=Y.a.create({container:{flex:1,paddingLeft:15,paddingTop:20},title:{fontSize:20,fontWeight:"bold"},switchButton:{marginTop:15}}),ft=n(154);function xt(t){var e=t.navigation;return Object(et.jsxs)(ut,{style:Ot.container,children:[Object(et.jsx)(at,{style:Ot.title,children:"\u304d\u3066\u304f\u308c\u3066\u3042\u308a\u304c\u3068\u3046\uff01\u4eca\u65e5\u3082\u30b3\u30fc\u30d2\u30fc\u3092\u697d\u3057\u3082\u3046\uff01"}),Object(et.jsx)(ft.a,{onPress:function(){return e.replace("Root")},style:Ot.link,children:Object(et.jsx)(at,{style:Ot.linkText,children:"\u30db\u30fc\u30e0\u3078\u623b\u308b"})})]})}var Ot=Y.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),pt=n(155),ht=n.n(pt),mt=n(156),kt=Object(D.memo)((function(){var t=Object(o.b)(),e="dark"===Object(z.a)(),n=Object(D.useState)(0),r=C()(n,2),c=r[0],i=r[1],a=Object(o.c)((function(t){return t.screen.nowScreen}));return Object(et.jsx)(mt.a,{style:yt.container,children:Object(et.jsx)(st.a,{style:[yt.input,e?yt.dark:yt.light],placeholder:"input",maxLength:3,returnKeyType:"done",keyboardType:"numbers-and-punctuation",textAlign:"center",onChangeText:function(t){return i(Number(t))},onSubmitEditing:function(){t(l(c)),function(){switch(a){case"normal":t(f(c));case"iceCoffee":t(p(c));default:t(f(c))}}()}})})})),yt=Y.a.create({container:{flex:1},title:{fontSize:25,marginBottom:15,left:-5,textAlign:"center"},input:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,fontSize:25,textAlign:"center"},dark:{color:U.inputView.wText,backgroundColor:U.inputView.wBackground},light:{color:U.inputView.dText,backgroundColor:U.inputView.wBackground}}),wt=Object(D.memo)((function(){var t="dark"===Object(z.a)(),e=Object(o.c)((function(t){return t.coffee})),n=e.water,r=e.iceWater,c=Object(o.c)((function(t){return t.screen.nowScreen}));return Object(et.jsx)(ut,{style:[Tt.container,t?Tt.dark:Tt.light],children:Object(et.jsxs)(at,{style:Tt.text,children:["normal"===c?n:r," cc"]})})})),Tt=Y.a.create({container:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,textAlign:"center"},text:{fontSize:25,textAlign:"center"},dark:{color:U.inputView.wText,backgroundColor:U.inputView.wBackground},light:{color:U.inputView.dText,backgroundColor:U.inputView.wBackground}}),St=Object(D.memo)((function(t){var e=t.title,n=Object(o.c)((function(t){return t.coffee.isWater}));return Object(et.jsxs)(ut,{style:vt.container,children:[Object(et.jsx)(at,{style:vt.title,children:e}),n?Object(et.jsx)(ut,{children:Object(et.jsx)(wt,{})}):Object(et.jsx)(ut,{children:Object(et.jsx)(kt,{})})]})})),vt=Y.a.create({container:{flex:1},title:{fontSize:25,paddingLeft:30,paddingRight:30,paddingBottom:8}}),Ct=function(){var t=Object(o.b)(),e="dark"===Object(z.a)();return Object(et.jsx)(I.a,{name:"exchange",size:24,color:e?"white":"black",onPress:function(){t(s()),t(j(0)),t(l(0))}})},Bt=Object(D.memo)((function(){var t=Object(o.b)(),e="dark"===Object(z.a)(),n=Object(D.useState)(0),r=C()(n,2),c=r[0],i=r[1],a=Object(o.c)((function(t){return t.screen.nowScreen}));return Object(et.jsx)(st.a,{style:[Rt.input,e?Rt.dark:Rt.light],placeholder:"input",maxLength:3,returnKeyType:"done",keyboardType:"numbers-and-punctuation",textAlign:"center",onChangeText:function(t){return i(Number(t))},onSubmitEditing:function(){t(j(c)),function(){switch(a){case"normal":t(x(c));case"iceCoffee":t(O(c));default:t(x(c))}}()}})})),Rt=Y.a.create({container:{flex:1},input:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,fontSize:25,textAlign:"center"},dark:{color:U.inputView.wText,backgroundColor:U.inputView.wBackground},light:{color:U.inputView.dText,backgroundColor:U.inputView.wBackground}}),It=Object(D.memo)((function(){var t="dark"===Object(z.a)(),e=Object(o.c)((function(t){return t.coffee})),n=e.amount,r=e.iceAmount,c=Object(o.c)((function(t){return t.screen.nowScreen}));return Object(et.jsx)(ut,{style:[At.container,t?At.dark:At.light],children:Object(et.jsxs)(at,{style:At.text,children:["normal"===c?n:r," g"]})})})),At=Y.a.create({container:{padding:8,marginTop:8,marginRight:10,borderRadius:10,width:100,height:40,textAlign:"center"},text:{fontSize:25,textAlign:"center"},dark:{color:U.inputView.wText,backgroundColor:U.inputView.wBackground},light:{color:U.inputView.dText,backgroundColor:U.inputView.wBackground}}),Vt=Object(D.memo)((function(t){var e=t.title,n=Object(o.c)((function(t){return t.coffee.isWater}));return Object(et.jsxs)(ut,{style:Dt.container,children:[Object(et.jsx)(at,{style:Dt.title,children:e}),n?Object(et.jsx)(ut,{children:Object(et.jsx)(Bt,{})}):Object(et.jsx)(ut,{children:Object(et.jsx)(It,{})})]})})),Dt=Y.a.create({container:{flex:1},title:{fontSize:25,paddingLeft:30,paddingRight:30,paddingBottom:8}}),Pt=Object(D.memo)((function(){return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(ut,{style:Wt.rowItem,children:Object(et.jsx)(St,{title:"\u6e6f\u91cf"})}),Object(et.jsx)(Ct,{}),Object(et.jsx)(ut,{style:Wt.rowItem,children:Object(et.jsx)(Vt,{title:"\u8c46\u91cf"})})]})})),Wt=Y.a.create({rowItem:{textAlign:"center",width:150,flex:.5,paddingLeft:30,paddingRight:30}}),zt=Object(D.memo)((function(){return Object(et.jsxs)(et.Fragment,{children:[Object(et.jsx)(ut,{style:Lt.rowItem,children:Object(et.jsx)(Vt,{title:"\u8c46\u91cf"})}),Object(et.jsx)(Ct,{}),Object(et.jsx)(ut,{style:Lt.rowItem,children:Object(et.jsx)(St,{title:"\u6e6f\u91cf"})})]})})),Lt=Y.a.create({rowItem:{textAlign:"center",width:150,flex:.5,paddingLeft:30,paddingRight:30}}),Et=Object(D.memo)((function(){var t="dark"===Object(z.a)(),e=Object(o.c)((function(t){return t.coffee.ratio}));return Object(et.jsx)(ut,{style:[Nt.container,t?Nt.dark:Nt.light],children:Object(et.jsxs)(at,{style:Nt.text,children:["Ratio 1 : ",e]})})})),Nt=Y.a.create({container:{padding:10,marginTop:8,marginRight:10,borderRadius:10,width:150,height:40,textAlign:"center"},text:{fontSize:20,textAlign:"center"},dark:{color:U.inputView.wText,backgroundColor:U.inputView.wBackground},light:{color:U.inputView.dText,backgroundColor:U.inputView.wBackground}}),Ft=n(157),Mt=n(106),Kt=Object(D.memo)((function(){var t="dark"===Object(z.a)(),e=Object(D.useState)(!1),n=C()(e,2),r=n[0],c=n[1],o=Object(D.useState)(!1),i=C()(o,2),a=i[0],u=i[1],s=Y.a.create({container:{marginTop:15},sectionStyle:{},button:{flexDirection:"row",justifyContent:"space-between",marginTop:10,marginHorizontal:40},buttonText:{fontSize:20,color:t?U.timerResetButton.dText:U.timerResetButton.wText},dark:{color:U.inputView.wText},light:{color:U.inputView.dText},startButton:{width:80,height:80,justifyContent:"center",alignItems:"center",padding:10,borderRadius:100,backgroundColor:t?U.timerButtonDark.startBackground:U.timerButtonLight.startBackground},startText:{color:t?U.timerButtonDark.startText:U.timerButtonLight.startText},stopButton:{backgroundColor:t?U.timerButtonDark.stopBackground:U.timerButtonLight.stopBackground,width:80,height:80,justifyContent:"center",alignItems:"center",padding:10,borderRadius:100},stopText:{color:t?U.timerButtonDark.stopText:U.timerButtonLight.stopText},resetButton:{backgroundColor:U.timerResetButton.background,width:80,height:80,justifyContent:"center",alignItems:"center",padding:10,borderRadius:100}}),l={container:{padding:20,borderRadius:4,width:"98%",alignItems:"center"},text:{fontSize:84,fontWeight:"300",color:t?U.dark.text:U.light.text,margin:20}};return Object(et.jsx)(et.Fragment,{children:Object(et.jsxs)(ut,{style:s.container,children:[Object(et.jsx)(ut,{style:[s.sectionStyle,t?s.dark:s.light],children:Object(et.jsx)(Ft.Stopwatch,{start:r,reset:a,options:l,style:t?s.dark:s.light})}),Object(et.jsxs)(ut,{style:[s.button],children:[Object(et.jsx)(Mt.a,{onPress:function(){c(!1),u(!0)},style:[s.resetButton],children:Object(et.jsx)(at,{style:[s.buttonText],children:"RESET"})}),Object(et.jsx)(Mt.a,{onPress:function(){c(!r),u(!1)},style:[r?s.stopButton:s.startButton],children:Object(et.jsx)(at,{style:[s.buttonText,r?s.stopText:s.startText],children:r?"STOP":"START"})})]})]})})}));function Jt(t){ht()(t);var e=Object(o.c)((function(t){return t.coffee.isWater})),n=Object(o.b)(),r=Object(jt.o)();return Object(D.useEffect)((function(){n(k("normal")),n(j(0)),n(l(0))}),[r]),Object(et.jsxs)(ut,{style:Gt.container,children:[Object(et.jsx)(ut,{style:[Gt.containerItem],children:e?Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(zt,{})}):Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(Pt,{})})}),Object(et.jsx)(ut,{style:Gt.ratioContainer,children:Object(et.jsx)(Et,{})}),Object(et.jsx)(ut,{children:Object(et.jsx)(Kt,{})})]})}var Gt=Y.a.create({container:{flex:1},containerItem:{marginTop:20,padding:10,flexDirection:"row"},ratioContainer:{marginTop:39,padding:10,alignItems:"center"},dark:{color:U.dark.text,backgroundColor:U.dark.background},light:{color:U.light.text,backgroundColor:U.light.background}});function Ht(){var t=Object(o.c)((function(t){return t.coffee.isWater})),e=Object(o.b)(),n=Object(jt.o)();return Object(D.useEffect)((function(){e(k("cafeAuLait")),e(j(0)),e(l(0))}),[n]),Object(et.jsxs)(ut,{style:qt.container,children:[Object(et.jsx)(ut,{style:[qt.containerItem],children:t?Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(zt,{})}):Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(Pt,{})})}),Object(et.jsx)(ut,{style:qt.ratioContainer,children:Object(et.jsx)(Et,{})}),Object(et.jsx)(ut,{children:Object(et.jsx)(Kt,{})})]})}var qt=Y.a.create({container:{flex:1},containerItem:{marginTop:20,padding:10,flexDirection:"row"},ratioContainer:{marginTop:39,padding:10,alignItems:"center"},dark:{color:U.dark.text,backgroundColor:U.dark.background},light:{color:U.light.text,backgroundColor:U.light.background}}),Qt={prefixes:[n(179).a("/")],config:{screens:{Root:{screens:{Normal:{screens:{NormalScreen:"normal"}},CafeAuLait:{screens:{CafeAuLaitScreen:"cafe au lait"}},IceCoffee:{screens:{IceCoffeeScreen:"Ice coffee"}},Setting:{screens:{SettingScreen:"Setting"}}}},Modal:"modal",NotFound:"*"}}};function Ut(){var t=Object(o.c)((function(t){return t.coffee.isWater})),e=Object(o.b)(),n=Object(jt.o)();return Object(D.useEffect)((function(){e(k("iceCoffee")),e(b(0)),e(g(0))}),[n]),Object(et.jsxs)(ut,{style:Xt.container,children:[Object(et.jsx)(ut,{style:[Xt.containerItem],children:t?Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(zt,{})}):Object(et.jsx)(et.Fragment,{children:Object(et.jsx)(Pt,{})})}),Object(et.jsx)(ut,{style:Xt.ratioContainer,children:Object(et.jsx)(Et,{})}),Object(et.jsx)(ut,{children:Object(et.jsx)(Kt,{})})]})}var Xt=Y.a.create({container:{flex:1},containerItem:{marginTop:20,padding:10,flexDirection:"row"},ratioContainer:{marginTop:39,padding:10,alignItems:"center"},dark:{color:U.dark.text,backgroundColor:U.dark.background},light:{color:U.light.text,backgroundColor:U.light.background}});function Yt(t){var e=t.colorScheme;return Object(et.jsx)(N.a,{linking:Qt,theme:"dark"===e?F.a:M.a,children:Object(et.jsx)($t,{})})}var Zt=Object(K.a)();function $t(){return Object(et.jsxs)(Zt.Navigator,{children:[Object(et.jsx)(Zt.Screen,{name:"Root",component:te,options:{headerShown:!1}}),Object(et.jsx)(Zt.Screen,{name:"NotFound",component:xt,options:{title:"Oops!"}}),Object(et.jsx)(Zt.Group,{screenOptions:{presentation:"modal"},children:Object(et.jsx)(Zt.Screen,{name:"Modal",component:bt})})]})}var _t=Object(E.a)();function te(){var t=L();return Object(et.jsxs)(_t.Navigator,{initialRouteName:"Normal",screenOptions:{tabBarActiveTintColor:U[t].tint},children:[Object(et.jsx)(_t.Screen,{name:"Normal",component:Jt,options:function(e){var n=e.navigation;return{title:"Coffee",tabBarIcon:function(t){var e=t.color;return Object(et.jsx)(G.a,{name:"coffee",size:24,color:e})},headerRight:function(){return Object(et.jsx)(J.a,{onPress:function(){return n.navigate("Modal")},style:function(t){return{opacity:t.pressed?.5:1}},children:Object(et.jsx)(H.a,{name:"setting",size:25,color:U[t].text,style:{marginRight:15}})})}}}}),Object(et.jsx)(_t.Screen,{name:"CafeAuLait",component:Ht,options:function(e){var n=e.navigation;return{title:"Cafe Au Lait",tabBarIcon:function(t){var e=t.color;return Object(et.jsx)(q.a,{name:"ios-cafe-outline",size:30,color:e})},headerRight:function(){return Object(et.jsx)(J.a,{onPress:function(){return n.navigate("Modal")},style:function(t){return{opacity:t.pressed?.5:1}},children:Object(et.jsx)(H.a,{name:"setting",size:25,color:U[t].text,style:{marginRight:15}})})}}}}),Object(et.jsx)(_t.Screen,{name:"IceCoffee",component:Ut,options:function(e){var n=e.navigation;return{title:"Ice Coffee",tabBarIcon:function(t){var e=t.color;return Object(et.jsx)(Q.a,{name:"cup-water",size:24,color:e})},headerRight:function(){return Object(et.jsx)(J.a,{onPress:function(){return n.navigate("Modal")},style:function(t){return{opacity:t.pressed?.5:1}},children:Object(et.jsx)(H.a,{name:"setting",size:25,color:U[t].text,style:{marginRight:15}})})}}}})]})}function ee(){var t=function(){var t=Object(D.useState)(!1),e=C()(t,2),r=e[0],c=e[1];return Object(D.useEffect)((function(){R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,V.b(),t.next=4,R.a.awrap(A.b(W(W({},I.a.font),{},{"space-mono":n(208)})));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.warn(t.t0);case 9:return t.prev=9,c(!0),V.a(),t.finish(9);case 13:case"end":return t.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}(),e=L();return t?Object(et.jsx)(o.a,{store:w,children:Object(et.jsxs)(c.b,{children:[Object(et.jsx)(Yt,{colorScheme:e}),Object(et.jsx)(r.a,{})]})}):null}},183:function(t,e,n){t.exports=n(246)},208:function(t,e,n){t.exports=n.p+"./fonts/SpaceMono-Regular.ttf"},228:function(t,e){}},[[183,1,2]]]);
//# sourceMappingURL=app.10ff9eb2.chunk.js.map