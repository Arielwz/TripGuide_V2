(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{121:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(11),s=a.n(r),i=(a(129),a(130),a(10)),o=a(9),l=a.n(o),j=a(18),b=a(14),u=a(3),d=[];var p=function(e){var t=e.trip;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"card",id:"card-info",children:[Object(u.jsx)("img",{className:"card-img-top",src:t.img,alt:"trip"}),Object(u.jsx)("p",{className:"card-title",children:t.name}),Object(u.jsxs)("p",{className:"card-content",children:["Location: ",t.location]}),Object(u.jsx)("p",{className:"card-content",children:t.content}),Object(u.jsxs)("p",{className:"card-content",children:["Tags:",t.tag]}),Object(u.jsxs)("p",{className:"card-text",id:"credit-info",children:["Image by ",t.credit]})]}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return e=t,d.push(e),localStorage.setItem("saveTrip",JSON.stringify(d)),void JSON.parse(localStorage.getItem("saveTrip"));var e},children:"save"})]})};function h(){var e=JSON.parse(localStorage.getItem("saveTrip"));return e?Object(u.jsx)("div",{children:e.map((function(e){return Object(u.jsx)(p,{trip:e})}))}):"Empty save."}var m=a(23),O=a(12);var x=function(e){return e.trips?Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-6 col-sm",id:"card-display",children:e.selectedTripObj?Object(u.jsx)(p,{trip:e.selectedTripObj},e.trip):e.trips.map((function(e){return Object(u.jsx)("div",{className:"card-deck",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)(p,{trip:e},e.id)})})}))})})}):null},f=a(123),g=(a(383),function(e){var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)([]),i=Object(b.a)(s,2),o=i[0],d=i[1],p=Object(n.useState)(0),h=Object(b.a)(p,2),m=h[0],O=h[1],g=Object(n.useState)(""),v=Object(b.a)(g,2),N=v[0],y=v[1],S=Object(n.useMemo)((function(){return null===c||void 0===c?void 0:c.find((function(e){return e.tag===N}))}),[N,c]);return Object(n.useEffect)((function(){(function(){var t=Object(j.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/getTrips?searchKey=".concat(e.searchKey,"&page=").concat(m));case 2:return a=t.sent,t.next=5,a.json();case 5:(n=t.sent)&&n.success&&r(n.trips);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.searchKey,m]),Object(n.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./countData");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,d(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{textAlign:"center",fontWeight:"bold",margin:"35px 0 20px 0"},children:"Find Your Favorite Trips!"}),Object(u.jsx)("label",{htmlFor:"trip-select",children:"Filter by tag:"}),Object(u.jsxs)("select",{name:"trips",id:"trips-select",onChange:function(e){y(e.target.value)},children:[Object(u.jsx)("option",{value:"all",children:"All"}),null===c||void 0===c?void 0:c.map((function(e){return Object(u.jsx)("option",{value:e.tag,children:e.tag},e)}))]}),Object(u.jsx)(x,{trips:c,selectedTripObj:S}),Object(u.jsx)("div",{className:"first",children:Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(f.Pagination,{layout:"prev, pager, next",total:o.amount,pageSize:6,onCurrentChange:function(e){return O(e)}})})})]})}),v=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(g,{searchKey:e.searchKey})})};function N(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(b.a)(s,2),d=o[0],p=o[1];return Object(u.jsxs)("div",{className:"upload",children:[Object(u.jsx)("br",{}),Object(u.jsx)("header",{className:"col-md-12 col-sm-12",children:Object(u.jsx)("h1",{className:"create-info",style:{fontSize:"40px"},children:"Create a new Trip"})}),Object(u.jsxs)("main",{className:"col-6",children:[!!d&&Object(u.jsx)("div",{id:"error",className:"alert-danger",role:"alert",style:{marginBottom:"4px"},children:d}),Object(u.jsxs)("form",{id:"formCreate",onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(a){var n,r,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=new FormData,Object.entries(c).forEach((function(e){var t=Object(b.a)(e,2),a=t[0],c=t[1];n.append(a,c)})),t.next=5,fetch("/createTrip",{method:"POST",credentials:"same-origin",body:n});case 5:return r=t.sent,t.next=8,r.json();case 8:(s=t.sent)&&s.success?e.history.push("/"):p(s.message||"Upload failed!");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(u.jsxs)("label",{className:"form-label",children:["Title:"," ",Object(u.jsx)("input",{className:"form-control",type:"text",size:"45",placeholder:"The name of the place","aria-label":"input title",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{name:e.target.value}))}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{className:"form-label",children:["Location:",Object(u.jsx)("input",{className:"form-control",type:"text",size:"45",placeholder:"The address of the place","aria-label":"input location",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{location:e.target.value}))}})]}),Object(u.jsxs)("label",{className:"form-label",children:["Tag:",Object(u.jsx)("input",{className:"form-control",type:"text",size:"45",placeholder:"e.g. trail, mountain, park, flower, etc","aria-label":"input location",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{tag:e.target.value}))}})]}),Object(u.jsxs)("label",{className:"form-label",children:["Description:",Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{rows:"5",cols:"50",placeholder:"Description of the trip","aria-label":"input tag",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{content:e.target.value}))}})]}),Object(u.jsxs)("label",{className:"form-label",style:{marginTop:"5px"},children:["Photo:"," ",Object(u.jsx)("input",{className:"form-control",type:"file",style:{fontSize:"22px"},id:"image-upload","aria-label":"choose photo",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{image:e.target.files&&e.target.files[0]}))}}),Object(u.jsx)("div",{style:{fontSize:"16px",fontStyle:"italic",color:"#6E6F70",marginBottom:"10px"},children:"(Supported photo format: .jpeg, .jpg, .bmp, .png, .gif, etc.)"})]}),Object(u.jsxs)("label",{className:"form-label",children:["Photo Source:",Object(u.jsx)("input",{className:"form-control",type:"text",size:"45",placeholder:"The author or the source link of the photo","aria-label":"input photo author",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{credit:e.target.value}))}})]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",style:{marginTop:"22px"},"aria-label":"submit",children:"Create"}),Object(u.jsx)("div",{style:{fontSize:"18px",marginTop:"20px"},children:" Notice: please click on the last page to see your newly created post."})]})]})]})}a(121);var y=Object(O.g)((function(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(b.a)(s,2),d=o[0],p=o[1];return Object(u.jsxs)("div",{className:"/login",children:[Object(u.jsxs)("header",{className:"title",children:[Object(u.jsx)("h1",{style:{fontSize:"40px"},children:"Please Sign In "}),Object(u.jsx)("p",{children:"to upload posts and save your favourite posts"})]}),Object(u.jsx)("main",{className:"row",children:Object(u.jsxs)("div",{className:"col-sm-4 box border",children:[Object(u.jsxs)("form",{id:"formLogin",onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(a){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c.username&&c.password){t.next=4;break}return p("Username and password are required!"),t.abrupt("return");case 4:return p(""),t.next=7,fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 7:return n=t.sent,t.next=10,n.json();case 10:(r=t.sent)&&r.success?(e.onLogin&&e.onLogin(),e.history.push("/")):p(r.message||"Sign in failed!");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(u.jsxs)("div",{className:"mb-2",children:[Object(u.jsx)("label",{htmlFor:"InputUsername",className:"form-label",children:"Username"}),Object(u.jsx)("input",{type:"text",className:"form-control","aria-label":"input Username",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{username:e.target.value}))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"InputPassword",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control","aria-label":"input Password",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{password:e.target.value}))}})]}),!!d&&Object(u.jsx)("div",{id:"error",className:"alert-danger",role:"alert",style:{marginBottom:"4px"},children:d}),Object(u.jsx)("div",{className:"d-grid gap-2 mx-auto center-font",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-primary","aria-label":"sign in",children:"Sign In"})})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"center-font",children:Object(u.jsx)(m.b,{className:"btn btn-success secondfont",to:"/regist",role:"button","aria-label":"creat new account",children:"Creat New Account"})})]})})]})}));function S(e){var t=Object(n.useState)({}),a=Object(b.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),o=Object(b.a)(s,2),d=o[0],p=o[1];return Object(u.jsxs)("div",{className:"/regist",children:[Object(u.jsx)("header",{className:"title",children:Object(u.jsx)("h1",{style:{fontSize:"40px"},children:"Create New Account"})}),Object(u.jsx)("main",{className:"row",children:Object(u.jsxs)("div",{className:"col-sm-4 box border",children:[Object(u.jsxs)("form",{id:"formRegist",onSubmit:function(){var t=Object(j.a)(l.a.mark((function t(a){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c.username&&c.password){t.next=4;break}return p("Username and password required!"),t.abrupt("return");case 4:return p(""),t.next=7,fetch("/regist",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 7:return n=t.sent,t.next=10,n.json();case 10:(r=t.sent)&&r.success?e.history.push("/login"):p(r.message||"Sign up failed!");case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:[Object(u.jsxs)("div",{className:"mb-2",children:[Object(u.jsx)("label",{htmlFor:"InputUsername",className:"form-label",children:"Username"}),Object(u.jsx)("input",{type:"text",className:"form-control","aria-label":"input username",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{username:e.target.value}))}})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"InputPassword",className:"form-label",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control","aria-label":"input password",onChange:function(e){r(Object(i.a)(Object(i.a)({},c),{},{password:e.target.value}))}})]}),!!d&&Object(u.jsx)("div",{id:"error",className:"alert-danger",role:"alert",style:{marginBottom:"4px"},children:d}),Object(u.jsx)("div",{className:"d-grid gap-2 mx-auto center-font",children:Object(u.jsx)("button",{type:"submit",className:"btn btn-success","aria-label":"sign up",children:"Sign Up"})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"center-font",children:[Object(u.jsx)("p",{className:"secondfont",children:"Already have an account?"}),Object(u.jsx)(m.b,{className:"btn btn-primary secondfont",to:"/login",role:"button","aria-label":"sign in",children:"Sign In"})]})]})})]})}var w=Object(O.g)((function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),c=a[0],r=a[1];return Object(u.jsxs)("form",{className:"d-flex",role:"search",children:[Object(u.jsx)("input",{className:"form-control me-2",type:"search",style:{width:"220px",fontSize:"16px"},placeholder:"Search by any keywords","aria-label":"input search text",onChange:function(e){r(e.target.value)}}),Object(u.jsx)("button",{className:"btn btn-outline-light","aria-label":"Search",onClick:function(t){t.preventDefault(),e.onSearch&&e.onSearch(c)},children:"Search"})]})})),k=(a(388),Object(O.g)((function(e){var t=Object(O.f)();return console.log("Render NavigationComponent",t),Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(m.b,{className:"navbar-brand nav-logo","aria-label":"Homepage",to:"/",onClick:function(){var t=Object(j.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.onSearch(""),e.history.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Bay Area Trip Guide"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link"+("/"===t.pathname?" active":""),"aria-label":"View trips","aria-current":"page",onClick:function(){var t=Object(j.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.onSearch(""),e.history.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),to:"/list",children:"View Trips"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link"+("/upload"===t.pathname?" active":""),"aria-label":"upload","aria-current":"page",to:"/upload",children:"Upload"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(m.b,{className:"nav-link",to:"/saved","aria-label":"My Favourites","aria-current":"page",children:"My Favourites"})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(w,{onSearch:e.onSearch})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-success",type:"submit",style:{marginLeft:"30px"},"aria-label":"Sign In/ Logout",onClick:function(){var t=Object(j.a)(l.a.mark((function t(a){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=e.hasLogin,c=e.onLogout,n?c&&c():e.history.replace("/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:e.hasLogin?"Logout":"Sign In"})})]})]})})})));var C=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),o=s[0],d=s[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/checkSession");case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&a.success?c(!0):c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)(m.a,{children:[Object(u.jsx)(k,{hasLogin:a,onLogout:Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/logout");case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&a.success&&c(!1);case 7:case"end":return e.stop()}}),e)}))),onSearch:function(e){d(e)}}),Object(u.jsx)("div",{className:"container full-width",children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{path:"/login",children:Object(u.jsx)(y,{onLogin:function(){c(!0)}})}),Object(u.jsx)(O.a,{path:"/regist",component:S}),Object(u.jsx)(O.a,{path:"/upload",component:function(e){return a?Object(u.jsx)(N,Object(i.a)({},e)):(e.history.replace("/login"),null)}}),Object(u.jsx)(O.a,{path:"/saved",component:function(e){return a?Object(u.jsx)(h,Object(i.a)({},e)):(e.history.replace("/login"),null)}}),Object(u.jsx)(O.a,{path:"/",children:Object(u.jsx)(v,{searchKey:o})})]})})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[389,1,2]]]);
//# sourceMappingURL=main.61b77411.chunk.js.map