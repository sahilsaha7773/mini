(this.webpackJsonpmini=this.webpackJsonpmini||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(12),o=n.n(i),r=(n(70),n(31)),s=n(9),l=(n(71),n(11)),j=n(129),u=n(116),b=n(127),d=n(115),h=n(117),O=n(126),x=n(128),f=n(118),p=n(84),g=n(119),v=n(120),m=n(121),y=n(122),k=n(123),w=n(110),S=n(112),C=n(114),L=n(16),T=n.n(L),I=n(3),P=Object(w.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var R=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){T.a.get("token")&&c(!0)}),[]);var i=P();return Object(I.jsx)(S.a,{position:"static",children:Object(I.jsxs)(C.a,{children:[Object(I.jsx)(d.a,{variant:"h6",className:i.title,children:"Mini URL Shortener"}),n?Object(I.jsx)(x.a,{color:"inherit",onClick:function(e){e.preventDefault(),T.a.remove("token"),c(!1),window.location.href="/login"},children:"Logout"}):Object(I.jsx)(x.a,{color:"inherit",children:"Login"})]})})},A={APIURL:"https://mini-short.herokuapp.com/user"},E=n(124),U=n(125);var D=function(){var e,t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)({}),r=Object(l.a)(o,2),w=r[0],S=r[1],C=Object(a.useState)(!1),L=Object(l.a)(C,2),P=L[0],D=L[1],J=Object(a.useState)(!0),W=Object(l.a)(J,2),_=W[0],N=W[1],G=Object(a.useState)(""),M=Object(l.a)(G,2),z=M[0],B=M[1],F=Object(a.useState)(""),H=Object(l.a)(F,2),$=H[0],q=H[1];return Object(a.useEffect)((function(){console.log(T.a.get("token")),T.a.get("token")&&(console.log("dlkasds"),i(!0))}),[]),Object(a.useEffect)((function(){var e={method:"GET",headers:{"Content-Type":"application/json",token:T.a.get("token")}};fetch(A.APIURL+"/me",e).then((function(e){return e.json()})).then((function(e){var t;S(e),"Invalid Token"===e.message?(T.a.remove("token"),i(!1)):null===w||void 0===w||null===(t=w.urls)||void 0===t||t.sort((function(e,t){return t._id-e._id})),console.log(e),N(!1)}))}),[]),_?Object(I.jsx)(j.a,{style:{opacity:"0.5",visibility:"visible"},children:Object(I.jsx)(u.a,{color:"primary"})}):c?Object(I.jsxs)(b.a,{children:[Object(I.jsx)(R,{}),P?Object(I.jsx)(j.a,{style:{opacity:"0.5",visibility:"visible"},children:Object(I.jsx)(u.a,{color:"primary"})}):Object(I.jsxs)(b.a,{style:{textAlign:"center",marginTop:"40px"},children:[Object(I.jsxs)(d.a,{variant:"h5",children:["Welcome back ",w.email]}),Object(I.jsxs)(h.a,{style:{textAlign:"center",maxWidth:"700px"},children:[Object(I.jsxs)(h.a,{style:{display:"flex",alignItems:"center",marginTop:"20px",justifyContent:"center"},children:[Object(I.jsx)(O.a,{onChange:function(e){return q(e.target.value)},value:$,label:"Type an URL to short",style:{width:"100%",marginRight:"10px"}}),Object(I.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(e){if(e.preventDefault(),/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test($)){D(!0);var t={method:"POST",headers:{"Content-Type":"application/json",token:T.a.get("token")},body:JSON.stringify({fullUrl:$})};fetch(A.APIURL+"/short",t).then((function(e){return e.json()})).then((function(e){console.log(e);var t={method:"GET",headers:{"Content-Type":"application/json",token:T.a.get("token")}};fetch(A.APIURL+"/me",t).then((function(e){return e.json()})).then((function(e){S(e),D(!1),console.log(e)}))}))}else B("Invalid url!")},children:"Add"})]}),Object(I.jsx)(d.a,{variant:"subtitle1",style:{color:"red"},children:z}),Object(I.jsx)(f.a,{component:p.a,style:{maxWidth:"700px",margin:" 40px auto"},children:Object(I.jsxs)(g.a,{children:[Object(I.jsx)(v.a,{children:Object(I.jsxs)(m.a,{children:[Object(I.jsx)(y.a,{children:"Full URL"}),Object(I.jsx)(y.a,{children:"Mini URL"})]})}),Object(I.jsx)(k.a,{children:null===(e=w.urls)||void 0===e?void 0:e.map((function(e){return Object(I.jsxs)(m.a,{children:[Object(I.jsx)(y.a,{children:e.full}),Object(I.jsxs)(y.a,{style:{alignItems:"center"},children:[Object(I.jsx)("span",{id:e._id,children:e.short}),Object(I.jsx)(E.a,{onClick:function(t){return function(e,t){console.log(t);var n=document.getElementById(t);console.log(n),navigator.clipboard.writeText(n.innerHTML)}(0,e._id)},style:{marginLeft:"10px"}})]}),Object(I.jsx)(y.a,{onClick:function(t){return function(e,t){D(!0),e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",token:T.a.get("token")},body:JSON.stringify({short:t})};fetch(A.APIURL+"/delete",n).then((function(e){return e.json()})).then((function(e){var n=e.user.urls.findIndex((function(e){return e._id==t._id}));console.log(n),n>-1&&e.user.urls.splice(n,1),S(e.user),console.log(e),D(!1)}))}(t,e)},children:Object(I.jsx)(U.a,{})})]})}))})]})})]})]})]}):Object(I.jsx)(s.a,{to:"/login"})};var J=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),j=o[0],u=o[1],f=Object(a.useState)(!1),g=Object(l.a)(f,2),v=(g[0],g[1]),m=Object(a.useState)(""),y=Object(l.a)(m,2),k=y[0],w=y[1],S=Object(a.useState)(!1),C=Object(l.a)(S,2),L=C[0],P=C[1];function E(e,t){"email"===t?c(e.target.value):"password"===t&&u(e.target.value)}return Object(a.useEffect)((function(){T.a.get("token")&&P(!0)}),[]),L?Object(I.jsx)(s.a,{to:"/"}):Object(I.jsxs)(b.a,{children:[Object(I.jsx)(R,{}),Object(I.jsx)(h.a,{children:Object(I.jsx)(p.a,{elevation:5,style:{maxWidth:"500px",padding:"20px",margin:"100px auto"},children:Object(I.jsxs)(h.a,{style:{display:"flex",textAlign:"center",flexDirection:"column"},children:[Object(I.jsx)(d.a,{variant:"h5",children:"Welcome back!"}),Object(I.jsx)(O.a,{onChange:function(e){return E(e,"email")},value:n,variant:"outlined",label:"Email",style:{margin:"20px 0"}}),Object(I.jsx)(O.a,{onChange:function(e){return E(e,"password")},value:j,variant:"outlined",label:"Password",type:"password"}),Object(I.jsxs)(d.a,{style:{margin:"20px 0"},variant:"subtitle1",children:["Don't have an account? ",Object(I.jsx)(r.b,{to:"/signup",children:"Create one"})]}),Object(I.jsx)(x.a,{variant:"contained",color:"primary",style:{margin:"0 0 20px 0"},onClick:function(e){e.preventDefault(),console.log(A.APIURL,j);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:j})};v(!0),fetch(A.APIURL+"/login",t).then((function(e){return e.json()})).then((function(e){void 0!=e.token?(T.a.set("token",e.token),P(!0)):w("Invalid Credentials!"),v(!1)})).catch((function(e){w(e),console.log(e)}))},children:"Login"}),Object(I.jsx)(d.a,{style:{color:"red"},variant:"subtitle1",children:k})]})})})]})};var W=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(l.a)(i,2),j=o[0],u=o[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],m=g[1],y=Object(a.useState)(!1),k=Object(l.a)(y,2),w=(k[0],k[1]),S=Object(a.useState)(""),C=Object(l.a)(S,2),L=C[0],P=C[1],E=Object(a.useState)(!1),U=Object(l.a)(E,2),D=U[0],J=U[1];function W(e,t){"email"===t?c(e.target.value):"password1"===t?u(e.target.value):"password2"===t&&m(e.target.value)}return Object(a.useEffect)((function(){T.a.get("token")&&J(!0)}),[]),Object(a.useEffect)((function(){P(j!=v?"Passwords must match!":"")}),[v]),D?Object(I.jsx)(s.a,{to:"/"}):Object(I.jsxs)(b.a,{children:[Object(I.jsx)(R,{}),Object(I.jsx)(h.a,{children:Object(I.jsx)(p.a,{elevation:5,style:{maxWidth:"500px",padding:"20px",margin:"100px auto"},children:Object(I.jsxs)(h.a,{style:{display:"flex",textAlign:"center",flexDirection:"column"},children:[Object(I.jsx)(d.a,{variant:"h5",children:"Create an account"}),Object(I.jsx)(O.a,{onChange:function(e){return W(e,"email")},value:n,variant:"outlined",label:"Email",style:{margin:"10px 0"}}),Object(I.jsx)(O.a,{onChange:function(e){return W(e,"password1")},value:j,variant:"outlined",label:"Password",style:{margin:"10px 0 20px 0"},type:"password"}),Object(I.jsx)(O.a,{onChange:function(e){return W(e,"password2")},value:v,variant:"outlined",label:"Confirm Password",type:"password"}),Object(I.jsxs)(d.a,{style:{margin:"20px 0"},variant:"subtitle1",children:["Already have an account? ",Object(I.jsx)(r.b,{to:"/login",children:"Login here"})]}),Object(I.jsx)(x.a,{variant:"contained",color:"primary",style:{margin:"0 0 20px 0"},onClick:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:j})};w(!0),fetch(A.APIURL+"/signup",t).then((function(e){return e.json()})).then((function(e){void 0!=e.token?(T.a.set("token",e.token),J(!0)):P("Account already registered!"),w(!1)})).catch((function(e){P(e),console.log(e)}))},children:"Register"}),Object(I.jsx)(d.a,{style:{color:"red"},variant:"subtitle1",children:L})]})})})]})};var _=function(){var e=Object(s.g)().short;console.log(e);var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){fetch(A.APIURL+"/".concat(e),{method:"get"}).then((function(e){return e.json()})).then((function(e){window.location.href="https://"!=e.url.substr(0,8)?"https://"+e.url:e.url,i(e.url),console.log(e)}))}),[]),Object(a.useEffect)((function(){}),[c]),Object(I.jsxs)("div",{children:["Redirecting to ",c]})};var N=function(){return Object(I.jsx)(r.a,{children:Object(I.jsxs)(s.d,{children:[Object(I.jsx)(s.b,{path:"/login",children:Object(I.jsx)(J,{})}),Object(I.jsx)(s.b,{path:"/signup",children:Object(I.jsx)(W,{})}),Object(I.jsx)(s.b,{path:"/:short",children:Object(I.jsx)(_,{})}),Object(I.jsx)(s.b,{path:"/",children:Object(I.jsx)(D,{})})]})})};o.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(N,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.26f25bcc.chunk.js.map