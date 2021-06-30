(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{90:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(90),n(21)),d=n(133),l=n(134),s=n(131),j=n(145),u=n(17),b=n(144),p=n(136),O=n(40),h=n(58);var m=function(e,t){var n=Object(a.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(a){return console.log(a),t}})),c=Object(u.a)(n,2),r=c[0],o=c[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;o(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(a){console.log(a)}}]},x=n(5),f=Object(a.createContext)({tasks:[]}),g=function(e){var t=e.children,n=m("tasks",[]),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(x.jsx)(f.Provider,{value:{tasks:c,addTask:function(e){var t={id:c.length>0?Math.max.apply(Math,Object(h.a)(c.map((function(e){return e.id}))))+1:0,text:e,completed:!1};r([].concat(Object(h.a)(c),[t]))},removeTask:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)},toggleTask:function(e){var t=c.find((function(t){return t.id===e}));t&&(t.completed=!t.completed);var n=c.map((function(n){return n.id===e?t:n}));r(n)}},children:t})},k=function(){return Object(a.useContext)(f)},v=Object(s.a)((function(e){return{textField:Object(i.a)({width:300,paddingRight:10},e.breakpoints.down("xs"),{width:215}),button:{padding:15.5}}}));var y=function(){var e=k().addTask,t=v(),n=Object(a.useState)(""),c=Object(u.a)(n,2),r=c[0],o=c[1];return Object(x.jsxs)(d.a,{container:!0,children:[Object(x.jsx)(d.a,{item:!0,children:Object(x.jsx)(b.a,{className:t.textField,id:"outlined-basic",label:"Today's task",variant:"outlined",value:r,onChange:function(e){return o(e.target.value)}})}),Object(x.jsx)(d.a,{item:!0,children:Object(x.jsx)(p.a,{disabled:0===r.length,className:t.button,variant:"contained",color:"primary",onClick:function(){e(r),o("")},children:"Add Task"})})]})},w=n(135),C=n(137),T=n(139),M=n(138),S=n(146),N=n(103),F=n(70),I=n.n(F),B=Object(s.a)((function(e){return{listItem:Object(i.a)({width:300,wordWrap:"break-word",paddingTop:20,paddingBottom:20},e.breakpoints.down("xs"),{width:210}),list:{paddingTop:10,paddingBottom:10},decoration:{paddingTop:10,paddingBottom:10,textDecoration:"line-through",color:"gray"}}}));var D=function(){var e=B(),t=Object(a.useState)("all"),n=Object(u.a)(t,2),c=n[0],r=n[1],o=k(),i=o.tasks,l=o.toggleTask,s=o.removeTask,b=Object(a.useMemo)((function(){return"all"===c?i:"completed"===c?i.filter((function(e){return e.completed})):"notCompleted"===c?i.filter((function(e){return!e.completed})):void 0}),[i,c]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w.a,{className:e.list,children:b.map((function(t){return Object(x.jsxs)(C.a,{className:e.listItem,children:[Object(x.jsx)(M.a,{primary:t.text,className:t.completed?e.decoration:e.list}),Object(x.jsxs)(T.a,{children:[Object(x.jsx)(S.a,{color:"primary",inputProps:{"aria-label":"checkbox with default color"},checked:t.completed,onClick:function(){return l(t.id)}}),Object(x.jsx)(N.a,{color:"secondary",onClick:function(){return s(t.id)},"aria-label":"delete",children:Object(x.jsx)(I.a,{})})]})]},t.id)}))}),Object(x.jsxs)(d.a,{container:!0,justify:"center",children:[Object(x.jsx)(j.a,{p:1,children:Object(x.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return r("all")},children:"All"})}),Object(x.jsx)(j.a,{p:1,children:Object(x.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return r("completed")},children:"Completed"})}),Object(x.jsx)(j.a,{p:1,children:Object(x.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return r("notCompleted")},children:"Due"})})]})]})};var J,P=(J=function(){return Object(x.jsx)(j.a,{pt:3,pb:3,pr:2,pl:2,children:Object(x.jsxs)(d.a,{container:!0,direction:"column",children:[Object(x.jsx)(d.a,{item:!0,children:Object(x.jsx)(y,{})}),Object(x.jsx)(d.a,{item:!0,children:Object(x.jsx)(D,{})})]})})},function(e){return Object(x.jsx)(g,{children:Object(x.jsx)(J,Object(O.a)({},e))})}),A=n(36),L=n(141),W=n(71),z=n(140),E=n(56),R=n.n(E),q=n(57),G=n.n(q),H=Object(W.a)({palette:{type:"light",primary:R.a,secondary:G.a}}),K=Object(W.a)({palette:{type:"dark",primary:R.a,secondary:G.a}}),Q=function(e){var t=e.children,n=e.darkMode?K:H;return Object(x.jsx)(z.a,{theme:n,children:t})},U=n(142),V=n(143),X=n(43),Y=Object(s.a)((function(e){return{root:Object(i.a)({width:"100%",height:"100%",position:"absolute",overflow:"auto",paddingTop:20,paddingBottom:20,backgroundColor:e.palette.background.paper,color:e.palette.color},e.breakpoints.down("xs"),{paddingTop:e.spacing(2)}),header:{fontSize:30,fontWeight:600}}}));var Z=function(e){return function(t){var n=m("darkMode",!1),a=Object(u.a)(n,2),c=a[0],r=a[1];return Object(x.jsx)(Q,{darkMode:c,children:Object(x.jsx)(e,Object(O.a)(Object(O.a)({},t),{},{darkMode:c,setDarkMode:r}))})}}((function(e){var t=e.darkMode,n=e.setDarkMode,a=Y(),c=Object(A.a)(),r=Object(L.a)(c.breakpoints.down("xs"));return Object(x.jsx)(d.a,{className:a.root,container:!0,justify:"center",alignItems:r?"flex-start":"center",children:Object(x.jsxs)(d.a,{item:!0,children:[Object(x.jsxs)(l.a,{elevation:3,children:[Object(x.jsx)(j.a,{pt:5,pb:2,display:"flex",justifyContent:"center",alignItems:"center",children:Object(x.jsx)(X.a,{className:a.header,variant:"h1",gutterBottom:!0,children:"Task Manager"})}),Object(x.jsx)(P,{})]}),Object(x.jsx)(d.a,{children:Object(x.jsx)(U.a,{control:Object(x.jsx)(V.a,{checked:t,color:"primary",onChange:function(){return n(!t)}}),label:"Dark Mode"})})]})})})),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(Z,{})}),document.getElementById("root")),$()}},[[99,1,2]]]);
//# sourceMappingURL=main.c11e4c02.chunk.js.map