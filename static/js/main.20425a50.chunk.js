(this.webpackJsonpmini=this.webpackJsonpmini||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(12),i=n.n(o),r=(n(70),n(31)),s=n(9),l=(n(71),n(11)),j=n(131),u=n(118),b=n(129),d=n(85),h=n(119),O=n(128),x=n(130),f=n(120),p=n(84),g=n(121),v=n(122),m=n(123),y=n(124),w=n(125),k=n(126),S=n(113),C=n(115),L=n(117),A=n(16),P=n.n(A),R=n(3),T=Object(S.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var I=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){P.a.get("token")&&c(!0)}),[]);var o=T();return Object(R.jsx)(C.a,{position:"static",children:Object(R.jsxs)(L.a,{children:[Object(R.jsx)(d.a,{variant:"h6",className:o.title,children:"SML URL Shortener"}),n?Object(R.jsx)(x.a,{color:"inherit",onClick:function(e){e.preventDefault(),P.a.remove("token"),c(!1),window.location.href="/#/login"},children:"Logout"}):Object(R.jsx)(x.a,{color:"inherit",onClick:window.location.href="/#/login",children:"Login"})]})})},U={APIURL:"https://mini-short.herokuapp.com/user"},E=n(127);var D=function(){var e,t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)({}),r=Object(l.a)(i,2),S=r[0],C=r[1],L=Object(a.useState)(!1),A=Object(l.a)(L,2),T=A[0],D=A[1],W=Object(a.useState)(!0),J=Object(l.a)(W,2),_=J[0],N=J[1],G=Object(a.useState)(""),z=Object(l.a)(G,2),M=z[0],B=z[1],F=Object(a.useState)(""),$=Object(l.a)(F,2),q=$[0],H=$[1];return Object(a.useEffect)((function(){console.log(P.a.get("token")),P.a.get("token")&&(console.log("dlkasds"),o(!0))}),[]),Object(a.useEffect)((function(){var e={method:"GET",headers:{"Content-Type":"application/json",token:P.a.get("token")}};fetch(U.APIURL+"/me",e).then((function(e){return e.json()})).then((function(e){var t;C(e),"Invalid Token"===(null===e||void 0===e?void 0:e.message)?(P.a.remove("token"),o(!1)):null===S||void 0===S||null===(t=S.urls)||void 0===t||t.sort((function(e,t){return t._id-e._id})),console.log(e),N(!1)}))}),[]),_?Object(R.jsx)(j.a,{style:{opacity:"0.5",visibility:"visible"},children:Object(R.jsx)(u.a,{color:"primary"})}):c?Object(R.jsxs)(b.a,{children:[Object(R.jsx)(I,{}),T?Object(R.jsx)(j.a,{style:{opacity:"0.5",visibility:"visible"},children:Object(R.jsx)(u.a,{color:"primary"})}):Object(R.jsxs)(b.a,{style:{textAlign:"center",marginTop:"40px"},children:[Object(R.jsxs)(d.a,{variant:"h5",children:["Welcome back ",S.email]}),Object(R.jsxs)(h.a,{style:{textAlign:"center",maxWidth:"700px"},children:[Object(R.jsxs)(h.a,{style:{display:"flex",alignItems:"center",marginTop:"20px",justifyContent:"center"},children:[Object(R.jsx)(O.a,{onChange:function(e){return H(e.target.value)},value:q,label:"Type an URL to short",style:{width:"100%",marginRight:"10px"}}),Object(R.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(e){if(e.preventDefault(),/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(q)){B(""),D(!0);var t={method:"POST",headers:{"Content-Type":"application/json",token:P.a.get("token")},body:JSON.stringify({fullUrl:q})};fetch(U.APIURL+"/short",t).then((function(e){return e.json()})).then((function(e){console.log(e);var t={method:"GET",headers:{"Content-Type":"application/json",token:P.a.get("token")}};fetch(U.APIURL+"/me",t).then((function(e){return e.json()})).then((function(e){C(e),D(!1),console.log(e)}))}))}else B("Invalid url!")},children:"Add"})]}),Object(R.jsx)(d.a,{variant:"subtitle1",style:{color:"red",marginTop:"20px"},children:M}),Object(R.jsx)(f.a,{component:p.a,style:{maxWidth:"700px",margin:" 40px auto"},children:Object(R.jsxs)(g.a,{style:{minWidth:"600px"},children:[Object(R.jsx)(v.a,{children:Object(R.jsxs)(m.a,{children:[Object(R.jsx)(y.a,{children:"Full URL"}),Object(R.jsx)(y.a,{children:"Mini URL"})]})}),Object(R.jsx)(w.a,{children:null===(e=S.urls)||void 0===e?void 0:e.map((function(e){return Object(R.jsxs)(m.a,{children:[Object(R.jsx)(y.a,{children:e.full}),Object(R.jsx)(y.a,{style:{alignItems:"center"},children:Object(R.jsxs)(k.a,{id:e._id,onClick:function(t){console.log("asd"),window.open("https://mysml.tech/#/".concat(e.short),"_blank")},children:["mysml.tech/#/",e.short]})}),Object(R.jsx)(y.a,{onClick:function(t){return function(e,t){D(!0),e.preventDefault();var n={method:"POST",headers:{"Content-Type":"application/json",token:P.a.get("token")},body:JSON.stringify({short:t})};window.confirm("Are you sure you want to delete?")?fetch(U.APIURL+"/delete",n).then((function(e){return e.json()})).then((function(e){var n=e.user.urls.findIndex((function(e){return e._id==t._id}));console.log(n),n>-1&&e.user.urls.splice(n,1),C(e.user),console.log(e),D(!1)})):D(!1)}(t,e)},children:Object(R.jsx)(E.a,{})})]})}))})]})})]})]})]}):Object(R.jsx)(s.a,{to:"/login"})};var W=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),j=i[0],u=i[1],f=Object(a.useState)(!1),g=Object(l.a)(f,2),v=(g[0],g[1]),m=Object(a.useState)(""),y=Object(l.a)(m,2),w=y[0],k=y[1],S=Object(a.useState)(!1),C=Object(l.a)(S,2),L=C[0],A=C[1];function T(e,t){"email"===t?c(e.target.value):"password"===t&&u(e.target.value)}return Object(a.useEffect)((function(){P.a.get("token")&&A(!0)}),[]),L?Object(R.jsx)(s.a,{to:"/"}):Object(R.jsxs)(b.a,{children:[Object(R.jsx)(I,{}),Object(R.jsx)(h.a,{children:Object(R.jsx)(p.a,{elevation:5,style:{maxWidth:"500px",padding:"20px",margin:"100px auto"},children:Object(R.jsxs)(h.a,{style:{display:"flex",textAlign:"center",flexDirection:"column"},children:[Object(R.jsx)(d.a,{variant:"h5",children:"Welcome back!"}),Object(R.jsx)(O.a,{onChange:function(e){return T(e,"email")},value:n,variant:"outlined",label:"Email",style:{margin:"20px 0"}}),Object(R.jsx)(O.a,{onChange:function(e){return T(e,"password")},value:j,variant:"outlined",label:"Password",type:"password"}),Object(R.jsxs)(d.a,{style:{margin:"20px 0"},variant:"subtitle1",children:["Don't have an account? ",Object(R.jsx)(r.b,{to:"/signup",children:"Create one"})]}),Object(R.jsx)(x.a,{variant:"contained",color:"primary",style:{margin:"0 0 20px 0"},onClick:function(e){e.preventDefault(),console.log(U.APIURL,j);var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:j})};v(!0),fetch(U.APIURL+"/login",t).then((function(e){return e.json()})).then((function(e){void 0!=e.token?(P.a.set("token",e.token),A(!0)):k("Invalid Credentials!"),v(!1)})).catch((function(e){k(e),console.log(e)}))},children:"Login"}),Object(R.jsx)(d.a,{style:{color:"red"},variant:"subtitle1",children:w})]})})})]})};var J=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),j=i[0],u=i[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],m=g[1],y=Object(a.useState)(!1),w=Object(l.a)(y,2),k=(w[0],w[1]),S=Object(a.useState)(""),C=Object(l.a)(S,2),L=C[0],A=C[1],T=Object(a.useState)(!1),E=Object(l.a)(T,2),D=E[0],W=E[1];function J(e,t){"email"===t?c(e.target.value):"password1"===t?u(e.target.value):"password2"===t&&m(e.target.value)}return Object(a.useEffect)((function(){P.a.get("token")&&W(!0)}),[]),Object(a.useEffect)((function(){A(j!=v?"Passwords must match!":"")}),[v]),D?Object(R.jsx)(s.a,{to:"/"}):Object(R.jsxs)(b.a,{children:[Object(R.jsx)(I,{}),Object(R.jsx)(h.a,{children:Object(R.jsx)(p.a,{elevation:5,style:{maxWidth:"500px",padding:"20px",margin:"100px auto"},children:Object(R.jsxs)(h.a,{style:{display:"flex",textAlign:"center",flexDirection:"column"},children:[Object(R.jsx)(d.a,{variant:"h5",children:"Create an account"}),Object(R.jsx)(O.a,{onChange:function(e){return J(e,"email")},value:n,variant:"outlined",label:"Email",style:{margin:"10px 0"}}),Object(R.jsx)(O.a,{onChange:function(e){return J(e,"password1")},value:j,variant:"outlined",label:"Password",style:{margin:"10px 0 20px 0"},type:"password"}),Object(R.jsx)(O.a,{onChange:function(e){return J(e,"password2")},value:v,variant:"outlined",label:"Confirm Password",type:"password"}),Object(R.jsxs)(d.a,{style:{margin:"20px 0"},variant:"subtitle1",children:["Already have an account? ",Object(R.jsx)(r.b,{to:"/login",children:"Login here"})]}),Object(R.jsx)(x.a,{variant:"contained",color:"primary",style:{margin:"0 0 20px 0"},onClick:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:j})};k(!0),fetch(U.APIURL+"/signup",t).then((function(e){return e.json()})).then((function(e){void 0!=e.token?(P.a.set("token",e.token),W(!0)):A("Account already registered!"),k(!1)})).catch((function(e){A(e),console.log(e)}))},children:"Register"}),Object(R.jsx)(d.a,{style:{color:"red"},variant:"subtitle1",children:L})]})})})]})};var _=function(){var e=Object(s.g)().short;console.log(e);var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){fetch(U.APIURL+"/".concat(e),{method:"get"}).then((function(e){return e.json()})).then((function(e){window.location.href=e.url,o(e.url),console.log(e)}))}),[]),Object(a.useEffect)((function(){}),[c]),Object(R.jsxs)("div",{children:["Redirecting to ",c]})};var N=function(){return Object(R.jsx)(r.a,{children:Object(R.jsxs)(s.d,{children:[Object(R.jsx)(s.b,{exact:!0,path:"/",children:Object(R.jsx)(D,{})}),Object(R.jsx)(s.b,{path:"/login",children:Object(R.jsx)(W,{})}),Object(R.jsx)(s.b,{path:"/signup",children:Object(R.jsx)(J,{})}),Object(R.jsx)(s.b,{path:"/:short",children:Object(R.jsx)(_,{})})]})})};i.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(N,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.20425a50.chunk.js.map