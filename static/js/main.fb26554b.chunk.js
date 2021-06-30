(this["webpackJsonplifeit-test-task"]=this["webpackJsonplifeit-test-task"]||[]).push([[0],{97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(21),c=n.n(s),i=n(13),o=n(35),l=n(7),u=n(9),d=n(10),j=n.n(d),b=n(22),h=n(20),p=n(27),O=n(29),f=n.n(O);f.a.defaults.baseURL="https://reqres.in/api/";var x,m,g,v,w={login:function(e,t){return f.a.post("/login",{email:e,password:t})},register:function(e,t){return f.a.post("/register",{email:e,password:t})},getUsers:function(e){return f.a.get("/users?page=".concat(e))},createUser:function(e){return f.a.post("/users",Object(b.a)({},e))},deleteUser:function(e){return f.a.delete("users/".concat(e))},updateUser:function(e,t){return f.a.put("users/".concat(e),Object(b.a)({},t))}},y=function(e,t,n){var r=window.localStorage;r.setItem("email",e),r.setItem("password",t),r.setItem("reqresToken",n)},k=function(){var e=window.localStorage;e.removeItem("email"),e.removeItem("reqresToken"),e.removeItem("password")},S=function(){return Boolean(window.localStorage.getItem("reqresToken"))},C=Object(p.b)({initialState:{email:"",password:"",token:"",isLoading:!1,error:null},name:"login",reducers:{loginRequest:function(e){e.isLoading=!0,e.error=null},loginSuccess:function(e,t){e.isLoading=!1,e.error=null,e.token=t.payload.token,e.email=t.payload.email,e.password=t.payload.password},loginFailure:function(e,t){e.isLoading=!1,e.error=t.payload},logoutRequest:function(e){e.email="",e.password="",e.token="",e.isLoading=!1,e.error=null}}}),L=C.actions,N=L.loginRequest,U=L.loginSuccess,I=L.loginFailure,E=L.logoutRequest,R=C.reducer,q=n(108),D=n(24),F=n(107),T=n(101),B=n(25),G=n(1),P=B.a.div(x||(x=Object(D.a)(["\n  display: flex;\n  justify-content: left;\n  align-items: center;\n\n  > div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 150px;\n  }\n\n  #rememberMeCheckbox {\n    width: 20px;\n  }\n"]))),_=function(e){var t=e.onSubmit,n=e.registeredData,a=Object(r.useState)(n.email||""),s=Object(u.a)(a,2),c=s[0],i=s[1],o=Object(r.useState)(n.password||""),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(r.useState)(!1),h=Object(u.a)(b,2),p=h[0],O=h[1];return Object(G.jsxs)(F.a,{onSubmit:function(e){e.preventDefault(),t(c,d,p)},children:[Object(G.jsxs)(F.a.Group,{onChange:function(e){i(e.target.value)},className:"mb-3",controlId:"formBasicEmail",children:[Object(G.jsx)(F.a.Label,{children:"Email address"}),Object(G.jsx)(F.a.Control,{defaultValue:c,type:"email",placeholder:"Enter email"})]}),Object(G.jsxs)(F.a.Group,{onChange:function(e){j(e.target.value)},className:"mb-3",controlId:"formBasicPassword",children:[Object(G.jsx)(F.a.Label,{children:"Password"}),Object(G.jsx)(F.a.Control,{defaultValue:d,type:"password",placeholder:"Password"})]}),Object(G.jsxs)(P,{children:[Object(G.jsx)(T.a,{variant:"primary",type:"submit",style:{marginRight:"30px"},children:"Login"}),Object(G.jsxs)("div",{children:[Object(G.jsx)("label",{htmlFor:"rememberMeCheckbox",children:"Remember me"}),Object(G.jsx)("input",{onChange:function(e){return O(e.target.value)},value:p,id:"rememberMeCheckbox",type:"checkbox"})]}),Object(G.jsx)(T.a,{variant:"link",href:"/register",role:"button",children:"Register"})]})]})},z=n(102),A=B.a.div(m||(m=Object(D.a)(["\n  position: sticky !important;\n  display: flex;\n  justify-content: center;\n  width: 200px;\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 100;\n  top: 50%;\n"]))),J=function(){return Object(G.jsxs)(A,{children:[Object(G.jsx)(z.a,{animation:"grow"}),Object(G.jsx)(z.a,{animation:"grow"}),Object(G.jsx)(z.a,{animation:"grow"})]})},M=n(43),H=n(103),V=Object(B.a)(H.a)(g||(g=Object(D.a)(["\n  max-width: 75%;\n  margin-top: 10%;\n\n  & input {\n    width: 400px;\n  }\n"]))),Y=function(e){var t=e.children;Object(M.a)(e,["children"]);return Object(G.jsx)(V,{children:t})},K=function(){var e=Object(l.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.login})),a=Object(i.c)((function(e){return{email:e.register.email,password:e.register.password}})),s=Object(r.useState)(!1),c=Object(u.a)(s,2),o=c[0],d=c[1];Object(r.useEffect)((function(){if(n.token){d(!0);var t=setTimeout((function(){d(!1),e.push("/")}),1e3);return function(){clearTimeout(t)}}}),[n.token,e]);return Object(G.jsxs)(Y,{children:[Object(G.jsx)("h3",{children:"Login"}),Object(G.jsx)(_,{onSubmit:function(e,n,r){t(function(e,t,n){return function(){var r=Object(h.a)(j.a.mark((function r(a){var s,c;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a(N()),r.next=4,w.login(e,t);case 4:s=r.sent,(c=Object(b.a)({},s.data)).email=e,c.password=t,n&&y(c.email,c.password,c.token),a(U(c)),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),a(I(r.t0.response.data.error));case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(e){return r.apply(this,arguments)}}()}(e,n,r))},registeredData:a}),Object(G.jsxs)("div",{style:{padding:"30px 0px"},children:[Object(G.jsx)("p",{children:"Login mock data "}),Object(G.jsx)("p",{children:"email: eve.holt@reqres.in"}),Object(G.jsx)("p",{children:"password: cityslicka"})]}),n.isLoading&&Object(G.jsx)(J,{}),n.error&&Object(G.jsx)(q.a,{variant:"danger",children:n.error}),o&&Object(G.jsx)(q.a,{variant:"success",children:"Successfully logged in!"})]})},Q=Object(p.b)({initialState:{email:"",password:"",token:"",isLoading:!1,error:null,message:"",id:0},name:"register",reducers:{registerRequest:function(e){e.isLoading=!0,e.error=null},registerSuccess:function(e,t){e.isLoading=!1,e.error=null,e.token=t.payload.token,e.email=t.payload.email,e.password=t.payload.password,e.id=t.payload.id},registerFailure:function(e,t){e.isLoading=!1,e.error=t.payload}}}),W=Q.actions,X=W.registerRequest,Z=W.registerSuccess,$=W.registerFailure,ee=Q.reducer,te=function(e){var t=e.onSubmit,n=Object(r.useState)(""),a=Object(u.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(""),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(r.useState)({}),b=Object(u.a)(j,2),h=b[0],p=b[1];return Object(G.jsxs)(F.a,{onSubmit:function(e){e.preventDefault();var n=function(e,t){var n={};return e.length||(n.email="Email is required"),t.length<6&&(n.password="Password is too small"),t.length||(n.password="Password is required"),n}(s,l);Object.keys(n).length?p(n):t(s,l)},children:[Object(G.jsxs)(F.a.Group,{onChange:function(e){c(e.target.value)},className:"mb-3",controlId:"formBasicEmail",children:[Object(G.jsx)(F.a.Label,{children:"Email address"}),Object(G.jsx)(F.a.Control,{name:"email",type:"email",placeholder:"Enter email",isInvalid:!!h.email}),Object(G.jsx)(F.a.Control.Feedback,{type:"invalid",children:h.email})]}),Object(G.jsxs)(F.a.Group,{onChange:function(e){d(e.target.value)},className:"mb-3",controlId:"formBasicPassword",children:[Object(G.jsx)(F.a.Label,{children:"Password"}),Object(G.jsx)(F.a.Control,{isInvalid:!!h.password,name:"password",type:"password",placeholder:"Password"}),Object(G.jsx)(F.a.Control.Feedback,{type:"invalid",children:h.password})]}),Object(G.jsx)(T.a,{variant:"primary",type:"submit",style:{marginRight:"30px"},children:"Register"}),Object(G.jsx)(T.a,{variant:"link",href:"/login",role:"button",children:"Go back to login page"})]})},ne=function(){var e=Object(l.g)(),t=Object(i.b)(),n=Object(i.c)((function(e){return e.register})),a=Object(r.useState)(!1),s=Object(u.a)(a,2),c=s[0],o=s[1];return Object(r.useEffect)((function(){if(n.id){o(!0);var t=setTimeout((function(){o(!1),e.push("/login")}),1e3);return function(){clearTimeout(t)}}}),[n.id,e]),Object(G.jsxs)(Y,{children:[Object(G.jsx)("h3",{children:"Register"}),Object(G.jsx)(te,{onSubmit:function(e,n){t(function(e,t){return function(){var n=Object(h.a)(j.a.mark((function n(r){var a,s;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(X()),n.next=4,w.register(e,t);case 4:a=n.sent,(s=Object(b.a)({},a.data)).email=e,s.password=t,r(Z(s)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),r($(n.t0.response.data.error));case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}(e,n))}}),Object(G.jsxs)("div",{style:{padding:"30px 0px"},children:[Object(G.jsx)("p",{children:"Register mock data "}),Object(G.jsx)("p",{children:"email: eve.holt@reqres.in"}),Object(G.jsx)("p",{children:"password: pistol"})]}),n.error&&Object(G.jsx)(q.a,{variant:"danger",children:n.error}),c&&Object(G.jsx)(q.a,{variant:"success",children:"You have been successfully registered!"}),n.isLoading&&Object(G.jsx)(J,{})]})},re=n(34),ae=Object(p.b)({initialState:{data:[],isLoading:!1,error:null,total:0},name:"users",reducers:{usersRequest:function(e){e.isLoading=!0,e.error=null},usersSuccess:function(e,t){e.data=[].concat(Object(re.a)(e.data),Object(re.a)(t.payload.data)),e.isLoading=!1,e.error=null,e.total=t.payload.total_pages},userSuccess:function(e,t){e.data=[].concat(Object(re.a)(e.data),Object(re.a)(t.payload)),e.isLoading=!1,e.error=null},usersFailure:function(e,t){e.isLoading=!1,e.error=t.payload},userDelete:function(e,t){e.isLoading=!1,e.error=null,e.data=e.data.filter((function(e){return e.id!==t.payload}))},userUpdate:function(e,t){e.isLoading=!1,e.error=null;var n=Object(re.a)(e.data),r=n.findIndex((function(e){return e.id===t.payload.id})),a=n[r];n[r]=Object(b.a)(Object(b.a)({},a),t.payload),e.data=n},usersClearOnUnmount:function(e){e.data=[],e.isLoading=!1,e.error=null,e.total=0}}}),se=ae.actions,ce=se.usersRequest,ie=se.userSuccess,oe=se.usersSuccess,le=se.usersFailure,ue=se.userDelete,de=se.userUpdate,je=se.usersClearOnUnmount,be=ae.reducer,he=n(104),pe=(n(97),function(e){var t=e.children,n=e.onCreateUser;Object(M.a)(e,["children","onCreateUser"]);return Object(G.jsxs)(he.a,{striped:!0,bordered:!0,hover:!0,children:[Object(G.jsx)("thead",{children:Object(G.jsxs)("tr",{children:[Object(G.jsx)("th",{className:"th",children:"id"}),Object(G.jsx)("th",{className:"th",children:"Email"}),Object(G.jsx)("th",{className:"th",children:"First Name"}),Object(G.jsx)("th",{className:"th",children:"Last Name"}),Object(G.jsx)("th",{className:"th",children:"Job"}),Object(G.jsx)("th",{className:"th",children:"Avatar"}),Object(G.jsx)("th",{className:"th",children:Object(G.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(G.jsx)(T.a,{style:{textAlign:"center"},onClick:function(){return n()},className:"user-button",variant:"primary",children:"Create user"})})})]})}),Object(G.jsx)("tbody",{children:t})]})}),Oe=B.a.div(v||(v=Object(D.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n  .user-button {\n    width: 100px;\n  }\n\n  .user-button:not(:last-of-type) {\n    margin-bottom: 20px;\n  }\n"]))),fe=a.a.forwardRef((function(e,t){var n=e.user,r=e.onUserDelete,a=e.onUserEdit;return Object(G.jsxs)("tr",{ref:t,children:[Object(G.jsx)("td",{children:n.id}),Object(G.jsx)("td",{children:n.email||"No email"}),Object(G.jsx)("td",{children:n.first_name}),Object(G.jsx)("td",{children:n.last_name||"No last name"}),Object(G.jsx)("td",{children:n.job||"no job"}),Object(G.jsx)("td",{children:n.avatar?Object(G.jsx)("img",{src:n.avatar,alt:"".concat(n.first_name," ").concat(n.last_name," avatar"),height:"50px",width:"50px"}):"no avatar"}),Object(G.jsx)("td",{children:Object(G.jsxs)(Oe,{children:[Object(G.jsx)(T.a,{onClick:function(){return a(n.id)},className:"user-button",variant:"primary",children:"Edit"}),Object(G.jsx)(T.a,{onClick:function(){return r(n.id)},className:"user-button",variant:"danger",children:"Delete"})]})})]})})),xe=n(106),me=n(105),ge=n(66),ve=(n(98),function(e){var t=e.show,n=e.onClose,a=e.onSubmit,s=e.userData,c=e.userId,i=Object(r.useState)(s.first_name||""),o=Object(u.a)(i,2),l=o[0],d=o[1],j=Object(r.useState)(s.job||""),b=Object(u.a)(j,2),h=b[0],p=b[1],O=Object(r.useState)({}),f=Object(u.a)(O,2),x=f[0],m=f[1];Object(r.useEffect)((function(){var e={};l||(e.name="Name is required"),l.length>10&&(e.name="Name can't be longer than 10 chars"),h.length>10&&(e.job="Job description can't be longer than 10 chars"),m(e)}),[l,h]);return Object(G.jsx)(G.Fragment,{children:Object(G.jsxs)(xe.a,{show:t,onHide:n,children:[Object(G.jsx)(xe.a.Header,{closeButton:!0,children:Object(G.jsx)(xe.a.Title,{children:c?"Edit user":"Add new user"})}),Object(G.jsxs)(xe.a.Body,{children:[Object(G.jsxs)(me.a,{className:"mb-3",children:[Object(G.jsx)(me.a.Text,{id:"inputGroup-sizing-default",children:c?"Edit user":"Add new user"}),Object(G.jsx)(ge.a,{onChange:function(e){return d(e.target.value)},value:l,"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",isInvalid:!!x.name}),Object(G.jsx)(ge.a.Feedback,{type:"invalid",children:x.name})]}),Object(G.jsx)("br",{}),Object(G.jsxs)(me.a,{className:"mb-3",children:[Object(G.jsx)(me.a.Text,{id:"inputGroup-sizing-default",children:"New job"}),Object(G.jsx)(ge.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return p(e.target.value)},value:h,isInvalid:!!x.job}),Object(G.jsx)(ge.a.Feedback,{type:"invalid",children:x.job})]})]}),Object(G.jsxs)(xe.a.Footer,{children:[Object(G.jsx)(T.a,{variant:"secondary",onClick:n,children:"Close"}),Object(G.jsx)(T.a,{variant:"primary",onClick:function(){x.length||a({name:l,job:h})},children:"Save Changes"})]})]})})}),we=function(e){var t=e.authorized,n=Object(l.g)(),a=Object(i.b)(),s=Object(i.c)((function(e){return e.users})),c=Object(r.useState)(1),o=Object(u.a)(c,2),d=o[0],b=o[1],p=Object(r.useState)(!1),O=Object(u.a)(p,2),f=O[0],x=O[1],m=Object(r.useState)(null),g=Object(u.a)(m,2),v=g[0],y=g[1];Object(r.useEffect)((function(){a(function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n){var r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(ce()),t.next=4,w.getUsers(e);case 4:r=t.sent,n(oe(r.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n(le(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(d))}),[a,d]);var C=Object(r.useRef)(),L=Object(r.useCallback)((function(e){s.isLoading||(C.current&&C.current.disconnect(),C.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d<s.total&&0!==s.total&&b((function(e){return e+1}))})),e&&C.current.observe(e))}),[s.isLoading,d,s.total]),N=function(){x(!1),y(null)},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;x(!0),y(e)},R=function(e){a(function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(ce()),t.next=4,w.deleteUser(e);case 4:if(204!==t.sent.status){t.next=9;break}n(ue(e)),t.next=10;break;case 9:throw new Error("There was an error deleting user");case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),n(le(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()}(e))};return t?Object(G.jsxs)(Y,{fluid:!0,children:[s.isLoading&&Object(G.jsx)(J,{}),Object(G.jsx)("div",{style:{display:"flex",marginBottom:"20px",justifyContent:"flex-end"},children:Object(G.jsx)(T.a,{onClick:function(){a(function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{S()&&k(),t(E())}catch(n){t(I(n.message))}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a(je()),n.push("/login")},children:"Logout"})}),Object(G.jsx)(pe,{onCreateUser:U,children:s.data.map((function(e,t,n){return t+1===n.length?Object(G.jsx)(fe,{ref:L,user:e,onUserDelete:R,onUserEdit:U},e.id):Object(G.jsx)(fe,{user:e,onUserDelete:R,onUserEdit:U},e.id)}))}),f&&Object(G.jsx)(ve,{show:f,onClose:N,onSubmit:function(e){var t,n;a(v?(t=v,n=e,function(){var e=Object(h.a)(j.a.mark((function e(r){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(ce()),e.next=4,w.updateUser(t,n);case 4:a=e.sent,(s=a.data).first_name=s.name,s.id=t,r(de(s)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r(le(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(h.a)(j.a.mark((function t(n){var r,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(ce()),t.next=4,w.createUser(e);case 4:r=t.sent,(a=r.data).first_name=a.name,n(ie([a])),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(le(t.t0.message));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e)),N()},userData:s.data.find((function(e){return e.id===v}))||{},userId:v}),s.error&&Object(G.jsx)(q.a,{variant:"danger",children:s.error})]}):Object(G.jsx)(l.a,{to:"/login"})};var ye=function(){var e=Object(i.c)((function(e){return Boolean(e.login.token)})),t=S();return Object(G.jsx)(o.a,{children:Object(G.jsxs)(l.d,{children:[Object(G.jsx)(l.b,{exact:!0,path:"/",children:Object(G.jsx)(we,{authorized:e||t})}),Object(G.jsx)(l.b,{path:"/login",children:Object(G.jsx)(K,{})}),Object(G.jsx)(l.b,{path:"/register",children:Object(G.jsx)(ne,{})})]})})},ke=Object(p.a)({reducer:{users:be,register:ee,login:R}});c.a.render(Object(G.jsx)(a.a.StrictMode,{children:Object(G.jsx)(i.a,{store:ke,children:Object(G.jsx)(ye,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.fb26554b.chunk.js.map